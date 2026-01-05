-- Create atomic credit deduction function to prevent race conditions
CREATE OR REPLACE FUNCTION public.deduct_credits(p_user_id UUID, p_amount INTEGER)
RETURNS TABLE(remaining_credits INTEGER) 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_credits INTEGER;
BEGIN
  -- Atomic update with condition - only succeeds if enough credits
  UPDATE profiles 
  SET credits = credits - p_amount
  WHERE user_id = p_user_id AND credits >= p_amount
  RETURNING credits INTO v_credits;
  
  IF NOT FOUND THEN
    RAISE EXCEPTION 'insufficient_credits';
  END IF;
  
  RETURN QUERY SELECT v_credits;
END;
$$;

-- Make storage bucket private and update policies
UPDATE storage.buckets 
SET public = false 
WHERE id = 'generated-content';

-- Drop the overly permissive policy
DROP POLICY IF EXISTS "Anyone can view generated content" ON storage.objects;

-- Create owner-only read policy
CREATE POLICY "Users can view their own generated content" 
ON storage.objects FOR SELECT 
USING (bucket_id = 'generated-content' AND auth.uid()::text = (storage.foldername(name))[1]);