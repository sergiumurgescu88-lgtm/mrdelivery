import { useRef, useState } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';
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
      className={`relative bg-gradient-to-br ${colors.bg} backdrop-blur-md bg-opacity-60 rounded-lg p-2 sm:p-3 border ${colors.border} ${colors.glow} animate-flicker transition-all duration-300 hover:scale-105`}
    >
      <audio ref={audioRef} src={audioSrc} onEnded={handleEnded} />
      <div className="flex items-center gap-1.5 sm:gap-2">
        <span className="text-lg sm:text-2xl">{flag}</span>
        <button
          onClick={togglePlay}
          className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${colors.button} backdrop-blur-sm flex items-center justify-center transition-all duration-200 shadow-md border border-white/30`}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          ) : (
            <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white ml-0.5" />
          )}
        </button>
        <Volume2 className={`w-3 h-3 sm:w-4 sm:h-4 ${isPlaying ? 'text-white animate-pulse' : 'text-white/60'}`} />
      </div>
    </div>
  );
};

export const PodcastPlayer = () => {
  return (
    <div className="sticky top-2 z-40 py-2 px-2 mb-4">
      <div className="flex flex-row justify-center gap-2 sm:gap-3">
        <PodcastBox
          label="Podcast în Română"
          flag="🇷🇴"
          audioSrc={podcastRomanian}
          color="orange"
        />
        <PodcastBox
          label="Podcast en Español"
          flag="🇪🇸"
          audioSrc={podcastSpanish}
          color="green"
        />
        <PodcastBox
          label="Podcast in English"
          flag="🇺🇸"
          audioSrc={podcastEnglish}
          color="blue"
        />
      </div>
    </div>
  );
};
