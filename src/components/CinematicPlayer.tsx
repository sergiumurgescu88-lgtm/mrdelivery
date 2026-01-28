import { useRef, useState, useEffect, useCallback, lazy, Suspense, memo } from 'react';
import { Play, Pause, Volume2, VolumeX, Podcast, Maximize2, Minimize2, Package, RotateCcw, RotateCw } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language as AppLanguage } from '@/i18n/translations';

// Lazy load audio URLs - these are just paths, actual loading happens on demand
const getAudioUrl = (name: string): string => {
  const audioMap: Record<string, string> = {
    'podcast-romanian': new URL('@/assets/podcast-romanian.wav', import.meta.url).href,
    'podcast-spanish': new URL('@/assets/podcast-spanish.wav', import.meta.url).href,
    'podcast-english': new URL('@/assets/podcast-english.wav', import.meta.url).href,
    'audio-brandul-tau': new URL('@/assets/audio-brandul-tau.wav', import.meta.url).href,
    'audio-pilot-automat': new URL('@/assets/audio-pilot-automat.wav', import.meta.url).href,
    'audio-asistent-virtual': new URL('@/assets/audio-asistent-virtual.wav', import.meta.url).href,
    'audio-productie-video': new URL('@/assets/audio-productie-video.wav', import.meta.url).href,
    'audio-management-platforme': new URL('@/assets/audio-management-platforme.wav', import.meta.url).href,
    'audio-brandul-tau-es': new URL('@/assets/audio-brandul-tau-es.wav', import.meta.url).href,
    'audio-pilot-automat-es': new URL('@/assets/audio-pilot-automat-es.wav', import.meta.url).href,
    'audio-asistent-virtual-es': new URL('@/assets/audio-asistent-virtual-es.wav', import.meta.url).href,
    'audio-productie-video-es': new URL('@/assets/audio-productie-video-es.wav', import.meta.url).href,
    'audio-management-platforme-es': new URL('@/assets/audio-management-platforme-es.wav', import.meta.url).href,
    'audio-brandul-tau-en': new URL('@/assets/audio-brandul-tau-en.wav', import.meta.url).href,
    'audio-pilot-automat-en': new URL('@/assets/audio-pilot-automat-en.wav', import.meta.url).href,
    'audio-asistent-virtual-en': new URL('@/assets/audio-asistent-virtual-en.wav', import.meta.url).href,
    'audio-productie-video-en': new URL('@/assets/audio-productie-video-en.wav', import.meta.url).href,
    'audio-management-platforme-en': new URL('@/assets/audio-management-platforme-en.wav', import.meta.url).href,
  };
  return audioMap[name] || '';
};

// Map app language to podcast language
const languageToPodcast: Record<AppLanguage, Language> = {
  ro: 'ro',
  es: 'es',
  en: 'us',
};

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

type Language = 'ro' | 'es' | 'us';

export type PackageType = 
  | 'brandul-tau'
  | 'pilot-automat'
  | 'asistent-virtual'
  | 'productie-video'
  | 'management-platforme';

interface PodcastConfig {
  id: Language;
  label: string;
  flag: string;
  audioKey: string;
}

const podcasts: PodcastConfig[] = [
  { id: 'ro', label: 'Română', flag: '🇷🇴', audioKey: 'podcast-romanian' },
  { id: 'es', label: 'Español', flag: '🇪🇸', audioKey: 'podcast-spanish' },
  { id: 'us', label: 'English', flag: '🇺🇸', audioKey: 'podcast-english' },
];

