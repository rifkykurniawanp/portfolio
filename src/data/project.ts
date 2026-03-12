import { Project } from "@/types"

export const projects: Project[] = [
  {
    slug: "Final Project",
    title: "Project One",
    description: "RUIND EDU-COMMERCE is a web-based integrated e-learning and e-commerce platform built for coffee, tea, and herbal enthusiasts to learn and shop in one place.",
    longDescription: `
      RUIND EDU-COMMERCE is a web-based integrated e-learning and e-commerce platform built for coffee, tea, and herbal enthusiasts to learn and shop in one place. Built with Next.js 15 and Tailwind CSS plus Shadcn UI components on the frontend, using TypeScript throughout, with TanStack Query for server state management and React Hook Form with Zod for form validation. I contributed as a frontend developer handling UI design, API integration, and state management. The system includes secure Authentication powered by NextAuth with login, registration, role-based access (Admin/Instructor/Supplier/User), and route protection. For admins, features include a dashboard with platform analytics and reporting, user administration, course and product management, order management, and a content management system. Instructors have access to course creation and management, enrollment tracking, and lesson progress monitoring. Suppliers can manage their product catalog and track incoming orders. Regular users enjoy a personal dashboard, course enrollment with video-based lessons, interactive quizzes, progress tracking, completion certificates, a product catalog with advanced filtering by category, price, origin, and rating, a shopping cart, and secure payment processing. Additionally, the platform features real-time search with multi-filter support across both courses and products, and a fully responsive mobile interface ensuring a seamless experience across all devices. This fully functional EDU-COMMERCE platform delivers an engaging user experience, helping enthusiasts grow their knowledge while conveniently shopping for premium products in a single centralized system.
    `,
    image: "/picture/project/final-project/homepage.png",
    images: [
      "/picture/project/final-project/admindashboard.png",
      "/picture/project/final-project/admindetail.png",
      "/picture/project/final-project/coursedetail.png",
      "/picture/project/final-project/coursepage.png",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind"],
    demo: "https://your-demo-link.com",
    github: "https://github.com/rifkykurniawanp/project-one",
    featured: true,
    status: "completed",
    year: "2025",
  },
]