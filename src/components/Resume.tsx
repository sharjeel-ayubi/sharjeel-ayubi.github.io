import { useReveal } from "../hooks/useReveal";
import { profile } from "../data/profile";

export function Resume() {
  const { ref, shown } = useReveal<HTMLElement>();

  return (
    <section id="resume" ref={ref} className={`wrap scroll-mt-24 py-20 reveal${shown ? " in" : ""}`}>
      <div className="glass flex flex-wrap items-center justify-between gap-[22px] p-10">
        <div>
          <span className="eyebrow">Résumé</span>
          <h3 className="mt-2.5 text-[1.5rem] font-semibold">The one-page version.</h3>
          <p className="mt-1.5 text-muted">Prefer a PDF? Grab the full résumé or open it in a new tab.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a className="btn btn-primary" href={profile.resumePath} download>
            Download résumé
          </a>
          <a className="btn btn-ghost" href={profile.resumePath} target="_blank" rel="noopener">
            View résumé
          </a>
        </div>
      </div>
    </section>
  );
}
