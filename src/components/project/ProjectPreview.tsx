import Image from "next/image"
import { type Project } from "@/types"

interface ProjectPreviewProps {
  project: Project
  onClose: () => void
}

export default function ProjectPreview({ project, onClose }: ProjectPreviewProps) {
  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={700}
          className="rounded-xl"
        />
        <div className="flex justify-between items-center mt-4 text-white">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <div className="flex gap-4">
            <a href={project.demo} className="border px-3 py-1 rounded text-sm">
              Live
            </a>
            <a href={project.github} className="border px-3 py-1 rounded text-sm">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}