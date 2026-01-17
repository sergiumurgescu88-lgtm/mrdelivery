import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations } from '@/i18n/translations';

type UserCountry = 'RO' | 'ES' | 'US' | 'UK' | 'OTHER';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations['en'];
  userCountry: UserCountry;
  isLoading: boolean;
  availableLanguages: Language[];
}

const LANGUAGE_STORAGE_KEY = 'mrdelivery_user_language';
const COUNTRY_STORAGE_KEY = 'mrdelivery_user_country';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const getDefaultLanguageForCountry = (country: UserCountry): Language => {
  switch (country) {
    case 'RO':
      return 'ro';
    case 'ES':
      return 'es';
    case 'US':
    case 'UK':
    case 'OTHER':
    default:
      return 'en';
  }
};

const getAvailableLanguagesForCountry = (country: UserCountry): Language[] => {
  if (country === 'RO') {
    // Romanian users see all languages
    return ['ro', 'es', 'en'];
  }
  // All other countries: hide Romanian
  return ['es', 'en'];
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [userCountry, setUserCountry] = useState<UserCountry>('OTHER');
  const [isLoading, setIsLoading] = useState(true);
  const [availableLanguages, setAvailableLanguages] = useState<Language[]>(['es', 'en']);

  useEffect(() => {
    const detectCountryAndSetLanguage = async () => {
      // Check if user has manually selected a language before
      const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language | null;
      const savedCountry = localStorage.getItem(COUNTRY_STORAGE_KEY) as UserCountry | null;

      // If we have saved country, use it to set available languages
      if (savedCountry) {
        setUserCountry(savedCountry);
        setAvailableLanguages(getAvailableLanguagesForCountry(savedCountry));
        
        if (savedLanguage) {
          // Validate saved language is still available
          const available = getAvailableLanguagesForCountry(savedCountry);
          if (available.includes(savedLanguage)) {
            setLanguageState(savedLanguage);
          } else {
            // Fall back to default for country
            const defaultLang = getDefaultLanguageForCountry(savedCountry);
            setLanguageState(defaultLang);
            localStorage.setItem(LANGUAGE_STORAGE_KEY, defaultLang);
          }
        }
        setIsLoading(false);
        return;
      }

      try {
        // Use ipapi.co for geolocation detection
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        const countryCode = data.country_code?.toUpperCase();
        let detectedCountry: UserCountry = 'OTHER';
        
        if (countryCode === 'RO') {
          detectedCountry = 'RO';
        } else if (countryCode === 'ES') {
          detectedCountry = 'ES';
        } else if (countryCode === 'US') {
          detectedCountry = 'US';
        } else if (countryCode === 'GB') {
          detectedCountry = 'UK';
        } else {
          detectedCountry = 'OTHER';
        }

        setUserCountry(detectedCountry);
        localStorage.setItem(COUNTRY_STORAGE_KEY, detectedCountry);
        
        const available = getAvailableLanguagesForCountry(detectedCountry);
        setAvailableLanguages(available);
        
        // If user has a saved language preference, use it if still available
        if (savedLanguage && available.includes(savedLanguage)) {
          setLanguageState(savedLanguage);
        } else {
          // Set default language based on country
          const defaultLang = getDefaultLanguageForCountry(detectedCountry);
          setLanguageState(defaultLang);
          localStorage.setItem(LANGUAGE_STORAGE_KEY, defaultLang);
        }
      } catch (error) {
        console.log('Geolocation detection failed, defaulting to English');
        setUserCountry('OTHER');
        setAvailableLanguages(['es', 'en']);
        
        // Check for saved language
        if (savedLanguage && ['es', 'en'].includes(savedLanguage)) {
          setLanguageState(savedLanguage);
        } else {
          setLanguageState('en');
          localStorage.setItem(LANGUAGE_STORAGE_KEY, 'en');
        }
      } finally {
        setIsLoading(false);
      }
    };

    detectCountryAndSetLanguage();
  }, []);

  const setLanguage = (lang: Language) => {
    // Validate that the language is available for this user
    if (availableLanguages.includes(lang)) {
      setLanguageState(lang);
      localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    }
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, userCountry, isLoading, availableLanguages }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