// Package audio keys per language
const packageAudioKeys: Record<PackageType, Record<'ro' | 'es' | 'en', string>> = {
  'brandul-tau': { ro: 'audio-brandul-tau', es: 'audio-brandul-tau-es', en: 'audio-brandul-tau-en' },
  'pilot-automat': { ro: 'audio-pilot-automat', es: 'audio-pilot-automat-es', en: 'audio-pilot-automat-en' },
  'asistent-virtual': { ro: 'audio-asistent-virtual', es: 'audio-asistent-virtual-es', en: 'audio-asistent-virtual-en' },
  'productie-video': { ro: 'audio-productie-video', es: 'audio-productie-video-es', en: 'audio-productie-video-en' },
  'management-platforme': { ro: 'audio-management-platforme', es: 'audio-management-platforme-es', en: 'audio-management-platforme-en' },
};

const packageNames: Record<PackageType, Record<'ro' | 'es' | 'en', string>> = {
  'brandul-tau': { ro: 'Pachetul 5', es: 'El paquete 5', en: 'Package 5' },
  'pilot-automat': { ro: 'Pachetul 4', es: 'El paquete 4', en: 'Package 4' },
  'asistent-virtual': { ro: 'Pachetul 3', es: 'El paquete 3', en: 'Package 3' },
  'productie-video': { ro: 'Pachetul 2', es: 'El paquete 2', en: 'Package 2' },
  'management-platforme': { ro: 'Pachetul 1', es: 'El paquete 1', en: 'Package 1' },
};

type AudioSource = { type: 'podcast'; language: Language } | { type: 'package'; packageId: PackageType };

interface CinematicPlayerProps {
  activePackage?: PackageType | null;
  onClearPackage?: () => void;
}

