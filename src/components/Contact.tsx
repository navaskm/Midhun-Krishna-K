"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { contact } from "@/data/portfolio";

export default function Contact() {

  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "57ffb462-d483-488c-add0-fa7272e6d66c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      (event.target as HTMLFormElement).reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <section
      id="contact"
      className="border-t border-border bg-surface/40 py-24"
    >
      <div className="mx-auto max-w-9xl px-5 md:px-8 lg:px-16">
        <motion.div
          className="overflow-hidden rounded-3xl border border-border bg-canvas card-glow"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid lg:grid-cols-2">
            <div className="gradient-mesh border-b border-border p-8 sm:p-10 lg:border-b-0 lg:border-r">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Contact
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Let&apos;s create something{" "}
                <span className="text-gradient">remarkable</span>
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                Have a project in mind? Send a message and I&apos;ll get back
                to you within 24 hours.
              </p>

              <ul className="mt-8 space-y-4">
                <li>
                  <p className="text-xs uppercase tracking-wider text-muted">
                    Email
                  </p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="mt-1 inline-block font-medium text-foreground transition hover:text-accent"
                  >
                    {contact.email}
                  </a>
                </li>
                <li>
                  <p className="text-xs uppercase tracking-wider text-muted">
                    Location
                  </p>
                  <p className="mt-1 font-medium">{contact.location}</p>
                </li>
                <li>
                  <p className="text-xs uppercase tracking-wider text-muted">
                    Status
                  </p>
                  <p className="mt-1 flex items-center gap-2 font-medium">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    {contact.availability}
                  </p>
                </li>
              </ul>
            </div>

            <form
              className="flex flex-col justify-center gap-5 p-8 sm:p-10"
              onSubmit={onSubmit}
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
                  placeholder="Tell me about your project..."
                />
              </div>
              <motion.button
                type="submit"
                className="mt-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-canvas transition hover:bg-accent-soft"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
              <p className="mt-4">{result}</p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
