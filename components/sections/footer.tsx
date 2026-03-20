import { Github, Linkedin, Mail } from "lucide-react";
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
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Giuliano Accorsi
        </p>

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
