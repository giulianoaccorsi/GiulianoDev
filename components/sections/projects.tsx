"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/lib/data";

const badgeContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const badgeItemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-2 text-3xl font-bold tracking-tight text-foreground">
            Projects
          </h2>
          <p className="mb-12 text-muted-foreground">
            Some things I&apos;ve built
          </p>
        </motion.div>

        <div className="space-y-12">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-xl border bg-card"
            >
              {/* Demo area */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex aspect-video items-center justify-center bg-muted"
              >
                <span className="text-sm text-muted-foreground">
                  Screenshot / Video / GIF
                </span>
              </motion.div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {project.name}
                </h3>
                <p className="mb-4 text-muted-foreground">
                  {project.description}
                </p>

                {/* Tech badges */}
                <motion.div
                  variants={badgeContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="mb-4 flex flex-wrap gap-2"
                >
                  {project.tech.map((tech) => (
                    <motion.span key={tech} variants={badgeItemVariants}>
                      <Badge variant="secondary">{tech}</Badge>
                    </motion.span>
                  ))}
                </motion.div>

                {/* Link buttons */}
                <div className="flex flex-wrap gap-3">
                  {project.appStoreUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      nativeButton={false}
                      render={
                        <a
                          href={project.appStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      }
                    >
                      <ExternalLink className="mr-1.5 h-4 w-4" />
                      App Store
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      nativeButton={false}
                      render={
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      }
                    >
                      <Github className="mr-1.5 h-4 w-4" />
                      GitHub
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
