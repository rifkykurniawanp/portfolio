"use client"

import { useState } from "react"
import { type Project } from "@/types"
import { projects } from "@/data/project"
import ProjectCard from "./ProjectCard"
import ProjectPreview from "./ProjectPreview"

export default function Project() {
  const [preview, setPreview] = useState<Project | null>(null)

  return (
    <section id="project" className="w-full">
      <div className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-3xl font-semibold mb-12">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onPreview={setPreview}
            />
          ))}
        </div>

        {preview && (
          <ProjectPreview
            project={preview}
            onClose={() => setPreview(null)}
          />
        )}

      </div>
    </section>
  )
}