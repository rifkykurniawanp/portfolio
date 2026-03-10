import { organizations } from "@/data/organization"
import OrganizationCard from "./OrganizationCard"

export default function Organizations() {
  return (
    <section id="organization" className="w-full">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold mb-12">Organizations</h2>
        <div className="overflow-hidden">
          <div className="flex gap-6 animate-scroll">
            {organizations.map((org, index) => (
              <OrganizationCard key={index} org={org} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}