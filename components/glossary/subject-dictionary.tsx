'use client'

import { useMemo, useState } from 'react'
import { ArrowLeft, Layers, LayoutList, Search, Volume2 } from 'lucide-react'
import { useLanguage } from '@/components/providers/language-provider'
import { SubjectIcon } from '@/components/glossary/subject-icon'
import { Flashcards } from '@/components/glossary/flashcards'
import { FIELDS, type Subject } from '@/lib/glossary-data'
import { brand, speakEnglish } from '@/lib/brand'
import { cn } from '@/lib/utils'

export function SubjectDictionary({ subject, onBack }: { subject: Subject; onBack: () => void }) {
  const { t, lang } = useLanguage()
  const [query, setQuery] = useState('')
  const [view, setView] = useState<'list' | 'cards'>('list')
  const fieldInfo = FIELDS.find((f) => f.id === subject.field)!
  const color = brand[fieldInfo.color]

  const terms = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return subject.terms
    return subject.terms.filter((term) => [term.en, term.ru, term.kk].some((w) => w.toLowerCase().includes(q)))
  }, [query, subject.terms])

  const otherLangs = lang === 'kk' ? (['kk', 'ru'] as const) : (['ru', 'kk'] as const)

  return (
    <div className="flex flex-col gap-6">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex w-fit items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm font-bold transition-colors hover:bg-muted"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        {t.glossary.back}
      </button>

      <div className={cn('flex flex-wrap items-center gap-4 rounded-2xl border p-5', color.soft, color.border)}>
        <span className={cn('flex size-14 items-center justify-center rounded-2xl text-white', color.solid)}>
          <SubjectIcon name={subject.icon} className="size-7" />
        </span>
        <div className="flex flex-1 flex-col">
          <h2 className="text-2xl font-black">{subject.name[lang]}</h2>
          <p className="text-sm text-muted-foreground">
            {fieldInfo.name[lang]} · {subject.terms.length} {t.glossary.terms}
          </p>
        </div>
        <div role="group" className="inline-flex rounded-full border bg-card p-1">
          <ViewButton active={view === 'list'} onClick={() => setView('list')} icon={<LayoutList className="size-4" />}>
            {t.glossary.viewList}
          </ViewButton>
          <ViewButton active={view === 'cards'} onClick={() => setView('cards')} icon={<Layers className="size-4" />}>
            {t.glossary.viewCards}
          </ViewButton>
        </div>
      </div>

      {view === 'cards' ? (
        <Flashcards terms={subject.terms} />
      ) : (
        <>
          <div className="relative">
            <Search className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <label htmlFor="term-search" className="sr-only">
              {t.glossary.searchTerms}
            </label>
            <input
              id="term-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.glossary.searchTerms}
              className="h-12 w-full rounded-full border bg-card pr-4 pl-12 text-base shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>

          {terms.length === 0 ? (
            <p className="rounded-2xl border border-dashed p-10 text-center text-muted-foreground">{t.glossary.noTerms}</p>
          ) : (
            <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
              <div className="hidden grid-cols-[1.2fr_1fr_1fr_auto] gap-4 border-b bg-muted/60 px-5 py-3 text-xs font-bold tracking-wide text-muted-foreground uppercase md:grid">
                <span>{t.glossary.columns.en}</span>
                {otherLangs.map((code) => (
                  <span key={code}>{t.glossary.columns[code]}</span>
                ))}
                <span className="sr-only">{t.controls.listen}</span>
              </div>
              <ul className="divide-y">
                {terms.map((term) => (
                  <li
                    key={term.en}
                    className="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1 px-5 py-4 md:grid-cols-[1.2fr_1fr_1fr_auto]"
                  >
                    <span className="font-black text-primary" lang="en">
                      {term.en}
                    </span>
                    {otherLangs.map((code) => (
                      <span
                        key={code}
                        lang={code}
                        className={cn(
                          'col-start-1 text-sm md:col-start-auto md:text-base',
                          code === lang ? 'font-semibold text-foreground' : 'text-muted-foreground',
                        )}
                      >
                        <span className="mr-2 text-xs font-bold text-muted-foreground md:hidden">
                          {code === 'kk' ? 'KZ' : 'RU'}
                        </span>
                        {term[code]}
                      </span>
                    ))}
                    <button
                      type="button"
                      onClick={() => speakEnglish(term.en)}
                      aria-label={`${t.controls.listen}: ${term.en}`}
                      className="col-start-2 row-span-3 row-start-1 inline-flex size-9 items-center justify-center rounded-full bg-brand-blue-soft text-brand-blue transition-colors hover:bg-brand-blue hover:text-white md:col-start-auto md:row-span-1 md:row-start-auto"
                    >
                      <Volume2 className="size-4" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  )
}

function ViewButton({
  active,
  onClick,
  icon,
  children,
}: {
  active: boolean
  onClick: () => void
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-bold transition-colors',
        active ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground',
      )}
    >
      {icon}
      {children}
    </button>
  )
}
