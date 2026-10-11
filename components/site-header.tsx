'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { BookOpen, Menu, X } from 'lucide-react'
import { useLanguage } from '@/components/providers/language-provider'
import { LanguageSwitcher } from '@/components/language-switcher'
import { ThemeToggle } from '@/components/theme-toggle'
import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const { t } = useLanguage()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const links = [
    { href: '/', label: t.nav.home },
    { href: '/#english', label: t.nav.english },
    { href: '/#volunteer', label: t.nav.volunteer },
    { href: '/#events', label: t.nav.events },
    { href: '/#speaking', label: t.nav.speaking },
  ]
  const glossaryActive = pathname.startsWith('/glossary')

  return (
    <header className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav aria-label={t.nav.mainNav} className="ml-4 hidden flex-1 items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/glossary"
            aria-current={glossaryActive ? 'page' : undefined}
            className={cn(
              'ml-1 inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-bold transition-colors',
              glossaryActive
                ? 'bg-primary text-primary-foreground'
                : 'bg-brand-blue-soft text-primary hover:bg-accent dark:text-foreground',
            )}
          >
            <BookOpen className="size-4" aria-hidden="true" />
            {t.nav.glossary}
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <LanguageSwitcher className="hidden sm:inline-flex" />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            className="inline-flex size-9 items-center justify-center rounded-full border bg-muted/60 lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label={t.nav.mainNav} className="border-t bg-background px-4 pt-3 pb-5 lg:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2.5 font-semibold text-foreground hover:bg-muted"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/glossary"
                onClick={() => setOpen(false)}
                className="mt-1 flex items-center gap-2 rounded-xl bg-primary px-3 py-2.5 font-bold text-primary-foreground"
              >
                <BookOpen className="size-4" aria-hidden="true" />
                {t.nav.glossary}
              </Link>
            </li>
          </ul>
          <LanguageSwitcher className="mt-4 sm:hidden" />
        </nav>
      )}
    </header>
  )
}
