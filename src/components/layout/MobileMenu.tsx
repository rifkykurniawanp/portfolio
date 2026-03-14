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
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn(
        "md:hidden border-t border-border",
        "bg-background/80 backdrop-blur-md"
      )}
    >
      <div className="flex flex-col items-center gap-1 py-4 px-6">

        {items.map((item, i) => {

          const href = isHome
            ? item.href
            : `/${item.href}`

          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.2 }}
              className="w-full"
            >

              <Link
                href={href}
                onClick={close}
                className={cn(
                  "block w-full text-center py-3 rounded-lg text-sm font-medium",
                  "text-muted-foreground hover:text-foreground",
                  "hover:bg-muted transition-all duration-200"
                )}
              >
                {item.label}
              </Link>

            </motion.div>
          )
        })}

      </div>
    </motion.div>
  )
}