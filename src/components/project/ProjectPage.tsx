"use client"

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

  const index = projects.findIndex((p) => p.slug === project.slug)

  const prevProject = projects[index - 1]
  const nextProject = projects[index + 1]

  return (
    <main className="max-w-6xl mx-auto px-6 py-28">

      {/* HEADER */}
      <header className="mb-20 space-y-6">

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          {project.title}
        </h1>

        <p className="text-muted-foreground max-w-2xl leading-relaxed text-lg">
          {project.description}
        </p>

        {/* META */}
        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">

          {project.projectType && (
            <span>
              <strong>Project:</strong> {project.projectType}
            </span>
          )}

          {project.projectBy && (
            <span>
              <strong>Project by:</strong> {project.projectBy}
            </span>
          )}

          {project.period && (
            <span>
              <strong>Period:</strong> {project.period}
            </span>
          )}

        </div>

        {/* LINKS */}
        <div className="flex items-center gap-5 pt-2">

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="flex items-center gap-2 text-sm font-medium hover:text-[#5227FF] transition"
            >
              <Github size={16} />
              Github
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              className="flex items-center gap-2 text-sm font-medium hover:text-[#5227FF] transition"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}

        </div>

      </header>

      {/* HERO IMAGE */}
      <div className="relative w-full h-[480px] rounded-[2rem] overflow-hidden mb-24 border border-border/40">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* TOOLS */}
      {project.tools && (
        <section className="mb-24">

          <h2 className="text-xl font-semibold mb-6">
            Tools
          </h2>

          <div className="flex flex-wrap gap-3">

            {project.tools.map((tool) => (
              <span
                key={tool}
                className="text-xs font-semibold px-3 py-1 rounded-full bg-muted border border-border/40"
              >
                {tool}
              </span>
            ))}

          </div>

        </section>
      )}

      {/* ABOUT */}
      {project.about && (
        <section className="grid md:grid-cols-3 gap-12 mb-28">

          <div>
            <h3 className="font-semibold mb-3">
              Goal
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.about.goal}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">
              Process
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.about.process}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">
              Output
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.about.output}
            </p>
          </div>

        </section>
      )}

      {/* METHOD */}
      {project.method && (
        <section className="mb-28">

          <h2 className="text-xl font-semibold mb-6">
            Method
          </h2>

          <ul className="space-y-3 text-muted-foreground text-sm">

            {project.method.map((m) => (
              <li key={m}>
                • {m}
              </li>
            ))}

          </ul>

        </section>
      )}

      {/* GALLERY */}
      {project.images && (
        <section className="grid md:grid-cols-2 gap-6 mb-32">

          {project.images.map((img) => (
            <div
              key={img}
              className="relative h-72 rounded-2xl overflow-hidden border border-border/40"
            >
              <Image
                src={img}
                alt="Project image"
                fill
                className="object-cover"
              />
            </div>
          ))}

        </section>
      )}

      {/* NEXT / PREVIOUS */}
      <section className="border-t border-border/40 pt-12">

        <div className="grid md:grid-cols-2 gap-6">

          {/* PREVIOUS */}
          {prevProject && (
            <Link
              href={`/project/${prevProject.slug}`}
              className={cn(
                "group p-6 rounded-2xl border border-border/40",
                "transition-all duration-300",
                "hover:-translate-y-1 hover:border-border hover:shadow-lg"
              )}
            >

              <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                <ChevronLeft size={16} />
                Previous Project
              </div>

              <h3 className="font-semibold text-lg group-hover:text-[#5227FF] transition">
                {prevProject.title}
              </h3>

            </Link>
          )}

          {/* NEXT */}
          {nextProject && (
            <Link
              href={`/project/${nextProject.slug}`}
              className={cn(
                "group p-6 rounded-2xl border border-border/40 text-right",
                "transition-all duration-300",
                "hover:-translate-y-1 hover:border-border hover:shadow-lg"
              )}
            >

              <div className="flex justify-end items-center gap-3 text-sm text-muted-foreground mb-3">
                Next Project
                <ChevronRight size={16} />
              </div>

              <h3 className="font-semibold text-lg group-hover:text-[#5227FF] transition">
                {nextProject.title}
              </h3>

            </Link>
          )}

        </div>

      </section>

    </main>
  )
}