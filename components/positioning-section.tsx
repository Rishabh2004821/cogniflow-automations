"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"

const pillars = [
  "Independent AI startup",
  "Focused on scalable automation",
  "Built for modern organizations",
  "Long-term innovation roadmap",
]

export function PositioningSection() {
  return (
    <section className="relative px-6 py-32">
      <div className="absolute left-1/2 top-0 h-px w-1/3 -translate-x-1/2 bg-border/50" />

      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading
          label="Who We Are"
          title="An Independent AI Startup"
          description="Cogniflow is building the transition from human-dependent communication to autonomous AI-driven operations. We are committed to long-term innovation, not short-term hype."
        />

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {pillars.map((pillar, i) => (
            <motion.span
              key={pillar}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-full border border-glass-border bg-glass/60 px-5 py-2.5 text-sm text-muted-foreground backdrop-blur-xl"
            >
              {pillar}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
