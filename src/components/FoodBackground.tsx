import deliveryBackground from '@/assets/delivery-astronauts-background.png';
import { useMemo } from 'react';

const Star = ({ style, delay, duration }: { style: React.CSSProperties; delay: number; duration: number }) => (
  <div
    className="absolute rounded-full bg-white"
    style={{
      ...style,
      animation: `twinkle ${duration}s ease-in-out ${delay}s infinite`,
    }}
  />
);

const ShootingStar = ({ delay, startX, startY, angle }: { delay: number; startX: number; startY: number; angle: number }) => (
  <div
    className="absolute w-[2px] h-[2px] bg-white rounded-full"
    style={{
      left: `${startX}%`,
      top: `${startY}%`,
      transform: `rotate(${angle}deg)`,
      animation: `shootingStar 1.5s ease-out ${delay}s infinite`,
      boxShadow: '0 0 6px 2px rgba(255, 255, 255, 0.6)',
    }}
  >
    <div 
      className="absolute h-[1px] bg-gradient-to-r from-white via-white/50 to-transparent"
      style={{ 
        width: '80px',
        right: '100%',
        top: '50%',
        transform: 'translateY(-50%)',
      }}
    />
  </div>
);

export const FoodBackground = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 60 }, (_, i) => ({
      id: i,
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${Math.random() * 2.5 + 1}px`,
        height: `${Math.random() * 2.5 + 1}px`,
        opacity: Math.random() * 0.6 + 0.4,
      },
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
    }));
  }, []);

  const shootingStars = useMemo(() => {
    return Array.from({ length: 4 }, (_, i) => ({
      id: i,
      delay: i * 4 + Math.random() * 3,
      startX: Math.random() * 60 + 20,
      startY: Math.random() * 30,
      angle: 35 + Math.random() * 20,
    }));
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div 
        className="w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${deliveryBackground})` }}
      />
      {/* Animated twinkling stars overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star) => (
          <Star key={star.id} style={star.style} delay={star.delay} duration={star.duration} />
        ))}
      </div>
      {/* Shooting stars */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {shootingStars.map((star) => (
          <ShootingStar key={star.id} delay={star.delay} startX={star.startX} startY={star.startY} angle={star.angle} />
        ))}
      </div>
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
    </div>
  );
};
