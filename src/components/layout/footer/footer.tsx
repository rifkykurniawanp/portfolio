export default function Footer() {
  return (
    <footer className="border-t">

      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">

        <p>
          © {new Date().getFullYear()} Rifky Kurniawan
        </p>

        <div className="flex gap-6">

          <a href="https://github.com">GitHub</a>
          <a href="https://linkedin.com">LinkedIn</a>
          <a href="/resume.pdf">Resume</a>

        </div>

      </div>

    </footer>
  )
}