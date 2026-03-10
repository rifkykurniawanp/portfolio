import { MapPin, Briefcase, FileText } from "lucide-react"
import { type AboutData } from "@/types"

interface AboutBioProps {
  data: AboutData
}

export default function AboutBio({ data }: AboutBioProps) {
  return (
    <div>
      <h2 className="text-3xl font-semibold">About Me</h2>

      {data.paragraphs.map((text, index) => (
        <p key={index} className="mt-4 leading-relaxed text-neutral-700">
          {text}
        </p>
      ))}

      {/* Location & Status */}
      <div className="flex flex-wrap gap-6 mt-6 text-sm text-neutral-600">
        <div className="flex items-center gap-2">
          <MapPin size={16} />
          {data.location}
        </div>
        <div className="flex items-center gap-2">
          <Briefcase size={16} />
          {data.status}
        </div>
      </div>

      {/* CV Download */}
      <a
        href={data.cvUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-black text-white text-sm rounded-lg hover:bg-neutral-800 transition"
      >
        <span className="inline-flex items-center gap-2"/> 
        <FileText size={16} />
        Download CV
      </a>

      {/* Social Links */}
      <div className="mt-8">
        <p className="text-sm text-neutral-500 mb-4">Connect with me</p>
        <div className="flex flex-wrap gap-4">
          {data.socials
            .filter((s) => s.active)
            .map((social) => (
              
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 border border-neutral-200 rounded-lg ${social.hoverColor} transition`}
              >
                <social.icon size={18} />
                {social.label}
              </a>
            ))}
        </div>
      </div>
    </div>
  )
}