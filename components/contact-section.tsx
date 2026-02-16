"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"
import { Mail, Phone, MapPin, Globe } from "lucide-react"

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "contactcogniflowautomations.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8638 398 943",
  },
  {
    icon: MapPin,
    label: "Bengaluru, Karnataka",
    value: "peenya 2nd stage",
  },
 {
  icon: Linkedin,
  label: "LinkedIn",
  value: "https://www.linkedin.com/company/cogniflow-automations",
},
]

export function ContactSection() {
  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="absolute left-1/2 top-0 h-px w-1/3 -translate-x-1/2 bg-border/50" />

      <div className="mx-auto max-w-3xl">
        <SectionHeading
          label="Reach Out"
          title="Get in Touch"
          description="We are always open to meaningful conversations about the future of autonomous communication."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {contactItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <div className="pointer-events-none flex cursor-default select-none items-center gap-4 rounded-2xl border border-glass-border bg-glass/40 p-5 backdrop-blur-xl">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground">
                    {item.label}
                  </span>
                  <p className="text-sm font-medium text-foreground">
                    {item.value}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
