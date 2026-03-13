"use client"

import { Mail, Linkedin, Github } from "lucide-react"
import { cn } from "@/lib/utils"
import ContactForm from "./ContactForm"

type SocialLink = {
  href: string
  label: string
  icon: React.ReactNode
}

export default function ContactMe() {

  const socialLinks: SocialLink[] = [
    {
      href: "mailto:krifky14@gmail.com",
      icon: <Mail size={16} />,
      label: "Email",
    },
    {
      href: "https://linkedin.com/in/rifkykurniawanputra/",
      icon: <Linkedin size={16} />,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/rifkykurniawanp",
      icon: <Github size={16} />,
      label: "GitHub",
    },
  ]

  return (
    <section id="contactme" className="w-full">
      <div className="max-w-4xl mx-auto px-6 py-28">

        {/* Header Section */}
        <header className="text-center mb-16">

          <h2 className="text-4xl font-semibold tracking-tight text-foreground">
            Let&apos;s Work Together
          </h2>

          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Interested in collaborating or discussing a project?
            Fill out the form or reach out through any platform below.
          </p>

          {/* Social links */}
          <nav
            aria-label="Contact links"
            className="flex flex-wrap justify-center gap-3 mt-8"
          >

            {socialLinks.map(({ href, icon, label }) => {

              const external = !href.startsWith("mailto")

              return (
                <a
                  key={label}
                  href={href}
                  aria-label={`Contact via ${label}`}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer me" : undefined}
                  className={cn(
                    "group flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium",
                    "border border-border/40 bg-background/40",
                    "transition-all duration-300 ease-out",
                    "hover:border-[#5227FF]/50 hover:bg-[#5227FF]/5 hover:text-[#5227FF]",
                    "hover:-translate-y-[1px]"
                  )}
                >

                  <span className="transition-transform duration-200 group-hover:-translate-y-[1px]">
                    {icon}
                  </span>

                  <span>{label}</span>

                </a>
              )
            })}

          </nav>

        </header>

        {/* Form Container */}
        <div
          className={cn(
            "max-w-2xl mx-auto",
            "p-8 md:p-12",
            "rounded-[2.5rem]",
            "border border-border/50",
            "bg-card/30 backdrop-blur-sm",
            "shadow-sm shadow-black/[0.02] dark:shadow-white/[0.02]"
          )}
        >

          <ContactForm />

        </div>

      </div>
    </section>
  )
}