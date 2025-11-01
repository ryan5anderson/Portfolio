import Link from 'next/link'
import { Github, Linkedin, Mail, Rss } from 'lucide-react'
import { Container } from './container'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/30 py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center text-sm text-muted-foreground md:text-left">
            © {currentYear} Ryan Anderson. All rights reserved.
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/ryan5anderson"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 transition-colors hover:bg-muted"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/ryananderson135/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 transition-colors hover:bg-muted"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:anderson.t.ryan@gmail.com"
              className="rounded-lg p-2 transition-colors hover:bg-muted"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <Link
              href="/rss.xml"
              className="rounded-lg p-2 transition-colors hover:bg-muted"
              aria-label="RSS Feed"
            >
              <Rss className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
