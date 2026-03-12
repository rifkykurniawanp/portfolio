"use client"
import Image from "next/image"
import { type WorkplaceEntry } from "@/types"
import { cn } from "@/lib/utils"

interface WorkplaceEntryProps {
  workplace: WorkplaceEntry
  isLast?: boolean
}

function WorkplaceLogo({ logo, name }: { logo: string; name: string }) {
  const isImage = logo.startsWith("/") || logo.startsWith("http")

  if (isImage) {
    return (
      <div className="shrink-0 w-10 h-10 rounded-full overflow-hidden border border-border bg-muted">
        <Image
          src={logo}
          alt={name}
          width={40}
          height={40}
          className="object-contain w-full h-full dark:brightness-90"
        />
      </div>
    )
  }

  return (
    <div className={cn(
      "shrink-0 w-10 h-10 rounded-full flex items-center justify-center",
      "text-xs font-bold",
      "bg-muted border border-border text-muted-foreground"
    )}>
      {logo}
    </div>
  )
}

export default function WorkplaceEntryCard({ workplace, isLast }: WorkplaceEntryProps) {
  return (
    <div className="relative pl-8">

      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-3 top-3 bottom-0 w-px bg-border" />
      )}

      {/* Timeline dot */}
      <div className="absolute left-0 top-2 flex items-center justify-center w-6 h-6">
        <div className="w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20 transition-transform duration-300 group-hover:scale-125" />
      </div>

      {/* Card */}
      <div className={cn(
        "group relative rounded-xl p-6",
        "border border-border bg-card",
        "transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-lg hover:border-border/80"
      )}>

        {/* Hover glow */}
        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
          <div className="absolute inset-0 rounded-xl bg-indigo-500/5 dark:bg-indigo-500/10 blur-xl" />
        </div>

        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <p className="font-semibold text-foreground">{workplace.name}</p>
            <p className="text-sm text-muted-foreground">{workplace.location}</p>
            <p className="text-sm text-muted-foreground/60 mt-0.5">{workplace.period}</p>
          </div>
          <WorkplaceLogo logo={workplace.logo} name={workplace.name} />
        </div>

        {/* Bullet points */}
        <ul className="space-y-3">
          {workplace.points.map((point, index) => (
            <li key={index} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
              <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-muted-foreground/40" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}