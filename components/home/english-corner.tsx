'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BookOpen, Languages, Volume2 } from 'lucide-react'
import { useLanguage } from '@/components/providers/language-provider'
import { SectionHeading } from '@/components/home/section-heading'
import { speakEnglish } from '@/lib/brand'
import clubImage from '@/public/images/english-club.png'

export function EnglishCorner() {
  const { t } = useLanguage()

  return (
    <section id="english" aria-labelledby="english-title" className="mx-auto max-w-7xl px-4 pt-24 sm:px-6">
      <SectionHeading id="english-title" title={t.english.title} text={t.english.text} icon={Languages} color="blue" />

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-bold tracking-wide text-muted-foreground uppercase">{t.english.phrasesTitle}</h3>
          <ul className="grid gap-3 sm:grid-cols-2">
            {t.english.phrases.map((item) => (
              <li key={item.phrase} className="flex flex-col gap-2 rounded-2xl border bg-card p-5 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-lg font-black text-primary" lang="en">
                    {item.phrase}
                  </p>
                  <button
                    type="button"
                    onClick={() => speakEnglish(item.phrase)}
                    aria-label={`${t.controls.listen}: ${item.phrase}`}
                    className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-blue-soft text-brand-blue transition-colors hover:bg-brand-blue hover:text-white"
                  >
                    <Volume2 className="size-4" />
                  </button>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.meaning}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col overflow-hidden rounded-3xl border bg-card shadow-sm">
          <div className="relative aspect-[16/10]">
            <Image src={clubImage || "/placeholder.svg"} alt={t.english.imageAlt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
          </div>
          <div className="flex flex-1 flex-col gap-3 p-6">
            <span className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <BookOpen className="size-5" aria-hidden="true" />
            </span>
            <h3 className="text-xl font-black">{t.english.glossaryTitle}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{t.english.glossaryText}</p>
            <Link
              href="/glossary"
              className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              {t.english.glossaryButton}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
