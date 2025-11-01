import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Container } from '@/components/container'
import { Tag } from '@/components/tag'
import { Prose } from '@/components/prose'
import { mdxComponents } from '@/components/mdx-components'
import { getPostBySlug } from '@/lib/content/get-post-by-slug'
import { getAllPosts } from '@/lib/content/get-all-posts'
import type { Metadata } from 'next'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const allPosts = await getAllPosts()
  const currentIndex = allPosts.findIndex((p) => p.slug === params.slug)
  const previousPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null
  const nextPost =
    currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null

  return (
    <Container className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <article>
          {/* Back link */}
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>

          {/* Header */}
          <header className="mb-8">
            <h1 className="heading-1 mb-4">{post.title}</h1>

            <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <time className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
              {post.readingTime && (
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {post.readingTime}
                </span>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </header>

          {/* Content */}
          <Prose>
            <MDXRemote source={post.content} components={mdxComponents} />
          </Prose>

          {/* Project Link */}
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
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M7 7h10" />
                  <path d="M7 12h10" />
                  <path d="M7 17h10" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="heading-4 mb-2">View the Project</h3>
                <p className="mb-4 text-muted-foreground">
                  Interested in the technical implementation and architecture? Explore the
                  complete project details, tech stack, and features.
                </p>
                <Link
                  href={`/projects/${params.slug}`}
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  Explore the Project
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

        {/* Navigation */}
        {(previousPost || nextPost) && (
          <nav className="mt-16 border-t border-border pt-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {previousPost && (
                <Link
                  href={`/blog/${previousPost.slug}`}
                  className="group rounded-lg border border-border bg-card p-4 transition-all hover:shadow-lg hover:-translate-y-0.5"
                >
                  <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <ArrowLeft className="h-4 w-4" />
                    Previous
                  </div>
                  <div className="font-medium group-hover:text-primary">
                    {previousPost.title}
                  </div>
                </Link>
              )}
              {nextPost && (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="group rounded-lg border border-border bg-card p-4 text-right transition-all hover:shadow-lg hover:-translate-y-0.5 sm:col-start-2"
                >
                  <div className="mb-2 flex items-center justify-end gap-2 text-sm text-muted-foreground">
                    Next
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <div className="font-medium group-hover:text-primary">
                    {nextPost.title}
                  </div>
                </Link>
              )}
            </div>
          </nav>
        )}
      </div>
    </Container>
  )
}
