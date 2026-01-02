import { useRef, useState, useEffect, useCallback } from 'react';
import { Play, Pause, Volume2, VolumeX, SkipBack, SkipForward } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import podcastEnglish from '@/assets/podcast-english.wav';
import podcastSpanish from '@/assets/podcast-spanish.wav';
import podcastRomanian from '@/assets/podcast-romanian.wav';

interface PodcastBoxProps {
  label: string;
  flag: string;
  audioSrc: string;
  color: 'blue' | 'green' | 'orange';
  isActive: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
}

const colorClasses = {
  blue: {
    bg: 'from-primary to-primary/80',
    border: 'border-primary',
    glow: 'shadow-[0_0_25px_rgba(59,130,246,0.6)]',
    button: 'bg-white/20 hover:bg-white/30',
    track: 'bg-white/30',
    range: 'bg-white',
  },
  green: {
    bg: 'from-success to-success/80',
    border: 'border-success',
    glow: 'shadow-[0_0_25px_rgba(34,197,94,0.6)]',
    button: 'bg-white/20 hover:bg-white/30',
    track: 'bg-white/30',
    range: 'bg-white',
  },
  orange: {
    bg: 'from-warning to-orange-500',
    border: 'border-warning',
    glow: 'shadow-[0_0_25px_rgba(249,115,22,0.6)]',
    button: 'bg-white/20 hover:bg-white/30',
    track: 'bg-white/30',
    range: 'bg-white',
  },
};

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

