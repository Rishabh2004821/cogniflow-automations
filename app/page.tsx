"use client"

import { CursorGlow } from "@/components/cursor-glow"
import { ParticleField } from "@/components/particle-field"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { OverviewSection } from "@/components/overview-section"
import { AIShiftSection } from "@/components/ai-shift-section"
import { EfficiencySection } from "@/components/efficiency-section"
import { FutureVisionSection } from "@/components/future-vision-section"
import { WorkflowSection } from "@/components/workflow-section"
import { IndustrySection } from "@/components/industry-section"
import { PositioningSection } from "@/components/positioning-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <>
      <ParticleField />
      <CursorGlow />
      <Navbar />
      <main>
        <HeroSection />
        <OverviewSection />
        <AIShiftSection />
        <EfficiencySection />
        <FutureVisionSection />
        <WorkflowSection />
        <IndustrySection />
        <PositioningSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
