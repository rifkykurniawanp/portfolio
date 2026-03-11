import { Github, Linkedin, ArrowUp } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200 mt-24">

      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-sm text-neutral-600">
            © {new Date().getFullYear()} Rifky Kurniawan Putra
          </p>

          <div className="flex items-center gap-6 text-sm text-neutral-600">

            <a href="#about" className="hover:text-black transition">
              About
            </a>

            <a href="#projects" className="hover:text-black transition">
              Projects
            </a>

            <a href="#experience" className="hover:text-black transition">
              Experience
            </a>

            <a href="#contact" className="hover:text-black transition">
              Contact
            </a>

          </div>

          <div className="flex items-center gap-3">

            <a
              href="https://github.com/rifkykurniawanp"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-neutral-100 transition"
            >
              <Github size={16} />
            </a>

            <a
              href="https://linkedin.com/in/rifkykurniawanputra/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-neutral-100 transition"
            >
              <Linkedin size={16} />
            </a>

            <a
              href="#"
              className="p-2 rounded-md hover:bg-neutral-100 transition"
            >
              <ArrowUp size={16} />
            </a>

          </div>

        </div>
        
        <div className="text-center text-xs text-neutral-500 mt-6">
          Built with Next.js · TailwindCSS · TypeScript
        </div>

      </div>

    </footer>
  )
}