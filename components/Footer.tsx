import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import type { ContactData, ProjectData } from "@/lib/types";
import Logo from "./Logo";

interface FooterProps {
  contact: ContactData;
  projects: ProjectData[];
}

export default function Footer({ contact, projects }: FooterProps) {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="section-container flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-white/60">
            {contact.tagline} Designed and built by {contact.name}, {contact.location}.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-white/70">
          <h3 className="mb-1 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
            Contact
          </h3>
          <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 hover:text-white">
            <Mail size={16} /> {contact.email}
          </a>
          <a href={`tel:${contact.phoneTel}`} className="inline-flex items-center gap-2 hover:text-white">
            <Phone size={16} /> {contact.phoneDisplay}
          </a>
          <a
            href={`https://wa.me/${contact.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-white"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
        </div>

        <div className="flex flex-col gap-2 text-sm text-white/70">
          <h3 className="mb-1 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
            Selected Work
          </h3>
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              {project.title} ↗
            </Link>
          ))}
        </div>
      </div>

      <div className="section-container mt-10 border-t border-white/5 pt-6 text-xs text-white/40">
        © {new Date().getFullYear()} {contact.brand}. All rights reserved.
      </div>
    </footer>
  );
}
