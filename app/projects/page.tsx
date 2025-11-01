import { Container } from '@/components/container'
import { SectionHeading } from '@/components/section-heading'
import { ProjectGrid } from '@/components/project-grid'
import { getAllProjects } from '@/lib/content/get-all-projects'

export default async function ProjectsPage() {
  const projects = await getAllProjects()

  return (
    <Container className="py-16 md:py-24">
      <SectionHeading
        title="Projects"
        description="A collection of my work, side projects, and experiments."
      />

      <ProjectGrid projects={projects} />
    </Container>
  )
}
