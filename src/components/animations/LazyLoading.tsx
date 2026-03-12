"use client"
import dynamic from "next/dynamic"

export const Education = dynamic(() => import("@/components/education/Education"))
export const Experience = dynamic(() => import("@/components/experience/Experience"))
export const Organization = dynamic(() => import("@/components/organization/Organization"))
export const Project = dynamic(() => import("@/components/project/Project"))
export const Contact = dynamic(() => import("@/components/contactme/Contactme"))