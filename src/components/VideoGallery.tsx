import { useState, useRef, useEffect } from 'react';
import { X, Grid, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

// Global state to track currently playing video in gallery
let currentlyPlayingGalleryVideo: HTMLVideoElement | null = null;

interface VideoGalleryProps {
  videos: string[];
  buttonText?: string;
  customTrigger?: React.ReactNode;
}

export const VideoGallery = ({ videos, buttonText = "View All", customTrigger }: VideoGalleryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleOpen = () => {
    setIsOpen(true);
    setCurrentIndex(0);
  };

  const handleClose = () => {
    setIsOpen(false);
    // Stop all videos when closing
    videoRefs.current.forEach(video => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });
    if (currentlyPlayingGalleryVideo) {
      currentlyPlayingGalleryVideo = null;
    }
  };

  const handleVideoClick = (index: number, videoEl: HTMLVideoElement | null) => {
    if (videoEl) {
      // Stop any other playing video
      if (currentlyPlayingGalleryVideo && currentlyPlayingGalleryVideo !== videoEl) {
        currentlyPlayingGalleryVideo.pause();
      }
      
      if (videoEl.paused) {
        currentlyPlayingGalleryVideo = videoEl;
        videoEl.play().catch(() => {});
      } else {
        videoEl.pause();
        if (currentlyPlayingGalleryVideo === videoEl) {
          currentlyPlayingGalleryVideo = null;
        }
      }
    }
  };

  const navigatePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const navigateNext = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
      if (e.key === 'ArrowLeft' && isOpen) {
        navigatePrev();
      }
      if (e.key === 'ArrowRight' && isOpen) {
        navigateNext();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Stop current video when changing index
  useEffect(() => {
    if (currentlyPlayingGalleryVideo) {
      currentlyPlayingGalleryVideo.pause();
      currentlyPlayingGalleryVideo = null;
    }
  }, [currentIndex]);

  return (
    <>
      {/* Trigger - Custom or Default Button */}
      {customTrigger ? (
        <div onClick={handleOpen}>
          {customTrigger}
        </div>
      ) : (
        <Button
          onClick={handleOpen}
          variant="outline"
          className="mt-4 w-full sm:w-auto bg-gradient-to-r from-accent/20 to-primary/20 border-accent/50 hover:border-accent hover:bg-accent/30 transition-all duration-300"
        >
          <Grid className="w-4 h-4 mr-2" />
          {buttonText}
        </Button>
      )}

      {/* Gallery Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex flex-col animate-fade-in"
          onClick={handleClose}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <h3 className="text-white font-bold text-lg">
              Video Gallery ({currentIndex + 1}/{videos.length})
            </h3>
            <button 
              onClick={handleClose}
              className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Gallery Content */}
          {isMobile ? (
            /* Mobile: Single video with navigation */
            <div 
              className="flex-1 flex items-center justify-center px-4 py-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={navigatePrev}
                className="absolute left-2 z-10 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-all"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              <div className="max-w-sm w-full">
                <video
                  ref={(el) => { videoRefs.current[currentIndex] = el; }}
                  src={videos[currentIndex]}
                  controls
                  className="w-full h-auto max-h-[70vh] aspect-[9/16] object-contain rounded-xl"
                  playsInline
                  onClick={(e) => {
                    e.stopPropagation();
                    handleVideoClick(currentIndex, videoRefs.current[currentIndex]);
                  }}
                />
              </div>

              <button
                onClick={navigateNext}
                className="absolute right-2 z-10 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-all"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Dots indicator */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {videos.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? 'bg-white w-4' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          ) : (
            /* Desktop: Scrollable grid */
            <div 
              className="flex-1 overflow-y-auto p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                {videos.map((video, index) => (
                  <div 
                    key={index} 
                    className="relative rounded-xl overflow-hidden shadow-lg border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                  >
                    <video
                      ref={(el) => { videoRefs.current[index] = el; }}
                      src={video}
                      controls
                      className="w-full h-auto aspect-[9/16] object-contain bg-black"
                      playsInline
                      preload="metadata"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleVideoClick(index, videoRefs.current[index]);
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
