import Image from "next/image"; 

export default function AboutMe() {
  return (
    <section id="aboutme" className="w-full">
      <div className="max-w-6xl mx-auto px-6 py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-2xl font-bold">
              About Me
            </h2>

            <p className="mt-4">
              Hello, I am Rifky. I am interested in web development,
              system design, and building digital solutions.
              I enjoy learning new technologies and creating
              applications that solve real problems.
            </p>

            <p className="mt-4">
              Currently I focus on modern web technologies
              such as React, Next.js, and TypeScript.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
  <Image
    src="/assets/profile.jpg"
    alt="profile"
    width={256}
    height={256}
    className="object-cover"
  />
</div>

        </div>

      </div>
    </section>
  )
}