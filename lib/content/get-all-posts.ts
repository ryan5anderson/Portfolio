import { getAllSlugs, getContentBySlug } from './mdx'
import type { Post, PostFrontmatter } from './types'

export async function getAllPosts(): Promise<Post[]> {
  const slugs = getAllSlugs('blog')

  const posts = slugs
    .map((slug) => {
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
      } as Post
    })
    .filter((post): post is Post => post !== null)
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts
}
