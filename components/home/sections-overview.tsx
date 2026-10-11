'use client'

import Link from 'next/link'
import { ArrowRight, CalendarDays, Heart, Languages, Users, type LucideIcon } from 'lucide-react'
import { useLanguage } from '@/components/providers/language-provider'
import { brand, type BrandColor } from '@/lib/brand'
import { cn } from '@/lib/utils'

type SectionKey = 'english' | 'volunteer' | 'events' | 'speaking' | 'goodDeeds'

const SECTIONS: { key: SectionKey; href: string; icon: LucideIcon; color: BrandColor }[] = [
  { key: 'english', href: '#english', icon: Languages, color: 'blue' },
  { key: 'volunteer', href: '#volunteer', icon: Heart, color: 'pink' },
  { key: 'events', href: '#events', icon: CalendarDays, color: 'green' },
  { key: 'speaking', href: '#speaking', icon: Users, color: 'purple' },
]

export function SectionsOverview() {
  const { t } = useLanguage()

  return (
    <section id="sections" aria-labelledby="sections-title" className="mx-auto max-w-7xl px-4 pt-20 sm:px-6">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
        <div className="flex flex-col gap-4">
          <h2 id="sections-title" className="text-3xl font-black tracking-tight sm:text-4xl">
            {t.overview.title}
          </h2>
          <p className="w-fit -rotate-2 rounded-lg bg-brand-yellow-soft px-4 py-2 font-script text-3xl text-foreground">
            {t.overview.script}
          </p>
        </div>
        <ol className="flex flex-col gap-3">
          {SECTIONS.map(({ key, href, icon: Icon, color }, index) => (
            <li key={key}>
              <Link
                href={href}
                className={cn(
                  'group flex items-center gap-4 rounded-2xl border p-4 transition-all hover:-translate-y-0.5 hover:shadow-md',
                  brand[color].soft,
                  brand[color].border,
                )}
              >
                <span className={cn('flex size-12 shrink-0 items-center justify-center rounded-full text-white', brand[color].solid)}>
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="flex flex-1 flex-col">
                  <span className="font-black">
                    {index + 1}. {t.overview.items[key].title}
                  </span>
                  <span className="text-sm text-muted-foreground">{t.overview.items[key].text}</span>
                </span>
                <ArrowRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
