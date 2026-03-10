import { experiences } from "@/data/experience"
import ExperienceEntryCard from "./ExperienceEntry"

export default function Experience() {
  return (
    <section id="experience" className="w-full">
      <div className="max-w-4xl mx-auto px-6 py-28">

        <h2 className="text-3xl font-semibold mb-14">
          Working Experiences
        </h2>

        {experiences.map((entry, index) => (
          <ExperienceEntryCard key={index} entry={entry} />
        ))}

      </div>
    </section>
  )
}