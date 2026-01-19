import { useEffect, useRef, useCallback } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  baseOpacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
}

interface MouseTrailStar {
  x: number;
  y: number;
  size: number;
  opacity: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

export const InteractiveStarBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const mouseTrailRef = useRef<MouseTrailStar[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, isMoving: false });
  const animationFrameRef = useRef<number>();
  const lastMouseMoveRef = useRef(0);

  const initStars = useCallback((width: number, height: number) => {
    const starCount = Math.floor((width * height) / 8000); // Density based on screen size
    const stars: Star[] = [];
    
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.3,
        baseOpacity: Math.random() * 0.5 + 0.3,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        twinkleOffset: Math.random() * Math.PI * 2,
      });
    }
    
    starsRef.current = stars;
  }, []);

  const createMouseTrailStar = useCallback((x: number, y: number) => {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 2 + 1;
    
    return {
      x,
      y,
      size: Math.random() * 3 + 1,
      opacity: 1,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 0,
      maxLife: Math.random() * 60 + 40,
    };
  }, []);

  const animate = useCallback((time: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw and update background stars
    starsRef.current.forEach((star) => {
      // Twinkle effect
      star.opacity = star.baseOpacity + Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.3;
      star.opacity = Math.max(0.1, Math.min(1, star.opacity));

      // Calculate distance from mouse for glow effect
      const dx = star.x - mouseRef.current.x;
      const dy = star.y - mouseRef.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const glowRadius = 150;
      
      let finalOpacity = star.opacity;
      let finalSize = star.size;
      
      if (distance < glowRadius) {
        const intensity = 1 - distance / glowRadius;
        finalOpacity = Math.min(1, star.opacity + intensity * 0.5);
        finalSize = star.size + intensity * 2;
      }

      // Draw star with glow
      const gradient = ctx.createRadialGradient(
        star.x, star.y, 0,
        star.x, star.y, finalSize * 2
      );
      gradient.addColorStop(0, `rgba(255, 255, 255, ${finalOpacity})`);
      gradient.addColorStop(0.5, `rgba(200, 220, 255, ${finalOpacity * 0.5})`);
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.beginPath();
      ctx.arc(star.x, star.y, finalSize * 2, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw star core
      ctx.beginPath();
      ctx.arc(star.x, star.y, finalSize * 0.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${finalOpacity})`;
      ctx.fill();
    });

    // Add new mouse trail stars when mouse is moving
    if (mouseRef.current.isMoving && time - lastMouseMoveRef.current < 100) {
      for (let i = 0; i < 2; i++) {
        mouseTrailRef.current.push(
          createMouseTrailStar(
            mouseRef.current.x + (Math.random() - 0.5) * 20,
            mouseRef.current.y + (Math.random() - 0.5) * 20
          )
        );
      }
    }

    // Update and draw mouse trail stars
    mouseTrailRef.current = mouseTrailRef.current.filter((star) => {
      star.life++;
      star.x += star.vx;
      star.y += star.vy;
      star.vx *= 0.98;
      star.vy *= 0.98;
      star.opacity = 1 - star.life / star.maxLife;
      star.size *= 0.99;

      if (star.life >= star.maxLife || star.opacity <= 0) {
        return false;
      }

      // Draw trail star with sparkle effect
      const gradient = ctx.createRadialGradient(
        star.x, star.y, 0,
        star.x, star.y, star.size * 3
      );
      gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
      gradient.addColorStop(0.3, `rgba(200, 230, 255, ${star.opacity * 0.7})`);
      gradient.addColorStop(0.6, `rgba(150, 200, 255, ${star.opacity * 0.3})`);
      gradient.addColorStop(1, 'rgba(100, 180, 255, 0)');

      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw cross sparkle
      ctx.strokeStyle = `rgba(255, 255, 255, ${star.opacity * 0.5})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(star.x - star.size * 2, star.y);
      ctx.lineTo(star.x + star.size * 2, star.y);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(star.x, star.y - star.size * 2);
      ctx.lineTo(star.x, star.y + star.size * 2);
      ctx.stroke();

      return true;
    });

    // Limit trail stars
    if (mouseTrailRef.current.length > 100) {
      mouseTrailRef.current = mouseTrailRef.current.slice(-100);
    }

    animationFrameRef.current = requestAnimationFrame(animate);
  }, [createMouseTrailStar]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars(canvas.width, canvas.height);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.isMoving = true;
      lastMouseMoveRef.current = performance.now();
    };

    const handleMouseLeave = () => {
      mouseRef.current.isMoving = false;
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
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
