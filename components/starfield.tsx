"use client"

import { useEffect, useRef } from "react"

export function Starfield() {
  const canvasRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = canvasRef.current
    if (!container) return

    const leafCount = 40
    const leaves: HTMLDivElement[] = []

    for (let i = 0; i < leafCount; i++) {
      const leaf = document.createElement("div")
      leaf.className = "leaf"
      leaf.style.left = `${Math.random() * 100}%`
      leaf.style.top = `${Math.random() * -20}%`
      leaf.style.animationDuration = `${Math.random() * 15 + 10}s`
      leaf.style.animationDelay = `${Math.random() * 5}s`

      const colors = [
        "oklch(0.52 0.09 145)", // forest green
        "oklch(0.60 0.10 130)", // lighter green
        "oklch(0.45 0.08 45)", // brown
        "oklch(0.65 0.12 115)", // lime green
      ]
      leaf.style.color = colors[Math.floor(Math.random() * colors.length)]

      container.appendChild(leaf)
      leaves.push(leaf)
    }

    return () => {
      leaves.forEach((leaf) => leaf.remove())
    }
  }, [])

  return <div ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true" />
}
