"use client"

import { TransparentLogo } from "@/components/transparent-logo"

export function SiteFooter() {
  return (
    <footer className="border-t border-glass-border/50 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <div className="flex items-center">
          <TransparentLogo
            src="/images/cogniflow-logo.jpg"
            alt="Cogniflow Logo"
            className="h-8 w-auto object-contain"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
          <span>contact@cogniflow.ai</span>
          <span className="hidden h-3 w-px bg-border sm:block" />
          <span>+XX XXX XXX XXXX</span>
        </div>

        <p className="text-xs text-muted-foreground/60">
          {"© "}
          {new Date().getFullYear()}
          {" Cogniflow. All rights reserved."}
        </p>
      </div>
    </footer>
  )
}
