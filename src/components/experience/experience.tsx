export default function Experience() {
  return (
    <section id="experience" className="w-full">
      <div className="max-w-6xl mx-auto px-6 py-24">

        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-2xl font-bold">
            Experience
          </h2>
        </div>

        <div className="space-y-20">

          {/* Section 1 */}
          <div>
            <h3 className="text-xl font-semibold mb-8">
              General Practitioner
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              <div>
                <p className="font-medium">Primary Care Practice</p>
                <p>Patient diagnosis and management</p>
              </div>

              <div>
                <p className="font-medium">Clinical Documentation</p>
                <p>Medical records and treatment planning</p>
              </div>

            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h3 className="text-xl font-semibold mb-8">
              Internship Doctor
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              <div>
                <p className="font-medium">Hospital Rotation</p>
                <p>Internal medicine, surgery, pediatrics</p>
              </div>

              <div>
                <p className="font-medium">Emergency Care</p>
                <p>Initial patient stabilization and triage</p>
              </div>

            </div>
          </div>

          {/* Section 3 */}
          <div>
            <h3 className="text-xl font-semibold mb-8">
              Teaching Assistant
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              <div>
                <p className="font-medium">Medical Education</p>
                <p>Guiding junior students in clinical skills</p>
              </div>

              <div>
                <p className="font-medium">Academic Support</p>
                <p>Assisting lecturers in practical sessions</p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}