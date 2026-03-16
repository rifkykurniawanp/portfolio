"use client"

import { useEffect, useRef, useState } from "react"

interface LazySectionProps {
  children: React.ReactNode
  rootMargin?: string
  minHeight?: string
}

export default function LazySection({
  children,
  rootMargin = "300px",
  minHeight = "400px",
}: LazySectionProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (window.location.hash) {
      setIsVisible(true)
      return
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
  }, [rootMargin])

  return (
    <div
      ref={ref}
      style={!isVisible ? { minHeight } : undefined}
    >
      {isVisible ? children : null}
    </div>
  )
}