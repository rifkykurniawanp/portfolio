"use client"

import Image from "next/image"
import { useState } from "react"
import { createPortal } from "react-dom"
import { type Certification } from "@/types"
import { cn } from "@/lib/utils"

interface CertificationCardProps {
  cert: Certification
}

export default function CertificationCard({ cert }: CertificationCardProps) {
  const [lightbox, setLightbox] = useState<string | null>(null)

  const allImages = [
    ...(cert.images ?? []),
    ...(cert.activityImages ?? [])
  ]

  return (
    <>
      <div
        className={cn(
          "group rounded-2xl overflow-hidden",
          "border border-border bg-card",
          "transition-all duration-300",
          "hover:-translate-y-1 hover:shadow-lg hover:border-border/80"
        )}
      >
        <div className="flex items-start gap-3 p-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-muted">
            <Image
              src={cert.logo}
              alt={cert.issuer}
              width={28}
              height={28}
              loading="lazy"
              className="object-contain transition-transform duration-300 group-hover:scale-105 dark:brightness-90"
            />
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-foreground leading-snug">
              {cert.title}
            </p>

            <p className="text-xs text-muted-foreground mt-0.5">
              {cert.issuer}
            </p>

            {cert.date && (
              <p className="text-xs text-muted-foreground/60">
                {cert.date}
              </p>
            )}
          </div>
        </div>

        {allImages.length > 0 && (
          <div className="px-3 pb-3">
            <div
              className={cn(
                "grid gap-2",
                allImages.length === 1 && "grid-cols-1",
                allImages.length === 2 && "grid-cols-2",
                allImages.length >= 3 && "grid-cols-3"
              )}
            >
              {allImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setLightbox(img.src)}
                  className="relative aspect-video overflow-hidden rounded-lg bg-muted group/image"
                >
                  <Image
                    src={img.src}
                    alt={img.alt ?? `${cert.title} image ${i + 1}`}
                    fill
                    loading="lazy"
                    sizes="(max-width:768px) 90vw, (max-width:1200px) 30vw, 200px"
                    className="object-cover transition-transform duration-300 group-hover/image:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-colors duration-200" />

                  {img.label && (
                    <span className="absolute bottom-1.5 left-1.5 text-[10px] bg-black/60 text-white px-2 py-0.5 rounded-full backdrop-blur-sm">
                      {img.label}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {lightbox &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <div
              className="relative max-w-4xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox}
                alt="Preview"
                width={1200}
                height={800}
                sizes="90vw"
                className="object-contain w-full h-full rounded-xl"
              />

              <button
                onClick={() => setLightbox(null)}
                className={cn(
                  "absolute top-3 right-3",
                  "flex h-8 w-8 items-center justify-center rounded-full",
                  "bg-black/60 text-white hover:bg-black/80 transition"
                )}
              >
                ✕
              </button>
            </div>
          </div>,
          document.body
        )}
    </>
  )
}