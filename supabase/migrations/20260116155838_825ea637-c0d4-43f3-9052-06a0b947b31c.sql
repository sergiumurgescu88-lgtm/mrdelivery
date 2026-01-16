-- Create franchise_applications table
CREATE TABLE public.franchise_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  country TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.franchise_applications ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert applications (public form)
CREATE POLICY "Anyone can submit franchise applications"
ON public.franchise_applications
FOR INSERT
WITH CHECK (true);

-- Only authenticated admins can view applications (we'll use service role for admin dashboard)
-- For now, deny direct SELECT access - admin will use service role key
CREATE POLICY "No direct public access to applications"
ON public.franchise_applications
FOR SELECT
USING (false);

-- Create index on email for faster lookups
CREATE INDEX idx_franchise_applications_email ON public.franchise_applications(email);

-- Create index on status for filtering
CREATE INDEX idx_franchise_applications_status ON public.franchise_applications(status);

-- Add trigger for updated_at
CREATE TRIGGER update_franchise_applications_updated_at
BEFORE UPDATE ON public.franchise_applications
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();