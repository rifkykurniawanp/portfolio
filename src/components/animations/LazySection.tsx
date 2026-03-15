"use client"
import { useEffect, useRef, useState } from "react"

interface LazySectionProps {
  children: React.ReactNode
  rootMargin?: string
  // Berikan estimasi tinggi section agar tidak ada layout shift saat mount
  minHeight?: string
}

export default function LazySection({
  children,
  rootMargin = "300px", // lebih besar agar load lebih awal, scroll terasa mulus
  minHeight = "400px",
}: LazySectionProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
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
      // Placeholder height mencegah layout reflow saat konten dimuat
      style={!isVisible ? { minHeight } : undefined}
    >
      {isVisible ? children : null}
    </div>
  )
}