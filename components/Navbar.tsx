"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import type { ContactData } from "@/lib/types";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ contact }: { contact: ContactData }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu after navigating to a section.
  const handleLinkClick = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <nav className="section-container flex h-16 items-center justify-between" aria-label="Primary">
        <a href="#top" className="flex items-center" aria-label="Maya home">
          <Logo />
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${contact.phoneTel}`}
            className="group relative inline-flex items-center justify-center rounded-full bg-gradient-brand px-5 py-2 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
          >
            Let&apos;s talk
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden glass md:hidden"
          >
            <div className="section-container flex flex-col gap-4 py-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-base font-medium text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`tel:${contact.phoneTel}`}
                onClick={handleLinkClick}
                className="inline-flex w-full items-center justify-center rounded-full bg-gradient-brand px-5 py-3 text-sm font-semibold text-white shadow-glow"
              >
                Let&apos;s talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
