import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Sparkles, 
  Wand2, 
  Image as ImageIcon, 
  Download, 
  Share2,
  ChevronRight,
  UtensilsCrossed,
  Clock,
  Zap,
  Star
} from 'lucide-react';
import { useState } from 'react';

const menuTemplates = [
  { name: 'Restaurant Menu', icon: '🍽️', popular: true },
  { name: 'Cafe Menu', icon: '☕' },
  { name: 'Pizza Menu', icon: '🍕' },
  { name: 'Sushi Menu', icon: '🍣' },
  { name: 'Burger Menu', icon: '🍔' },
  { name: 'Dessert Menu', icon: '🍰' },
  { name: 'Cocktail Menu', icon: '🍹' },
  { name: 'Breakfast Menu', icon: '🥞' },
];

const sizes = [
  { name: 'Instagram Post', size: '1080x1080', icon: '📱' },
  { name: 'Facebook Post', size: '1200x630', icon: '📘' },
  { name: 'Story', size: '1080x1920', icon: '📲' },
  { name: 'A4 Print', size: '2480x3508', icon: '📄' },
  { name: 'Banner', size: '1920x600', icon: '🖼️' },
  { name: 'Square', size: '1024x1024', icon: '⬜' },
];

const recentMenus = [
  { name: 'Italian Restaurant Menu', date: 'Today', size: '1080x1080' },
  { name: 'Coffee Shop Specials', date: 'Yesterday', size: '1200x630' },
  { name: 'Weekend Brunch Menu', date: '2 days ago', size: '1080x1920' },
];

export default function AIMenu() {
  const [prompt, setPrompt] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('1080x1080');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    // Simulate generation
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-primary/10 rounded-full mb-4">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="font-semibold text-primary">AI-Powered Menu Generator</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Create Beautiful <span className="text-gradient-primary">Menus</span> in Seconds
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Describe your restaurant and menu items, and our AI will generate stunning, professional menus instantly.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Panel - Input */}
          <div className="lg:col-span-2 space-y-6">
            {/* Prompt Input */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <h2 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                <Wand2 className="w-5 h-5 text-primary" />
                Describe Your Menu
              </h2>
              <div className="relative">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="E.g., A modern Italian restaurant menu with appetizers, pasta dishes, and desserts. Use warm colors and elegant typography..."
                  className="w-full h-32 p-4 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none text-foreground placeholder:text-muted-foreground"
                />
                <div className="absolute bottom-3 right-3 text-xs text-muted-foreground">
                  {prompt.length}/500
                </div>
              </div>
            </div>

            {/* Templates */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <h2 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                <UtensilsCrossed className="w-5 h-5 text-primary" />
                Quick Templates
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {menuTemplates.map((template) => (
                  <button
                    key={template.name}
                    onClick={() => setSelectedTemplate(template.name)}
                    className={`relative p-4 rounded-xl border-2 text-center transition-all hover:shadow-md ${
                      selectedTemplate === template.name
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    {template.popular && (
                      <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-gradient-primary text-primary-foreground text-[10px] font-bold rounded-full">
                        Popular
                      </span>
                    )}
                    <span className="text-2xl mb-2 block">{template.icon}</span>
                    <span className="text-sm font-medium text-foreground">{template.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <h2 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-primary" />
                Choose Size
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {sizes.map((size) => (
                  <button
                    key={size.size}
                    onClick={() => setSelectedSize(size.size)}
                    className={`p-4 rounded-xl border-2 text-left transition-all hover:shadow-md ${
                      selectedSize === size.size
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <span className="text-xl mb-2 block">{size.icon}</span>
                    <span className="font-medium text-foreground block">{size.name}</span>
                    <span className="text-xs text-muted-foreground">{size.size}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Generate Button */}
            <Button
              onClick={handleGenerate}
              disabled={isGenerating || !prompt.trim()}
              size="lg"
              className="w-full bg-gradient-primary text-primary-foreground shadow-lg hover:shadow-xl h-14 text-lg font-bold gap-3"
            >
              {isGenerating ? (
                <>
                  <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Generating Your Menu...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Generate Menu
                </>
              )}
            </Button>
          </div>

          {/* Right Panel - Preview & History */}
          <div className="space-y-6">
            {/* Preview */}
            <div className="bg-card rounded-2xl border border-border overflow-hidden">
              <div className="p-4 border-b border-border flex items-center justify-between">
                <h3 className="font-bold text-foreground">Preview</h3>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="gap-1">
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-1">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="aspect-square bg-muted flex items-center justify-center">
                {isGenerating ? (
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-muted-foreground">Creating your menu...</p>
                  </div>
                ) : (
                  <div className="text-center p-6">
                    <UtensilsCrossed className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Your generated menu will appear here
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Recent Menus */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Recent Menus
              </h3>
              <div className="space-y-3">
                {recentMenus.map((menu, index) => (
                  <button
                    key={index}
                    className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-muted transition-colors text-left group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                      <UtensilsCrossed className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground truncate">{menu.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {menu.date} • {menu.size}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </button>
                ))}
              </div>
            </div>

            {/* Tips */}
            <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-2xl border border-primary/20 p-6">
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Pro Tips
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                  Be specific about colors and style preferences
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                  Include your restaurant name for branded menus
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                  Mention the cuisine type for better results
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
