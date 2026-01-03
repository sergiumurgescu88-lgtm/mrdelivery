import { useState, useEffect } from 'react';

type CountryCode = 'ro' | 'es' | 'en';

interface GeoLocationResult {
  countryCode: CountryCode;
  isLoading: boolean;
}

export const useGeoLocation = (): GeoLocationResult => {
  const [countryCode, setCountryCode] = useState<CountryCode>('en');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const detectCountry = async () => {
      try {
        // Using ipapi.co free API for geolocation
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        const country = data.country_code?.toUpperCase();
        
        if (country === 'RO') {
          setCountryCode('ro');
        } else if (country === 'ES' || country === 'MX' || country === 'AR' || country === 'CO' || country === 'CL' || country === 'PE' || country === 'VE') {
          // Spain and Latin American Spanish-speaking countries
          setCountryCode('es');
        } else {
          // Default to English for US, UK, and all other countries
          setCountryCode('en');
        }
      } catch (error) {
        console.log('Geolocation detection failed, defaulting to English');
        setCountryCode('en');
      } finally {
        setIsLoading(false);
      }
    };

    detectCountry();
  }, []);

  return { countryCode, isLoading };
};
