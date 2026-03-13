import { AcademicEntry, Certification, TechSkill, SoftSkill } from "@/types"

export const academicEntries: AcademicEntry[] = [
  {
    year: "February 2025 – August 2025",
    institution: "RevoU",
    program: "Full Stack Software Engineering Program",
    description:
      "Intensive software engineering training focusing on modern web development using JavaScript, TypeScript, React, REST API development, and PostgreSQL.",
    badge: "Exemplary Graduate",
    logo: "/logo/revou.svg",
  },
  {
    year: "2016 – 2023",
    institution: "Universitas Muhammadiyah Semarang",
    program: "Faculty of Medicine",
    description: "",
    logo: "/logo/unimus.png",
    subEntries: [
      {
        year: "November 2021 – December 2023",
        program: "Medical Doctor Program (Profesi Dokter)",
        description:
          "Professional clinical rotations emphasizing diagnostic reasoning, patient care, and evidence-based practice.",
        badge: "Cumlaude Graduate",
      },
      {
        year: "September 2016 – May 2021",
        program: "Bachelor of Medicine (S.Ked)",
        description:
          "Pre-clinical medical education covering basic sciences, pathophysiology, and foundational clinical skills.",
      },
    ],
  },
]

export const certifications: Certification[] = [
  {
    title: "Full Stack Software Engineering",
    issuer: "RevoU",
    logo: "/logo/revou.svg",
    date: "August 2025",
    images: [
      { src: "/picture/certificated/revou-certificate.webp", label: "Certificate" },
    ],
    activityImages: [
      { src: "/picture/certificated/dokumen-revou.webp", label: "Activity" },
      { src: "/picture/certificated/dokumen-revou2.webp", label: "Activity" },
    ],
  },
  {
    title: "Advanced Cardiovascular Life Support (ACLS)",
    issuer: "Indonesian Heart Association",
    logo: "/logo/perki.png",
    date: "May 2025",
    images: [
      { src: "/picture/certificated/acls-certificate.png", label: "Certificate" },
    ],
    activityImages: [
      { src: "/picture/certificated/dokumen-acls.webp", label: "Activity" },
    ],
  },
  {
    title: "Modern Circumcision Workshop",
    issuer: "Operator Sunat Indonesia (OSI)",
    logo: "/logo/osi.png",
    date: "July 2025",
    images: [
      { src: "/picture/certificated/osi-certificate.png", label: "Certificate" },
    ],
    activityImages: [
      { src: "/picture/certificated/dokumen-osi.webp", label: "Activity" },
    ],
  },
  {
    title: "Health Corporate Hygiene (Hiperkes) & Occupational Safety",
    issuer: "Ministry of Manpower, Indonesia",
    logo: "/logo/k3.png",
    date: "December 2023",
    images: [
      { src: "/picture/certificated/hiperkes-certificate.webp", label: "Certificate" },
    ],
    activityImages: [
      { src: "/picture/certificated/dokumen-hiperkes.webp", label: "Activity" },
    ],
  },
]

export const techSkills: TechSkill[] = [
  { name: "Html", icon: "/logo/html.png" },
  { name: "css", icon: "/logo/css.png" },
  { name: "tailwind", icon: "/logo/tailwind.png" },
  { name: "JavaScript", icon: "/logo/javascript.svg" },
  { name: "TypeScript", icon: "/logo/typescript.svg" },
  { name: "React", icon: "/logo/react.svg" },
  { name: "Next.js", icon: "/logo/nextjs.svg" },
  { name: "Nest.js", icon: "/logo/nestjs.svg" },
  { name: "Node.js", icon: "/logo/nodejs.png" },
  { name: "PostgreSQL", icon: "/logo/postgree.svg" },
  { name: "Supabase", icon: "/logo/supabase.png" },
  { name: "Postman", icon: "/logo/postman.png" },
  { name: "prismaORM", icon: "/logo/prisma-orm.png" },
  { name: "Vercel", icon: "/logo/vercel.png" },
]

export const medicalSkills: string[] = [
  "Advanced Cardiovascular Life Support (ACLS)",
  "Basic Life Support (BLS)",
  "Occupational Health Physician Certification (Hiperkes Dokter)",
  "ISO 45001",
  "Workplace medical examinations (MCU)",
  "workplace hazard risk evaluation",
  "Emergency patient assessment",
  "cardiopulmonary resuscitation (CPR)",
  "minor surgical",
  "Modern Circumcision",
]


export const softSkills: string[] = [
  "Critical Thinking",
  "Problem-solving",
  "Teamwork",
  "Client-centric approach",
  "Analytical thinking",
]