"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import { stats } from "@/data/portfolio";

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="home"
      className="gradient-mesh relative flex min-h-screen items-center pt-16"
    >

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-32 h-96 w-96 rounded-full bg-accent/40 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.5, 0.05],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="mx-auto grid w-full max-w-9xl px-5 md:px-8 lg:px-16 items-center gap-12 py-20 lg:grid-cols-2 lg:gap-16"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="order-2 lg:order-1">

          <div className="relative inline-block overflow-hidden rounded-full border border-border bg-surface/90 px-4 pb-1.5">

            {/* TOP */}
            <motion.span
              className="absolute left-0 top-0 h-[1.5px] bg-gradient-to-r from-yellow-400 via-orange-500 to-amber-300"
              animate={{
                x: ["-100%", "260%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ width: "35%" }}
            />

            {/* RIGHT */}
            <motion.span
              className="absolute right-0 top-0 w-[1.5px] bg-gradient-to-b from-yellow-400 via-orange-500 to-amber-300"
              animate={{
                y: ["-100%", "260%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                delay: 1,
              }}
              style={{ height: "60%" }}
            />

            {/* BOTTOM */}
            <motion.span
              className="absolute right-0 bottom-0 h-[1.5px] bg-gradient-to-l from-yellow-400 via-orange-500 to-amber-300"
              animate={{
                x: ["100%", "-260%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                delay: 2,
              }}
              style={{ width: "35%" }}
            />

            {/* LEFT */}
            <motion.span
              className="absolute left-0 bottom-0 w-[1.5px] bg-gradient-to-t from-yellow-400 via-orange-500 to-amber-300"
              animate={{
                y: ["100%", "-260%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                delay: 3,
              }}
              style={{ height: "60%" }}
            />

            {/* Content */}
            <motion.p
              className="relative z-10 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted backdrop-blur-sm"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Graphic Designer
            </motion.p>
          </div>

          <motion.h1
            className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient">Midhun Krishna</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            I’m a graphic designer creating clean, impactful visuals that bring ideas to life. Every pixel is intentional, every color tells a story.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
          >
            <a
              href="#work"
              className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-canvas transition hover:bg-accent-soft"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border px-7 py-3 text-sm font-semibold text-foreground transition hover:border-accent/50 hover:bg-accent-muted"
            >
              Get in Touch
            </a>
          </motion.div>

          <motion.ul
            className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {stats.map((stat) => (
              <li key={stat.label}>
                <p className="font-display text-2xl font-bold text-accent sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-muted sm:text-sm">
                  {stat.label}
                </p>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          className="order-1 flex justify-center lg:order-2"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent/40 via-accent-soft/20 to-transparent blur-sm" />

            <div className="relative">
              {/* Snake Border */}
              <div className="absolute -inset-[2px] overflow-hidden rounded-[2rem]">
                <motion.div
                  className="absolute h-40 w-40 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-amber-300 blur-xl"
                  animate={{
                    top: [
                      "-20%",
                      "-20%",
                      "80%",
                      "80%",
                      "-20%",
                    ],
                    left: [
                      "-20%",
                      "80%",
                      "80%",
                      "-20%",
                      "-20%",
                    ],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>

              {/* Glow */}
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent/40 via-accent-soft/20 to-transparent blur-sm" />

              {/* Image */}
              <div className="relative aspect-[4/5] w-64 overflow-hidden rounded-[1.75rem] border border-border bg-surface-elevated sm:w-72 lg:w-80">
                {!imgError ? (
                  <Image
                    src="/profile.jpeg"
                    alt="Midhun Krishna — Graphic Designer"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 256px, 320px"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <motion.div
                    className="flex h-full flex-col items-center justify-center gap-3 bg-surface-elevated p-6 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <span className="font-display text-5xl font-bold text-accent">
                      MK
                    </span>
                  </motion.div>
                )}
              </div>
            </div>

            <motion.div
              className="absolute -bottom-4 -right-4 overflow-hidden rounded-2xl border border-border bg-surface px-4 py-3 card-glow"

              initial={{ opacity: 0, y: 12 }}
              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                delay: 0.9,
              }}
            >
              {/* Snake Animation */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                
                {/* Snake 1 */}
                <motion.div
                  className="absolute h-20 w-20 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-amber-300 blur-lg"
                  animate={{
                    top: ["-30%", "-30%", "100%", "100%", "-30%"],
                    left: ["70%", "100%", "100%", "-30%", "70%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Snake 2 */}
                <motion.div
                  className="absolute h-20 w-20 rounded-full bg-gradient-to-r from-orange-400 via-yellow-300 to-amber-500 blur-lg"
                  animate={{
                    top: ["100%", "100%", "-30%", "-30%", "100%"],
                    left: ["-30%", "100%", "100%", "-30%", "-30%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <p className="text-xs text-muted">
                  Specializing in
                </p>

                <p className="font-display text-sm font-semibold">
                  Visual Design
                </p>
              </div>
            </motion.div>

          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
