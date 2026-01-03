import deliveryBackground from '@/assets/delivery-astronauts-background.png';
import { useMemo, useEffect, useState } from 'react';

const Star = ({ style, delay, duration, parallaxFactor }: { style: React.CSSProperties; delay: number; duration: number; parallaxFactor: number }) => (
  <div
    className="absolute rounded-full bg-white will-change-transform"
    style={{
      ...style,
      animation: `twinkle ${duration}s ease-in-out ${delay}s infinite`,
    }}
    data-parallax={parallaxFactor}
  />
);

export const FoodBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      delay: Math.random() * 8,
      duration: Math.random() * 4 + 5, // Slower: 5-9 seconds per cycle
      parallaxFactor: Math.random() * 0.15 + 0.05, // Different depth for each star
    }));
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div 
        className="w-full h-[110%] bg-cover bg-center bg-no-repeat will-change-transform transition-transform duration-100 ease-out"
        style={{ 
          backgroundImage: `url(${deliveryBackground})`,
          transform: `translateY(${scrollY * -0.05}px)`,
        }}
      />
      {/* Animated twinkling stars overlay with parallax */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star) => (
          <Star 
            key={star.id} 
            style={{
              ...star.style,
              transform: `translateY(${scrollY * star.parallaxFactor}px)`,
            }} 
            delay={star.delay} 
            duration={star.duration} 
            parallaxFactor={star.parallaxFactor}
          />
        ))}
      </div>
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
    </div>
  );
};
