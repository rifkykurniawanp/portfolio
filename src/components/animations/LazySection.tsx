"use client"

import { useEffect, useRef, useState } from "react"

interface LazySectionProps {
  children: React.ReactNode
  rootMargin?: string
}

export default function LazySection({
  children,
  rootMargin = "200px",
}: LazySectionProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [rootMargin])

  return <div ref={ref}>{isVisible ? children : null}</div>
}