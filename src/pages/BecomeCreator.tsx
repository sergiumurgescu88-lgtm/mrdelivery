import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { FoodBackground } from '@/components/FoodBackground';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Image,
  Video,
  Megaphone,
  Palette,
  Wand2,
  ChefHat,
  Star,
  ArrowRight,
  Play,
  CheckCircle2,
  Zap,
  Quote,
  ArrowLeft,
  Instagram,
  Facebook,
  Send,
} from 'lucide-react';
import { useState } from 'react';

const BecomeCreator = () => {
  const { t } = useLanguage();
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Image,
      title: 'AI Banner Generator',
      description: 'Create stunning promotional banners for your restaurant in seconds. Perfect for social media, delivery apps, and marketing campaigns.',
      color: 'from-primary to-secondary',
    },
    {
      icon: ChefHat,
      title: 'Menu Visual Creator',
      description: 'Design beautiful menu graphics and food photography compositions with AI. Make your dishes look irresistible.',
      color: 'from-warning to-destructive',
    },
    {
      icon: Video,
      title: 'Video Content Studio',
      description: 'Generate professional promotional videos for your business. From food preparation clips to customer testimonials.',
      color: 'from-success to-primary',
    },
    {
      icon: Megaphone,
      title: 'Social Media Kit',
      description: 'Create Instagram posts, Facebook ads, and TikTok content. All optimized for maximum engagement.',
      color: 'from-accent to-secondary',
    },
    {
      icon: Palette,
      title: 'Brand Identity Builder',
      description: 'Design your complete brand kit: logos, color schemes, and visual guidelines to maintain consistency.',
      color: 'from-secondary to-accent',
    },
    {
      icon: Wand2,
      title: 'AI Copy Generator',
      description: 'Generate compelling descriptions, slogans, and promotional text in multiple languages.',
      color: 'from-primary to-accent',
    },
  ];

  const testimonials = [
    {
      quote: "MrDelivery's AI tools helped us increase our order rate by 40%. The banners they create are absolutely stunning!",
      author: "Maria Popescu",
      role: "Owner, Pizza Roma București",
      rating: 5,
    },
    {
      quote: "I used to spend hours on content. Now I generate a week's worth of social media posts in 10 minutes.",
      author: "Alexandru Ionescu",
      role: "Manager, Sushi Express",
      rating: 5,
    },
    {
      quote: "The video generator is incredible. My customers love the professional look of our promotions.",
      author: "Elena Dumitrescu",
      role: "Owner, Casa Elena Restaurant",
      rating: 5,
    },
  ];

  const showcaseItems = [
    { type: 'Instagram Post', size: '1080x1080', gradient: 'from-pink-500 to-orange-500' },
    { type: 'Facebook Cover', size: '820x312', gradient: 'from-blue-500 to-purple-500' },
    { type: 'Delivery App Banner', size: '1200x628', gradient: 'from-green-500 to-teal-500' },
    { type: 'Story Format', size: '1080x1920', gradient: 'from-amber-500 to-red-500' },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      <FoodBackground />

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Back to MrDelivery</span>
          </Link>
          <LanguageSwitcher />
        </nav>

        {/* Hero Section */}
        <header className="max-w-6xl mx-auto px-4 py-12 sm:py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
            <Sparkles className="w-4 h-4" />
            AI-Powered Content Creation
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
            <span className="text-gradient-primary">Create Stunning Content</span>
            <br />
            <span className="text-foreground">for Your Business</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Generate professional-quality banners, videos, and social media content in minutes. 
            No design skills needed – just describe what you want and let AI do the magic.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button size="lg" className="bg-gradient-primary text-primary-foreground font-bold px-8 py-6 text-lg rounded-xl shadow-glow hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 mr-2" />
              Start Creating Free
            </Button>
            <Button size="lg" variant="outline" className="font-bold px-8 py-6 text-lg rounded-xl border-2 hover:bg-card transition-colors">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Hero Stats */}
          <div className="flex flex-wrap justify-center gap-8 sm:gap-16">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-gradient-primary">500+</div>
              <div className="text-sm text-muted-foreground">Restaurants Using</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-gradient-primary">10K+</div>
              <div className="text-sm text-muted-foreground">Content Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-gradient-primary">4.9★</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </header>

        {/* Feature Cards Section */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
              Powerful AI Tools for Your Business
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Everything you need to create professional marketing content for your restaurant or delivery business.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-card rounded-2xl p-6 border-2 transition-all duration-300 cursor-pointer ${
                  activeFeature === index 
                    ? 'border-primary shadow-glow scale-105' 
                    : 'border-border hover:border-primary/50 hover:shadow-lg'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                <div className="mt-4 flex items-center text-primary font-semibold text-sm">
                  Try Now <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Showcase Section */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
              Content Showcase
            </h2>
            <p className="text-muted-foreground">
              Examples of what you can create with our AI tools
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {showcaseItems.map((item, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-4 aspect-square flex flex-col justify-end text-white relative overflow-hidden group cursor-pointer`}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="relative z-10">
                  <div className="text-xs opacity-75 mb-1">{item.size}</div>
                  <div className="font-bold text-sm">{item.type}</div>
                </div>
                <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium">
                  Featured
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="bg-card rounded-3xl border-2 border-border p-8 sm:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
                How It Works
              </h2>
              <p className="text-muted-foreground">
                Create professional content in 3 simple steps
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-extrabold text-primary-foreground">1</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Describe Your Vision</h3>
                <p className="text-muted-foreground text-sm">
                  Tell the AI what you want to create. A promotional banner, a menu graphic, or a video clip.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-extrabold text-primary-foreground">2</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">AI Creates Options</h3>
                <p className="text-muted-foreground text-sm">
                  Our AI generates multiple professional options for you to choose from in seconds.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-extrabold text-primary-foreground">3</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Download & Share</h3>
                <p className="text-muted-foreground text-sm">
                  Pick your favorite, customize if needed, and download in any format you need.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
              Loved by Restaurant Owners
            </h2>
            <p className="text-muted-foreground">
              Join hundreds of satisfied business owners using our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 border-2 border-border">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-foreground mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-warning fill-warning" />
                  ))}
                </div>
                <div className="font-bold text-foreground">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing CTA */}
        <section className="max-w-4xl mx-auto px-4 py-16">
          <div className="bg-gradient-primary rounded-3xl p-8 sm:p-12 text-center text-primary-foreground">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Start creating professional content for your business today. First 10 creations are free!
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-5 h-5" />
                No credit card required
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-5 h-5" />
                10 free creations
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-5 h-5" />
                Cancel anytime
              </div>
            </div>

            <Button size="lg" className="bg-card text-foreground font-bold px-8 py-6 text-lg rounded-xl hover:bg-card/90 transition-colors shadow-xl">
              <Zap className="w-5 h-5 mr-2" />
              Get Started Free
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="max-w-6xl mx-auto px-4 py-12 text-center border-t border-border">
          <div className="flex justify-center gap-4 mb-6">
            <a href="#" className="p-3 bg-card rounded-xl border border-border hover:border-primary transition-colors">
              <Instagram className="w-5 h-5 text-muted-foreground" />
            </a>
            <a href="#" className="p-3 bg-card rounded-xl border border-border hover:border-primary transition-colors">
              <Facebook className="w-5 h-5 text-muted-foreground" />
            </a>
            <a href="#" className="p-3 bg-card rounded-xl border border-border hover:border-primary transition-colors">
              <Send className="w-5 h-5 text-muted-foreground" />
            </a>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2026 MrDelivery Creator Studio. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default BecomeCreator;
