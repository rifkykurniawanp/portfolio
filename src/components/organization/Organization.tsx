"use client"
import { useRef, useMemo } from "react"
import dynamic from "next/dynamic"
import { organizations } from "@/data/organization"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const OrganizationCard = dynamic(() => import("./OrganizationCard"), {
  loading: () => (
    <div className="w-[300px] h-[320px] bg-muted animate-pulse rounded-2xl" />
  ),
  ssr: true,
})

export default function Organizations() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const memoizedOrgs = useMemo(() => organizations, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current
      const scrollTo =
        direction === "left"
          ? scrollRef.current.scrollLeft - clientWidth * 0.8
          : scrollRef.current.scrollLeft + clientWidth * 0.8
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" })
    }
  }

  return (
    <section id="organization" className="w-full">
      <div className="max-w-6xl mx-auto px-6 py-24">

        <header className="flex items-end justify-between mb-16">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            Organizations
          </h2>
          <div className="flex gap-3">
            {(["left", "right"] as const).map((dir) => (
              <button
                key={dir}
                onClick={() => scroll(dir)}
                className={cn(
                  "flex items-center justify-center w-11 h-11 rounded-xl",
                  "border border-border text-muted-foreground",
                  "hover:border-foreground/30 hover:text-foreground hover:bg-muted",
                  "transition-all duration-200 active:scale-90"
                )}
              >
                {dir === "left" ? <ChevronLeft size={22} /> : <ChevronRight size={22} />}
              </button>
            ))}
          </div>
        </header>

        <div className="relative -mx-4 px-4">
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-12 scroll-smooth"
          >
            {memoizedOrgs.map((org, index) => (
              <div
                key={index}
                className="snap-start shrink-0 w-[280px] sm:w-[320px] md:w-[380px]"
              >
                <OrganizationCard org={org} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}