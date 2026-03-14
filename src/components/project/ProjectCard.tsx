import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink, Maximize2 } from "lucide-react"
import { type Project } from "@/types"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  project: Project
  onPreview: (project: Project) => void
}

export default function ProjectCard({ project, onPreview }: ProjectCardProps) {
  return (
    <div className={cn(
  "group relative overflow-hidden rounded-[2rem]",
  "border border-border/40 bg-card/40 backdrop-blur-sm",
  "transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#5227FF]/5 hover:border-border/80"
)}>

  <div
    className="relative overflow-hidden h-52 m-2 rounded-[1.6rem] cursor-pointer"
    onClick={() => onPreview(project)} // <-- klik gambar langsung
  >
    <Image
      src={project.image}
      alt={project.title}
      fill
      className="object-cover transition-transform duration-700 group-hover:scale-110"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="text-[10px] font-medium bg-white/10 backdrop-blur-md text-white border border-white/10 px-2.5 py-0.5 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-2">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-2 bg-white text-black rounded-full hover:bg-[#5227FF] hover:text-white transition-colors duration-300"
          >
            <ExternalLink size={14} />
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-2 bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white/40 transition-colors duration-300"
          >
            <Github size={14} />
          </a>
        )}
      </div>
    </div>

    {project.status && (
      <div className="absolute top-3 left-3">
        <span className={cn(
          "text-[9px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full backdrop-blur-md border border-white/10 shadow-sm",
          project.status === "full-stack" && "bg-emerald-500/80 text-white",
          project.status === "front-end" && "bg-amber-500/80 text-white",
          project.status === "back-end" && "bg-neutral-500/80 text-white",
          project.status === "basic" && "bg-blue-500/80 text-white",
        )}>
          {project.status}
        </span>
      </div>
    )}
  </div>

  <div className="p-6 pt-2">
    <div className="flex items-start justify-between gap-2">
      <h3 className="font-bold text-base text-foreground group-hover:text-[#5227FF] transition-colors duration-300">
        {project.title}
      </h3>
      {project.year && (
        <span className="text-[11px] font-medium text-muted-foreground/40 mt-1">{project.year}</span>
      )}
    </div>
    <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
      {project.description}
    </p>
    
    <Link
      href={`/project/${project.slug}`}
      onClick={(e) => e.stopPropagation()}
      className="mt-4 inline-flex items-center text-[12px] font-semibold text-foreground/70 hover:text-[#5227FF] transition-colors group/link"
    >
      View Details
      <span className="ml-1 transition-transform group-hover/link:translate-x-1">→</span>
    </Link>
  </div>
</div>
  )
}