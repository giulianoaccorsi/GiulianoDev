import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import Home from "@/app/page";

describe("site navigation", () => {
  it("offers keyboard bypass and labeled primary navigation", () => {
    const html = renderToStaticMarkup(<Home />);

    expect(html).toContain("Skip to content");
    expect(html).toContain('<nav aria-label="Primary"');
    expect(html).toContain('id="main-content"');
  });

  it("links to every major page section", () => {
    const html = renderToStaticMarkup(<Home />);

    for (const target of ["about", "tech-stack", "projects", "contact"]) {
      expect(html).toContain(`href="#${target}"`);
    }
  });
});
