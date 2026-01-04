import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  CreditCard, 
  Sparkles, 
  Palette, 
  Type, 
  Image as ImageIcon,
  Download,
  Share2,
  Plus,
  Check,
  Truck,
  Phone,
  MapPin,
  Clock
} from 'lucide-react';
import { useState } from 'react';

const cardTemplates = [
  {
    name: 'Classic Delivery',
    style: 'Clean and professional',
    colors: ['#1a1a2e', '#e94560'],
  },
  {
    name: 'Modern Minimal',
    style: 'Simple and elegant',
    colors: ['#ffffff', '#000000'],
  },
  {
    name: 'Bold & Colorful',
    style: 'Eye-catching design',
    colors: ['#ff6b6b', '#4ecdc4'],
  },
  {
    name: 'Premium Gold',
    style: 'Luxury feel',
    colors: ['#0d0d0d', '#d4af37'],
  },
];

const colorPalettes = [
  { name: 'Ocean', colors: ['#0077b6', '#00b4d8', '#90e0ef'] },
  { name: 'Sunset', colors: ['#ff6b6b', '#feca57', '#ff9ff3'] },
  { name: 'Forest', colors: ['#2d6a4f', '#40916c', '#95d5b2'] },
  { name: 'Berry', colors: ['#7b2cbf', '#c77dff', '#e0aaff'] },
  { name: 'Fire', colors: ['#d00000', '#dc2f02', '#f48c06'] },
  { name: 'Mono', colors: ['#212529', '#495057', '#adb5bd'] },
];

const fonts = [
  { name: 'Modern Sans', sample: 'Aa', style: 'Clean & Professional' },
  { name: 'Elegant Serif', sample: 'Aa', style: 'Classic & Refined' },
  { name: 'Bold Display', sample: 'Aa', style: 'Strong & Impactful' },
  { name: 'Playful Round', sample: 'Aa', style: 'Friendly & Fun' },
];

export default function DeliveryCards() {
  const [businessName, setBusinessName] = useState('');
  const [tagline, setTagline] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState(0);
  const [selectedPalette, setSelectedPalette] = useState(0);
  const [selectedFont, setSelectedFont] = useState(0);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-primary/10 rounded-full mb-4">
            <CreditCard className="w-5 h-5 text-primary" />
            <span className="font-semibold text-primary">Delivery Card Maker</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Design Professional <span className="text-gradient-primary">Delivery Cards</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Create stunning delivery cards and promotional materials for your food delivery business in minutes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Panel - Editor */}
          <div className="space-y-6">
            {/* Business Info */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <h2 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                <Truck className="w-5 h-5 text-primary" />
                Business Information
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Business Name</label>
                  <Input
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Your Restaurant Name"
                    className="bg-muted"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Tagline</label>
                  <Input
                    value={tagline}
                    onChange={(e) => setTagline(e.target.value)}
                    placeholder="Fast & Fresh Delivery"
                    className="bg-muted"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block flex items-center gap-1">
                      <Phone className="w-4 h-4" /> Phone
                    </label>
                    <Input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 234 567 890"
                      className="bg-muted"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block flex items-center gap-1">
                      <Clock className="w-4 h-4" /> Hours
                    </label>
                    <Input
                      placeholder="10AM - 10PM"
                      className="bg-muted"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> Address
                  </label>
                  <Input
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="123 Main Street, City"
                    className="bg-muted"
                  />
                </div>
              </div>
            </div>

            {/* Templates */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <h2 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-primary" />
                Card Templates
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {cardTemplates.map((template, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedTemplate(index)}
                    className={`relative p-4 rounded-xl border-2 text-left transition-all ${
                      selectedTemplate === index
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    {selectedTemplate === index && (
                      <div className="absolute top-2 right-2 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary-foreground" />
                      </div>
                    )}
                    <div className="flex gap-1 mb-2">
                      {template.colors.map((color, i) => (
                        <div
                          key={i}
                          className="w-6 h-6 rounded-full border border-border"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    <p className="font-medium text-foreground">{template.name}</p>
                    <p className="text-xs text-muted-foreground">{template.style}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Color Palettes */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <h2 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                <Palette className="w-5 h-5 text-primary" />
                Color Palette
              </h2>
              <div className="grid grid-cols-3 gap-3">
                {colorPalettes.map((palette, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedPalette(index)}
                    className={`p-3 rounded-xl border-2 transition-all ${
                      selectedPalette === index
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex gap-1 mb-2 justify-center">
                      {palette.colors.map((color, i) => (
                        <div
                          key={i}
                          className="w-5 h-5 rounded-full"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    <p className="text-xs font-medium text-foreground text-center">{palette.name}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Fonts */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <h2 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                <Type className="w-5 h-5 text-primary" />
                Typography
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {fonts.map((font, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedFont(index)}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      selectedFont === index
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <span className="text-2xl font-bold text-foreground block mb-1">{font.sample}</span>
                    <p className="font-medium text-foreground text-sm">{font.name}</p>
                    <p className="text-xs text-muted-foreground">{font.style}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel - Preview */}
          <div className="lg:sticky lg:top-24 space-y-6 h-fit">
            {/* Preview Card */}
            <div className="bg-card rounded-2xl border border-border overflow-hidden">
              <div className="p-4 border-b border-border flex items-center justify-between">
                <h3 className="font-bold text-foreground">Live Preview</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-1">
                    <Download className="w-4 h-4" />
                    Download
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Share2 className="w-4 h-4" />
                    Share
                  </Button>
                </div>
              </div>
              
              {/* Card Preview */}
              <div className="p-6 bg-muted/50">
                <div 
                  className="aspect-[1.75/1] rounded-xl shadow-2xl overflow-hidden mx-auto max-w-md"
                  style={{ 
                    background: `linear-gradient(135deg, ${cardTemplates[selectedTemplate].colors[0]}, ${cardTemplates[selectedTemplate].colors[1]})` 
                  }}
                >
                  <div className="h-full p-6 flex flex-col justify-between text-white">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Truck className="w-6 h-6" />
                        <span className="text-xl font-bold">
                          {businessName || 'Your Restaurant'}
                        </span>
                      </div>
                      <p className="text-sm opacity-80">
                        {tagline || 'Fast & Fresh Delivery'}
                      </p>
                    </div>
                    <div className="space-y-1 text-sm">
                      <p className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        {phone || '+1 234 567 890'}
                      </p>
                      <p className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {address || '123 Main Street, City'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <Button className="flex-1 bg-gradient-primary text-primary-foreground shadow-lg hover:shadow-xl gap-2">
                <Sparkles className="w-5 h-5" />
                Generate with AI
              </Button>
              <Button variant="outline" className="flex-1 gap-2">
                <Plus className="w-5 h-5" />
                Add to Brand Kit
              </Button>
            </div>

            {/* Format Options */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="font-bold text-foreground mb-4">Export Format</h3>
              <div className="grid grid-cols-3 gap-3">
                <button className="p-3 rounded-xl border-2 border-primary bg-primary/5 text-center">
                  <p className="font-bold text-foreground">PNG</p>
                  <p className="text-xs text-muted-foreground">High Quality</p>
                </button>
                <button className="p-3 rounded-xl border-2 border-border hover:border-primary/50 text-center transition-colors">
                  <p className="font-bold text-foreground">PDF</p>
                  <p className="text-xs text-muted-foreground">Print Ready</p>
                </button>
                <button className="p-3 rounded-xl border-2 border-border hover:border-primary/50 text-center transition-colors">
                  <p className="font-bold text-foreground">SVG</p>
                  <p className="text-xs text-muted-foreground">Vector</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
