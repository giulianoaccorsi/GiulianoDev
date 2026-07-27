export const SITE_URL = "https://giuliano.work";
export const SITE_TITLE = "Giuliano Accorsi | Mobile Developer";
export const SITE_DESCRIPTION =
  "Mobile developer building reliable iOS and Flutter products with SwiftUI, offline first architecture, accessibility, and release discipline.";

export const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Giuliano Accorsi",
  url: SITE_URL,
  jobTitle: "Mobile Developer",
  email: "mailto:giulianoaccorsi@gmail.com",
  sameAs: [
    "https://github.com/giulianoaccorsi",
    "https://linkedin.com/in/giulianoaccorsi/",
  ],
  knowsAbout: [
    "iOS development",
    "SwiftUI",
    "Flutter",
    "Mobile accessibility",
    "Offline first software",
  ],
} as const;
