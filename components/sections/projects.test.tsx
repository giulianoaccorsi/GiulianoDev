import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { Projects } from "./projects";

describe("Projects", () => {
  it("renders engineering evidence and release status for project case studies", () => {
    const html = renderToStaticMarkup(<Projects />);

    expect(html).toContain("Internal beta · iOS and Android");
    expect(html).toContain("Separate native apps for iOS and Android");
    expect(html).toContain("Unit tested codebase with CircleCI and Codecov reporting");
    expect(html).toContain(
      'alt="PassMalta onboarding on iOS and lesson feedback on Android"',
    );
  });

  it("aligns the project section with the primary content width", () => {
    const html = renderToStaticMarkup(<Projects />);

    expect(html).toContain("mx-auto max-w-5xl");
    expect(html).not.toContain("mx-auto max-w-4xl");
  });

  it("never renders a generic media placeholder", () => {
    const html = renderToStaticMarkup(<Projects />);

    expect(html).not.toContain("Screenshot / Video / GIF");
  });
});
