"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useTheme } from "next-themes";

function Topography() {
  const meshRef = useRef<THREE.Points>(null);
  const { theme, systemTheme } = useTheme();
  
  // Grid parameters
  const size = 150;
  const segments = 45; // Reduced from 100 (10,000 -> 2,025 vertices) to fix main-thread CPU throttling
  
  // Generate particles
  const [positions, initialZ] = useMemo(() => {
    const positions = new Float32Array(segments * segments * 3);
    const initialZ = new Float32Array(segments * segments);
    
    let i = 0;
    for (let x = 0; x < segments; x++) {
      for (let y = 0; y < segments; y++) {
        const posX = (x - segments / 2) * (size / segments);
        const posY = (y - segments / 2) * (size / segments);
        
        // Base sine wave terrain (Civil Topography)
        const posZ = Math.sin(x * 0.1) * 2 + Math.cos(y * 0.1) * 2;
        
        positions[i * 3] = posX;
        positions[i * 3 + 1] = posY;
        positions[i * 3 + 2] = posZ;
        
        initialZ[i] = posZ;
        i++;
      }
    }
    return [positions, initialZ];
  }, [segments, size]);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    const time = state.clock.getElapsedTime();
    
    // Zero CPU vertex math! Just globally rotate the entire mesh for a subtle, ultra-performant effect
    meshRef.current.rotation.x = -Math.PI / 3;
    meshRef.current.rotation.z = time * 0.05;
  });

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const color = currentTheme === 'light' ? "#0f172a" : "#e2e8f0"; // slate-900 or slate-200

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        color={color}
        transparent
        opacity={0.35}
        sizeAttenuation
      />
    </points>
  );
}

export function WebglBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-60 mix-blend-normal transition-opacity duration-1000">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, -10, 20], fov: 60 }} gl={{ powerPreference: "high-performance", antialias: false }}>
        <Topography />
      </Canvas>
    </div>
  );
}
