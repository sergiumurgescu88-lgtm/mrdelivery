import restaurantBackground from '@/assets/restaurant-background.png';

export const FoodBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div 
        className="w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${restaurantBackground})` }}
      />
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-black/30"></div>
    </div>
  );
};
