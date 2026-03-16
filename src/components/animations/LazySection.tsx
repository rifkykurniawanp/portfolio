"use client"
import { useEffect, useRef, useState } from "react"

interface LazySectionProps {
  children: React.ReactNode
  rootMargin?: string
  minHeight?: string
  sectionId?: string // tambah prop ini untuk deteksi hash
}

export default function LazySection({
  children,
  rootMargin = "300px",
  minHeight = "400px",
  sectionId,
}: LazySectionProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Force render kalau hash di URL cocok dengan section ini
    if (sectionId) {
      const hash = window.location.hash.replace("#", "")
      if (hash === sectionId) {
        setIsVisible(true)
        return
      }
    }

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin, sectionId])

  return (
    <div
      ref={ref}
      style={!isVisible ? { minHeight } : undefined}
    >
      {isVisible ? children : null}
    </div>
  )
}