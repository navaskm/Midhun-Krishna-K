"use client";

import { motion } from "motion/react";
import { designTools } from "@/data/portfolio";

export default function Tools() {
  return (
    <section id="tools" className="py-24">
      <motion.div
        className="mx-auto max-w-9xl px-5 md:px-8 lg:px-16"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          Tools & Software
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
          The creative stack I work with daily
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          From industry-standard Adobe apps to Figma and Canva — I use the right
          tool for every brief, from high-end brand work to fast social turns.
        </p>

        <div className="mt-12 grid gap-4 grid-cols-2 lg:grid-cols-4">
          {designTools.map((tool, i) => (
            <motion.article
              key={tool.name}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-surface p-5 card-glow transition-colors`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{
                borderColor: tool.color,
              }}
            >
              <img
                src={tool.img}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-15 transition-transform duration-900 group-hover:scale-125"
              />

              {/* Content */}
              <div className="relative z-10">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-sm font-bold text-white"
                  style={{ backgroundColor: tool.color }}
                >
                  {tool.icon}
                </div>

                <p className="text-xs font-medium uppercase tracking-wider text-muted">
                  {tool.category}
                </p>

                <h3 className="mt-1 font-display text-lg font-semibold">
                  {tool.name}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {tool.description}
                </p>
              </div>
            </motion.article>


          ))}
        </div>

      </motion.div>
    </section>
  );
}
