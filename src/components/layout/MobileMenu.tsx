"use client"

import Link from "next/link"
import { motion, type Variants } from "framer-motion"
import { usePathname } from "next/navigation"
import { NavItem } from "@/types"
import { cn } from "@/lib/utils"

type Props = {
  items: NavItem[]
  close: () => void
}

const container: Variants = {
  hidden: { opacity: 0, y: -8 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.05
    }
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.15,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}

const item: Variants = {
  hidden: { opacity: 0, y: -6 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.15 }
  }
}

export default function MobileMenu({ items, close }: Props) {

  const pathname = usePathname()
  const isHome = pathname === "/"

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      className={cn(
        "md:hidden border-t border-border",
        "bg-background/80 backdrop-blur-md"
      )}
    >
      <div className="flex flex-col items-center gap-1 py-4 px-6">

        {items.map((itemData) => {

          const href = isHome
            ? itemData.href
            : `/${itemData.href}`

          return (
            <motion.div
              key={itemData.label}
              variants={item}
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
                {itemData.label}
              </Link>

            </motion.div>
          )
        })}

      </div>
    </motion.div>
  )
}