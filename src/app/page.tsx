import AboutMe from "@/components/aboutme/AboutMe"
import { Education, Experience, Organization, Project, Contact } from "@/components/animations/LazyLoading"

export default function HomePage() {
  return (
    <main>
      <AboutMe />
      <Education />
      <Experience />
      <Organization />
      <Project />
      <Contact />
    </main>
  )
}