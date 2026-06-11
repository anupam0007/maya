"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import type { MouseEvent } from "react";

export interface Project {
  title: string;
  description: string;
  url: string;
  image: string;
  tags: string[];
}

interface ProjectCardProps {
  project: Project;
  reverse?: boolean;
}

/** A large project card that tilts in 3D toward the cursor on hover. */
export default function ProjectCard({ project, reverse = false }: ProjectCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(0, { stiffness: 150, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 150, damping: 20 });

  const glow = useMotionTemplate`radial-gradient(circle at ${x}px ${y}px, rgba(124,58,237,0.25), transparent 60%)`;

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;

    x.set(offsetX);
    y.set(offsetY);

    const percentX = (offsetX / rect.width - 0.5) * 2; // -1 to 1
    const percentY = (offsetY / rect.height - 0.5) * 2; // -1 to 1

    rotateY.set(percentX * 8);
    rotateX.set(-percentY * 8);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className={`group relative grid grid-cols-1 items-center gap-8 overflow-hidden rounded-3xl p-2 sm:p-3 lg:grid-cols-2 lg:gap-12 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Cursor-tracked glow */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: glow }}
      />

      <div className="relative z-10 overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
        <div className="relative aspect-[16/10] w-full bg-ink">
          {/* Blurred backdrop fills the frame for any image aspect ratio */}
          <Image
            src={project.image}
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="scale-110 object-cover opacity-40 blur-2xl"
          />
          {/* Foreground image shown in full, never cropped */}
          <Image
            src={project.image}
            alt={`${project.title} homepage screenshot`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      <div className="relative z-10 px-2 sm:px-0">
        <h3 className="font-heading text-2xl font-bold sm:text-3xl">{project.title}</h3>
        <p className="mt-4 text-white/70">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70"
            >
              {tag}
            </li>
          ))}
        </ul>

        <Link
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
        >
          Visit live site
          <ArrowUpRight size={18} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </Link>
      </div>
    </motion.div>
  );
}
