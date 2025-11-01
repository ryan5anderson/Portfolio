import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Ryan Anderson - Software Engineer & AI Developer',
    template: '%s | Ryan Anderson',
  },
  description:
    'Personal portfolio and blog of Ryan Anderson, a software engineer and AI developer specializing in intelligent systems, RAG applications, and full-stack development.',
  keywords: [
    'software engineer',
    'AI developer',
    'machine learning',
    'RAG',
    'full-stack developer',
    'portfolio',
    'blog',
    'Python',
    'TypeScript',
    'React',
    'Next.js',
  ],
  authors: [{ name: 'Ryan Anderson' }],
  creator: 'Ryan Anderson',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ryananderson.dev',
    title: 'Ryan Anderson - Software Engineer & AI Developer',
    description:
      'Software engineer and AI developer building intelligent, data-driven systems. Recent Drexel grad specializing in RAG applications, full-stack development, and cloud solutions.',
    siteName: 'Ryan Anderson',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ryan Anderson - Software Engineer & AI Developer',
    description:
      'Software engineer and AI developer building intelligent, data-driven systems.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
