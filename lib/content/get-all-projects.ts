import { getAllSlugs, getContentBySlug } from './mdx'
import type { Project, ProjectFrontmatter } from './types'

export async function getAllProjects(): Promise<Project[]> {
  const slugs = getAllSlugs('projects')

  const projects = slugs
    .map((slug) => {
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
      } as Project
    })
    .filter((project): project is Project => project !== null)
    .filter((project) => project.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return projects
}
