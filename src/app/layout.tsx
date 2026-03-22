import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { ThemeProvider } from "next-themes"
import { cn } from "@/lib/utils"
import ClientProviders from "@/components/provider/ClientProvider"
import { navItems } from "@/data/navbar"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

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
  metadataBase: new URL("https://rifkykurniawanputra.vercel.app"),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(inter.variable, spaceGrotesk.variable)}
    >
      <head>
        {/* ✅ Anti-FOUC */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem("theme");
                if (theme === "dark") {
                  document.documentElement.classList.add("dark");
                } else {
                  document.documentElement.classList.remove("dark");
                }
              } catch {}
            `,
          }}
        />
      </head>

      <body className="relative antialiased bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 theme-transition">

        {/* Background */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-indigo-950" />
          <div className="absolute top-1/3 left-1/2 w-[600px] h-[600px] -translate-x-1/2 bg-indigo-500/10 blur-[60px] rounded-full dark:bg-indigo-500/20" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-400/10 blur-[40px] rounded-full dark:bg-blue-400/20" />
        </div>

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <ClientProviders />

          <Navbar name="Rifky Kurniawan Putra" items={navItems} />

          <main className="relative z-10 mx-auto max-w-6xl px-6 py-8 theme-transition">
            <div className="rounded-2xl p-6 md:p-10 border border-white/30 dark:border-white/10 bg-white/60 dark:bg-neutral-900/50 backdrop-blur-md shadow-xl shadow-black/5 dark:shadow-black/30 ring-1 ring-inset ring-white/40 dark:ring-white/5 theme-transition">
              {children}
            </div>
          </main>

          <Footer />
        </ThemeProvider>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}