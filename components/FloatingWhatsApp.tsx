"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import type { ContactData } from "@/lib/types";

/** Persistent floating action button for quick WhatsApp contact. */
export default function FloatingWhatsApp({ contact }: { contact: ContactData }) {
  const prefilledMessage = `Hi ${contact.brand}! I'd like to talk about a website project.`;

  return (
    <motion.a
      href={`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(prefilledMessage)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-brand text-white shadow-glow"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-cyan/30" aria-hidden="true" />
      <MessageCircle size={26} aria-hidden="true" />
    </motion.a>
  );
}
