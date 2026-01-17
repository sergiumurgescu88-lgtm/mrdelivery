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
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-lg bg-black rounded-2xl shadow-2xl border border-yellow-500/30 overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
        {/* Header */}
        <div className="p-5 pb-4 border-b border-yellow-500/20">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-yellow-500 rounded-xl">
              <Cookie className="w-5 h-5 text-black" />
            </div>
            <div className="flex-1">
              <h2 className="font-bold text-lg text-white flex items-center gap-2">
                {t.title} <span className="text-xl">🍪</span>
              </h2>
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-3">
            {t.description}
          </p>
        </div>

        {/* Cookie Categories - Collapsible */}
        {showDetails && (
          <div className="p-5 space-y-4 border-b border-yellow-500/20 max-h-[300px] overflow-y-auto">
            {/* Necessary */}
            <div className="flex items-center justify-between p-3 bg-yellow-500/10 rounded-xl border border-yellow-500/30">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-yellow-500" />
                <div>
                  <p className="font-medium text-white text-sm">{t.necessary}</p>
                  <p className="text-xs text-gray-400">{t.necessaryDesc}</p>
                </div>
              </div>
              <span className="text-xs bg-yellow-500/20 text-yellow-500 px-2 py-1 rounded-full font-medium">
                {t.alwaysActive}
              </span>
            </div>

            {/* Functional */}
            <div className="flex items-center justify-between p-3 bg-gray-900/50 rounded-xl border border-gray-700">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                <div>
                  <p className="font-medium text-white text-sm">{t.functional}</p>
                  <p className="text-xs text-gray-400">{t.functionalDesc}</p>
                </div>
              </div>
              <Switch
                checked={preferences.functional}
                onCheckedChange={(checked) => setPreferences({ ...preferences, functional: checked })}
                className="data-[state=checked]:bg-yellow-500"
              />
            </div>

            {/* Analytics */}
            <div className="flex items-center justify-between p-3 bg-gray-900/50 rounded-xl border border-gray-700">
              <div className="flex items-center gap-3">
                <BarChart3 className="w-5 h-5 text-yellow-400" />
                <div>
                  <p className="font-medium text-white text-sm">{t.analytics}</p>
                  <p className="text-xs text-gray-400">{t.analyticsDesc}</p>
                </div>
              </div>
              <Switch
                checked={preferences.analytics}
                onCheckedChange={(checked) => setPreferences({ ...preferences, analytics: checked })}
                className="data-[state=checked]:bg-yellow-500"
              />
            </div>

            {/* Marketing */}
            <div className="flex items-center justify-between p-3 bg-gray-900/50 rounded-xl border border-gray-700">
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-yellow-400" />
                <div>
                  <p className="font-medium text-white text-sm">{t.marketing}</p>
                  <p className="text-xs text-gray-400">{t.marketingDesc}</p>
                </div>
              </div>
              <Switch
                checked={preferences.marketing}
                onCheckedChange={(checked) => setPreferences({ ...preferences, marketing: checked })}
                className="data-[state=checked]:bg-yellow-500"
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
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold"
              >
                {t.save}
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setShowDetails(false)}
                className="w-full border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
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
                  className="flex-1 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold"
                >
                  {t.acceptAll}
                </Button>
                <Button 
                  variant="outline" 
                  onClick={handleRejectAll}
                  className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                  {t.rejectAll}
                </Button>
              </div>
              <Button 
                variant="ghost" 
                onClick={() => setShowDetails(true)}
                className="w-full text-gray-400 hover:text-yellow-500 hover:bg-gray-800"
              >
                <Settings className="w-4 h-4 mr-2" />
                {t.customize}
              </Button>
            </>
          )}

          {/* Links */}
          <div className="flex justify-center gap-4 pt-2 text-xs text-gray-500">
            <Link to="/politica-cookies" className="hover:text-yellow-500 hover:underline">
              {t.moreInfo}
            </Link>
            <span>•</span>
            <Link to="/termeni-si-conditii" className="hover:text-yellow-500 hover:underline">
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
