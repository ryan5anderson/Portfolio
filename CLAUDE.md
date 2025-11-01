# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A modern personal portfolio and blog site for Ryan Anderson, a software engineer and AI developer. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and MDX. Features 6 real projects with matching reflective blog posts, comprehensive About page with real experience, and production-ready SEO optimizations.

## Technology Stack

- **Framework**: Next.js 14.2+ with App Router
- **Language**: TypeScript (strict mode enabled)
- **Styling**: Tailwind CSS v3.4+ with custom design tokens
- **Content**: MDX files processed via next-mdx-remote
- **Icons**: lucide-react
- **Theme**: next-themes with system preference detection
- **Deployment**: Optimized for Vercel (also compatible with Netlify, Railway, etc.)

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Format code
npm run format
```

## Architecture

### App Router Structure
The project uses Next.js 14 App Router with a route-group organization:
- `app/` - Root layout and home page
- `app/projects/` - Projects index and dynamic `[slug]` routes
- `app/blog/` - Blog index and dynamic `[slug]` routes
- `app/about/` - Static about page
- `app/contact/` - Contact page with form
- `app/api/contact/` - API route for form submissions

### Content System
Content is stored as MDX files in `content/`:
- `content/blog/*.mdx` - Blog posts with frontmatter (6 "What I Learned" posts)
- `content/projects/*.mdx` - Project case studies with frontmatter (6 projects)

**Current Projects (with matching blog posts):**
1. `rag-research-assistant.mdx` - AWS Glue, OpenSearch, Together AI
2. `sentiment-analysis-model.mdx` - Python, AWS, financial ML
3. `banking-system.mdx` - JavaScript, OOP, TDD
4. `sow-editor.mdx` - MERN stack with CPQ calculator
5. `ai-trivia-platform.mdx` - React, Node.js, Supabase, OpenAI (featured)
6. `autofileform-cms.mdx` - Next.js, e-commerce, feature-based architecture (featured)

Content loaders in `lib/content/`:
- `get-all-posts.ts` - Fetches and sorts all published posts
- `get-post-by-slug.ts` - Fetches single post by slug
- `get-all-projects.ts` - Fetches and sorts all published projects
- `get-project-by-slug.ts` - Fetches single project by slug
- `mdx.ts` - Core MDX processing utilities
- `types.ts` - TypeScript interfaces for content

**Cross-linking:** Each project page has a visual CTA linking to its blog post, and vice versa.

### Component Organization
Components are organized by purpose:
- Layout components: `header.tsx`, `footer.tsx`, `container.tsx`
- Content components: `blog-card.tsx`, `project-card.tsx`, `prose.tsx`
- Interactive components: `theme-toggle.tsx`, `mobile-nav.tsx`, `contact-form.tsx`
- MDX components: `mdx-components.tsx` defines how MDX elements render

### Design System
Tailwind is extended with custom design tokens in `tailwind.config.ts`:
- CSS variables for colors (defined in `app/globals.css`)
- Light/dark mode variants using `class` strategy
- Custom utility classes for headings and card hover effects
- Typography plugin for prose styling

## Adding Content

### New Blog Post
1. Create `content/blog/slug-name.mdx` (use same slug as matching project)
2. Add required frontmatter:
   ```yaml
   ---
   title: 'What I Learned Building <Project Name>'
   description: 'Reflections and lessons from...'
   date: '2024-03-20'
   tags: ['Learning', 'Growth', 'TechStack']
   published: true
   ---
   ```
3. Write content in MDX (enthusiastic, reflective tone about learning)
4. Include link to project: `[View the project](/projects/slug-name)`
5. Post automatically appears in blog list and generates route

### New Project
1. Create `content/projects/slug-name.mdx`
2. Add required frontmatter:
   ```yaml
   ---
   title: 'Project Title'
   description: 'Concise one-sentence summary'
   date: '2024-03-20'
   tags: ['Tech1', 'Tech2', 'Tech3']
   published: true
   featured: false  # Set true to show on home page (limit 2-3)
   repo: 'https://github.com/ryan5anderson/...'
   demo: 'https://...'
   thumbnail: '/images/slug-name.png'
   ---
   ```
3. Write 3-5 paragraph overview of what the project does and what was learned
4. Include link to blog: `[Read the blog post](/blog/slug-name)`
5. Project automatically appears in projects list and generates route

**Note:** Slugs should match between projects and blog posts for cross-linking to work.

## Key Implementation Details

### Static Generation
- All blog and project pages are statically generated at build time
- Uses `generateStaticParams()` for dynamic routes
- Content is parsed once during build, not on each request

### SEO Features
- Automatic sitemap generation (`app/sitemap.ts`)
- RSS feed at `/rss.xml` (`app/rss.xml/route.ts`)
- Robots.txt generation (`app/robots.ts`)
- Per-page metadata with OpenGraph and Twitter cards
- Reading time calculation for blog posts

### Theme System
- Uses `next-themes` for theme management
- Persists user preference in localStorage
- Respects system preference by default
- CSS variables update based on theme
- Hydration-safe implementation

### Contact Form
- Client-side validation with HTML5 and custom checks
- API route at `/api/contact` handles submissions
- Currently logs to console (replace with email service)
- Ready to integrate with Resend, SendGrid, or AWS SES

## Site Owner Information

**Contact Details:**
- Email: anderson.t.ryan@gmail.com
- Phone: (723) 963-6012
- GitHub: https://github.com/ryan5anderson
- LinkedIn: https://www.linkedin.com/in/ryananderson135/

**About:**
- Software engineer and AI developer with 2 years experience
- B.S. Software Engineering + Finance minor from Drexel University
- Specializes in RAG applications, full-stack development, cloud solutions

**Experience:**
- Resolution Life - Data Scientist / AI & ML (2023-2024)
- Softchoice - DevOps Engineer (2022-2023)
- SwiftShift - IT Support & Systems Development (2021-2022)
- Independent AI Projects (2023-Present)

## Customization Points

When customizing this site, update:

1. **Site metadata** in `app/layout.tsx` - title, description, OG tags (already set)
2. **Social links** in `app/page.tsx`, `components/footer.tsx`, `app/contact/page.tsx` (already set)
3. **About content** in `app/about/page.tsx` - bio, skills, experience (already set with real data)
4. **Design tokens** in `app/globals.css` - color scheme, spacing
5. **Base URLs** in `app/sitemap.ts`, `app/rss.xml/route.ts`
6. **Email service** in `app/api/contact/route.ts` - configure provider (currently logs to console)

## Code Style

- Functional React components (no classes)
- Named exports for reusable components
- TypeScript strict mode enforced
- Tailwind utility classes (no inline styles)
- Components kept under 200 lines
- Feature-based organization where applicable

## Common Tasks

### Change color scheme
Edit CSS variables in `app/globals.css` for both light and dark modes.

### Add new page
1. Create `app/new-page/page.tsx`
2. Add route to `components/header.tsx` navigation
3. Update `app/sitemap.ts` to include new page

### Modify MDX rendering
Edit `components/mdx-components.tsx` to customize how MDX elements render.

### Add new component
1. Create component in `components/`
2. Use TypeScript for props
3. Follow existing patterns (use `cn()` for className merging)
4. Export as named export

## Deployment

Recommended: Deploy to Vercel for optimal Next.js performance.

1. Push to GitHub
2. Import in Vercel
3. Set environment variables if using email service
4. Deploy automatically on push to main branch

Build output will be optimized with:
- Static pages pre-rendered
- Images optimized
- Fonts optimized
- Code split by route
