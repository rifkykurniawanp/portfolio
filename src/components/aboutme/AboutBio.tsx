import { MapPin, Briefcase, FileText, ArrowUpRight } from "lucide-react"
import { type AboutData } from "@/types"
import TextType from "@/components/animations/TextType"
import { cn } from "@/lib/utils"

interface AboutBioProps {
  data: AboutData
}

export default function AboutBio({ data }: AboutBioProps) {
  // Teks terpanjang dipakai sebagai invisible spacer agar tinggi h2 stabil
  const longestText = [`Hello, I'm ${data.name}`, `Welcome to my Portfolio`].reduce(
    (a, b) => (a.length >= b.length ? a : b)
  )

  return (
    <div className="flex flex-col max-w-xl md:mt-4">
      {/*
        Wrapper h2 pakai relative + min-height implisit dari spacer invisible.
        TextType di-absolute agar tidak mempengaruhi tinggi container.
      */}
      <h2 className="text-4xl font-bold tracking-tight text-foreground leading-tight relative">
        {/* Spacer invisible — menentukan tinggi h2, tidak terlihat user */}
        <span aria-hidden="true" className="invisible select-none">
          {longestText}
        </span>
        {/* Teks animasi overlay di atas spacer */}
        <span className="absolute inset-0">
          <TextType
            text={[`Hello, I'm ${data.name}`, `Welcome to my Portfolio`]}
            typingSpeed={55}
            deletingSpeed={30}
            pauseDuration={2800}
            loop={true}
            showCursor={true}
            cursorCharacter="|"
            cursorClassName="text-[#5227FF]"
            startOnVisible={true}
            as="span"
          />
        </span>
      </h2>

      <div className="mt-5 mb-6 w-10 h-[3px] bg-[#5227FF] rounded-full" />

      <div className="space-y-4">
        {data.paragraphs.map((text, index) => (
          <p
            key={index}
            className="text-[15px] leading-[1.8] text-muted-foreground"
          >
            {text}
          </p>
        ))}
      </div>

      <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8 text-[13px] text-muted-foreground font-medium">
        <span className="flex items-center gap-1.5">
          <MapPin size={13} className="text-muted-foreground/60" aria-hidden="true" />
          {data.location}
        </span>
        <span className="flex items-center gap-1.5">
          <Briefcase size={13} className="text-muted-foreground/60" aria-hidden="true" />
          {data.status}
        </span>
      </div>

      <div className="mt-8 flex flex-col gap-6">
        <a
          href={data.cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download CV (opens in new tab)"
          className={cn(
            "group inline-flex items-center gap-2.5 self-start",
            "px-5 py-2.5 rounded-lg text-[13px] font-medium",
            "bg-foreground text-background",
            "hover:bg-[#5227FF] hover:text-white",
            "transition-colors duration-200"
          )}
        >
          <FileText size={14} aria-hidden="true" />
          Download CV
          <ArrowUpRight
            size={13}
            aria-hidden="true"
            className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
          />
        </a>

        <div className="flex flex-col gap-3">
          <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-muted-foreground/60">
            Connect
          </p>
          <div className="flex flex-wrap gap-2">
            {data.socials
              .filter((s) => s.active)
              .map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={cn(
                    "inline-flex items-center gap-2",
                    "px-3.5 py-2 rounded-lg text-[12px] font-medium",
                    "border border-border",
                    "text-muted-foreground hover:text-foreground hover:border-foreground/30",
                    social.hoverColor,
                    "transition-all duration-150"
                  )}
                >
                  <social.icon size={14} aria-hidden="true" />
                  {social.label}
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}