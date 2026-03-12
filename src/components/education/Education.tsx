"use client"
import { useEffect, useRef, useState } from "react"
import { academicEntries, certifications } from "@/data/education"
import AcademicCard from "./AcademicCard"
import CertificationCard from "./CertificationCard"
import SkillSet from "./SkillSet"
import { cn } from "@/lib/utils"

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -80px 0px" }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="education" ref={sectionRef} className="w-full">
      <div className="max-w-6xl mx-auto px-6 py-24">

        <header className="mb-16">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            Education
          </h2>
        </header>

        <div className={cn(
          "transition-opacity duration-700",
          isVisible ? "opacity-100" : "opacity-0"
        )}>
          {/* Academic */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {academicEntries.map((entry) => (
              <AcademicCard key={entry.institution} entry={entry} />
            ))}
          </div>

          {/* Skills */}
          <SkillSet />

          {/* Certifications */}
          <div className="mt-20">
            <h3 className="text-xl font-semibold mb-8 text-foreground">
              Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert) => (
                <CertificationCard
                  key={`${cert.title}-${cert.issuer}`}
                  cert={cert}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}