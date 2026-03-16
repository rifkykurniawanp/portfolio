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

  demo: "https://final-project-fe-rifkykurniawanp-3w739adr6.vercel.app/",
  github: "https://github.com/rifkykurniawanp/front-end-final-project",

  featured: true,
  status: "full-stack",
  year: "2025",

  projectType: "Individual",
  projectBy: "REVOU",
  period: "June 2025 - August 2025",

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
  "REVO FUN is a web-based on html, css, and javascript game platform with three games in it...",

  longDescription:
  "Welcome to **REVOFUN, the perfect place for quick, fun, and challenging games! Our website offers three exciting games that you can enjoy anytime, anywhere: Scissors Paper Rock, Memory Card, and Guess the Number. Whether you're looking for a quick break or a challenge to sharpen your mind, these games have something for everyone!",

  image: "/picture/project/milestone-2/milestone-2.webp",

  images: [
    "/picture/project/milestone-2/game1.webp",
    "/picture/project/milestone-2/game2.webp",
    "/picture/project/milestone-2/game3.webp",
  ],

  tech: ["HTML","CSS","Javascript"],

  demo: "https://revou-fsse-feb25.github.io/milestone-2-rifkykurniawanp/",
  github: "https://github.com/revou-fsse-feb25/milestone-2-rifkykurniawanp",

  featured: true,
  status: "basic",
  year: "2025",

  projectType: "Individual",
  projectBy: "REVOU",
  period: "April 2025",

  tools: [
    "HTML",
    "CSS",
    "javascript",
  ],

  about: {
    goal:
    "make a game platform with three games in it, which are snake, tetris, and minesweeper. The game platform is made using html, css, and javascript.",

    process:
    "The project was developed using basic web technologies, focusing on creating engaging and interactive games with a user-friendly interface.",

    output:
    "A web-based game platform featuring three classic games: Scissors Paper Rock, Memory Card, and Guess the Number."
  },

  method: [
    "Basic web technologies",
    "User-friendly interface",
    "Engaging games",
    "Responsive design"
  ]
},
  {
  id:3,
  slug: "revo-shop",
  title: "REVO SHOP",

  description:
  "A simple e-commerce website built using fundamental web technologies.",

  longDescription:
  "REVO SHOP is a basic e-commerce web application developed using HTML, CSS, and JavaScript. The project demonstrates fundamental front-end development concepts including product display, simple cart interactions, and responsive layouts.",

  image: "/picture/project/milestone-3/homepage.webp",

  images: [
    "/picture/project/milestone-3/homepage.webp",
    "/picture/project/milestone-3/login.webp",
    "/picture/project/milestone-3/signin.webp"
  ],

  tech: ["Next.js","HTML", "CSS", "JavaScript", "React", "Tailwind"],

  demo: "https://milestone-3-rifkykurniawanp.vercel.app/",
  github: "https://github.com/revou-fsse-feb25/milestone-3-rifkykurniawanp",

  featured: true,
  status: "front-end",
  year: "2025",

  projectType: "Individual",
  projectBy: "REVOU",
  period: "May 2025",

  tools: [
    "HTML",
    "CSS",
    "JavaScript",
    "Next.js",
    "React",
    "Tailwind"
  ],

  about: {
    goal:
    "To build a basic e-commerce interface using core front-end technologies.",

    process:
    "Developed a responsive web interface that displays product listings and demonstrates basic user interactions using JavaScript.",

    output:
    "A simple front-end e-commerce website showcasing product layouts and responsive design."
  },

  method: [
    "Responsive web design",
    "DOM manipulation",
    "Basic UI interaction",
    "Layout structuring with HTML & CSS"
  ]
},
]