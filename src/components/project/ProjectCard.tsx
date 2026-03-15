import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"
import { type Project } from "@/types"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  project: Project
  onPreview: (project: Project) => void
}

const statusStyles: Record<string, string> = {
  "full-stack": "bg-emerald-500/80 text-white",
  "front-end":  "bg-amber-500/80 text-white",
  "back-end":   "bg-neutral-500/80 text-white",
  "basic":      "bg-blue-500/80 text-white",
}

export default function ProjectCard({ project, onPreview }: ProjectCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl",
        "border border-border/40 bg-card/50",
        "transition-[transform,box-shadow] duration-300 ease-out",
        "hover:-translate-y-1 hover:shadow-lg hover:shadow-black/10 hover:border-border/70"
      )}
    >
      <button
        type="button"
        aria-label={`Preview ${project.title}`}
        className="relative m-2 w-[calc(100%-1rem)] overflow-hidden rounded-xl bg-muted cursor-pointer text-left"
        style={{ aspectRatio: "16/10" }}
        onClick={() => onPreview(project)}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-105"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 transition-opacity duration-250 group-hover:opacity-100"
        >
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tech.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-medium bg-white/15 text-white border border-white/10 px-2.5 py-0.5 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live demo of ${project.title}`}
                onClick={(e) => e.stopPropagation()}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition-colors duration-200 hover:bg-[#5227ff] hover:text-white"
              >
                <ExternalLink size={13} aria-hidden="true" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub repository for ${project.title}`}
                onClick={(e) => e.stopPropagation()}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white transition-colors duration-200 hover:bg-white/35"
              >
                <Github size={13} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        {project.status && (
          <span
            className={cn(
              "absolute left-3 top-3 rounded-full px-2.5 py-1",
              "text-[9px] font-bold uppercase tracking-wider",
              "border border-white/10 backdrop-blur-sm",
              statusStyles[project.status] ?? "bg-neutral-500/80 text-white"
            )}
          >
            {project.status}
          </span>
        )}
      </button>

      <div className="px-4 pb-4 pt-3">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3 className="font-bold text-sm text-foreground transition-colors duration-200 group-hover:text-[#5227ff]">
            {project.title}
          </h3>
          {project.year && (
            <span className="text-[11px] text-muted-foreground/60 mt-px shrink-0">
              {project.year}
            </span>
          )}
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {project.description}
        </p>

        <Link
          href={`/project/${project.slug}`}
          onClick={(e) => e.stopPropagation()}
          className={cn(
            "group/link relative mt-3 -ml-2 inline-flex items-center gap-1",
            "rounded-lg px-2 py-1.5",
            "text-[12px] font-medium text-foreground/70",
            "transition-colors duration-200 hover:bg-[#5227ff]/[.06] hover:text-[#5227ff]",
            "after:absolute after:bottom-[5px] after:left-2 after:right-2 after:h-px after:bg-[#5227ff]",
            "after:origin-left after:scale-x-0 after:transition-transform after:duration-200",
            "hover:after:scale-x-100"
          )}
        >
          View Details
          <span aria-hidden="true" className="transition-transform duration-200 group-hover/link:translate-x-0.5">→</span>
        </Link>
      </div>
    </div>
  )
}