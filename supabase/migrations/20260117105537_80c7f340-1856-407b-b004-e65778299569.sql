-- Block anonymous/public access to profiles table
-- This runs before user-specific policies to prevent enumeration attacks
CREATE POLICY "Block public access to profiles"
ON public.profiles
FOR SELECT
TO anon
USING (false);