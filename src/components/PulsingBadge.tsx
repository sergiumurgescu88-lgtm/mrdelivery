import { ReactNode } from 'react';

interface PulsingBadgeProps {
  children: ReactNode;
  color?: 'blue' | 'purple' | 'green' | 'yellow' | 'gold';
}

export const PulsingBadge = ({ children, color = 'blue' }: PulsingBadgeProps) => {
  const colorClasses = {
    blue: 'from-primary to-primary/80',
    purple: 'from-accent to-accent/80',
    green: 'from-success to-success/80',
    yellow: 'from-warning to-warning/80',
    gold: 'from-amber-500 to-amber-600',
  };

  // Gold gets special premium styling with dark text
  const isGold = color === 'gold';

  return (
    <div className="relative inline-block">
      <div
        className={`absolute inset-0 bg-gradient-to-r ${colorClasses[color]} rounded-full blur-md ${isGold ? 'opacity-70' : 'opacity-50'} animate-pulse`}
      ></div>
      <div
        className={`relative bg-gradient-to-r ${colorClasses[color]} ${isGold ? 'text-amber-950 font-black' : 'text-primary-foreground'} px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg ${isGold ? 'shadow-amber-500/50' : ''}`}
      >
        {children}
      </div>
    </div>
  );
};
