import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { About } from "./about";
import { Hero } from "./hero";
import { TechStack } from "./tech-stack";

describe("portfolio positioning", () => {
  it("uses the broad Mobile Developer position", () => {
    const html = renderToStaticMarkup(<Hero />);

    expect(html).toContain("Mobile Developer");
    expect(html).toContain("offline first mobile products");
    expect(html).not.toContain("Android");
    expect(html).not.toContain("Jetpack Compose");
    expect(html).not.toContain("—");
  });

  it("uses native fragment links for primary navigation", () => {
    const html = renderToStaticMarkup(<Hero />);

    expect(html).toContain('href="#contact"');
    expect(html).toContain('href="#projects"');
  });

  it("backs the positioning with concrete shipped work", () => {
    const html = renderToStaticMarkup(<About />);

    expect(html).toContain("SplitEasy");
    expect(html).toContain("PassMalta");
    expect(html).toContain("NestJS, TypeScript, and PostgreSQL");
    expect(html).not.toContain("Android");
    expect(html).not.toContain("Jetpack Compose");
  });

  it("presents the stack as focused skills and tools", () => {
    const html = renderToStaticMarkup(<TechStack />);

    expect(html).toContain("Skills &amp; Tools");
    expect(html).toContain("Technologies and practices I use to build mobile products");
    expect(html).not.toContain("Technologies I work with daily");
  });
});
