import { useRef, useState, useEffect, useCallback } from 'react';
import { Play, Pause, Volume2, VolumeX, SkipBack, SkipForward } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language as AppLanguage } from '@/i18n/translations';
import podcastRomanian from '@/assets/podcast-romanian.wav';
import podcastSpanish from '@/assets/podcast-spanish.wav';
import podcastEnglish from '@/assets/podcast-english.wav';

// Map app language to podcast language
const languageToPodcast: Record<AppLanguage, Language> = {
  ro: 'ro',
  es: 'es',
  en: 'us',
};

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

type Language = 'ro' | 'es' | 'us';

interface PodcastConfig {
  id: Language;
  label: string;
  flag: string;
  src: string;
  gradient: string;
  borderColor: string;
  shadowColor: string;
}

const podcasts: PodcastConfig[] = [
  {
    id: 'ro',
    label: 'Podcast',
    flag: '🇷🇴',
    src: podcastRomanian,
    gradient: 'from-warning via-orange-500 to-amber-600',
    borderColor: 'border-warning',
    shadowColor: 'rgba(249,115,22,0.6)',
  },
  {
    id: 'es',
    label: 'Podcast',
    flag: '🇪🇸',
    src: podcastSpanish,
    gradient: 'from-emerald-500 via-green-500 to-teal-600',
    borderColor: 'border-emerald-500',
    shadowColor: 'rgba(16,185,129,0.6)',
  },
  {
    id: 'us',
    label: 'Podcast',
    flag: '🇺🇸',
    src: podcastEnglish,
    gradient: 'from-blue-500 via-indigo-500 to-blue-700',
    borderColor: 'border-blue-500',
    shadowColor: 'rgba(59,130,246,0.6)',
  },
];

interface SinglePlayerProps {
  config: PodcastConfig;
  isActive: boolean;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  isMuted: boolean;
  waitingForInteraction: boolean;
  onActivate: () => void;
  onTogglePlay: () => void;
  onSeek: (value: number[]) => void;
  onSeekCommit: (value: number[]) => void;
  onSkipBack: () => void;
  onSkipForward: () => void;
  onVolumeChange: (value: number[]) => void;
  onToggleMute: () => void;
  onInteraction: () => void;
}

