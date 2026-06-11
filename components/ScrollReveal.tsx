"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Y-offset (px) the element travels in from. */
  y?: number;
}

/** Fades and slides content into view as it enters the viewport. */
export default function ScrollReveal({ children, className, delay = 0, y = 24 }: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
