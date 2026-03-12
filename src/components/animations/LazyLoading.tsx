"use client"
import dynamic from "next/dynamic"

export const Education = dynamic(() => import("@/components/Education/Education"))
export const Experience = dynamic(() => import("@/components/Experience/Experience"))
export const Organization = dynamic(() => import("@/components/Organization/Organization"))
export const Project = dynamic(() => import("@/components/Project/Project"))
export const Contact = dynamic(() => import("@/components/Contactme/Contactme"))