import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { FileText, Clock, CheckCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  ro: {
    title: 'Audit Gratuit Restaurant',
    description: 'Completează formularul și primești un audit gratuit în maxim 6 ore!',
    locationName: 'Nume Locație',
    locationPlaceholder: 'ex: Pizzeria Roma',
    city: 'Oraș',
    cityPlaceholder: 'ex: București',
    phone: 'Număr Telefon',
    phonePlaceholder: 'ex: 0721234567',
    onDeliveryApps: 'Ești pe aplicațiile: Glovo, Wolt, Bolt?',
    hasMobileApp: 'Ai aplicație Android/iOS proprie?',
    yes: 'Da',
    no: 'Nu',
    submit: 'Trimite pentru Audit Gratuit',
    submitting: 'Se trimite...',
    successTitle: '🎉 Mulțumim!',
    successMessage: 'Vei primi un audit gratuit în maxim 6 ore.',
    errorTitle: 'Eroare',
    errorMessage: 'A apărut o eroare. Te rugăm să încerci din nou.',
    buttonText: 'Completează Formular',
    auditPromise: '⏰ Revenim cu un audit gratuit în maxim 6 ore!',
  },
  en: {
    title: 'Free Restaurant Audit',
    description: 'Fill out the form and get a free audit within 6 hours!',
    locationName: 'Location Name',
    locationPlaceholder: 'e.g: Roma Pizzeria',
    city: 'City',
    cityPlaceholder: 'e.g: New York',
    phone: 'Phone Number',
    phonePlaceholder: 'e.g: +1234567890',
    onDeliveryApps: 'Are you on apps: Glovo, Wolt, Bolt?',
    hasMobileApp: 'Do you have your own Android/iOS app?',
    yes: 'Yes',
    no: 'No',
    submit: 'Submit for Free Audit',
    submitting: 'Submitting...',
    successTitle: '🎉 Thank you!',
    successMessage: 'You will receive a free audit within 6 hours.',
    errorTitle: 'Error',
    errorMessage: 'An error occurred. Please try again.',
    buttonText: 'Fill Form',
    auditPromise: '⏰ We\'ll get back with a free audit within 6 hours!',
  },
  es: {
    title: 'Auditoría Gratuita',
    description: '¡Completa el formulario y recibe una auditoría gratis en máximo 6 horas!',
    locationName: 'Nombre del Local',
    locationPlaceholder: 'ej: Pizzería Roma',
    city: 'Ciudad',
    cityPlaceholder: 'ej: Madrid',
    phone: 'Número de Teléfono',
    phonePlaceholder: 'ej: +34612345678',
    onDeliveryApps: '¿Estás en las apps: Glovo, Wolt, Bolt?',
    hasMobileApp: '¿Tienes app propia Android/iOS?',
    yes: 'Sí',
    no: 'No',
    submit: 'Enviar para Auditoría Gratuita',
    submitting: 'Enviando...',
    successTitle: '🎉 ¡Gracias!',
    successMessage: 'Recibirás una auditoría gratuita en máximo 6 horas.',
    errorTitle: 'Error',
    errorMessage: 'Ocurrió un error. Por favor, intenta de nuevo.',
    buttonText: 'Completar Formulario',
    auditPromise: '⏰ ¡Te responderemos con una auditoría gratis en máximo 6 horas!',
  },
};

interface RestaurantAuditFormProps {
  trigger?: React.ReactNode;
}

