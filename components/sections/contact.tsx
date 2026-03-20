"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
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

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl rounded-xl border bg-card p-8 text-center md:p-12"
      >
        <h2 className="mb-2 text-3xl font-bold tracking-tight text-foreground">
          Get in Touch
        </h2>
        <p className="mb-8 text-muted-foreground">
          Have a project in mind? Let&apos;s talk.
        </p>

        {/* Email button with glow */}
        <div className="mb-8">
          <Button size="lg" className="animate-glow-pulse" render={
            <a href={`mailto:${SOCIAL_LINKS.email}`} />
          }>
            <Mail className="mr-2 h-4 w-4" />
            Send me an Email
          </Button>
        </div>

        {/* Social icons */}
        <div className="flex justify-center gap-4">
          {socials.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.icon !== Mail ? "_blank" : undefined}
              rel={social.icon !== Mail ? "noopener noreferrer" : undefined}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
