import foodRainVideo from '@/assets/food-rain-video.mp4';

export const FoodBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
        src={foodRainVideo}
      />
    </div>
  );
};