export const RestaurantAuditForm: React.FC<RestaurantAuditFormProps> = ({ trigger }) => {
  const { language } = useLanguage();
  const t = translations[language] || translations.ro;
  const { toast } = useToast();
  
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    locationName: '',
    city: '',
    phone: '',
    onDeliveryApps: false,
    hasMobileApp: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.locationName.trim() || !formData.city.trim() || !formData.phone.trim()) {
      toast({
        title: t.errorTitle,
        description: t.errorMessage,
        variant: 'destructive',
      });
      return;
    }
    
    setLoading(true);
    
    try {
      const { error } = await supabase
        .from('restaurant_audit_applications')
        .insert({
          location_name: formData.locationName.trim().substring(0, 200),
          city: formData.city.trim().substring(0, 100),
          phone: formData.phone.trim().substring(0, 50),
          on_delivery_apps: formData.onDeliveryApps,
          has_mobile_app: formData.hasMobileApp,
        });

      if (error) throw error;

      setSubmitted(true);
      toast({
        title: t.successTitle,
        description: t.successMessage,
      });
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          locationName: '',
          city: '',
          phone: '',
          onDeliveryApps: false,
          hasMobileApp: false,
        });
        setSubmitted(false);
        setOpen(false);
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting audit form:', error);
      toast({
        title: t.errorTitle,
        description: t.errorMessage,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const defaultTrigger = (
    <Button className="bg-gradient-to-r from-primary via-secondary to-accent hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90 text-primary-foreground font-bold py-3 px-6 rounded-xl shadow-lg flex items-center gap-2">
      <FileText className="w-5 h-5" />
      {t.buttonText}
    </Button>
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || defaultTrigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 border-2 border-primary/40">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gradient-primary flex items-center gap-2">
            <FileText className="w-6 h-6 text-primary" />
            {t.title}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {t.description}
          </DialogDescription>
        </DialogHeader>
        
        {submitted ? (
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
            <h3 className="text-xl font-bold text-success mb-2">{t.successTitle}</h3>
            <p className="text-muted-foreground">{t.successMessage}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Location Name */}
            <div className="space-y-2">
              <Label htmlFor="locationName" className="text-foreground font-semibold">
                1. {t.locationName}
              </Label>
              <Input
                id="locationName"
                value={formData.locationName}
                onChange={(e) => setFormData({ ...formData, locationName: e.target.value })}
                placeholder={t.locationPlaceholder}
                className="bg-card border-border"
                maxLength={200}
                required
              />
            </div>

            {/* City */}
            <div className="space-y-2">
              <Label htmlFor="city" className="text-foreground font-semibold">
                2. {t.city}
              </Label>
              <Input
                id="city"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                placeholder={t.cityPlaceholder}
                className="bg-card border-border"
                maxLength={100}
                required
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground font-semibold">
                3. {t.phone}
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder={t.phonePlaceholder}
                className="bg-card border-border"
                maxLength={50}
                required
              />
            </div>

            {/* On Delivery Apps */}
            <div className="flex items-center justify-between p-3 bg-card rounded-lg border border-border">
              <Label htmlFor="onDeliveryApps" className="text-foreground font-semibold text-sm">
                4. {t.onDeliveryApps}
              </Label>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">{t.no}</span>
                <Switch
                  id="onDeliveryApps"
                  checked={formData.onDeliveryApps}
                  onCheckedChange={(checked) => setFormData({ ...formData, onDeliveryApps: checked })}
                />
                <span className="text-xs text-muted-foreground">{t.yes}</span>
              </div>
            </div>

            {/* Has Mobile App */}
            <div className="flex items-center justify-between p-3 bg-card rounded-lg border border-border">
              <Label htmlFor="hasMobileApp" className="text-foreground font-semibold text-sm">
                5. {t.hasMobileApp}
              </Label>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">{t.no}</span>
                <Switch
                  id="hasMobileApp"
                  checked={formData.hasMobileApp}
                  onCheckedChange={(checked) => setFormData({ ...formData, hasMobileApp: checked })}
                />
                <span className="text-xs text-muted-foreground">{t.yes}</span>
              </div>
            </div>

            {/* Audit Promise */}
            <div className="p-3 bg-success/10 border border-success/30 rounded-lg flex items-center gap-2">
              <Clock className="w-5 h-5 text-success flex-shrink-0" />
              <span className="text-sm text-success font-semibold">{t.auditPromise}</span>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90 text-primary-foreground font-bold py-3 rounded-xl shadow-lg"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  {t.submitting}
                </>
              ) : (
                <>
                  <CheckCircle className="w-5 h-5 mr-2" />
                  {t.submit}
                </>
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};
