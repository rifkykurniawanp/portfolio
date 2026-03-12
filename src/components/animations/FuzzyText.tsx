 "use client"

import React, { useEffect, useRef } from "react"

interface FuzzyTextProps {
  children: React.ReactNode
  fontSize?: number | string
  fontWeight?: string | number
  fontFamily?: string
  color?: string
  enableHover?: boolean
  baseIntensity?: number
  hoverIntensity?: number
  fuzzRange?: number
  fps?: number
  direction?: "horizontal" | "vertical" | "both"
  gradient?: string[] | null
  letterSpacing?: number
  className?: string
}

export default function FuzzyText({
  children,
  fontSize = "clamp(2rem, 8vw, 8rem)",
  fontWeight = 900,
  fontFamily = "inherit",
  color = "currentColor",
  enableHover = true,
  baseIntensity = 0.18,
  hoverIntensity = 0.5,
  fuzzRange = 30,
  fps = 60,
  direction = "horizontal",
  gradient = null,
  letterSpacing = 0,
  className = "",
}: FuzzyTextProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrame: number
    let hovering = false
    let intensity = baseIntensity

    const text = React.Children.toArray(children).join("")

    const computedFont =
      fontFamily === "inherit"
        ? window.getComputedStyle(canvas).fontFamily
        : fontFamily

    const fontSizeStr = typeof fontSize === "number" ? `${fontSize}px` : fontSize

    const font = `${fontWeight} ${fontSizeStr} ${computedFont}`

    ctx.font = font
    ctx.textBaseline = "alphabetic"

    const metrics = ctx.measureText(text)

    const width = Math.ceil(metrics.width + fuzzRange * 2)
    const height = Math.ceil(
      (metrics.actualBoundingBoxAscent || 80) +
        (metrics.actualBoundingBoxDescent || 20) +
        fuzzRange
    )

    canvas.width = width
    canvas.height = height

    const offscreen = document.createElement("canvas")
    const offCtx = offscreen.getContext("2d")!

    offscreen.width = width
    offscreen.height = height

    offCtx.font = font
    offCtx.textBaseline = "alphabetic"

    if (gradient && gradient.length >= 2) {
      const grad = offCtx.createLinearGradient(0, 0, width, 0)

      gradient.forEach((c, i) =>
        grad.addColorStop(i / (gradient.length - 1), c)
      )

      offCtx.fillStyle = grad
    } else {
      offCtx.fillStyle = color
    }

    offCtx.fillText(text, fuzzRange, height - fuzzRange)

    let lastFrame = 0
    const frameTime = 1000 / fps

    const render = (time: number) => {
      if (time - lastFrame < frameTime) {
        animationFrame = requestAnimationFrame(render)
        return
      }

      lastFrame = time

      ctx.clearRect(0, 0, width, height)

      const target = hovering ? hoverIntensity : baseIntensity
      intensity += (target - intensity) * 0.08

      for (let y = 0; y < height; y++) {
        let dx = 0
        let dy = 0

        if (direction === "horizontal" || direction === "both") {
          dx = Math.random() * fuzzRange * intensity - fuzzRange / 2
        }

        if (direction === "vertical" || direction === "both") {
          dy = Math.random() * fuzzRange * intensity - fuzzRange / 2
        }

        ctx.drawImage(offscreen, 0, y, width, 1, dx, y + dy, width, 1)
      }

      animationFrame = requestAnimationFrame(render)
    }

    animationFrame = requestAnimationFrame(render)

    const onMove = () => {
      hovering = true
    }

    const onLeave = () => {
      hovering = false
    }

    if (enableHover) {
      canvas.addEventListener("mouseenter", onMove)
      canvas.addEventListener("mouseleave", onLeave)
    }

    return () => {
      cancelAnimationFrame(animationFrame)

      if (enableHover) {
        canvas.removeEventListener("mouseenter", onMove)
        canvas.removeEventListener("mouseleave", onLeave)
      }
    }
  }, [
    children,
    fontSize,
    fontWeight,
    fontFamily,
    color,
    enableHover,
    baseIntensity,
    hoverIntensity,
    fuzzRange,
    fps,
    direction,
    gradient,
    letterSpacing,
  ])

  return <canvas ref={canvasRef} className={className} />
}