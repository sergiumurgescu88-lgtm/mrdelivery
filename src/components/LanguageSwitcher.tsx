import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/i18n/translations';
import { Globe } from 'lucide-react';

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'EN', flag: '🇺🇸' },
  { code: 'es', label: 'ES', flag: '🇪🇸' },
  { code: 'ro', label: 'RO', flag: '🇷🇴' },
];

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < 50 || currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`fixed top-2 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
    }`}>
      <div className="flex items-center gap-0.5 bg-card/80 backdrop-blur-md rounded-full px-1 py-0.5 shadow-md border border-border/30">
        <Globe className="w-3 h-3 text-muted-foreground ml-1.5" />
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
              language === lang.code
                ? 'bg-gradient-primary text-primary-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted/80'
            }`}
          >
            <span className="mr-0.5">{lang.flag}</span>
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
};
