import foodBackground from '@/assets/food-background.jpg';

export const FoodBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      <div 
        className="w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${foodBackground})` }}
      />
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/65 backdrop-blur-[1px]"></div>
    </div>
  );
};
