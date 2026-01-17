-- Drop the existing policy that has the overly permissive check
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;

-- Create new restrictive policy that only allows users to view their own profile
CREATE POLICY "Users can view their own profile" 
ON public.profiles 
FOR SELECT 
USING (auth.uid() = user_id);