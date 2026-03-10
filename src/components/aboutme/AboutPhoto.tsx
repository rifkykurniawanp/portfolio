import Image from "next/image"
import { type AboutData } from "@/types"

interface AboutPhotoProps {
  name: AboutData["name"]
}

export default function AboutPhoto({ name }: AboutPhotoProps) {
  return (
    <div className="flex justify-center md:justify-end">
      <div className="relative w-64 h-64">
        <div className="absolute inset-0 rounded-2xl border border-neutral-200 shadow-lg overflow-hidden">
          <Image
            src="/assets/profile.jpg"
            alt={name}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}