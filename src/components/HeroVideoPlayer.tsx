import { useRef, useEffect, useState } from 'react';
import { Play, Volume2, VolumeX } from 'lucide-react';
import spaceBackgroundVideo from '@/assets/space-background-video.mp4';

export const HeroVideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [autoPlayFailed, setAutoPlayFailed] = useState(false);
  const [showUnmuteButton, setShowUnmuteButton] = useState(false);

  // Auto-play on mount - muted to bypass browser restrictions
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const attemptAutoplay = async () => {
      video.muted = true;
      
      try {
        await video.play();
        setIsPlaying(true);
        setIsMuted(true);
        setShowUnmuteButton(true);
      } catch (error) {
        console.log('Video autoplay was prevented:', error);
        setAutoPlayFailed(true);
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(attemptAutoplay, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleManualPlay = () => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setIsMuted(true);
          setAutoPlayFailed(false);
          setShowUnmuteButton(true);
        })
        .catch(console.error);
    }
  };

  const handleUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
      setShowUnmuteButton(false);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="relative w-full mb-6 sm:mb-8">
      {/* Video Container - Full width, aspect ratio maintained, in document flow */}
      <div className="relative w-full aspect-video max-h-[60vh] overflow-hidden rounded-2xl border-2 border-primary/30 shadow-[0_0_40px_rgba(139,92,246,0.3)]">
        <video
          ref={videoRef}
          src={spaceBackgroundVideo}
          muted
          autoPlay
          loop
          playsInline
          className="w-full h-full object-cover"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />

        {/* Fallback play button when autoplay fails */}
        {autoPlayFailed && !isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <button
              onClick={handleManualPlay}
              className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-gradient-to-br from-primary to-secondary border-2 border-primary shadow-[0_0_30px_rgba(139,92,246,0.6)] animate-pulse hover:animate-none hover:scale-105 transition-transform"
            >
              <Play className="w-16 h-16 text-white" />
              <span className="text-white text-xl font-bold">▶️ Tap to Play</span>
            </button>
          </div>
        )}

        {/* Unmute prompt overlay - shows briefly then becomes a corner button */}
        {showUnmuteButton && isPlaying && (
          <button
            onClick={handleUnmute}
            className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 rounded-xl bg-black/60 backdrop-blur-sm border border-white/20 hover:bg-black/80 hover:scale-105 transition-all animate-fade-in"
          >
            <Volume2 className="w-5 h-5 text-white animate-pulse" />
            <span className="text-white text-sm font-medium">Tap to Unmute</span>
          </button>
        )}

        {/* Volume toggle button (after unmuting) */}
        {!showUnmuteButton && isPlaying && (
          <button
            onClick={toggleMute}
            className="absolute bottom-4 right-4 p-3 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 hover:bg-black/80 hover:scale-105 transition-all"
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 text-white" />
            ) : (
              <Volume2 className="w-5 h-5 text-white" />
            )}
          </button>
        )}

        {/* Gradient overlay at bottom for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};
