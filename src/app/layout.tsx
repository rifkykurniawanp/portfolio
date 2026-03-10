import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"

import Navbar from "@/components/layout/navbar/Navbar"
import Footer from "@/components/layout/footer/Footer"
import { NavItem } from "@/types"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: "Rifky Portfolio",
  description: "Full-Stack Developer & Medical Doctor",
}

const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Organization", href: "#organization" },
  { label: "Project", href: "#project" },
  { label: "Contact me", href: "#contactme" },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-neutral-50 text-neutral-900`}
      >

        {/* Navbar */}

        <Navbar
          name="Rifky Kurniawan Putra"
          items={navItems}
        />

        {/* Main Content */}

        <main className="max-w-6xl mx-auto px-6">

          {children}

        </main>

        {/* Footer */}

        <Footer />

      </body>

    </html>
  )
}