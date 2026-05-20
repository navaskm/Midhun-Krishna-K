"use client";

import { motion } from "motion/react";

const highlights = [
  "Brand identity & logo systems",
  "Social media post & banner design",
  "Print design — flyers, posters, packaging",
  "UI mockups & visual interfaces",
  "Photo editing & compositing",
  "Motion graphics & short-form video",
];

export default function About() {
  return (
    <section id="about" className="border-t border-border bg-surface/40 py-24">
      <div className="mx-auto max-w-9xl px-5 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            About Me
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Turning ideas into{" "}
            <span className="text-gradient">memorable visuals</span>
          </h2>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              I&apos;m <strong className="text-foreground">Midhun Krishna</strong>
              , a graphic designer based in Kerala, India. I help brands and
              businesses stand out with thoughtful design — whether it&apos;s a
              fresh logo, a full brand refresh, or scroll-stopping social content.
            </p>
            <p>
              My process blends creativity with strategy: understanding your
              audience, exploring concepts in Figma and Adobe Creative Suite, and
              delivering polished files ready for print or digital use.
            </p>
            <p>
              I believe great design isn&apos;t just about looking good — it
              should communicate clearly, build trust, and drive results.
            </p>
          </div>

          <ul className="grid gap-3 grid-cols-2">
            {highlights.map((item) => (
              <motion.li
                key={item}
                className="relative flex items-start gap-3 rounded-xl border border-border bg-canvas/60 px-4 py-3.5 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >

                <motion.span
                  className="absolute left-0 top-0 h-[0.5px] bg-accent"
                  animate={{
                    x: ["-100%", "220%"],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ width: "40%" }}
                />

                <motion.span
                  className="absolute right-0 top-0 w-[0.5px] bg-accent"
                  animate={{
                    y: ["-100%", "220%"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ height: "40%" }}
                />

                <motion.span
                  className="absolute right-0 bottom-0 h-[1px] bg-accent"
                  animate={{
                    x: ["-100%", "220%"],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ width: "40%" }}
                />

                <motion.span
                  className="absolute left-0 top-0 w-[1px] bg-accent"
                  animate={{
                    y: ["-100%", "220%"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ height: "40%" }}
                />

                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-muted text-xs text-accent">
                  ✓
                </span>

                <span className="text-sm text-foreground">{item}</span>
              </motion.li>
            ))}
          </ul>


        </motion.div>
      </div>
    </section>
  );
}
