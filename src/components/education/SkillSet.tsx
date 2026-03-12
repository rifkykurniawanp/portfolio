import Image from "next/image"
import { techSkills, medicalSkills, softSkills } from "@/data/education"
import { cn } from "@/lib/utils"

export default function SkillSet() {
  return (
    <div className="mb-20">
      <h3 className="text-xl font-semibold mb-10 text-foreground">Skill Set</h3>

      <div className="grid md:grid-cols-2 gap-12">

        {/* Software Engineering */}
        <div>
          <h4 className="font-medium mb-6 text-foreground">Software Engineering</h4>
          <div className="grid grid-cols-3 gap-7">
            {techSkills.map((skill) => (
              <div
                key={skill.name}
                className="group flex flex-col items-center gap-2 transition"
              >
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={38}
                  height={38}
                  loading="lazy"
                  className="transition-transform duration-300 group-hover:scale-110 dark:invert"
                />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          {/* Clinical Skills */}
          <h4 className="font-medium mb-6 text-foreground">Clinical & Medical</h4>
          <div className="flex flex-wrap gap-3">
            {medicalSkills.map((skill) => (
              <span
                key={skill}
                className={cn(
                  "text-sm rounded-md px-3 py-1",
                  "border border-border text-muted-foreground",
                  "hover:border-border/80 hover:bg-muted hover:text-foreground",
                  "transition-all duration-200"
                )}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Soft Skills */}
          <div className="mt-10">
            <h4 className="font-medium mb-6 text-foreground">Soft Skills</h4>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className={cn(
                    "text-sm rounded-md px-3 py-1",
                    "border border-border text-muted-foreground",
                    "hover:border-border/80 hover:bg-muted hover:text-foreground",
                    "transition-all duration-200"
                  )}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}