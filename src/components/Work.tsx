"use client";

import { motion } from "motion/react";
import { projects } from "@/data/portfolio";

export default function Work() {
  return (
    <section id="work" className="border-t border-border bg-surface/40 py-24">
      <div className="mx-auto max-w-9xl px-5 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Selected Work
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Projects that define my craft
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            A glimpse of brand, print, and digital work — each tailored to the
            client&apos;s voice and goals.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-5 grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
        >
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border card-glow"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.02 }}
            >
              
              {/* Moving Gradient Background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
                animate={{
                  backgroundPosition: [
                    "0% 0%",
                    "100% 100%",
                  ],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "300% 300%",
                }}
              />

              <div className="absolute inset-0 bg-canvas/20 opacity-0 transition group-hover:opacity-100" />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-canvas/90 via-canvas/50 to-transparent p-5 pt-16">
                <p className="text-xs font-medium uppercase tracking-wider text-accent-soft">
                  {project.category}
                </p>

                <h3 className="mt-1 font-display text-[15px] md:text-lg font-semibold">
                  {project.title}
                </h3>
              </div>
            </motion.article>

          ))}
        </motion.div>
      </div>
    </section>
  );
}