"use client";

import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";

/** A single slow-floating wireframe shape used as a background accent. */
export default function AmbientShapeScene() {
  return (
    <Canvas
      dpr={[1, 1.25]}
      camera={{ position: [0, 0, 5], fov: 40 }}
      gl={{ antialias: true, alpha: true }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 3, 3]} intensity={0.8} />
      <Float speed={1} rotationIntensity={0.8} floatIntensity={1.5}>
        <mesh scale={1.4}>
          <torusKnotGeometry args={[1, 0.32, 100, 16]} />
          <MeshDistortMaterial
            color="#7C3AED"
            distort={0.25}
            speed={1}
            roughness={0.2}
            metalness={0.6}
            wireframe
          />
        </mesh>
      </Float>
    </Canvas>
  );
}
