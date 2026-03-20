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
};

export const PROJECTS: Project[] = [
  {
    name: "PaySplit",
    description: "Bill splitting app for iOS — easily divide expenses with friends.",
    tech: ["SwiftUI", "MVVM", "Unit Testing"],
    appStoreUrl: "https://apps.apple.com/us/app/spliteasy/id6751210761",
    githubUrl: "https://github.com/giulianoaccorsi",
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
  },
];

export type TechCategory = {
  label: string;
  items: string[];
};

export const TECH_STACK: TechCategory[] = [
  { label: "Mobile", items: ["Swift", "SwiftUI", "Flutter", "Dart"] },
  { label: "Tools & Infra", items: ["Xcode", "Git", "Firebase", "CI/CD"] },
  { label: "Architecture", items: ["MVVM", "Clean Architecture", "Unit Testing"] },
];
