"use client"

import Link from "next/link"
import { NavItem } from "@/types"

type Props = {
  items: NavItem[]
  close: () => void
}

export default function MobileMenu({ items, close }: Props) {

  return (
    <div className="md:hidden border-t">

      <div className="flex flex-col items-center gap-6 py-6">

        {items.map((item) => (

          <Link
            key={item.label}
            href={item.href}
            onClick={close}
          >
            {item.label}
          </Link>

        ))}

      </div>

    </div>
  )
}