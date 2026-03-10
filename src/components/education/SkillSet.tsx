import Image from "next/image"
import { techSkills, medicalSkills } from "@/data/education"

export default function SkillSet() {
  return (
    <div className="mb-16">
      <h3 className="text-xl font-semibold mb-8">Skill Set</h3>
      <div className="grid md:grid-cols-2 gap-10">

        <div>
          <h4 className="font-medium mb-6">Software Engineering</h4>
          <div className="grid grid-cols-3 gap-6">
            {techSkills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center gap-2">
                <Image src={skill.icon} alt={skill.name} width={36} height={36} />
                <span className="text-sm text-neutral-600">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-6">Clinical & Medical</h4>
          <div className="flex flex-wrap gap-3">
            {medicalSkills.map((skill) => (
              <span
                key={skill}
                className="text-sm border border-neutral-200 rounded-md px-3 py-1"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}