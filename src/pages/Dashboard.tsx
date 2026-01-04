import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { 
  Sparkles, 
  Image, 
  Play, 
  ChevronLeft, 
  ChevronRight,
  Star,
  CreditCard,
  Share2,
  UtensilsCrossed,
  Clock,
  Truck
} from 'lucide-react';
import { useState, useEffect } from 'react';

const heroSlides = [
  {
    title: 'Create Stunning Menus with AI',
    description: 'Generate professional-quality restaurant menus in minutes. Create any menu with amazing food imagery and text by entering a single prompt.',
    buttons: [
      { label: 'Start with AI', icon: Sparkles, primary: true },
      { label: 'Browse Gallery', icon: Image, primary: false },
      { label: 'How It Works', icon: Play, primary: false },
    ],
  },
  {
    title: 'Create Stunning Delivery Cards',
    description: 'Design professional delivery cards in minutes with AI-powered creativity. Perfect for restaurants, cafes, and food businesses.',
    buttons: [
      { label: 'Start with AI', icon: Sparkles, primary: true },
    ],
  },
  {
    title: 'Build Your Complete Restaurant Brand',
    description: 'Create professional menu cards and establish your brand kit. Keep your branding consistent across all your marketing materials.',
    buttons: [
      { label: 'Delivery Cards', icon: CreditCard, primary: true },
      { label: 'Brand Kit', icon: UtensilsCrossed, primary: false },
    ],
  },
  {
    title: 'Create Social Media Graphics',
    description: 'Design beautiful food graphics for Instagram, Facebook, and TikTok. Perfect for promotions, announcements, and daily specials.',
    buttons: [
      { label: 'Create Social Post', icon: Share2, primary: true },
    ],
  },
];

const menuShowcase = [
  { type: 'Menu Banner', size: '1200x630', image: '/placeholder.svg' },
  { type: 'Instagram Post', size: '1080x1080', image: '/placeholder.svg' },
  { type: 'Story', size: '1080x1920', image: '/placeholder.svg' },
  { type: 'Facebook Cover', size: '820x312', image: '/placeholder.svg' },
];

const deliveryShowcase = [
  { name: 'Pizza Paradise', type: 'Modern Menu', image: '/placeholder.svg' },
  { name: 'Sushi Express', type: 'Elegant Design', image: '/placeholder.svg' },
  { name: 'Burger King', type: 'Bold Menu', image: '/placeholder.svg' },
  { name: 'Thai Kitchen', type: 'Professional', image: '/placeholder.svg' },
];

const tutorials = [
  {
    title: 'Getting Started with MrDelivery',
    description: 'Learn the basics of creating your first AI-generated menu in minutes',
    duration: '5 min',
  },
  {
    title: 'Using the AI Menu Generator',
    description: 'Master the AI generator to create stunning menus with perfect descriptions',
    duration: '8 min',
  },
  {
    title: 'Design Studio Deep Dive',
    description: 'Explore advanced editing features and customize your designs',
    duration: '12 min',
  },
];

const testimonials = [
  {
    quote: 'MrDelivery has completely transformed how we create our restaurant menus. What used to take hours now takes minutes, and the quality is consistently excellent.',
    name: 'Marco Rossi',
    role: 'Owner at Bella Italia',
    initial: 'M',
  },
  {
    quote: 'As a food blogger, I need to create content fast. MrDelivery\'s AI-powered tools help me deliver professional graphics to my clients in record time.',
    name: 'Sarah Chen',
    role: 'Food Blogger at TastyBites',
    initial: 'S',
  },
  {
    quote: 'The variety of templates and customization options is amazing. I can maintain our brand consistency across all platforms while still being creative.',
    name: 'Emma Rodriguez',
    role: 'Marketing at FoodCo',
    initial: 'E',
  },
  {
    quote: 'Creating promotional materials for my delivery service used to be painful. Now I can generate eye-catching ads in minutes. Our orders have increased 40%!',
    name: 'David Park',
    role: 'Owner at FastBites Delivery',
    initial: 'D',
  },
  {
    quote: 'I love how easy it is to resize menus for different platforms. One design, multiple formats - it\'s a huge time saver for my content workflow.',
    name: 'Lisa Thompson',
    role: 'Content Creator',
    initial: 'L',
  },
];

