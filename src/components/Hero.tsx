import { profile, stats } from "../data/profile";

export function Hero() {
  return (
    <section className="wrap py-[84px] pb-16" aria-label="Introduction">
      <div className="grid items-center gap-12 md:grid-cols-[1.35fr_1fr]">
        {/* Left: headline + value prop + CTAs + stats */}
        <div>
          <span className="eyebrow">Senior iOS Engineer · Tech Lead</span>
          <h1 className="mt-[18px] font-display text-[clamp(2.6rem,7vw,4.6rem)] font-bold leading-[1.05]">
            Building <span className="gradient-text">intelligent</span> iOS products that ship.
          </h1>
          <p className="mt-2.5 font-display text-[clamp(1.05rem,2.4vw,1.4rem)] font-medium">{profile.tagline}</p>
          <p className="mt-[18px] max-w-[540px] text-[1.06rem] text-muted">{profile.pitch}</p>

          <div className="mt-[30px] flex flex-wrap gap-3">
            <a className="btn btn-primary" href="#contact">
              Let's build something
            </a>
            <a className="btn btn-ghost" href="#projects">
              View projects
            </a>
            <a className="btn btn-ghost" href={profile.resumePath} download>
              Download résumé
            </a>
          </div>

          <ul className="mt-[34px] flex flex-wrap gap-2.5">
            {stats.map((s) => (
              <li key={s.label} className="glass px-[18px] py-3.5">
                <span className="gradient-text block font-display text-2xl font-bold">{s.value}</span>
                <span className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-muted">{s.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: "currently building" card */}
        <aside className="glass p-[22px]" aria-label="Currently building">
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-cyan">// currently building</span>
          <h3 className="mt-2.5 mb-1.5 text-[1.25rem] font-semibold">Xeno</h3>
          <p className="text-[0.95rem] text-muted">
            An AI-powered document chat app with a fully on-device Retrieval-Augmented Generation pipeline — semantic
            search with zero server round-trips for privacy and speed.
          </p>
          <div className="mt-4 flex flex-wrap gap-[7px]">
            {["SwiftUI", "SwiftData", "On-device RAG", "Vector DB", "CoreML"].map((t) => (
              <span key={t} className="rounded-full border border-line px-2.5 py-[5px] font-mono text-[0.72rem] text-muted">
                {t}
              </span>
            ))}
          </div>
          <div className="mt-[18px] h-px animate-shimmer bg-aurora opacity-70" style={{ backgroundSize: "200% auto" }} />
        </aside>
      </div>
    </section>
  );
}
