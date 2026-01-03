import { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, SkipBack, SkipForward } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { useGeoLocation } from '@/hooks/useGeoLocation';
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
  autoPlay?: boolean;
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

const PodcastBox = ({ label, flag, audioSrc, color, isActive, onActivate, onDeactivate, autoPlay = false }: PodcastBoxProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showUnmutePrompt, setShowUnmutePrompt] = useState(false);
  const hasAutoPlayed = useRef(false);

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

  // Auto-play effect based on geolocation - starts muted to bypass browser restrictions
  useEffect(() => {
    if (autoPlay && !hasAutoPlayed.current && audioRef.current) {
      hasAutoPlayed.current = true;
      const timer = setTimeout(() => {
        if (audioRef.current) {
          // Start muted to bypass autoplay restrictions
          audioRef.current.muted = true;
          audioRef.current.play()
            .then(() => {
              setIsPlaying(true);
              setIsMuted(true);
              setShowUnmutePrompt(true);
              onActivate();
            })
            .catch((error) => {
              console.log('Autoplay was prevented:', error);
            });
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [autoPlay, onActivate]);

  const handleUnmute = () => {
    if (audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current.volume = volume;
      setIsMuted(false);
      setShowUnmutePrompt(false);
    }
  };

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
    const newTime = value[0];
    setCurrentTime(newTime);
  };

  const handleSeekCommit = (value: number[]) => {
    if (audioRef.current) {
      const newTime = value[0];
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
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

  const colors = colorClasses[color];

  return (
    <>
      {/* Unmute prompt overlay */}
      {showUnmutePrompt && isPlaying && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in">
          <button
            onClick={handleUnmute}
            className={`flex flex-col items-center gap-4 p-8 rounded-2xl bg-gradient-to-br ${colors.bg} ${colors.glow} border-2 ${colors.border} animate-pulse hover:animate-none hover:scale-105 transition-transform`}
          >
            <Volume2 className="w-16 h-16 text-white" />
            <span className="text-white text-xl font-bold">🔊 Tap to Unmute</span>
            <span className="text-white/80 text-sm">{flag} {label}</span>
          </button>
        </div>
      )}
      
      <div
        className={`bg-gradient-to-br ${colors.bg} backdrop-blur-md bg-opacity-60 rounded-lg border ${colors.border} ${colors.glow} animate-flicker transition-all duration-500 ease-out ${
          isActive && isPlaying
            ? 'fixed left-1/2 -translate-x-1/2 top-4 w-[calc(100%-2rem)] max-w-md z-[100] p-4'
            : 'relative p-2 sm:p-3 hover:scale-105'
        }`}
      >
        <audio ref={audioRef} src={audioSrc} onEnded={handleEnded} />
        
        {isActive && isPlaying ? (
          // Expanded player view
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{flag}</span>
              <span className="text-white font-medium text-sm">{label}</span>
            </div>
            {/* Volume control */}
            <div className="flex items-center gap-2">
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
                className="w-16 [&_[data-slot=track]]:h-1 [&_[data-slot=track]]:bg-white/30 [&_[data-slot=range]]:bg-white [&_[data-slot=thumb]]:w-2.5 [&_[data-slot=thumb]]:h-2.5 [&_[data-slot=thumb]]:bg-white [&_[data-slot=thumb]]:border-0"
              />
            </div>
          </div>
          
          {/* Progress bar - fully seekable timeline */}
          <div className="w-full py-2">
            <Slider
              value={[currentTime]}
              max={duration || 100}
              step={0.1}
              onValueChange={handleSeek}
              onValueCommit={handleSeekCommit}
              className="w-full cursor-pointer touch-pan-x [&_[data-slot=track]]:h-3 [&_[data-slot=track]]:bg-white/20 [&_[data-slot=track]]:rounded-full [&_[data-slot=range]]:bg-white [&_[data-slot=range]]:rounded-full [&_[data-slot=thumb]]:w-5 [&_[data-slot=thumb]]:h-5 [&_[data-slot=thumb]]:bg-white [&_[data-slot=thumb]]:border-2 [&_[data-slot=thumb]]:border-white/50 [&_[data-slot=thumb]]:shadow-lg [&_[data-slot=thumb]]:transition-transform [&_[data-slot=thumb]]:hover:scale-125 [&_[data-slot=thumb]]:active:scale-110 [&_[data-slot=thumb]]:focus-visible:ring-2 [&_[data-slot=thumb]]:focus-visible:ring-white/50"
              aria-label="Seek timeline"
              aria-valuemin={0}
              aria-valuemax={duration}
              aria-valuenow={currentTime}
              aria-valuetext={`${formatTime(currentTime)} of ${formatTime(duration)}`}
            />
            <div className="flex justify-between text-xs text-white/80 mt-2 font-medium">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
          
          {/* Controls */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={skipBack}
              className={`w-10 h-10 rounded-full ${colors.button} backdrop-blur-sm flex items-center justify-center transition-all duration-200 shadow-md border border-white/30`}
              aria-label="Skip back 10 seconds"
            >
              <SkipBack className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={togglePlay}
              className={`w-12 h-12 rounded-full ${colors.button} backdrop-blur-sm flex items-center justify-center transition-all duration-200 shadow-md border border-white/30`}
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 text-white" />
              ) : (
                <Play className="w-6 h-6 text-white ml-0.5" />
              )}
            </button>
            <button
              onClick={skipForward}
              className={`w-10 h-10 rounded-full ${colors.button} backdrop-blur-sm flex items-center justify-center transition-all duration-200 shadow-md border border-white/30`}
              aria-label="Skip forward 10 seconds"
            >
              <SkipForward className="w-5 h-5 text-white" />
            </button>
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
    </>
  );
};

export const PodcastPlayer = () => {
  const [activePlayer, setActivePlayer] = useState<string | null>(null);
  const { countryCode, isLoading } = useGeoLocation();

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
          autoPlay={!isLoading && countryCode === 'ro'}
        />
        <PodcastBox
          label="Podcast en Español"
          flag="🇪🇸"
          audioSrc={podcastSpanish}
          color="green"
          isActive={activePlayer === 'es'}
          onActivate={() => setActivePlayer('es')}
          onDeactivate={() => setActivePlayer(null)}
          autoPlay={!isLoading && countryCode === 'es'}
        />
        <PodcastBox
          label="Podcast in English"
          flag="🇺🇸"
          audioSrc={podcastEnglish}
          color="blue"
          isActive={activePlayer === 'en'}
          onActivate={() => setActivePlayer('en')}
          onDeactivate={() => setActivePlayer(null)}
          autoPlay={!isLoading && countryCode === 'en'}
        />
      </div>
    </div>
  );
};
