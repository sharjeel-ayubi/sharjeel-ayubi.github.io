import { useReveal } from "../hooks/useReveal";
import { profile } from "../data/profile";

export function Contact() {
  const { ref, shown } = useReveal<HTMLElement>();

  return (
    <section
      id="contact"
      ref={ref}
      aria-labelledby="contact-heading"
      className={`wrap scroll-mt-24 py-20 reveal${shown ? " in" : ""}`}
    >
      <div className="glass p-12 px-10 text-center">
        <span className="eyebrow justify-center">Contact</span>
        <h2 id="contact-heading" className="mt-3 font-display text-[clamp(1.8rem,5vw,3rem)] font-semibold">
          Let's build something great.
        </h2>
        <p className="mx-auto mt-3.5 max-w-[520px] text-muted">
          Open to senior iOS roles, tech-lead positions and select freelance work. The fastest way to reach me is email.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            Email me
          </a>
          <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noopener">
            LinkedIn ↗
          </a>
          <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noopener">
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
