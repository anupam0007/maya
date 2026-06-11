"use client";

import dynamic from "next/dynamic";

const AmbientShapeScene = dynamic(() => import("./AmbientShapeScene"), {
  ssr: false,
  loading: () => null,
});

interface AmbientShapeProps {
  className?: string;
}

/** A small lazy-loaded 3D accent used to add subtle depth behind sections. */
export default function AmbientShape({ className = "" }: AmbientShapeProps) {
  return (
    <div className={`pointer-events-none absolute -z-10 ${className}`} aria-hidden="true">
      <AmbientShapeScene />
    </div>
  );
}
