import { useRef, useState } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';
import podcastEnglish from '@/assets/podcast-english.wav';
import podcastSpanish from '@/assets/podcast-spanish.wav';
import podcastRomanian from '@/assets/podcast-romanian.wav';

interface PodcastBoxProps {
  language: string;
  flag: string;
  audioSrc: string;
  color: 'blue' | 'green' | 'orange';
}

const colorClasses = {
  blue: {
    bg: 'from-primary/20 to-primary/10',
    border: 'border-primary/40',
    glow: 'shadow-[0_0_15px_rgba(59,130,246,0.5)]',
    button: 'bg-primary hover:bg-primary/80',
  },
  green: {
    bg: 'from-success/20 to-success/10',
    border: 'border-success/40',
    glow: 'shadow-[0_0_15px_rgba(34,197,94,0.5)]',
    button: 'bg-success hover:bg-success/80',
  },
  orange: {
    bg: 'from-warning/20 to-warning/10',
    border: 'border-warning/40',
    glow: 'shadow-[0_0_15px_rgba(249,115,22,0.5)]',
    button: 'bg-warning hover:bg-warning/80',
  },
};

const PodcastBox = ({ language, flag, audioSrc, color }: PodcastBoxProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  const colors = colorClasses[color];

  return (
    <div
      className={`relative bg-gradient-to-br ${colors.bg} backdrop-blur-md rounded-xl p-3 border-2 ${colors.border} ${colors.glow} animate-flicker transition-all duration-300 hover:scale-105`}
    >
      <audio ref={audioRef} src={audioSrc} onEnded={handleEnded} />
      <div className="flex items-center gap-2">
        <button
          onClick={togglePlay}
          className={`w-8 h-8 rounded-full ${colors.button} flex items-center justify-center transition-all duration-200 shadow-lg`}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 text-primary-foreground" />
          ) : (
            <Play className="w-4 h-4 text-primary-foreground ml-0.5" />
          )}
        </button>
        <div className="flex items-center gap-1.5">
          <span className="text-lg">{flag}</span>
          <span className="text-xs font-bold text-foreground">{language}</span>
        </div>
        <Volume2 className={`w-4 h-4 ml-auto ${isPlaying ? 'text-primary animate-pulse' : 'text-muted-foreground'}`} />
      </div>
    </div>
  );
};

export const PodcastPlayer = () => {
  return (
    <div className="sticky top-2 z-40 px-2 mb-4">
      <div className="grid grid-cols-3 gap-2 max-w-xl mx-auto">
        <PodcastBox
          language="English"
          flag="🇬🇧"
          audioSrc={podcastEnglish}
          color="blue"
        />
        <PodcastBox
          language="Español"
          flag="🇪🇸"
          audioSrc={podcastSpanish}
          color="green"
        />
        <PodcastBox
          language="Română"
          flag="🇷🇴"
          audioSrc={podcastRomanian}
          color="orange"
        />
      </div>
    </div>
  );
};
