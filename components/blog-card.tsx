import Link from 'next/link'
import { Calendar, Clock } from 'lucide-react'
import { Tag } from './tag'
import type { Post } from '@/lib/content/types'

interface BlogCardProps {
  post: Post
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group rounded-lg border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-0.5">
      <Link href={`/blog/${post.slug}`}>
        <h3 className="heading-4 mb-3 line-clamp-2 group-hover:text-primary">
          {post.title}
        </h3>
      </Link>

      <p className="mb-4 line-clamp-3 text-muted-foreground">
        {post.description}
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        {post.tags.slice(0, 3).map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
        <time className="flex items-center gap-1.5">
          <Calendar className="h-4 w-4" />
          {new Date(post.date).toLocaleDateString('en-US', {
            month: 'short',
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
    </article>
  )
}
