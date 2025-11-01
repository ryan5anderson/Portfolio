import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

export function getContentDirectory(type: 'blog' | 'projects') {
  return path.join(process.cwd(), 'content', type)
}

export function getAllSlugs(type: 'blog' | 'projects'): string[] {
  const contentDir = getContentDirectory(type)

  if (!fs.existsSync(contentDir)) {
    return []
  }

  const files = fs.readdirSync(contentDir)
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''))
}

export function getContentBySlug<T>(
  type: 'blog' | 'projects',
  slug: string
): { frontmatter: T; content: string; readingTime?: string } | null {
  try {
    const contentDir = getContentDirectory(type)
    const filePath = path.join(contentDir, `${slug}.mdx`)

    if (!fs.existsSync(filePath)) {
      return null
    }

    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)

    const stats = type === 'blog' ? readingTime(content) : undefined

    return {
      frontmatter: data as T,
      content,
      readingTime: stats?.text,
    }
  } catch (error) {
    console.error(`Error reading ${type} content:`, error)
    return null
  }
}
