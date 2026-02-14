"use client"

import { useEffect, useRef, useState } from "react"

interface TransparentLogoProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
}

export function TransparentLogo({
  src,
  alt,
  className = "",
  width,
  height,
}: TransparentLogoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dataUrl, setDataUrl] = useState<string | null>(null)
  const [dimensions, setDimensions] = useState({ w: 0, h: 0 })

  useEffect(() => {
    const img = new Image()
    img.crossOrigin = "anonymous"
    img.onload = () => {
      const canvas = canvasRef.current
      if (!canvas) return

      canvas.width = img.naturalWidth
      canvas.height = img.naturalHeight
      setDimensions({ w: img.naturalWidth, h: img.naturalHeight })

      const ctx = canvas.getContext("2d")
      if (!ctx) return

      ctx.drawImage(img, 0, 0)
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const data = imageData.data

      // Sample background color from corner pixels
      const bgR = data[0]
      const bgG = data[1]
      const bgB = data[2]

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i]
        const g = data[i + 1]
        const b = data[i + 2]

        // Calculate color distance from background
        const dist = Math.sqrt(
          (r - bgR) ** 2 + (g - bgG) ** 2 + (b - bgB) ** 2
        )

        // Threshold-based transparency with smooth anti-aliased edge
        const threshold = 45
        const feather = 30

        if (dist < threshold) {
          // Fully transparent for near-background pixels
          data[i + 3] = 0
        } else if (dist < threshold + feather) {
          // Smooth feathering zone for anti-aliased edges
          const alpha = ((dist - threshold) / feather) * 255
          data[i + 3] = Math.round(alpha)
        }
        // else: keep original alpha (fully opaque)
      }

      ctx.putImageData(imageData, 0, 0)
      setDataUrl(canvas.toDataURL("image/png"))
    }
    img.src = src
  }, [src])

  return (
    <>
      <canvas ref={canvasRef} className="hidden" aria-hidden="true" />
      {dataUrl ? (
        <img
          src={dataUrl}
          alt={alt}
          width={width || dimensions.w}
          height={height || dimensions.h}
          className={className}
          draggable={false}
        />
      ) : (
        // Invisible placeholder to prevent layout shift
        <div
          className={className}
          style={{ width: width || "auto", height: height || "auto" }}
          aria-hidden="true"
        />
      )}
    </>
  )
}
