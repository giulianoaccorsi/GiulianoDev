import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/data";

const socials = [
  { icon: Github, href: SOCIAL_LINKS.github, label: "GitHub" },
  { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
  {
    icon: Mail,
    href: `mailto:${SOCIAL_LINKS.email}`,
    label: "Email",
  },
];

export function Footer() {
  return (
    <footer className="border-t px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Giuliano Accorsi
        </p>

        <nav
          aria-label="PassMalta legal documents"
          className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm"
        >
          <Link
            href="/passmalta/privacy"
            className="text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            PassMalta Privacy
          </Link>
          <Link
            href="/passmalta/terms"
            className="text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            PassMalta Terms
          </Link>
        </nav>

        <div className="flex gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.icon !== Mail ? "_blank" : undefined}
              rel={social.icon !== Mail ? "noopener noreferrer" : undefined}
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
