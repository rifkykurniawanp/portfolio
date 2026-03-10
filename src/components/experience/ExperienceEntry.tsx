import { type ExperienceEntry } from "@/types"
import WorkplaceEntryCard from "./WorkplaceEntry"

interface ExperienceEntryProps {
  entry: ExperienceEntry
}

export default function ExperienceEntryCard({ entry }: ExperienceEntryProps) {
  return (
    <div className="mb-12">

      <h3 className="text-xl font-semibold mb-6 text-neutral-800">
        {entry.title}
      </h3>

      <div className="space-y-8">
        {entry.workplaces.map((workplace, index) => (
          <WorkplaceEntryCard key={index} workplace={workplace} />
        ))}
      </div>

    </div>
  )
}