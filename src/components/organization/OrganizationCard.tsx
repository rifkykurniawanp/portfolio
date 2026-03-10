import Image from "next/image"
import { type Organization } from "@/types"

interface OrganizationCardProps {
  org: Organization
}

export default function OrganizationCard({ org }: OrganizationCardProps) {
  return (
    <div className="min-w-[300px] border border-neutral-200 rounded-xl overflow-hidden">
      
      {/* Gambar + Logo badge */}
      <div className="relative">
        <Image
          src={org.image}
          alt={org.name}
          width={400}
          height={250}
          className="object-cover w-full h-40"
        />

        {/* Logo inisial pojok kanan atas */}
        <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
          <span className="text-sm font-bold text-neutral-700">
            {org.logo}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold">{org.name}</h3>
        <p className="text-sm text-neutral-600 mt-1">{org.role}</p>
      </div>

    </div>
  )
}