"use client"

import { useEffect, useState, memo } from "react"
import { LifeLine } from "react-loading-indicators"

function PageLoader() {
  const [visible, setVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true)

      const remove = setTimeout(() => {
        setVisible(false)
      }, 300)

      return () => clearTimeout(remove)
    }, 600) // lebih cepat & UX friendly

    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-50 pointer-events-none flex items-center justify-center bg-white dark:bg-neutral-950 transition-opacity duration-300 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6 select-none">
        <LifeLine color="#4f46e5" size="large" />
        <p className="text-xs tracking-[0.35em] text-indigo-500 animate-pulse">
          LOADING
        </p>
        <div className="w-40 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent dark:via-indigo-700" />
      </div>
    </div>
  )
}

export default memo(PageLoader)