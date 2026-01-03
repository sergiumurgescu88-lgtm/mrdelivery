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
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
    </div>
  );
};
