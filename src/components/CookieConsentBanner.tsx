import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { legalTranslations } from '@/i18n/legalTranslations';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Cookie, Settings, X, Shield, BarChart3, Target, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

const COOKIE_CONSENT_KEY = 'mrdelivery_cookie_consent';
const COOKIE_PREFERENCES_KEY = 'mrdelivery_cookie_preferences';

export const CookieConsentBanner = () => {
  const { language } = useLanguage();
  const t = legalTranslations[language]?.cookieBanner || legalTranslations.en.cookieBanner;
  
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay to not show immediately on page load
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    } else {
      // Load saved preferences
      const savedPrefs = localStorage.getItem(COOKIE_PREFERENCES_KEY);
      if (savedPrefs) {
        setPreferences(JSON.parse(savedPrefs));
      }
    }
  }, []);

  const saveConsent = (prefs: CookiePreferences) => {
    const consentData = {
      timestamp: new Date().toISOString(),
      preferences: prefs,
    };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentData));
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(prefs));
    setPreferences(prefs);
    setIsVisible(false);

    // Here you would typically initialize/disable tracking scripts based on preferences
    // For example:
    // if (prefs.analytics) { initGoogleAnalytics(); }
    // if (prefs.marketing) { initFacebookPixel(); }
  };

  const handleAcceptAll = () => {
    saveConsent({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    });
  };

  const handleRejectAll = () => {
    saveConsent({
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    });
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-lg bg-card rounded-2xl shadow-2xl border border-border overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
        {/* Header */}
        <div className="p-5 pb-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gradient-primary rounded-xl">
              <Cookie className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <h2 className="font-bold text-lg text-foreground">{t.title}</h2>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            {t.description}
          </p>
        </div>

        {/* Cookie Categories - Collapsible */}
        {showDetails && (
          <div className="p-5 space-y-4 border-b border-border max-h-[300px] overflow-y-auto">
            {/* Necessary */}
            <div className="flex items-center justify-between p-3 bg-primary/5 rounded-xl border border-primary/20">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium text-foreground text-sm">{t.necessary}</p>
                  <p className="text-xs text-muted-foreground">{t.necessaryDesc}</p>
                </div>
              </div>
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                {t.alwaysActive}
              </span>
            </div>

            {/* Functional */}
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-xl border border-border">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-secondary" />
                <div>
                  <p className="font-medium text-foreground text-sm">{t.functional}</p>
                  <p className="text-xs text-muted-foreground">{t.functionalDesc}</p>
                </div>
              </div>
              <Switch
                checked={preferences.functional}
                onCheckedChange={(checked) => setPreferences({ ...preferences, functional: checked })}
              />
            </div>

            {/* Analytics */}
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-xl border border-border">
              <div className="flex items-center gap-3">
                <BarChart3 className="w-5 h-5 text-accent" />
                <div>
                  <p className="font-medium text-foreground text-sm">{t.analytics}</p>
                  <p className="text-xs text-muted-foreground">{t.analyticsDesc}</p>
                </div>
              </div>
              <Switch
                checked={preferences.analytics}
                onCheckedChange={(checked) => setPreferences({ ...preferences, analytics: checked })}
              />
            </div>

            {/* Marketing */}
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-xl border border-border">
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-warning" />
                <div>
                  <p className="font-medium text-foreground text-sm">{t.marketing}</p>
                  <p className="text-xs text-muted-foreground">{t.marketingDesc}</p>
                </div>
              </div>
              <Switch
                checked={preferences.marketing}
                onCheckedChange={(checked) => setPreferences({ ...preferences, marketing: checked })}
              />
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="p-5 space-y-3">
          {showDetails ? (
            <>
              <Button 
                onClick={handleSavePreferences}
                className="w-full bg-gradient-primary text-primary-foreground font-semibold"
              >
                {t.save}
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setShowDetails(false)}
                className="w-full"
              >
                <X className="w-4 h-4 mr-2" />
                {language === 'ro' ? 'Închide' : language === 'es' ? 'Cerrar' : 'Close'}
              </Button>
            </>
          ) : (
            <>
              <div className="flex gap-3">
                <Button 
                  onClick={handleAcceptAll}
                  className="flex-1 bg-gradient-primary text-primary-foreground font-semibold"
                >
                  {t.acceptAll}
                </Button>
                <Button 
                  variant="outline" 
                  onClick={handleRejectAll}
                  className="flex-1"
                >
                  {t.rejectAll}
                </Button>
              </div>
              <Button 
                variant="ghost" 
                onClick={() => setShowDetails(true)}
                className="w-full text-muted-foreground hover:text-foreground"
              >
                <Settings className="w-4 h-4 mr-2" />
                {t.customize}
              </Button>
            </>
          )}

          {/* Links */}
          <div className="flex justify-center gap-4 pt-2 text-xs text-muted-foreground">
            <Link to="/politica-cookies" className="hover:text-primary hover:underline">
              {t.moreInfo}
            </Link>
            <span>•</span>
            <Link to="/termeni-si-conditii" className="hover:text-primary hover:underline">
              {language === 'ro' ? 'Termeni' : language === 'es' ? 'Términos' : 'Terms'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Hook to check cookie preferences
export const useCookiePreferences = (): CookiePreferences => {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const savedPrefs = localStorage.getItem(COOKIE_PREFERENCES_KEY);
    if (savedPrefs) {
      setPreferences(JSON.parse(savedPrefs));
    }
  }, []);

  return preferences;
};

// Function to open cookie settings (can be called from footer link)
export const openCookieSettings = () => {
  localStorage.removeItem(COOKIE_CONSENT_KEY);
  window.location.reload();
};

export default CookieConsentBanner;
