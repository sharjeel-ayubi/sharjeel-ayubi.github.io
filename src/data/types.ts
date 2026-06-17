/**
 * Central type definitions for every piece of content on the site.
 * Editing content means editing the data files (profile.ts, skills.ts,
 * experience.ts, projects.ts) — never the components.
 */

export interface ProfileLink {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  yearsExperience: string;
  pitch: string;
  location: string;
  email: string;
  /** Replace placeholder URLs with the real ones. */
  linkedin: string;
  github: string;
  /** Path to the résumé PDF placed in /public. */
  resumePath: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  /** e.g. "Remote / Germany" — optional location qualifier. */
  context?: string;
  period: string;
  highlights: string[];
  tags: string[];
}

export interface Project {
  name: string;
  domain: string;
  /** Emoji or short glyph used in the placeholder thumbnail. */
  glyph: string;
  problem: string;
  tags: string[];
  links: ProfileLink[];
}

export interface TechItem {
  name: string;
  note: string;
}

export interface LeadershipItem {
  glyph: string;
  title: string;
  body: string;
}
