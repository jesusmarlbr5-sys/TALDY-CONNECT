'use client'

import { GraduationCap, Heart, Leaf, Users, type LucideIcon } from 'lucide-react'
import { useLanguage } from '@/components/providers/language-provider'
import { SectionHeading } from '@/components/home/section-heading'

const ICONS: LucideIcon[] = [GraduationCap, Leaf, Users]

export function Volunteer() {
  const { t } = useLanguage()

  return (
    <section id="volunteer" aria-labelledby="volunteer-title" className="mx-auto max-w-7xl px-4 pt-24 sm:px-6">
      <SectionHeading id="volunteer-title" title={t.volunteer.title} text={t.volunteer.text} icon={Heart} color="pink" />
      <ul className="mt-10 grid gap-4 md:grid-cols-3">
        {t.volunteer.items.map((item, index) => {
          const Icon = ICONS[index]
          return (
            <li key={item.title} className="flex flex-col gap-3 rounded-2xl border border-brand-pink/30 bg-brand-pink-soft p-6">
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-xl bg-card text-brand-pink shadow-sm">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="rounded-full bg-card px-3 py-1 text-xs font-bold text-brand-pink">{item.tag}</span>
              </div>
              <h3 className="text-lg font-black">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
