import { useRef, useState } from 'react';
import { Play, Pause, Volume2, Headphones } from 'lucide-react';
import podcastEnglish from '@/assets/podcast-english.wav';
import podcastSpanish from '@/assets/podcast-spanish.wav';
import podcastRomanian from '@/assets/podcast-romanian.wav';

interface PodcastBoxProps {
  label: string;
  flag: string;
  audioSrc: string;
  color: 'blue' | 'green' | 'orange';
}

const colorClasses = {
  blue: {
    bg: 'from-primary to-primary/80',
    border: 'border-primary',
    glow: 'shadow-[0_0_25px_rgba(59,130,246,0.6)]',
    button: 'bg-white/20 hover:bg-white/30',
  },
  green: {
    bg: 'from-success to-success/80',
    border: 'border-success',
    glow: 'shadow-[0_0_25px_rgba(34,197,94,0.6)]',
    button: 'bg-white/20 hover:bg-white/30',
  },
  orange: {
    bg: 'from-warning to-orange-500',
    border: 'border-warning',
    glow: 'shadow-[0_0_25px_rgba(249,115,22,0.6)]',
    button: 'bg-white/20 hover:bg-white/30',
  },
};

const PodcastBox = ({ label, flag, audioSrc, color }: PodcastBoxProps) => {
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
      className={`relative bg-gradient-to-br ${colors.bg} backdrop-blur-md rounded-2xl p-3 sm:p-4 border-2 ${colors.border} ${colors.glow} animate-flicker transition-all duration-300 hover:scale-105`}
    >
      <audio ref={audioRef} src={audioSrc} onEnded={handleEnded} />
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-1.5">
          <Headphones className={`w-4 h-4 sm:w-5 sm:h-5 text-white ${isPlaying ? 'animate-pulse' : ''}`} />
          <span className="text-lg sm:text-xl">{flag}</span>
        </div>
        <span className="text-[10px] sm:text-xs font-bold text-white text-center leading-tight">{label}</span>
        <button
          onClick={togglePlay}
          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${colors.button} flex items-center justify-center transition-all duration-200 shadow-lg border border-white/30`}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          ) : (
            <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white ml-0.5" />
          )}
        </button>
        <Volume2 className={`w-4 h-4 ${isPlaying ? 'text-white animate-pulse' : 'text-white/60'}`} />
      </div>
    </div>
  );
};

export const PodcastPlayer = () => {
  return (
    <div className="sticky top-0 z-40 py-3 px-2 mb-4 bg-background/80 backdrop-blur-md">
      <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-lg mx-auto">
        <PodcastBox
          label="Podcast in English"
          flag="🇬🇧"
          audioSrc={podcastEnglish}
          color="blue"
        />
        <PodcastBox
          label="Podcast en Español"
          flag="🇪🇸"
          audioSrc={podcastSpanish}
          color="green"
        />
        <PodcastBox
          label="Podcast în Română"
          flag="🇷🇴"
          audioSrc={podcastRomanian}
          color="orange"
        />
      </div>
    </div>
  );
};
