import foodChefsVideo from '@/assets/food-chefs-video.mp4';

export const FoodBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
        src={foodChefsVideo}
      />
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/40"></div>
    </div>
  );
};
