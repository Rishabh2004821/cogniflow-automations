"use client"

import { motion } from "framer-motion"
import { TransparentLogo } from "@/components/transparent-logo"

const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Vision", href: "#vision" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed left-0 right-0 top-0 z-40 border-b border-glass-border/50 bg-background/70 backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center">
          <TransparentLogo
            src="/images/cogniflow-logo.jpg"
            alt="Cogniflow Logo"
            className="h-9 w-auto object-contain"
          />
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}
