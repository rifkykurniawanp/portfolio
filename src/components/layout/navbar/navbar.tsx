"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { NavItem } from "@/types"
import MobileMenu from "./MobileMenu"

type Props = {
  name: string
  items: NavItem[]
}

function useActiveSection(items: NavItem[]) {
  const [active, setActive] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      items.forEach((item) => {
        const id = item.href.replace("#", "")
        const section = document.getElementById(id)
        if (!section) return

        const { offsetTop, offsetHeight } = section
        if (scrollY >= offsetTop - 100 && scrollY < offsetTop + offsetHeight - 100) {
          setActive(id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [items])

  return active
}

export default function Navbar({ name, items }: Props) {
  const active = useActiveSection(items)
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="font-semibold">
          {name}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 relative">
          {items.map((item) => {
            const id = item.href.replace("#", "")
            return (
              <div key={item.label} className="relative">
                <Link href={item.href}>
                  {item.label}
                </Link>
                {active === id && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute left-0 right-0 -bottom-1 h-[2px] bg-black"
                  />
                )}
              </div>
            )
          })}
        </div>

        {/* Hamburger */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>

      </div>

      {open && (
        <MobileMenu items={items} close={() => setOpen(false)} />
      )}
    </nav>
  )
}