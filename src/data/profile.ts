import type { Profile, Stat } from "./types";

// ── Edit your headline details here ─────────────────────────────
// Replace USERNAME in the two URLs with your real LinkedIn / GitHub handle.
export const profile: Profile = {
  name: "Sharjeel Ayubi",
  title: "Senior iOS Engineer & Tech Lead",
  tagline: "Swift · SwiftUI · Combine · On-device AI",
  yearsExperience: "8+",
  pitch:
    "8+ years designing and delivering scalable, high-performance mobile apps across aviation, AI and real estate — from on-device RAG pipelines to safety-critical flight systems. I lead teams, own products end-to-end, and care about clean architecture and engineering excellence.",
  location: "Lahore, Pakistan",
  email: "sharjeel.ayubi.007@gmail.com",
  linkedin: "https://www.linkedin.com/in/sharjeel-ayubi-9a768049/",
  github: "https://github.com/sharjeel-ayubi",
  resumePath: "resume.pdf",
};

export const stats: Stat[] = [
  { value: "8+", label: "Years iOS" },
  { value: "3", label: "Industries" },
  { value: "20+", label: "Apps shipped" },
  { value: "EU·US·PK", label: "App Store" },
];
