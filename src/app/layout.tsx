import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

import Navbar from "@/components/layout/navbar/navbar"
import { NavItem } from "@/types/layout/navbar"
import Footer from "@/components/layout/footer/footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Rifky Portfolio",
  description: "My personal portfolio website",
}

const navItems: NavItem[] = [
  { label: "About Me", href: "#aboutme" },
  { label: "Education", href: "#education" },
  { label: "Project", href: "#project" },
  { label: "Contact Me", href: "#contactme" },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <Navbar name="Rifky Kurniawan Putra" items={navItems} />

        {/* Page Content */}
        <main>
          {children}
        </main>
      <Footer />
      </body>
    </html>
  )
}