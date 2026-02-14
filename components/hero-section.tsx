"use client"

import { motion } from "framer-motion"
import { TransparentLogo } from "@/components/transparent-logo"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Subtle animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-1/4 -top-1/4 h-[800px] w-[800px] rounded-full opacity-[0.03]"
          style={{
            background:
              "radial-gradient(circle, hsl(199 89% 60%) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 60, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full opacity-[0.03]"
          style={{
            background:
              "radial-gradient(circle, hsl(199 89% 60%) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(199 89% 60%) 1px, transparent 1px), linear-gradient(90deg, hsl(199 89% 60%) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Glass glow aura behind logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative mb-10"
        >
          {/* Outermost soft glow layer */}
          <div
            className="absolute left-1/2 top-1/2 -z-10 h-[280px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.06] blur-[100px] md:h-[400px] md:w-[900px]"
            style={{
              background:
                "radial-gradient(ellipse, hsl(199 89% 60%) 0%, hsl(210 80% 50%) 40%, transparent 70%)",
            }}
          />

          {/* Inner concentrated glass glow */}
          <div
            className="absolute left-1/2 top-1/2 -z-10 h-[180px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.08] blur-[60px] md:h-[260px] md:w-[680px]"
            style={{
              background:
                "radial-gradient(ellipse, hsl(199 89% 70%) 0%, hsl(199 89% 50%) 50%, transparent 80%)",
            }}
          />

          {/* Frosted glass panel behind logo */}
          <div className="absolute left-1/2 top-1/2 -z-10 h-[140px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-[hsl(199_89%_60%/0.06)] bg-[hsl(199_89%_60%/0.02)] backdrop-blur-sm md:h-[200px] md:w-[620px] lg:h-[240px] lg:w-[740px]" />

          {/* Animated subtle ring pulse */}
          <motion.div
            className="absolute left-1/2 top-1/2 -z-10 h-[160px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-[hsl(199_89%_60%/0.05)] md:h-[220px] md:w-[650px] lg:h-[260px] lg:w-[770px]"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* The logo itself */}
          <TransparentLogo
            src="/images/cogniflow-logo.jpg"
            alt="Cogniflow Logo"
            className="relative h-32 w-auto object-contain md:h-48 lg:h-56"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-2 font-mono text-sm uppercase tracking-[0.15em] text-primary md:text-base"
        >
          Autonomous Communication. Intelligent Operations.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          Building AI-driven calling agents today — evolving toward fully
          automated business workflows for tomorrow.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-12"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs tracking-widest text-muted-foreground/60">
              SCROLL
            </span>
            <div className="h-8 w-px bg-muted-foreground/20" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
