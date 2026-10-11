'use client'

import { useLanguage } from '@/components/providers/language-provider'
import { LANGS, LANG_LABELS } from '@/lib/i18n/translations'
import { cn } from '@/lib/utils'

export function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, setLang, t } = useLanguage()

  return (
    <div
      role="group"
      aria-label={t.controls.language}
      className={cn('inline-flex items-center rounded-full border bg-muted/60 p-0.5', className)}
    >
      {LANGS.map((code) => {
        const active = code === lang
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={active}
            title={LANG_LABELS[code].full}
            className={cn(
              'rounded-full px-2.5 py-1 text-xs font-bold transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none',
              active ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground',
            )}
          >
            <span className="sr-only">{LANG_LABELS[code].full}</span>
            <span aria-hidden="true">{LANG_LABELS[code].short}</span>
          </button>
        )
      })}
    </div>
  )
}
