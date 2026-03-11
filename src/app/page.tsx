import AboutMe from "@/components/aboutme/AboutMe"
import Contact from "@/components/contactme/Contactme"
import Education from "@/components/education/Education"
import Experience from "@/components/experience/Experience"
import Organization from "@/components/organization/Organization"
import Project from "@/components/project/Project"

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