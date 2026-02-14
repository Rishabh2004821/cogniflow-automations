"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface GlassCardProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function GlassCard({ children, className, delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(
        "rounded-2xl border border-glass-border bg-glass/60 p-6 backdrop-blur-xl",
        "transition-all duration-300 hover:border-primary/20 hover:shadow-[0_0_30px_-10px_hsl(199_89%_60%/0.15)]",
        className
      )}
    >
      {children}
    </motion.div>
  )
}
