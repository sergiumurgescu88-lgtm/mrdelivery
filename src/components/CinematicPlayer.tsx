import { useRef, useState, useEffect, useCallback } from 'react';
import { Play, Pause, Volume2, VolumeX, SkipBack, SkipForward } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import podcastRomanian from '@/assets/podcast-romanian.wav';
import podcastSpanish from '@/assets/podcast-spanish.wav';
import podcastEnglish from '@/assets/podcast-english.wav';

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
    label: 'Podcast cu Sergiu',
    flag: '🇷🇴',
    src: podcastRomanian,
    gradient: 'from-warning via-orange-500 to-amber-600',
    borderColor: 'border-warning',
    shadowColor: 'rgba(249,115,22,0.6)',
  },
  {
    id: 'es',
    label: 'Podcast con Sergiu',
    flag: '🇪🇸',
    src: podcastSpanish,
    gradient: 'from-emerald-500 via-green-500 to-teal-600',
    borderColor: 'border-emerald-500',
    shadowColor: 'rgba(16,185,129,0.6)',
  },
  {
    id: 'us',
    label: 'Podcast with Sergiu',
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

  return (
    <div
      onClick={!isActive ? onActivate : undefined}
      onMouseEnter={() => !isActive && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative overflow-hidden
        bg-gradient-to-br ${config.gradient}
        border-2 ${config.borderColor}
        transition-all duration-500 ease-in-out
        ${isActive 
          ? 'w-full rounded-2xl p-5 cursor-default opacity-100' 
          : `w-16 sm:w-20 rounded-xl p-2 cursor-pointer ${isHovered ? 'opacity-100 scale-110' : 'opacity-50 scale-100'}`
        }
      `}
      style={{
        boxShadow: isActive 
          ? `0 0 40px ${config.shadowColor}` 
          : isHovered 
            ? `0 0 25px ${config.shadowColor}` 
            : `0 0 10px ${config.shadowColor}`,
        minHeight: isActive ? '180px' : '60px',
      }}
    >
      {/* Waiting for interaction overlay - only on active player */}
      {isActive && waitingForInteraction && (
        <div 
          onClick={onInteraction}
          className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 rounded-2xl cursor-pointer"
        >
          <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-bold text-lg animate-pulse border border-white/30 shadow-xl">
            🔊 Tap anywhere to start audio
          </div>
        </div>
      )}

      {/* Inactive thumbnail state */}
      {!isActive && (
        <div className="flex flex-col items-center justify-center gap-1 h-full relative">
          <span className="text-xl sm:text-2xl">{config.flag}</span>
          {/* Play hint on hover */}
          <div className={`
            absolute inset-0 flex items-center justify-center bg-black/30 rounded-xl
            transition-opacity duration-300
            ${isHovered ? 'opacity-100' : 'opacity-0'}
          `}>
            <div className="bg-white/30 backdrop-blur-sm px-2 py-1 rounded-full">
              <span className="text-white text-xs font-bold">▶ Play</span>
            </div>
          </div>
        </div>
      )}

      {/* Active expanded state */}
      {isActive && (
        <div className="flex flex-col gap-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-3xl animate-pulse">{config.flag}</span>
              <div>
                <span className="text-white font-bold text-lg">{config.label}</span>
                <p className="text-white/70 text-sm">MrDelivery.ro</p>
              </div>
            </div>
            {/* Volume control */}
            <div className="flex items-center gap-2">
              <button onClick={onToggleMute} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-5 h-5 text-white" />
                ) : (
                  <Volume2 className="w-5 h-5 text-white animate-pulse" />
                )}
              </button>
              <Slider
                value={[isMuted ? 0 : volume]}
                max={1}
                step={0.01}
                onValueChange={onVolumeChange}
                className="w-20 [&_[data-slot=track]]:h-1.5 [&_[data-slot=track]]:bg-white/30 [&_[data-slot=range]]:bg-white [&_[data-slot=thumb]]:w-3 [&_[data-slot=thumb]]:h-3 [&_[data-slot=thumb]]:bg-white [&_[data-slot=thumb]]:border-0"
              />
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="w-full">
            <Slider
              value={[currentTime]}
              max={duration || 100}
              step={0.1}
              onValueChange={onSeek}
              onValueCommit={onSeekCommit}
              className="w-full cursor-pointer touch-pan-x [&_[data-slot=track]]:h-3 [&_[data-slot=track]]:bg-white/20 [&_[data-slot=track]]:rounded-full [&_[data-slot=range]]:bg-white [&_[data-slot=range]]:rounded-full [&_[data-slot=thumb]]:w-5 [&_[data-slot=thumb]]:h-5 [&_[data-slot=thumb]]:bg-white [&_[data-slot=thumb]]:border-2 [&_[data-slot=thumb]]:border-white/50 [&_[data-slot=thumb]]:shadow-lg [&_[data-slot=thumb]]:transition-transform [&_[data-slot=thumb]]:hover:scale-125"
            />
            <div className="flex justify-between text-sm text-white/80 mt-2 font-medium">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
          
          {/* Controls */}
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={onSkipBack}
              className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-200 shadow-lg border border-white/30 hover:scale-110"
              aria-label="Skip back 10 seconds"
            >
              <SkipBack className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={onTogglePlay}
              className="w-16 h-16 rounded-full bg-white/30 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center transition-all duration-200 shadow-xl border-2 border-white/50 hover:scale-110"
            >
              {isPlaying ? (
                <Pause className="w-8 h-8 text-white" />
              ) : (
                <Play className="w-8 h-8 text-white ml-1" />
              )}
            </button>
            <button
              onClick={onSkipForward}
              className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-200 shadow-lg border border-white/30 hover:scale-110"
              aria-label="Skip forward 10 seconds"
            >
              <SkipForward className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export const CinematicPlayer = () => {
  const audioRefs = useRef<{ [key in Language]: HTMLAudioElement | null }>({
    ro: null,
    es: null,
    us: null,
  });
  
  const [activePlayer, setActivePlayer] = useState<Language>('ro');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [waitingForInteraction, setWaitingForInteraction] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const hasStarted = useRef(false);

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
        mx-auto mb-6 mt-4 px-4 max-w-xl
        transition-all duration-[2000ms] ease-in-out
        ${isExpanded ? 'opacity-100' : 'opacity-0 translate-y-4'}
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

      {/* Layout: Active player full width, inactive thumbnails in a row */}
      <div className="flex flex-col gap-3">
        {/* Active player - full width */}
        <div className="transition-all duration-700">
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
        </div>

        {/* Inactive players - compact horizontal row */}
        <div className="flex justify-center gap-2 transition-all duration-700">
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
