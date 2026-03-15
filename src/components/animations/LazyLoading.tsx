"use client"

import dynamic from "next/dynamic"
import LazySection from "./LazySection"

const EducationComponent = dynamic(() => import("@/components/education/Education"))
const ExperienceComponent = dynamic(() => import("@/components/experience/Experience"))
const OrganizationComponent = dynamic(() => import("@/components/organization/Organization"))
const ProjectComponent = dynamic(() => import("@/components/project/Project"))
const ContactComponent = dynamic(() => import("@/components/contactme/Contactme"))

export function Education() {
  return (
    <LazySection>
      <EducationComponent />
    </LazySection>
  )
}

export function Experience() {
  return (
    <LazySection>
      <ExperienceComponent />
    </LazySection>
  )
}

export function Organization() {
  return (
    <LazySection>
      <OrganizationComponent />
    </LazySection>
  )
}

export function Project() {
  return (
    <LazySection>
      <ProjectComponent />
    </LazySection>
  )
}

export function Contact() {
  return (
    <LazySection>
      <ContactComponent />
    </LazySection>
  )
}