import { getSkillIcon } from "@/lib/skill-icons";
import type { SkillData } from "@/lib/types";
import ScrollReveal from "./ScrollReveal";

export default function Skills({ skills }: { skills: SkillData[] }) {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="section-container">
        <ScrollReveal>
          <p className="mb-3 font-heading text-sm font-medium uppercase tracking-[0.3em] text-cyan">
            Skills &amp; Tech
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="max-w-2xl font-heading text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            The toolkit behind every build.
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = getSkillIcon(skill.icon);
            return (
              <ScrollReveal key={skill.id} delay={0.05 * (index % 6)}>
                <div className="glass group flex items-center gap-4 rounded-2xl p-5 transition-all hover:-translate-y-1 hover:shadow-glow">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet/20 text-cyan transition-colors group-hover:text-white">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <span className="font-medium text-white/90">{skill.label}</span>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
