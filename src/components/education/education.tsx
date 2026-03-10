import { academicEntries, certifications } from "@/data/education"
import AcademicCard from "./AcademicCard"
import CertificationCard from "./CertificationCard"
import SkillSet from "./SkillSet"

export default function Education() {
  return (
    <section id="education" className="w-full">
      <div className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-3xl font-semibold mb-14">Education</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {academicEntries.map((entry, index) => (
            <AcademicCard key={index} entry={entry} />
          ))}
        </div>

        <SkillSet />

        <div>
          <h3 className="text-xl font-semibold mb-6">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} cert={cert} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}