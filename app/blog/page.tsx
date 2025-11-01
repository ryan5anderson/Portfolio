import { Container } from '@/components/container'
import { SectionHeading } from '@/components/section-heading'
import { BlogList } from '@/components/blog-list'
import { getAllPosts } from '@/lib/content/get-all-posts'

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <Container className="py-16 md:py-24">
      <SectionHeading
        title="Blog"
        description="Thoughts on software development, technology, and more."
      />

      <BlogList posts={posts} />
    </Container>
  )
}
