import { aboutData } from "@/data/about"
import AboutBio from "./AboutBio"
import AboutPhoto from "./AboutPhoto"

export default function AboutMe() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="w-full"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">

        <h2
          id="about-heading"
          className="sr-only"
        >
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

          <div className="w-full">
            <AboutBio data={aboutData} />
          </div>

          <div className="w-full flex justify-center md:justify-end">
            <AboutPhoto name={aboutData.name} />
          </div>

        </div>
      </div>
    </section>
  )
}