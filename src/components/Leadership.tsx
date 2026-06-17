import { Section } from "./ui/Section";
import { leadership } from "../data/experience";

export function Leadership() {
  return (
    <Section id="leadership" eyebrow="Leadership & Collaboration" title="I lead by raising the floor.">
      <div className="mt-[34px] grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {leadership.map((item) => (
          <div key={item.title} className="glass p-[22px]">
            <div className="text-[1.5rem]" aria-hidden>
              {item.glyph}
            </div>
            <h3 className="mb-2 mt-3 text-[1.08rem] font-semibold">{item.title}</h3>
            <p className="text-[0.95rem] text-muted">{item.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
