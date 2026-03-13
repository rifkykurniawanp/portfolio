import { Instagram, Linkedin, Github, Mail, type LucideIcon } from "lucide-react"

import { AboutData } from "@/types"

export const aboutData: AboutData = {
  name: "Rifky Kurniawan",
  location: "Pemalang, Indonesia",
  status: "Open to Work",
  cvUrl: "/pdf-cv.pdf",
  paragraphs: [
    "I am an aspiring Software Engineer with a healthcare background who values critical thinking, precision, and evidence-based decision making.",
    "With more than 12 months of hands-on clinical experience and full-stack software engineering training at RevoU, I build modern web systems that prioritize reliability, security, and real-world usability.",
    "I work with modern JavaScript and TypeScript frameworks, RESTful API development, and PostgreSQL to deliver secure, maintainable, and scalable applications.",
    "I am passionate about combining analytical thinking from medicine with engineering practices to build impactful digital solutions.",
  ],
  socials: [
    {
      label: "Email",
      href: "mailto:krifky14@gmail.com",
      icon: Mail,
      hoverColor: "hover:bg-red-50",
      active: true,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/rifkykurniawanputra",
      icon: Linkedin,
      hoverColor: "hover:bg-blue-50",
      active: true,
    },
    {
      label: "GitHub",
      href: "https://github.com",
      icon: Github,
      hoverColor: "hover:bg-neutral-100",
      active: false,
    },
    {
      label: "Instagram",
      href: "https://instagram.com/rifkykurniawanp",
      icon: Instagram,
      hoverColor: "hover:bg-pink-50",
      active: true,
    },
  ],
}