import type { Project } from "./types";

// Featured work. Swap the "#" placeholders for real App Store / case-study URLs,
// and drop screenshots into /public to replace the gradient placeholders.
export const projects: Project[] = [
  {
    name: "Xeno",
    domain: "AI · Productivity",
    glyph: "🧠",
    problem:
      "Document AI usually ships your private files to the cloud. Xeno runs retrieval entirely on-device — a full RAG pipeline with semantic search and zero server round-trips.",
    tags: ["SwiftUI", "SwiftData", "Vector DB", "CoreML"],
    links: [
      { label: "App Store ↗", href: "#" },
      { label: "Case study ↗", href: "#" },
    ],
  },
  {
    name: "VoloCity Pilot App",
    domain: "Aviation · Safety-critical",
    glyph: "🚁",
    problem:
      "Pilots of an air taxi need reliable real-time data. Delivered flight routes, battery telemetry, weather and weight-balance analysis with a zero-tolerance-for-defects testing discipline.",
    tags: ["SwiftUI", "Combine", "Real-time", "Snapshot Tests"],
    links: [{ label: "Overview ↗", href: "#" }],
  },
  {
    name: "4ART Marketplace",
    domain: "Web3 · Fintech-adjacent",
    glyph: "🎨",
    problem:
      "Let artists mint and trade verified artwork across chains with real money. Built the marketplace, secure auth (OAuth 2.0, Keychain), ARKit previews and NFC authentication.",
    tags: ["ARKit", "NFC", "App Clips", "Blockchain"],
    links: [{ label: "App Store ↗", href: "#" }],
  },
  {
    name: "Mustard",
    domain: "Real Estate",
    glyph: "🏠",
    problem:
      "Property discovery for landlords, tenants and co-applicants. Built from scratch in SwiftUI + Combine with complex search and ad management, defining API contracts with backend and Android.",
    tags: ["SwiftUI", "Combine", "REST"],
    links: [{ label: "Overview ↗", href: "#" }],
  },
  {
    name: "iDecore",
    domain: "AR · Lifestyle",
    glyph: "🛋️",
    problem:
      "“Will this furniture fit?” An ARKit 2.0 app for placing, scaling and relocating real-world 3D objects in your space before you buy.",
    tags: ["ARKit 2.0", "SceneKit", "UIKit"],
    links: [{ label: "App Store ↗", href: "#" }],
  },
  {
    name: "Study Buddy",
    domain: "macOS · Productivity",
    glyph: "📚",
    problem:
      "Studying from PDFs is passive. A macOS PDFKit tool with multi-color highlighting, search, image annotation and a quiz mode that hides highlighted content for active recall. Live on the Mac App Store.",
    tags: ["PDFKit", "AppKit", "macOS"],
    links: [{ label: "Mac App Store ↗", href: "#" }],
  },
];
