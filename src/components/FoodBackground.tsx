import foodVideo from '@/assets/food-background.mp4';

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
      {/* Very subtle overlay for minimal text readability help */}
      <div className="absolute inset-0 bg-background/30"></div>
    </div>
  );
};
