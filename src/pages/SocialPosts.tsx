import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Share2, 
  Sparkles, 
  Instagram, 
  Facebook, 
  Twitter,
  Download,
  Copy,
  Image as ImageIcon,
  Type,
  Palette,
  Wand2,
  Clock,
  Star,
  TrendingUp,
  Heart
} from 'lucide-react';
import { useState } from 'react';

const platforms = [
  { name: 'Instagram Post', icon: Instagram, size: '1080x1080', active: true },
  { name: 'Instagram Story', icon: Instagram, size: '1080x1920', active: false },
  { name: 'Facebook Post', icon: Facebook, size: '1200x630', active: false },
  { name: 'Twitter Post', icon: Twitter, size: '1200x675', active: false },
];

const postTypes = [
  { name: 'Daily Special', icon: '🍽️', description: 'Highlight today\'s special dish' },
  { name: 'Promotion', icon: '🎉', description: 'Announce discounts & offers' },
  { name: 'New Item', icon: '✨', description: 'Introduce new menu items' },
  { name: 'Quote', icon: '💬', description: 'Food quotes & inspiration' },
  { name: 'Behind the Scenes', icon: '👨‍🍳', description: 'Show your kitchen' },
  { name: 'Customer Review', icon: '⭐', description: 'Share testimonials' },
];

const colorThemes = [
  { name: 'Warm', colors: ['#ff6b6b', '#ffa502', '#ff4757'], emoji: '🔥' },
  { name: 'Fresh', colors: ['#2ed573', '#7bed9f', '#26de81'], emoji: '🌿' },
  { name: 'Cool', colors: ['#3498db', '#9b59b6', '#1abc9c'], emoji: '❄️' },
  { name: 'Dark', colors: ['#2d3436', '#636e72', '#b2bec3'], emoji: '🌙' },
  { name: 'Pastel', colors: ['#fab1a0', '#81ecec', '#a29bfe'], emoji: '🎨' },
  { name: 'Bold', colors: ['#e74c3c', '#f39c12', '#8e44ad'], emoji: '💥' },
];

const recentPosts = [
  { title: 'Weekend Brunch Special', platform: 'Instagram', time: '2h ago', likes: 234 },
  { title: 'New Pizza Flavors', platform: 'Facebook', time: 'Yesterday', likes: 456 },
  { title: 'Customer Testimonial', platform: 'Instagram', time: '2 days ago', likes: 189 },
];

export default function SocialPosts() {
  const [postText, setPostText] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState(0);
  const [selectedType, setSelectedType] = useState<number | null>(null);
  const [selectedTheme, setSelectedTheme] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 2500);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-primary/10 rounded-full mb-4">
            <Share2 className="w-5 h-5 text-primary" />
            <span className="font-semibold text-primary">Social Post Generator</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Create Viral <span className="text-gradient-primary">Social Posts</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Design eye-catching social media content for your restaurant. Perfect for Instagram, Facebook, and more.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Panel - Editor */}
          <div className="lg:col-span-2 space-y-6">
            {/* Platform Selection */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <h2 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-primary" />
                Choose Platform
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {platforms.map((platform, index) => {
                  const Icon = platform.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => setSelectedPlatform(index)}
                      className={`p-4 rounded-xl border-2 text-center transition-all ${
                        selectedPlatform === index
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <Icon className={`w-6 h-6 mx-auto mb-2 ${
                        selectedPlatform === index ? 'text-primary' : 'text-muted-foreground'
                      }`} />
                      <p className="font-medium text-foreground text-sm">{platform.name}</p>
                      <p className="text-xs text-muted-foreground">{platform.size}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Post Type */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <h2 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                <Type className="w-5 h-5 text-primary" />
                Post Type
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {postTypes.map((type, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedType(selectedType === index ? null : index)}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      selectedType === index
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <span className="text-2xl mb-2 block">{type.icon}</span>
                    <p className="font-medium text-foreground text-sm">{type.name}</p>
                    <p className="text-xs text-muted-foreground">{type.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Post Content */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <h2 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                <Wand2 className="w-5 h-5 text-primary" />
                Your Message
              </h2>
              <div className="relative">
                <textarea
                  value={postText}
                  onChange={(e) => setPostText(e.target.value)}
                  placeholder="E.g., Craving something delicious? Try our new spicy chicken burger! 🍔🔥 Limited time offer - 20% off this weekend only!"
                  className="w-full h-32 p-4 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none text-foreground placeholder:text-muted-foreground"
                />
                <div className="absolute bottom-3 right-3 flex items-center gap-3">
                  <span className="text-xs text-muted-foreground">{postText.length}/300</span>
                  <Button variant="ghost" size="sm" className="gap-1 text-primary">
                    <Sparkles className="w-4 h-4" />
                    AI Write
                  </Button>
                </div>
              </div>
            </div>

            {/* Color Theme */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <h2 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                <Palette className="w-5 h-5 text-primary" />
                Color Theme
              </h2>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                {colorThemes.map((theme, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedTheme(index)}
                    className={`p-3 rounded-xl border-2 transition-all ${
                      selectedTheme === index
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex gap-1 mb-2 justify-center">
                      {theme.colors.map((color, i) => (
                        <div
                          key={i}
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    <p className="text-xs font-medium text-foreground text-center">
                      {theme.emoji} {theme.name}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Generate Button */}
            <Button
              onClick={handleGenerate}
              disabled={isGenerating}
              size="lg"
              className="w-full bg-gradient-primary text-primary-foreground shadow-lg hover:shadow-xl h-14 text-lg font-bold gap-3"
            >
              {isGenerating ? (
                <>
                  <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Creating Your Post...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Generate Social Post
                </>
              )}
            </Button>
          </div>

          {/* Right Panel - Preview & Stats */}
          <div className="space-y-6">
            {/* Preview */}
            <div className="bg-card rounded-2xl border border-border overflow-hidden">
              <div className="p-4 border-b border-border flex items-center justify-between">
                <h3 className="font-bold text-foreground">Preview</h3>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">
                    <Copy className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="aspect-square bg-muted flex items-center justify-center relative">
                {isGenerating ? (
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-muted-foreground">Creating magic...</p>
                  </div>
                ) : (
                  <div 
                    className="absolute inset-4 rounded-xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${colorThemes[selectedTheme].colors.join(', ')})`
                    }}
                  >
                    <div className="text-center text-white p-6">
                      <p className="text-lg font-bold mb-2">
                        {postText || 'Your post preview will appear here'}
                      </p>
                      {selectedType !== null && (
                        <span className="text-3xl">{postTypes[selectedType].icon}</span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Recent Posts
              </h3>
              <div className="space-y-3">
                {recentPosts.map((post, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted transition-colors"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <ImageIcon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground truncate">{post.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {post.platform} • {post.time}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Heart className="w-4 h-4" />
                      {post.likes}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Engagement Tips */}
            <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-2xl border border-primary/20 p-6">
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Engagement Tips
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                  Post during peak hours (11am-1pm, 7pm-9pm)
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                  Use 3-5 relevant hashtags
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                  Include a call-to-action
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                  Tag your location
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
