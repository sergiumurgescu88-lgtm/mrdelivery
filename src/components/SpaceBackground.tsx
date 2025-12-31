import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

interface PlanetProps {
  position: [number, number, number];
  size: number;
  color: string;
  emissive?: string;
  rings?: boolean;
  ringColor?: string;
  mousePosition: React.MutableRefObject<{ x: number; y: number }>;
  speed: number;
}

const Planet = ({ position, size, color, emissive, rings, ringColor, mousePosition, speed }: PlanetProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const currentPos = useRef(new THREE.Vector3(...position));
  const originalPos = useRef(new THREE.Vector3(...position));

  useFrame((state) => {
    if (!meshRef.current) return;

    // Calculate target position based on mouse (magnetic effect)
    const targetX = originalPos.current.x + mousePosition.current.x * 2;
    const targetY = originalPos.current.y + mousePosition.current.y * 2;

    // Smooth interpolation towards target
    currentPos.current.x += (targetX - currentPos.current.x) * speed;
    currentPos.current.y += (targetY - currentPos.current.y) * speed;

    meshRef.current.position.x = currentPos.current.x;
    meshRef.current.position.y = currentPos.current.y;
    meshRef.current.position.z = currentPos.current.z;

    // Slow rotation
    meshRef.current.rotation.y += 0.002;

    if (ringRef.current) {
      ringRef.current.position.copy(meshRef.current.position);
      ringRef.current.rotation.x = Math.PI / 2.5;
    }
  });

  return (
    <>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={emissive || color}
          emissiveIntensity={0.1}
          roughness={0.8}
        />
      </mesh>
      {rings && (
        <mesh ref={ringRef} position={position} rotation={[Math.PI / 2.5, 0, 0]}>
          <ringGeometry args={[size * 1.4, size * 2, 64]} />
          <meshStandardMaterial
            color={ringColor || '#c9b896'}
            side={THREE.DoubleSide}
            transparent
            opacity={0.7}
          />
        </mesh>
      )}
    </>
  );
};

const Sun = ({ mousePosition }: { mousePosition: React.MutableRefObject<{ x: number; y: number }> }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const currentPos = useRef(new THREE.Vector3(-8, 2, -10));

  useFrame(() => {
    if (!meshRef.current) return;

    const targetX = -8 + mousePosition.current.x * 0.5;
    const targetY = 2 + mousePosition.current.y * 0.5;

    currentPos.current.x += (targetX - currentPos.current.x) * 0.01;
    currentPos.current.y += (targetY - currentPos.current.y) * 0.01;

    meshRef.current.position.x = currentPos.current.x;
    meshRef.current.position.y = currentPos.current.y;
    meshRef.current.rotation.y += 0.001;
  });

  return (
    <mesh ref={meshRef} position={[-8, 2, -10]}>
      <sphereGeometry args={[2.5, 32, 32]} />
      <meshStandardMaterial
        color="#fdb813"
        emissive="#ff8c00"
        emissiveIntensity={2}
      />
      <pointLight color="#fdb813" intensity={100} distance={50} />
    </mesh>
  );
};

const Scene = () => {
  const mousePosition = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  // Planet data: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune, Pluto
  const planets = useMemo(() => [
    { position: [-5, -1, -5] as [number, number, number], size: 0.15, color: '#8c7853', speed: 0.03 }, // Mercury
    { position: [-3, 1.5, -6] as [number, number, number], size: 0.25, color: '#e6c87a', speed: 0.025 }, // Venus
    { position: [-1, -0.5, -4] as [number, number, number], size: 0.28, color: '#4a90d9', emissive: '#1a5490', speed: 0.022 }, // Earth
    { position: [1, 1, -7] as [number, number, number], size: 0.2, color: '#c1440e', speed: 0.02 }, // Mars
    { position: [3, -1.5, -8] as [number, number, number], size: 0.8, color: '#d4a574', speed: 0.015 }, // Jupiter
    { position: [5, 0.5, -6] as [number, number, number], size: 0.65, color: '#c9b896', rings: true, ringColor: '#a89070', speed: 0.012 }, // Saturn
    { position: [6.5, -0.8, -9] as [number, number, number], size: 0.4, color: '#a6dcef', speed: 0.01 }, // Uranus
    { position: [4, 2, -10] as [number, number, number], size: 0.38, color: '#3f54ba', speed: 0.008 }, // Neptune
    { position: [7, 1.5, -12] as [number, number, number], size: 0.1, color: '#b5a191', speed: 0.018 }, // Pluto
  ], []);

  useFrame(({ pointer }) => {
    mousePosition.current.x = pointer.x * viewport.width * 0.5;
    mousePosition.current.y = pointer.y * viewport.height * 0.5;
  });

  return (
    <>
      <ambientLight intensity={0.15} />
      <pointLight position={[-10, 5, -10]} intensity={50} color="#fdb813" />
      
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={0.5}
      />

      <Sun mousePosition={mousePosition} />

      {planets.map((planet, index) => (
        <Planet
          key={index}
          position={planet.position}
          size={planet.size}
          color={planet.color}
          emissive={planet.emissive}
          rings={planet.rings}
          ringColor={planet.ringColor}
          mousePosition={mousePosition}
          speed={planet.speed}
        />
      ))}
    </>
  );
};

export const SpaceBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ background: 'linear-gradient(to bottom, #0a0a15, #1a1a2e, #0f0f23)' }}
      >
        <Scene />
      </Canvas>
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/60 pointer-events-none"></div>
    </div>
  );
};
