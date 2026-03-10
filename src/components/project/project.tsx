"use client"

import Image from "next/image"
import { useState } from "react"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Healthcare Management System",
    image: "/projects/project1.jpg",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Medical Queue System",
    image: "/projects/project2.jpg",
    tech: ["React", "Node.js"],
    github: "#",
    demo: "#",
  },
  {
    title: "Clinical Data Dashboard",
    image: "/projects/project3.jpg",
    tech: ["Next.js", "Chart.js"],
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    image: "/projects/project4.jpg",
    tech: ["Next.js", "Tailwind"],
    github: "#",
    demo: "#",
  },
  {
    title: "Backend API System",
    image: "/projects/project5.jpg",
    tech: ["Node.js", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
]

export default function Project() {

  const [preview, setPreview] = useState<any>(null)

  return (
    <section id="project" className="w-full">

      <div className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-3xl font-semibold mb-12">
          Projects
        </h2>

        {/* Gallery */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {projects.map((project, index) => (

            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-neutral-200 cursor-pointer"
            >

              {/* Image */}

              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="object-cover w-full h-56 transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-4 text-white">

                <h3 className="font-semibold text-sm">
                  {project.title}
                </h3>

                {/* Tech */}

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

                {/* Actions */}

                <div className="flex gap-3 mt-3">

                  <a
                    href={project.demo}
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 bg-white/20 rounded hover:bg-white/30"
                  >
                    <ExternalLink size={14} />
                  </a>

                  <a
                    href={project.github}
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 bg-white/20 rounded hover:bg-white/30"
                  >
                    <Github size={14} />
                  </a>

                  <button
                    onClick={() => setPreview(project)}
                    className="text-xs ml-auto underline"
                  >
                    Preview
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Fullscreen Preview */}

        {preview && (

          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setPreview(null)}
          >

            <div
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >

              <Image
                src={preview.image}
                alt={preview.title}
                width={1200}
                height={700}
                className="rounded-xl"
              />

              <div className="flex justify-between items-center mt-4 text-white">

                <h3 className="text-lg font-semibold">
                  {preview.title}
                </h3>

                <div className="flex gap-4">

                  <a
                    href={preview.demo}
                    className="border px-3 py-1 rounded text-sm"
                  >
                    Live
                  </a>

                  <a
                    href={preview.github}
                    className="border px-3 py-1 rounded text-sm"
                  >
                    GitHub
                  </a>

                </div>

              </div>

            </div>

          </div>

        )}

      </div>

    </section>
  )
}