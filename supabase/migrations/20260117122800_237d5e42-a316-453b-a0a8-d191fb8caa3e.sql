-- =============================================
-- FIX: business_cards - Restrict to authenticated users
-- =============================================
DROP POLICY IF EXISTS "Users can create their own business cards" ON public.business_cards;
DROP POLICY IF EXISTS "Users can delete their own business cards" ON public.business_cards;
DROP POLICY IF EXISTS "Users can update their own business cards" ON public.business_cards;
DROP POLICY IF EXISTS "Users can view their own business cards" ON public.business_cards;

CREATE POLICY "Users can create their own business cards"
ON public.business_cards FOR INSERT TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own business cards"
ON public.business_cards FOR DELETE TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own business cards"
ON public.business_cards FOR UPDATE TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can view their own business cards"
ON public.business_cards FOR SELECT TO authenticated
USING (auth.uid() = user_id);

-- =============================================
-- FIX: credit_transactions - Restrict to authenticated users
-- =============================================
DROP POLICY IF EXISTS "Users can create their own transactions" ON public.credit_transactions;
DROP POLICY IF EXISTS "Users can view their own transactions" ON public.credit_transactions;

CREATE POLICY "Users can create their own transactions"
ON public.credit_transactions FOR INSERT TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own transactions"
ON public.credit_transactions FOR SELECT TO authenticated
USING (auth.uid() = user_id);

-- =============================================
-- FIX: generated_banners - Restrict to authenticated users
-- =============================================
DROP POLICY IF EXISTS "Users can create their own banners" ON public.generated_banners;
DROP POLICY IF EXISTS "Users can delete their own banners" ON public.generated_banners;
DROP POLICY IF EXISTS "Users can update their own banners" ON public.generated_banners;
DROP POLICY IF EXISTS "Users can view their own banners" ON public.generated_banners;

CREATE POLICY "Users can create their own banners"
ON public.generated_banners FOR INSERT TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own banners"
ON public.generated_banners FOR DELETE TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own banners"
ON public.generated_banners FOR UPDATE TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can view their own banners"
ON public.generated_banners FOR SELECT TO authenticated
USING ((auth.uid() = user_id) OR (is_public = true));

-- =============================================
-- FIX: generated_logos - Restrict to authenticated users
-- =============================================
DROP POLICY IF EXISTS "Users can create their own logos" ON public.generated_logos;
DROP POLICY IF EXISTS "Users can delete their own logos" ON public.generated_logos;
DROP POLICY IF EXISTS "Users can update their own logos" ON public.generated_logos;
DROP POLICY IF EXISTS "Users can view their own logos" ON public.generated_logos;

CREATE POLICY "Users can create their own logos"
ON public.generated_logos FOR INSERT TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own logos"
ON public.generated_logos FOR DELETE TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own logos"
ON public.generated_logos FOR UPDATE TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can view their own logos"
ON public.generated_logos FOR SELECT TO authenticated
USING ((auth.uid() = user_id) OR (is_public = true));

-- =============================================
-- FIX: generated_social_posts - Restrict to authenticated users
-- =============================================
DROP POLICY IF EXISTS "Users can create their own social posts" ON public.generated_social_posts;
DROP POLICY IF EXISTS "Users can delete their own social posts" ON public.generated_social_posts;
DROP POLICY IF EXISTS "Users can update their own social posts" ON public.generated_social_posts;
DROP POLICY IF EXISTS "Users can view their own social posts" ON public.generated_social_posts;

CREATE POLICY "Users can create their own social posts"
ON public.generated_social_posts FOR INSERT TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own social posts"
ON public.generated_social_posts FOR DELETE TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own social posts"
ON public.generated_social_posts FOR UPDATE TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can view their own social posts"
ON public.generated_social_posts FOR SELECT TO authenticated
USING ((auth.uid() = user_id) OR (is_public = true));

-- =============================================
-- FIX: profiles - Restrict INSERT/UPDATE to authenticated users
-- =============================================
DROP POLICY IF EXISTS "Users can insert their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;

CREATE POLICY "Users can insert their own profile"
ON public.profiles FOR INSERT TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile"
ON public.profiles FOR UPDATE TO authenticated
USING (auth.uid() = user_id);

-- =============================================
-- FIX: user_roles - Restrict to authenticated users
-- =============================================
DROP POLICY IF EXISTS "Admins can manage all roles" ON public.user_roles;
DROP POLICY IF EXISTS "Users can view their own roles" ON public.user_roles;

CREATE POLICY "Admins can manage all roles"
ON public.user_roles FOR ALL TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Users can view their own roles"
ON public.user_roles FOR SELECT TO authenticated
USING (auth.uid() = user_id);

-- =============================================
-- FIX: franchise_applications - Restrict admin policies to authenticated
-- Keep INSERT open for public form submissions
-- =============================================
DROP POLICY IF EXISTS "Admins can delete applications" ON public.franchise_applications;
DROP POLICY IF EXISTS "Admins can update applications" ON public.franchise_applications;
DROP POLICY IF EXISTS "Admins can view all applications" ON public.franchise_applications;
DROP POLICY IF EXISTS "No direct public access to applications" ON public.franchise_applications;

CREATE POLICY "Admins can delete applications"
ON public.franchise_applications FOR DELETE TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update applications"
ON public.franchise_applications FOR UPDATE TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can view all applications"
ON public.franchise_applications FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- =============================================
-- FIX: restaurant_audit_applications - Restrict admin policies to authenticated
-- Keep INSERT open for public form submissions
-- =============================================
DROP POLICY IF EXISTS "Admins can delete audit applications" ON public.restaurant_audit_applications;
DROP POLICY IF EXISTS "Admins can update audit applications" ON public.restaurant_audit_applications;
DROP POLICY IF EXISTS "Admins can view all audit applications" ON public.restaurant_audit_applications;
DROP POLICY IF EXISTS "No direct public access to audit applications" ON public.restaurant_audit_applications;

CREATE POLICY "Admins can delete audit applications"
ON public.restaurant_audit_applications FOR DELETE TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update audit applications"
ON public.restaurant_audit_applications FOR UPDATE TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can view all audit applications"
ON public.restaurant_audit_applications FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- =============================================
-- FIX: storage.objects - Restrict to authenticated users
-- =============================================
DROP POLICY IF EXISTS "Users can delete their content" ON storage.objects;
DROP POLICY IF EXISTS "Users can update their content" ON storage.objects;
DROP POLICY IF EXISTS "Users can view their own generated content" ON storage.objects;
DROP POLICY IF EXISTS "Users can upload generated content" ON storage.objects;

CREATE POLICY "Users can upload generated content"
ON storage.objects FOR INSERT TO authenticated
WITH CHECK (bucket_id = 'generated-content' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can view their own generated content"
ON storage.objects FOR SELECT TO authenticated
USING (bucket_id = 'generated-content' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can update their content"
ON storage.objects FOR UPDATE TO authenticated
USING (bucket_id = 'generated-content' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can delete their content"
ON storage.objects FOR DELETE TO authenticated
USING (bucket_id = 'generated-content' AND auth.uid()::text = (storage.foldername(name))[1]);