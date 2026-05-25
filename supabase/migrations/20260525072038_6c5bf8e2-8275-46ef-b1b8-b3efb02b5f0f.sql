DROP POLICY IF EXISTS "Authenticated users can update their own profile" ON public.profiles;

CREATE POLICY "Authenticated users can update their own profile"
ON public.profiles
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Defense in depth: ensure credits column cannot be updated by clients
REVOKE UPDATE (credits) ON public.profiles FROM authenticated;
REVOKE UPDATE (credits) ON public.profiles FROM anon;