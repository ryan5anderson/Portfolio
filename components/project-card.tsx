import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'
import { Tag } from './tag'
import type { Project } from '@/lib/content/types'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-0.5">
      <div className="mb-4 flex items-start justify-between">
        <h3 className="heading-4 line-clamp-2">{project.title}</h3>
      </div>

      <p className="mb-4 line-clamp-3 flex-1 text-muted-foreground">
        {project.description}
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        {project.tags.slice(0, 4).map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <div className="flex items-center justify-between gap-4 text-sm">
        <time className="text-muted-foreground">
          {new Date(project.date).toLocaleDateString('en-US', {
            month: 'short',
            year: 'numeric',
          })}
        </time>

        <div className="flex gap-2">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 transition-colors hover:bg-muted"
              aria-label="View source code"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 transition-colors hover:bg-muted"
              aria-label="View demo"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
          <Link
            href={`/projects/${project.slug}`}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  )
}
