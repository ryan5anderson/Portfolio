import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  description?: string
  className?: string
}

export function SectionHeading({
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-12', className)}>
      <h1 className="heading-2 mb-4">{title}</h1>
      {description && (
        <p className="text-lg text-muted-foreground">{description}</p>
      )}
    </div>
  )
}
