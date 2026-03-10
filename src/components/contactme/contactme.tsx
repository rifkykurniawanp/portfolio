import { Mail, Linkedin, Github } from "lucide-react"

export default function Contactme() {
  return (
    <section id="contactme" className="w-full">

      <div className="max-w-4xl mx-auto px-6 py-28 text-center">

        <h2 className="text-3xl font-semibold">
          Let's Work Together
        </h2>

        <p className="mt-4 text-neutral-600">
          If you are interested in collaboration,
          feel free to reach out.
        </p>

        <div className="flex justify-center gap-6 mt-10">

          <a
            href="mailto:email@email.com"
            className="flex items-center gap-2 border px-5 py-3 rounded-lg"
          >
            <Mail size={18} />
            Email
          </a>

          <a
            href="#"
            className="flex items-center gap-2 border px-5 py-3 rounded-lg"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>

          <a
            href="#"
            className="flex items-center gap-2 border px-5 py-3 rounded-lg"
          >
            <Github size={18} />
            GitHub
          </a>

        </div>

      </div>

    </section>
  )
}