import fs from "node:fs";
import path from "node:path";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { CursorGlow } from "@/components/cursor-glow";
import { Projects } from "@/components/sections/projects";
import { TechStack } from "@/components/sections/tech-stack";
import { PROJECTS } from "@/lib/data";

describe("motion and media quality", () => {
  it("does not eagerly request the project video during server render", () => {
    const html = renderToStaticMarkup(<Projects />);

    expect(html).toContain('poster="/media/spliteasy-poster.png"');
    expect(html).toContain('preload="none"');
    expect(html).not.toMatch(/<video[^>]+src=/);
    expect(html).toMatch(/<video[^>]+controls=""/);
  });

  it("keeps the project demo within the mobile transfer budget", () => {
    const videoPath = PROJECTS.find((project) => project.video)?.video;

    expect(videoPath).toBeTruthy();
    const bytes = fs.statSync(path.join(process.cwd(), "public", videoPath!)).size;
    expect(bytes).toBeLessThan(2_000_000);
  });

  it("marks visual-only decorations as hidden from assistive technology", () => {
    expect(renderToStaticMarkup(<CursorGlow />)).toContain('aria-hidden="true"');

    const stack = renderToStaticMarkup(<TechStack />);
    expect(stack).not.toContain('role="img"');
    expect(stack).toContain('aria-hidden="true"');
  });

  it("disables non-essential CSS motion for reduced-motion users", () => {
    const css = fs.readFileSync(path.join(process.cwd(), "app/globals.css"), "utf8");

    expect(css).toContain("@media (prefers-reduced-motion: reduce)");
    expect(css).toContain("scroll-behavior: auto");
  });
});
