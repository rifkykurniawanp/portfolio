"use client"
import { useEffect } from "react"
import { usePathname } from "next/navigation"
import MagicCursor from "@/components/animations/MagicCursor"
import PageLoader from "@/components/animations/PageLoader"
import { Toaster } from "sonner"

function HashScrollHandler() {
  const pathname = usePathname()

  useEffect(() => {
    function scrollToHash() {
      const hash = window.location.hash
      if (!hash) return

      const id = hash.replace("#", "")
      let attempts = 0
      const maxAttempts = 50 // 5 detik — cukup untuk dynamic import selesai

      const interval = setInterval(() => {
        const el = document.getElementById(id)
        attempts++

        if (el) {
          // Tunggu satu frame lagi setelah element ditemukan
          // agar konten dynamic import selesai paint
          requestAnimationFrame(() => {
            const top = el.getBoundingClientRect().top + window.scrollY - 80
            window.scrollTo({ top, behavior: "smooth" })
          })
          clearInterval(interval)
          return
        }

        if (attempts >= maxAttempts) clearInterval(interval)
      }, 100)

      return () => clearInterval(interval)
    }

    const cleanup = scrollToHash()

    // Handle klik hash saat sudah di halaman yang sama
    window.addEventListener("hashchange", scrollToHash)

    return () => {
      cleanup?.()
      window.removeEventListener("hashchange", scrollToHash)
    }
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