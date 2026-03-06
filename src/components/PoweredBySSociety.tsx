import { ExternalLink } from 'lucide-react';

const PoweredBySSociety = () => {
  return (
    <div className="w-full py-4 flex items-center justify-center">
      <a
        href="https://ssociety.eu"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card/80 border border-border hover:border-primary/50 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(251,191,36,0.15)]"
      >
        <span className="text-xs text-muted-foreground">Powered by</span>
        <span className="text-sm font-bold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent group-hover:from-amber-200 group-hover:via-yellow-300 group-hover:to-amber-200 transition-all">
          SSocietyHUB
        </span>
        <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
      </a>
    </div>
  );
};

export default PoweredBySSociety;
