"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ProjectVideo } from "@/components/project-video";
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
      <div className="mx-auto max-w-5xl">
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
              className={`overflow-hidden rounded-xl border bg-card ${
                project.video ? "flex flex-col md:flex-row" : ""
              }`}
            >
              {project.video ? (
                <div className="flex shrink-0 items-center justify-center p-6 md:w-80 md:p-8">
                  <ProjectVideo
                    src={project.video}
                    poster="/media/spliteasy-poster.png"
                    label={`${project.name} app demo`}
                  />
                </div>
              ) : project.image ? (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex aspect-[8/5] items-center justify-center overflow-hidden bg-muted"
                >
                  <Image
                    src={project.image}
                    alt={project.imageAlt ?? `${project.name} screenshot`}
                    width={1600}
                    height={1000}
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              ) : null}

              <div className={`flex flex-1 flex-col justify-center p-6 ${
                project.video ? "md:pl-2 md:pr-8" : ""
              }`}>
                {project.status && (
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-400">
                    {project.status}
                  </p>
                )}
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {project.name}
                </h3>
                <p className="mb-4 text-muted-foreground">
                  {project.description}
                </p>

                <ul className="mb-5 space-y-2 text-sm text-muted-foreground">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <span aria-hidden="true" className="mt-1 text-emerald-400">
                        •
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

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
                    <a
                      href={project.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/media/app-store-badge.svg"
                        alt="Download on the App Store"
                        width={120}
                        height={40}
                        className="transition-opacity hover:opacity-80"
                      />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/media/github-badge.png"
                        alt="Available on GitHub"
                        width={135}
                        height={40}
                        className="transition-opacity hover:opacity-80"
                      />
                    </a>
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
