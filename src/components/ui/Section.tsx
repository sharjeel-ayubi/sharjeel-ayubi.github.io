import type { ReactNode } from "react";
import { useReveal } from "../../hooks/useReveal";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: ReactNode;
  /** Optional supporting line under the title. */
  lead?: ReactNode;
  children: ReactNode;
}

/**
 * Standard section shell: consistent vertical rhythm, an eyebrow label,
 * a heading, an optional lead, and a fade-up reveal on scroll.
 */
export function Section({ id, eyebrow, title, lead, children }: SectionProps) {
  const { ref, shown } = useReveal<HTMLElement>();

  return (
    <section
      id={id}
      ref={ref}
      aria-labelledby={`${id}-heading`}
      className={`wrap scroll-mt-24 py-20 reveal${shown ? " in" : ""}`}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 id={`${id}-heading`} className="section-title">
        {title}
      </h2>
      {lead && <p className="section-lead">{lead}</p>}
      {children}
    </section>
  );
}
