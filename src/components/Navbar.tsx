import { useState } from "react";
import { profile } from "../data/profile";

const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#leadership", label: "Leadership" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <nav
        aria-label="Primary"
        className="mx-auto mt-3 flex h-16 max-w-site items-center justify-between rounded-full border border-line px-[18px] pr-[14px] backdrop-blur-md"
        style={{ background: "rgba(10,10,16,0.6)" }}
      >
        <a href="#main" className="font-display text-[1.02rem] font-bold tracking-tight">
          {profile.name} <span className="font-mono text-[0.82rem] font-normal text-muted">/ iOS</span>
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="p-2 text-text md:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        {/* Desktop links */}
        <div className="hidden items-center gap-1.5 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm text-muted transition-colors hover:bg-white/5 hover:text-text"
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="rounded-full bg-text px-4 py-2 text-sm font-medium text-ink hover:bg-white">
            Let's talk
          </a>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="wrap md:hidden">
          <div className="mt-2 flex flex-col gap-1 rounded-[20px] border border-line bg-ink-2/95 p-2.5 backdrop-blur-md">
            {[...NAV_ITEMS, { href: "#contact", label: "Let's talk" }].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3.5 py-3 text-muted hover:bg-white/5 hover:text-text"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
