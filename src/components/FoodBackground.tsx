import foodVideo from '@/assets/food-background.mp4';
import { MagneticParticles } from './MagneticParticles';

export const FoodBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="w-full h-full object-cover"
      >
        <source src={foodVideo} type="video/mp4" />
      </video>
      {/* Very subtle overlay for text readability */}
      <div className="absolute inset-0 bg-background/20"></div>
      {/* Interactive magnetic particles */}
      <MagneticParticles />
    </div>
  );
};
