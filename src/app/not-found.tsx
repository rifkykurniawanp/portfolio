"use client"

import Link from "next/link"
import FuzzyText from "@/components/animations/FuzzyText"

export default function NotFound() {
  return (
    <main className="relative flex min-h-[100svh] flex-col items-center justify-center gap-10 overflow-hidden px-6 text-center">

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">

        <div className="absolute w-[600px] h-[600px] bg-indigo-500/10 blur-[160px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        <div className="absolute w-[500px] h-[500px] bg-blue-400/10 blur-[140px] rounded-full bottom-0 left-10" />

      </div>

      {/* 404 */}
      <FuzzyText
        gradient={["#5227FF", "#3B82F6"]}
        baseIntensity={0.2}
        hoverIntensity={0.6}
        className="w-[260px] h-[120px] md:w-[320px] md:h-[140px]"
      >
        404
      </FuzzyText>

      <p className="text-neutral-500 text-lg max-w-md">
        The page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="px-6 py-3 rounded-lg bg-neutral-900 text-white text-sm font-medium hover:bg-[#5227FF] transition"
      >
        Back to Home
      </Link>

    </main>
  )
}