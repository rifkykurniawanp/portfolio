import { type Certification } from "@/types"

interface CertificationCardProps {
  cert: Certification
}

export default function CertificationCard({ cert }: CertificationCardProps) {
  return (
    <div className="relative border border-neutral-200 rounded-lg p-5">

      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center">
        <span className="text-xs font-bold text-neutral-600">{cert.logo}</span>
      </div>

      <p className="font-medium pr-10">{cert.title}</p>
      <p className="text-sm text-neutral-500 mt-1">{cert.issuer}</p>

    </div>
  )
}