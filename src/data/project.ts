import { Project } from "@/types"
export const projects: Project[] = [
{
  id: 1,
  slug: "ruind-edu-commerce",
  title: "RUIND EDU-COMMERCE",

  description:
  "Integrated e-learning and e-commerce platform.",

  longDescription:
  "RUIND EDU-COMMERCE is a web-based integrated platform...",

  image: "/picture/project/final-project/homepage.webp",

  images: [
    "/picture/project/final-project/admindashboard.webp",
    "/picture/project/final-project/adminlogin.webp",
    "/picture/project/final-project/coursedetail.webp",
    "/picture/project/final-project/coursepage.webp",
    "/picture/project/final-project/filter.webp",
    "/picture/project/final-project/mobileview.webp",
  ],

  tech: ["Next.js","TypeScript","Tailwind", "Radix UI","shadcn/ui","React"],

  demo: "https://your-demo-link.com",
  github: "https://final-project-fe-rifkykurniawanp-3w739adr6.vercel.app/",

  featured: true,
  status: "full-stack",
  year: "2025",

  projectType: "Individual",
  projectBy: "REVOU",
  period: "Jun 2025 - Aug 2025",

  tools: [
    "Next.js",
    "TypeScript",
    "Tailwind",
    "NextAuth",
    "Radix UI",
    "shadcn/ui",
    "PostgreSQL"
  ],

  about: {
    goal:
    "developing an integrated e-commerce and e-learning platform designed for tea, coffee, and herbal product enthusiasts, enabling users to purchase premium products while accessing structured educational content to develop brewing and barista skills within a unified digital ecosystem",

    process:
    "Developed using modern full-stack architecture with component-based UI.",

    output:
    "A fully functional learning and commerce platform."
  },

  method: [
    "Component-based architecture",
    "REST API integration",
    "Authentication & RBAC",
    "Responsive UI",
    "Agile development"
  ]
},
{
  id: 2,
  slug: "revo-fun",
  title: "REVO FUN",

  description:
  "game platform with three games in it.",

  longDescription:
  "REVO FUN is a web-based on html and css game platform with three games in it...",

  image: "/picture/project/milestone-2.webp",

  images: [
    "/picture/project/milestone-2/game1.webp",
    "/picture/project/milestone-2/game2.webp",
    "/picture/project/milestone-2/game3.webp",
  ],

  tech: ["Next.js","TypeScript","Tailwind"],

  demo: "https://your-demo-link.com",
  github: "https://github.com/rifkykurniawanp/project-one",

  featured: true,
  status: "basic",
  year: "2025",

  projectType: "Individual",
  projectBy: "REVOU",
  period: "Jun 2025 - Aug 2025",

  tools: [
    "Next.js",
    "TypeScript",
    "Tailwind",
    "NextAuth",
    "Radix UI",
    "shadcn/ui",
    "PostgreSQL"
  ],

  about: {
    goal:
    "developing an integrated e-commerce and e-learning platform designed for tea, coffee, and herbal product enthusiasts, enabling users to purchase premium products while accessing structured educational content to develop brewing and barista skills within a unified digital ecosystem",

    process:
    "Developed using modern full-stack architecture with component-based UI.",

    output:
    "A fully functional learning and commerce platform."
  },

  method: [
    "Component-based architecture",
    "REST API integration",
    "Authentication & RBAC",
    "Responsive UI",
    "Agile development"
  ]
}
]