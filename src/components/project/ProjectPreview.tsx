"use client"

import { useEffect, useState, useCallback } from "react"
import { createPortal } from "react-dom"
import Image from "next/image"
import Link from "next/link"
import {
  Github,
  ExternalLink,
  X,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { type Project } from "@/types"
import { cn } from "@/lib/utils"

interface ProjectPreviewProps {
  project: Project | null
  onClose: () => void
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
}

export default function ProjectPreview({ project, onClose }: ProjectPreviewProps) {
  const [mounted, setMounted] = useState(false)
  const [[page, direction], setPage] = useState<[number, number]>([0, 0])
  const [isPaused, setIsPaused] = useState(false)

  const allImages = project ? [project.image, ...(project.images || [])] : []

  const imageIndex =
    allImages.length > 0
      ? ((page % allImages.length) + allImages.length) % allImages.length
      : 0

  const paginate = useCallback((newDirection: number) => {
    setPage(([prev]) => [prev + newDirection, newDirection])
  }, [])

  // autoplay
  useEffect(() => {
    if (!project || isPaused || allImages.length <= 1) return

    const timer = setInterval(() => {
      setPage(([prev]) => [prev + 1, 1])
    }, 2500)

    return () => clearInterval(timer)
  }, [project, isPaused, allImages.length])

  // mount + scroll lock
  useEffect(() => {
    setMounted(true)

    if (project) {
      setPage([0, 0])
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [project])

  // ESC close
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [onClose])

  if (!mounted || !project) return null

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-background/80 backdrop-blur-md flex items-center justify-center z-[9999] p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-card border border-border/50 rounded-[2.5rem] overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-50 w-10 h-10 flex items-center justify-center bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full text-white transition-all border border-white/10"
          >
            <X size={18} />
          </button>

          {/* Image Section */}
          <div className="relative h-80 w-full p-3">
            <div className="relative h-full w-full overflow-hidden rounded-[1.8rem] bg-muted">

              {!isPaused && allImages.length > 1 && (
                <motion.div
                  key={page}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 2.5, ease: "linear" }}
                  className="absolute top-0 left-0 right-0 h-1 bg-[#5227FF] z-30 origin-left"
                />
              )}

              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={page}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 400, damping: 35 },
                    opacity: { duration: 0.2 },
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={allImages[imageIndex]}
                    alt={project.title}
                    fill
                    sizes="(max-width:768px) 100vw, 768px"
                    priority
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* navigation */}
              {allImages.length > 1 && (
                <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between z-20">
                  <button
                    onClick={() => paginate(-1)}
                    className="p-2 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm transition-all border border-white/5"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <button
                    onClick={() => paginate(1)}
                    className="p-2 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm transition-all border border-white/5"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              )}

              {/* title */}
              <div className="absolute bottom-6 left-8 z-20">
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {project.title}
                </h3>

                <div className="flex items-center gap-2">
                  <span className="text-white/70 text-sm">{project.year}</span>

                  {allImages.length > 1 && (
                    <>
                      <span className="w-1 h-1 bg-white/30 rounded-full" />
                      <span className="text-white/70 text-sm font-mono">
                        {imageIndex + 1} / {allImages.length}
                      </span>
                    </>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* Content */}
          <div className="px-8 pb-10 pt-4">

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-muted text-muted-foreground border border-border/50"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-8 line-clamp-3">
              {project.description}
            </p>

            <div className="flex items-center justify-between border-t border-border/50 pt-6">

              <Link
                href={`/project/${project.slug}`}
                className="group flex items-center gap-2 text-sm font-bold text-foreground hover:text-[#5227FF] transition-colors"
              >
                View Case Study
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>

              <div className="flex items-center gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground transition-all hover:scale-110"
                  >
                    <Github size={18} />
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground transition-all hover:scale-110"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>

            </div>

          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  )
}