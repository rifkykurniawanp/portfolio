import { experiences } from "@/data/experience"
import ExperienceEntryCard from "./ExperienceEntry"
import Reveal from "@/components/effect/Reveal"

export default function Experience() {
  return (
    <section id="experience" className="w-full">

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-20 md:py-28">

        <header className="mb-14 md:mb-16">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            Working Experience
          </h2>

          <div className="mt-4 w-10 h-[3px] bg-[#5227FF] rounded-full" />
        </header>

        <Reveal>
          <div className="flex flex-col gap-4 max-w-4xl">
            {experiences.map((entry) => (
              <ExperienceEntryCard
                key={entry.title}
                entry={entry}
              />
            ))}
          </div>
        </Reveal>

      </div>

    </section>
  )
}