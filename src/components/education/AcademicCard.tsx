import Image from "next/image"
import { type AcademicEntry } from "@/types"
import { cn } from "@/lib/utils"

interface AcademicCardProps {
  entry: AcademicEntry
}

function SubEntry({
  sub,
  isLast,
}: {
  sub: NonNullable<AcademicEntry["subEntries"]>[number]
  isLast: boolean
}) {
  return (
    <div className="relative flex gap-4">
      <div className="flex flex-col items-center">
        <div className="w-2 h-2 rounded-full bg-border mt-1 shrink-0" />
        {!isLast && <div className="w-px flex-1 bg-border mt-1" />}
      </div>
      <div className={cn("pb-5", isLast && "pb-0")}>
        <p className="text-xs text-muted-foreground/60 mb-0.5">{sub.year}</p>
        <p className="text-sm font-semibold text-foreground">{sub.program}</p>
        {sub.description && (
          <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
            {sub.description}
          </p>
        )}
        {sub.badge && (
          <span className="inline-block mt-2 text-xs border border-border text-muted-foreground px-2 py-0.5 rounded-full">
            {sub.badge}
          </span>
        )}
      </div>
    </div>
  )
}

export default function AcademicCard({ entry }: AcademicCardProps) {
  const hasSubEntries = entry.subEntries && entry.subEntries.length > 0

  return (
    <div className={cn(
      "group relative rounded-xl p-6",
      "border border-border",
      "bg-card",
      "transition-all duration-300",
      "hover:-translate-y-1 hover:shadow-lg hover:border-border/80"
    )}>

      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
        <div className="absolute inset-0 rounded-xl bg-indigo-500/5 dark:bg-indigo-500/10 blur-xl" />
      </div>

      <div className="absolute top-4 right-4 w-14 h-14 flex items-center justify-center">
        <Image
          src={entry.logo}
          alt={entry.institution}
          width={56}
          height={56}
          loading="lazy"
          className="object-contain transition-transform duration-300 group-hover:scale-105 dark:brightness-90"
        />
      </div>

      {!hasSubEntries && (
        <p className="text-xs text-muted-foreground/60">{entry.year}</p>
      )}
      <h3 className="text-base font-semibold text-foreground mt-1 pr-16">
        {entry.institution}
      </h3>

      {!hasSubEntries && (
        <>
          <p className="text-sm text-muted-foreground mt-0.5">{entry.program}</p>
          {entry.faculty && (
            <p className="text-xs text-muted-foreground/60 mt-0.5">{entry.faculty}</p>
          )}
          {entry.description && (
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              {entry.description}
            </p>
          )}
          {entry.badge && (
            <span className="inline-block mt-4 text-xs border border-border text-muted-foreground px-2 py-0.5 rounded-full">
              {entry.badge}
            </span>
          )}
        </>
      )}

      {hasSubEntries && (
        <div className="mt-4">
          {entry.subEntries!.map((sub, i) => (
            <SubEntry
              key={i}
              sub={sub}
              isLast={i === entry.subEntries!.length - 1}
            />
          ))}
        </div>
      )}
    </div>
  )
}