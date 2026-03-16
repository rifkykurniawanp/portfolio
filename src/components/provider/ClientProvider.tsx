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
      const el = document.getElementById(id)

      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80
        window.scrollTo({ top, behavior: "smooth" })
      }
    }

    // Delay kecil untuk tunggu paint setelah navigasi
    const timer = setTimeout(scrollToHash, 50)
    window.addEventListener("hashchange", scrollToHash)

    return () => {
      clearTimeout(timer)
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