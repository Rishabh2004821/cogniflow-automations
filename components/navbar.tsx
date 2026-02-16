"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { FiMenu, FiX } from "react-icons/fi"
import LogoImage2 from "@/public/images/logo-3.webp"

const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Vision", href: "#vision" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-glass-border/50 bg-background/70 backdrop-blur-xl"
    >
      <nav className="mx-2 md:mx-6 lg:mx-10 flex max-w-full items-center justify-between px-4 sm:px-6 lg:px-8 py-4">

        {/* Logo */}
        <Image
          alt="Logo"
          src={LogoImage2}
          className="w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px]"
          priority
        />

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-xl"
          >
            <ul className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
