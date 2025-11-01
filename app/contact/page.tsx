import { Container } from '@/components/container'
import { SectionHeading } from '@/components/section-heading'
import { ContactForm } from '@/components/contact-form'
import { Mail, Github, Linkedin, Phone } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Ryan Anderson.',
}

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'anderson.t.ryan@gmail.com',
    href: 'mailto:anderson.t.ryan@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '(723) 963-6012',
    href: 'tel:7239636012',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '@ryan5anderson',
    href: 'https://github.com/ryan5anderson',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: '/in/ryananderson135',
    href: 'https://www.linkedin.com/in/ryananderson135/',
  },
]

export default function ContactPage() {
  return (
    <Container className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          title="Get in Touch"
          description="Have a question or want to work together? Feel free to reach out!"
        />

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div>
            <h2 className="heading-4 mb-6">Send a Message</h2>
            <ContactForm />
          </div>

          {/* Contact Links */}
          <div>
            <h2 className="heading-4 mb-6">Other Ways to Connect</h2>
            <div className="space-y-4">
              {contactLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      link.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className="flex items-start gap-4 rounded-lg border border-border bg-card p-4 transition-all hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <div className="rounded-lg bg-muted p-2">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">{link.label}</div>
                      <div className="text-sm text-muted-foreground">
                        {link.value}
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
