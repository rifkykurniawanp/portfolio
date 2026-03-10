"use client"

import { useState } from "react"

type Project = {
  title: string
  image: string
  live: string
  github: string
}

const projects: Project[] = [
  {
    title: "AI Medical Platform",
    image: "/projects/p1.jpg",
    live: "#",
    github: "#"
  },
  {
    title: "Telemedicine System",
    image: "/projects/p2.jpg",
    live: "#",
    github: "#"
  },
  {
    title: "Clinic Queue App",
    image: "/projects/p3.jpg",
    live: "#",
    github: "#"
  },
  {
    title: "Coffee E-Commerce",
    image: "/projects/p4.jpg",
    live: "#",
    github: "#"
  },
  {
    title: "Health Education CMS",
    image: "/projects/p5.jpg",
    live: "#",
    github: "#"
  }
]

export default function Projects() {

  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="projects" className="w-full">

      <div className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-2xl font-bold text-center mb-16">
          Selected Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px]">

          {/* Large Project 1 */}

          <ProjectCard
            project={projects[0]}
            className="md:col-span-2 md:row-span-2"
            onClick={() => setSelected(projects[0])}
          />

          {/* Small */}

          <ProjectCard
            project={projects[2]}
            onClick={() => setSelected(projects[2])}
          />

          <ProjectCard
            project={projects[3]}
            onClick={() => setSelected(projects[3])}
          />

          {/* Large Project 2 */}

          <ProjectCard
            project={projects[1]}
            className="md:col-span-2"
            onClick={() => setSelected(projects[1])}
          />

          {/* Small bottom */}

          <ProjectCard
            project={projects[4]}
            onClick={() => setSelected(projects[4])}
          />

        </div>

      </div>

      {/* Modal */}

      {selected && (

        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >

          <div className="max-w-4xl w-full px-6">

            <img
              src={selected.image}
              alt={selected.title}
              className="w-full object-contain"
            />

            <div className="flex justify-between mt-4 text-white">

              <a href={selected.live} target="_blank">
                Live Project
              </a>

              <a href={selected.github} target="_blank">
                Github
              </a>

            </div>

          </div>

        </div>

      )}

    </section>
  )
}

function ProjectCard({
  project,
  className,
  onClick
}: {
  project: Project
  className?: string
  onClick: () => void
}) {

  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden cursor-pointer ${className}`}
    >

      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition flex items-center justify-center text-white">

        {project.title}

      </div>

    </div>
  )
}