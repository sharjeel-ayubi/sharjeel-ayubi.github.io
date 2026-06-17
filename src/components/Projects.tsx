import { Section } from "./ui/Section";
import { Tag } from "./ui/Tag";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Projects"
      title="Selected work."
      lead="A cross-section of products I've architected and shipped. Replace the placeholders with screenshots and live links."
    >
      <div className="mt-[34px] grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.name} className="glass group flex flex-col overflow-hidden p-0 transition-transform duration-300 hover:-translate-y-1">
            {/* Screenshot placeholder */}
            <div
              className="relative flex h-[168px] items-center justify-center border-b border-line"
              style={{ background: "linear-gradient(135deg, rgba(124,92,255,0.18), rgba(52,215,224,0.12))" }}
            >
              <span className="text-[2.2rem]" aria-hidden>
                {p.glyph}
              </span>
              <span className="absolute bottom-2.5 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-muted">
                screenshot placeholder
              </span>
            </div>

            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-[1.18rem] font-semibold">{p.name}</h3>
              <div className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-cyan">{p.domain}</div>
              <p className="mt-3 flex-1 text-[0.94rem] text-muted">
                <strong className="font-semibold text-text">Problem:</strong> {p.problem}
              </p>
              <div className="my-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              <div className="flex gap-3.5 border-t border-line pt-3.5">
                {p.links.map((l) => (
                  <a key={l.label} href={l.href} className="text-[0.85rem] text-muted transition-colors hover:text-text">
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
