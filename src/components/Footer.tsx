import { profile } from "../data/profile";

export function Footer() {
  return (
    <footer className="mt-10 border-t border-line">
      <div className="wrap flex flex-wrap justify-between gap-3.5 py-7 text-[0.88rem] text-muted">
        <span>
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </span>
        <span className="font-mono text-[0.78rem]">Built with care · Swift at heart</span>
      </div>
    </footer>
  );
}
