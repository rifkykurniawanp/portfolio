"use client"

import { useEffect, useRef } from "react"

const GLOW_COLOR = "132,0,255"

export default function MagicCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const mouse = useRef({ x: 0, y: 0 })
  const raf = useRef<number | null>(null)
  const lastParticle = useRef(0)

  useEffect(() => {
    if (window.innerWidth < 768) return

    const cursor = cursorRef.current
    if (!cursor) return

    const handleMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY

      spawnParticle(e.clientX, e.clientY)
    }

    const animate = () => {
      const { x, y } = mouse.current
      cursor.style.transform = `translate(${x}px, ${y}px) translate(-50%,-50%)`
      raf.current = requestAnimationFrame(animate)
    }

    const spawnParticle = (x: number, y: number) => {
      const now = Date.now()

      if (now - lastParticle.current < 80) return
      lastParticle.current = now

      const particle = document.createElement("div")

      particle.style.cssText = `
        position:fixed;
        width:4px;
        height:4px;
        border-radius:50%;
        pointer-events:none;
        background:rgba(${GLOW_COLOR},1);
        box-shadow:0 0 8px rgba(${GLOW_COLOR},0.8);
        left:${x}px;
        top:${y}px;
        transform:translate(-50%,-50%);
        z-index:9999;
        opacity:1;
      `

      document.body.appendChild(particle)

      const dx = (Math.random() - 0.5) * 40
      const dy = (Math.random() - 0.5) * 40

      const start = performance.now()

      const animateParticle = (t: number) => {
        const progress = (t - start) / 600

        if (progress >= 1) {
          particle.remove()
          return
        }

        particle.style.transform = `translate(${dx * progress}px, ${dy * progress}px)`
        particle.style.opacity = String(1 - progress)

        requestAnimationFrame(animateParticle)
      }

      requestAnimationFrame(animateParticle)
    }

    const clickRipple = (e: MouseEvent) => {
      const ripple = document.createElement("div")

      ripple.style.cssText = `
        position:fixed;
        left:${e.clientX}px;
        top:${e.clientY}px;
        width:20px;
        height:20px;
        border-radius:50%;
        pointer-events:none;
        background: radial-gradient(circle,
        rgba(${GLOW_COLOR},0.6) 0%,
        rgba(${GLOW_COLOR},0.3) 40%,
        transparent 70%);
        transform:translate(-50%,-50%) scale(0);
        z-index:9999;
        opacity:1;
      `

      document.body.appendChild(ripple)

      const start = performance.now()

      const animateRipple = (t: number) => {
        const progress = (t - start) / 600

        if (progress >= 1) {
          ripple.remove()
          return
        }

        ripple.style.transform = `translate(-50%,-50%) scale(${6 * progress})`
        ripple.style.opacity = String(1 - progress)

        requestAnimationFrame(animateRipple)
      }

      requestAnimationFrame(animateRipple)
    }

    animate()

    window.addEventListener("mousemove", handleMove)
    window.addEventListener("click", clickRipple)

    return () => {
      window.removeEventListener("mousemove", handleMove)
      window.removeEventListener("click", clickRipple)

      if (raf.current !== null) {
  cancelAnimationFrame(raf.current)
}
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none"
      style={{
        background: `radial-gradient(circle, rgba(${GLOW_COLOR},0.9) 0%, rgba(${GLOW_COLOR},0.3) 40%, transparent 70%)`,
        zIndex: 9999,
        transform: "translate(-50%,-50%)"
      }}
    />
  )
}