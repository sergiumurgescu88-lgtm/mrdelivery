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
    blue: 'shadow-[0_0_12px_rgba(56,189,248,0.6)]',
    purple: 'shadow-[0_0_12px_rgba(167,139,250,0.6)]',
    green: 'shadow-[0_0_12px_rgba(52,211,153,0.6)]',
    yellow: 'shadow-[0_0_12px_rgba(250,204,21,0.6)]',
    gold: 'shadow-[0_0_12px_rgba(251,191,36,0.6)]',
  };

  return (
    <div className="relative inline-block">
      <div
        className={`absolute inset-0 bg-gradient-to-r ${colorClasses[color]} rounded-full blur-md opacity-50 animate-pulse`}
      ></div>
      <div
        className={`relative bg-gradient-to-r ${colorClasses[color]} px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-semibold tracking-wide ${glowClasses[color]}`}
        style={{ color: 'rgba(0, 0, 0, 0.85)' }}
      >
        {children}
      </div>
    </div>
  );
};
