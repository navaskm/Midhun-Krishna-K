"use client";

import { motion } from "motion/react";
import { services } from "@/data/portfolio";

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-9xl px-5 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Services
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            What I can create for you
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              className="relative overflow-hidden border border-border bg-surface p-6 md:p-9 lg:p-12 2xl:p-20 card-glow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >

              <img src={service.img} alt="" className="absolute inset-0 h-full w-full object-cover opacity-15" />

              <span className="font-display text-3xl font-bold text-accent/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold z-10">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
