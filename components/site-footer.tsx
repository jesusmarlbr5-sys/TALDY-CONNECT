'use client'

import Link from 'next/link'
import { Heart } from 'lucide-react'
import { useLanguage } from '@/components/providers/language-provider'
import { Logo } from '@/components/logo'

export function SiteFooter() {
  const { t } = useLanguage()

  return (
    <footer className="mt-16 border-t bg-muted/40">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-3">
          <Logo />
          <p className="text-sm text-muted-foreground">{t.footer.text}</p>
        </div>
        <p className="flex items-center gap-2 font-script text-3xl text-primary">
          {t.footer.home}
          <Heart className="size-6 fill-brand-pink text-brand-pink" aria-hidden="true" />
        </p>
        <nav aria-label={t.nav.mainNav} className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
          <Link href="/#english" className="text-muted-foreground hover:text-foreground">{t.nav.english}</Link>
          <Link href="/#events" className="text-muted-foreground hover:text-foreground">{t.nav.events}</Link>
          <Link href="/glossary" className="text-muted-foreground hover:text-foreground">{t.nav.glossary}</Link>
        </nav>
      </div>
      <p className="border-t px-4 py-4 text-center text-xs text-muted-foreground">
        {'© '}
        {new Date().getFullYear()} {t.footer.rights}
      </p>
    </footer>
  )
}
