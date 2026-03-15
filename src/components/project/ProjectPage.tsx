import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react"
import { Project } from "@/types"
import { projects } from "@/data/project"
import { cn } from "@/lib/utils"

interface Props {
  project: Project
}

const statusStyles: Record<string, string> = {
  "full-stack": "bg-emerald-500/15 text-emerald-600 border-emerald-500/25 dark:text-emerald-400",
  "front-end":  "bg-amber-500/15 text-amber-600 border-amber-500/25 dark:text-amber-400",
  "back-end":   "bg-neutral-500/15 text-neutral-600 border-neutral-500/25 dark:text-neutral-400",
  "basic":      "bg-blue-500/15 text-blue-600 border-blue-500/25 dark:text-blue-400",
}

export default function ProjectPage({ project }: Props) {
  const slugIndexMap = new Map(projects.map((p, i) => [p.slug, i]))
  const index = slugIndexMap.get(project.slug) ?? 0

  const prevProject = projects[index - 1]
  const nextProject = projects[index + 1]

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-24">

      {/* Back link */}
      <Link
        href="/#projects"
        className="group mb-12 inline-flex items-center gap-2 text-[13px] text-muted-foreground/60 transition-colors duration-200 hover:text-foreground"
      >
        <ArrowLeft size={14} className="transition-transform duration-200 group-hover:-translate-x-0.5" />
        All Projects
      </Link>

      {/* ── Header ──────────────────────────────────── */}
      <header className="mb-14">
        <div className="flex flex-wrap items-center gap-2.5 mb-5">
          {project.status && (
            <span
              className={cn(
                "rounded-full border px-3 py-1 text-[10px] font-medium uppercase tracking-[.07em]",
                statusStyles[project.status] ?? "bg-muted text-muted-foreground border-border/40"
              )}
            >
              {project.status}
            </span>
          )}
          {project.year && (
            <span className="text-[13px] text-muted-foreground/50">{project.year}</span>
          )}
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08] mb-6">
          {project.title}
        </h1>

        <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
          {project.description}
        </p>

        <div className="flex flex-wrap items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-muted/50 px-4 py-2 text-[13px] font-medium text-foreground/70 transition-all duration-200 hover:border-[#5227ff]/40 hover:bg-[#5227ff]/[.06] hover:text-[#5227ff]"
            >
              <Github size={14} />
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#5227ff] px-4 py-2 text-[13px] font-medium text-white transition-all duration-200 hover:bg-[#4318e0] hover:shadow-[0_4px_16px_rgba(82,39,255,0.35)]"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
        </div>

        {/* Meta row */}
        {(project.projectType || project.projectBy || project.period) && (
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-border/30 pt-6">
            {project.projectType && (
              <div>
                <p className="text-[10px] uppercase tracking-[.08em] text-muted-foreground/40 mb-1">Type</p>
                <p className="text-[13px] font-medium text-foreground/80">{project.projectType}</p>
              </div>
            )}
            {project.projectBy && (
              <div>
                <p className="text-[10px] uppercase tracking-[.08em] text-muted-foreground/40 mb-1">By</p>
                <p className="text-[13px] font-medium text-foreground/80">{project.projectBy}</p>
              </div>
            )}
            {project.period && (
              <div>
                <p className="text-[10px] uppercase tracking-[.08em] text-muted-foreground/40 mb-1">Period</p>
                <p className="text-[13px] font-medium text-foreground/80">{project.period}</p>
              </div>
            )}
          </div>
        )}
      </header>

      {/* ── Hero Image ──────────────────────────────── */}
      <div className="relative mb-20 sm:mb-28">
        {/* Glow behind image */}
        <div className="absolute -inset-px rounded-[2rem] bg-[#5227ff]/8 blur-2xl" />

        <div className="relative w-full overflow-hidden rounded-[1.8rem] border border-border/30 bg-muted shadow-[0_32px_64px_-16px_rgba(0,0,0,0.18)]"
             style={{ aspectRatio: "16/9" }}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          {/* Subtle inner frame overlay */}
          <div className="pointer-events-none absolute inset-0 rounded-[1.8rem] ring-1 ring-inset ring-white/[.06]" />
        </div>
      </div>

      {/* ── Tools ───────────────────────────────────── */}
      {project.tools?.length ? (
        <section className="mb-16 sm:mb-24">
          <h2 className="text-xs uppercase tracking-[.1em] text-muted-foreground/40 mb-4">Tools & Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, i) => (
              <span
                key={`${tool}-${i}`}
                className="rounded-full border border-border/40 bg-muted/60 px-3.5 py-1.5 text-[12px] font-medium text-foreground/70"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>
      ) : null}

      {/* ── About: Goal / Process / Output ──────────── */}
      {project.about && (
        <section className="mb-20 sm:mb-28">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px rounded-2xl border border-border/30 bg-border/20 overflow-hidden">
            {[
              { label: "Goal",    body: project.about.goal    },
              { label: "Process", body: project.about.process },
              { label: "Output",  body: project.about.output  },
            ].map(({ label, body }) => (
              <div key={label} className="bg-card/60 backdrop-blur-sm p-6 sm:p-8">
                <p className="text-[10px] uppercase tracking-[.1em] text-muted-foreground/40 mb-3">{label}</p>
                <p className="text-[14px] leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Method ──────────────────────────────────── */}
      {project.method?.length ? (
        <section className="mb-20 sm:mb-28">
          <h2 className="text-xs uppercase tracking-[.1em] text-muted-foreground/40 mb-6">Method</h2>
          <ul className="space-y-3">
            {project.method.map((m, i) => (
              <li key={`${m}-${i}`} className="flex items-start gap-3 text-[14px] text-muted-foreground">
                <span className="mt-[5px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#5227ff]/50" />
                {m}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* ── Gallery ─────────────────────────────────── */}
      {project.images?.length ? (
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-20 sm:mb-32">
          {project.images.map((img, i) => (
            <div
              key={`${img}-${i}`}
              className="relative overflow-hidden rounded-2xl border border-border/30 bg-muted"
              style={{ aspectRatio: "16/10" }}
            >
              <Image
                src={img}
                alt={`${project.title} — screenshot ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
          ))}
        </section>
      ) : null}

      {/* ── Prev / Next ─────────────────────────────── */}
      <section className="border-t border-border/30 pt-10 sm:pt-14">
        <p className="text-[10px] uppercase tracking-[.1em] text-muted-foreground/35 mb-6">More Projects</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {prevProject && (
            <Link
              href={`/project/${prevProject.slug}`}
              className={cn(
                "group flex items-center gap-4 rounded-2xl border border-border/30 bg-card/40 p-5",
                "transition-all duration-300 hover:-translate-y-0.5 hover:border-[#5227ff]/30",
                "hover:bg-[#5227ff]/[.03] hover:shadow-[0_8px_24px_-4px_rgba(82,39,255,0.08)]"
              )}
            >
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-border/40 text-muted-foreground/50 transition-colors duration-200 group-hover:border-[#5227ff]/40 group-hover:text-[#5227ff]">
                <ChevronLeft size={16} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[.08em] text-muted-foreground/35 mb-0.5">Previous</p>
                <h3 className="text-[14px] font-semibold text-foreground/80 transition-colors group-hover:text-[#5227ff]">
                  {prevProject.title}
                </h3>
              </div>
            </Link>
          )}
          {nextProject && (
            <Link
              href={`/project/${nextProject.slug}`}
              className={cn(
                "group flex items-center justify-end gap-4 rounded-2xl border border-border/30 bg-card/40 p-5",
                "transition-all duration-300 hover:-translate-y-0.5 hover:border-[#5227ff]/30",
                "hover:bg-[#5227ff]/[.03] hover:shadow-[0_8px_24px_-4px_rgba(82,39,255,0.08)]",
                !prevProject && "md:col-start-2"
              )}
            >
              <div className="text-right">
                <p className="text-[10px] uppercase tracking-[.08em] text-muted-foreground/35 mb-0.5">Next</p>
                <h3 className="text-[14px] font-semibold text-foreground/80 transition-colors group-hover:text-[#5227ff]">
                  {nextProject.title}
                </h3>
              </div>
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-border/40 text-muted-foreground/50 transition-colors duration-200 group-hover:border-[#5227ff]/40 group-hover:text-[#5227ff]">
                <ChevronRight size={16} />
              </div>
            </Link>
          )}
        </div>
      </section>

    </main>
  )
}