import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, ExternalLink, Github, ArrowLeft } from 'lucide-react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Container } from '@/components/container'
import { Tag } from '@/components/tag'
import { Prose } from '@/components/prose'
import { mdxComponents } from '@/components/mdx-components'
import { getProjectBySlug } from '@/lib/content/get-project-by-slug'
import { getAllProjects } from '@/lib/content/get-all-projects'
import type { Metadata } from 'next'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const projects = await getAllProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug)

  if (!project) {
    return {}
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: 'article',
      publishedTime: project.date,
      tags: project.tags,
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  const allProjects = await getAllProjects()
  const relatedProjects = allProjects
    .filter((p) => p.slug !== params.slug)
    .filter((p) => p.tags.some((tag) => project.tags.includes(tag)))
    .slice(0, 3)

  return (
    <Container className="py-16 md:py-24">
      <article>
        {/* Back link */}
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>

        {/* Header */}
        <header className="mb-8">
          <h1 className="heading-1 mb-4">{project.title}</h1>

          <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <time className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {new Date(project.date).toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric',
              })}
            </time>
          </div>

          <div className="mb-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>

          {(project.repo || project.demo) && (
            <div className="flex flex-wrap gap-4">
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
                >
                  <Github className="h-4 w-4" />
                  View Source
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              )}
            </div>
          )}
        </header>

        {/* Content */}
        <Prose>
          <MDXRemote source={project.content} components={mdxComponents} />
        </Prose>

        {/* Blog Post Link */}
        <div className="mt-12 rounded-lg border border-border bg-muted/30 p-6">
          <div className="flex items-start gap-4">
            <div className="rounded-lg bg-primary/10 p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="heading-4 mb-2">Read the Story</h3>
              <p className="mb-4 text-muted-foreground">
                Want to learn more about the journey of building this project? Check out the
                detailed blog post about the challenges, learnings, and insights.
              </p>
              <Link
                href={`/blog/${params.slug}`}
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                Read: What I Learned Building {project.title}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="mt-16 border-t border-border pt-16">
          <h2 className="heading-3 mb-6">Related Projects</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {relatedProjects.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="group rounded-lg border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                <h3 className="heading-4 mb-2 line-clamp-2 group-hover:text-primary">
                  {p.title}
                </h3>
                <p className="line-clamp-2 text-sm text-muted-foreground">
                  {p.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </Container>
  )
}
