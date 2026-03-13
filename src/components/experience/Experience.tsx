"use client"
import { useEffect, useRef, useState } from "react"
import { experiences } from "@/data/experience"
import ExperienceEntryCard from "./ExperienceEntry"
import { cn } from "@/lib/utils"

export default function Experience() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={ref} className="w-full">
      <div className="max-w-6xl px-6 py-28">

        <header className="mb-16">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            Working Experience
          </h2>
          <div className="mt-4 w-10 h-[3px] bg-[#5227FF] rounded-full" />
        </header>

        <div className={cn(
          "transition-all duration-700",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        )}>
          <div className="flex flex-col gap-4 max-w-4xl">
            {experiences.map((entry) => (
              <ExperienceEntryCard key={entry.title} entry={entry} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}