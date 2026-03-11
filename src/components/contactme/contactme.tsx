
import { Mail, Linkedin, Github } from "lucide-react"

export default function Contactme() {
  return (
    <section id="contactme" className="w-full">

      <div className="max-w-4xl mx-auto px-6 py-28 text-center">

        <h2 className="text-3xl font-semibold">
          Let's Work Together
        </h2>

        <p className="mt-4 text-neutral-600 max-w-xl mx-auto">
          Interested in collaborating or discussing a project?
          Feel free to reach out through any platform below.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">

          <a
            href="mailto:krifky14@gmail.com"
            className="flex items-center gap-2 border border-neutral-300 px-5 py-3 rounded-lg hover:bg-neutral-900 hover:text-white transition"
          >
            <Mail size={18} />
            Email
          </a>

          <a
            href="https://linkedin.com/in/rifkykurniawanputra/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-neutral-300 px-5 py-3 rounded-lg hover:bg-neutral-900 hover:text-white transition"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>

          <a
            href="https://github.com/rifkykurniawanp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-neutral-300 px-5 py-3 rounded-lg hover:bg-neutral-900 hover:text-white transition"
          >
            <Github size={18} />
            GitHub
          </a>

        </div>

      </div>

    </section>
  )
}
