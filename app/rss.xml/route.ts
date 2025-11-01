import RSS from 'rss'
import { getAllPosts } from '@/lib/content/get-all-posts'

export async function GET() {
  const posts = await getAllPosts()

  const feed = new RSS({
    title: 'Ryan Anderson - Blog',
    description:
      'Personal blog of Ryan Anderson, a software engineer specializing in full-stack development.',
    feed_url: 'https://yoursite.com/rss.xml',
    site_url: 'https://yoursite.com',
    language: 'en',
    pubDate: new Date().toUTCString(),
    copyright: `All rights reserved ${new Date().getFullYear()}, Ryan Anderson`,
  })

  posts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.description,
      url: `https://yoursite.com/blog/${post.slug}`,
      date: new Date(post.date),
      categories: post.tags,
    })
  })

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}
