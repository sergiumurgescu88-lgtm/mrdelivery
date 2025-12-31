import { useLanguage } from '@/contexts/LanguageContext';
import { PulsingBadge } from '@/components/PulsingBadge';

export const HeroBanner = () => {
  const { t } = useLanguage();

  return (
    <header className="text-center mb-6 sm:mb-8 md:mb-10 relative pt-12 sm:pt-16">
      {/* Hero Canvas Container */}
      <div className="relative mx-auto max-w-3xl">
        {/* Glassmorphism Card */}
        <div className="bg-card/80 backdrop-blur-md border-2 border-primary/30 rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl relative overflow-hidden">
          {/* Animated gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 animate-pulse opacity-50 rounded-3xl"></div>
          
          {/* Content */}
          <div className="relative z-10">
            <div className="inline-block relative mb-2 sm:mb-3 md:mb-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gradient-primary leading-tight">
                {t.siteName}
              </h1>
            </div>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground font-bold px-2 max-w-2xl mx-auto leading-relaxed">
              {t.tagline}
            </p>
            
            <div className="flex justify-center gap-2 sm:gap-3 mt-3 sm:mt-4 flex-wrap px-2">
              <PulsingBadge color="blue">{t.badges.ai}</PulsingBadge>
              <PulsingBadge color="purple">{t.badges.apps}</PulsingBadge>
              <PulsingBadge color="green">{t.badges.marketing}</PulsingBadge>
            </div>
          </div>
          
          {/* Corner decorations */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary/50 rounded-tl-lg"></div>
          <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary/50 rounded-tr-lg"></div>
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-primary/50 rounded-bl-lg"></div>
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary/50 rounded-br-lg"></div>
        </div>
      </div>
    </header>
  );
};
