'use client'

import { useState } from 'react'
import { GraduationCap } from 'lucide-react'
import { useLanguage } from '@/components/providers/language-provider'
import { SubjectPicker } from '@/components/glossary/subject-picker'
import { SubjectDictionary } from '@/components/glossary/subject-dictionary'
import { SUBJECTS } from '@/lib/glossary-data'

export function GlossaryView() {
  const { t } = useLanguage()
  const [subjectId, setSubjectId] = useState<string | null>(null)
  const subject = SUBJECTS.find((s) => s.id === subjectId) ?? null

  const select = (id: string | null) => {
    setSubjectId(id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6">
      <header className="flex flex-col gap-3 rounded-3xl bg-primary px-6 py-10 text-primary-foreground sm:px-10">
        <p className="inline-flex w-fit items-center gap-2 rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-bold tracking-wide uppercase">
          <GraduationCap className="size-4" aria-hidden="true" />
          {t.glossary.kicker}
        </p>
        <h1 className="text-4xl font-black tracking-tight sm:text-5xl">{t.glossary.title}</h1>
        <p className="max-w-2xl text-pretty opacity-85 sm:text-lg">{t.glossary.subtitle}</p>
      </header>

      <div className="mt-8">
        {subject ? (
          <SubjectDictionary key={subject.id} subject={subject} onBack={() => select(null)} />
        ) : (
          <SubjectPicker onSelect={select} />
        )}
      </div>
    </div>
  )
}
