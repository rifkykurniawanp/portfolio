import { type WorkplaceEntry } from "@/types"

interface WorkplaceEntryProps {
  workplace: WorkplaceEntry
}

export default function WorkplaceEntryCard({ workplace }: WorkplaceEntryProps) {
  return (
    <div className="relative pl-6 border-l border-neutral-200">

      {/* Logo pojok kanan + info tempat kerja */}
      <div className="flex items-start justify-between gap-4 mb-3">

        <div>
          <p className="font-medium text-neutral-800">
            {workplace.name}
          </p>
          <p className="text-sm text-neutral-500">
            {workplace.location}
          </p>
          <p className="text-sm text-neutral-400 mt-0.5">
            {workplace.period}
          </p>
        </div>

        {/* Logo */}
        <div className="shrink-0 w-10 h-10 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center">
          <span className="text-xs font-bold text-neutral-600">
            {workplace.logo}
          </span>
        </div>

      </div>

      {/* Bullet points */}
      <ul className="space-y-2">
        {workplace.points.map((point, index) => (
          <li key={index} className="flex gap-2 text-sm text-neutral-600 leading-relaxed">
            <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-neutral-400" />
            {point}
          </li>
        ))}
      </ul>

    </div>
  )
}