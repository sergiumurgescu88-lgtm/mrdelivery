import { useEffect, useRef, useState, ReactNode } from 'react';
import { ChevronDown, Star, Volume2, LucideIcon } from 'lucide-react';
import type { PackageType } from './CinematicPlayer';

interface ServiceCardProps {
  title: string;
  icon: LucideIcon;
  children: ReactNode;
  price?: ReactNode;
  originalPrice?: string;
  discount?: ReactNode;
  discountNote?: string;
  subtitle?: string;
  highlight?: boolean;
  packageNumber?: number;
  telegramButton?: ReactNode;
  audioPackage?: PackageType;
  onPlayAudio?: (pkg: PackageType) => void;
}

export const ServiceCard = ({
  title,
  icon: Icon,
  children,
  price,
  originalPrice,
  discount,
  discountNote,
  subtitle,
  highlight = false,
  packageNumber,
  telegramButton,
  audioPackage,
  onPlayAudio,
}: ServiceCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  // On mobile, when expanding a card, scroll it into view so the full content can be seen.
  useEffect(() => {
    if (!isOpen) return;

    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    const isSmallScreen = window.matchMedia?.('(max-width: 640px)')?.matches;

    if (!isSmallScreen) return;

    // Wait for the expand transition/layout.
    const id = window.setTimeout(() => {
      cardRef.current?.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      });
    }, 50);

    return () => window.clearTimeout(id);
  }, [isOpen]);


  return (
    <div
      ref={cardRef}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Premium Animated Border - Traveling Light */}
      {packageNumber && (
        <>
          {/* Traveling light border effect - no glow, just clean animation */}
          <div 
            className="absolute -inset-[2px] rounded-[20px] pointer-events-none"
            style={{
              background: `conic-gradient(from var(--border-angle, 0deg), 
                transparent 0deg, 
                transparent 45deg, 
                rgba(251, 191, 36, 0.3) 80deg, 
                #fbbf24 120deg, 
                #fef08a 150deg, 
                #fbbf24 180deg, 
                rgba(251, 191, 36, 0.3) 220deg, 
                transparent 255deg, 
                transparent 360deg)`,
              animation: 'border-rotate 4s linear infinite',
            }}
          />
          
          {/* Inner dark background to make border visible */}
          <div className="absolute inset-[2px] rounded-[18px] bg-card pointer-events-none" />
        </>
      )}

      {/* Main Card Content */}
      <div
        className={`relative z-[5] rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur-sm ${
          packageNumber
            ? 'border-0 bg-card/95'
            : highlight
            ? 'border-0 shadow-2xl bg-gradient-to-br from-primary/5 via-card/70 to-accent/10'
            : 'border-0 hover:shadow-xl bg-card/70'
        }`}
      >
      {/* Large Package Number Background - BOLD & VISIBLE on Desktop */}
      {packageNumber && (
        <div className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-[1] pointer-events-none select-none">
          {/* Main solid number - more visible on desktop with increased opacity */}
          <span 
            className="text-[200px] sm:text-[260px] md:text-[320px] lg:text-[380px] font-black leading-none block opacity-25 md:opacity-50"
            style={{
              color: packageNumber === 1 ? '#22d3ee' :      // Cyan
                     packageNumber === 2 ? '#e879f9' :      // Fuchsia
                     packageNumber === 3 ? '#fbbf24' :      // Amber
                     packageNumber === 4 ? '#34d399' :      // Emerald
                     packageNumber === 5 ? '#f97316' :      // Orange
                     packageNumber === 6 ? '#06b6d4' :      // Cyan-500
                     packageNumber === 7 ? '#8b5cf6' :      // Violet
                     packageNumber === 8 ? '#ec4899' :      // Pink
                     '#6366f1',                             // Indigo (9)
              WebkitTextStroke: packageNumber === 1 ? '6px #0891b2' :
                               packageNumber === 2 ? '6px #c026d3' :
                               packageNumber === 3 ? '6px #d97706' :
                               packageNumber === 4 ? '6px #059669' :
                               packageNumber === 5 ? '6px #ea580c' :
                               packageNumber === 6 ? '6px #0891b2' :
                               packageNumber === 7 ? '6px #7c3aed' :
                               packageNumber === 8 ? '6px #db2777' :
                               '6px #4f46e5',
              textShadow: `0 4px 30px ${
                packageNumber === 1 ? 'rgba(34, 211, 238, 0.5)' :
                packageNumber === 2 ? 'rgba(232, 121, 249, 0.5)' :
                packageNumber === 3 ? 'rgba(251, 191, 36, 0.5)' :
                packageNumber === 4 ? 'rgba(52, 211, 153, 0.5)' :
                packageNumber === 5 ? 'rgba(249, 115, 22, 0.5)' :
                packageNumber === 6 ? 'rgba(6, 182, 212, 0.5)' :
                packageNumber === 7 ? 'rgba(139, 92, 246, 0.5)' :
                packageNumber === 8 ? 'rgba(236, 72, 153, 0.5)' :
                'rgba(99, 102, 241, 0.5)'
              }`,
            }}
            aria-hidden="true"
          >
            {packageNumber}
          </span>
        </div>
      )}
      <div
        className={`p-4 sm:p-5 cursor-pointer relative overflow-hidden ${
          highlight ? 'bg-gradient-primary' : 'bg-gradient-to-r from-muted/50 to-muted'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-start justify-between gap-2 sm:gap-3 relative z-10">
          <div className="flex items-start gap-2 sm:gap-4 flex-1 min-w-0">
            <div className="flex flex-col items-center gap-1 flex-shrink-0">
              <div
                className={`p-2 sm:p-3 rounded-xl transition-all duration-300 ${
                  highlight ? 'bg-card shadow-lg' : 'bg-gradient-primary'
                } ${isHovered ? 'scale-110 rotate-3' : ''}`}
              >
                <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${highlight ? 'text-primary' : 'text-primary-foreground'}`} />
              </div>
              {/* Audio Button */}
              {audioPackage && onPlayAudio && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onPlayAudio(audioPackage);
                  }}
                  className="mt-2 p-3 sm:p-4 rounded-full transition-all duration-300 hover:scale-110 bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 text-amber-950 shadow-lg shadow-amber-500/40 hover:shadow-xl hover:shadow-amber-500/50"
                  title="Ascultă prezentarea"
                >
                  <Volume2 className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h3
                className={`text-lg sm:text-xl font-bold mb-1 leading-tight ${
                  highlight ? 'text-primary-foreground' : 'text-foreground'
                }`}
              >
                {title}
              </h3>
              {subtitle && (
                <p className={`text-sm sm:text-base mb-2 ${highlight ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                  {subtitle}
                </p>
              )}
              {(price || originalPrice || discount || telegramButton) && (
                <div className="flex flex-wrap items-center gap-2 mt-1">
                  {discount && (
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded-full text-sm font-bold ${
                        highlight ? 'bg-green-500 text-white' : 'bg-green-500 text-white'
                      }`}
                    >
                      {discount}
                    </span>
                  )}
                  {originalPrice && (
                    <span
                      className={`text-sm sm:text-base line-through ${
                        highlight ? 'text-primary-foreground/50' : 'text-muted-foreground'
                      }`}
                    >
                      {originalPrice}
                    </span>
                  )}
                  {price && (
                    <div
                      className={`inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 rounded-full text-sm sm:text-base font-bold ${
                        highlight ? 'bg-card text-primary' : 'bg-primary/10 text-primary'
                      }`}
                    >
                      <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span className="break-words">{price}</span>
                    </div>
                  )}
                  {telegramButton && <div className="flex-shrink-0">{telegramButton}</div>}
                </div>
              )}
              {discountNote && (
                <p className={`text-sm mt-1 ${highlight ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>{discountNote}</p>
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

      <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-none opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="p-4 sm:p-6 bg-card text-left">{children}</div>
      </div>
      </div>
    </div>
  );
};
