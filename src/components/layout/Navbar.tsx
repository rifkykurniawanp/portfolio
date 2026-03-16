"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { usePathname } from "next/navigation"
import { NavItem } from "@/types"
import MobileMenu from "./MobileMenu"
import { cn } from "@/lib/utils"

type Props = {
  name: string
  items: NavItem[]
}

function useActiveSection(items: NavItem[], enabled: boolean) {
  const [active, setActive] = useState("")

  useEffect(() => {
    if (!enabled) return

    let ticking = false

    const updateActive = () => {
      const scrollY = window.scrollY
      items.forEach((item) => {
        const id = item.href.replace("#", "")
        const section = document.getElementById(id)
        if (!section) return

        const { offsetTop, offsetHeight } = section
        if (scrollY >= offsetTop - 150 && scrollY < offsetTop + offsetHeight - 150) {
          setActive(id)
        }
      })
    }

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActive()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    updateActive()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [items, enabled])

  return active
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return <div className="w-8 h-8" />

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className={cn(
        "relative w-8 h-8 rounded-lg flex items-center justify-center",
        "text-muted-foreground hover:text-foreground",
        "hover:bg-muted transition-all duration-200",
        "border border-transparent hover:border-border",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5227FF]"
      )}
    >
      <Sun size={15} className="absolute transition-all duration-300 rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
      <Moon size={15} className="absolute transition-all duration-300 rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
    </button>
  )
}

export default function Navbar({ name, items }: Props) {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const active = useActiveSection(items, isHome)
  const [open, setOpen] = useState(false)

  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) {
    const id = item.href.replace("#", "")

    if (isHome) {
      e.preventDefault()
      // Push hash ke history agar hashchange ter-trigger
      // tanpa reload halaman — animasi tetap jalan
      history.pushState(null, "", `#${id}`)
      window.dispatchEvent(new HashChangeEvent("hashchange"))
    }
    // Dari page luar: biarkan Link navigate normal ke /#id
    // LazySection akan force render, HashScrollHandler akan scroll
  }

  return (
    <nav
      aria-label="Main navigation"
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        "border-b border-border",
        "bg-background/70 backdrop-blur-sm"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link href="/" className="font-bold text-lg tracking-tighter text-foreground hover:opacity-70 transition">
          {name}<span className="text-[#5227FF]">.</span>
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          {items.map((item) => {
            const id = item.href.replace("#", "")
            const isActive = isHome && active === id
            const href = isHome ? item.href : `/${item.href}`

            return (
              <div key={item.label} className="relative">
                <Link
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={(e) => handleNavClick(e, item)}
                  className={cn(
                    "text-sm font-medium transition-colors duration-200",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5227FF] rounded-sm",
                    isActive ? "text-[#5227FF]" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>

                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -left-1 -right-1 -bottom-5 h-[3px] bg-[#5227FF] rounded-t-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </div>
            )
          })}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className={cn(
              "md:hidden p-2 text-muted-foreground hover:text-[#5227FF]",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5227FF]"
            )}
          >
            <div className="w-6 h-5 flex flex-col justify-between items-end">
              <span className={cn("h-[2px] bg-current rounded-full transition-all duration-300", open ? "w-6 translate-y-[9px] rotate-45" : "w-6")} />
              <span className={cn("h-[2px] bg-current rounded-full transition-all duration-300", open ? "opacity-0" : "w-4")} />
              <span className={cn("h-[2px] bg-current rounded-full transition-all duration-300", open ? "w-6 -translate-y-[9px] -rotate-45" : "w-5")} />
            </div>
          </button>
        </div>

      </div>

      {open && <MobileMenu items={items} close={() => setOpen(false)} />}
    </nav>
  )
}