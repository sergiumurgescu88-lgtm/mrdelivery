import { useLanguage } from '@/contexts/LanguageContext';
import { Sparkles, Puzzle } from 'lucide-react';

export const ModularBanner = () => {
  const { t } = useLanguage();

  return (
    <div className="relative mx-auto max-w-3xl">
      {/* Glassmorphism Card matching Hero */}
      <div className="bg-card/80 backdrop-blur-md border-2 border-success/30 rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl relative overflow-hidden">
        {/* Animated gradient border effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-success/20 via-primary/20 to-secondary/20 animate-pulse opacity-50 rounded-3xl"></div>
        
        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="p-2 sm:p-3 bg-gradient-to-br from-success to-primary rounded-xl shadow-lg">
              <Puzzle className="w-5 h-5 sm:w-6 sm:h-6 text-success-foreground" />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-gradient-primary">
              {t.aiServices.modular}
            </h3>
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-warning animate-pulse" />
          </div>
          
          <p className="text-sm sm:text-base md:text-lg text-foreground font-medium text-center leading-relaxed max-w-2xl mx-auto">
            {t.aiServices.modularDesc}
          </p>
        </div>
        
        {/* Corner decorations */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-success/50 rounded-tl-lg"></div>
        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-success/50 rounded-tr-lg"></div>
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-success/50 rounded-bl-lg"></div>
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-success/50 rounded-br-lg"></div>
      </div>
    </div>
  );
};
