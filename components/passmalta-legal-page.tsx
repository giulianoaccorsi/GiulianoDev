import Link from "next/link";
import type { ReactNode } from "react";

import {
  PASSMALTA_LEGAL_DISPLAY_DATE,
  PASSMALTA_LEGAL_LAST_UPDATED,
} from "@/lib/passmalta-legal";

type PassMaltaLegalPageProps = {
  title: string;
  summary: string;
  relatedHref: "/passmalta/privacy" | "/passmalta/terms";
  relatedLabel: string;
  children: ReactNode;
};

type LegalSectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export const legalListClassName = "list-disc space-y-2 pl-5";

export function LegalSection({ id, title, children }: LegalSectionProps) {
  return (
    <section aria-labelledby={id} className="space-y-4">
      <h2 id={id} className="text-2xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      <div className="space-y-4 leading-7 text-muted-foreground">{children}</div>
    </section>
  );
}

export function PassMaltaLegalPage({
  title,
  summary,
  relatedHref,
  relatedLabel,
  children,
}: PassMaltaLegalPageProps) {
  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-50 -translate-y-24 rounded-md bg-emerald-400 px-4 py-2 text-sm font-medium text-neutral-950 transition-transform focus:translate-y-0"
      >
        Skip to legal content
      </a>

      <header className="border-b border-border/70 px-6">
        <div className="mx-auto flex min-h-16 max-w-5xl items-center justify-between gap-4">
          <Link
            href="/"
            className="font-semibold tracking-tight text-foreground transition-colors hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            Giuliano Accorsi
          </Link>
          <span className="text-sm font-medium text-muted-foreground">PassMalta</span>
        </div>
      </header>

      <main id="main-content" tabIndex={-1} className="px-6 py-16 sm:py-24">
        <article className="mx-auto max-w-3xl">
          <header className="mb-12 border-b border-border pb-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              PassMalta
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              {summary}
            </p>
            <p className="mt-5 text-sm text-muted-foreground">
              Last updated: {" "}
              <time dateTime={PASSMALTA_LEGAL_LAST_UPDATED}>
                {PASSMALTA_LEGAL_DISPLAY_DATE}
              </time>
            </p>
          </header>

          <div className="space-y-12">{children}</div>

          <nav
            aria-label="PassMalta legal documents"
            className="mt-14 border-t border-border pt-8"
          >
            <Link
              href={relatedHref}
              className="inline-flex rounded-lg border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-emerald-400/60 hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              {relatedLabel}
            </Link>
          </nav>
        </article>
      </main>

      <footer className="border-t border-border/70 px-6 py-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Giuliano Accorsi</p>
          <Link
            href="/"
            className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            Back to portfolio
          </Link>
        </div>
      </footer>
    </>
  );
}
