-- Fix credit_transactions policies
DROP POLICY IF EXISTS "Users can view their own transactions" ON public.credit_transactions;
DROP POLICY IF EXISTS "Users can create their own transactions" ON public.credit_transactions;

CREATE POLICY "Authenticated users can view their own transactions"
ON public.credit_transactions
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Authenticated users can create their own transactions"
ON public.credit_transactions
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Fix generated_banners policies
DROP POLICY IF EXISTS "Users can view their own banners" ON public.generated_banners;
DROP POLICY IF EXISTS "Users can create their own banners" ON public.generated_banners;
DROP POLICY IF EXISTS "Users can update their own banners" ON public.generated_banners;
DROP POLICY IF EXISTS "Users can delete their own banners" ON public.generated_banners;

CREATE POLICY "Authenticated users can view their own banners"
ON public.generated_banners
FOR SELECT
TO authenticated
USING ((auth.uid() = user_id) OR (is_public = true));

CREATE POLICY "Authenticated users can create their own banners"
ON public.generated_banners
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Authenticated users can update their own banners"
ON public.generated_banners
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Authenticated users can delete their own banners"
ON public.generated_banners
FOR DELETE
TO authenticated
USING (auth.uid() = user_id);

-- Fix generated_logos policies
DROP POLICY IF EXISTS "Users can view their own logos" ON public.generated_logos;
DROP POLICY IF EXISTS "Users can create their own logos" ON public.generated_logos;
DROP POLICY IF EXISTS "Users can update their own logos" ON public.generated_logos;
DROP POLICY IF EXISTS "Users can delete their own logos" ON public.generated_logos;

CREATE POLICY "Authenticated users can view their own logos"
ON public.generated_logos
FOR SELECT
TO authenticated
USING ((auth.uid() = user_id) OR (is_public = true));

CREATE POLICY "Authenticated users can create their own logos"
ON public.generated_logos
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Authenticated users can update their own logos"
ON public.generated_logos
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Authenticated users can delete their own logos"
ON public.generated_logos
FOR DELETE
TO authenticated
USING (auth.uid() = user_id);

-- Fix generated_social_posts policies
DROP POLICY IF EXISTS "Users can view their own social posts" ON public.generated_social_posts;
DROP POLICY IF EXISTS "Users can create their own social posts" ON public.generated_social_posts;
DROP POLICY IF EXISTS "Users can update their own social posts" ON public.generated_social_posts;
DROP POLICY IF EXISTS "Users can delete their own social posts" ON public.generated_social_posts;

CREATE POLICY "Authenticated users can view their own social posts"
ON public.generated_social_posts
FOR SELECT
TO authenticated
USING ((auth.uid() = user_id) OR (is_public = true));

CREATE POLICY "Authenticated users can create their own social posts"
ON public.generated_social_posts
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Authenticated users can update their own social posts"
ON public.generated_social_posts
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Authenticated users can delete their own social posts"
ON public.generated_social_posts
FOR DELETE
TO authenticated
USING (auth.uid() = user_id);

-- Fix user_roles policies
DROP POLICY IF EXISTS "Users can view their own roles" ON public.user_roles;
DROP POLICY IF EXISTS "Admins can manage all roles" ON public.user_roles;

CREATE POLICY "Authenticated users can view their own roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Admins can manage all roles"
ON public.user_roles
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- Fix franchise_applications admin policies (keep public INSERT)
DROP POLICY IF EXISTS "Admins can view all applications" ON public.franchise_applications;
DROP POLICY IF EXISTS "Admins can update applications" ON public.franchise_applications;
DROP POLICY IF EXISTS "Admins can delete applications" ON public.franchise_applications;

CREATE POLICY "Admins can view all applications"
ON public.franchise_applications
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update applications"
ON public.franchise_applications
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete applications"
ON public.franchise_applications
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- Fix restaurant_audit_applications admin policies (keep public INSERT)
DROP POLICY IF EXISTS "Admins can view all audit applications" ON public.restaurant_audit_applications;
DROP POLICY IF EXISTS "Admins can update audit applications" ON public.restaurant_audit_applications;
DROP POLICY IF EXISTS "Admins can delete audit applications" ON public.restaurant_audit_applications;

CREATE POLICY "Admins can view all audit applications"
ON public.restaurant_audit_applications
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update audit applications"
ON public.restaurant_audit_applications
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete audit applications"
ON public.restaurant_audit_applications
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- Fix storage.objects policies
DROP POLICY IF EXISTS "Users can view their own generated content" ON storage.objects;
DROP POLICY IF EXISTS "Users can update their content" ON storage.objects;
DROP POLICY IF EXISTS "Users can delete their content" ON storage.objects;

CREATE POLICY "Authenticated users can view their own generated content"
ON storage.objects
FOR SELECT
TO authenticated
USING (bucket_id = 'generated-content' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Authenticated users can update their content"
ON storage.objects
FOR UPDATE
TO authenticated
USING (bucket_id = 'generated-content' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Authenticated users can delete their content"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'generated-content' AND auth.uid()::text = (storage.foldername(name))[1]);