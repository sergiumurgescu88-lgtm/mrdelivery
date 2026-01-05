import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { StudioLayout } from '@/components/creator-studio/StudioLayout';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { 
  Sparkles, 
  Image, 
  Palette, 
  Type, 
  CreditCard, 
  Play, 
  ChevronLeft, 
  ChevronRight,
  Star,
  ArrowRight,
  Coins,
  Wand2
} from 'lucide-react';

const heroSlides = [
  {
    title: 'Create Stunning Banners with AI',
    description: 'Generate professional-quality banners in minutes. Create any banner with amazing imagery and text by entering a single prompt or use our step by step guide.',
    gradient: 'from-primary via-secondary to-accent',
    buttons: [
      { label: 'Start with AI', href: '/creator-studio/banner', primary: true },
      { label: 'Browse Gallery', href: '#gallery', primary: false },
      { label: 'How It Works', href: '#how-it-works', primary: false }
    ]
  },
  {
    title: 'Create Stunning Logos with AI',
    description: 'Design professional logos in minutes with AI-powered creativity. Perfect for startups, brands, and businesses of all sizes.',
    gradient: 'from-secondary via-accent to-primary',
    buttons: [
      { label: 'Start with AI', href: '/creator-studio/logo', primary: true }
    ]
  },
  {
    title: 'Build Your Complete Brand Identity',
    description: 'Create professional business cards and establish your brand kit. Keep your branding consistent across all your marketing materials.',
    gradient: 'from-accent via-primary to-secondary',
    buttons: [
      { label: 'Business Cards', href: '/creator-studio/business-cards', primary: true },
      { label: 'Brand Kit', href: '#brand-kit', primary: false }
    ]
  },
  {
    title: 'Create Social Media Graphics',
    description: 'Design beautiful text graphics for Instagram, Facebook, and LinkedIn. Perfect for quotes, announcements, and promotional posts.',
    gradient: 'from-warning via-destructive to-accent',
    buttons: [
      { label: 'Create Social Post', href: '/creator-studio/social-posts', primary: true }
    ]
  }
];

const showcaseBanners = [
  { title: 'Amazing Rates', type: 'Facebook Post', size: '1200x630', gradient: 'from-blue-500 to-cyan-500' },
  { title: 'Travel in Style', type: 'png', size: '1024x1024', gradient: 'from-orange-500 to-pink-500' },
  { title: 'Pet Grooming', type: 'png', size: '1024x1536', gradient: 'from-amber-500 to-yellow-500' },
  { title: 'Balloons', type: 'Facebook Cover', size: '820x312', gradient: 'from-purple-500 to-pink-500' }
];

const showcaseLogos = [
  { title: 'Disco Club Hire', style: '3D Logo', gradient: 'from-violet-500 to-purple-500' },
  { title: 'HelloFresh', style: 'Modern Logo', gradient: 'from-green-500 to-emerald-500' },
  { title: 'eToro', style: 'Bold Logo', gradient: 'from-cyan-500 to-blue-500' },
  { title: 'Relic Entertainment', style: 'Professional', gradient: 'from-gray-600 to-gray-800' }
];

const testimonials = [
  {
    quote: "Bannerman has completely transformed how we create social media content. What used to take hours now takes minutes, and the quality is consistently excellent.",
    author: "Sarah Johnson",
    role: "Marketing Director at TechStart Inc.",
    rating: 5
  },
  {
    quote: "As a freelancer, I need to work fast without sacrificing quality. Bannerman's AI-powered tools help me deliver professional banners to my clients in record time.",
    author: "Michael Chen",
    role: "Freelance Designer at Chen Creative",
    rating: 5
  },
  {
    quote: "The variety of templates and customization options is amazing. I can maintain our brand consistency across all platforms while still being creative.",
    author: "Emma Rodriguez",
    role: "Social Media Manager at GrowthCo",
    rating: 5
  }
];

