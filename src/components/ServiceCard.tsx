import { useState, ReactNode } from 'react';
import { ChevronDown, Star, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  icon: LucideIcon;
  children: ReactNode;
  price?: string;
  subtitle?: string;
  highlight?: boolean;
}

export const ServiceCard = ({ title, icon: Icon, children, price, subtitle, highlight = false }: ServiceCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
        highlight
          ? 'border-primary shadow-2xl bg-gradient-to-br from-primary/5 via-card to-accent/10'
          : 'border-border hover:shadow-xl bg-card'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`p-4 sm:p-5 cursor-pointer relative overflow-hidden ${
          highlight ? 'bg-gradient-primary' : 'bg-gradient-to-r from-muted/50 to-muted'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-start justify-between gap-2 sm:gap-3 relative z-10">
          <div className="flex items-start gap-2 sm:gap-4 flex-1 min-w-0">
            <div
              className={`p-2 sm:p-3 rounded-xl flex-shrink-0 transition-all duration-300 ${
                highlight ? 'bg-card shadow-lg' : 'bg-gradient-primary'
              } ${isHovered ? 'scale-110 rotate-3' : ''}`}
            >
              <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${highlight ? 'text-primary' : 'text-primary-foreground'}`} />
            </div>
            <div className="flex-1 min-w-0">
              <h3
                className={`text-base sm:text-lg font-bold mb-1 leading-tight ${
                  highlight ? 'text-primary-foreground' : 'text-foreground'
                }`}
              >
                {title}
              </h3>
              {subtitle && (
                <p className={`text-xs sm:text-sm mb-2 ${highlight ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                  {subtitle}
                </p>
              )}
              {price && (
                <div
                  className={`inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold ${
                    highlight ? 'bg-card text-primary' : 'bg-primary/10 text-primary'
                  }`}
                >
                  <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="break-words">{price}</span>
                </div>
              )}
            </div>
          </div>
          <div className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 ${highlight ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
          </div>
        </div>

        {highlight && (
          <>
            <div className="absolute top-0 right-0 w-32 h-32 bg-card/10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/20 rounded-full -ml-12 -mb-12"></div>
          </>
        )}
      </div>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4 sm:p-6 bg-card">{children}</div>
      </div>
    </div>
  );
};
