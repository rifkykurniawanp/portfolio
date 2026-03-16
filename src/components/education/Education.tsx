import { academicEntries, certifications } from "@/data/education"
import AcademicCard from "./AcademicCard"
import CertificationCard from "./CertificationCard"
import SkillSet from "./SkillSet"
import Reveal from "@/components/effect/Reveal"

export default function Education() {
  return (
    <section id="education" className="w-full">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <Reveal>
          <header className="mb-16">
            <h2 className="text-3xl font-semibold tracking-tight">Education</h2>
          </header>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {academicEntries.map((entry) => (
              <AcademicCard key={entry.institution} entry={entry} />
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <SkillSet />
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-20">
            <h3 className="text-xl font-semibold mb-8">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert) => (
                <CertificationCard
                  key={`${cert.title}-${cert.issuer}`}
                  cert={cert}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}