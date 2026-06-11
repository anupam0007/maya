"use client";

import { useState, type FormEvent } from "react";
import { Mail, MessageCircle, Phone, Send } from "lucide-react";
import type { ContactData } from "@/lib/types";
import ScrollReveal from "./ScrollReveal";

export default function Contact({ contact }: { contact: ContactData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const buildBody = () =>
    `Name: ${name}\nEmail: ${email}\n\n${message}`;

  function handleEmailSubmit(event: FormEvent) {
    event.preventDefault();
    const subject = encodeURIComponent(`New project inquiry from ${name || "your website"}`);
    const body = encodeURIComponent(buildBody());
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  }

  function handleWhatsAppSubmit() {
    const text = encodeURIComponent(
      `Hi ${contact.brand}! I'm ${name || "..."} (${email || "..."}).\n\n${message}`
    );
    window.open(`https://wa.me/${contact.whatsappNumber}?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="section-container">
        <ScrollReveal>
          <div className="glass relative overflow-hidden rounded-3xl px-6 py-14 sm:px-12 sm:py-20">
            {/* Background glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-gradient-brand opacity-20 blur-3xl"
            />

            <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <p className="mb-3 font-heading text-sm font-medium uppercase tracking-[0.3em] text-cyan">
                  Contact
                </p>
                <h2 className="font-heading text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                  Have a project in mind?
                </h2>
                <p className="mt-5 max-w-md text-lg text-white/70">
                  Tell me a bit about what you&apos;re building. I typically
                  reply within a day — let&apos;s figure out the best way to
                  bring it to life.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href={`mailto:${contact.email}`}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
                  >
                    <Mail size={18} />
                    Email me
                  </a>
                  <a
                    href={`tel:${contact.phoneTel}`}
                    className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    <Phone size={18} />
                    {contact.phoneDisplay}
                  </a>
                  <a
                    href={`https://wa.me/${contact.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    <MessageCircle size={18} />
                    WhatsApp
                  </a>
                </div>

                <p className="mt-8 text-sm text-white/50">
                  {contact.location} · Available for remote work worldwide
                </p>
              </div>

              {/* Contact form (client-side only, opens mail/WhatsApp with prefilled details) */}
              <form onSubmit={handleEmailSubmit} className="space-y-4" noValidate>
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/80">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-cyan focus:outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/80">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-cyan focus:outline-none"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/80">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-cyan focus:outline-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    type="submit"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
                  >
                    <Send size={16} />
                    Send Email
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    className="glass inline-flex flex-1 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    <MessageCircle size={16} />
                    Send via WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
