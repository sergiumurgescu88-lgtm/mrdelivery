import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const Particles = ({ count = 500 }) => {
  const mesh = useRef<THREE.Points>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  const [positions, originalPositions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const origPos = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 12;
      const z = (Math.random() - 0.5) * 5;
      
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
      
      origPos[i * 3] = x;
      origPos[i * 3 + 1] = y;
      origPos[i * 3 + 2] = z;
    }
    
    return [pos, origPos];
  }, [count]);

  const sizes = useMemo(() => {
    const s = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      s[i] = Math.random() * 0.5 + 0.1;
    }
    return s;
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    
    const geometry = mesh.current.geometry;
    const positionAttribute = geometry.attributes.position;
    
    // Get normalized mouse position
    const mouseX = (state.pointer.x * viewport.width) / 2;
    const mouseY = (state.pointer.y * viewport.height) / 2;
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      const origX = originalPositions[i3];
      const origY = originalPositions[i3 + 1];
      const origZ = originalPositions[i3 + 2];
      
      const currentX = positionAttribute.array[i3] as number;
      const currentY = positionAttribute.array[i3 + 1] as number;
      
      // Distance from mouse
      const dx = mouseX - currentX;
      const dy = mouseY - currentY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Magnetic attraction within radius
      const magnetRadius = 3;
      const magnetStrength = 0.15;
      
      let targetX = origX;
      let targetY = origY;
      
      if (distance < magnetRadius) {
        const force = (1 - distance / magnetRadius) * magnetStrength;
        targetX = origX + dx * force;
        targetY = origY + dy * force;
      }
      
      // Smooth lerp back to original or toward mouse
      const newX = currentX + (targetX - currentX) * 0.05;
      const newY = currentY + (targetY - currentY) * 0.05;
      
      (positionAttribute.array as Float32Array)[i3] = newX;
      (positionAttribute.array as Float32Array)[i3 + 1] = newY;
      (positionAttribute.array as Float32Array)[i3 + 2] = origZ;
    }
    
    positionAttribute.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#ffffff"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const CosmicDust = ({ count = 200 }) => {
  const mesh = useRef<THREE.Points>(null);
  const { viewport } = useThree();

  const [positions, originalPositions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const origPos = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 25;
      const y = (Math.random() - 0.5) * 15;
      const z = (Math.random() - 0.5) * 3 - 2;
      
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
      
      origPos[i * 3] = x;
      origPos[i * 3 + 1] = y;
      origPos[i * 3 + 2] = z;
    }
    
    return [pos, origPos];
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    
    const geometry = mesh.current.geometry;
    const positionAttribute = geometry.attributes.position;
    
    const mouseX = (state.pointer.x * viewport.width) / 2;
    const mouseY = (state.pointer.y * viewport.height) / 2;
    const time = state.clock.elapsedTime;
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      const origX = originalPositions[i3];
      const origY = originalPositions[i3 + 1];
      const origZ = originalPositions[i3 + 2];
      
      const currentX = positionAttribute.array[i3] as number;
      const currentY = positionAttribute.array[i3 + 1] as number;
      
      const dx = mouseX - currentX;
      const dy = mouseY - currentY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      const magnetRadius = 4;
      const magnetStrength = 0.25;
      
      let targetX = origX + Math.sin(time * 0.2 + i) * 0.1;
      let targetY = origY + Math.cos(time * 0.15 + i) * 0.1;
      
      if (distance < magnetRadius) {
        const force = (1 - distance / magnetRadius) * magnetStrength;
        targetX += dx * force;
        targetY += dy * force;
      }
      
      const newX = currentX + (targetX - currentX) * 0.03;
      const newY = currentY + (targetY - currentY) * 0.03;
      
      (positionAttribute.array as Float32Array)[i3] = newX;
      (positionAttribute.array as Float32Array)[i3 + 1] = newY;
      (positionAttribute.array as Float32Array)[i3 + 2] = origZ;
    }
    
    positionAttribute.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color="#a78bfa"
        transparent
        opacity={0.4}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export const MagneticParticles = () => {
  return (
    <div className="absolute inset-0 z-10 pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <Particles count={400} />
        <CosmicDust count={150} />
      </Canvas>
    </div>
  );
};
