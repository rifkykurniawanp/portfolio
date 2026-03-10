"use client"

import { useEffect, useRef, useState } from "react"

type Organization = {
  name: string
  role: string
  image: string
}

const organizations: Organization[] = [
  {
    name: "Medical Volunteer",
    role: "Volunteer Doctor",
    image: "/organizations/org1.jpg",
  },
  {
    name: "BEM Faculty",
    role: "Staff",
    image: "/organizations/org2.jpg",
  },
  {
    name: "Health Campaign",
    role: "Coordinator",
    image: "/organizations/org3.jpg",
  },
  {
    name: "Research Club",
    role: "Member",
    image: "/organizations/org4.jpg",
  },
  {
    name: "Tech Community",
    role: "Participant",
    image: "/organizations/org5.jpg",
  },
]

export default function Organization() {

  const [index, setIndex] = useState(0)
  const [pause, setPause] = useState(false)

  const touchStart = useRef<number | null>(null)

  const total = organizations.length

  useEffect(() => {
    if (pause) return

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % total)
    }, 2000)

    return () => clearInterval(interval)
  }, [pause, total])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {

    if (!touchStart.current) return

    const diff = touchStart.current - e.changedTouches[0].clientX

    if (diff > 50) {
      setIndex((prev) => (prev + 1) % total)
    }

    if (diff < -50) {
      setIndex((prev) => (prev - 1 + total) % total)
    }

    touchStart.current = null
  }

  return (
    <section id="organization" className="w-full overflow-hidden">

      <div className="max-w-6xl mx-auto px-6 py-24">

        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold">
            Organizations
          </h2>
        </div>

        <div
          className="overflow-hidden"
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >

          <div
            className="flex transition-transform duration-700"
            style={{
              transform: `translateX(-${index * (100 / 3)}%)`,
            }}
          >

            {organizations.map((org, i) => (
              <div
                key={i}
                className="w-full md:w-1/3 flex-shrink-0 p-4"
              >

                <div
                  className="relative h-72 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${org.image})`
                  }}
                >

                  <div className="absolute inset-0 bg-black/40"></div>

                  <div className="absolute bottom-4 left-4 text-white">

                    <h3 className="font-semibold">
                      {org.name}
                    </h3>

                    <p className="text-sm">
                      {org.role}
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  )
}