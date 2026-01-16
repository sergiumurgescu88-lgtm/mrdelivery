-- Create table for restaurant audit applications
CREATE TABLE public.restaurant_audit_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  location_name TEXT NOT NULL,
  city TEXT NOT NULL,
  phone TEXT NOT NULL,
  on_delivery_apps BOOLEAN NOT NULL DEFAULT false,
  has_mobile_app BOOLEAN NOT NULL DEFAULT false,
  status TEXT NOT NULL DEFAULT 'pending',
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.restaurant_audit_applications ENABLE ROW LEVEL SECURITY;

-- Anyone can submit an audit application (public form)
CREATE POLICY "Anyone can submit audit applications" 
ON public.restaurant_audit_applications 
FOR INSERT 
WITH CHECK (true);

-- Block public read access
CREATE POLICY "No direct public access to audit applications" 
ON public.restaurant_audit_applications 
FOR SELECT 
USING (false);

-- Admins can view all applications
CREATE POLICY "Admins can view all audit applications" 
ON public.restaurant_audit_applications 
FOR SELECT 
USING (has_role(auth.uid(), 'admin'::app_role));

-- Admins can update applications
CREATE POLICY "Admins can update audit applications" 
ON public.restaurant_audit_applications 
FOR UPDATE 
USING (has_role(auth.uid(), 'admin'::app_role));

-- Admins can delete applications
CREATE POLICY "Admins can delete audit applications" 
ON public.restaurant_audit_applications 
FOR DELETE 
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_restaurant_audit_applications_updated_at
BEFORE UPDATE ON public.restaurant_audit_applications
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();