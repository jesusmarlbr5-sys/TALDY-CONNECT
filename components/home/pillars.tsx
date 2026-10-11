'use client'

import { BookOpen, Heart, Rocket, Users, type LucideIcon } from 'lucide-react'
import { useLanguage } from '@/components/providers/language-provider'
import { brand, type BrandColor } from '@/lib/brand'
import { cn } from '@/lib/utils'

const PILLARS: { key: 'learn' | 'connect' | 'help' | 'grow'; icon: LucideIcon; color: BrandColor }[] = [
  { key: 'learn', icon: BookOpen, color: 'blue' },
  { key: 'connect', icon: Users, color: 'pink' },
  { key: 'help', icon: Heart, color: 'green' },
  { key: 'grow', icon: Rocket, color: 'yellow' },
]

export function Pillars() {
  const { t } = useLanguage()

  return (
    <section aria-labelledby="pillars-title" className="mx-auto max-w-7xl px-4 pt-14 sm:px-6">
      <h2 id="pillars-title" className="text-center text-2xl font-black tracking-tight text-balance sm:text-3xl">
        {t.pillars.title}
      </h2>
      <ul className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {PILLARS.map(({ key, icon: Icon, color }) => (
          <li
            key={key}
            className={cn(
              'flex flex-col items-center gap-3 rounded-2xl border px-4 py-6 text-center transition-transform hover:-translate-y-1',
              brand[color].soft,
              brand[color].border,
            )}
          >
            <span className={cn('flex size-14 items-center justify-center rounded-full text-white shadow-md', brand[color].solid)}>
              <Icon className="size-6" aria-hidden="true" />
            </span>
            <span className="text-lg font-black uppercase">{t.pillars.items[key].title}</span>
            <span className="text-sm text-muted-foreground">{t.pillars.items[key].text}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
