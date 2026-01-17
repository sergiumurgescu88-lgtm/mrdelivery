-- Drop existing SELECT policies that may conflict
DROP POLICY IF EXISTS "Block public access to profiles" ON public.profiles;
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;

-- Create a single, clear permissive policy that only allows authenticated users to see their own profile
-- auth.uid() returns NULL for unauthenticated users, so the condition will fail for public access
CREATE POLICY "Authenticated users can view their own profile"
ON public.profiles
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);