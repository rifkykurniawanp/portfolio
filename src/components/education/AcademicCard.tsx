import Image from "next/image"
import { type AcademicEntry } from "@/types"

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
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <div className="w-2 h-2 rounded-full bg-neutral-300 mt-1 shrink-0" />
        {!isLast && <div className="w-px flex-1 bg-neutral-200 mt-1" />}
      </div>

      <div className={`pb-5 ${isLast ? "pb-0" : ""}`}>
        <p className="text-xs text-neutral-400 mb-0.5">{sub.year}</p>
        <p className="text-sm font-semibold text-neutral-800">{sub.program}</p>
        {sub.description && (
          <p className="mt-1 text-sm text-neutral-500 leading-relaxed">
            {sub.description}
          </p>
        )}
        {sub.badge && (
          <span className="inline-block mt-2 text-xs border border-neutral-300 text-neutral-600 px-2 py-0.5 rounded-full">
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
    <div className="relative border border-neutral-200 rounded-xl p-6 hover:border-neutral-300 transition-colors">
      <div className="absolute top-4 right-4 w-14 h-14 flex items-center justify-center">
        <Image
          src={entry.logo}
          alt={entry.institution}
          width={56}
          height={56}
          className="object-contain"
        />
      </div>

      {/* Header */}
      {!hasSubEntries && (
        <p className="text-xs text-neutral-400">{entry.year}</p>
      )}
      <h3 className="text-base font-semibold text-neutral-900 mt-1 pr-16">
        {entry.institution}
      </h3>

      {/* Single entry */}
      {!hasSubEntries && (
        <>
          <p className="text-sm text-neutral-600 mt-0.5">{entry.program}</p>
          {entry.faculty && (
            <p className="text-xs text-neutral-400 mt-0.5">{entry.faculty}</p>
          )}
          {entry.description && (
            <p className="mt-3 text-sm text-neutral-500 leading-relaxed">
              {entry.description}
            </p>
          )}
          {entry.badge && (
            <span className="inline-block mt-4 text-xs border border-neutral-300 text-neutral-600 px-2 py-0.5 rounded-full">
              {entry.badge}
            </span>
          )}
        </>
      )}

      {/* Sub entries (e.g. Bachelor + Profesi) */}
      {hasSubEntries && (
        <div className="mt-4 space-y-0">
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