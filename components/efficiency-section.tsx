"use client"

import { SectionHeading } from "./section-heading"
import { GlassCard } from "./glass-card"
import { Zap, RefreshCw, TrendingUp, Clock, Target } from "lucide-react"

const efficiencyPoints = [
  {
    icon: Zap,
    title: "Faster Lead Engagement",
    description:
      "Immediate response to inbound enquiries eliminates the gap between interest and interaction, reducing opportunity loss significantly.",
  },
  {
    icon: RefreshCw,
    title: "Consistent Follow-ups",
    description:
      "Every conversation receives the same structured attention, ensuring that no lead is overlooked or mishandled due to human variability.",
  },
  {
    icon: TrendingUp,
    title: "Better Marketing ROI",
    description:
      "When marketing investments generate leads, AI agents ensure those leads are engaged promptly, maximizing the return on every campaign.",
  },
  {
    icon: Clock,
    title: "Predictable Operations",
    description:
      "Consistent output without the unpredictability of shift schedules, sick days, or capacity constraints. A reliable operational model.",
  },
  {
    icon: Target,
    title: "Resource Optimization",
    description:
      "Reallocate human talent to strategic work while AI handles the volume-intensive communication that previously required large teams.",
  },
]

export function EfficiencySection() {
  return (
    <section className="relative px-6 py-32">
      <div className="absolute left-1/2 top-0 h-px w-1/3 -translate-x-1/2 bg-border/50" />

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Operational Advantage"
          title="Efficiency at Machine Scale"
          description="Every missed or delayed interaction carries a cost. AI-driven communication ensures that organizations capture every opportunity with precision and speed."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {efficiencyPoints.map((item, i) => (
            <GlassCard key={item.title} delay={i * 0.08}>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <item.icon className="h-4 w-4" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
