"use client"
import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { type Project } from "@/types"
import { projects } from "@/data/project"
import ProjectCard from "./ProjectCard"
import ProjectPreview from "./ProjectPreview"
import { cn } from "@/lib/utils"

export default function Project() {
  const [preview, setPreview] = useState<Project | null>(null)
  const featured = projects.filter((p) => p.featured).slice(0, 3)
  const displayed = featured.length > 0 ? featured : projects.slice(0, 3)

  return (
    <section id="project" className="w-full">
      <div className="max-w-6xl mx-auto px-6 py-24">

        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-semibold text-foreground">Projects</h2>
            <div className="mt-3 w-10 h-[3px] bg-[#5227FF] rounded-full" />
          </div>
          <Link
            href="/project"
            className={cn(
              "flex items-center gap-1.5 text-sm font-medium",
              "text-muted-foreground hover:text-foreground",
              "transition-colors duration-200"
            )}
          >
            View all <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayed.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              onPreview={setPreview}
            />
          ))}
        </div>
      </div>

      <ProjectPreview project={preview} onClose={() => setPreview(null)} />
    </section>
  )
}