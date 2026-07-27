export const SOCIAL_LINKS = {
  github: "https://github.com/giulianoaccorsi",
  linkedin: "https://linkedin.com/in/giulianoaccorsi/",
  email: "giulianoaccorsi@gmail.com",
} as const;

export type Project = {
  name: string;
  description: string;
  highlights: string[];
  tech: string[];
  status?: string;
  appStoreUrl?: string;
  githubUrl?: string;
  image?: string;
  imageAlt?: string;
  video?: string;
};

export const PROJECTS: Project[] = [
  {
    name: "PassMalta",
    description:
      "An offline first theory test study app built natively for iOS and Android. It contains 1,429 canonical questions across five licence categories, with English and Maltese catalogs that preserve progress across languages.",
    highlights: [
      "Separate native apps for iOS and Android",
      "2,858 localized question projections and 282 visual assets available offline",
      "Resumable mock exams, progress saved for each course, accessibility, and deterministic content validation",
    ],
    tech: ["SwiftUI", "MVVM", "Offline first", "Accessibility"],
    status: "Internal beta · iOS and Android",
    image: "/media/passmalta-platforms.png",
    imageAlt: "PassMalta onboarding on iOS and lesson feedback on Android",
  },
  {
    name: "SplitEasy",
    description:
      "An App Store app for splitting bills that turns an itemized receipt into a clear, shareable breakdown. People can claim individual items, split quantities or divide costs equally without doing the arithmetic themselves.",
    highlights: [
      "Item assignment with equal and quantity based split strategies",
      "Shareable receipt summary designed for real group payments",
      "Coordinator navigation, observable state, and localized UI",
    ],
    tech: ["SwiftUI", "MVVM", "Coordinator", "@Observable", "Localization"],
    appStoreUrl: "https://apps.apple.com/us/app/spliteasy/id6751210761",
    video: "/media/spliteasy-demo.mp4",
  },
  {
    name: "PokeStudy",
    description:
      "A modular SwiftUI client for exploring Pokémon stats, abilities, types, and weaknesses through the public PokeAPI. It supports an infinitely scrolling catalog, detailed profiles, dark mode, and English or Brazilian Portuguese.",
    highlights: [
      "SPM modularization with MVVM and a custom Combine networking package",
      "Infinite scrolling, image caching, audio decoding, and animated states",
      "Unit tested codebase with CircleCI and Codecov reporting",
    ],
    tech: ["SwiftUI", "SPM", "MVVM", "Combine", "Unit Testing", "CI"],
    githubUrl: "https://github.com/giulianoaccorsi/PokeStudyApp",
    image: "/media/pokestudy-screenshot.png",
    imageAlt: "PokeStudy Pokémon catalog and detail screens in light and dark mode",
  },
];

export type TechCategory = {
  label: string;
  items: string[];
};

export const TECH_STACK: TechCategory[] = [
  { label: "Mobile", items: ["Swift", "SwiftUI", "Flutter", "Dart"] },
  {
    label: "Architecture & State",
    items: ["MVVM", "Coordinator", "@Observable", "Combine", "Riverpod"],
  },
  { label: "Backend", items: ["TypeScript", "NestJS", "PostgreSQL", "REST APIs"] },
  {
    label: "Quality & Delivery",
    items: ["XCTest", "Accessibility", "Xcode", "SPM", "Firebase"],
  },
];
