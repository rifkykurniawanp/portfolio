"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { NavItem } from "@/types"
import { cn } from "@/lib/utils"

type Props = {
  items: NavItem[]
  close: () => void
}

export default function MobileMenu({ items, close }: Props) {
  const pathname = usePathname()
  const isHome = pathname === "/"

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8, pointerEvents: "none" }}
      transition={{ duration: 0.2 }}
      className={cn(
        "md:hidden border-t border-border",
        "bg-background/80 backdrop-blur-md",
        "pointer-events-auto"
      )}
    >
      <div className="flex flex-col items-center gap-1 py-4 px-6">
        {items.map((itemData) => {
          const href = isHome
            ? itemData.href
            : `/${itemData.href}`

          return (
            <Link
              key={itemData.label}
              href={href}
              onClick={close}
              className="block w-full text-center py-3 rounded-lg text-sm font-medium hover:bg-muted"
            >
              {itemData.label}
            </Link>
          )
        })}
      </div>
    </motion.div>
  )
}