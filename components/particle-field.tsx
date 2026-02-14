"use client"

import { useEffect, useRef, useCallback } from "react"

interface Particle {
  x: number
  y: number
  baseX: number
  baseY: number
  vx: number
  vy: number
  radius: number
  opacity: number
  baseOpacity: number
}

const PARTICLE_COUNT = 80
const CURSOR_RADIUS = 180
const REPEL_STRENGTH = 0.08
const RETURN_STRENGTH = 0.02
const DAMPING = 0.92
const LINE_DISTANCE = 120

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const particlesRef = useRef<Particle[]>([])
  const rafRef = useRef<number>(0)

  const initParticles = useCallback((w: number, h: number) => {
    const particles: Particle[] = []
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = Math.random() * w
      const y = Math.random() * h
      const baseOpacity = 0.15 + Math.random() * 0.25
      particles.push({
        x,
        y,
        baseX: x,
        baseY: y,
        vx: 0,
        vy: 0,
        radius: 1 + Math.random() * 1.5,
        opacity: baseOpacity,
        baseOpacity,
      })
    }
    particlesRef.current = particles
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      initParticles(window.innerWidth, window.innerHeight)
    }

    resize()
    window.addEventListener("resize", resize)

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener("mousemove", handleMouseMove)

    const handleMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 }
    }
    document.addEventListener("mouseleave", handleMouseLeave)

    const animate = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      ctx.clearRect(0, 0, w, h)

      const { x: mx, y: my } = mouseRef.current
      const particles = particlesRef.current

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Cursor repulsion
        const dxMouse = p.x - mx
        const dyMouse = p.y - my
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse)

        if (distMouse < CURSOR_RADIUS && distMouse > 0) {
          const force = (1 - distMouse / CURSOR_RADIUS) * REPEL_STRENGTH
          p.vx += (dxMouse / distMouse) * force * 10
          p.vy += (dyMouse / distMouse) * force * 10
          p.opacity = Math.min(1, p.baseOpacity + (1 - distMouse / CURSOR_RADIUS) * 0.6)
        } else {
          p.opacity += (p.baseOpacity - p.opacity) * 0.05
        }

        // Return to base
        p.vx += (p.baseX - p.x) * RETURN_STRENGTH
        p.vy += (p.baseY - p.y) * RETURN_STRENGTH

        // Apply velocity
        p.vx *= DAMPING
        p.vy *= DAMPING
        p.x += p.vx
        p.y += p.vy

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(199, 89%, 65%, ${p.opacity})`
        ctx.fill()
      }

      // Draw connecting lines between nearby particles near cursor
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]
        const daMouseX = a.x - mx
        const daMouseY = a.y - my
        const daMouseDist = Math.sqrt(daMouseX * daMouseX + daMouseY * daMouseY)
        if (daMouseDist > CURSOR_RADIUS * 1.5) continue

        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < LINE_DISTANCE) {
            const lineOpacity = (1 - dist / LINE_DISTANCE) * 0.15
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `hsla(199, 89%, 65%, ${lineOpacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [initParticles])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  )
}
