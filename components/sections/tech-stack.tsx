"use client";

import { motion } from "framer-motion";
import {
  siDart,
  siFirebase,
  siFlutter,
  siNestjs,
  siPostgresql,
  siSwift,
  siTypescript,
  siXcode,
} from "simple-icons";
import { TECH_STACK } from "@/lib/data";

const ICON_MAP: Record<string, { path: string; hex: string }> = {
  Swift: siSwift,
  SwiftUI: siSwift,
  Flutter: siFlutter,
  Dart: siDart,
  TypeScript: siTypescript,
  NestJS: siNestjs,
  PostgreSQL: siPostgresql,
  Xcode: siXcode,
  Firebase: siFirebase,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function TechStack() {
  return (
    <section id="tech-stack" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-2 text-3xl font-bold tracking-tight text-foreground">
            Skills & Tools
          </h2>
          <p className="mb-12 text-muted-foreground">
            Technologies and practices I use to build mobile products
          </p>
        </motion.div>

        {TECH_STACK.map((category) => (
          <div key={category.label} className="mb-8">
            <h3 className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {category.label}
            </h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
            >
              {category.items.map((tech) => {
                const icon = ICON_MAP[tech];
                return (
                  <motion.div
                    key={tech}
                    variants={itemVariants}
                    className="flex items-center gap-3 rounded-lg border bg-card p-3"
                  >
                    {icon ? (
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-5 w-5 shrink-0"
                        fill={`#${icon.hex}`}
                      >
                        <path d={icon.path} />
                      </svg>
                    ) : (
                      <span
                        aria-hidden="true"
                        className="flex h-5 w-5 shrink-0 items-center justify-center"
                      >
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      </span>
                    )}
                    <span className="text-sm font-medium text-foreground">
                      {tech}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
