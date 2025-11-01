import Link from 'next/link'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { Container } from '@/components/container'
import { ProjectCard } from '@/components/project-card'
import { BlogCard } from '@/components/blog-card'
import { getAllProjects } from '@/lib/content/get-all-projects'
import { getAllPosts } from '@/lib/content/get-all-posts'

export default async function Home() {
  const projects = await getAllProjects()
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3)
  const posts = await getAllPosts()
  const latestPosts = posts.slice(0, 3)

  return (
    <>
      {/* Hero Section */}
      <section className="border-b border-border bg-muted/50 py-20 md:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="heading-1 mb-6">
              Hi, I&apos;m{' '}
              <span className="text-primary">Ryan Anderson</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              I&apos;m a software engineer passionate about building elegant
              solutions to complex problems. I specialize in full-stack
              development with a focus on modern web technologies and AI
              applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 font-medium transition-colors hover:bg-muted"
              >
                Read the Blog
              </Link>
            </div>
            <div className="mt-8 flex justify-center gap-4">
              <a
                href="https://github.com/ryan5anderson"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 transition-colors hover:bg-muted"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ryananderson135/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 transition-colors hover:bg-muted"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:anderson.t.ryan@gmail.com"
                className="rounded-lg p-2 transition-colors hover:bg-muted"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="py-16 md:py-24">
          <Container>
            <div className="mb-12">
              <h2 className="heading-2 mb-4">Featured Projects</h2>
              <p className="text-lg text-muted-foreground">
                A selection of my recent work and side projects.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                View all projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Container>
        </section>
      )}

      {/* Latest Posts */}
      {latestPosts.length > 0 && (
        <section className="border-t border-border bg-muted/30 py-16 md:py-24">
          <Container>
            <div className="mb-12">
              <h2 className="heading-2 mb-4">Latest Writing</h2>
              <p className="text-lg text-muted-foreground">
                Thoughts on software development, technology, and more.
              </p>
            </div>
            <div className="space-y-6">
              {latestPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                View all posts
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Container>
        </section>
      )}
    </>
  )
}
