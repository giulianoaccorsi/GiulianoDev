import fs from "node:fs";
import path from "node:path";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";

vi.mock("next/font/google", () => ({
  Inter: () => ({ className: "inter" }),
}));

import RootLayout, { metadata } from "./layout";

describe("site SEO", () => {
  it("publishes canonical and social metadata", () => {
    expect(metadata.title).toBe("Giuliano Accorsi | Mobile Developer");
    expect(metadata.alternates).toMatchObject({ canonical: "/" });
    expect(metadata.openGraph).toMatchObject({
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
        },
      ],
    });
    expect(metadata.twitter).toMatchObject({
      card: "summary_large_image",
      images: ["/opengraph-image"],
    });
  });

  it("embeds schema.org Person structured data", () => {
    const html = renderToStaticMarkup(
      <RootLayout>
        <main />
      </RootLayout>,
    );

    expect(html).toContain('type="application/ld+json"');
    expect(html).toContain('"@type":"Person"');
    expect(html).toContain('"url":"https://giuliano.work"');
  });

  it("provides crawler, social image, and not-found routes", () => {
    for (const file of [
      "app/robots.ts",
      "app/sitemap.ts",
      "app/opengraph-image.tsx",
      "app/not-found.tsx",
    ]) {
      expect(fs.existsSync(path.join(process.cwd(), file)), file).toBe(true);
    }
  });
});
