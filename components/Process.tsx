import { Code2, Lightbulb, PenTool, Rocket } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const STEPS = [
  {
    icon: Lightbulb,
    title: "Discover",
    description: "Understand your goals, audience, and content.",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "Craft a clean, on-brand visual direction.",
  },
  {
    icon: Code2,
    title: "Build",
    description: "Develop a fast, accessible Next.js site.",
  },
  {
    icon: Rocket,
    title: "Deploy",
    description: "Launch your site live and hand over the keys.",
  },
];

export default function Process() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="section-container">
        <ScrollReveal>
          <p className="mb-3 font-heading text-sm font-medium uppercase tracking-[0.3em] text-cyan">
            Process
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="max-w-2xl font-heading text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            From idea to live site, four steps.
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ icon: Icon, title, description }, index) => (
            <ScrollReveal key={title} delay={0.08 * index}>
              <div className="glass relative h-full rounded-2xl p-6">
                <span className="absolute right-5 top-5 font-heading text-3xl font-bold text-white/10">
                  0{index + 1}
                </span>
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-violet/20 text-cyan">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <h3 className="font-heading text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
