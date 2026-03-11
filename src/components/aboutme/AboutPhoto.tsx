import Image from "next/image"
import { type AboutData } from "@/types"

interface AboutPhotoProps {
  name: AboutData["name"]
}

export default function AboutPhoto({ name }: AboutPhotoProps) {
  return (
    <div className="flex flex-col items-center md:items-end">
      <div className="relative group">
        <div className="relative w-64 h-64 rounded-2xl p-[2px] bg-gradient-to-br from-neutral-300 to-neutral-100 shadow-xl transition-transform duration-300 group-hover:scale-[1.02]">
          
          <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white">
            <Image
              src="/assets/profile.jpg"
              alt={name}
              fill
              priority
              className="object-cover"
            />
          </div>

        </div>
      </div>

      <p className="mt-2 text-sm text-neutral-500 tracking-wide text-center md:text-right max-w-xs leading-relaxed">
        Medical Doctor • Occupational Doctor • Full-Stack Developer
      </p>

      {/* <div className="mt-4 flex items-center gap-2 text-xs text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        Available for Collaboration
      </div> */}

    </div>
  )
}