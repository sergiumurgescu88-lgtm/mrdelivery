import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Send, CheckCircle2, Building2, User, Mail, Phone, Store, MessageSquare } from 'lucide-react';
import { z } from 'zod';

const formSchema = z.object({
  businessName: z.string().trim().min(1, "Business name is required").max(100),
  contactName: z.string().trim().min(1, "Contact name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(1, "Phone number is required").max(20),
  businessType: z.string().min(1, "Please select a business type"),
  message: z.string().trim().max(1000).optional(),
  acceptTerms: z.boolean().refine(val => val === true, "You must accept the terms"),
});

type FormData = z.infer<typeof formSchema>;

const CreatorInterestForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    businessType: '',
    message: '',
    acceptTerms: false,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const handleChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = formSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.errors.forEach(err => {
        const field = err.path[0] as keyof FormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Application Submitted!",
      description: "We'll review your information and get back to you within 24-48 hours.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="bg-card rounded-3xl border-2 border-border p-8 sm:p-12 text-center">
        <div className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-success" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-4">
          Application Received!
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Thank you for your interest in becoming a creator. Our team will review your 
          application and contact you within 24-48 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-3xl border-2 border-border p-8 sm:p-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
          Become a Creator
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Fill out the form below and our team will reach out to help you get started 
          with AI-powered content creation for your business.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Business Name */}
          <div className="space-y-2">
            <Label htmlFor="businessName" className="flex items-center gap-2 text-foreground">
              <Building2 className="w-4 h-4 text-primary" />
              Business Name *
            </Label>
            <Input
              id="businessName"
              placeholder="Your restaurant or business name"
              value={formData.businessName}
              onChange={(e) => handleChange('businessName', e.target.value)}
              className={errors.businessName ? 'border-destructive' : ''}
            />
            {errors.businessName && (
              <p className="text-sm text-destructive">{errors.businessName}</p>
            )}
          </div>

          {/* Contact Name */}
          <div className="space-y-2">
            <Label htmlFor="contactName" className="flex items-center gap-2 text-foreground">
              <User className="w-4 h-4 text-primary" />
              Contact Name *
            </Label>
            <Input
              id="contactName"
              placeholder="Your full name"
              value={formData.contactName}
              onChange={(e) => handleChange('contactName', e.target.value)}
              className={errors.contactName ? 'border-destructive' : ''}
            />
            {errors.contactName && (
              <p className="text-sm text-destructive">{errors.contactName}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2 text-foreground">
              <Mail className="w-4 h-4 text-primary" />
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className={errors.email ? 'border-destructive' : ''}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2 text-foreground">
              <Phone className="w-4 h-4 text-primary" />
              Phone Number *
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+40 7XX XXX XXX"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              className={errors.phone ? 'border-destructive' : ''}
            />
            {errors.phone && (
              <p className="text-sm text-destructive">{errors.phone}</p>
            )}
          </div>
        </div>

        {/* Business Type */}
        <div className="space-y-2">
          <Label className="flex items-center gap-2 text-foreground">
            <Store className="w-4 h-4 text-primary" />
            Business Type *
          </Label>
          <Select
            value={formData.businessType}
            onValueChange={(value) => handleChange('businessType', value)}
          >
            <SelectTrigger className={errors.businessType ? 'border-destructive' : ''}>
              <SelectValue placeholder="Select your business type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="restaurant">Restaurant</SelectItem>
              <SelectItem value="cafe">Café / Coffee Shop</SelectItem>
              <SelectItem value="fast-food">Fast Food</SelectItem>
              <SelectItem value="pizzeria">Pizzeria</SelectItem>
              <SelectItem value="bakery">Bakery / Pastry Shop</SelectItem>
              <SelectItem value="bar">Bar / Pub</SelectItem>
              <SelectItem value="food-truck">Food Truck</SelectItem>
              <SelectItem value="catering">Catering Service</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.businessType && (
            <p className="text-sm text-destructive">{errors.businessType}</p>
          )}
        </div>

        {/* Message */}
        <div className="space-y-2">
          <Label htmlFor="message" className="flex items-center gap-2 text-foreground">
            <MessageSquare className="w-4 h-4 text-primary" />
            Tell us about your business (optional)
          </Label>
          <Textarea
            id="message"
            placeholder="What kind of content are you looking to create? Any specific goals or challenges?"
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
            rows={4}
          />
        </div>

        {/* Terms Checkbox */}
        <div className="flex items-start gap-3">
          <Checkbox
            id="acceptTerms"
            checked={formData.acceptTerms}
            onCheckedChange={(checked) => handleChange('acceptTerms', checked as boolean)}
          />
          <div className="space-y-1">
            <Label 
              htmlFor="acceptTerms" 
              className={`text-sm cursor-pointer ${errors.acceptTerms ? 'text-destructive' : 'text-muted-foreground'}`}
            >
              I agree to receive communications about MrDelivery Creator Studio and accept the terms of service.
            </Label>
            {errors.acceptTerms && (
              <p className="text-sm text-destructive">{errors.acceptTerms}</p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full bg-gradient-primary text-primary-foreground font-bold py-6 text-lg rounded-xl shadow-glow hover:scale-[1.02] transition-transform"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Submit Application
            </>
          )}
        </Button>
      </form>
    </div>
  );
};

export default CreatorInterestForm;
