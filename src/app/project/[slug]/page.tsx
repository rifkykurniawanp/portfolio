import { notFound } from "next/navigation"
import { projects } from "@/data/project"
import ProjectPage from "@/components/project/ProjectPage"

interface Props {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function Page({ params }: Props) {
  const { slug } = await params

  const project = projects.find((p) => p.slug === slug)

  if (!project) return notFound()

  return <ProjectPage project={project} />
}