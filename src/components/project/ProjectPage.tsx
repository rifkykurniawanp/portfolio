import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { Project } from "@/types"
import { projects } from "@/data/project"
import { cn } from "@/lib/utils"

interface Props {
  project: Project
}

export default function ProjectPage({ project }: Props) {
  // Build a slug -> index map for efficient lookup
  const slugIndexMap = new Map(projects.map((p, i) => [p.slug, i]))
  const index = slugIndexMap.get(project.slug) ?? 0

  const prevProject = projects[index - 1]
  const nextProject = projects[index + 1]

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">

      {/* HEADER */}
      <header className="mb-16 sm:mb-20 space-y-4 sm:space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">{project.title}</h1>
        <p className="text-muted-foreground max-w-full sm:max-w-2xl leading-relaxed text-base sm:text-lg">{project.description}</p>

        {/* META */}
        <div className="flex flex-wrap gap-4 sm:gap-6 text-sm text-muted-foreground">
          {project.projectType && <span><strong>Project:</strong> {project.projectType}</span>}
          {project.projectBy && <span><strong>Project by:</strong> {project.projectBy}</span>}
          {project.period && <span><strong>Period:</strong> {project.period}</span>}
        </div>

        {/* LINKS */}
        <div className="flex flex-wrap gap-4 sm:gap-5 pt-2">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 text-sm font-medium hover:text-[#5227FF] transition">
              <Github size={16} /> Github
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 text-sm font-medium hover:text-[#5227FF] transition">
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </header>

      {/* HERO IMAGE */}
      <div className="relative w-full h-48 sm:h-64 md:h-[480px] rounded-2xl overflow-hidden mb-20 sm:mb-24 border border-border/40">
        <Image src={project.image} alt={project.title} fill className="object-cover" priority />
      </div>

      {/* TOOLS */}
      {project.tools?.length ? (
        <section className="mb-16 sm:mb-24">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Tools</h2>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {project.tools.map((tool, i) => (
              <span key={`${tool}-${i}`} className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full bg-muted border border-border/40">{tool}</span>
            ))}
          </div>
        </section>
      ) : null}

      {/* ABOUT */}
      {project.about && (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-20 sm:mb-28">
          <div>
            <h3 className="font-semibold mb-2 sm:mb-3">Goal</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{project.about.goal}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 sm:mb-3">Process</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{project.about.process}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 sm:mb-3">Output</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{project.about.output}</p>
          </div>
        </section>
      )}

      {/* METHOD */}
      {project.method?.length ? (
        <section className="mb-20 sm:mb-28">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Method</h2>
          <ul className="space-y-2 sm:space-y-3 text-muted-foreground text-sm sm:text-base">
            {project.method.map((m, i) => <li key={`${m}-${i}`}>• {m}</li>)}
          </ul>
        </section>
      ) : null}

      {/* GALLERY */}
      {project.images?.length ? (
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-20 sm:mb-32">
          {project.images.map((img, i) => (
            <div key={`${img}-${i}`} className="relative h-48 sm:h-60 md:h-72 rounded-2xl overflow-hidden border border-border/40">
              <Image src={img} alt={`Project image ${i + 1}`} fill className="object-cover" loading="lazy" />
            </div>
          ))}
        </section>
      ) : null}

      {/* NEXT / PREVIOUS */}
      <section className="border-t border-border/40 pt-8 sm:pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {prevProject && (
            <Link href={`/project/${prevProject.slug}`}
                  className={cn("group p-4 sm:p-6 rounded-2xl border border-border/40 transition-all duration-300 hover:-translate-y-1 hover:border-border hover:shadow-lg")}>
              <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground mb-2 sm:mb-3">
                <ChevronLeft size={16} /> Previous Project
              </div>
              <h3 className="font-semibold text-base sm:text-lg group-hover:text-[#5227FF] transition">{prevProject.title}</h3>
            </Link>
          )}
          {nextProject && (
            <Link href={`/project/${nextProject.slug}`}
                  className={cn("group p-4 sm:p-6 rounded-2xl border border-border/40 text-right transition-all duration-300 hover:-translate-y-1 hover:border-border hover:shadow-lg")}>
              <div className="flex justify-end items-center gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground mb-2 sm:mb-3">
                Next Project <ChevronRight size={16} />
              </div>
              <h3 className="font-semibold text-base sm:text-lg group-hover:text-[#5227FF] transition">{nextProject.title}</h3>
            </Link>
          )}
        </div>
      </section>

    </main>
  )
}