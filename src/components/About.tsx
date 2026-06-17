import { Section } from "./ui/Section";

const facts = [
  { value: "2025 → now", desc: "Tech Lead at Hazel Mobile, building Xeno (on-device AI)" },
  { value: "Aviation", desc: "Safety-critical real-time systems for Volocopter" },
  { value: "BS CS", desc: "FAST-NUCES Lahore · 2011–2015" },
];

export function About() {
  return (
    <Section id="about" eyebrow="About" title="From game engines to flight decks to on-device AI.">
      <div className="mt-[34px] grid gap-10 md:grid-cols-[1.3fr_1fr]">
        <div className="space-y-4 text-[1.04rem] text-muted">
          <p>
            I'm a Senior iOS Engineer and Tech Lead with a track record of taking products from{" "}
            <strong className="font-semibold text-text">ideation through production</strong> — and owning the
            architecture decisions that keep them fast, testable and maintainable as they grow.
          </p>
          <p>
            My path runs deep and wide: I started building{" "}
            <strong className="font-semibold text-text">17 shipped games</strong> in Unity, then moved into iOS where
            I've built a <strong className="font-semibold text-text">safety-critical pilot application for the VoloCity air taxi</strong>,
            a <strong className="font-semibold text-text">blockchain-backed NFT marketplace</strong> handling real-money
            transactions, and most recently an{" "}
            <strong className="font-semibold text-text">on-device AI document assistant</strong> that runs retrieval
            entirely on the user's device.
          </p>
          <p>
            Across SwiftUI, Combine and modern Swift Concurrency, I lead with{" "}
            <strong className="font-semibold text-text">clean architecture, automated testing and CI/CD</strong>. I've
            led cross-functional teams across multiple time zones, mentored engineers, and consistently delivered with
            minimal supervision in remote Agile environments.
          </p>
          <p>
            What drives me now: applying{" "}
            <strong className="font-semibold text-text">emerging AI — on-device models and LLMs</strong> — to build
            products that genuinely simplify people's lives.
          </p>
        </div>

        <div className="grid content-start gap-3">
          {facts.map((f) => (
            <div key={f.value} className="glass p-[18px]">
              <div className="gradient-text font-display text-[1.7rem] font-bold">{f.value}</div>
              <div className="mt-0.5 text-[0.9rem] text-muted">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
