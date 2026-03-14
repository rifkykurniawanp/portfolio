// app/layout.tsx
import type { Metadata } from "next"
import { Inter, Space_Grotesk, Geist } from "next/font/google"
import "./globals.css"
import MagicCursor from "@/components/animations/MagicCursor"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { ThemeProvider } from "next-themes"
import { NavItem } from "@/types"
import { cn } from "@/lib/utils"
import { Toaster } from "sonner"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})
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
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("font-sans", geist.variable)}
    >
      <body
        className={cn(
          inter.variable,
          spaceGrotesk.variable,
          "relative antialiased",
          "bg-neutral-50 text-neutral-900",
          "dark:bg-neutral-950 dark:text-neutral-100"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Toaster position="top-right" richColors />
          <MagicCursor />

          <div className="pointer-events-none fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-indigo-950" />
            <div className="absolute top-1/3 left-1/2 w-[600px] h-[600px] -translate-x-1/2 bg-indigo-500/10 blur-[140px] rounded-full dark:bg-indigo-500/20" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-400/10 blur-[120px] rounded-full dark:bg-blue-400/20" />
          </div>

          <Navbar name="Rifky Kurniawan Putra" items={navItems} />

          <div className="relative z-10">
            <main className="max-w-6xl mx-auto px-6 py-8">

              {/* ✦ Glassmorphism frame */}
              <div
                className={cn(
                  "rounded-2xl p-6 md:p-10",
                  "border border-white/30 dark:border-white/10",
                  "bg-white/60 dark:bg-neutral-900/50",
                  "backdrop-blur-md",
                  "shadow-xl shadow-black/5 dark:shadow-black/30",
                  "ring-1 ring-inset ring-white/40 dark:ring-white/5"
                )}
              >
                {children}
              </div>

            </main>
          </div>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}