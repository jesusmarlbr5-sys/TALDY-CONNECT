export type BrandColor = 'blue' | 'pink' | 'green' | 'yellow' | 'purple'

export const brand: Record<BrandColor, { soft: string; solid: string; text: string; border: string }> = {
  blue: { soft: 'bg-brand-blue-soft', solid: 'bg-brand-blue', text: 'text-brand-blue', border: 'border-brand-blue/30' },
  pink: { soft: 'bg-brand-pink-soft', solid: 'bg-brand-pink', text: 'text-brand-pink', border: 'border-brand-pink/30' },
  green: { soft: 'bg-brand-green-soft', solid: 'bg-brand-green', text: 'text-brand-green', border: 'border-brand-green/30' },
  yellow: { soft: 'bg-brand-yellow-soft', solid: 'bg-brand-yellow', text: 'text-brand-yellow', border: 'border-brand-yellow/30' },
  purple: { soft: 'bg-brand-purple-soft', solid: 'bg-brand-purple', text: 'text-brand-purple', border: 'border-brand-purple/30' },
}

export function speakEnglish(text: string) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return
  window.speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = 'en-US'
  utterance.rate = 0.9
  window.speechSynthesis.speak(utterance)
}
