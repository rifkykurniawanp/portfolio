"use client"
import { useEffect, useRef, useState, useCallback } from "react"
import { motion } from "motion/react"

interface FocusRect {
  x: number
  y: number
  width: number
  height: number
}

interface TrueFocusProps {
  sentence?: string
  separator?: string
  manualMode?: boolean
  blurAmount?: number
  borderColor?: string
  glowColor?: string
  animationDuration?: number
  pauseBetweenAnimations?: number
  fontSize?: string
  fontWeight?: string
  className?: string
}

const CORNER_POSITIONS = [
  { top: true, left: true, borderRight: false, borderBottom: false },
  { top: true, left: false, borderLeft: false, borderBottom: false },
  { top: false, left: true, borderRight: false, borderTop: false },
  { top: false, left: false, borderLeft: false, borderTop: false },
] as const

function FocusCorner({ top, left, borderRight, borderBottom, borderLeft, borderTop, color }: {
  top: boolean; left: boolean
  borderRight?: boolean; borderBottom?: boolean
  borderLeft?: boolean; borderTop?: boolean
  color: string
}) {
  const posClass = [
    top ? "top-[-10px]" : "bottom-[-10px]",
    left ? "left-[-10px]" : "right-[-10px]",
    borderRight === false ? "border-r-0" : "",
    borderBottom === false ? "border-b-0" : "",
    borderLeft === false ? "border-l-0" : "",
    borderTop === false ? "border-t-0" : "",
  ].filter(Boolean).join(" ")

  return (
    <span
      className={`absolute w-4 h-4 border-[3px] rounded-[3px] ${posClass}`}
      style={{ borderColor: color, filter: `drop-shadow(0 0 4px ${color})` }}
    />
  )
}

export default function TrueFocus({
  sentence = "True Focus",
  separator = " ",
  manualMode = false,
  blurAmount = 5,
  borderColor = "green",
  animationDuration = 0.5,
  pauseBetweenAnimations = 1,
  fontSize = "3rem",
  fontWeight = "900",
  className = "",
}: TrueFocusProps) {
  const words = sentence.split(separator)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [focusRect, setFocusRect] = useState<FocusRect>({ x: 0, y: 0, width: 0, height: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([])
  // Cache semua rect — hitung sekali, bukan tiap cycle
  const rectsCache = useRef<FocusRect[]>([])

  const computeRects = useCallback(() => {
    const container = containerRef.current
    if (!container) return
    const parentRect = container.getBoundingClientRect()
    rectsCache.current = wordRefs.current.map((el) => {
      if (!el) return { x: 0, y: 0, width: 0, height: 0 }
      const r = el.getBoundingClientRect()
      return { x: r.left - parentRect.left, y: r.top - parentRect.top, width: r.width, height: r.height }
    })
    // Update rect untuk index aktif
    if (rectsCache.current[currentIndex]) {
      setFocusRect(rectsCache.current[currentIndex])
    }
  }, [currentIndex])

  // Hitung rect sekali saat mount + saat resize saja
  useEffect(() => {
    computeRects()
    const observer = new ResizeObserver(computeRects)
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [computeRects])

  // Update focusRect dari cache saat index berubah — tidak trigger reflow
  useEffect(() => {
    if (rectsCache.current[currentIndex]) {
      setFocusRect(rectsCache.current[currentIndex])
    }
  }, [currentIndex])

  // Auto-cycle
  useEffect(() => {
    if (manualMode) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length)
    }, (animationDuration + pauseBetweenAnimations) * 1000)
    return () => clearInterval(interval)
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length])

  return (
    <div
      ref={containerRef}
      className={`relative flex gap-4 justify-center items-center flex-wrap select-none ${className}`}
    >
      {words.map((word, index) => (
        <span
          key={index}
          ref={(el) => { wordRefs.current[index] = el }}
          className="relative cursor-pointer"
          style={{
            fontSize,
            fontWeight,
            filter: index === currentIndex ? "blur(0px)" : `blur(${blurAmount}px)`,
            transition: `filter ${animationDuration}s ease`,
          }}
          onMouseEnter={() => manualMode && setCurrentIndex(index)}
        >
          {word}
        </span>
      ))}

      <motion.div
        className="absolute top-0 left-0 pointer-events-none"
        animate={{ x: focusRect.x, y: focusRect.y, width: focusRect.width, height: focusRect.height, opacity: 1 }}
        transition={{ duration: animationDuration }}
      >
        {CORNER_POSITIONS.map((pos, i) => (
          <FocusCorner key={i} {...pos} color={borderColor} />
        ))}
      </motion.div>
    </div>
  )
}