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
        <header className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16 gap-4 sm:gap-0">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            Organizations
          </h2>

          <div className="flex gap-3" role="group" aria-label="Scroll organizations">
            <button
              type="button"
              aria-label="Scroll left"
              aria-controls="organizations-scroll"
              onClick={() => scroll("left")}
              className={cn(
                "flex items-center justify-center w-11 h-11 rounded-xl",
                "border border-border text-muted-foreground",
                "hover:border-foreground/30 hover:text-foreground hover:bg-muted",
                "transition-all duration-200 active:scale-90"
              )}
            >
              <ChevronLeft size={22} aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Scroll right"
              aria-controls="organizations-scroll"
              onClick={() => scroll("right")}
              className={cn(
                "flex items-center justify-center w-11 h-11 rounded-xl",
                "border border-border text-muted-foreground",
                "hover:border-foreground/30 hover:text-foreground hover:bg-muted",
                "transition-all duration-200 active:scale-90"
              )}
            >
              <ChevronRight size={22} aria-hidden="true" />
            </button>
          </div>
        </header>

        <div className="relative -mx-4 px-4">
          <div
            id="organizations-scroll"
            ref={scrollRef}
            role="list"
            aria-label="Organization list"
            className="flex gap-4 sm:gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth"
          >
            {organizations.map((org, index) => (
              <div
                key={`${org.name}-${index}`}
                role="listitem"
                className="snap-start flex-shrink-0 w-full sm:w-[320px] md:w-[380px] lg:w-[420px]"
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