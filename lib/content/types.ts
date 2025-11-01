export interface Post {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  published: boolean
  readingTime?: string
  content: string
}

export interface Project {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  published: boolean
  featured: boolean
  repo?: string
  demo?: string
  thumbnail?: string
  content: string
}

export interface PostFrontmatter {
  title: string
  description: string
  date: string
  tags: string[]
  published?: boolean
}

export interface ProjectFrontmatter {
  title: string
  description: string
  date: string
  tags: string[]
  published?: boolean
  featured?: boolean
  repo?: string
  demo?: string
  thumbnail?: string
}
