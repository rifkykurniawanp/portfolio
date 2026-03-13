"use client"
import { useRef } from "react"
import { organizations } from "@/data/organization"
import OrganizationCard from "./OrganizationCard"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Organizations() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current
    if (!container) return

    const offset = container.clientWidth * 0.8

    container.scrollBy({
      left: direction === "left" ? -offset : offset,
      behavior: "smooth",
    })
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
                {dir === "left"
                  ? <ChevronLeft size={22} />
                  : <ChevronRight size={22} />}
              </button>
            ))}
          </div>
        </header>

        <div className="relative -mx-4 px-4">
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-12 scroll-smooth"
          >
            {organizations.map((org, index) => (
              <div
                key={`${org.name}-${index}`}
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