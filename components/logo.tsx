import { MountainSnow } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('flex items-center gap-2', className)}>
      <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
        <MountainSnow className="size-5" aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-none font-black tracking-tight text-foreground">
        <span className="text-sm">TALDY</span>
        <span className="text-sm">CONNECT</span>
      </span>
    </span>
  )
}
