"use client"
import { useState, useMemo } from "react"
import { type Project } from "@/types"
import { projects } from "@/data/project"
import ProjectCard from "./ProjectCard"
import ProjectPreview from "./ProjectPreview"
import Reveal from "@/components/effect/Reveal"

export default function Project() {
  const [preview, setPreview] = useState<Project | null>(null)

  const displayed = useMemo(() => {
    const featured = projects.filter((p) => p.featured)
    return featured.length > 0 ? featured.slice(0, 3) : projects.slice(0, 3)
  }, [])

  return (
    <section id="project" className="w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
        <Reveal>
          <div className="mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Projects</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {displayed.map((project, i) => (
            <Reveal key={project.slug} delay={i * 120}>
              <ProjectCard project={project} onPreview={setPreview} />
            </Reveal>
          ))}
        </div>
      </div>

      {preview && (
        <ProjectPreview project={preview} onClose={() => setPreview(null)} />
      )}
    </section>
  )
}