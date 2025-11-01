import { getContentBySlug } from './mdx'
import type { Project, ProjectFrontmatter } from './types'

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const result = getContentBySlug<ProjectFrontmatter>('projects', slug)
  if (!result) return null

  const { frontmatter, content } = result

  return {
    slug,
    title: frontmatter.title,
    description: frontmatter.description,
    date: frontmatter.date,
    tags: frontmatter.tags || [],
    published: frontmatter.published !== false,
    featured: frontmatter.featured || false,
    repo: frontmatter.repo,
    demo: frontmatter.demo,
    thumbnail: frontmatter.thumbnail,
    content,
  }
}
