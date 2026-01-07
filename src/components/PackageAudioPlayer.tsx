import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, X } from 'lucide-react';

// Import audio files
import audioAvatarDigital from '@/assets/audio-avatar-digital.wav';
import audioPilotAutomat from '@/assets/audio-pilot-automat.wav';
import audioAsistentVirtual from '@/assets/audio-asistent-virtual.wav';
import audioProductieVideo from '@/assets/audio-productie-video.wav';
import audioManagementPlatforme from '@/assets/audio-management-platforme.wav';

export type PackageType = 
  | 'avatar-digital'
  | 'pilot-automat'
  | 'asistent-virtual'
  | 'productie-video'
  | 'management-platforme';

interface PackageAudioPlayerProps {
  activePackage: PackageType | null;
  onClose: () => void;
}

const packageAudioMap: Record<PackageType, string> = {
  'avatar-digital': audioAvatarDigital,
  'pilot-automat': audioPilotAutomat,
  'asistent-virtual': audioAsistentVirtual,
  'productie-video': audioProductieVideo,
  'management-platforme': audioManagementPlatforme,
};

const packageNames: Record<PackageType, string> = {
  'avatar-digital': 'Avatar Digital',
  'pilot-automat': 'Afacere pe Pilot Automat',
  'asistent-virtual': 'Asistent Virtual Inteligent',
  'productie-video': 'Producție Video',
  'management-platforme': 'Management Platforme',
};

export const PackageAudioPlayer = ({ activePackage, onClose }: PackageAudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);

  useEffect(() => {
    if (!activePackage || !audioRef.current) return;
    
    const audio = audioRef.current;
    audio.src = packageAudioMap[activePackage];
    audio.load();
    
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, [activePackage]);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = volume;
  }, [volume]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (!audioRef.current) return;
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    const time = parseFloat(e.target.value);
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!activePackage) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-80 z-50 bg-gradient-to-r from-primary via-secondary to-accent p-1 rounded-2xl shadow-2xl animate-fade-in">
      <div className="bg-card rounded-xl p-3 sm:p-4">
        <audio
          ref={audioRef}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={handleEnded}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
        
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex-1 min-w-0">
            <p className="text-xs text-muted-foreground">Acum asculți:</p>
            <p className="text-sm font-bold text-foreground truncate">
              {packageNames[activePackage]}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-muted rounded-full transition-colors flex-shrink-0"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="mb-3">
          <input
            type="range"
            min={0}
            max={duration || 100}
            value={currentTime}
            onChange={handleSeek}
            className="w-full h-1.5 bg-muted rounded-full appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={togglePlay}
            className="p-2.5 bg-gradient-primary rounded-full text-primary-foreground hover:opacity-90 transition-opacity shadow-lg"
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>
          
          <button
            onClick={toggleMute}
            className="p-2 hover:bg-muted rounded-full transition-colors"
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-muted-foreground" />
            ) : (
              <Volume2 className="w-4 h-4 text-foreground" />
            )}
          </button>

          <input
            type="range"
            min={0}
            max={1}
            step={0.1}
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="flex-1 h-1 bg-muted rounded-full appearance-none cursor-pointer accent-primary"
          />
        </div>
      </div>
    </div>
  );
};
