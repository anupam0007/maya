import type { ProjectData } from "@/lib/types";
import ScrollReveal from "./ScrollReveal";
import ProjectCard from "./ProjectCard";

export default function Projects({ projects }: { projects: ProjectData[] }) {
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="section-container">
        <ScrollReveal>
          <p className="mb-3 font-heading text-sm font-medium uppercase tracking-[0.3em] text-cyan">
            Selected Work
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="max-w-2xl font-heading text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Real projects, live in production.
          </h2>
        </ScrollReveal>

        <div className="mt-16 flex flex-col gap-24">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={0.1}>
              <ProjectCard project={project} reverse={index % 2 === 1} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
