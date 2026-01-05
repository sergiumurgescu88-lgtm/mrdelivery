-- Create profiles table for user information
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  display_name TEXT,
  avatar_url TEXT,
  credits INTEGER NOT NULL DEFAULT 50,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- RLS policies for profiles
CREATE POLICY "Users can view their own profile" 
ON public.profiles FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile" 
ON public.profiles FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own profile" 
ON public.profiles FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Create generated_banners table
CREATE TABLE public.generated_banners (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT,
  prompt TEXT NOT NULL,
  image_url TEXT,
  format TEXT DEFAULT 'png',
  width INTEGER DEFAULT 1024,
  height INTEGER DEFAULT 1024,
  is_public BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.generated_banners ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own banners" 
ON public.generated_banners FOR SELECT 
USING (auth.uid() = user_id OR is_public = true);

CREATE POLICY "Users can create their own banners" 
ON public.generated_banners FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own banners" 
ON public.generated_banners FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own banners" 
ON public.generated_banners FOR DELETE 
USING (auth.uid() = user_id);

-- Create generated_logos table
CREATE TABLE public.generated_logos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  company_name TEXT NOT NULL,
  prompt TEXT NOT NULL,
  image_url TEXT,
  style TEXT DEFAULT 'modern',
  is_public BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.generated_logos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own logos" 
ON public.generated_logos FOR SELECT 
USING (auth.uid() = user_id OR is_public = true);

CREATE POLICY "Users can create their own logos" 
ON public.generated_logos FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own logos" 
ON public.generated_logos FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own logos" 
ON public.generated_logos FOR DELETE 
USING (auth.uid() = user_id);

-- Create generated_social_posts table
CREATE TABLE public.generated_social_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  text_content TEXT NOT NULL,
  prompt TEXT NOT NULL,
  background_color TEXT DEFAULT '#667eea',
  font_style TEXT DEFAULT 'modern',
  platform TEXT DEFAULT 'instagram',
  is_public BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.generated_social_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own social posts" 
ON public.generated_social_posts FOR SELECT 
USING (auth.uid() = user_id OR is_public = true);

CREATE POLICY "Users can create their own social posts" 
ON public.generated_social_posts FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own social posts" 
ON public.generated_social_posts FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own social posts" 
ON public.generated_social_posts FOR DELETE 
USING (auth.uid() = user_id);

-- Create business_cards table
CREATE TABLE public.business_cards (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  title TEXT,
  company TEXT,
  email TEXT,
  phone TEXT,
  website TEXT,
  template TEXT DEFAULT 'classic',
  color_scheme TEXT DEFAULT 'blue',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.business_cards ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own business cards" 
ON public.business_cards FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own business cards" 
ON public.business_cards FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own business cards" 
ON public.business_cards FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own business cards" 
ON public.business_cards FOR DELETE 
USING (auth.uid() = user_id);

-- Create credit_transactions table
CREATE TABLE public.credit_transactions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  amount INTEGER NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('purchase', 'usage', 'bonus', 'refund')),
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.credit_transactions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own transactions" 
ON public.credit_transactions FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own transactions" 
ON public.credit_transactions FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Create trigger function for updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for updated_at
CREATE TRIGGER update_profiles_updated_at
BEFORE UPDATE ON public.profiles
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_business_cards_updated_at
BEFORE UPDATE ON public.business_cards
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create function to handle new user signup and create profile
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, email, display_name, credits)
  VALUES (NEW.id, NEW.email, COALESCE(NEW.raw_user_meta_data->>'display_name', split_part(NEW.email, '@', 1)), 50);
  
  -- Also create a welcome credit transaction
  INSERT INTO public.credit_transactions (user_id, amount, type, description)
  VALUES (NEW.id, 50, 'bonus', 'Welcome bonus credits');
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Create trigger to auto-create profile on signup
CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW
EXECUTE FUNCTION public.handle_new_user();

-- Create storage bucket for generated images
INSERT INTO storage.buckets (id, name, public) VALUES ('generated-content', 'generated-content', true);

-- Storage policies
CREATE POLICY "Anyone can view generated content" 
ON storage.objects FOR SELECT 
USING (bucket_id = 'generated-content');

CREATE POLICY "Users can upload their content" 
ON storage.objects FOR INSERT 
WITH CHECK (bucket_id = 'generated-content' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can update their content" 
ON storage.objects FOR UPDATE 
USING (bucket_id = 'generated-content' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can delete their content" 
ON storage.objects FOR DELETE 
USING (bucket_id = 'generated-content' AND auth.uid()::text = (storage.foldername(name))[1]);