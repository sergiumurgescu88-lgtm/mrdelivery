import { useState } from 'react';
import { StudioLayout } from '@/components/creator-studio/StudioLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { 
  CreditCard, 
  Mail, 
  Phone, 
  Globe, 
  Building2,
  User,
  Loader2,
  Save
} from 'lucide-react';

const colorSchemes = [
  { id: 'blue', primary: '#3B82F6', secondary: '#1E40AF', label: 'Blue' },
  { id: 'green', primary: '#22C55E', secondary: '#166534', label: 'Green' },
  { id: 'purple', primary: '#A855F7', secondary: '#7C3AED', label: 'Purple' },
  { id: 'orange', primary: '#F97316', secondary: '#C2410C', label: 'Orange' },
  { id: 'red', primary: '#EF4444', secondary: '#B91C1C', label: 'Red' },
  { id: 'teal', primary: '#14B8A6', secondary: '#0F766E', label: 'Teal' },
  { id: 'dark', primary: '#1F2937', secondary: '#111827', label: 'Dark' },
  { id: 'gold', primary: '#F59E0B', secondary: '#B45309', label: 'Gold' }
];

const BusinessCards = () => {
  const { profile, user } = useAuth();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    company: '',
    email: '',
    phone: '',
    website: ''
  });
  const [selectedTemplate, setSelectedTemplate] = useState('classic');
  const [selectedColors, setSelectedColors] = useState(colorSchemes[0]);
  const [loading, setSaving] = useState(false);

  const templates = [
    { id: 'classic', label: t.creatorStudio.businessCards.templates.classic },
    { id: 'modern', label: t.creatorStudio.businessCards.templates.modern },
    { id: 'bold', label: t.creatorStudio.businessCards.templates.bold },
    { id: 'creative', label: t.creatorStudio.businessCards.templates.creative }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    if (!formData.name.trim()) {
      toast.error('Please enter your name');
      return;
    }
    
    if (!user) {
      toast.error('Please log in to save your business card');
      return;
    }

    setSaving(true);

    try {
      const { error } = await supabase.from('business_cards').insert({
        user_id: user.id,
        name: formData.name,
        title: formData.title,
        company: formData.company,
        email: formData.email,
        phone: formData.phone,
        website: formData.website,
        template: selectedTemplate,
        color_scheme: selectedColors.id
      });

      if (error) throw error;
      toast.success('Business card saved!');
    } catch (error: any) {
      console.error('Save error:', error);
      toast.error('Failed to save business card');
    } finally {
      setSaving(false);
    }
  };

  return (
    <StudioLayout>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Form */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-extrabold text-foreground mb-2 flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-warning rounded-xl flex items-center justify-center">
                <CreditCard className="w-7 h-7 text-primary-foreground" />
              </div>
              {t.creatorStudio.businessCards.title}
            </h1>
            <p className="text-muted-foreground">
              {t.creatorStudio.businessCards.description}
            </p>
          </div>

          <div className="bg-card rounded-2xl border border-border p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  {t.creatorStudio.businessCards.fullName}
                </Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="bg-background"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="title">{t.creatorStudio.businessCards.jobTitle}</Label>
                <Input
                  id="title"
                  placeholder="Marketing Director"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className="bg-background"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="company" className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-primary" />
                {t.creatorStudio.businessCards.company}
              </Label>
              <Input
                id="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                className="bg-background"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  {t.creatorStudio.businessCards.email}
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="bg-background"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  {t.creatorStudio.businessCards.phone}
                </Label>
                <Input
                  id="phone"
                  placeholder="+1 234 567 890"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="bg-background"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="website" className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary" />
                {t.creatorStudio.businessCards.website}
              </Label>
              <Input
                id="website"
                placeholder="www.company.com"
                value={formData.website}
                onChange={(e) => handleInputChange('website', e.target.value)}
                className="bg-background"
              />
            </div>

            {/* Template Selection */}
            <div className="space-y-2">
              <Label>{t.creatorStudio.businessCards.templateStyle}</Label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {templates.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => setSelectedTemplate(template.id)}
                    className={`p-3 rounded-xl border-2 transition-all text-center ${
                      selectedTemplate === template.id
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="text-sm font-medium text-foreground">{template.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Color Scheme */}
            <div className="space-y-2">
              <Label>{t.creatorStudio.businessCards.colorScheme}</Label>
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                {colorSchemes.map((scheme) => (
                  <button
                    key={scheme.id}
                    onClick={() => setSelectedColors(scheme)}
                    className={`p-2 rounded-xl border-2 transition-all ${
                      selectedColors.id === scheme.id
                        ? 'border-primary'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div 
                      className="w-full h-6 rounded-lg"
                      style={{ 
                        background: `linear-gradient(135deg, ${scheme.primary}, ${scheme.secondary})`
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>

            <Button
              onClick={handleSave}
              disabled={loading || !formData.name.trim()}
              className="w-full h-12 bg-gradient-primary text-primary-foreground font-bold"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  {t.creatorStudio.businessCards.saving}
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Save className="w-5 h-5" />
                  {t.creatorStudio.businessCards.saveCard}
                </span>
              )}
            </Button>
          </div>
        </div>

        {/* Right Column - Preview */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-foreground">{t.creatorStudio.businessCards.livePreview}</h2>

          <div className="bg-card rounded-2xl border border-border overflow-hidden p-6">
            {/* Business Card Preview */}
            <div 
              className="w-full aspect-[1.75/1] rounded-xl p-6 flex flex-col justify-between shadow-xl"
              style={{ 
                background: `linear-gradient(135deg, ${selectedColors.primary}, ${selectedColors.secondary})`
              }}
            >
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {formData.name || t.creatorStudio.businessCards.yourName}
                </h3>
                <p className="text-white/80 text-sm mt-1">
                  {formData.title || t.creatorStudio.businessCards.jobTitle}
                </p>
              </div>
              
              <div className="space-y-1">
                {formData.company && (
                  <p className="text-white font-semibold">{formData.company}</p>
                )}
                {formData.email && (
                  <p className="text-white/80 text-sm flex items-center gap-2">
                    <Mail className="w-3 h-3" /> {formData.email}
                  </p>
                )}
                {formData.phone && (
                  <p className="text-white/80 text-sm flex items-center gap-2">
                    <Phone className="w-3 h-3" /> {formData.phone}
                  </p>
                )}
                {formData.website && (
                  <p className="text-white/80 text-sm flex items-center gap-2">
                    <Globe className="w-3 h-3" /> {formData.website}
                  </p>
                )}
              </div>
            </div>

            {/* Back of card */}
            <div 
              className="w-full aspect-[1.75/1] rounded-xl mt-4 flex items-center justify-center shadow-xl"
              style={{ 
                background: `linear-gradient(135deg, ${selectedColors.secondary}, ${selectedColors.primary})`
              }}
            >
              <div className="text-center">
                <p className="text-3xl font-extrabold text-white">
                  {formData.company || t.creatorStudio.businessCards.company}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StudioLayout>
  );
};

export default BusinessCards;
