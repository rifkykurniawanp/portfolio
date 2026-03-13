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

/* -----------------------------
   Scroll Spy Hook
------------------------------*/

function useActiveSection(items: NavItem[], enabled: boolean) {
  const [active, setActive] = useState("")

  useEffect(() => {
    if (!enabled) return

    const handleScroll = () => {
      const scrollY = window.scrollY

      items.forEach((item) => {
        const id = item.href.replace("#", "")
        const section = document.getElementById(id)

        if (!section) return

        const { offsetTop, offsetHeight } = section

        if (
          scrollY >= offsetTop - 150 &&
          scrollY < offsetTop + offsetHeight - 150
        ) {
          setActive(id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () =>
      window.removeEventListener("scroll", handleScroll)

  }, [items, enabled])

  return active
}

/* -----------------------------
   Theme Toggle
------------------------------*/

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return <div className="w-8 h-8" />

  return (
    <button
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      aria-label="Toggle theme"
      className={cn(
        "relative w-8 h-8 rounded-lg flex items-center justify-center",
        "text-muted-foreground hover:text-foreground",
        "hover:bg-muted transition-all duration-200",
        "border border-transparent hover:border-border"
      )}
    >
      <Sun
        size={15}
        className="absolute transition-all duration-300 rotate-0 scale-100 dark:-rotate-90 dark:scale-0"
      />
      <Moon
        size={15}
        className="absolute transition-all duration-300 rotate-90 scale-0 dark:rotate-0 dark:scale-100"
      />
    </button>
  )
}

/* -----------------------------
   Navbar
------------------------------*/

export default function Navbar({ name, items }: Props) {

  const pathname = usePathname()
  const isHome = pathname === "/"

  const active = useActiveSection(items, isHome)

  const [open, setOpen] = useState(false)

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        "border-b border-border",
        "bg-background/60 backdrop-blur-md"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-lg tracking-tighter text-foreground hover:opacity-70 transition"
        >
          {name}
          <span className="text-[#5227FF]">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">

          {items.map((item) => {

            const id = item.href.replace("#", "")

            const isActive = isHome && active === id

            const href =
              isHome
                ? item.href
                : `/${item.href}`

            return (
              <div key={item.label} className="relative">

                <Link
                  href={href}
                  className={cn(
                    "text-[13px] font-medium transition-colors duration-200",
                    isActive
                      ? "text-[#5227FF]"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>

                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -left-1 -right-1 -bottom-[21px] h-[3px] bg-[#5227FF] rounded-t-full"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}

              </div>
            )
          })}

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2">

          <ThemeToggle />

          {/* Hamburger */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-[#5227FF]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-end">

              <span
                className={cn(
                  "h-[2px] bg-current rounded-full transition-all duration-300",
                  open
                    ? "w-6 translate-y-[9px] rotate-45"
                    : "w-6"
                )}
              />

              <span
                className={cn(
                  "h-[2px] bg-current rounded-full transition-all duration-300",
                  open
                    ? "opacity-0"
                    : "w-4"
                )}
              />

              <span
                className={cn(
                  "h-[2px] bg-current rounded-full transition-all duration-300",
                  open
                    ? "w-6 -translate-y-[9px] -rotate-45"
                    : "w-5"
                )}
              />

            </div>
          </button>

        </div>

      </div>

      {open && (
        <MobileMenu
          items={items}
          close={() => setOpen(false)}
        />
      )}

    </nav>
  )
}