import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-lg text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
          404
        </p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground">
          Page not found
        </h1>
        <p className="mb-8 text-muted-foreground">
          The page you requested does not exist or has moved.
        </p>
        <Link
          href="/"
          className="inline-flex rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Back to portfolio
        </Link>
      </div>
    </main>
  );
}
