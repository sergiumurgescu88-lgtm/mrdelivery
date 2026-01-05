import { useState } from 'react';
import { StudioLayout } from '@/components/creator-studio/StudioLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { 
  Sparkles, 
  Palette, 
  Wand2, 
  Download, 
  Loader2,
  RefreshCw,
  Building2
} from 'lucide-react';

const colorSchemes = [
  { id: 'blue', colors: ['#3B82F6', '#1D4ED8'], label: 'Blue' },
  { id: 'green', colors: ['#22C55E', '#15803D'], label: 'Green' },
  { id: 'purple', colors: ['#A855F7', '#7C3AED'], label: 'Purple' },
  { id: 'orange', colors: ['#F97316', '#EA580C'], label: 'Orange' },
  { id: 'red', colors: ['#EF4444', '#DC2626'], label: 'Red' },
  { id: 'teal', colors: ['#14B8A6', '#0D9488'], label: 'Teal' },
  { id: 'pink', colors: ['#EC4899', '#DB2777'], label: 'Pink' },
  { id: 'mono', colors: ['#1F2937', '#111827'], label: 'Monochrome' }
];

const AILogo = () => {
  const { profile, refreshProfile } = useAuth();
  const { t } = useLanguage();
  const [companyName, setCompanyName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('modern');
  const [selectedColors, setSelectedColors] = useState(colorSchemes[0]);
  const [loading, setLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const logoStyles = [
    { id: 'modern', ...t.creatorStudio.logo.styles.modern },
    { id: 'bold', ...t.creatorStudio.logo.styles.bold },
    { id: '3d', ...t.creatorStudio.logo.styles['3d'] },
    { id: 'vintage', ...t.creatorStudio.logo.styles.vintage },
    { id: 'playful', ...t.creatorStudio.logo.styles.playful },
    { id: 'professional', ...t.creatorStudio.logo.styles.professional }
  ];

  const selectedStyleObj = logoStyles.find(s => s.id === selectedStyle) || logoStyles[0];

  const handleGenerate = async () => {
    if (!companyName.trim()) {
      toast.error('Please enter your company name');
      return;
    }
    
    if (!profile || profile.credits < 2) {
      toast.error('Insufficient credits. Logo generation requires 2 credits.');
      return;
    }

    setLoading(true);
    setGeneratedImage(null);

    const prompt = `Create a ${selectedStyle} style logo for a company called "${companyName}". ${description ? `The company is: ${description}.` : ''} Use ${selectedColors.label.toLowerCase()} color scheme. The logo should be professional, memorable, and work well at different sizes. Clean background.`;

    try {
      const { data, error } = await supabase.functions.invoke('generate-logo', {
        body: { 
          prompt,
          companyName,
          style: selectedStyle
        }
      });

      if (error) throw error;

      if (data.error) {
        toast.error(data.error);
        return;
      }

      setGeneratedImage(data.imageUrl);
      toast.success('Logo generated successfully!');
      await refreshProfile();
    } catch (error: any) {
      console.error('Generation error:', error);
      toast.error('Failed to generate logo. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (generatedImage) {
      const link = document.createElement('a');
      link.href = generatedImage;
      link.download = `${companyName.replace(/\s+/g, '-').toLowerCase()}-logo-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <StudioLayout>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Controls */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-extrabold text-foreground mb-2 flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-primary-foreground" />
              </div>
              {t.creatorStudio.logo.title}
            </h1>
            <p className="text-muted-foreground">
              {t.creatorStudio.logo.description}
            </p>
          </div>

          <div className="bg-card rounded-2xl border border-border p-6 space-y-5">
            {/* Company Name */}
            <div className="space-y-2">
              <Label htmlFor="companyName" className="text-foreground font-semibold flex items-center gap-2">
                <Building2 className="w-4 h-4 text-primary" />
                {t.creatorStudio.logo.restaurantName}
              </Label>
              <Input
                id="companyName"
                placeholder={t.creatorStudio.logo.restaurantNamePlaceholder}
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="bg-background"
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description" className="text-foreground font-semibold flex items-center gap-2">
                <Wand2 className="w-4 h-4 text-primary" />
                {t.creatorStudio.logo.restaurantDescription}
              </Label>
              <Textarea
                id="description"
                placeholder={t.creatorStudio.logo.restaurantDescPlaceholder}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="min-h-[80px] bg-background"
              />
            </div>

            {/* Logo Style */}
            <div className="space-y-2">
              <Label className="text-foreground font-semibold">{t.creatorStudio.logo.logoStyle}</Label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {logoStyles.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setSelectedStyle(style.id)}
                    className={`p-3 rounded-xl border-2 transition-all text-left ${
                      selectedStyle === style.id
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="text-sm font-medium text-foreground">{style.label}</div>
                    <div className="text-xs text-muted-foreground">{style.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Color Scheme */}
            <div className="space-y-2">
              <Label className="text-foreground font-semibold flex items-center gap-2">
                <Palette className="w-4 h-4 text-primary" />
                {t.creatorStudio.logo.colorScheme}
              </Label>
              <div className="grid grid-cols-4 gap-2">
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
                      className="w-full h-8 rounded-lg mb-1"
                      style={{ 
                        background: `linear-gradient(135deg, ${scheme.colors[0]}, ${scheme.colors[1]})`
                      }}
                    />
                    <div className="text-xs text-center text-muted-foreground">{scheme.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Generate Button */}
            <Button
              onClick={handleGenerate}
              disabled={loading || !companyName.trim()}
              className="w-full h-12 bg-gradient-primary text-primary-foreground font-bold text-lg"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  {t.creatorStudio.logo.generating}
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  {t.creatorStudio.logo.generateBtn}
                </span>
              )}
            </Button>

            <p className="text-sm text-center text-muted-foreground">
              {profile?.credits ?? 0} {t.creatorStudio.logo.creditsRemaining}
            </p>
          </div>
        </div>

        {/* Right Column - Preview */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-foreground">{t.creatorStudio.logo.preview}</h2>
            {generatedImage && (
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => setGeneratedImage(null)}>
                  <RefreshCw className="w-4 h-4 mr-2" />
                  {t.creatorStudio.logo.clear}
                </Button>
                <Button size="sm" onClick={handleDownload} className="bg-gradient-primary text-primary-foreground">
                  <Download className="w-4 h-4 mr-2" />
                  {t.creatorStudio.logo.download}
                </Button>
              </div>
            )}
          </div>

          <div className="bg-card rounded-2xl border border-border overflow-hidden">
            <div className="relative flex items-center justify-center bg-muted aspect-square min-h-[400px]">
              {loading ? (
                <div className="text-center">
                  <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
                  <p className="text-muted-foreground">{t.creatorStudio.logo.designing}</p>
                </div>
              ) : generatedImage ? (
                <img 
                  src={generatedImage} 
                  alt="Generated Logo" 
                  className="w-full h-full object-contain p-8"
                />
              ) : (
                <div className="text-center p-8">
                  <Sparkles className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                  <p className="text-muted-foreground">{t.creatorStudio.logo.willAppear}</p>
                  <p className="text-sm text-muted-foreground/70 mt-2">
                    {selectedStyleObj.label} | {selectedColors.label}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </StudioLayout>
  );
};

export default AILogo;
