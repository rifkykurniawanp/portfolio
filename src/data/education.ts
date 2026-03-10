import { AcademicEntry, Certification, TechSkill } from "@/types"

export const academicEntries: AcademicEntry[] = [
  {
    year: "2024",
    institution: "RevoU",
    program: "Full Stack Software Engineering Program",
    description:
      "Intensive software engineering training focusing on modern web development using JavaScript, TypeScript, React, REST API development, and PostgreSQL.",
    badge: "Exemplary Graduate",
    logo: "RV",
  },
  {
    year: "2018 – 2024",
    institution: "Medical Doctor Program",
    program: "Faculty of Medicine",
    description:
      "Professional medical education with clinical rotations across multiple departments emphasizing diagnostic reasoning, patient care, and evidence-based practice.",
    logo: "MD",
  },
]

export const techSkills: TechSkill[] = [
  { name: "TypeScript", icon: "/tech/typescript.svg" },
  { name: "React", icon: "/tech/react.svg" },
  { name: "Next.js", icon: "/tech/nextjs.svg" },
  { name: "Node.js", icon: "/tech/nodejs.svg" },
  { name: "PostgreSQL", icon: "/tech/postgresql.svg" },
  { name: "REST API", icon: "/tech/api.svg" },
]

export const medicalSkills: string[] = [
  "Clinical Assessment",
  "Evidence-Based Medicine",
  "Patient Management",
  "Medical Documentation",
  "Clinical Decision Making",
  "Interdisciplinary Collaboration",
]

export const certifications: Certification[] = [
  { title: "Full Stack Software Engineering", issuer: "RevoU", logo: "RV" },
  { title: "Web Development Fundamentals", issuer: "Online Certification", logo: "WD" },
  { title: "Database & Backend Development", issuer: "Online Certification", logo: "DB" },
]