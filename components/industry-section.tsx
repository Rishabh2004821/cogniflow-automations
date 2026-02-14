"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"
import {
  GraduationCap,
  Heart,
  Landmark,
  ShoppingBag,
  Truck,
  Building,
} from "lucide-react"

const industries = [
  { icon: GraduationCap, label: "Education" },
  { icon: Heart, label: "Healthcare" },
  { icon: Landmark, label: "Finance" },
  { icon: ShoppingBag, label: "E-commerce" },
  { icon: Truck, label: "Logistics" },
  { icon: Building, label: "Public Services" },
]

export function IndustrySection() {
  return (
    <section id="industries" className="relative px-6 py-32">
      <div className="absolute left-1/2 top-0 h-px w-1/3 -translate-x-1/2 bg-border/50" />

      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="Applicability"
          title="Built for the Industries That Matter"
          description="Cogniflow's architecture is designed to serve sectors where communication volume and operational complexity demand intelligent automation."
        />

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {industries.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.4,
                delay: i * 0.06,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group flex flex-col items-center rounded-2xl border border-glass-border bg-glass/40 p-5 backdrop-blur-xl transition-all duration-300 hover:border-primary/20 hover:bg-glass/60"
            >
              <item.icon className="h-6 w-6 text-muted-foreground transition-colors duration-300 group-hover:text-primary" />
              <span className="mt-3 text-xs font-medium text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
