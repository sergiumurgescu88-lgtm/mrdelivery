
-- Fix: Restrict INSERT on user_roles to admins only
-- The existing "Admins can manage all roles" ALL policy uses USING which doesn't cover INSERT's WITH CHECK
-- We need a specific INSERT policy that restricts to admins

CREATE POLICY "Only admins can insert roles"
ON public.user_roles
FOR INSERT
TO authenticated
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
