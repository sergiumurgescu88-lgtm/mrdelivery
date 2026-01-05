import { useState } from 'react';
import { StudioLayout } from '@/components/creator-studio/StudioLayout';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { 
  Type, 
  Wand2, 
  Loader2,
  Instagram,
  Facebook,
  Linkedin,
  Save,
  Sparkles
} from 'lucide-react';

const platforms = [
  { id: 'instagram', label: 'Instagram', icon: Instagram, size: '1080x1080' },
  { id: 'facebook', label: 'Facebook', icon: Facebook, size: '1200x630' },
  { id: 'linkedin', label: 'LinkedIn', icon: Linkedin, size: '1200x627' }
];

const fontStyles = [
  { id: 'modern', label: 'Modern', fontFamily: 'Plus Jakarta Sans' },
  { id: 'elegant', label: 'Elegant', fontFamily: 'Georgia' },
  { id: 'bold', label: 'Bold', fontFamily: 'Impact' },
  { id: 'playful', label: 'Playful', fontFamily: 'Comic Sans MS' }
];

const backgroundColors = [
  { id: 'gradient-blue', label: 'Ocean', colors: ['#667eea', '#764ba2'] },
  { id: 'gradient-sunset', label: 'Sunset', colors: ['#f093fb', '#f5576c'] },
  { id: 'gradient-forest', label: 'Forest', colors: ['#11998e', '#38ef7d'] },
  { id: 'gradient-fire', label: 'Fire', colors: ['#f12711', '#f5af19'] },
  { id: 'gradient-purple', label: 'Purple', colors: ['#8E2DE2', '#4A00E0'] },
  { id: 'gradient-dark', label: 'Dark', colors: ['#232526', '#414345'] },
  { id: 'solid-white', label: 'White', colors: ['#ffffff', '#f8f9fa'] },
  { id: 'solid-black', label: 'Black', colors: ['#000000', '#1a1a1a'] }
];

const SocialPosts = () => {
  const { profile, user } = useAuth();
  const { t } = useLanguage();
  const [textContent, setTextContent] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState(platforms[0]);
  const [selectedFont, setSelectedFont] = useState(fontStyles[0]);
  const [selectedBg, setSelectedBg] = useState(backgroundColors[0]);
  const [loading, setLoading] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);

  const handleAIGenerate = async () => {
    if (!profile || profile.credits < 1) {
      toast.error('Insufficient credits');
      return;
    }

    setAiLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('generate-social-text', {
        body: { platform: selectedPlatform.id }
      });

      if (error) throw error;

      if (data.text) {
        setTextContent(data.text);
        toast.success('Text generated!');
      }
    } catch (error: any) {
      console.error('AI error:', error);
      toast.error('Failed to generate text');
    } finally {
      setAiLoading(false);
    }
  };

  const handleSave = async () => {
    if (!textContent.trim()) {
      toast.error('Please enter some text');
      return;
    }
    
    if (!user) {
      toast.error('Please log in to save');
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.from('generated_social_posts').insert({
        user_id: user.id,
        text_content: textContent,
        prompt: textContent,
        background_color: selectedBg.colors[0],
        font_style: selectedFont.id,
        platform: selectedPlatform.id
      });

      if (error) throw error;
      toast.success('Social post saved!');
    } catch (error: any) {
      console.error('Save error:', error);
      toast.error('Failed to save');
    } finally {
      setLoading(false);
    }
  };

  const textColor = selectedBg.id.includes('white') ? '#1a1a1a' : '#ffffff';

  return (
    <StudioLayout>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Controls */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-extrabold text-foreground mb-2 flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-warning to-destructive rounded-xl flex items-center justify-center">
                <Type className="w-7 h-7 text-primary-foreground" />
              </div>
              {t.creatorStudio.socialPosts.title}
            </h1>
            <p className="text-muted-foreground">
              {t.creatorStudio.socialPosts.description}
            </p>
          </div>

          <div className="bg-card rounded-2xl border border-border p-6 space-y-5">
            {/* Platform Selection */}
            <div className="space-y-2">
              <Label>{t.creatorStudio.socialPosts.platform}</Label>
              <div className="grid grid-cols-3 gap-2">
                {platforms.map((platform) => (
                  <button
                    key={platform.id}
                    onClick={() => setSelectedPlatform(platform)}
                    className={`p-3 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
                      selectedPlatform.id === platform.id
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <platform.icon className="w-6 h-6" />
                    <div className="text-sm font-medium">{platform.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="text" className="flex items-center gap-2">
                  <Wand2 className="w-4 h-4 text-primary" />
                  {t.creatorStudio.socialPosts.yourText}
                </Label>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleAIGenerate}
                  disabled={aiLoading}
                  className="gap-2"
                >
                  {aiLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Sparkles className="w-4 h-4" />
                  )}
                  {t.creatorStudio.socialPosts.aiGenerate}
                </Button>
              </div>
              <Textarea
                id="text"
                placeholder={t.creatorStudio.socialPosts.textPlaceholder}
                value={textContent}
                onChange={(e) => setTextContent(e.target.value)}
                className="min-h-[100px] bg-background"
              />
            </div>

            {/* Font Style */}
            <div className="space-y-2">
              <Label>{t.creatorStudio.socialPosts.fontStyle}</Label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {fontStyles.map((font) => (
                  <button
                    key={font.id}
                    onClick={() => setSelectedFont(font)}
                    className={`p-3 rounded-xl border-2 transition-all ${
                      selectedFont.id === font.id
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <span style={{ fontFamily: font.fontFamily }} className="text-sm font-medium">
                      {font.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Background Colors */}
            <div className="space-y-2">
              <Label>{t.creatorStudio.socialPosts.background}</Label>
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                {backgroundColors.map((bg) => (
                  <button
                    key={bg.id}
                    onClick={() => setSelectedBg(bg)}
                    className={`p-1.5 rounded-xl border-2 transition-all ${
                      selectedBg.id === bg.id
                        ? 'border-primary'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div 
                      className="w-full h-8 rounded-lg"
                      style={{ 
                        background: `linear-gradient(135deg, ${bg.colors[0]}, ${bg.colors[1]})`
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>

            <Button
              onClick={handleSave}
              disabled={loading || !textContent.trim()}
              className="w-full h-12 bg-gradient-primary text-primary-foreground font-bold"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  {t.creatorStudio.socialPosts.saving}
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Save className="w-5 h-5" />
                  {t.creatorStudio.socialPosts.savePost}
                </span>
              )}
            </Button>
          </div>
        </div>

        {/* Right Column - Preview */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-foreground">{t.creatorStudio.socialPosts.preview}</h2>
            <span className="text-sm text-muted-foreground">{selectedPlatform.size}</span>
          </div>

          <div className="bg-card rounded-2xl border border-border overflow-hidden">
            <div 
              className="w-full aspect-square flex items-center justify-center p-8"
              style={{ 
                background: `linear-gradient(135deg, ${selectedBg.colors[0]}, ${selectedBg.colors[1]})`
              }}
            >
              <p 
                className="text-center text-2xl font-bold leading-relaxed"
                style={{ 
                  fontFamily: selectedFont.fontFamily,
                  color: textColor
                }}
              >
                {textContent || t.creatorStudio.socialPosts.yourTextWillAppear}
              </p>
            </div>
          </div>
        </div>
      </div>
    </StudioLayout>
  );
};

export default SocialPosts;
