import Image from "next/image"
import TrueFocus from "@/components/animations/TrueFocus"
import { type AboutData } from "@/types"

interface AboutPhotoProps {
  name: AboutData["name"]
}

export default function AboutPhoto({ name }: AboutPhotoProps) {
  return (
    <div className="flex flex-col items-center md:items-end">

      <div className="relative w-80 h-[420px] md:w-[520px] md:h-[620px]">

        {/* Glow */}
        <div
          aria-hidden
          className="absolute inset-0 rounded-[40px] blur-[160px]
          bg-[#5227FF]/10 dark:bg-[#5227FF]/20"
        />

        <Image
          src="/assets/profile-1.webp"
          alt={name}
          fill
          priority
          quality={90}
          sizes="(max-width: 768px) 320px, 520px"
          className="relative z-10 object-contain object-bottom"
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
          className="text-center md:text-right tracking-[0.15em] uppercase text-muted-foreground"
        />
      </div>

    </div>
  )
}