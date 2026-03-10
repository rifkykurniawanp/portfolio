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

export type AcademicEntry = {
  year: string
  institution: string
  program: string
  faculty?: string
  description: string
  badge?: string
  logo: string
}

export type Certification = {
  title: string
  issuer: string
  logo: string
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
  name: string
  role: string
  image: string
  logo: string
}