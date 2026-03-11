"use client";
import Image from "next/image"
import { useState } from "react"
import { type Certification } from "@/types"

interface CertificationCardProps {
  cert: Certification
}

export default function CertificationCard({ cert }: CertificationCardProps) {
  const [lightbox, setLightbox] = useState<string | null>(null)

  const allImages = [
    ...(cert.images ?? []),
    ...(cert.activityImages ?? []),
  ]

  return (
    <>
      <div className="border border-neutral-200 rounded-xl overflow-hidden hover:border-neutral-300 transition-colors">
        <div className="relative p-5 flex items-start gap-3">
          <div className="w-10 h-10 shrink-0 flex items-center justify-center">
            <Image
              src={cert.logo}
              alt={cert.issuer}
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-sm text-neutral-900 leading-snug">
              {cert.title}
            </p>
            <p className="text-xs text-neutral-400 mt-0.5">{cert.issuer}</p>
            {cert.date && (
              <p className="text-xs text-neutral-400">{cert.date}</p>
            )}
          </div>
        </div>

        {allImages.length > 0 && (
          <div
            className={`grid gap-1 px-1 pb-1 ${
              allImages.length === 1
                ? "grid-cols-1"
                : allImages.length === 2
                ? "grid-cols-2"
                : "grid-cols-3"
            }`}
          >
            {allImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightbox(img.src)}
                className="relative aspect-video overflow-hidden rounded-lg group bg-neutral-100"
              >
                <Image
                  src={img.src}
                  alt={img.alt ?? `${cert.title} image ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200" />
                {/* label badge */}
                {img.label && (
                  <span className="absolute bottom-1.5 left-1.5 text-[10px] bg-black/50 text-white px-1.5 py-0.5 rounded-full backdrop-blur-sm">
                    {img.label}
                  </span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-3xl w-full max-h-[90vh]">
            <Image
              src={lightbox}
              alt="Preview"
              width={1200}
              height={800}
              className="object-contain w-full h-full rounded-lg"
            />
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-2 right-2 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors text-sm"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  )
}