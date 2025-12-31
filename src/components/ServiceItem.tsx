import { useState, useEffect } from 'react';
import { Check, LucideIcon } from 'lucide-react';

interface ServiceItemProps {
  text: string;
  icon?: LucideIcon;
}

export const ServiceItem = ({ text, icon: Icon }: ServiceItemProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4 transition-all duration-500 transform ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
      }`}
    >
      <div className="p-1 rounded-lg bg-gradient-success flex-shrink-0 mt-0.5">
        {Icon ? (
          <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-success-foreground" />
        ) : (
          <Check className="w-3 h-3 sm:w-4 sm:h-4 text-success-foreground" />
        )}
      </div>
      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{text}</p>
    </div>
  );
};
