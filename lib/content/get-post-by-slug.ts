import { getContentBySlug } from './mdx'
import type { Post, PostFrontmatter } from './types'

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const result = getContentBySlug<PostFrontmatter>('blog', slug)
  if (!result) return null

  const { frontmatter, content, readingTime } = result

  return {
    slug,
    title: frontmatter.title,
    description: frontmatter.description,
    date: frontmatter.date,
    tags: frontmatter.tags || [],
    published: frontmatter.published !== false,
    readingTime,
    content,
  }
}