export default function Dashboard() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-muted/30 to-background py-16 sm:py-24 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="min-h-[280px] flex flex-col items-center justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-6 transition-all duration-500">
              {heroSlides[currentSlide].title.split('AI').map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && <span className="text-gradient-primary">AI</span>}
                </span>
              ))}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 transition-all duration-500">
              {heroSlides[currentSlide].description}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {heroSlides[currentSlide].buttons.map((btn, index) => {
                const Icon = btn.icon;
                return (
                  <Button
                    key={index}
                    variant={btn.primary ? 'default' : 'outline'}
                    size="lg"
                    className={`gap-2 ${
                      btn.primary 
                        ? 'bg-gradient-primary text-primary-foreground shadow-lg hover:shadow-xl' 
                        : 'border-border hover:bg-muted'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {btn.label}
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'w-8 bg-primary' 
                    : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bar */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-card rounded-2xl shadow-xl border border-border p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1.5 bg-gradient-primary text-primary-foreground text-sm font-bold rounded-full flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              Get Started
            </span>
            <span className="text-foreground font-medium">Start Creating for Free!</span>
          </div>
          <Button className="bg-gradient-primary text-primary-foreground gap-2 shadow-md">
            <Sparkles className="w-4 h-4" />
            Free Credits
          </Button>
        </div>
      </section>

      {/* Menu Showcase */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold">
            <span className="text-gradient-primary">Menu</span> Showcase
          </h2>
          <span className="text-sm text-muted-foreground border border-border px-3 py-1 rounded-full">
            Featured
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {menuShowcase.map((item, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="aspect-video bg-muted relative">
                <div className="absolute top-3 right-3 px-2 py-1 bg-card/90 backdrop-blur-sm rounded-md text-xs font-medium text-muted-foreground">
                  {item.size}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <UtensilsCrossed className="w-12 h-12 text-muted-foreground/30" />
                </div>
              </div>
              <div className="p-4">
                <p className="font-medium text-foreground">{item.type}</p>
                <p className="text-sm text-muted-foreground">{item.size}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Delivery Showcase */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold">
            <span className="text-gradient-primary">Delivery</span> Showcase
          </h2>
          <span className="text-sm text-muted-foreground border border-border px-3 py-1 rounded-full">
            Featured
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {deliveryShowcase.map((item, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="aspect-square bg-muted relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Truck className="w-16 h-16 text-muted-foreground/30" />
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground">{item.type}</p>
                <p className="font-medium text-foreground">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tutorial Videos */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              <span className="text-gradient-primary">Tutorial</span> Videos
            </h2>
            <p className="text-muted-foreground">
              Learn how to create stunning menus, delivery cards, and more with MrDelivery
            </p>
          </div>
          <span className="text-sm text-muted-foreground border border-border px-3 py-1 rounded-full">
            Learn How
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tutorials.map((tutorial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl border border-border p-6 hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group"
            >
              <div className="aspect-video bg-muted rounded-xl mb-4 flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center shadow-lg">
                  <Play className="w-6 h-6 text-primary-foreground ml-1" />
                </div>
              </div>
              <h3 className="font-bold text-foreground mb-2">{tutorial.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{tutorial.description}</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                {tutorial.duration}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
          Loved by <span className="text-gradient-primary">Restaurants</span> Worldwide
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Join thousands of restaurant owners, chefs, and food businesses who trust MrDelivery for their visual content needs
        </p>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="max-w-2xl mx-auto bg-card rounded-2xl border border-border p-8 text-center">
                    <p className="text-lg text-foreground mb-6 italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center justify-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                        {testimonial.initial}
                      </div>
                      <div className="text-left">
                        <p className="font-bold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>

        <p className="text-center text-muted-foreground mt-8">
          ⭐ Rated 4.9/5 from over 10,000+ happy restaurants
        </p>
      </section>
    </Layout>
  );
}
