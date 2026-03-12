import Image from "next/image"
import TrueFocus from "@/components/animations/TrueFocus"
import { type AboutData } from "@/types"

interface AboutPhotoProps {
  name: AboutData["name"]
}

export default function AboutPhoto({ name }: AboutPhotoProps) {
  return (
    <div className="flex flex-col items-center md:items-end">

      {/* Photo */}
      <div className="relative w-80 h-[420px] md:w-[520px] md:h-[620px]">
        {/* Glow — lebih terang di dark mode */}
        <div className="absolute inset-0 bg-[#5227FF]/10 dark:bg-[#5227FF]/20 blur-[160px] rounded-[40px]" />
        <Image
          src="/assets/profile-1.png"
          alt={name}
          fill
          priority
          className="object-contain object-bottom relative z-10"
        />
      </div>

      {/* Role animation */}
      <div className="mt-4">
        <TrueFocus
          sentence="Medical Doctor|Full-Stack Developer"
          separator="|"
          manualMode={false}
          blurAmount={4}
          borderColor="#5227FF"
          glowColor="rgba(82, 39, 255, 0.35)"
          animationDuration={0.5}
          pauseBetweenAnimations={1.5}
          fontSize="0.85rem"
          fontWeight="600"
          className="tracking-[0.15em] uppercase text-muted-foreground text-center md:text-right"
        />
      </div>
    </div>
  )
}