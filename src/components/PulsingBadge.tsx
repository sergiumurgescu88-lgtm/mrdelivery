import { ReactNode } from 'react';

interface PulsingBadgeProps {
  children: ReactNode;
  color?: 'blue' | 'purple' | 'green' | 'yellow' | 'gold';
}

export const PulsingBadge = ({ children, color = 'blue' }: PulsingBadgeProps) => {
  const colorClasses = {
    blue: 'from-sky-400 to-blue-500',
    purple: 'from-violet-400 to-purple-500',
    green: 'from-emerald-400 to-green-500',
    yellow: 'from-yellow-400 to-amber-500',
    gold: 'from-amber-400 to-amber-500',
  };

  const glowClasses = {
    blue: 'shadow-sky-500/50',
    purple: 'shadow-violet-500/50',
    green: 'shadow-emerald-500/50',
    yellow: 'shadow-yellow-500/50',
    gold: 'shadow-amber-500/50',
  };

  return (
    <div className="relative inline-block">
      <div
        className={`absolute inset-0 bg-gradient-to-r ${colorClasses[color]} rounded-full blur-md opacity-60 animate-pulse`}
      ></div>
      <div
        className={`relative bg-gradient-to-r ${colorClasses[color]} text-gray-950 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-black shadow-lg ${glowClasses[color]}`}
      >
        {children}
      </div>
    </div>
  );
};
