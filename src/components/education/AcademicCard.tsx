import { type AcademicEntry } from "@/types"

interface AcademicCardProps {
  entry: AcademicEntry
}

export default function AcademicCard({ entry }: AcademicCardProps) {
  return (
    <div className="relative border border-neutral-200 rounded-xl p-6">

      <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center">
        <span className="text-xs font-bold text-neutral-600">{entry.logo}</span>
      </div>

      <p className="text-sm text-neutral-500">{entry.year}</p>
      <h3 className="text-lg font-semibold mt-2">{entry.institution}</h3>
      <p className="text-sm text-neutral-600">{entry.program}</p>
      {entry.faculty && (
        <p className="text-sm text-neutral-500">{entry.faculty}</p>
      )}
      <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
        {entry.description}
      </p>
      {entry.badge && (
        <span className="inline-block mt-4 text-xs border px-2 py-1 rounded">
          {entry.badge}
        </span>
      )}

    </div>
  )
}