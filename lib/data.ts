export const SOCIAL_LINKS = {
  github: "https://github.com/giulianoaccorsi",
  linkedin: "https://linkedin.com/in/giulianoaccorsi/",
  email: "giulianoaccorsi@gmail.com",
} as const;

export type Project = {
  name: string;
  description: string;
  tech: string[];
  appStoreUrl?: string;
  githubUrl?: string;
  image?: string;
  video?: string;
};

export const PROJECTS: Project[] = [
  {
    name: "PaySplit",
    description:
      "A bill splitting app that lets you assign items to each person, choose between equal or quantity-based splits, and generate a shareable receipt.",
    tech: ["SwiftUI", "MVVM", "Coordinator", "@Observable", "Localization"],
    appStoreUrl: "https://apps.apple.com/us/app/spliteasy/id6751210761",
    video: "/media/paysplit-demo.mp4",
  },
  {
    name: "Budly",
    description: "Personal finance app to track spending and budgets.",
    tech: ["Swift", "SwiftUI"],
  },
  {
    name: "PokeStudy",
    description: "Pokémon info app — browse and study Pokémon data.",
    tech: ["SwiftUI", "MVVM", "Combine", "Unit Testing"],
    githubUrl: "https://github.com/giulianoaccorsi/PokeStudyApp",
    image: "/media/pokestudy-screenshot.png",
  },
];

export type TechCategory = {
  label: string;
  items: string[];
};

export const TECH_STACK: TechCategory[] = [
  { label: "Mobile", items: ["Swift", "SwiftUI", "Flutter", "Dart"] },
  { label: "State", items: ["Combine", "@Observable", "Riverpod"] },
  { label: "Architecture", items: ["MVVM", "Clean Architecture", "Coordinator", "Modular"] },
  { label: "Tools & Infra", items: ["Xcode", "Git", "Firebase", "SPM", "Tuist"] },
  { label: "Testing", items: ["XCTest", "Unit Testing", "Fixtures"] },
];
