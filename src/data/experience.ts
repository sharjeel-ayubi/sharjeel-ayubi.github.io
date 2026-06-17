import type { ExperienceItem, LeadershipItem } from "./types";

// Roles in reverse-chronological order (newest first).
export const experience: ExperienceItem[] = [
  {
    role: "Senior iOS Engineer & Tech Lead",
    company: "Hazel Mobile",
    period: "May 2025 — Present",
    highlights: [
      "Owned end-to-end architecture and development of Xeno, an AI-powered document chat app in SwiftUI + SwiftData, from ideation to production release.",
      "Designed a fully on-device RAG pipeline for semantic search without server round-trips — cutting latency and protecting user privacy.",
      "Integrated a vector database + e5-small-multilingual embeddings for accurate, context-aware matching across multilingual corpora.",
      "Drove adoption of SwiftData over legacy CoreData, reducing model boilerplate by ~40%; led the team and enforced quality via structured code reviews.",
    ],
    tags: ["SwiftUI", "SwiftData", "On-device RAG", "Vector DB", "Crashlytics"],
  },
  {
    role: "Senior iOS Engineer",
    company: "Volocopter GmbH",
    context: "Remote / Germany",
    period: "Apr 2023 — Apr 2025",
    highlights: [
      "Built a mission-critical pilot application for the VoloCity air taxi — real-time flight routes, battery telemetry, weather, weight-balance analysis and scheduling used by pilots.",
      "Made key architectural decisions for a scalable SwiftUI + Combine codebase, decomposing complex features into independently testable modules.",
      "Implemented comprehensive unit/UI/snapshot testing, reducing production regressions across release cycles.",
      "Authored technical docs and improved engineering workflows, cutting new-member onboarding time by an estimated 30%.",
    ],
    tags: ["SwiftUI", "Combine", "Real-time data", "Snapshot Testing", "Agile"],
  },
  {
    role: "iOS Engineer",
    company: "Coeus Solutions GmbH",
    period: "Apr 2021 — Mar 2023",
    highlights: [
      "Led a team delivering 4ART — an NFT creation & artwork registration platform supporting Ethereum, Tezos and Binance with real-money transactions.",
      "Owned the in-app Marketplace feature end-to-end: requirements, technical design, API integration and delivery.",
      "Implemented secure auth and data protection (encryption, OAuth 2.0, Keychain) for real-money flows; integrated ARKit previews, NFC authentication and App Clips.",
      "Shipped live to the App Store with a 4.0+ rating across DE/EU markets.",
    ],
    tags: ["ARKit", "NFC", "App Clips", "OAuth 2.0", "Blockchain"],
  },
  {
    role: "iOS Engineer",
    company: "Norgic AB",
    period: "Apr 2020 — Mar 2021",
    highlights: [
      "Built Mustard (real estate) from the ground up in SwiftUI + Combine — landlord, tenant and co-applicant workflows with complex search and ad management.",
      "Drove Agile delivery end-to-end: client comms, edge-case analysis and API contract definition with backend and Android teams.",
      "Added features to and maintained Togee (social screen-sharing) including voice/video calling and real-time messaging.",
    ],
    tags: ["SwiftUI", "Combine", "WebSockets", "Real-time"],
  },
  {
    role: "iOS Engineer",
    company: "Clustox",
    period: "Jan 2019 — Mar 2020",
    highlights: [
      "Developed iDecore, an ARKit 2.0 furniture placement app with real-world 3D positioning, scaling and relocation.",
      "Built Study Buddy for macOS with PDFKit — multi-color highlighting, search, image annotation and a hidden-content quiz mode (live on the Mac App Store).",
      "Built Interakt, a TikTok-style short-form video platform using AVFoundation + AWS with recording, upload, feed and engagement.",
    ],
    tags: ["ARKit", "PDFKit", "AVFoundation", "AWS", "macOS"],
  },
  {
    role: "Senior Game Developer",
    company: "Ozi Technology",
    period: "Jan 2016 — Feb 2018",
    highlights: [
      "Developed 17 iOS and Android games in Unity3D from concept through testing and release.",
      "Built strong foundations in software architecture, product ownership and the full mobile application lifecycle.",
    ],
    tags: ["Unity3D", "C#", "iOS", "Android"],
  },
];

export const leadership: LeadershipItem[] = [
  { glyph: "👥", title: "Team Leadership", body: "Led iOS teams at Hazel Mobile and Coeus — setting architectural standards and owning delivery." },
  { glyph: "🧭", title: "Mentoring", body: "Coach engineers through code reviews and pairing, and write the docs that cut onboarding time ~30%." },
  { glyph: "🔄", title: "Agile / Scrum", body: "Sprint planning, technical analysis and feature breakdown in remote teams across multiple time zones." },
  { glyph: "🤝", title: "Cross-functional", body: "Translate product requirements into pragmatic technical solutions with design, backend and Android." },
  { glyph: "📦", title: "Product Ownership", body: "Own features end-to-end — requirements, design, integration, release and App Store submission." },
  { glyph: "✅", title: "Engineering Excellence", body: "Drive quality through automated testing, CI/CD pipelines and scalability-focused design decisions." },
];
