"use client";

import dynamic from "next/dynamic";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => <StaticGlow />,
});

/** Elegant static gradient used while the 3D scene loads, on low-power
 *  devices, or when the user has requested reduced motion. */
function StaticGlow() {
  return (
    <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
      <div className="h-[60vmin] w-[60vmin] rounded-full bg-gradient-brand opacity-30 blur-3xl" />
      <div className="absolute h-[30vmin] w-[30vmin] translate-x-24 translate-y-12 rounded-full bg-amber opacity-20 blur-3xl" />
    </div>
  );
}

export default function HeroSceneWrapper() {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <StaticGlow />;
  }

  return <HeroScene />;
}
