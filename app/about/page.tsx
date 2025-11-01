import { Container } from '@/components/container'
import { SectionHeading } from '@/components/section-heading'
import { Mail, Phone, Github, Linkedin } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Ryan Anderson and his experience in software engineering and AI development.',
}

const technicalSkills = {
  Languages: ['Python', 'JavaScript', 'TypeScript', 'SQL'],
  Frontend: ['React', 'Next.js', 'Tailwind CSS'],
  Backend: ['Node.js', 'Express', 'REST APIs'],
  'AI/ML': ['RAG', 'Embeddings', 'OpenAI API', 'LangChain-style workflows'],
  'Cloud/DevOps': ['AWS', 'Docker', 'CI/CD', 'Supabase', 'Fly.io'],
  Data: ['PostgreSQL', 'Pandas', 'NumPy', 'OpenSearch'],
}

const experience = [
  {
    title: 'Data Scientist / AI & ML',
    company: 'Resolution Life',
    period: '2023 - 2024',
    description:
      'Built sentiment-analysis pipelines on financial and news data to support investment decisions. Used Python, AWS services, and visualization tools to surface actionable insights.',
  },
  {
    title: 'DevOps Engineer',
    company: 'Softchoice',
    period: '2022 - 2023',
    description:
      'Implemented CI/CD improvements, containerized services with Docker, and improved deployment reliability across development and production environments.',
  },
  {
    title: 'IT Support & Systems Development',
    company: 'SwiftShift',
    period: '2021 - 2022',
    description:
      'Automated repetitive operational tasks, improved internal tooling, and provided technical support to end users while developing system improvements.',
  },
  {
    title: 'Independent & Academic AI Projects',
    company: 'Various Projects',
    period: '2023 - Present',
    description:
      'Developed RAG chatbot using AWS Glue, OpenSearch, and Together AI. Created AI-enabled order-form and e-commerce interfaces with Next.js and Tailwind CSS.',
  },
]

export default function AboutPage() {
  return (
    <Container className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          title="About Me"
          description="Software engineer and AI developer building intelligent systems."
        />

        <div className="space-y-12">
          {/* Bio */}
          <section>
            <h2 className="heading-3 mb-4">Bio</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I&apos;m a software engineer and AI developer with about two years of
                full-time experience building intelligent, data-driven systems across
                cloud, web, and machine learning domains. I&apos;ve designed and deployed
                RAG chatbots using AWS Glue, OpenSearch, and Together AI; developed
                predictive models for financial forecasting; and implemented CI/CD
                pipelines to optimize cloud performance.
              </p>
              <p>
                My background spans Python, JavaScript/TypeScript, React, Node.js,
                Docker, and PostgreSQL, with a strong focus on scalable, maintainable
                solutions. Recently graduated with a B.S. in Software Engineering and
                a minor in Finance from Drexel University, I&apos;m passionate about
                creating real-world applications that merge AI, automation, and modern
                software architecture to drive meaningful impact.
              </p>
            </div>
          </section>

          {/* Technical Skills */}
          <section>
            <h2 className="heading-3 mb-6">Technical Skills</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {Object.entries(technicalSkills).map(([category, skills]) => (
                <div
                  key={category}
                  className="rounded-lg border border-border bg-card p-4"
                >
                  <h3 className="mb-3 font-semibold text-foreground">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md bg-muted px-2.5 py-1 text-sm text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="heading-3 mb-6">Experience</h2>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div
                  key={index}
                  className="relative border-l-2 border-border pl-6"
                >
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-border bg-background" />
                  <h3 className="heading-4">{job.title}</h3>
                  <div className="mb-2 text-sm text-muted-foreground">
                    {job.company} • {job.period}
                  </div>
                  <p className="text-muted-foreground">{job.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="heading-3 mb-4">Education</h2>
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="heading-4 mb-2">Drexel University</h3>
              <p className="mb-2 font-medium text-foreground">
                B.S. Software Engineering, Minor in Finance
              </p>
              <p className="text-sm text-muted-foreground">
                Recently graduated • Focus on AI systems, modern web architecture,
                and data-driven applications
              </p>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="heading-3 mb-6">Contact</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="mailto:anderson.t.ryan@gmail.com"
                className="flex items-start gap-4 rounded-lg border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="rounded-lg bg-muted p-2">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-sm text-muted-foreground">
                    anderson.t.ryan@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="tel:7239636012"
                className="flex items-start gap-4 rounded-lg border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="rounded-lg bg-muted p-2">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">Phone</div>
                  <div className="text-sm text-muted-foreground">
                    (723) 963-6012
                  </div>
                </div>
              </a>

              <a
                href="https://github.com/ryan5anderson"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-lg border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="rounded-lg bg-muted p-2">
                  <Github className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">GitHub</div>
                  <div className="text-sm text-muted-foreground">
                    @ryan5anderson
                  </div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/ryananderson135/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-lg border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="rounded-lg bg-muted p-2">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">LinkedIn</div>
                  <div className="text-sm text-muted-foreground">
                    /in/ryananderson135
                  </div>
                </div>
              </a>
            </div>
          </section>
        </div>
      </div>
    </Container>
  )
}
