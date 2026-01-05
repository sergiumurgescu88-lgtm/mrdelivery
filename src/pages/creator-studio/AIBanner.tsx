import { useState } from 'react';
import { StudioLayout } from '@/components/creator-studio/StudioLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { 
  Sparkles, 
  Image, 
  Wand2, 
  Download, 
  Loader2,
  Square,
  RectangleHorizontal,
  RectangleVertical,
  RefreshCw
} from 'lucide-react';

const sizePresets = [
  { label: 'Instagram Post', width: 1080, height: 1080, icon: Square },
  { label: 'Facebook Post', width: 1200, height: 630, icon: RectangleHorizontal },
  { label: 'Story', width: 1080, height: 1920, icon: RectangleVertical },
  { label: 'Facebook Cover', width: 820, height: 312, icon: RectangleHorizontal },
  { label: 'Twitter Header', width: 1500, height: 500, icon: RectangleHorizontal },
  { label: 'LinkedIn Banner', width: 1584, height: 396, icon: RectangleHorizontal }
];

const AIBanner = () => {
  const { profile, refreshProfile } = useAuth();
  const [prompt, setPrompt] = useState('');
  const [selectedSize, setSelectedSize] = useState(sizePresets[0]);
  const [loading, setLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast.error('Please enter a description for your banner');
      return;
    }
    
    if (!profile || profile.credits < 1) {
      toast.error('Insufficient credits. Please purchase more credits.');
      return;
    }

    setLoading(true);
    setGeneratedImage(null);

    try {
      const { data, error } = await supabase.functions.invoke('generate-banner', {
        body: { 
          prompt, 
          width: selectedSize.width, 
          height: selectedSize.height 
        }
      });

      if (error) throw error;

      if (data.error) {
        if (data.error.includes('Rate limits')) {
          toast.error('Rate limit reached. Please try again in a moment.');
        } else if (data.error.includes('Payment required')) {
          toast.error('Service credits depleted. Please try again later.');
        } else {
          toast.error(data.error);
        }
        return;
      }

      setGeneratedImage(data.imageUrl);
      toast.success('Banner generated successfully!');
      await refreshProfile();
    } catch (error: any) {
      console.error('Generation error:', error);
      toast.error('Failed to generate banner. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (generatedImage) {
      const link = document.createElement('a');
      link.href = generatedImage;
      link.download = `banner-${Date.now()}.png`;
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
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Image className="w-7 h-7 text-primary-foreground" />
              </div>
              AI Banner Generator
            </h1>
            <p className="text-muted-foreground">
              Describe your vision and let AI create stunning banners for you
            </p>
          </div>

          {/* Prompt Input */}
          <div className="bg-card rounded-2xl border border-border p-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="prompt" className="text-foreground font-semibold flex items-center gap-2">
                <Wand2 className="w-4 h-4 text-primary" />
                Describe your banner
              </Label>
              <Textarea
                id="prompt"
                placeholder="E.g., A vibrant summer sale banner with tropical colors, palm trees, and 50% OFF text in bold letters"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="min-h-[120px] bg-background"
              />
            </div>

            {/* Size Presets */}
            <div className="space-y-2">
              <Label className="text-foreground font-semibold">Banner Size</Label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {sizePresets.map((preset) => (
                  <button
                    key={preset.label}
                    onClick={() => setSelectedSize(preset)}
                    className={`p-3 rounded-xl border-2 transition-all text-left ${
                      selectedSize.label === preset.label
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <preset.icon className="w-5 h-5 text-muted-foreground mb-1" />
                    <div className="text-sm font-medium text-foreground">{preset.label}</div>
                    <div className="text-xs text-muted-foreground">{preset.width}x{preset.height}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Generate Button */}
            <Button
              onClick={handleGenerate}
              disabled={loading || !prompt.trim()}
              className="w-full h-12 bg-gradient-primary text-primary-foreground font-bold text-lg"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Generating...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Generate Banner (1 Credit)
                </span>
              )}
            </Button>

            <p className="text-sm text-center text-muted-foreground">
              You have <span className="font-bold text-primary">{profile?.credits ?? 0}</span> credits remaining
            </p>
          </div>
        </div>

        {/* Right Column - Preview */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-foreground">Preview</h2>
            {generatedImage && (
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => setGeneratedImage(null)}>
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Clear
                </Button>
                <Button size="sm" onClick={handleDownload} className="bg-gradient-primary text-primary-foreground">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            )}
          </div>

          <div className="bg-card rounded-2xl border border-border overflow-hidden">
            <div 
              className="relative flex items-center justify-center bg-muted min-h-[400px]"
              style={{ aspectRatio: `${selectedSize.width}/${selectedSize.height}` }}
            >
              {loading ? (
                <div className="text-center">
                  <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
                  <p className="text-muted-foreground">Creating your banner...</p>
                </div>
              ) : generatedImage ? (
                <img 
                  src={generatedImage} 
                  alt="Generated Banner" 
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="text-center p-8">
                  <Image className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                  <p className="text-muted-foreground">Your generated banner will appear here</p>
                  <p className="text-sm text-muted-foreground/70 mt-2">
                    Selected size: {selectedSize.width}x{selectedSize.height}
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

export default AIBanner;
