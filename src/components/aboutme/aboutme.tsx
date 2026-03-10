import { aboutData } from "@/data/about"
import AboutBio from "./AboutBio"
import AboutPhoto from "./AboutPhoto"

export default function AboutMe() {
  return (
    <section id="about" className="w-full">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AboutBio data={aboutData} />
          <AboutPhoto name={aboutData.name} />
        </div>
      </div>
    </section>
  )
}