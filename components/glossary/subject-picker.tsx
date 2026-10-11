'use client'

import { useMemo, useState } from 'react'
import { ArrowRight, Search } from 'lucide-react'
import { useLanguage } from '@/components/providers/language-provider'
import { SubjectIcon } from '@/components/glossary/subject-icon'
import { FIELDS, SUBJECTS, type FieldId } from '@/lib/glossary-data'
import { brand } from '@/lib/brand'
import { cn } from '@/lib/utils'

export function SubjectPicker({ onSelect }: { onSelect: (id: string) => void }) {
  const { t, lang } = useLanguage()
  const [query, setQuery] = useState('')
  const [field, setField] = useState<FieldId | 'all'>('all')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return SUBJECTS.filter((s) => {
      if (field !== 'all' && s.field !== field) return false
      if (!q) return true
      return Object.values(s.name).some((name) => name.toLowerCase().includes(q))
    })
  }, [query, field])

  return (
    <div className="flex flex-col gap-6">
      <div className="relative">
        <Search className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
        <label htmlFor="subject-search" className="sr-only">
          {t.glossary.searchSubjects}
        </label>
        <input
          id="subject-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t.glossary.searchSubjects}
          className="h-12 w-full rounded-full border bg-card pr-4 pl-12 text-base shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>

      <div role="group" aria-label={t.glossary.allFields} className="flex flex-wrap gap-2">
        <FieldChip active={field === 'all'} onClick={() => setField('all')}>
          {t.glossary.allFields}
        </FieldChip>
        {FIELDS.map((f) => (
          <FieldChip key={f.id} active={field === f.id} onClick={() => setField(f.id)}>
            {f.name[lang]}
          </FieldChip>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-2xl border border-dashed p-10 text-center text-muted-foreground">{t.glossary.noSubjects}</p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((subject) => {
            const fieldInfo = FIELDS.find((f) => f.id === subject.field)!
            const color = brand[fieldInfo.color]
            return (
              <li key={subject.id}>
                <button
                  type="button"
                  onClick={() => onSelect(subject.id)}
                  className={cn(
                    'group flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none',
                    color.soft,
                    color.border,
                  )}
                >
                  <span className={cn('flex size-12 shrink-0 items-center justify-center rounded-xl text-white', color.solid)}>
                    <SubjectIcon name={subject.icon} className="size-6" />
                  </span>
                  <span className="flex flex-1 flex-col gap-0.5">
                    <span className="font-black">{subject.name[lang]}</span>
                    <span className="text-xs text-muted-foreground">
                      {fieldInfo.name[lang]} · {subject.terms.length} {t.glossary.terms}
                    </span>
                  </span>
                  <ArrowRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

function FieldChip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        'rounded-full border px-4 py-2 text-sm font-bold transition-colors',
        active ? 'border-primary bg-primary text-primary-foreground' : 'bg-card text-muted-foreground hover:text-foreground',
      )}
    >
      {children}
    </button>
  )
}
