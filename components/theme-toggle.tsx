'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useLanguage } from '@/components/providers/language-provider'
import { cn } from '@/lib/utils'

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  const { t } = useLanguage()

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      aria-label={t.controls.toggleTheme}
      title={t.controls.toggleTheme}
      className={cn(
        'relative inline-flex size-9 items-center justify-center overflow-hidden rounded-full border bg-muted/60 text-foreground transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none',
        className,
      )}
    >
      <Sun className="size-4 rotate-0 scale-100 text-brand-yellow transition-transform duration-300 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute size-4 rotate-90 scale-0 text-brand-blue transition-transform duration-300 dark:rotate-0 dark:scale-100" />
    </button>
  )
}
