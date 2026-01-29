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

  return (
    <div className="relative inline-block group">
      {/* Premium badge with subtle hover lift */}
      <div
        className={`relative bg-gradient-to-r ${colorClasses[color]} px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-semibold tracking-wide transition-all duration-500 ease-out hover:translate-y-[-2px] hover:shadow-lg cursor-default`}
        style={{ color: 'rgba(0, 0, 0, 0.85)' }}
      >
        {/* Subtle inner shine that moves slowly on hover */}
        <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
        </div>
        <span className="relative z-10">{children}</span>
      </div>
    </div>
  );
};
