"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Mail } from "lucide-react";
import type { ContactData, HeroData } from "@/lib/types";
import HeroSceneWrapper from "./three/HeroSceneWrapper";

interface HeroProps {
  hero: HeroData;
  contact: ContactData;
}

export default function Hero({ hero, contact }: HeroProps) {
  const words = hero.headline.trim().split(" ");
  const lastWord = words.pop() ?? "";
  const leadingWords = words.join(" ");

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      {/* 3D background scene */}
      <div className="absolute inset-0">
        <HeroSceneWrapper />
        {/* Gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-ink/40 to-ink" />
      </div>

      <div className="section-container relative z-10 py-24 text-center md:text-left">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 font-heading text-sm font-medium uppercase tracking-[0.3em] text-cyan"
        >
          {contact.role} · {contact.location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-6xl font-bold leading-[0.95] tracking-tighter sm:text-7xl md:text-8xl lg:max-w-4xl lg:text-9xl"
        >
          {leadingWords ? `${leadingWords} ` : ""}
          <span className="text-gradient-brand">{lastWord}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-xl text-lg text-white/70 md:mx-0"
        >
          {hero.subline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row md:items-start md:justify-start justify-center"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-base font-semibold text-white shadow-glow transition-transform hover:scale-105"
          >
            View Work
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Mail size={18} />
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/60 transition-colors hover:text-white"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.a>
    </section>
  );
}
