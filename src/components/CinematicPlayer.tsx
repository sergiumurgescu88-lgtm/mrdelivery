import { useRef, useState, useEffect, useCallback } from 'react';
import { Play, Pause, Volume2, VolumeX, SkipBack, SkipForward } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import podcastRomanian from '@/assets/podcast-romanian.wav';

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export const CinematicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [waitingForInteraction, setWaitingForInteraction] = useState(true);
  const hasStarted = useRef(false);

  // Handle user interaction to start/unmute
  const handleUserInteraction = useCallback(async () => {
    if (!waitingForInteraction) return;
    
    const audio = audioRef.current;
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
  }, [waitingForInteraction]);

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

  // Audio event listeners
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

  // Start expansion animation on page load
  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    setTimeout(() => {
      setIsExpanded(true);
    }, 100);
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
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
      if (audioRef.current) audioRef.current.muted = false;
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.muted = false;
        audioRef.current.volume = volume;
        setIsMuted(false);
        setWaitingForInteraction(false);
      } else {
        audioRef.current.muted = true;
        setIsMuted(true);
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={`
        relative mx-auto mb-6 overflow-hidden
        bg-gradient-to-br from-warning via-orange-500 to-amber-600
        border-2 border-warning
        transition-all duration-[3000ms] ease-in-out
        ${isExpanded 
          ? 'w-full max-w-xl rounded-2xl p-5 shadow-[0_0_40px_rgba(249,115,22,0.6)]' 
          : 'w-16 h-16 rounded-full p-2 shadow-[0_0_25px_rgba(249,115,22,0.6)]'
        }
      `}
      style={{
        minHeight: isExpanded ? '180px' : '64px',
      }}
    >
      <audio ref={audioRef} src={podcastRomanian} onEnded={handleEnded} preload="auto" />
      
      {/* Waiting for interaction indicator */}
      {waitingForInteraction && (
        <div 
          onClick={handleUserInteraction}
          className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 rounded-2xl cursor-pointer"
        >
          <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-bold text-lg animate-pulse border border-white/30 shadow-xl">
            🔊 Tap anywhere to start audio
          </div>
        </div>
      )}

      {/* Initial compact state */}
      <div 
        className={`
          flex items-center justify-center gap-2
          transition-opacity duration-500
          ${isExpanded ? 'opacity-0 absolute pointer-events-none' : 'opacity-100'}
        `}
      >
        <span className="text-2xl">🇷🇴</span>
        <button
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-200 shadow-md border border-white/30"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-white" />
          ) : (
            <Play className="w-5 h-5 text-white ml-0.5" />
          )}
        </button>
      </div>

      {/* Expanded player state */}
      <div 
        className={`
          flex flex-col gap-4
          transition-opacity duration-1000 delay-1000
          ${isExpanded ? 'opacity-100' : 'opacity-0 absolute pointer-events-none'}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl animate-pulse">🇷🇴</span>
            <div>
              <span className="text-white font-bold text-lg">Podcast cu Sergiu</span>
              <p className="text-white/70 text-sm">MrDelivery.ro</p>
            </div>
          </div>
          {/* Volume control */}
          <div className="flex items-center gap-2">
            <button onClick={toggleMute} className="p-2 hover:bg-white/10 rounded-full transition-colors">
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
              onValueChange={handleVolumeChange}
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
            onValueChange={handleSeek}
            onValueCommit={handleSeekCommit}
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
            onClick={skipBack}
            className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-200 shadow-lg border border-white/30 hover:scale-110"
            aria-label="Skip back 10 seconds"
          >
            <SkipBack className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={togglePlay}
            className="w-16 h-16 rounded-full bg-white/30 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center transition-all duration-200 shadow-xl border-2 border-white/50 hover:scale-110"
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 text-white" />
            ) : (
              <Play className="w-8 h-8 text-white ml-1" />
            )}
          </button>
          <button
            onClick={skipForward}
            className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-200 shadow-lg border border-white/30 hover:scale-110"
            aria-label="Skip forward 10 seconds"
          >
            <SkipForward className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};
