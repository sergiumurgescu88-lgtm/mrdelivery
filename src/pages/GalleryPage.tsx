import { useState, useRef, useEffect, useCallback } from 'react';
import { Volume2, VolumeX, ChevronUp, ChevronDown, Play, ArrowLeft, Home } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import SEO from '@/components/SEO';

import galleryVideo1 from '@/assets/gallery-video-1.mp4';
import galleryVideo2 from '@/assets/gallery-video-2.mp4';
import galleryVideo3 from '@/assets/gallery-video-3.mp4';
import galleryVideo4 from '@/assets/gallery-video-4.mp4';
import galleryVideo5 from '@/assets/gallery-video-5.mp4';
import galleryVideo6 from '@/assets/gallery-video-6.mp4';
import galleryVideo7 from '@/assets/gallery-video-7.mp4';
import galleryVideo8 from '@/assets/gallery-video-8.mp4';
import galleryVideo9 from '@/assets/gallery-video-9.mp4';
import galleryVideo10 from '@/assets/gallery-video-10.mp4';
import galleryVideo11 from '@/assets/gallery-video-11.mp4';
import galleryVideo12 from '@/assets/gallery-video-12.mp4';
import galleryVideo13 from '@/assets/gallery-video-13.mp4';
import galleryVideo14 from '@/assets/gallery-video-14.mp4';
import galleryVideo15 from '@/assets/gallery-video-15.mp4';
import galleryVideo16 from '@/assets/gallery-video-16.mp4';

const videos = [
  galleryVideo1, galleryVideo2, galleryVideo3, galleryVideo4, 
  galleryVideo5, galleryVideo6, galleryVideo7, galleryVideo8,
  galleryVideo9, galleryVideo10, galleryVideo11, galleryVideo12,
  galleryVideo13, galleryVideo14, galleryVideo15, galleryVideo16
];

// Lazy Video Card Component with Intersection Observer
interface LazyVideoCardProps {
  video: string;
  index: number;
  currentIndex: number;
  isPlaying: boolean;
  isMuted: boolean;
  goldenBorderStyle: string;
  videoRefs: React.MutableRefObject<(HTMLVideoElement | null)[]>;
  onVideoClick: (index: number) => void;
}

