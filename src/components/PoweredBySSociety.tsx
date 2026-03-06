import { ExternalLink } from 'lucide-react';

const PoweredBySSociety = () => {
  return (
    <div className="w-full py-4 flex items-center justify-center">
      <a
        href="https://ssociety.eu"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-full overflow-hidden transition-all duration-500 hover:scale-105"
      >
        {/* Animated gradient border */}
        <div 
          className="absolute inset-0 rounded-full p-[1.5px]"
          style={{
            background: 'conic-gradient(from var(--border-angle, 0deg), #7c3aed, #6366f1, #8b5cf6, #a855f7, #6366f1, #7c3aed)',
            animation: 'spin-border 4s linear infinite',
          }}
        >
          <div className="w-full h-full rounded-full bg-background/95 backdrop-blur-sm" />
        </div>

        {/* Hover glow */}
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-violet-500/10 via-indigo-500/15 to-purple-500/10 blur-sm" />

        {/* Content */}
        <span className="relative text-xs text-muted-foreground group-hover:text-violet-300 transition-colors duration-300">
          Powered by
        </span>
        
        {/* SSociety text with animated gradient */}
        <span 
          className="relative text-sm font-extrabold tracking-wide"
          style={{
            background: 'linear-gradient(135deg, #818cf8, #a78bfa, #c084fc, #818cf8)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'gradient-shift 3s ease infinite',
          }}
        >
          SSociety
        </span>

        {/* Sparkle dot */}
        <div 
          className="relative w-1.5 h-1.5 rounded-full bg-violet-400"
          style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}
        />

        <ExternalLink className="relative w-3.5 h-3.5 text-violet-400/60 group-hover:text-violet-300 transition-colors duration-300" />

        <style>{`
          @keyframes spin-border {
            from { --border-angle: 0deg; }
            to { --border-angle: 360deg; }
          }
          @keyframes gradient-shift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          @keyframes pulse-glow {
            0%, 100% { opacity: 0.4; transform: scale(0.8); box-shadow: 0 0 0 0 rgba(139, 92, 246, 0); }
            50% { opacity: 1; transform: scale(1.2); box-shadow: 0 0 8px 2px rgba(139, 92, 246, 0.4); }
          }
          @property --border-angle {
            syntax: '<angle>';
            initial-value: 0deg;
            inherits: false;
          }
        `}</style>
      </a>
    </div>
  );
};

export default PoweredBySSociety;
