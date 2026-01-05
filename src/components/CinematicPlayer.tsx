import { useRef, useState, useEffect, useCallback } from 'react';
import { Play, Pause, Volume2, VolumeX, Podcast } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language as AppLanguage } from '@/i18n/translations';
import podcastRomanian from '@/assets/podcast-romanian.wav';
import podcastSpanish from '@/assets/podcast-spanish.wav';
import podcastEnglish from '@/assets/podcast-english.wav';

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

interface PodcastConfig {
  id: Language;
  label: string;
  flag: string;
  src: string;
}

const podcasts: PodcastConfig[] = [
  { id: 'ro', label: 'Română', flag: '🇷🇴', src: podcastRomanian },
  { id: 'es', label: 'Español', flag: '🇪🇸', src: podcastSpanish },
  { id: 'us', label: 'English', flag: '🇺🇸', src: podcastEnglish },
];

export const CinematicPlayer = () => {
  const { language: appLanguage } = useLanguage();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const [activePlayer, setActivePlayer] = useState<Language>(() => languageToPodcast[appLanguage]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(70);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const hasStarted = useRef(false);

  const currentPodcast = podcasts.find(p => p.id === activePlayer) || podcasts[0];

  // Sync podcast with language changes
  useEffect(() => {
    const newPodcastLang = languageToPodcast[appLanguage];
    if (newPodcastLang === activePlayer) return;

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    setCurrentTime(0);
    setIsPlaying(false);
    setActivePlayer(newPodcastLang);
  }, [appLanguage, activePlayer]);

  // Audio event listeners
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    if (audio.duration) {
      setDuration(audio.duration);
    }

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [activePlayer]);

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

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const bar = e.currentTarget;
    const rect = bar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newTime = (clickX / width) * duration;
    
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const toggleMute = () => {
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

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  return (
    <>
      {/* Audio element */}
      <audio
        ref={audioRef}
        src={currentPodcast.src}
        preload="metadata"
      />

      {/* Fixed position audio player container */}
      <div 
        className={`
          fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50
          transition-all duration-300 ease-out
          ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}
        style={{
          width: 'min(320px, calc(100vw - 32px))',
        }}
      >
        {/* Audio box with flicker/float animation */}
        <div 
          className={`
            relative overflow-hidden rounded-[18px] p-6
            ${isPlaying ? 'animate-float' : 'animate-flicker'}
          `}
          style={{
            background: 'linear-gradient(145deg, #0c2036, #0a1a2d)',
            boxShadow: '0 10px 40px rgba(12, 32, 54, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          {/* Subtle glow effect */}
          <div 
            className="absolute -inset-0.5 rounded-[20px] -z-10 opacity-50 blur-[10px]"
            style={{
              background: 'linear-gradient(45deg, #0c2036, #1e40af, #0c2036)',
            }}
          />

          {/* Player header */}
          <div className="flex items-center mb-6">
            <div 
              className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center mr-4"
              style={{
                background: 'linear-gradient(135deg, #f97316, #fb923c)',
                boxShadow: '0 4px 12px rgba(249, 115, 22, 0.3)',
              }}
            >
              <Podcast className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-[1.4rem] text-white font-semibold mb-1">
                MrDelivery Podcast
              </h3>
              <p className="text-sm text-white/75 font-normal">
                Always playing for you
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-between items-center mb-5">
            <button
              onClick={togglePlay}
              className="w-[62px] h-[62px] rounded-[16px] border-none text-white text-3xl cursor-pointer transition-all duration-300 hover:scale-[1.08] active:scale-[0.96] flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #f97316, #fb923c)',
                boxShadow: '0 6px 20px rgba(249, 115, 22, 0.3)',
              }}
            >
              {isPlaying ? (
                <Pause className="w-7 h-7" fill="white" />
              ) : (
                <Play className="w-7 h-7 ml-1" fill="white" />
              )}
            </button>

            <div className="flex items-center text-white/90 text-xl">
              <button onClick={toggleMute} className="mr-3 hover:text-white transition-colors">
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
                className="w-[100px] h-1.5 rounded-[3px] outline-none cursor-pointer appearance-none"
                style={{
                  background: `linear-gradient(to right, #f97316 0%, #f97316 ${volume}%, rgba(255, 255, 255, 0.15) ${volume}%, rgba(255, 255, 255, 0.15) 100%)`,
                }}
              />
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-5">
            <div 
              className="w-full h-2 bg-white/10 rounded cursor-pointer mb-2"
              onClick={handleProgressClick}
            >
              <div 
                className="h-full rounded transition-[width] duration-100"
                style={{
                  width: `${progressPercent}%`,
                  background: 'linear-gradient(90deg, #f97316, #fb923c)',
                }}
              />
            </div>
            <div className="flex justify-between text-white/80 text-[0.85rem] font-medium">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Track info */}
          <div className="text-center text-white/70 italic mt-4 text-[0.85rem] font-normal">
            Now Playing: "{currentPodcast.label}" - MrDelivery Podcast
          </div>
        </div>
      </div>
    </>
  );
};
