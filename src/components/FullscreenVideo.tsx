import { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';

interface FullscreenVideoProps {
  src: string;
  className?: string;
}

export const FullscreenVideo = ({ src, className = '' }: FullscreenVideoProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const thumbnailRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const fullscreenVideoRef = useRef<HTMLVideoElement>(null);

  const handleClick = () => {
    if (!isFullscreen) {
      setIsAnimating(true);
      setIsFullscreen(true);
      // Pause the thumbnail video
      if (videoRef.current) {
        videoRef.current.pause();
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
      // Small delay to allow animation to start, then play
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

  return (
    <>
      {/* Thumbnail Video */}
      <div 
        ref={thumbnailRef}
        className={`cursor-pointer ${className}`}
        onClick={handleClick}
      >
        <video
          ref={videoRef}
          src={src}
          className="w-full h-auto aspect-[9/16] object-contain bg-black"
          preload="metadata"
          muted
          playsInline
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
            <div className="w-0 h-0 border-l-[16px] sm:border-l-[20px] border-l-primary border-t-[10px] sm:border-t-[12px] border-t-transparent border-b-[10px] sm:border-b-[12px] border-b-transparent ml-1"></div>
          </div>
        </div>
      </div>

      {/* Fullscreen Overlay */}
      {isFullscreen && (
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
