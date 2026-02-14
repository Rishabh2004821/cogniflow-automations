"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"
import { GlassCard } from "./glass-card"

const comparisons = [
  {
    before: "Limited by time, capacity, and consistency",
    after: "Operates continuously without fatigue",
  },
  {
    before: "Delayed responses to enquiries",
    after: "Instant, contextual engagement",
  },
  {
    before: "Constrained to dozens of conversations",
    after: "Scalable to thousands simultaneously",
  },
  {
    before: "Large calling teams required",
    after: "Reduced dependency on headcount",
  },
  {
    before: "Variable quality across interactions",
    after: "Structured, data-driven communication",
  },
]

export function AIShiftSection() {
  return (
    <section id="capabilities" className="relative px-6 py-32">
      {/* Subtle divider line */}
      <div className="absolute left-1/2 top-0 h-px w-1/3 -translate-x-1/2 bg-border/50" />

      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="The Transition"
          title="From Manual Outreach to Autonomous Communication"
          description="The limitations of human-dependent communication are well understood. Cogniflow addresses these constraints with AI agents that deliver consistency, scale, and precision."
        />

        <div className="mt-16 space-y-3">
          {comparisons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <GlassCard className="p-4 md:p-5" delay={0}>
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
                  <div className="flex flex-1 items-center gap-3">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/40" />
                    <span className="text-sm text-muted-foreground line-through decoration-muted-foreground/30">
                      {item.before}
                    </span>
                  </div>
                  <div className="hidden h-px w-8 bg-primary/30 md:block" />
                  <div className="flex flex-1 items-center gap-3">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm font-medium text-foreground">
                      {item.after}
                    </span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
