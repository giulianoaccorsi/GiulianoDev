import { describe, expect, it } from "vitest";

import { PROJECTS, TECH_STACK } from "./data";

describe("portfolio project catalog", () => {
  it("leads with a portfolio-ready PassMalta case study", () => {
    const project = PROJECTS[0];

    expect(project.name).toBe("PassMalta");
    expect(project.image).toBeTruthy();
    expect(project.description.length).toBeGreaterThanOrEqual(120);
    expect("highlights" in project ? project.highlights : []).toHaveLength(3);
    expect(project.tech).toEqual(
      expect.arrayContaining(["SwiftUI", "MVVM", "Offline first"]),
    );
    expect(project.description).toContain("iOS and Android");
  });

  it("does not publish incomplete projects or media placeholders", () => {
    expect(PROJECTS.map((project) => project.name)).not.toContain("Budly");

    for (const project of PROJECTS) {
      expect(project.image || project.video, `${project.name} needs real media`).toBeTruthy();
      expect(project.description.length, `${project.name} needs substantial copy`).toBeGreaterThanOrEqual(90);
      expect(
        "highlights" in project ? project.highlights : [],
        `${project.name} needs engineering evidence`,
      ).toHaveLength(3);
    }
  });

  it("presents a focused mobile stack with supporting architecture and delivery skills", () => {
    expect(TECH_STACK).toEqual([
      { label: "Mobile", items: ["Swift", "SwiftUI", "Flutter", "Dart"] },
      {
        label: "Architecture & State",
        items: ["MVVM", "Coordinator", "@Observable", "Combine", "Riverpod"],
      },
      {
        label: "Backend",
        items: ["TypeScript", "NestJS", "PostgreSQL", "REST APIs"],
      },
      {
        label: "Quality & Delivery",
        items: ["XCTest", "Accessibility", "Xcode", "SPM", "Firebase"],
      },
    ]);

    const visibleStack = TECH_STACK.flatMap((category) => category.items);
    expect(visibleStack).not.toEqual(
      expect.arrayContaining([
        "Kotlin",
        "Jetpack Compose",
        "Room",
        "Android Studio",
        "Git",
        "Unit Testing",
        "Modular",
        "Clean Architecture",
        "Deterministic Validation",
      ]),
    );
  });

  it("keeps public project copy free of hyphens and dash characters", () => {
    const copy = PROJECTS.flatMap((project) => [
      project.name,
      project.description,
      project.status ?? "",
      project.imageAlt ?? "",
      ...project.highlights,
      ...project.tech,
    ]).join(" ");

    expect(copy).not.toMatch(/[-–—]/);
  });
});
