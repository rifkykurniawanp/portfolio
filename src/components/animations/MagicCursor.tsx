"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

const GLOW_COLOR = "132,0,255"

export default function MagicCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power3.out"
      })
    }

    const clickRipple = (e: MouseEvent) => {
      const ripple = document.createElement("div")

      ripple.style.cssText = `
        position: fixed;
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
        transform:translate(-50%,-50%);
        z-index:9999;
      `

      document.body.appendChild(ripple)

      gsap.fromTo(
        ripple,
        {
          scale: 0,
          opacity: 1
        },
        {
          scale: 6,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          onComplete: () => ripple.remove()
        }
      )
    }

    const particle = (x: number, y: number) => {
      const el = document.createElement("div")

      el.style.cssText = `
        position:fixed;
        width:4px;
        height:4px;
        border-radius:50%;
        pointer-events:none;
        background:rgba(${GLOW_COLOR},1);
        box-shadow:0 0 8px rgba(${GLOW_COLOR},0.8);
        left:${x}px;
        top:${y}px;
        z-index:9999;
      `

      document.body.appendChild(el)

      gsap.to(el, {
        x: (Math.random() - 0.5) * 40,
        y: (Math.random() - 0.5) * 40,
        opacity: 0,
        duration: 0.8,
        onComplete: () => el.remove()
      })
    }

    const moveParticles = (e: MouseEvent) => {
      if (Math.random() < 0.25) {
        particle(e.clientX, e.clientY)
      }
    }

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mousemove", moveParticles)
    window.addEventListener("click", clickRipple)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mousemove", moveParticles)
      window.removeEventListener("click", clickRipple)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none"
      style={{
        background: `radial-gradient(circle, rgba(${GLOW_COLOR},0.9) 0%, rgba(${GLOW_COLOR},0.3) 40%, transparent 70%)`,
        transform: "translate(-50%, -50%)",
        zIndex: 9999
      }}
    />
  )
}