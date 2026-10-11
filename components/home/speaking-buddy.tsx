'use client'

import { MessageCircle, Users } from 'lucide-react'
import { useLanguage } from '@/components/providers/language-provider'
import { SectionHeading } from '@/components/home/section-heading'

export function SpeakingBuddy() {
  const { t } = useLanguage()

  return (
    <section id="speaking" aria-labelledby="speaking-title" className="mx-auto max-w-7xl px-4 pt-24 sm:px-6">
      <SectionHeading id="speaking-title" title={t.speaking.title} text={t.speaking.text} icon={Users} color="purple" />
      <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <ol className="grid gap-4 sm:grid-cols-3">
          {t.speaking.steps.map((step, index) => (
            <li key={step.title} className="flex flex-col gap-3 rounded-2xl border border-brand-purple/30 bg-brand-purple-soft p-6">
              <span className="flex size-10 items-center justify-center rounded-full bg-brand-purple text-lg font-black text-white">
                {index + 1}
              </span>
              <h3 className="font-black">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="flex flex-col gap-4 rounded-2xl border bg-card p-6 shadow-sm">
          <h3 className="inline-flex items-center gap-2 font-black">
            <MessageCircle className="size-5 text-brand-purple" aria-hidden="true" />
            {t.speaking.topicsTitle}
          </h3>
          <ul className="flex flex-wrap gap-2">
            {t.speaking.topics.map((topic) => (
              <li key={topic} className="rounded-full border border-brand-purple/30 bg-brand-purple-soft px-3 py-1.5 text-sm font-semibold">
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
