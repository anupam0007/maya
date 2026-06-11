import type { AboutData } from "@/lib/types";
import ScrollReveal from "./ScrollReveal";
import AmbientShape from "./three/AmbientShape";

export default function About({ about }: { about: AboutData }) {
  const words = about.title.trim().split(" ");
  const lastWord = words.pop() ?? "";
  const leadingWords = words.join(" ");
  const paragraphs = about.body.split("\n\n");

  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <AmbientShape className="right-[-10%] top-1/3 h-[28rem] w-[28rem] opacity-30" />

      <div className="section-container relative">
        <ScrollReveal>
          <p className="mb-3 font-heading text-sm font-medium uppercase tracking-[0.3em] text-cyan">
            About
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="max-w-3xl font-heading text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            {leadingWords ? `${leadingWords} ` : ""}
            <span className="text-gradient-brand">{lastWord}</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-8 max-w-2xl space-y-5 text-lg text-white/70">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
