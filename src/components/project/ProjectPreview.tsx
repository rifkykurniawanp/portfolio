"use client"
import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink, X, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { type Project } from "@/types"
import { cn } from "@/lib/utils"

interface ProjectPreviewProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectPreview({ project, onClose }: ProjectPreviewProps) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-background/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={cn(
              "relative w-full max-w-2xl rounded-[2.5rem] overflow-hidden",
              "bg-card border border-border/50",
              "shadow-2xl shadow-[#5227FF]/10"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className={cn(
                "absolute top-5 right-5 z-20",
                "w-10 h-10 rounded-full flex items-center justify-center",
                "bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-md border border-white/20"
              )}
            >
              <X size={18} />
            </button>

            {/* Image Section */}
            <div className="relative h-72 w-full p-3">
              <div className="relative h-full w-full overflow-hidden rounded-[1.8rem]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Overlay Title for Image */}
                <div className="absolute bottom-6 left-8">
                   <h3 className="text-2xl font-bold text-white tracking-tight">{project.title}</h3>
                   <p className="text-white/70 text-sm font-medium">{project.year}</p>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="px-8 pb-10 pt-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-semibold px-3 py-1 rounded-full bg-muted text-muted-foreground border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold",
                        "bg-[#5227FF] text-white hover:bg-[#4318d4] transition-all"
                      )}
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold",
                        "border border-border hover:bg-muted transition-all"
                      )}
                    >
                      <Github size={14} /> Code
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                {project.description}
              </p>

              <div className="flex items-center justify-between border-t border-border/50 pt-6">
                <Link
                  href={`/project/${project.slug}`}
                  className={cn(
                    "group flex items-center gap-2 text-sm font-bold text-foreground",
                    "hover:text-[#5227FF] transition-colors"
                  )}
                >
                  View Case Study 
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                
                <span className="text-[10px] uppercase tracking-widest font-black text-muted-foreground/30">
                  Quick View
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}