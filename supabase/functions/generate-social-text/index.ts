import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// Dynamic CORS headers based on origin
const getAllowedOrigins = () => {
  const allowedOrigin = Deno.env.get('ALLOWED_ORIGIN') || '';
  return [
    'https://lovable.dev',
    'https://www.lovable.dev',
    allowedOrigin,
    // Allow localhost for development
    'http://localhost:5173',
    'http://localhost:3000',
  ].filter(Boolean);
};

const getCorsHeaders = (req: Request) => {
  const origin = req.headers.get('Origin') || '';
  const allowedOrigins = getAllowedOrigins();
  const isAllowed = allowedOrigins.some(allowed => origin.startsWith(allowed) || allowed === '*');
  
  return {
    'Access-Control-Allow-Origin': isAllowed ? origin : '',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };
};

// Allowed platforms - whitelist approach
const ALLOWED_PLATFORMS = ['instagram', 'facebook', 'linkedin'] as const;
type Platform = typeof ALLOWED_PLATFORMS[number];

// Validate platform against allowed list
const validatePlatform = (platform: unknown): { valid: boolean; error?: string; sanitized?: Platform } => {
  if (!platform || typeof platform !== 'string') {
    return { valid: true, sanitized: 'instagram' }; // Default to instagram
  }
  const normalized = platform.toLowerCase().trim() as Platform;
  if (!ALLOWED_PLATFORMS.includes(normalized)) {
    return { valid: false, error: `Platform must be one of: ${ALLOWED_PLATFORMS.join(', ')}` };
  }
  return { valid: true, sanitized: normalized };
};

serve(async (req) => {
  const corsHeaders = getCorsHeaders(req);
  
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    
    // Validate platform against whitelist
    const platformValidation = validatePlatform(body.platform);
    if (!platformValidation.valid) {
      return new Response(JSON.stringify({ error: platformValidation.error }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    const platform = platformValidation.sanitized!;
    
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      console.error('LOVABLE_API_KEY is not configured');
      return new Response(JSON.stringify({ error: 'Service configuration error' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const authHeader = req.headers.get('Authorization');
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const token = authHeader?.replace('Bearer ', '');
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);
    
    if (authError || !user) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Atomic credit deduction - prevents race conditions
    const { data: creditResult, error: creditError } = await supabase.rpc('deduct_credits', {
      p_user_id: user.id,
      p_amount: 1
    });

    if (creditError) {
      console.log('Credit deduction failed:', creditError.message);
      return new Response(JSON.stringify({ error: 'Insufficient credits' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const platformPrompts: Record<Platform, string> = {
      instagram: "Generate an inspiring, shareable quote or announcement for Instagram. Make it engaging, relatable, and suitable for a business account. Keep it under 150 characters. Just return the text, no quotes or formatting.",
      facebook: "Generate an engaging announcement or motivational quote for Facebook. Make it professional yet friendly. Keep it under 200 characters. Just return the text, no quotes or formatting.",
      linkedin: "Generate a professional, thought-provoking quote or announcement for LinkedIn. Make it business-appropriate and insightful. Keep it under 180 characters. Just return the text, no quotes or formatting."
    };

    const systemPrompt = platformPrompts[platform];

    console.log('Generating social text for user:', user.id, 'platform:', platform);

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          {
            role: "system",
            content: "You are a social media content expert. Generate compelling, shareable content."
          },
          {
            role: "user",
            content: systemPrompt
          }
        ]
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      // Refund credit on AI failure
      await supabase.from('profiles')
        .update({ credits: (creditResult?.[0]?.remaining_credits ?? 0) + 1 })
        .eq('user_id', user.id);
      
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limits exceeded, please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Payment required, please add funds." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      
      return new Response(JSON.stringify({ error: 'Unable to generate content. Please try again.' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const data = await response.json();
    const text = data.choices?.[0]?.message?.content;

    if (!text) {
      // Refund credit if no text generated
      await supabase.from('profiles')
        .update({ credits: (creditResult?.[0]?.remaining_credits ?? 0) + 1 })
        .eq('user_id', user.id);
      
      return new Response(JSON.stringify({ error: 'Unable to generate content. Please try again.' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Log the transaction
    await supabase.from('credit_transactions').insert({
      user_id: user.id,
      amount: -1,
      type: 'usage',
      description: `Social text generation (${platform})`
    });

    console.log('Social text generated successfully for user:', user.id);

    return new Response(JSON.stringify({ text }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error: unknown) {
    console.error('Error in generate-social-text function:', error);
    return new Response(JSON.stringify({ error: 'Unable to generate content. Please try again.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }
});
