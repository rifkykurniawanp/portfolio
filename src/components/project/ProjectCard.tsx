import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"
import { type Project } from "@/types"

interface ProjectCardProps {
  project: Project
  onPreview: (project: Project) => void
}

export default function ProjectCard({ project, onPreview }: ProjectCardProps) {
  return (
    <div
      className="group relative overflow-hidden rounded-xl border border-neutral-200 cursor-pointer"
      onClick={() => onPreview(project)}
    >
      <Image
        src={project.image}
        alt={project.title}
        width={500}
        height={300}
        className="object-cover w-full h-56 transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-4 text-white">

        <h3 className="font-semibold text-sm">{project.title}</h3>

        <div className="flex flex-wrap gap-2 mt-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-white/20 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 mt-3">

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-2 bg-white/20 rounded hover:bg-white/30"
          >
            <ExternalLink size={14} />
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-2 bg-white/20 rounded hover:bg-white/30"
          >
            <Github size={14} />
          </a>

          <button
            onClick={(e) => {
              e.stopPropagation()
              onPreview(project)
            }}
            className="text-xs ml-auto underline"
          >
            Preview
          </button>

        </div>
      </div>
    </div>
  )
}