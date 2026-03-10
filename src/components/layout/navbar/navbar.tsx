// src/components/layout/navbar.tsx

import type { NavbarProps } from "../../../types/layout/navbar";
import Link from "next/link"

export default function Navbar({ name, items }: NavbarProps) {
  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
      
        <div className="text-lg font-bold">
          {name}
        </div>

        <ul className="flex gap-8 text-sm font-medium">
          {items.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="hover:text-blue-600 transition"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  )
}