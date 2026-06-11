import About from "@/components/About";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Stats from "@/components/Stats";
import { prisma } from "@/lib/prisma";
import { SITE } from "@/lib/site-config";
import type { AboutData, HeroData } from "@/lib/types";

export const dynamic = "force-dynamic";

const FALLBACK_HERO: HeroData = {
  headline: "Maya — web experiences that ship.",
  subline:
    "I design and build fast, beautiful, production-ready websites — from sleek marketing showcases to full e-commerce platforms — launched fast and built to last.",
};

const FALLBACK_ABOUT: AboutData = {
  title: "A developer who turns ideas into production-ready websites.",
  body:
    "I'm Anupam Gowda, a freelance web developer focused on designing and building modern, high-performance websites — and getting them live, fast.\n\nMy work spans from polished marketing showcases to full e-commerce platforms with shopping carts, wishlists, daily offers, customer reviews, and secure admin dashboards. Every project is built to be fast, accessible, and easy to maintain long after launch.",
};

export default async function Home() {
  const [hero, about, contact, projects, skills] = await Promise.all([
    prisma.heroContent.findUnique({ where: { id: 1 } }),
    prisma.aboutContent.findUnique({ where: { id: 1 } }),
    prisma.contactInfo.findUnique({ where: { id: 1 } }),
    prisma.project.findMany({ orderBy: { order: "asc" } }),
    prisma.skill.findMany({ orderBy: { order: "asc" } }),
  ]);

  const heroContent = hero ?? FALLBACK_HERO;
  const aboutContent = about ?? FALLBACK_ABOUT;
  const contactInfo = contact ?? SITE;

  return (
    <>
      <Navbar contact={contactInfo} />
      <main>
        <Hero hero={heroContent} contact={contactInfo} />
        <About about={aboutContent} />
        <Stats />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Process />
        <FAQ />
        <Contact contact={contactInfo} />
      </main>
      <Footer contact={contactInfo} projects={projects} />
      <FloatingWhatsApp contact={contactInfo} />
    </>
  );
}
