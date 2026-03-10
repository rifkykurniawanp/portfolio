export default function Education() {
  return (
    <section id="education" className="w-full">
      <div className="max-w-6xl mx-auto px-6 py-24">

        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-2xl font-bold">
            Education
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

          {/* LEFT SIDE - MEDICAL */}
          <div className="space-y-6">

            <h3 className="text-xl font-semibold">
              Medical Doctor
            </h3>

            <p>
              Universitas Muhammadiyah Semarang
            </p>

            <div>
              <p>S1 Kedokteran</p>
              <p>Profesi Dokter</p>
            </div>

            <div>
              <p>
                Thesis
                <a href="#" className="ml-2">
                  (Deck)
                </a>
              </p>
            </div>

            <div>
              <p>Sertifikasi</p>
            </div>

            {/* Hard Skills */}
            <div>
              <p className="font-medium">
                Hard Skills
              </p>

              <ul>
                <li>Clinical Assessment</li>
                <li>Medical Diagnosis</li>
                <li>Evidence-Based Medicine</li>
                <li>Patient Management</li>
                <li>Medical Documentation</li>
              </ul>
            </div>

          </div>

          {/* CENTER DIVIDER */}
          <div className="flex justify-center">
            <div className="h-full w-px bg-gray-300"></div>
          </div>

          {/* RIGHT SIDE - SOFTWARE ENGINEER */}
          <div className="space-y-6">

            <h3 className="text-xl font-semibold">
              Full-Stack Software Engineer
            </h3>

            <p>
              RevoU
            </p>

            <div>
              <p>Full Stack Software Engineering Program</p>
            </div>

            <div>
              <p>Projects</p>
            </div>

            {/* Hard Skills */}
            <div>
              <p className="font-medium">
                Hard Skills
              </p>

              <ul>
                <li>JavaScript / TypeScript</li>
                <li>React / Next.js</li>
                <li>Node.js</li>
                <li>REST API</li>
                <li>Database Design</li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}