# Ryan Anderson - Portfolio & Blog

A modern, responsive personal website for Ryan Anderson, a software engineer and AI developer. Built with Next.js 14, TypeScript, and Tailwind CSS. Features 6 real projects with matching reflective blog posts, comprehensive experience showcase, and optimized performance.

## Features

- 🎨 **Modern Design**: Clean, professional interface with light/dark theme support
- 📱 **Fully Responsive**: Mobile-first design that looks great on all devices
- ⚡ **Fast Performance**: Built with Next.js 14 App Router for optimal loading speeds
- 📝 **MDX Blog**: 6 reflective "What I Learned" blog posts paired with projects
- 🎯 **SEO Optimized**: Automatic sitemap, RSS feed, and meta tags
- ♿ **Accessible**: WCAG compliant with proper semantic HTML
- 🎭 **Theme Toggle**: Light and dark mode with system preference detection
- 📊 **Project Showcase**: 6 real projects (RAG, AI, full-stack, DevOps)
- 🔗 **Cross-Linked**: Each project links to its blog post and vice versa
- 📮 **Contact Form**: Built-in contact form with real contact information
- 👤 **About Page**: Real experience from Resolution Life, Softchoice, SwiftShift

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: MDX with [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Deployment**: [Vercel](https://vercel.com) (recommended)

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                      # Next.js App Router pages
│   ├── (site)/              # Site routes group
│   │   ├── about/           # About page
│   │   ├── blog/            # Blog pages
│   │   │   └── [slug]/      # Individual blog post
│   │   ├── contact/         # Contact page
│   │   └── projects/        # Projects pages
│   │       └── [slug]/      # Individual project
│   ├── api/                 # API routes
│   │   └── contact/         # Contact form handler
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── sitemap.ts           # Sitemap generation
│   └── robots.ts            # Robots.txt generation
├── components/              # React components
│   ├── blog-card.tsx        # Blog post card
│   ├── blog-list.tsx        # Blog post list
│   ├── contact-form.tsx     # Contact form
│   ├── container.tsx        # Layout container
│   ├── footer.tsx           # Site footer
│   ├── header.tsx           # Site header
│   ├── mdx-components.tsx   # MDX component overrides
│   ├── mobile-nav.tsx       # Mobile navigation
│   ├── project-card.tsx     # Project card
│   ├── project-grid.tsx     # Project grid
│   ├── prose.tsx            # Typography wrapper
│   ├── section-heading.tsx  # Section heading component
│   ├── tag.tsx              # Tag chip component
│   ├── theme-provider.tsx   # Theme provider
│   ├── theme-toggle.tsx     # Theme toggle button
│   └── toc.tsx              # Table of contents
├── content/                 # MDX content
│   ├── blog/                # Blog posts
│   └── projects/            # Project case studies
├── lib/                     # Utility functions
│   ├── content/             # Content loading utilities
│   │   ├── get-all-posts.ts
│   │   ├── get-all-projects.ts
│   │   ├── get-post-by-slug.ts
│   │   ├── get-project-by-slug.ts
│   │   ├── mdx.ts           # MDX processing
│   │   └── types.ts         # TypeScript types
│   └── utils.ts             # General utilities
├── public/                  # Static assets
├── .eslintrc.json          # ESLint configuration
├── .prettierrc             # Prettier configuration
├── next.config.mjs         # Next.js configuration
├── package.json            # Dependencies
├── postcss.config.mjs      # PostCSS configuration
├── tailwind.config.ts      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## Current Content

### Projects (6 total)
1. **RAG Research Assistant** - AWS Glue, OpenSearch, Together AI
2. **Sentiment Analysis Model** - Python, AWS, financial forecasting
3. **Banking System** - JavaScript, OOP, TDD fundamentals
4. **SOW Editor** - MERN stack with CPQ calculator
5. **AI Trivia Platform** - React, Node.js, Supabase, OpenAI ⭐ (featured)
6. **AutoFileForm CMS** - Next.js, feature-based e-commerce ⭐ (featured)

### Blog Posts (6 total)
Each project has a matching "What I Learned Building..." blog post with reflections on:
- Technical challenges and solutions
- Growth moments and breakthroughs
- Lessons that transfer to future projects

### About Page
Real experience and education:
- Resolution Life (Data Scientist / AI & ML)
- Softchoice (DevOps Engineer)
- SwiftShift (IT Support & Systems Development)
- B.S. Software Engineering + Finance minor from Drexel University

## Content Management

### Adding a Blog Post

1. Create a new MDX file in `content/blog/` (use same slug as the project):

```bash
touch content/blog/my-project-name.mdx
```

2. Add frontmatter with reflective tone:

```mdx
---
title: 'What I Learned Building My Project Name'
description: 'Reflections on challenges, growth, and insights'
date: '2024-03-20'
tags: ['Learning', 'Growth', 'TechStack']
published: true
---

## The Spark

Why I built this...

## Technical Challenges

What I learned...

[View the project](/projects/my-project-name)
```

### Adding a Project

1. Create a new MDX file in `content/projects/`:

```bash
touch content/projects/my-project-name.mdx
```

2. Add frontmatter and overview:

```mdx
---
title: 'My Project Name'
description: 'Concise one-sentence summary'
date: '2024-03-20'
tags: ['Tech1', 'Tech2', 'Tech3']
published: true
featured: false
repo: 'https://github.com/ryan5anderson/project'
demo: 'https://project-demo.com'
thumbnail: '/images/my-project-name.png'
---

## Overview

3-5 paragraph overview of what the project does and key learnings.

[Read the blog post](/blog/my-project-name) about building this system.
```

**Important:** Use matching slugs between projects and blog posts for cross-linking.

### Frontmatter Fields

#### Blog Posts
- `title` (required): Post title
- `description` (required): Short description
- `date` (required): Publication date (YYYY-MM-DD)
- `tags` (required): Array of tags
- `published` (optional): Set to `false` to hide from production

#### Projects
- `title` (required): Project title
- `description` (required): Short description
- `date` (required): Project date (YYYY-MM-DD)
- `tags` (required): Array of technology tags
- `published` (optional): Set to `false` to hide
- `featured` (optional): Set to `true` to show on home page
- `repo` (optional): GitHub repository URL
- `demo` (optional): Live demo URL
- `thumbnail` (optional): Project thumbnail image path

## Site Owner Information

**Ryan Anderson**
- Email: anderson.t.ryan@gmail.com
- Phone: (723) 963-6012
- GitHub: https://github.com/ryan5anderson
- LinkedIn: https://www.linkedin.com/in/ryananderson135/

### Customization

Site information is already configured throughout:
- `app/layout.tsx` - Metadata set to "Software Engineer & AI Developer"
- `app/page.tsx` - Hero section with real social links (GitHub, LinkedIn, Email)
- `components/footer.tsx` - Footer with real social links
- `app/contact/page.tsx` - Real contact information and links
- `app/about/page.tsx` - Real bio, experience, skills, education

### Colors and Styling

Customize the design system in `app/globals.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --primary: 240 5.9% 10%;
  /* ... add your colors */
}
```

### Updating Content

To update the About page, edit `app/about/page.tsx`:
- Bio text in the Bio section
- Skills in the `technicalSkills` object
- Experience in the `experience` array
- Education details in the Education section

## Contact Form

The contact form uses an API route at `app/api/contact/route.ts`. Currently configured to log submissions to console.

To enable email sending to anderson.t.ryan@gmail.com:

1. Choose an email service (Resend, SendGrid, AWS SES, etc.)
2. Add your API key to `.env.local`:

```bash
RESEND_API_KEY=your-api-key
```

3. Update the API route to use your email service:

```typescript
// Example with Resend
const { Resend } = require('resend')
const resend = new Resend(process.env.RESEND_API_KEY)

await resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'anderson.t.ryan@gmail.com',
  subject: `New contact from ${body.name}`,
  html: `...`,
})
```

## SEO

### Sitemap

The sitemap is automatically generated at `/sitemap.xml`. Update the base URL in `app/sitemap.ts`:

```typescript
const baseUrl = 'https://yoursite.com'
```

### RSS Feed

The RSS feed is available at `/rss.xml`. Update the feed information in `app/rss.xml/route.ts`:

```typescript
const feed = new RSS({
  title: 'Your Name - Blog',
  description: 'Your description',
  site_url: 'https://yoursite.com',
  // ...
})
```

### Meta Tags

Each page generates appropriate meta tags. Update default metadata in `app/layout.tsx`.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Add environment variables if needed
5. Deploy!

### Deploy to Other Platforms

This is a standard Next.js application and can be deployed to:
- [Netlify](https://www.netlify.com/)
- [Railway](https://railway.app/)
- [Fly.io](https://fly.io/)
- Any platform supporting Node.js

Build the application:
```bash
npm run build
npm start
```

## Development

### Code Formatting

Format code with Prettier:
```bash
npm run format
```

### Linting

Run ESLint:
```bash
npm run lint
```

## Performance

This site is optimized for performance:

- ✅ Server-side rendering with App Router
- ✅ Automatic code splitting
- ✅ Image optimization with next/image
- ✅ Font optimization with next/font
- ✅ Static page generation where possible
- ✅ Efficient MDX compilation
- ✅ CSS optimization with Tailwind

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use!

## License

MIT License - feel free to use this code for your own portfolio.

## Support

For issues or questions:
- Check the [Next.js documentation](https://nextjs.org/docs)
- Check the [Tailwind CSS documentation](https://tailwindcss.com/docs)
- Open an issue on GitHub

---

Built with ❤️ using Next.js and TypeScript
