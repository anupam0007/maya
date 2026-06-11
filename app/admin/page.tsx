import AdminTabs from "@/components/admin/AdminTabs";
import HeroForm from "@/components/admin/HeroForm";
import AboutForm from "@/components/admin/AboutForm";
import ContactForm from "@/components/admin/ContactForm";
import SkillsManager from "@/components/admin/SkillsManager";
import ProjectsManager from "@/components/admin/ProjectsManager";
import { prisma } from "@/lib/prisma";
import { SITE } from "@/lib/site-config";

export const dynamic = "force-dynamic";

const FALLBACK_HERO = {
  headline: "Maya — web experiences that ship.",
  subline:
    "I design and build fast, beautiful, production-ready websites — from sleek marketing showcases to full e-commerce platforms — launched fast and built to last.",
};

const FALLBACK_ABOUT = {
  title: "A developer who turns ideas into production-ready websites.",
  body:
    "I'm Anupam Gowda, a freelance web developer focused on designing and building modern, high-performance websites — and getting them live, fast.\n\nMy work spans from polished marketing showcases to full e-commerce platforms with shopping carts, wishlists, daily offers, customer reviews, and secure admin dashboards. Every project is built to be fast, accessible, and easy to maintain long after launch.",
};

export default async function AdminDashboardPage() {
  const [hero, about, contact, projects, skills] = await Promise.all([
    prisma.heroContent.findUnique({ where: { id: 1 } }),
    prisma.aboutContent.findUnique({ where: { id: 1 } }),
    prisma.contactInfo.findUnique({ where: { id: 1 } }),
    prisma.project.findMany({ orderBy: { order: "asc" } }),
    prisma.skill.findMany({ orderBy: { order: "asc" } }),
  ]);

  return (
    <div>
      <h1 className="mb-2 font-heading text-2xl font-bold">Site Content</h1>
      <p className="mb-8 text-sm text-white/50">
        Edit the content shown on your live site. Changes save immediately to the database.
      </p>

      <AdminTabs
        tabs={[
          {
            id: "hero",
            label: "Hero & About",
            content: (
              <div className="space-y-6">
                <HeroForm initial={hero ?? FALLBACK_HERO} />
                <AboutForm initial={about ?? FALLBACK_ABOUT} />
              </div>
            ),
          },
          {
            id: "contact",
            label: "Contact",
            content: <ContactForm initial={contact ?? SITE} />,
          },
          {
            id: "skills",
            label: "Skills",
            content: <SkillsManager initial={skills} />,
          },
          {
            id: "projects",
            label: "Projects",
            content: <ProjectsManager initial={projects} />,
          },
        ]}
      />
    </div>
  );
}
