import { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

// Global state to track currently playing video
let currentlyPlayingVideo: HTMLVideoElement | null = null;

interface FullscreenVideoProps {
  src: string;
  className?: string;
}

export const FullscreenVideo = ({ src, className = '' }: FullscreenVideoProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobileActive, setIsMobileActive] = useState(false);
  const isMobile = useIsMobile();
  const thumbnailRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const fullscreenVideoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (isMobile) return;
    setIsHovering(true);
    if (videoRef.current) {
      // Stop any other playing video
      if (currentlyPlayingVideo && currentlyPlayingVideo !== videoRef.current) {
        currentlyPlayingVideo.pause();
        currentlyPlayingVideo.currentTime = 0;
      }
      // Play this video
      currentlyPlayingVideo = videoRef.current;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    setIsHovering(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      if (currentlyPlayingVideo === videoRef.current) {
        currentlyPlayingVideo = null;
      }
    }
  };

  const handleClick = () => {
    if (isMobile) {
      // On mobile, toggle inline player mode
      setIsMobileActive(!isMobileActive);
      if (!isMobileActive && videoRef.current) {
        // Stop any other playing video
        if (currentlyPlayingVideo && currentlyPlayingVideo !== videoRef.current) {
          currentlyPlayingVideo.pause();
          currentlyPlayingVideo.currentTime = 0;
        }
        currentlyPlayingVideo = videoRef.current;
      }
    } else {
      // On desktop, open fullscreen
      if (!isFullscreen) {
        setIsAnimating(true);
        setIsFullscreen(true);
        if (videoRef.current) {
          videoRef.current.pause();
          if (currentlyPlayingVideo === videoRef.current) {
            currentlyPlayingVideo = null;
          }
        }
      }
    }
  };

  const handleClose = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsFullscreen(false);
      setIsAnimating(false);
    }, 300);
  };

  useEffect(() => {
    if (isFullscreen && fullscreenVideoRef.current) {
      const timeout = setTimeout(() => {
        fullscreenVideoRef.current?.play();
        setIsAnimating(false);
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [isFullscreen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isFullscreen]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (currentlyPlayingVideo === videoRef.current) {
        currentlyPlayingVideo = null;
      }
    };
  }, []);

  return (
    <>
      {/* Video Container */}
      <div 
        ref={thumbnailRef}
        className={`cursor-pointer ${className}`}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <video
          ref={videoRef}
          src={src}
          className="w-full h-auto aspect-[9/16] object-contain bg-black"
          preload="metadata"
          muted={!isMobileActive}
          playsInline
          loop
          controls={isMobile && isMobileActive}
        />
        {/* Play button overlay - hide on mobile when active */}
        {!(isMobile && isMobileActive) && (
          <div className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300 ${isHovering ? 'opacity-0' : 'opacity-100'}`}>
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
              <div className="w-0 h-0 border-l-[16px] sm:border-l-[20px] border-l-primary border-t-[10px] sm:border-t-[12px] border-t-transparent border-b-[10px] sm:border-b-[12px] border-b-transparent ml-1"></div>
            </div>
          </div>
        )}
      </div>

      {/* Fullscreen Overlay - Desktop Only */}
      {!isMobile && isFullscreen && (
        <div 
          className={`fixed inset-0 z-50 bg-black/95 flex items-center justify-center transition-opacity duration-300 ${
            isAnimating ? 'opacity-0' : 'opacity-100'
          }`}
          onClick={handleClose}
        >
          {/* Close Button */}
          <button 
            onClick={handleClose}
            className="absolute top-4 right-4 z-60 p-3 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Fullscreen Video Container */}
          <div 
            className={`relative max-w-lg w-full mx-4 transition-all duration-500 ease-out ${
              isAnimating ? 'scale-50 opacity-0' : 'scale-100 opacity-100'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={fullscreenVideoRef}
              src={src}
              controls
              autoPlay
              className="w-full h-auto max-h-[90vh] aspect-[9/16] object-contain rounded-2xl shadow-2xl"
              playsInline
            />
          </div>
        </div>
      )}
    </>
  );
};