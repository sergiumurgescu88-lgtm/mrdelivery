import { useState, useRef, useEffect, useCallback } from 'react';
import { X, Volume2, VolumeX, ChevronUp, ChevronDown, Play, Pause } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface PremiumVideoGalleryProps {
  videos: string[];
  customTrigger?: React.ReactNode;
}

export const PremiumVideoGallery = ({ videos, customTrigger }: PremiumVideoGalleryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const isMobile = useIsMobile();
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Minimum swipe distance
  const minSwipeDistance = 50;

  const handleOpen = (index: number = 0) => {
    setCurrentIndex(index);
    setIsOpen(true);
    setIsPlaying(true);
    setProgress(0);
  };

  const handleClose = () => {
    setIsOpen(false);
    videoRefs.current.forEach(video => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });
    setIsPlaying(false);
    setProgress(0);
  };

  const navigateTo = useCallback((index: number) => {
    if (isTransitioning || index === currentIndex) return;
    
    setIsTransitioning(true);
    
    // Pause current video
    const currentVideo = videoRefs.current[currentIndex];
    if (currentVideo) {
      currentVideo.pause();
    }

    // Navigate
    setCurrentIndex(index);
    setProgress(0);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  }, [currentIndex, isTransitioning]);

  const navigatePrev = useCallback(() => {
    if (currentIndex > 0) {
      navigateTo(currentIndex - 1);
    }
  }, [currentIndex, navigateTo]);

  const navigateNext = useCallback(() => {
    if (currentIndex < videos.length - 1) {
      navigateTo(currentIndex + 1);
    }
  }, [currentIndex, videos.length, navigateTo]);

  // Touch handlers for swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isUpSwipe = distance > minSwipeDistance;
    const isDownSwipe = distance < -minSwipeDistance;
    
    if (isUpSwipe) {
      navigateNext();
    } else if (isDownSwipe) {
      navigatePrev();
    }
  };

  // Play current video when index changes
  useEffect(() => {
    if (!isOpen) return;
    
    const video = videoRefs.current[currentIndex];
    if (video) {
      video.currentTime = 0;
      video.muted = isMuted;
      if (isPlaying) {
        video.play().catch(() => {});
      }
    }
  }, [currentIndex, isOpen, isMuted, isPlaying]);

  // Handle video progress
  useEffect(() => {
    const video = videoRefs.current[currentIndex];
    if (!video || !isOpen) return;

    const updateProgress = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    video.addEventListener('timeupdate', updateProgress);
    return () => video.removeEventListener('timeupdate', updateProgress);
  }, [currentIndex, isOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          handleClose();
          break;
        case 'ArrowUp':
          e.preventDefault();
          navigatePrev();
          break;
        case 'ArrowDown':
          e.preventDefault();
          navigateNext();
          break;
        case ' ':
          e.preventDefault();
          setIsPlaying(prev => !prev);
          break;
        case 'm':
          setIsMuted(prev => !prev);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, navigatePrev, navigateNext]);

  // Toggle play/pause
  const togglePlay = () => {
    const video = videoRefs.current[currentIndex];
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Toggle mute
  const toggleMute = () => {
    setIsMuted(!isMuted);
    videoRefs.current.forEach(video => {
      if (video) video.muted = !isMuted;
    });
  };

  // Preload videos
  useEffect(() => {
    if (!isOpen) return;
    
    // Preload adjacent videos
    const preloadIndices = [currentIndex - 1, currentIndex, currentIndex + 1]
      .filter(i => i >= 0 && i < videos.length);
    
    preloadIndices.forEach(index => {
      const video = videoRefs.current[index];
      if (video) {
        video.preload = 'auto';
        video.load();
      }
    });
  }, [currentIndex, isOpen, videos.length]);

  // Golden border style
  const goldenBorderStyle = "border-2 border-amber-400/60 shadow-[0_0_20px_rgba(251,191,36,0.15),inset_0_0_20px_rgba(251,191,36,0.05)]";

  return (
    <>
      {/* Trigger */}
      {customTrigger ? (
        <div onClick={() => handleOpen(0)}>
          {customTrigger}
        </div>
      ) : (
        <button
          onClick={() => handleOpen(0)}
          className="px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold rounded-lg hover:from-amber-400 hover:to-yellow-400 transition-all"
        >
          View Gallery
        </button>
      )}

      {/* Gallery Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black">
          {isMobile ? (
            /* Mobile: TikTok-style vertical swipe */
            <div
              ref={containerRef}
              className="relative w-full h-full"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-20 p-2 bg-black/40 backdrop-blur-sm rounded-full border border-amber-400/30 transition-all hover:bg-black/60"
              >
                <X className="w-6 h-6 text-amber-400" />
              </button>

              {/* Video container */}
              <div className="relative w-full h-full flex items-center justify-center p-3">
                {/* Golden frame */}
                <div className={`relative w-full h-full max-w-[calc(100vh*9/16)] rounded-2xl overflow-hidden ${goldenBorderStyle}`}>
                  {/* Inner glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-amber-400/5 via-transparent to-amber-400/5 pointer-events-none z-10" />
                  
                  {/* Videos */}
                  {videos.map((video, index) => (
                    <video
                      key={index}
                      ref={el => { videoRefs.current[index] = el; }}
                      src={video}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                        index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                      }`}
                      loop
                      playsInline
                      muted={isMuted}
                      preload={Math.abs(index - currentIndex) <= 1 ? 'auto' : 'metadata'}
                      onClick={togglePlay}
                    />
                  ))}

                  {/* Play/Pause overlay */}
                  {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                      <div className="p-4 bg-black/50 rounded-full backdrop-blur-sm border border-amber-400/30">
                        <Play className="w-12 h-12 text-amber-400" fill="currentColor" />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Navigation indicators */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
                <button
                  onClick={navigatePrev}
                  disabled={currentIndex === 0}
                  className={`p-2 rounded-full bg-black/40 backdrop-blur-sm border border-amber-400/30 transition-all ${
                    currentIndex === 0 ? 'opacity-30' : 'hover:bg-amber-400/20'
                  }`}
                >
                  <ChevronUp className="w-5 h-5 text-amber-400" />
                </button>
                <button
                  onClick={navigateNext}
                  disabled={currentIndex === videos.length - 1}
                  className={`p-2 rounded-full bg-black/40 backdrop-blur-sm border border-amber-400/30 transition-all ${
                    currentIndex === videos.length - 1 ? 'opacity-30' : 'hover:bg-amber-400/20'
                  }`}
                >
                  <ChevronDown className="w-5 h-5 text-amber-400" />
                </button>
              </div>

              {/* Bottom controls */}
              <div className="absolute bottom-6 left-0 right-0 px-6 z-20">
                {/* Progress bar */}
                <div className="w-full h-1 bg-white/20 rounded-full mb-4 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="flex items-center justify-between">
                  {/* Video indicator */}
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400 font-medium text-sm">
                      {currentIndex + 1} / {videos.length}
                    </span>
                  </div>

                  {/* Dot indicators */}
                  <div className="flex gap-1.5">
                    {videos.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => navigateTo(index)}
                        className={`transition-all duration-300 rounded-full ${
                          index === currentIndex
                            ? 'w-6 h-2 bg-gradient-to-r from-amber-400 to-yellow-400'
                            : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Volume control */}
                  <button
                    onClick={toggleMute}
                    className="p-2 bg-black/40 backdrop-blur-sm rounded-full border border-amber-400/30 transition-all hover:bg-amber-400/20"
                  >
                    {isMuted ? (
                      <VolumeX className="w-5 h-5 text-amber-400" />
                    ) : (
                      <Volume2 className="w-5 h-5 text-amber-400" />
                    )}
                  </button>
                </div>
              </div>

              {/* Swipe hint */}
              {currentIndex === 0 && (
                <div className="absolute bottom-24 left-1/2 -translate-x-1/2 animate-bounce z-20">
                  <div className="flex flex-col items-center text-amber-400/60 text-xs">
                    <ChevronUp className="w-4 h-4" />
                    <span>Swipe</span>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Desktop: Elegant grid with modal preview */
            <div className="relative w-full h-full overflow-y-auto">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="fixed top-6 right-6 z-30 p-3 bg-black/60 backdrop-blur-md rounded-full border border-amber-400/40 transition-all hover:bg-amber-400/20 hover:border-amber-400"
              >
                <X className="w-6 h-6 text-amber-400" />
              </button>

              {/* Header */}
              <div className="pt-8 pb-6 text-center">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300">
                  Video Gallery
                </h2>
                <p className="text-amber-400/60 text-sm mt-1">Click to play • Press ESC to close</p>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 px-8 pb-12 max-w-6xl mx-auto">
                {videos.map((video, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      const videoEl = videoRefs.current[index];
                      if (videoEl) {
                        if (isPlaying && currentIndex === index) {
                          videoEl.pause();
                          setIsPlaying(false);
                        } else {
                          // Pause other videos
                          videoRefs.current.forEach((v, i) => {
                            if (v && i !== index) v.pause();
                          });
                          videoEl.currentTime = 0;
                          videoEl.muted = isMuted;
                          videoEl.play().catch(() => {});
                          setIsPlaying(true);
                        }
                      }
                    }}
                    className={`group relative cursor-pointer rounded-2xl overflow-hidden aspect-[9/16] ${goldenBorderStyle} hover:border-amber-400 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] transition-all duration-300`}
                  >
                    {/* Golden corner accents */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-amber-400 rounded-tl-xl z-10" />
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-amber-400 rounded-tr-xl z-10" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-amber-400 rounded-bl-xl z-10" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-amber-400 rounded-br-xl z-10" />

                    <video
                      ref={el => { videoRefs.current[index] = el; }}
                      src={video}
                      className="w-full h-full object-cover"
                      loop
                      playsInline
                      muted={isMuted}
                      preload="auto"
                    />

                    {/* Hover overlay */}
                    <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
                      currentIndex === index && isPlaying ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'
                    }`}>
                      <div className="p-4 bg-black/50 rounded-full backdrop-blur-sm border border-amber-400/50 group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-amber-400" fill="currentColor" />
                      </div>
                    </div>

                    {/* Video number badge */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/60 backdrop-blur-sm rounded-full border border-amber-400/30 z-10">
                      <span className="text-amber-400 font-medium text-xs">{index + 1}</span>
                    </div>

                    {/* Playing indicator */}
                    {currentIndex === index && isPlaying && (
                      <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-black/60 backdrop-blur-sm rounded-full border border-amber-400/30 z-10">
                        <div className="flex gap-0.5">
                          <div className="w-1 h-3 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
                          <div className="w-1 h-4 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
                          <div className="w-1 h-2 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
                        </div>
                        <span className="text-amber-400 text-xs font-medium">Playing</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom controls bar */}
              <div className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md border-t border-amber-400/20 px-8 py-4">
                <div className="max-w-6xl mx-auto flex items-center justify-between">
                  <div className="text-amber-400/80 text-sm">
                    {videos.length} videos
                  </div>
                  <button
                    onClick={toggleMute}
                    className="flex items-center gap-2 px-4 py-2 bg-amber-400/10 hover:bg-amber-400/20 rounded-full border border-amber-400/30 transition-all"
                  >
                    {isMuted ? (
                      <>
                        <VolumeX className="w-4 h-4 text-amber-400" />
                        <span className="text-amber-400 text-sm">Unmute All</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-4 h-4 text-amber-400" />
                        <span className="text-amber-400 text-sm">Mute All</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
