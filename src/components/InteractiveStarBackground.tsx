import { useEffect, useRef, useCallback, memo } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
}

// Simplified star background with reduced animation complexity
const InteractiveStarBackgroundComponent = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationFrameRef = useRef<number>();
  const lastFrameTime = useRef(0);
  const FPS_LIMIT = 30; // Limit to 30fps for better performance

  const initStars = useCallback((width: number, height: number) => {
    // Reduced star count for better performance
    const starCount = Math.floor((width * height) / 15000);
    const stars: Star[] = [];
    
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.6 + 0.2,
      });
    }
    
    starsRef.current = stars;
  }, []);

  const animate = useCallback((time: number) => {
    // Throttle to target FPS
    const elapsed = time - lastFrameTime.current;
    if (elapsed < 1000 / FPS_LIMIT) {
      animationFrameRef.current = requestAnimationFrame(animate);
      return;
    }
    lastFrameTime.current = time;

    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw stars with simple circles (no gradients for performance)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    starsRef.current.forEach((star) => {
      ctx.globalAlpha = star.opacity;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;

    animationFrameRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars(canvas.width, canvas.height);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [initStars, animate]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: '#000000' }}
    />
  );
};

export const InteractiveStarBackground = memo(InteractiveStarBackgroundComponent);
