import foodCommunityVideo from '@/assets/food-community-video.mp4';

export const FoodBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
        src={foodCommunityVideo}
      />
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/50"></div>
    </div>
  );
};
