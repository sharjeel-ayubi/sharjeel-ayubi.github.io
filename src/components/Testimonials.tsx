import { Section } from "./ui/Section";

// Placeholder testimonials. Replace `quote`, `name` and `role` with real
// quotes once you collect them — leave this array empty to hide the cards.
const placeholders = [
  { quote: "Add a short, specific quote about impact and how you work.", name: "Name placeholder", role: "Role · Company" },
  { quote: "Another quote — ideally one that mentions a measurable outcome.", name: "Name placeholder", role: "Role · Company" },
  { quote: "A third quote about leadership, mentoring or delivery.", name: "Name placeholder", role: "Role · Company" },
];

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow="Testimonials"
      title="What colleagues say."
      lead="Placeholders — drop in real quotes from managers, teammates or clients to add social proof."
    >
      <div className="mt-[34px] grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {placeholders.map((t, i) => (
          <figure key={i} className="glass border-dashed p-6">
            <blockquote className="italic text-muted-2">“{t.quote}”</blockquote>
            <figcaption className="mt-[18px] flex items-center gap-3">
              <span className="h-10 w-10 rounded-full border border-dashed border-line-2 bg-white/5" aria-hidden />
              <span>
                <span className="block text-[0.92rem] font-semibold">{t.name}</span>
                <span className="block font-mono text-[0.72rem] text-muted">{t.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
