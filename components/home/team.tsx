'use client'

import {
  Camera,
  HeartHandshake,
  Languages,
  Palette,
  Search,
  Star,
  type LucideIcon,
} from 'lucide-react'
import { useLanguage } from '@/components/providers/language-provider'
import { brand, type BrandColor } from '@/lib/brand'
import { cn } from '@/lib/utils'

const MEMBER_STYLE: { icon: LucideIcon; color: BrandColor }[] = [
  { icon: Star, color: 'blue' },
  { icon: Search, color: 'pink' },
  { icon: Palette, color: 'purple' },
  { icon: Languages, color: 'yellow' },
  { icon: HeartHandshake, color: 'green' },
  { icon: Camera, color: 'pink' },
]

export function Team() {
  const { t } = useLanguage()

  return (
    <section id="team" aria-labelledby="team-title" className="mx-auto max-w-7xl px-4 pt-24 sm:px-6">
      <div className="flex flex-col items-center gap-2 text-center">
        <h2 id="team-title" className="text-3xl font-black tracking-tight sm:text-4xl">
          {t.team.title}
        </h2>
        <p className="font-script text-3xl text-primary">{t.team.subtitle}</p>
      </div>
      <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {t.team.members.map((member, index) => {
          const { icon: Icon, color } = MEMBER_STYLE[index]
          return (
            <li key={member.role} className="flex flex-col items-center gap-3 rounded-2xl border bg-card p-5 text-center shadow-sm">
              <span className={cn('flex size-16 items-center justify-center rounded-full', brand[color].soft, brand[color].text)}>
                <Icon className="size-7" aria-hidden="true" />
              </span>
              <span className="text-sm font-black text-balance">{member.role}</span>
              <span className="text-xs text-muted-foreground">{member.text}</span>
            </li>
          )
        })}
      </ul>
      <blockquote className="mx-auto mt-12 max-w-3xl rounded-3xl bg-primary px-8 py-8 text-center text-lg leading-relaxed text-pretty text-primary-foreground sm:text-xl">
        {'“'}
        {t.team.message}
        {'”'}
      </blockquote>
    </section>
  )
}
