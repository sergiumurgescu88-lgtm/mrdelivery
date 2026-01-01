import { ReactNode } from 'react';

interface PulsingBadgeProps {
  children: ReactNode;
  color?: 'blue' | 'purple' | 'green' | 'yellow';
}

export const PulsingBadge = ({ children, color = 'blue' }: PulsingBadgeProps) => {
  const colorClasses = {
    blue: 'from-primary to-primary/80',
    purple: 'from-accent to-accent/80',
    green: 'from-success to-success/80',
    yellow: 'from-warning to-warning/80',
  };

  return (
    <div className="relative inline-block">
      <div
        className={`absolute inset-0 bg-gradient-to-r ${colorClasses[color]} rounded-full blur-md opacity-50 animate-pulse`}
      ></div>
      <div
        className={`relative bg-gradient-to-r ${colorClasses[color]} text-primary-foreground px-2 sm:px-4 py-1 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold shadow-lg`}
      >
        {children}
      </div>
    </div>
  );
};
