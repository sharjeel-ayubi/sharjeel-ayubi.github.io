import type { SkillGroup, TechItem } from "./types";

export const skillGroups: SkillGroup[] = [
  {
    title: "iOS Development",
    skills: [
      "Swift", "SwiftUI", "UIKit", "Combine", "AVKit / AVFoundation", "ARKit",
      "CoreML", "Core Data", "Core Location", "PDFKit", "MapKit", "App Clips",
    ],
  },
  {
    title: "Swift Ecosystem & Concurrency",
    skills: ["async / await", "Reactive (Combine)", "SwiftData", "Protocol-Oriented", "Swift Package Manager", "Apple HIG"],
  },
  {
    title: "Architecture",
    skills: ["MVVM", "MVP / MVC", "Clean Architecture", "SOLID", "Dependency Injection", "Factory / Observer / Singleton"],
  },
  {
    title: "AI / ML",
    skills: ["On-device RAG", "Vector Database", "ObjectBox", "Semantic Search", "e5-small-multilingual", "Server-side LLM"],
  },
  {
    title: "Testing",
    skills: ["XCTest", "UI Testing", "Snapshot Testing", "High coverage"],
  },
  {
    title: "Backend & Cloud",
    skills: ["REST APIs", "URLSession", "Alamofire", "AWS", "Firebase", "WebSockets", "OAuth 2.0 / JWT", "Keychain", "Crashlytics"],
  },
  {
    title: "DevOps & Tooling",
    skills: ["Xcode", "Git", "Fastlane", "CodeMagic", "Bitrise", "Azure DevOps", "CocoaPods", "Figma", "Jira / Asana"],
  },
  {
    title: "Leadership",
    skills: ["Team Leadership", "Mentoring", "Agile / Scrum", "Cross-functional comms", "Product ownership", "Code reviews"],
  },
];

export const techExpertise: TechItem[] = [
  { name: "Swift", note: "8+ yrs" },
  { name: "SwiftUI", note: "expert" },
  { name: "UIKit", note: "expert" },
  { name: "Combine", note: "reactive" },
  { name: "Concurrency", note: "async / await" },
  { name: "On-device AI", note: "RAG · CoreML" },
  { name: "Architecture", note: "MVVM · Clean" },
  { name: "Testing", note: "XCTest · snapshot" },
  { name: "AWS", note: "cloud" },
  { name: "CI/CD", note: "Fastlane · Bitrise" },
  { name: "ARKit", note: "AR / 3D" },
  { name: "SwiftData", note: "persistence" },
];
