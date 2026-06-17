import { Section } from "./ui/Section";
import { Tag } from "./ui/Tag";
import { experience } from "../data/experience";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="A decade shipping across domains.">
      <div className="relative mt-10 pl-7">
        {/* Vertical rail */}
        <span
          className="absolute bottom-1.5 left-1.5 top-1.5 w-0.5 opacity-50"
          style={{ background: "linear-gradient(#7c5cff, #5b8cff, #34d7e0)" }}
          aria-hidden
        />

        {experience.map((item, i) => (
          <article key={`${item.company}-${i}`} className="relative pb-9 pl-6 last:pb-0">
            {/* Node */}
            <span
              className="absolute left-[-28px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-indigo bg-ink"
              style={{ boxShadow: "0 0 0 4px rgba(91,140,255,0.12)" }}
              aria-hidden
            />
            <div className="flex flex-wrap items-baseline gap-x-3.5 gap-y-2">
              <span className="font-display text-[1.2rem] font-semibold">{item.role}</span>
              <span className="font-medium text-indigo">
                {item.company}
                {item.context ? ` · ${item.context}` : ""}
              </span>
              <span className="ml-auto whitespace-nowrap font-mono text-[0.76rem] text-muted">{item.period}</span>
            </div>

            <ul className="mt-3 grid gap-2">
              {item.highlights.map((h, j) => (
                <li key={j} className="relative pl-5 text-[0.97rem] text-muted">
                  <span className="absolute left-0 text-violet" aria-hidden>
                    ▸
                  </span>
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-3.5 flex flex-wrap gap-1.5">
              {item.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
