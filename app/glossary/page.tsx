import type { Metadata } from 'next'
import { GlossaryView } from '@/components/glossary/glossary-view'

export const metadata: Metadata = {
  title: 'Глоссарий · Glossary',
  description:
    'Трёхъязычный глоссарий терминов по специальностям Жетысуского университета им. И. Жансугурова: английский, русский, казахский.',
}

export default function GlossaryPage() {
  return <GlossaryView />
}
