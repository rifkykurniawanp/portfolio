import Image from "next/image"
import { Calendar } from "lucide-react"
import { type Organization } from "@/types"
import { cn } from "@/lib/utils"

interface OrganizationCardProps {
  org: Organization
}

export default function OrganizationCard({ org }: OrganizationCardProps) {
  return (
    <div className={cn(
      "group relative rounded-[2rem] overflow-hidden",
      "border border-border",
      "bg-card/60 backdrop-blur-sm",
      "dark:bg-card/40",
      "transition-all duration-500",
      "hover:border-[#5227FF]/30",
      "hover:shadow-[0_20px_40px_-15px_rgba(82,39,255,0.15)]",
      "dark:hover:shadow-[0_20px_40px_-15px_rgba(82,39,255,0.25)]",
      "hover:-translate-y-2"
    )}>

      {/* Glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5227FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Cover image */}
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={org.image}
          alt={org.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Logo badge */}
        <div className={cn(
          "absolute top-4 right-4 z-10",
          "w-10 h-10 rounded-full",
          "bg-background/80 backdrop-blur-md",
          "border border-border/50 shadow-sm",
          "flex items-center justify-center"
        )}>
          <Image
            src={org.logo}
            alt="Logo"
            width={22}
            height={22}
            className="object-contain dark:brightness-90"
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative z-10">
        <h3 className={cn(
          "font-bold text-lg leading-tight",
          "text-foreground group-hover:text-[#5227FF]",
          "transition-colors duration-300"
        )}>
          {org.name}
        </h3>

        <p className="text-sm font-medium text-muted-foreground mt-1">
          {org.role}
        </p>

        <div className="flex items-center gap-2 mt-4 text-muted-foreground/60">
          <Calendar
            size={14}
            className="group-hover:text-[#5227FF]/70 transition-colors"
          />
          <span className="text-[12px] font-semibold tracking-wider uppercase">
            {org.period}
          </span>
        </div>
      </div>
    </div>
  )
}