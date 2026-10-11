import type { LucideIcon } from 'lucide-react'
import { brand, type BrandColor } from '@/lib/brand'
import { cn } from '@/lib/utils'

export function SectionHeading({
  id,
  title,
  text,
  icon: Icon,
  color,
}: {
  id: string
  title: string
  text: string
  icon: LucideIcon
  color: BrandColor
}) {
  return (
    <div className="flex flex-col gap-3">
      <span className={cn('flex size-11 items-center justify-center rounded-full text-white', brand[color].solid)}>
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <h2 id={id} className="text-3xl font-black tracking-tight sm:text-4xl">
        {title}
      </h2>
      <p className="max-w-2xl text-pretty text-muted-foreground sm:text-lg">{text}</p>
    </div>
  )
}
