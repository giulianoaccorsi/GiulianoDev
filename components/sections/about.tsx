"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl rounded-xl border bg-card p-8 md:p-12"
      >
        <h2 className="mb-2 text-3xl font-bold tracking-tight text-foreground">
          About Me
        </h2>
        <p className="mb-8 text-muted-foreground">
          A little about who I am
        </p>

        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          {/* Bio */}
          <div className="flex-1 space-y-4 text-muted-foreground">
            <p>
              I&apos;m a mobile developer focused on taking products from architecture
              and persistence through accessibility, localization, and release. I
              work natively with SwiftUI and build shared experiences with Flutter
              when that trade off fits the product.
            </p>
            <p>
              Recent work includes shipping SplitEasy on the App Store and building
              PassMalta around deterministic offline content for theory test
              preparation. Experience with NestJS, TypeScript, and PostgreSQL helps
              me design the API and data boundaries around the client, not just the
              screens on top.
            </p>
          </div>

          {/* Profile photo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="aspect-square w-full overflow-hidden rounded-lg shadow-lg md:w-48 md:shrink-0"
          >
            <Image
              src="/media/profile.jpeg"
              alt="Giuliano Accorsi"
              width={192}
              height={192}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
