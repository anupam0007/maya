import ScrollReveal from "./ScrollReveal";
import AmbientShape from "./three/AmbientShape";

const STATS = [
  { value: "2+", label: "Live production projects" },
  { value: "100%", label: "Responsive, every screen size" },
  { value: "60fps", label: "Smooth interactive 3D" },
  { value: "1-day", label: "Typical reply time" },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <AmbientShape className="left-[-12%] top-1/2 h-[24rem] w-[24rem] -translate-y-1/2 opacity-20" />

      <div className="section-container relative">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {STATS.map(({ value, label }, index) => (
            <ScrollReveal key={label} delay={0.08 * index}>
              <div className="text-center sm:text-left">
                <p className="font-heading text-4xl font-bold sm:text-5xl">
                  <span className="text-gradient-brand">{value}</span>
                </p>
                <p className="mt-2 text-sm text-white/60">{label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
