import AboutMe from "@/components/aboutme/aboutme"
import Contact from "@/components/contactme/contactme"
import Education from "@/components/education/education"
import Experience from "@/components/experience/experience"
import Organization from "@/components/organization/organization"
import Projects from "@/components/project/project"

export default function HomePage() {
  return (
    <>
      <AboutMe />
      <br />
      <div>social media </div>
      <br />
      <Education />
      <br />
      <Experience />
      <br />
      <Organization />
      <br />
      <Projects />
      <br />
      <Contact />

    </>
  )
}