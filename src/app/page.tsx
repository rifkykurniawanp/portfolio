import AboutMe from "@/components/aboutme/AboutMe"
import Education from "@/components/education/Education"
import Experience from "@/components/experience/Experience"
import Organizations from "@/components/organization/Organization"
import Project from "@/components/project/Project"
import ContactMe from "@/components/contactme/Contactme"

export default function HomePage() {
  return (
    <main>
      <AboutMe />
      <Education />
      <Experience />
      <Organizations />
      <Project />
      <ContactMe />
    </main>
  )
}