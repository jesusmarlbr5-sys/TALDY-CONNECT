'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight, Volume2 } from 'lucide-react'
import { useLanguage } from '@/components/providers/language-provider'
import type { Term } from '@/lib/glossary-data'
import { speakEnglish } from '@/lib/brand'
import { cn } from '@/lib/utils'

export function Flashcards({ terms }: { terms: Term[] }) {
  const { t } = useLanguage()
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const term = terms[index]

  const go = (delta: number) => {
    setFlipped(false)
    setIndex((i) => (i + delta + terms.length) % terms.length)
  }

  return (
    <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-5">
      <p className="text-sm text-muted-foreground">{t.glossary.flip}</p>

      <button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        aria-pressed={flipped}
        className="group h-64 w-full [perspective:1200px] focus-visible:outline-none"
      >
        <span
          className={cn(
            'relative block size-full rounded-3xl transition-transform duration-500 [transform-style:preserve-3d] group-focus-visible:ring-2 group-focus-visible:ring-ring',
            flipped && '[transform:rotateY(180deg)]',
          )}
        >
          <span className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-3xl bg-primary p-6 text-primary-foreground shadow-lg [backface-visibility:hidden]">
            <span className="text-xs font-bold tracking-widest uppercase opacity-70">English</span>
            <span className="text-3xl font-black text-balance sm:text-4xl" lang="en">
              {term.en}
            </span>
          </span>
          <span className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-3xl border bg-card p-6 shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <span className="flex flex-col items-center gap-1">
              <span className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Русский</span>
              <span className="text-2xl font-black text-balance" lang="ru">
                {term.ru}
              </span>
            </span>
            <span className="h-px w-16 bg-border" />
            <span className="flex flex-col items-center gap-1">
              <span className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Қазақша</span>
              <span className="text-2xl font-black text-balance" lang="kk">
                {term.kk}
              </span>
            </span>
          </span>
        </span>
      </button>

      <div className="flex w-full items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => go(-1)}
          className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm font-bold hover:bg-muted"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          {t.glossary.prev}
        </button>
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-muted-foreground" aria-live="polite">
            {index + 1} {t.glossary.cardOf} {terms.length}
          </span>
          <button
            type="button"
            onClick={() => speakEnglish(term.en)}
            aria-label={`${t.controls.listen}: ${term.en}`}
            className="inline-flex size-9 items-center justify-center rounded-full bg-brand-blue-soft text-brand-blue hover:bg-brand-blue hover:text-white"
          >
            <Volume2 className="size-4" />
          </button>
        </div>
        <button
          type="button"
          onClick={() => go(1)}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground hover:opacity-90"
        >
          {t.glossary.next}
          <ArrowRight className="size-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
