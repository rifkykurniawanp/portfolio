import AboutMe from "@/components/Aboutme/AboutMe"
import { Education, Experience, Organization, Project, Contact } from "@/components/animations/LazyLoading"

export default function HomePage() {
  return (
    <>
      <AboutMe />
      <Education />
      <Experience />
      <Organization />
      <Project />
      <Contact />
    </>
  )
}