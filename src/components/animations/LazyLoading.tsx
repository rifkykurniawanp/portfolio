"use client"

import dynamic from "next/dynamic"

export const Education = dynamic(
  () => import("@/components/education/Education"),
  { ssr: false }
)

export const Experience = dynamic(
  () => import("@/components/experience/Experience"),
  { ssr: false }
)

export const Organization = dynamic(
  () => import("@/components/organization/Organization"),
  { ssr: false }
)

export const Project = dynamic(
  () => import("@/components/project/Project"),
  { ssr: false }
)

export const Contact = dynamic(
  () => import("@/components/contactme/Contactme"),
  { ssr: false }
)