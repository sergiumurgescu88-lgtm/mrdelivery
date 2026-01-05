import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { StudioLayout } from '@/components/creator-studio/StudioLayout';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
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

// Import banner images
import bannerFreeDelivery from '@/assets/banner-free-delivery.png';
import bannerNewMenu from '@/assets/banner-new-menu.png';
import bannerWeekendDeals from '@/assets/banner-weekend-deals.png';
import bannerPizzaSpecial from '@/assets/banner-pizza-special.png';

// Import logo images
import logoFastFoodHub from '@/assets/logo-fast-food-hub.png';
import logoQuickBites from '@/assets/logo-quick-bites.png';
import logoGoldenFork from '@/assets/logo-golden-fork.png';
import logoHeritageEats from '@/assets/logo-heritage-eats.png';

const showcaseBanners = [
  { title: 'Free Delivery', type: 'Story', size: '1024x1024', image: bannerFreeDelivery },
  { title: 'New Menu', type: 'Facebook Cover', size: '820x312', image: bannerNewMenu },
  { title: 'Weekend Deals', type: 'Banner', size: '1024x1536', image: bannerWeekendDeals },
  { title: 'Pizza Special', type: 'Facebook Post', size: '1200x630', image: bannerPizzaSpecial }
];

const showcaseLogos = [
  { title: 'Fast Food Hub', style: '3D Logo', image: logoFastFoodHub },
  { title: 'Quick Bites', style: 'Bold Logo', image: logoQuickBites },
  { title: 'Golden Fork', style: 'Modern Logo', image: logoGoldenFork },
  { title: 'Heritage Eats', style: 'Professional', image: logoHeritageEats }
];

const heroSlideButtonLinks = [
  ['/creator-studio/banner', '#gallery', '#how-it-works'],
  ['/creator-studio/logo'],
  ['/creator-studio/business-cards', '#brand-kit'],
  ['/creator-studio/social-posts']
];

const Dashboard = () => {
  const { profile } = useAuth();
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = t.creatorStudio.dashboard.heroSlides;
  const testimonials = t.creatorStudio.dashboard.testimonials;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const gradients = [
    'from-primary via-secondary to-accent',
    'from-secondary via-accent to-primary',
    'from-accent via-primary to-secondary',
    'from-warning via-destructive to-accent'
  ];

  return (
    <StudioLayout>
      {/* Hero Carousel */}
      <section className="relative mb-12 rounded-3xl overflow-hidden">
        <div className={`bg-gradient-to-br ${gradients[currentSlide]} p-8 sm:p-12 lg:p-16 min-h-[400px] flex flex-col justify-center transition-all duration-500`}>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-4 max-w-2xl">
            {heroSlides[currentSlide].title}
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mb-8">
            {heroSlides[currentSlide].description}
          </p>
          <div className="flex flex-wrap gap-3">
            {heroSlides[currentSlide].buttons.map((btnLabel: string, i: number) => (
              <Link key={i} to={heroSlideButtonLinks[currentSlide]?.[i] || '#'}>
                <Button 
                  variant={i === 0 ? 'secondary' : 'outline'} 
                  size="lg"
                  className={i === 0 
                    ? 'bg-card text-foreground hover:bg-card/90 font-bold gap-2' 
                    : 'border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-bold gap-2'
                  }
                >
                  {i === 0 && <Sparkles className="w-5 h-5" />}
                  {btnLabel}
                </Button>
              </Link>
            ))}
          </div>
          
          {/* Carousel Navigation */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {heroSlides.map((_: any, i: number) => (
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
            <span className="text-sm font-bold text-primary">{t.creatorStudio.dashboard.getStarted}</span>
            <p className="text-foreground font-semibold">{t.creatorStudio.dashboard.startCreating}</p>
          </div>
        </div>
        <Link to="/creator-studio/credits">
          <Button className="bg-gradient-primary text-primary-foreground font-bold gap-2">
            <Coins className="w-4 h-4" />
            {t.creatorStudio.dashboard.freeCredits}
          </Button>
        </Link>
      </section>

      {/* Banner Showcase */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="text-gradient-primary">{t.creatorStudio.dashboard.bannerShowcase}</span>
          </h2>
          <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">{t.creatorStudio.dashboard.featured}</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {showcaseBanners.map((banner, i) => (
            <div key={i} className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={banner.image} 
                  alt={banner.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
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
            <span className="text-gradient-primary">{t.creatorStudio.dashboard.logoShowcase}</span>
          </h2>
          <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">{t.creatorStudio.dashboard.featured}</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {showcaseLogos.map((logo, i) => (
            <div key={i} className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={logo.image} 
                  alt={logo.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
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
            {t.creatorStudio.dashboard.lovedBy}
          </h2>
          <p className="text-muted-foreground">
            {t.creatorStudio.dashboard.lovedByDesc}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial: any, i: number) => (
            <div key={i} className="bg-card rounded-2xl border border-border p-6">
              <p className="text-foreground mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
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
          <p className="text-muted-foreground">⭐ {t.creatorStudio.dashboard.rating}</p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-foreground mb-2">
            {t.creatorStudio.dashboard.features.title}
          </h2>
          <Link to="/creator-studio/credits">
            <Button variant="outline" className="mt-4">{t.creatorStudio.dashboard.features.viewPlans}</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center mb-4">
              <Sparkles className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-bold text-lg text-foreground mb-2">{t.creatorStudio.dashboard.features.aiLogoMaker}</h3>
            <p className="text-muted-foreground text-sm">{t.creatorStudio.dashboard.features.aiLogoMakerDesc}</p>
          </div>
          <div className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4">
              <Palette className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-bold text-lg text-foreground mb-2">{t.creatorStudio.dashboard.features.brandKit}</h3>
            <p className="text-muted-foreground text-sm">{t.creatorStudio.dashboard.features.brandKitDesc}</p>
          </div>
          <div className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-gradient-to-br from-accent to-warning rounded-xl flex items-center justify-center mb-4">
              <CreditCard className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-bold text-lg text-foreground mb-2">{t.creatorStudio.dashboard.features.businessCardMaker}</h3>
            <p className="text-muted-foreground text-sm">{t.creatorStudio.dashboard.features.businessCardMakerDesc}</p>
          </div>
          <div className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
              <Image className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-bold text-lg text-foreground mb-2">{t.creatorStudio.dashboard.features.aiBannerGenerator}</h3>
            <p className="text-muted-foreground text-sm">{t.creatorStudio.dashboard.features.aiBannerGeneratorDesc}</p>
          </div>
          <div className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-gradient-to-br from-warning to-destructive rounded-xl flex items-center justify-center mb-4">
              <Type className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-bold text-lg text-foreground mb-2">{t.creatorStudio.dashboard.features.socialPostGenerator}</h3>
            <p className="text-muted-foreground text-sm">{t.creatorStudio.dashboard.features.socialPostGeneratorDesc}</p>
          </div>
          <div className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-all group cursor-pointer">
            <Link to="/creator-studio/logo" className="block">
              <div className="w-14 h-14 bg-gradient-to-br from-success to-primary rounded-xl flex items-center justify-center mb-4">
                <Wand2 className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">{t.creatorStudio.dashboard.features.needLogo}</h3>
              <p className="text-muted-foreground text-sm mb-4">{t.creatorStudio.dashboard.features.needLogoDesc}</p>
              <span className="text-primary font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                {t.creatorStudio.dashboard.features.tryLogoMaker} <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </StudioLayout>
  );
};

export default Dashboard;
