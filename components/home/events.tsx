'use client'

import { CalendarDays, Clock } from 'lucide-react'
import { useLanguage } from '@/components/providers/language-provider'
import { SectionHeading } from '@/components/home/section-heading'

export function Events() {
  const { t } = useLanguage()

  return (
    <section id="events" aria-labelledby="events-title" className="mx-auto max-w-7xl px-4 pt-24 sm:px-6">
      <SectionHeading id="events-title" title={t.events.title} text={t.events.text} icon={CalendarDays} color="green" />
      <ul className="mt-10 flex max-w-2xl flex-col gap-3">
        {t.events.items.map((event) => (
          <li
            key={event.title}
            className="flex items-center gap-4 rounded-2xl border border-brand-green/30 bg-brand-green-soft p-5"
          >
            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-green text-white">
              <CalendarDays className="size-5" aria-hidden="true" />
            </span>
            <div className="flex flex-1 flex-col gap-1">
              <h3 className="font-black text-balance">{event.title}</h3>
              <p className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                <Clock className="size-3.5" aria-hidden="true" />
                {event.when}
              </p>
            </div>
            <span className="hidden rounded-full bg-card px-3 py-1 text-xs font-bold text-brand-green sm:inline">
              {event.type}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
