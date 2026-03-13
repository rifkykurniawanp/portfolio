"use client"
import { useState, useMemo } from "react"
import { type Project } from "@/types"
import { projects } from "@/data/project"
import ProjectCard from "./ProjectCard"
import ProjectPreview from "./ProjectPreview"

export default function Project() {
  const [preview, setPreview] = useState<Project | null>(null)

  // Memoize featured projects for efficiency
  const displayed = useMemo(() => {
    const featured = projects.filter((p) => p.featured)
    return featured.length > 0 ? featured.slice(0, 3) : projects.slice(0, 3)
  }, [])

  return (
    <section id="project" className="w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-24">

        {/* HEADER */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-foreground">Projects</h2>
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {displayed.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              onPreview={setPreview}
            />
          ))}
        </div>
      </div>

      {/* PROJECT PREVIEW MODAL */}
      {preview && (
        <ProjectPreview project={preview} onClose={() => setPreview(null)} />
      )}
    </section>
  )
}