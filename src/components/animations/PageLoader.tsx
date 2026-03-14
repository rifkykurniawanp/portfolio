"use client"

import { useEffect, useState } from "react"
import { LifeLine } from "react-loading-indicators"

export default function PageLoader() {
  const [loading, setLoading] = useState(true)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false) // mulai fade
      setTimeout(() => setLoading(false), 300) // tunggu fade selesai
    }, 1200) // durasi loader

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-neutral-950 transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-col items-center gap-5">
        <LifeLine color="#4f46e5" size="large" />

        <p className="text-xs tracking-[0.25em] text-indigo-500 animate-pulse">
          LOADING
        </p>

        <div className="w-40 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent dark:via-indigo-700" />
      </div>
    </div>
  )
}