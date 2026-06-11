"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const FAQS = [
  {
    question: "How long does a typical project take?",
    answer:
      "Most marketing and showcase sites take 1–3 weeks from kickoff to launch. Larger e-commerce builds with carts, wishlists, and admin dashboards typically take 4–8 weeks, depending on scope.",
  },
  {
    question: "Do you offer support after launch?",
    answer:
      "Yes. Every project includes a handover walkthrough, and I offer ongoing maintenance, content updates, and feature additions on request — short fixes are usually turned around within a day.",
  },
  {
    question: "Can you redesign or improve my existing website?",
    answer:
      "Absolutely. I can rebuild an existing site with a modern stack, improve performance and SEO, or simply give it a fresh, more premium look while keeping your content and branding.",
  },
  {
    question: "Do you build e-commerce sites with payments and admin tools?",
    answer:
      "Yes — cart, wishlist, daily offers, customer reviews, and a secure admin dashboard for managing products and orders are all things I've built and shipped before.",
  },
  {
    question: "How do we get started?",
    answer:
      "Send me a message with a quick overview of your project — goals, pages, and any references you like. I'll get back to you with a plan, timeline, and pricing.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 sm:py-32">
      <div className="section-container">
        <ScrollReveal>
          <p className="mb-3 font-heading text-sm font-medium uppercase tracking-[0.3em] text-cyan">
            FAQ
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="max-w-2xl font-heading text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Questions clients often ask.
          </h2>
        </ScrollReveal>

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <ScrollReveal key={faq.question} delay={0.05 * index}>
                <div className="glass overflow-hidden rounded-2xl">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-heading text-base font-semibold sm:text-lg">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet/20 text-cyan"
                    >
                      <Plus size={18} aria-hidden="true" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-white/70">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
