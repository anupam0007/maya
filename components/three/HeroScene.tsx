"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

/** The animated cluster of glossy/iridescent shapes that drives the hero scene. */
function FloatingCluster() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;

    // Mouse parallax: gently tilt the whole cluster toward the cursor.
    const { x, y } = state.pointer;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      x * 0.4,
      0.04
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -y * 0.25,
      0.04
    );

    // Slow continuous drift so the scene never feels static.
    groupRef.current.rotation.z = state.clock.elapsedTime * 0.05;
  });

  return (
    <group ref={groupRef}>
      {/* Centerpiece: distorted icosahedron with an iridescent finish */}
      <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
        <mesh scale={1.6}>
          <icosahedronGeometry args={[1, 1]} />
          <MeshDistortMaterial
            color="#7C3AED"
            attach="material"
            distort={0.45}
            speed={1.8}
            roughness={0.1}
            metalness={0.6}
          />
        </mesh>
      </Float>

      {/* Secondary floating shape: cyan torus */}
      <Float speed={1.1} rotationIntensity={1} floatIntensity={1.6} position={[2.6, 1.2, -1.5]}>
        <mesh scale={0.7}>
          <torusGeometry args={[1, 0.35, 32, 100]} />
          <MeshDistortMaterial
            color="#06B6D4"
            distort={0.3}
            speed={1.2}
            roughness={0.15}
            metalness={0.7}
          />
        </mesh>
      </Float>

      {/* Tertiary accent: small warm octahedron */}
      <Float speed={1.8} rotationIntensity={1.2} floatIntensity={2} position={[-2.4, -1, -1]}>
        <mesh scale={0.55}>
          <octahedronGeometry args={[1, 0]} />
          <MeshDistortMaterial
            color="#F5A623"
            distort={0.2}
            speed={2}
            roughness={0.2}
            metalness={0.5}
          />
        </mesh>
      </Float>

      {/* Distant soft sphere for depth */}
      <Float speed={0.8} rotationIntensity={0.4} floatIntensity={0.8} position={[1.2, -1.8, -3]}>
        <Sphere args={[0.9, 32, 32]}>
          <MeshDistortMaterial color="#3B0764" distort={0.4} speed={0.8} roughness={0.4} metalness={0.3} />
        </Sphere>
      </Float>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-5, -5, -5]} intensity={0.8} color="#06B6D4" />
      <FloatingCluster />
      <Environment preset="city" />
    </Canvas>
  );
}
