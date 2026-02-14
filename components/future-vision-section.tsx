"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"
import {
  Headphones,
  Megaphone,
  Network,
  Bot,
  BrainCircuit,
  MessageSquare,
} from "lucide-react"

const visionItems = [
  {
    icon: Headphones,
    label: "Customer Support Automation",
  },
  {
    icon: Megaphone,
    label: "Sales Outreach Agents",
  },
  {
    icon: Network,
    label: "Workflow Orchestration",
  },
  {
    icon: Bot,
    label: "Internal Operational Assistants",
  },
  {
    icon: BrainCircuit,
    label: "Decision-Support Systems",
  },
  {
    icon: MessageSquare,
    label: "Voice + Text Unified Agents",
  },
]

export function FutureVisionSection() {
  return (
    <section id="vision" className="relative px-6 py-32">
      <div className="absolute left-1/2 top-0 h-px w-1/3 -translate-x-1/2 bg-border/50" />

      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="The Road Ahead"
          title="Beyond Calling — Autonomous Business Workflows"
          description="Cogniflow is building long-term AI infrastructure, not just a tool. Our vision extends to a comprehensive suite of autonomous agents that handle the full spectrum of business operations."
        />

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3">
          {visionItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group flex flex-col items-center rounded-2xl border border-glass-border bg-glass/40 p-6 text-center backdrop-blur-xl transition-all duration-300 hover:border-primary/20 hover:bg-glass/60"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/15">
                <item.icon className="h-5 w-5" />
              </div>
              <span className="mt-4 text-sm font-medium text-foreground">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
