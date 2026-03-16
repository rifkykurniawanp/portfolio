"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import MagicCursor from "@/components/animations/MagicCursor"
import PageLoader from "@/components/animations/PageLoader"
import { Toaster } from "sonner"

function HashScrollHandler() {
  const pathname = usePathname()

  useEffect(() => {
    const hash = window.location.hash
    if (!hash) return

    const id = hash.replace("#", "")
    let attempts = 0
    const maxAttempts = 20

    const interval = setInterval(() => {
      const el = document.getElementById(id)
      attempts++

      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
        clearInterval(interval)
      }

      if (attempts >= maxAttempts) clearInterval(interval)
    }, 100)

    return () => clearInterval(interval)
  }, [pathname])

  return null
}

export default function ClientProviders() {
  return (
    <>
      <Toaster position="top-right" richColors />
      <MagicCursor />
      <PageLoader />
      <HashScrollHandler />
    </>
  )
}