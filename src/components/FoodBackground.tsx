import darkTechBackground from '@/assets/dark-tech-background.jpg';

export const FoodBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black">
      <div 
        className="w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${darkTechBackground})` }}
      />
    </div>
  );
};