export const CinematicPlayer = ({ activePackage, onClearPackage }: CinematicPlayerProps) => {
  const { language: appLanguage } = useLanguage();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const [audioSource, setAudioSource] = useState<AudioSource>({ type: 'podcast', language: languageToPodcast[appLanguage] });
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(70);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isBuffering, setIsBuffering] = useState(true);
  const [bufferedPercent, setBufferedPercent] = useState(0);
  const hasStarted = useRef(false);

  // Get current audio source
  const getCurrentSrc = () => {
    if (audioSource.type === 'podcast') {
      const podcast = podcasts.find(p => p.id === audioSource.language) || podcasts[0];
      return getAudioUrl(podcast.audioKey);
    } else {
      // Get package audio based on app language
      const langKey = appLanguage === 'es' ? 'es' : appLanguage === 'en' ? 'en' : 'ro';
      return getAudioUrl(packageAudioKeys[audioSource.packageId][langKey]);
    }
  };

  const getCurrentLabel = () => {
    if (audioSource.type === 'podcast') {
      const podcast = podcasts.find(p => p.id === audioSource.language) || podcasts[0];
      return `${podcast.label} - MrDelivery Podcast`;
    } else {
      return packageNames[audioSource.packageId][appLanguage];
    }
  };

  const getTitle = () => {
    if (audioSource.type === 'podcast') {
      return 'MrDelivery Podcast';
    } else {
      return packageNames[audioSource.packageId][appLanguage];
    }
  };

  const getSubtitle = () => {
    if (audioSource.type === 'podcast') {
      return 'Always playing for you';
    } else {
      return null;
    }
  };

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle package audio activation
  useEffect(() => {
    if (activePackage) {
      // Stop current audio
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      
      // Switch to package audio
      setAudioSource({ type: 'package', packageId: activePackage });
      setCurrentTime(0);
      setIsPlaying(false);
      setIsMobileExpanded(true); // Expand on mobile when package is selected
      
      // Play after source is set
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play()
            .then(() => setIsPlaying(true))
            .catch(() => setIsPlaying(false));
        }
      }, 100);
    }
  }, [activePackage]);

  // Sync podcast with language changes (only when in podcast mode)
  useEffect(() => {
    if (audioSource.type !== 'podcast') return;
    
    const newPodcastLang = languageToPodcast[appLanguage];
    if (newPodcastLang === audioSource.language) return;

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    setCurrentTime(0);
    setIsPlaying(false);
    setAudioSource({ type: 'podcast', language: newPodcastLang });
  }, [appLanguage, audioSource]);

  // Audio event listeners
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => {
      setDuration(audio.duration);
      setIsBuffering(false);
    };
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
      // Return to podcast after package audio ends
      if (audioSource.type === 'package') {
        setAudioSource({ type: 'podcast', language: languageToPodcast[appLanguage] });
        onClearPackage?.();
      }
    };

    // Handle buffering progress
    const handleProgress = () => {
      if (audio.buffered.length > 0 && audio.duration > 0) {
        const bufferedEnd = audio.buffered.end(audio.buffered.length - 1);
        const percent = (bufferedEnd / audio.duration) * 100;
        setBufferedPercent(percent);
        if (percent >= 95) {
          setIsBuffering(false);
        }
      }
    };

    const handleCanPlayThrough = () => {
      setIsBuffering(false);
      setBufferedPercent(100);
    };

    const handleWaiting = () => setIsBuffering(true);
    const handlePlaying = () => setIsBuffering(false);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('progress', handleProgress);
    audio.addEventListener('canplaythrough', handleCanPlayThrough);
    audio.addEventListener('waiting', handleWaiting);
    audio.addEventListener('playing', handlePlaying);

    if (audio.duration) {
      setDuration(audio.duration);
    }

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('progress', handleProgress);
      audio.removeEventListener('canplaythrough', handleCanPlayThrough);
      audio.removeEventListener('waiting', handleWaiting);
      audio.removeEventListener('playing', handlePlaying);
    };
  }, [audioSource, appLanguage, onClearPackage]);

  // Start expansion animation on page load
  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    setTimeout(() => {
      setIsExpanded(true);
    }, 100);
  }, []);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play();
        setIsPlaying(true);
      }
    }
  }, [isPlaying]);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
    if (newVolume > 0 && isMuted) {
      setIsMuted(false);
      if (audioRef.current) audioRef.current.muted = false;
    }
  };

  const handleSeek = useCallback((value: number[]) => {
    const newTime = value[0];
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  }, []);

  const skipBackward = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (audioRef.current) {
      const newTime = Math.max(0, audioRef.current.currentTime - 10);
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  }, []);

  const skipForward = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (audioRef.current) {
      const newTime = Math.min(duration, audioRef.current.currentTime + 10);
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  }, [duration]);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.muted = false;
        setIsMuted(false);
      } else {
        audioRef.current.muted = true;
        setIsMuted(true);
      }
    }
  };

  const handleExpandToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMobileExpanded(!isMobileExpanded);
  };

  const handleBoxClick = () => {
    togglePlay();
  };

  const handlePlayButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    togglePlay();
  };

  const handleBackToPodcast = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setAudioSource({ type: 'podcast', language: languageToPodcast[appLanguage] });
    setCurrentTime(0);
    setIsPlaying(false);
    onClearPackage?.();
  };
  
  // Determine if player should be minimized (on both mobile and desktop)
  const isMinimized = !isMobileExpanded;

  const isPodcast = audioSource.type === 'podcast';

  return (
    <>
      {/* Audio element with full preloading for seekability */}
      <audio
        ref={audioRef}
        src={getCurrentSrc()}
        preload="auto"
      />

      {/* Fixed position audio player container */}
      <div 
        className={
          isMobile && !isMinimized
            ? `fixed inset-x-4 bottom-4 z-[1000] flex justify-center transition-all duration-300 ease-out ${
                isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`
            : `fixed bottom-5 right-5 z-[1000] transition-all duration-300 ease-out ${
                isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`
        }
      >
        {/* Audio box with flicker/float animation */}
        <div 
          onClick={handleBoxClick}
          className={`
            relative overflow-hidden cursor-pointer
            transition-all duration-300 ease-out
            ${isPlaying ? 'animate-audio-float' : 'animate-audio-flicker'}
            ${isMinimized 
              ? 'w-[70px] h-[70px] rounded-full p-0 flex items-center justify-center' 
              : 'w-[320px] rounded-[18px] p-6'
            }
          `}
          style={{
            background: isPodcast 
              ? 'linear-gradient(145deg, #0c2036, #0a1a2d)'
              : 'linear-gradient(145deg, #1a1a2e, #16213e)',
            boxShadow: isPodcast
              ? '0 10px 40px rgba(12, 32, 54, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              : '0 10px 40px rgba(249, 115, 22, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            border: isPodcast 
              ? '1px solid rgba(255, 255, 255, 0.08)'
              : '1px solid rgba(249, 115, 22, 0.3)',
          }}
        >
          {/* Subtle glow effect */}
          <div 
            className="absolute -inset-0.5 rounded-[20px] -z-10 opacity-50 blur-[10px]"
            style={{
              background: isPodcast 
                ? 'linear-gradient(45deg, #0c2036, #1e40af, #0c2036)'
                : 'linear-gradient(45deg, #f97316, #fb923c, #f97316)',
            }}
          />

          {/* Expand/Minimize button - always visible when not minimized */}
          {!isMinimized && (
            <button
              onClick={handleExpandToggle}
              className="absolute top-2.5 left-2.5 bg-white/10 border-none text-white w-[30px] h-[30px] rounded-full flex items-center justify-center cursor-pointer z-10 transition-opacity duration-300 hover:bg-white/20"
            >
              <Minimize2 className="w-4 h-4" />
            </button>
          )}

          {/* Minimized state - only show play/pause icon */}
          {isMinimized && (
            <div 
              className="w-full h-full rounded-full flex items-center justify-center"
              style={{
                background: isPodcast 
                  ? 'linear-gradient(135deg, #f97316, #fb923c)'
                  : 'linear-gradient(135deg, #8b5cf6, #a855f7)',
              }}
            >
              {isPlaying ? (
                <Pause className="w-7 h-7 text-white" fill="white" />
              ) : (
                <Play className="w-7 h-7 text-white ml-1" fill="white" />
              )}
            </div>
          )}

          {/* Full player content - hidden when minimized */}
          {!isMinimized && (
            <>
              {/* Player header */}
              <div className="flex items-center mb-6 pointer-events-none">
                <div 
                  className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center mr-4"
                  style={{
                    background: isPodcast
                      ? 'linear-gradient(135deg, #f97316, #fb923c)'
                      : 'linear-gradient(135deg, #8b5cf6, #a855f7)',
                    boxShadow: isPodcast
                      ? '0 4px 12px rgba(249, 115, 22, 0.3)'
                      : '0 4px 12px rgba(139, 92, 246, 0.3)',
                  }}
                >
                  {isPodcast ? (
                    <Podcast className="w-7 h-7 text-white" />
                  ) : (
                    <Package className="w-7 h-7 text-white" />
                  )}
                </div>
                <div>
                  <h3 className="text-[1.4rem] text-white font-semibold mb-1">
                    {getTitle()}
                  </h3>
                  {getSubtitle() && (
                    <p className="text-sm text-white/75 font-normal">
                      {getSubtitle()}
                    </p>
                  )}
                </div>
              </div>

              {/* Controls */}
              <div className="flex justify-between items-center mb-5 pointer-events-none">
                <div className="flex items-center gap-2">
                  {/* Skip backward 10s */}
                  <button
                    onClick={skipBackward}
                    className="w-[42px] h-[42px] rounded-full border-none text-white/80 cursor-pointer transition-all duration-300 hover:scale-[1.08] hover:text-white active:scale-[0.96] flex items-center justify-center pointer-events-auto bg-white/10 hover:bg-white/20"
                  >
                    <RotateCcw className="w-5 h-5" />
                  </button>

                  {/* Play/Pause button */}
                  <button
                    onClick={handlePlayButtonClick}
                    className="w-[62px] h-[62px] rounded-[16px] border-none text-white text-3xl cursor-pointer transition-all duration-300 hover:scale-[1.08] active:scale-[0.96] flex items-center justify-center pointer-events-auto"
                    style={{
                      background: isPodcast
                        ? 'linear-gradient(135deg, #f97316, #fb923c)'
                        : 'linear-gradient(135deg, #8b5cf6, #a855f7)',
                      boxShadow: isPodcast
                        ? '0 6px 20px rgba(249, 115, 22, 0.3)'
                        : '0 6px 20px rgba(139, 92, 246, 0.3)',
                    }}
                  >
                    {isPlaying ? (
                      <Pause className="w-7 h-7" fill="white" />
                    ) : (
                      <Play className="w-7 h-7 ml-1" fill="white" />
                    )}
                  </button>

                  {/* Skip forward 10s */}
                  <button
                    onClick={skipForward}
                    className="w-[42px] h-[42px] rounded-full border-none text-white/80 cursor-pointer transition-all duration-300 hover:scale-[1.08] hover:text-white active:scale-[0.96] flex items-center justify-center pointer-events-auto bg-white/10 hover:bg-white/20"
                  >
                    <RotateCw className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex items-center text-white/90 text-xl">
                  <button 
                    onClick={toggleMute} 
                    className="mr-3 hover:text-white transition-colors pointer-events-auto"
                  >
                    {isMuted || volume === 0 ? (
                      <VolumeX className="w-5 h-5" />
                    ) : (
                      <Volume2 className="w-5 h-5" />
                    )}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={handleVolumeChange}
                    onClick={(e) => e.stopPropagation()}
                    className="w-[100px] h-1.5 rounded-[3px] outline-none cursor-pointer appearance-none pointer-events-auto"
                    style={{
                      background: `linear-gradient(to right, ${isPodcast ? '#f97316' : '#8b5cf6'} 0%, ${isPodcast ? '#f97316' : '#8b5cf6'} ${volume}%, rgba(255, 255, 255, 0.15) ${volume}%, rgba(255, 255, 255, 0.15) 100%)`,
                    }}
                  />
                </div>
              </div>

              {/* Progress bar with full seekability */}
              <div className="mt-5 relative">
                {/* Buffer indicator */}
                <div 
                  className="absolute top-0 left-0 h-2 rounded-full pointer-events-none z-0"
                  style={{
                    width: `${bufferedPercent}%`,
                    background: 'rgba(255, 255, 255, 0.08)',
                  }}
                />
                <Slider
                  value={[currentTime]}
                  max={duration || 100}
                  step={0.1}
                  onValueChange={handleSeek}
                  onClick={(e) => e.stopPropagation()}
                  className="w-full cursor-pointer relative z-10"
                  style={{
                    '--slider-track-bg': 'rgba(255, 255, 255, 0.15)',
                    '--slider-range-bg': isPodcast
                      ? 'linear-gradient(90deg, #f97316, #fb923c)'
                      : 'linear-gradient(90deg, #8b5cf6, #a855f7)',
                  } as React.CSSProperties}
                />
                <div className="flex justify-between text-white/80 text-[0.85rem] font-medium mt-2">
                  <span>{formatTime(currentTime)}</span>
                  <div className="flex items-center gap-2">
                    {isBuffering && (
                      <span className="text-xs text-white/50 animate-pulse">
                        Loading...
                      </span>
                    )}
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>
              </div>

              {/* Track info */}
              <div className="text-center text-white/70 italic mt-4 text-[0.85rem] font-normal pointer-events-none">
                Now Playing: "{getCurrentLabel()}"
              </div>

              {/* Back to podcast button (only when playing package) */}
              {!isPodcast && (
                <button
                  onClick={handleBackToPodcast}
                  className="mt-3 w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white/80 text-sm font-medium transition-colors pointer-events-auto"
                >
                  ← Înapoi la Podcast
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};