const SinglePlayer = ({
  config,
  isActive,
  isPlaying,
  currentTime,
  duration,
  volume,
  isMuted,
  waitingForInteraction,
  onActivate,
  onTogglePlay,
  onSeek,
  onSeekCommit,
  onSkipBack,
  onSkipForward,
  onVolumeChange,
  onToggleMute,
  onInteraction,
}: SinglePlayerProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Mobile compact pill style (50-60px height)
  if (!isActive) {
    return (
      <div
        onClick={onActivate}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
        className={`
          relative overflow-hidden cursor-pointer
          bg-gradient-to-r ${config.gradient}
          border ${config.borderColor}
          rounded-full px-3 py-1.5 h-[50px] sm:h-[56px]
          flex items-center gap-2
          transition-all duration-300 ease-out
          ${isHovered ? 'opacity-100 scale-105' : 'opacity-40'}
        `}
        style={{
          boxShadow: isHovered ? `0 0 20px ${config.shadowColor}` : 'none',
        }}
      >
        <span className="text-base sm:text-lg">{config.flag}</span>
        <span className="text-white text-xs sm:text-sm font-medium whitespace-nowrap">
          {config.label}
        </span>
        {/* Play hint on hover */}
        <div className={`
          ml-auto flex items-center justify-center
          transition-opacity duration-200
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}>
          <Play className="w-4 h-4 text-white" fill="white" />
        </div>
      </div>
    );
  }

  // Active player - also compact on mobile (small bar style)
  return (
    <div
      className={`
        relative overflow-hidden
        bg-gradient-to-r ${config.gradient}
        border ${config.borderColor}
        rounded-2xl sm:rounded-2xl
        transition-all duration-500 ease-in-out
        opacity-25 hover:opacity-100
      `}
      style={{
        boxShadow: `0 0 25px ${config.shadowColor}`,
      }}
    >
      {/* Waiting for interaction overlay */}
      {waitingForInteraction && (
        <div 
          onClick={onInteraction}
          className="absolute inset-0 z-20 flex items-center justify-center bg-black/30 rounded-2xl cursor-pointer"
        >
          <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-semibold text-sm sm:text-base animate-pulse border border-white/30">
            🔊 Tap to play
          </div>
        </div>
      )}

      {/* Compact mobile layout */}
      <div className="p-3 sm:p-4">
        {/* Header row */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-lg sm:text-xl">{config.flag}</span>
            <span className="text-white font-semibold text-sm sm:text-base truncate">
              {config.label}
            </span>
          </div>
          
          {/* Controls row - compact */}
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <button
              onClick={onSkipBack}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all"
              aria-label="Skip back 10 seconds"
            >
              <SkipBack className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
            </button>
            <button
              onClick={onTogglePlay}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/30 hover:bg-white/40 flex items-center justify-center transition-all shadow-lg border border-white/40"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              ) : (
                <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white ml-0.5" />
              )}
            </button>
            <button
              onClick={onSkipForward}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all"
              aria-label="Skip forward 10 seconds"
            >
              <SkipForward className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
            </button>
            <button 
              onClick={onToggleMute} 
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              ) : (
                <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              )}
            </button>
          </div>
        </div>
        
        {/* Progress bar - slim */}
        <div className="w-full">
          <Slider
            value={[currentTime]}
            max={duration || 100}
            step={0.1}
            onValueChange={onSeek}
            onValueCommit={onSeekCommit}
            className="w-full cursor-pointer touch-pan-x [&_[data-slot=track]]:h-2 [&_[data-slot=track]]:bg-white/20 [&_[data-slot=track]]:rounded-full [&_[data-slot=range]]:bg-white [&_[data-slot=range]]:rounded-full [&_[data-slot=thumb]]:w-4 [&_[data-slot=thumb]]:h-4 [&_[data-slot=thumb]]:bg-white [&_[data-slot=thumb]]:border-0 [&_[data-slot=thumb]]:shadow-lg"
          />
          <div className="flex justify-between text-xs text-white/70 mt-1 font-medium">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CinematicPlayer = () => {
  const { language: appLanguage } = useLanguage();
  const audioRefs = useRef<{ [key in Language]: HTMLAudioElement | null }>({
    ro: null,
    es: null,
    us: null,
  });
  
  const [activePlayer, setActivePlayer] = useState<Language>(() => languageToPodcast[appLanguage]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [waitingForInteraction, setWaitingForInteraction] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const hasStarted = useRef(false);

  // Sync podcast with language changes
  useEffect(() => {
    const newPodcastLang = languageToPodcast[appLanguage];
    if (newPodcastLang === activePlayer) return;

    // Stop current player
    const currentAudio = audioRefs.current[activePlayer];
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    // Reset state
    setCurrentTime(0);
    setIsPlaying(false);
    setActivePlayer(newPodcastLang);

    // If user already interacted, auto-play the new language
    if (!waitingForInteraction) {
      const newAudio = audioRefs.current[newPodcastLang];
      if (newAudio) {
        newAudio.currentTime = 0;
        newAudio.play().then(() => {
          setIsPlaying(true);
        }).catch(err => console.log('Autoplay failed:', err));
      }
    }
  }, [appLanguage]);

  // Handle user interaction to start/unmute
  const handleUserInteraction = useCallback(async () => {
    if (!waitingForInteraction) return;
    
    const audio = audioRefs.current[activePlayer];
    if (!audio) return;

    try {
      audio.muted = false;
      audio.currentTime = 0;
      await audio.play();
      setIsPlaying(true);
      setIsMuted(false);
      setWaitingForInteraction(false);
    } catch (error) {
      console.log('Play failed:', error);
    }
  }, [waitingForInteraction, activePlayer]);

  // Set up global interaction listeners
  useEffect(() => {
    if (waitingForInteraction) {
      document.addEventListener('click', handleUserInteraction);
      document.addEventListener('touchstart', handleUserInteraction);
      document.addEventListener('scroll', handleUserInteraction);
      document.addEventListener('keydown', handleUserInteraction);
      
      return () => {
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('touchstart', handleUserInteraction);
        document.removeEventListener('scroll', handleUserInteraction);
        document.removeEventListener('keydown', handleUserInteraction);
      };
    }
  }, [waitingForInteraction, handleUserInteraction]);

  // Audio event listeners for active player
  useEffect(() => {
    const audio = audioRefs.current[activePlayer];
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);

    // Set initial duration if already loaded
    if (audio.duration) {
      setDuration(audio.duration);
    }

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
    };
  }, [activePlayer]);

  // Start expansion animation on page load
  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    setTimeout(() => {
      setIsExpanded(true);
    }, 100);
  }, []);

  const handleActivate = async (language: Language) => {
    if (language === activePlayer) return;

    // Stop current player
    const currentAudio = audioRefs.current[activePlayer];
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    // Reset state
    setCurrentTime(0);
    setIsPlaying(false);

    // Switch to new player
    setActivePlayer(language);

    // If user already interacted, auto-play the new selection
    if (!waitingForInteraction) {
      const newAudio = audioRefs.current[language];
      if (newAudio) {
        try {
          newAudio.currentTime = 0;
          await newAudio.play();
          setIsPlaying(true);
        } catch (error) {
          console.log('Play failed:', error);
        }
      }
    }
  };

  const togglePlay = () => {
    const audio = audioRefs.current[activePlayer];
    if (audio) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play();
        setIsPlaying(true);
      }
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleSeek = (value: number[]) => {
    setCurrentTime(value[0]);
  };

  const handleSeekCommit = (value: number[]) => {
    const audio = audioRefs.current[activePlayer];
    if (audio) {
      audio.currentTime = value[0];
      setCurrentTime(value[0]);
    }
  };

  const skipBack = () => {
    const audio = audioRefs.current[activePlayer];
    if (audio) {
      audio.currentTime = Math.max(0, audio.currentTime - 10);
    }
  };

  const skipForward = () => {
    const audio = audioRefs.current[activePlayer];
    if (audio) {
      audio.currentTime = Math.min(duration, audio.currentTime + 10);
    }
  };

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    setVolume(newVolume);
    const audio = audioRefs.current[activePlayer];
    if (audio) {
      audio.volume = newVolume;
    }
    if (newVolume > 0 && isMuted) {
      setIsMuted(false);
      if (audio) audio.muted = false;
    }
  };

  const toggleMute = () => {
    const audio = audioRefs.current[activePlayer];
    if (audio) {
      if (isMuted) {
        audio.muted = false;
        audio.volume = volume;
        setIsMuted(false);
        setWaitingForInteraction(false);
      } else {
        audio.muted = true;
        setIsMuted(true);
      }
    }
  };

  // Get ordered podcasts - active first, then others
  const orderedPodcasts = [
    podcasts.find(p => p.id === activePlayer)!,
    ...podcasts.filter(p => p.id !== activePlayer),
  ];

  return (
    <div 
      className={`
        mx-auto mb-2 mt-1 px-2 sm:px-4 max-w-lg
        transition-all duration-1000 ease-in-out
        ${isExpanded ? 'opacity-100' : 'opacity-0 translate-y-2'}
      `}
    >
      {/* Hidden audio elements */}
      {podcasts.map((podcast) => (
        <audio
          key={podcast.id}
          ref={(el) => { audioRefs.current[podcast.id] = el; }}
          src={podcast.src}
          onEnded={handleEnded}
          preload="auto"
        />
      ))}

      {/* Layout: All players in compact format */}
      <div className="flex flex-col gap-1.5 sm:gap-2">
        {/* Active player - compact bar */}
        <SinglePlayer
          config={orderedPodcasts[0]}
          isActive={true}
          isPlaying={isPlaying}
          currentTime={currentTime}
          duration={duration}
          volume={volume}
          isMuted={isMuted}
          waitingForInteraction={waitingForInteraction}
          onActivate={() => {}}
          onTogglePlay={togglePlay}
          onSeek={handleSeek}
          onSeekCommit={handleSeekCommit}
          onSkipBack={skipBack}
          onSkipForward={skipForward}
          onVolumeChange={handleVolumeChange}
          onToggleMute={toggleMute}
          onInteraction={handleUserInteraction}
        />

        {/* Inactive players - horizontal pill row */}
        <div className="flex justify-center gap-1.5 sm:gap-2">
          {orderedPodcasts.slice(1).map((podcast) => (
            <SinglePlayer
              key={podcast.id}
              config={podcast}
              isActive={false}
              isPlaying={false}
              currentTime={0}
              duration={0}
              volume={volume}
              isMuted={isMuted}
              waitingForInteraction={false}
              onActivate={() => handleActivate(podcast.id)}
              onTogglePlay={() => {}}
              onSeek={() => {}}
              onSeekCommit={() => {}}
              onSkipBack={() => {}}
              onSkipForward={() => {}}
              onVolumeChange={() => {}}
              onToggleMute={() => {}}
              onInteraction={() => {}}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
