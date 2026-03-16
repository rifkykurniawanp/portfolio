"use client"
import { useEffect, useRef } from "react"

const GLOW_COLOR = "132,0,255"
const PARTICLE_INTERVAL = 80
const PARTICLE_DURATION = 600

export default function MagicCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const mouse = useRef({ x: 0, y: 0 })
  const raf = useRef<number | null>(null)
  const lastParticle = useRef(0)
  // Simpan semua partikel aktif di ref, bukan DOM manipulation terpisah
  const particles = useRef<{
    el: HTMLDivElement
    dx: number
    dy: number
    start: number
  }[]>([])

  useEffect(() => {
    if (window.innerWidth < 768) return
    const cursor = cursorRef.current
    if (!cursor) return

    const handleMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY

      const now = Date.now()
      if (now - lastParticle.current < PARTICLE_INTERVAL) return
      lastParticle.current = now

      // Buat partikel tapi animasi di RAF utama — bukan RAF terpisah
      const particle = document.createElement("div")
      particle.style.cssText = `
        position:fixed;
        width:4px;height:4px;
        border-radius:50%;
        pointer-events:none;
        background:rgba(${GLOW_COLOR},1);
        box-shadow:0 0 8px rgba(${GLOW_COLOR},0.8);
        left:${e.clientX}px;top:${e.clientY}px;
        transform:translate(-50%,-50%);
        z-index:9998;
      `
      document.body.appendChild(particle)
      particles.current.push({
        el: particle,
        dx: (Math.random() - 0.5) * 40,
        dy: (Math.random() - 0.5) * 40,
        start: performance.now(),
      })
    }

    const handleClick = (e: MouseEvent) => {
      const ripple = document.createElement("div")
      ripple.style.cssText = `
        position:fixed;
        left:${e.clientX}px;top:${e.clientY}px;
        width:20px;height:20px;
        border-radius:50%;
        pointer-events:none;
        background:radial-gradient(circle,rgba(${GLOW_COLOR},0.6) 0%,rgba(${GLOW_COLOR},0.3) 40%,transparent 70%);
        transform:translate(-50%,-50%) scale(0);
        z-index:9998;
      `
      document.body.appendChild(ripple)
      particles.current.push({
        el: ripple,
        dx: 0,
        dy: 0,
        start: performance.now(),
      })
    }

    // Satu RAF loop untuk semua — cursor + semua partikel
    const loop = (now: number) => {
      // Update cursor
      cursor.style.transform = `translate(${mouse.current.x}px,${mouse.current.y}px) translate(-50%,-50%)`

      // Update semua partikel aktif dalam satu pass
      particles.current = particles.current.filter(({ el, dx, dy, start }) => {
        const progress = (now - start) / PARTICLE_DURATION
        if (progress >= 1) {
          el.remove()
          return false
        }
        // Cek apakah ripple (dx===0) atau partikel biasa
        if (dx === 0 && dy === 0) {
          el.style.transform = `translate(-50%,-50%) scale(${6 * progress})`
        } else {
          el.style.transform = `translate(${dx * progress}px,${dy * progress}px)`
        }
        el.style.opacity = String(1 - progress)
        return true
      })

      raf.current = requestAnimationFrame(loop)
    }

    raf.current = requestAnimationFrame(loop)
    window.addEventListener("mousemove", handleMove, { passive: true })
    window.addEventListener("click", handleClick)

    return () => {
      window.removeEventListener("mousemove", handleMove)
      window.removeEventListener("click", handleClick)
      if (raf.current !== null) cancelAnimationFrame(raf.current)
      // Cleanup partikel yang tersisa
      particles.current.forEach(({ el }) => el.remove())
      particles.current = []
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none"
      style={{
        background: `radial-gradient(circle,rgba(${GLOW_COLOR},0.9) 0%,rgba(${GLOW_COLOR},0.3) 40%,transparent 70%)`,
        zIndex: 9999,
        transform: "translate(-50%,-50%)",
      }}
    />
  )
}