const PodcastBox = ({ label, flag, audioSrc, color, isActive, onActivate, onDeactivate }: PodcastBoxProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [hoverTime, setHoverTime] = useState<number | null>(null);
  const [hoverPosition, setHoverPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Auto-hide controls after 3 seconds of inactivity
  const resetHideTimer = useCallback(() => {
    setShowControls(true);
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    hideTimeoutRef.current = setTimeout(() => {
      if (!isDragging) {
        setShowControls(false);
      }
    }, 3000);
  }, [isDragging]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
    };
  }, []);

  // Reset timer when player becomes active
  useEffect(() => {
    if (isActive && isPlaying) {
      resetHideTimer();
    }
    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, [isActive, isPlaying, resetHideTimer]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
        onActivate();
      }
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
    onDeactivate();
  };

  const handleSeek = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
      setCurrentTime(value[0]);
    }
  };

  const skipBack = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 10);
    }
  };

  const skipForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(duration, audioRef.current.currentTime + 10);
    }
  };

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    if (newVolume > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = volume;
        setIsMuted(false);
      } else {
        audioRef.current.volume = 0;
        setIsMuted(true);
      }
    }
  };

  // Handle timeline hover for timestamp preview
  const handleTimelineHover = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!timelineRef.current || !duration) return;
    const rect = timelineRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, x / rect.width));
    const time = percentage * duration;
    setHoverTime(time);
    setHoverPosition(x);
    resetHideTimer();
  };

  const handleTimelineLeave = () => {
    setHoverTime(null);
  };

  // Handle click on timeline to seek
  const handleTimelineClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!timelineRef.current || !duration || !audioRef.current) return;
    const rect = timelineRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, x / rect.width));
    const newTime = percentage * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    resetHideTimer();
  };

  const handleInteraction = () => {
    resetHideTimer();
  };

  const colors = colorClasses[color];

  return (
    <div
      className={`bg-gradient-to-br ${colors.bg} backdrop-blur-md bg-opacity-60 rounded-lg border ${colors.border} ${colors.glow} animate-flicker transition-all duration-500 ease-out ${
        isActive && isPlaying
          ? 'fixed left-1/2 -translate-x-1/2 top-4 w-[calc(100%-2rem)] max-w-md z-[9999] p-4'
          : 'relative p-2 sm:p-3 hover:scale-105'
      }`}
      onMouseMove={isActive && isPlaying ? handleInteraction : undefined}
      onTouchStart={isActive && isPlaying ? handleInteraction : undefined}
      onClick={isActive && isPlaying ? handleInteraction : undefined}
    >
      <audio ref={audioRef} src={audioSrc} onEnded={handleEnded} />
      
      {isActive && isPlaying ? (
        // Expanded player view with auto-hide controls
        <div className="flex flex-col gap-3">
          {/* Header - always visible */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{flag}</span>
              <span className="text-white font-medium text-sm">{label}</span>
            </div>
          </div>

          {/* Controls container with auto-hide */}
          <div
            className={`transition-opacity duration-300 ${
              showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            {/* Volume control */}
            <div className="flex items-center justify-end gap-2 mb-3">
              <button onClick={toggleMute} className="p-1">
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-4 h-4 text-white" />
                ) : (
                  <Volume2 className="w-4 h-4 text-white animate-pulse" />
                )}
              </button>
              <Slider
                value={[isMuted ? 0 : volume]}
                max={1}
                step={0.01}
                onValueChange={handleVolumeChange}
                className="w-20 [&_[data-slot=track]]:h-1 [&_[data-slot=track]]:bg-white/30 [&_[data-slot=range]]:bg-white [&_[data-slot=thumb]]:w-2.5 [&_[data-slot=thumb]]:h-2.5 [&_[data-slot=thumb]]:bg-white [&_[data-slot=thumb]]:border-0"
              />
            </div>

            {/* Custom seekable timeline with hover preview */}
            <div className="w-full relative">
              <div
                ref={timelineRef}
                className="relative w-full h-6 cursor-pointer group"
                onMouseMove={handleTimelineHover}
                onMouseLeave={handleTimelineLeave}
                onClick={handleTimelineClick}
              >
                {/* Hover timestamp preview */}
                {hoverTime !== null && (
                  <div
                    className="absolute -top-8 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded pointer-events-none z-[10000]"
                    style={{ left: hoverPosition }}
                  >
                    {formatTime(hoverTime)}
                  </div>
                )}
                
                {/* Progress slider */}
                <Slider
                  value={[currentTime]}
                  max={duration || 100}
                  step={0.1}
                  onValueChange={handleSeek}
                  onPointerDown={handleDragStart}
                  onPointerUp={handleDragEnd}
                  className="w-full cursor-pointer [&_[data-slot=track]]:h-2 [&_[data-slot=track]]:bg-white/30 [&_[data-slot=range]]:bg-white [&_[data-slot=thumb]]:w-4 [&_[data-slot=thumb]]:h-4 [&_[data-slot=thumb]]:bg-white [&_[data-slot=thumb]]:border-0 [&_[data-slot=thumb]]:shadow-lg [&_[data-slot=thumb]]:transition-transform [&_[data-slot=thumb]]:hover:scale-125"
                />
              </div>
              
              <div className="flex justify-between text-xs text-white/70 mt-1">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
            
            {/* Playback controls */}
            <div className="flex items-center justify-center gap-4 mt-3">
              <button
                onClick={skipBack}
                className={`w-10 h-10 rounded-full ${colors.button} backdrop-blur-sm flex items-center justify-center transition-all duration-200 shadow-md border border-white/30 hover:scale-110`}
                aria-label="Skip back 10 seconds"
              >
                <SkipBack className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={togglePlay}
                className={`w-12 h-12 rounded-full ${colors.button} backdrop-blur-sm flex items-center justify-center transition-all duration-200 shadow-md border border-white/30 hover:scale-110`}
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 text-white" />
                ) : (
                  <Play className="w-6 h-6 text-white ml-0.5" />
                )}
              </button>
              <button
                onClick={skipForward}
                className={`w-10 h-10 rounded-full ${colors.button} backdrop-blur-sm flex items-center justify-center transition-all duration-200 shadow-md border border-white/30 hover:scale-110`}
                aria-label="Skip forward 10 seconds"
              >
                <SkipForward className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        // Compact view
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
      )}
    </div>
  );
};

export const PodcastPlayer = () => {
  const [activePlayer, setActivePlayer] = useState<string | null>(null);

  return (
    <div className="sticky top-2 z-40 py-2 px-2 mb-4">
      <div className="relative flex flex-row justify-center gap-2 sm:gap-3 min-h-[48px]">
        <PodcastBox
          label="Podcast în Română"
          flag="🇷🇴"
          audioSrc={podcastRomanian}
          color="orange"
          isActive={activePlayer === 'ro'}
          onActivate={() => setActivePlayer('ro')}
          onDeactivate={() => setActivePlayer(null)}
        />
        <PodcastBox
          label="Podcast en Español"
          flag="🇪🇸"
          audioSrc={podcastSpanish}
          color="green"
          isActive={activePlayer === 'es'}
          onActivate={() => setActivePlayer('es')}
          onDeactivate={() => setActivePlayer(null)}
        />
        <PodcastBox
          label="Podcast in English"
          flag="🇺🇸"
          audioSrc={podcastEnglish}
          color="blue"
          isActive={activePlayer === 'en'}
          onActivate={() => setActivePlayer('en')}
          onDeactivate={() => setActivePlayer(null)}
        />
      </div>
    </div>
  );
};
