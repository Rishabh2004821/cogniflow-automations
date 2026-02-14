"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"

const workflowSteps = [
  {
    number: "01",
    title: "Seamless Coordination",
    description:
      "AI agents integrate directly into existing processes, working alongside current systems without disruption.",
  },
  {
    number: "02",
    title: "Structured Task Handling",
    description:
      "Every interaction follows defined protocols, ensuring consistent outcomes and compliance with organizational standards.",
  },
  {
    number: "03",
    title: "Real-Time Feedback",
    description:
      "Continuous data feedback loops provide actionable insights, enabling informed decisions at every level of operation.",
  },
  {
    number: "04",
    title: "Continuous Improvement",
    description:
      "Analytics-driven optimization ensures that performance improves over time, adapting to evolving requirements.",
  },
]

export function WorkflowSection() {
  return (
    <section className="relative px-6 py-32">
      <div className="absolute left-1/2 top-0 h-px w-1/3 -translate-x-1/2 bg-border/50" />

      <div className="mx-auto max-w-4xl">
        <SectionHeading
          label="Operational Integration"
          title="AI That Works Within Your Operations"
          description="Rather than replacing workflows, Cogniflow enhances them. Our approach ensures that AI integrates naturally into the way organizations already operate."
        />

        <div className="mt-16 space-y-6">
          {workflowSteps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group flex gap-6 rounded-2xl border border-glass-border bg-glass/40 p-6 backdrop-blur-xl transition-all duration-300 hover:border-primary/20"
            >
              <span className="shrink-0 font-mono text-2xl font-bold text-primary/30 transition-colors duration-300 group-hover:text-primary/60">
                {step.number}
              </span>
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
