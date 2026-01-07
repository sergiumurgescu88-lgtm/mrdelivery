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
  // Use exact match instead of startsWith to prevent subdomain bypass attacks
  const isAllowed = allowedOrigins.includes(origin) || allowedOrigins.includes('*');
  
  return {
    'Access-Control-Allow-Origin': isAllowed ? origin : '',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };
};

// Input validation constants
const MAX_PROMPT_LENGTH = 500;
const MIN_DIMENSION = 256;
const MAX_DIMENSION = 2048;

// Validate and sanitize prompt
const validatePrompt = (prompt: unknown): { valid: boolean; error?: string; sanitized?: string } => {
  if (!prompt || typeof prompt !== 'string') {
    return { valid: false, error: 'Prompt is required and must be a string' };
  }
  const trimmed = prompt.trim();
  if (trimmed.length === 0) {
    return { valid: false, error: 'Prompt cannot be empty' };
  }
  if (trimmed.length > MAX_PROMPT_LENGTH) {
    return { valid: false, error: `Prompt must be ${MAX_PROMPT_LENGTH} characters or less` };
  }
  return { valid: true, sanitized: trimmed };
};

// Validate dimensions
const validateDimension = (value: unknown, name: string): { valid: boolean; error?: string; sanitized?: number } => {
  const num = typeof value === 'number' ? value : parseInt(String(value), 10);
  if (isNaN(num) || num < MIN_DIMENSION || num > MAX_DIMENSION) {
    return { valid: false, error: `${name} must be between ${MIN_DIMENSION} and ${MAX_DIMENSION}` };
  }
  return { valid: true, sanitized: Math.floor(num) };
};

serve(async (req) => {
  const corsHeaders = getCorsHeaders(req);
  
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    
    // Validate prompt
    const promptValidation = validatePrompt(body.prompt);
    if (!promptValidation.valid) {
      return new Response(JSON.stringify({ error: promptValidation.error }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    const prompt = promptValidation.sanitized!;
    
    // Validate dimensions
    const widthValidation = validateDimension(body.width ?? 1024, 'Width');
    const heightValidation = validateDimension(body.height ?? 1024, 'Height');
    
    if (!widthValidation.valid) {
      return new Response(JSON.stringify({ error: widthValidation.error }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    if (!heightValidation.valid) {
      return new Response(JSON.stringify({ error: heightValidation.error }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    
    const width = widthValidation.sanitized!;
    const height = heightValidation.sanitized!;
    
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      console.error('LOVABLE_API_KEY is not configured');
      return new Response(JSON.stringify({ error: 'Service configuration error' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Get the user from the auth header
    const authHeader = req.headers.get('Authorization');
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Extract user token
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

    // Determine aspect ratio for the prompt
    const aspectRatio = width > height ? 'landscape' : width < height ? 'portrait' : 'square';
    const enhancedPrompt = `Create a professional marketing banner image. ${prompt}. The image should be in ${aspectRatio} format (${width}x${height}). Ultra high resolution, professional quality, suitable for advertising.`;

    console.log('Generating banner for user:', user.id, 'dimensions:', width, 'x', height);

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash-image",
        messages: [
          {
            role: "user",
            content: enhancedPrompt
          }
        ],
        modalities: ["image", "text"]
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
    const imageUrl = data.choices?.[0]?.message?.images?.[0]?.image_url?.url;

    if (!imageUrl) {
      // Refund credit if no image generated
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
      description: 'Banner generation'
    });

    // Save the banner to database
    await supabase.from('generated_banners').insert({
      user_id: user.id,
      prompt: prompt,
      image_url: imageUrl,
      width: width,
      height: height
    });

    console.log('Banner generated successfully for user:', user.id);

    return new Response(JSON.stringify({ imageUrl }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error: unknown) {
    console.error('Error in generate-banner function:', error);
    return new Response(JSON.stringify({ error: 'Unable to generate content. Please try again.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }
});
