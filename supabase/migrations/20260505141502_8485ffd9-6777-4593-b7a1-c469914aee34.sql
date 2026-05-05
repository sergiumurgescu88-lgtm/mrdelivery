
-- Create atomic refund_credits function to prevent race conditions
CREATE OR REPLACE FUNCTION public.refund_credits(p_user_id uuid, p_amount integer)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  UPDATE profiles 
  SET credits = credits + p_amount
  WHERE user_id = p_user_id;
  
  IF NOT FOUND THEN
    RAISE EXCEPTION 'user_not_found';
  END IF;
END;
$$;

-- Revoke EXECUTE on SECURITY DEFINER functions from anon role
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, app_role) FROM anon;
REVOKE EXECUTE ON FUNCTION public.deduct_credits(uuid, integer) FROM anon;
REVOKE EXECUTE ON FUNCTION public.refund_credits(uuid, integer) FROM anon;
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM anon;