const LazyVideoCard = ({ 
  video, 
  index, 
  currentIndex, 
  isPlaying, 
  isMuted, 
  goldenBorderStyle, 
  videoRefs, 
  onVideoClick 
}: LazyVideoCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px', threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      onClick={() => onVideoClick(index)}
      className={`group relative cursor-pointer rounded-2xl overflow-hidden aspect-[9/16] ${goldenBorderStyle} hover:border-amber-400 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] transition-all duration-300`}
    >
      {/* Golden corner accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-amber-400 rounded-tl-xl z-10" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-amber-400 rounded-tr-xl z-10" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-amber-400 rounded-bl-xl z-10" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-amber-400 rounded-br-xl z-10" />

      {isVisible ? (
        <video
          ref={el => { videoRefs.current[index] = el; }}
          src={video}
          className="w-full h-full object-cover"
          loop
          playsInline
          muted={isMuted}
          preload="metadata"
        />
      ) : (
        <div className="w-full h-full bg-black/80 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

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
  );
};

const GalleryPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false); // Start with audio enabled
  const [isPlaying, setIsPlaying] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState<Set<number>>(new Set([0, 1, 2])); // Initial lazy load
  const [progress, setProgress] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const minSwipeDistance = 50;

  const seoData = {
    ro: {
      title: 'Galerie Video Premium | MrDelivery',
      description: 'Descoperă portofoliul nostru de conținut video pentru restaurante. Exemple de producție video profesională pentru marketing HoReCa.'
    },
    en: {
      title: 'Premium Video Gallery | MrDelivery',
      description: 'Discover our portfolio of video content for restaurants. Professional video production examples for HoReCa marketing.'
    },
    es: {
      title: 'Galería de Videos Premium | MrDelivery',
      description: 'Descubre nuestro portafolio de contenido de video para restaurantes. Ejemplos de producción de video profesional para marketing HoReCa.'
    }
  };

  const currentSeo = seoData[language] || seoData.ro;

  const navigateTo = useCallback((index: number) => {
    if (isTransitioning || index === currentIndex) return;
    
    setIsTransitioning(true);
    
    const currentVideo = videoRefs.current[currentIndex];
    if (currentVideo) {
      currentVideo.pause();
    }

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
  }, [currentIndex, navigateTo]);

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
    const video = videoRefs.current[currentIndex];
    if (video) {
      video.currentTime = 0;
      video.muted = isMuted;
      if (isPlaying) {
        video.play().catch(() => {});
      }
    }
  }, [currentIndex, isMuted, isPlaying]);

  // Handle video progress
  useEffect(() => {
    const video = videoRefs.current[currentIndex];
    if (!video) return;

    const updateProgress = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    video.addEventListener('timeupdate', updateProgress);
    return () => video.removeEventListener('timeupdate', updateProgress);
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          navigate('/');
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
  }, [navigate, navigatePrev, navigateNext]);

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

  // Lazy load videos - only load adjacent videos
  useEffect(() => {
    const indicesToLoad = [currentIndex - 1, currentIndex, currentIndex + 1, currentIndex + 2]
      .filter(i => i >= 0 && i < videos.length);
    
    setLoadedVideos(prev => {
      const newSet = new Set(prev);
      indicesToLoad.forEach(i => newSet.add(i));
      return newSet;
    });
    
    // Preload adjacent videos
    indicesToLoad.forEach(index => {
      const video = videoRefs.current[index];
      if (video) {
        video.preload = 'auto';
      }
    });
  }, [currentIndex]);

  // Golden border style
  const goldenBorderStyle = "border-2 border-amber-400/60 shadow-[0_0_20px_rgba(251,191,36,0.15),inset_0_0_20px_rgba(251,191,36,0.05)]";

  return (
    <div 
      className="fixed inset-0 bg-black"
      style={{ 
        zIndex: 99999,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100dvh'
      }}
    >
      <SEO 
        title={currentSeo.title} 
        description={currentSeo.description}
        url="https://mrdelivery.lovable.app/gallery"
      />

      {isMobile ? (
        /* Mobile: TikTok-style vertical swipe */
        <div
          ref={containerRef}
          className="relative w-full h-full bg-black"
          style={{ height: '100dvh' }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Back button */}
          <button
            onClick={() => navigate('/')}
            className="absolute top-4 left-4 z-30 p-3 bg-black/60 backdrop-blur-sm rounded-full border-2 border-amber-400/50 transition-all active:scale-95"
          >
            <ArrowLeft className="w-6 h-6 text-amber-400" />
          </button>

          {/* Title */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30">
            <h1 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300">
              🎬 Content Examples
            </h1>
          </div>

          {/* Video container - truly fullscreen */}
          <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-4 pt-16">
            {/* Golden frame */}
            <div 
              className={`relative w-full h-full rounded-xl overflow-hidden ${goldenBorderStyle}`}
              style={{ maxWidth: 'calc((100dvh - 140px) * 9 / 16)' }}
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-amber-400 rounded-tl-lg z-20" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-amber-400 rounded-tr-lg z-20" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-amber-400 rounded-bl-lg z-20" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-amber-400 rounded-br-lg z-20" />
              
              {/* Inner glow effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-amber-400/5 via-transparent to-amber-400/5 pointer-events-none z-10" />
              
              {/* Videos - Lazy loaded */}
              {videos.map((video, index) => (
                loadedVideos.has(index) ? (
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
                    preload={Math.abs(index - currentIndex) <= 1 ? 'auto' : 'none'}
                    onClick={togglePlay}
                  />
                ) : (
                  <div
                    key={index}
                    className={`absolute inset-0 w-full h-full bg-black/80 flex items-center justify-center transition-opacity duration-300 ${
                      index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                  >
                    <div className="w-8 h-8 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
                  </div>
                )
              ))}

              {/* Play/Pause overlay */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <div className="p-5 bg-black/60 rounded-full backdrop-blur-sm border-2 border-amber-400/50">
                    <Play className="w-14 h-14 text-amber-400" fill="currentColor" />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Navigation indicators - positioned outside video */}
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-30">
            <button
              onClick={navigatePrev}
              disabled={currentIndex === 0}
              className={`p-2.5 rounded-full bg-black/60 backdrop-blur-sm border-2 border-amber-400/40 transition-all ${
                currentIndex === 0 ? 'opacity-30' : 'active:scale-95'
              }`}
            >
              <ChevronUp className="w-5 h-5 text-amber-400" />
            </button>
            <button
              onClick={navigateNext}
              disabled={currentIndex === videos.length - 1}
              className={`p-2.5 rounded-full bg-black/60 backdrop-blur-sm border-2 border-amber-400/40 transition-all ${
                currentIndex === videos.length - 1 ? 'opacity-30' : 'active:scale-95'
              }`}
            >
              <ChevronDown className="w-5 h-5 text-amber-400" />
            </button>
          </div>

          {/* Bottom controls - safe area aware */}
          <div className="absolute bottom-0 left-0 right-0 px-4 pb-6 pt-4 z-30 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            {/* Progress bar */}
            <div className="w-full h-1.5 bg-white/20 rounded-full mb-4 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between">
              {/* Video indicator */}
              <div className="flex items-center gap-2 px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full border border-amber-400/30">
                <span className="text-amber-400 font-bold text-sm">
                  {currentIndex + 1} / {videos.length}
                </span>
              </div>

              {/* Dot indicators */}
              <div className="flex gap-2">
                {videos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => navigateTo(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentIndex
                        ? 'w-7 h-2.5 bg-gradient-to-r from-amber-400 to-yellow-400'
                        : 'w-2.5 h-2.5 bg-white/40'
                    }`}
                  />
                ))}
              </div>

              {/* Volume control */}
              <button
                onClick={toggleMute}
                className="p-2.5 bg-black/50 backdrop-blur-sm rounded-full border border-amber-400/30 transition-all active:scale-95"
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
            <div className="absolute bottom-32 left-1/2 -translate-x-1/2 animate-bounce z-20">
              <div className="flex flex-col items-center text-amber-400/80 text-xs font-medium">
                <ChevronUp className="w-5 h-5" />
                <span>Swipe</span>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Desktop: Elegant grid */
        <div className="relative w-full h-full overflow-y-auto">
          {/* Back button */}
          <button
            onClick={() => navigate('/')}
            className="fixed top-6 left-6 z-30 p-3 bg-black/60 backdrop-blur-md rounded-full border border-amber-400/40 transition-all hover:bg-amber-400/20 hover:border-amber-400 flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5 text-amber-400" />
            <span className="text-amber-400 text-sm font-medium pr-1">Back</span>
          </button>

          {/* Header */}
          <div className="pt-8 pb-6 text-center">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300">
              🎬 Content Examples
            </h1>
            <p className="text-amber-400/60 text-sm mt-2">Click to play • Press ESC to go back</p>
          </div>

          {/* Grid - Lazy loaded */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 px-8 pb-24 max-w-6xl mx-auto">
            {videos.map((video, index) => (
              <LazyVideoCard
                key={index}
                video={video}
                index={index}
                currentIndex={currentIndex}
                isPlaying={isPlaying}
                isMuted={isMuted}
                goldenBorderStyle={goldenBorderStyle}
                videoRefs={videoRefs}
                onVideoClick={(idx) => {
                  setCurrentIndex(idx);
                  // Mark as loaded when clicked
                  setLoadedVideos(prev => new Set([...prev, idx]));
                  const videoEl = videoRefs.current[idx];
                  if (videoEl) {
                    if (isPlaying && currentIndex === idx) {
                      videoEl.pause();
                      setIsPlaying(false);
                    } else {
                      videoRefs.current.forEach((v, i) => {
                        if (v && i !== idx) v.pause();
                      });
                      videoEl.currentTime = 0;
                      videoEl.muted = isMuted;
                      videoEl.play().catch(() => {});
                      setIsPlaying(true);
                    }
                  }
                }}
              />
            ))}
          </div>

          {/* Bottom controls bar */}
          <div className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md border-t border-amber-400/20 px-8 py-4 z-20">
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
  );
};

export default GalleryPage;
