'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
  items: { href: string; label: string }[]
}

export function MobileNav({ isOpen, onClose, items }: MobileNavProps) {
  const pathname = usePathname()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 top-16 z-50 md:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Slide-in menu */}
      <nav className="fixed right-0 top-16 h-[calc(100vh-4rem)] w-full overflow-y-auto border-l border-border bg-background p-6 shadow-lg animate-in slide-in-from-right">
        <div className="flex flex-col gap-4">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={cn(
                'rounded-lg px-4 py-3 text-lg font-medium transition-colors hover:bg-muted',
                pathname === item.href
                  ? 'bg-muted text-foreground'
                  : 'text-muted-foreground'
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  )
}
