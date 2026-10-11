'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BookOpen, MapPin, Sparkles } from 'lucide-react'
import { useLanguage } from '@/components/providers/language-provider'
import heroImage from '@/public/images/hero.png'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="mx-auto max-w-7xl px-4 pt-6 sm:px-6">
      <div className="relative isolate overflow-hidden rounded-3xl bg-primary">
        <Image
          src={heroImage || "/placeholder.svg"}
          alt={t.hero.imageAlt}
          fill
          priority
          sizes="(min-width: 1280px) 1248px, 100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[oklch(0.22_0.08_262/0.92)] via-[oklch(0.25_0.08_262/0.7)] to-transparent" />

        <div className="flex min-h-[520px] flex-col justify-center gap-6 px-6 py-14 sm:px-12 md:max-w-2xl md:py-20">
          <p className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold tracking-wide text-white uppercase backdrop-blur">
            <MapPin className="size-3.5" aria-hidden="true" />
            {t.hero.kicker}
          </p>
          <h1 className="text-4xl leading-[1.05] font-black tracking-tight text-balance text-white uppercase sm:text-5xl lg:text-6xl">
            {t.hero.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="font-script text-3xl text-brand-yellow sm:text-4xl">Learn. Connect. Make a Difference.</p>
          <p className="max-w-xl text-base leading-relaxed text-pretty text-white/85 sm:text-lg">{t.hero.subtitle}</p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/#sections"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[oklch(0.3_0.1_262)] shadow-lg transition-transform hover:-translate-y-0.5"
            >
              {t.hero.ctaPrimary}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="/glossary"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              <BookOpen className="size-4" aria-hidden="true" />
              {t.hero.ctaSecondary}
            </Link>
          </div>
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-white/80">
            <Sparkles className="size-4 text-brand-yellow" aria-hidden="true" />
            {t.hero.badge}
          </p>
        </div>
      </div>
    </section>
  )
}
