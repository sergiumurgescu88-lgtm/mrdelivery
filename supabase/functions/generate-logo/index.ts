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

// Input validation constants
const MAX_PROMPT_LENGTH = 500;
const MAX_COMPANY_NAME_LENGTH = 100;
const MAX_STYLE_LENGTH = 50;

// Validate and sanitize string input
const validateStringInput = (
  value: unknown, 
  fieldName: string, 
  maxLength: number, 
  required: boolean = true
): { valid: boolean; error?: string; sanitized?: string } => {
  if (!value && !required) {
    return { valid: true, sanitized: '' };
  }
  if (!value || typeof value !== 'string') {
    return { valid: false, error: `${fieldName} is required and must be a string` };
  }
  const trimmed = value.trim();
  if (required && trimmed.length === 0) {
    return { valid: false, error: `${fieldName} cannot be empty` };
  }
  if (trimmed.length > maxLength) {
    return { valid: false, error: `${fieldName} must be ${maxLength} characters or less` };
  }
  return { valid: true, sanitized: trimmed };
};

serve(async (req) => {
  const corsHeaders = getCorsHeaders(req);
  
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    
    // Validate prompt
    const promptValidation = validateStringInput(body.prompt, 'Prompt', MAX_PROMPT_LENGTH);
    if (!promptValidation.valid) {
      return new Response(JSON.stringify({ error: promptValidation.error }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    
    // Validate company name
    const companyValidation = validateStringInput(body.companyName, 'Company name', MAX_COMPANY_NAME_LENGTH);
    if (!companyValidation.valid) {
      return new Response(JSON.stringify({ error: companyValidation.error }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    
    // Validate style (optional)
    const styleValidation = validateStringInput(body.style, 'Style', MAX_STYLE_LENGTH, false);
    if (!styleValidation.valid) {
      return new Response(JSON.stringify({ error: styleValidation.error }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    
    const prompt = promptValidation.sanitized!;
    const companyName = companyValidation.sanitized!;
    const style = styleValidation.sanitized || 'modern';
    
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

    // Atomic credit deduction - logo costs 2 credits - prevents race conditions
    const { data: creditResult, error: creditError } = await supabase.rpc('deduct_credits', {
      p_user_id: user.id,
      p_amount: 2
    });

    if (creditError) {
      console.log('Credit deduction failed:', creditError.message);
      return new Response(JSON.stringify({ error: 'Insufficient credits. Logo generation requires 2 credits.' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const enhancedPrompt = `${prompt}. Create a clean, professional logo that works well at different sizes. Centered composition on a clean white or transparent background. Vector-style, high quality, suitable for business use. Square format 1:1 aspect ratio. Ultra high resolution.`;

    console.log('Generating logo for user:', user.id, 'company:', companyName);

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
      
      // Refund credits on AI failure
      await supabase.from('profiles')
        .update({ credits: (creditResult?.[0]?.remaining_credits ?? 0) + 2 })
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
      // Refund credits if no image generated
      await supabase.from('profiles')
        .update({ credits: (creditResult?.[0]?.remaining_credits ?? 0) + 2 })
        .eq('user_id', user.id);
      
      return new Response(JSON.stringify({ error: 'Unable to generate content. Please try again.' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Log the transaction
    await supabase.from('credit_transactions').insert({
      user_id: user.id,
      amount: -2,
      type: 'usage',
      description: 'Logo generation'
    });

    await supabase.from('generated_logos').insert({
      user_id: user.id,
      company_name: companyName,
      prompt: prompt,
      image_url: imageUrl,
      style: style
    });

    console.log('Logo generated successfully for user:', user.id);

    return new Response(JSON.stringify({ imageUrl }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error: unknown) {
    console.error('Error in generate-logo function:', error);
    return new Response(JSON.stringify({ error: 'Unable to generate content. Please try again.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }
});
