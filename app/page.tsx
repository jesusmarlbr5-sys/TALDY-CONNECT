import { Hero } from '@/components/home/hero'
import { Pillars } from '@/components/home/pillars'
import { SectionsOverview } from '@/components/home/sections-overview'
import { EnglishCorner } from '@/components/home/english-corner'
import { Volunteer } from '@/components/home/volunteer'
import { Events } from '@/components/home/events'
import { SpeakingBuddy } from '@/components/home/speaking-buddy'
import { Team } from '@/components/home/team'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Pillars />
      <SectionsOverview />
      <EnglishCorner />
      <Volunteer />
      <Events />
      <SpeakingBuddy />
      <Team />
    </>
  )
}
