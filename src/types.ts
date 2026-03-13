import { LucideIcon } from "lucide-react"

export type NavItem = {
  label: string;
  href: string;
};

export type NavbarProps = {
  name: string;
  items: NavItem[];
};

export type SocialLink = {
  label: string
  href: string
  icon: LucideIcon
  hoverColor: string
  active: boolean
}

export type AboutData = {
  name: string
  location: string
  status: string
  cvUrl: string
  paragraphs: string[]
  socials: SocialLink[]
}

export type TechSkill = {
  name: string
  icon: string
}

export type SoftSkill = {
  name: string
  icon: string
}

export type AcademicEntry = {
  year: string
  institution: string
  program: string
  faculty?: string
  description: string
  badge?: string
  logo: string
  subEntries?:{
    year: string
    program: string
    description: string
    badge?: string

  }[]
}

export interface Certification {
  title: string
  issuer: string
  logo: string
  date?: string
  images?: {
    src: string
    alt?: string
    label?: string 
  }[]
  activityImages?: {
    src: string
    alt?: string
    label?: string
  }[]
}

export type WorkplaceEntry = {
  name: string
  location: string
  logo: string
  period: string
  points: string[]
}

export type ExperienceEntry = {
  title: string
  workplaces: WorkplaceEntry[]
}


export type Organization = {
  id: string
  name: string
  role: string
  image: string
  logo: string
  period?: string
}

export type Project = {
  id: number
  slug: string

  title: string
  description: string
  longDescription?: string

  image: string
  images?: string[]

  tech: string[]

  demo?: string
  github?: string

  featured?: boolean
  status?: "full-stack" | "front-end" | "back-end" | "basic"
  year?: string

  /* NEW DETAIL PAGE DATA */

  projectType?: "Individual" | "Team"
  projectBy?: string
  period?: string

  tools?: string[]

  about?: {
    goal: string
    process: string
    output: string
  }

  method?: string[]
}