const Dashboard = () => {
  const { profile } = useAuth();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <StudioLayout>
      {/* Hero Carousel */}
      <section className="relative mb-12 rounded-3xl overflow-hidden">
        <div className={`bg-gradient-to-br ${heroSlides[currentSlide].gradient} p-8 sm:p-12 lg:p-16 min-h-[400px] flex flex-col justify-center transition-all duration-500`}>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-4 max-w-2xl">
            {heroSlides[currentSlide].title}
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mb-8">
            {heroSlides[currentSlide].description}
          </p>
          <div className="flex flex-wrap gap-3">
            {heroSlides[currentSlide].buttons.map((btn, i) => (
              <Link key={i} to={btn.href}>
                <Button 
                  variant={btn.primary ? 'secondary' : 'outline'} 
                  size="lg"
                  className={btn.primary 
                    ? 'bg-card text-foreground hover:bg-card/90 font-bold gap-2' 
                    : 'border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-bold gap-2'
                  }
                >
                  {btn.primary && <Sparkles className="w-5 h-5" />}
                  {btn.label}
                </Button>
              </Link>
            ))}
          </div>
          
          {/* Carousel Navigation */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === currentSlide 
                    ? 'bg-primary-foreground w-8' 
                    : 'bg-primary-foreground/40 hover:bg-primary-foreground/60'
                }`}
              />
            ))}
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-primary-foreground" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-primary-foreground" />
          </button>
        </div>
      </section>

      {/* Get Started Banner */}
      <section className="mb-12 bg-card rounded-2xl border border-border p-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-primary p-2 rounded-lg">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <span className="text-sm font-bold text-primary">Get Started</span>
            <p className="text-foreground font-semibold">Start Creating for Free!</p>
          </div>
        </div>
        <Link to="/creator-studio/credits">
          <Button className="bg-gradient-primary text-primary-foreground font-bold gap-2">
            <Coins className="w-4 h-4" />
            Free Credits
          </Button>
        </Link>
      </section>

      {/* Banner Showcase */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="text-gradient-primary">Banner</span> Showcase
          </h2>
          <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">Featured</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {showcaseBanners.map((banner, i) => (
            <div key={i} className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all">
              <div className={`bg-gradient-to-br ${banner.gradient} aspect-video flex items-center justify-center p-4`}>
                <span className="text-primary-foreground font-bold text-lg text-center">{banner.title}</span>
              </div>
              <div className="p-3 flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{banner.type}</span>
                <span className="text-sm font-medium">{banner.size}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Logo Showcase */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Palette className="w-6 h-6 text-secondary" />
            <span className="text-gradient-primary">Logo</span> Showcase
          </h2>
          <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">Featured</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {showcaseLogos.map((logo, i) => (
            <div key={i} className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all">
              <div className={`bg-gradient-to-br ${logo.gradient} aspect-square flex items-center justify-center p-4`}>
                <span className="text-primary-foreground font-bold text-lg text-center">{logo.title}</span>
              </div>
              <div className="p-3">
                <span className="text-sm text-muted-foreground">{logo.style}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-foreground mb-2">
            Loved by Creators Worldwide
          </h2>
          <p className="text-muted-foreground">
            Join thousands of marketers, designers, and content creators who trust Bannerman for their visual content needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-card rounded-2xl border border-border p-6">
              <p className="text-foreground mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-warning fill-warning" />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.author[0]}
                </div>
                <div>
                  <div className="font-bold text-foreground text-sm">{testimonial.author}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <p className="text-muted-foreground">⭐ Rated 4.9/5 from over 10,000+ happy users</p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-foreground mb-2">
            Create your Brand using these Powerful Tools
          </h2>
          <Link to="/creator-studio/credits">
            <Button variant="outline" className="mt-4">View Plans</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center mb-4">
              <Sparkles className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-bold text-lg text-foreground mb-2">AI Logo Maker</h3>
            <p className="text-muted-foreground text-sm">Answer a few questions and let Bannerman design a professional logo for your brand</p>
          </div>
          <div className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4">
              <Palette className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-bold text-lg text-foreground mb-2">Brand Kit</h3>
            <p className="text-muted-foreground text-sm">Save your brand colors, fonts, and logo to maintain consistency across all your designs</p>
          </div>
          <div className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-gradient-to-br from-accent to-warning rounded-xl flex items-center justify-center mb-4">
              <CreditCard className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-bold text-lg text-foreground mb-2">Business Card Maker</h3>
            <p className="text-muted-foreground text-sm">Design professional business cards with customizable templates and easy export options</p>
          </div>
          <div className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
              <Image className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-bold text-lg text-foreground mb-2">AI Banner Generator</h3>
            <p className="text-muted-foreground text-sm">Describe your vision and let Bannerman generate complete banners with images and copy</p>
          </div>
          <div className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-gradient-to-br from-warning to-destructive rounded-xl flex items-center justify-center mb-4">
              <Type className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-bold text-lg text-foreground mb-2">Social Post Generator</h3>
            <p className="text-muted-foreground text-sm">Create eye-catching text graphics for social media quotes, announcements, and promotional posts</p>
          </div>
          <div className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-all group cursor-pointer">
            <Link to="/creator-studio/logo" className="block">
              <div className="w-14 h-14 bg-gradient-to-br from-success to-primary rounded-xl flex items-center justify-center mb-4">
                <Wand2 className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">Need a professional logo?</h3>
              <p className="text-muted-foreground text-sm mb-4">Create stunning AI-powered logos in seconds with our Logo Maker tool.</p>
              <span className="text-primary font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                Try Logo Maker Now <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </StudioLayout>
  );
};

export default Dashboard;
