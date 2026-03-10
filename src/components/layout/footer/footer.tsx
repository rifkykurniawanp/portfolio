export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200">

      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">

        <p className="text-sm text-neutral-600">
          © {new Date().getFullYear()} Rifky Kurniawan Putra
        </p>


      </div>

    </footer>
  )
}