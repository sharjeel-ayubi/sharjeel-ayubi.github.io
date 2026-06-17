import { Section } from "./ui/Section";
import { techExpertise } from "../data/skills";

export function TechExpertise() {
  return (
    <Section id="tech" eyebrow="Technical Expertise" title="Where I go deep.">
      <div className="mt-[34px] grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {techExpertise.map((t) => (
          <div
            key={t.name}
            className="glass px-4 py-5 text-center transition-transform duration-200 hover:-translate-y-1"
          >
            <div className="font-display text-[1.02rem] font-semibold">{t.name}</div>
            <div className="mt-1 font-mono text-[0.7rem] text-muted">{t.note}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
