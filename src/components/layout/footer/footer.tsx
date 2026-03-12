import { Github as GithubIcon, Linkedin as LinkedinIcon, ArrowUp as ArrowUpIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Footer() {
  return (
    <footer className={cn(
      "w-full mt-24",
      "border-t border-border",
      "bg-background/60 backdrop-blur-md"
    )}>
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Rifky Kurniawan Putra
          </p>

          {/* Nav links */}
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            {["about", "project", "experience", "contactme"].map((href) => (
              <a
                key={href}
                href={`#${href}`}
                className="capitalize hover:text-foreground transition-colors duration-200"
              >
                {href === "contactme" ? "Contact" : href}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            {[
              {
                href: "https://github.com/rifkykurniawanp",
                icon: <GithubIcon size={18} />,
                label: "GitHub",
              },
              {
                href: "https://linkedin.com/in/rifkykurniawanputra/",
                icon: <LinkedinIcon size={18} />,
                label: "LinkedIn",
              },
              {
                href: "#",
                icon: <ArrowUpIcon size={18} />,
                label: "Back to top",
              },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className={cn(
                  "p-2 rounded-lg",
                  "text-muted-foreground hover:text-foreground",
                  "hover:bg-muted border border-transparent hover:border-border",
                  "transition-all duration-200"
                )}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div className="text-center text-xs text-muted-foreground/60 mt-8">
          Built with Next.js · TailwindCSS · TypeScript
        </div>
      </div>
    </footer>
  )
}