"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
              className={`overflow-hidden rounded-xl border bg-card ${
                project.video ? "flex flex-col md:flex-row" : ""
              }`}
            >
              {/* Demo area */}
              {project.video ? (
                <div className="flex shrink-0 items-center justify-center p-6 md:w-80 md:p-8">
                  <video
                    src={project.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-auto max-h-[480px] rounded-xl shadow-2xl"
                  />
                </div>
              ) : (project.image ? (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex aspect-video items-center justify-center overflow-hidden bg-muted"
                >
                  <Image
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    width={800}
                    height={450}
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              ) : (
                <div className="flex aspect-video items-center justify-center bg-muted">
                  <span className="text-sm text-muted-foreground">
                    Screenshot / Video / GIF
                  </span>
                </div>
              ))}

              {/* Content */}
              <div className={`flex flex-1 flex-col justify-center p-6 ${
                project.video ? "md:pl-2 md:pr-8" : ""
              }`}>
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
                        width={120}
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
