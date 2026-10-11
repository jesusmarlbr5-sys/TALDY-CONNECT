import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Caveat, Nunito } from 'next/font/google'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { LanguageProvider } from '@/components/providers/language-provider'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const nunito = Nunito({
  subsets: ['latin', 'cyrillic', 'cyrillic-ext'],
  variable: '--font-nunito',
  display: 'swap',
})

const caveat = Caveat({
  subsets: ['latin', 'cyrillic', 'cyrillic-ext'],
  variable: '--font-caveat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Taldy Connect — Learn. Connect. Make a Difference.',
    template: '%s · Taldy Connect',
  },
  description:
    'Taldy Connect — молодёжный портал Талдыкоргана: изучение английского, глоссарий терминов по специальностям ЖУ им. И. Жансугурова, волонтёрство и события.',
  keywords: ['Taldy Connect', 'Талдыкорган', 'английский язык', 'глоссарий', 'Жетысуский университет', 'волонтёрство'],
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8faff' },
    { media: '(prefers-color-scheme: dark)', color: '#141c2e' },
  ],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" suppressHydrationWarning className={`${nunito.variable} ${caveat.variable}`}>
      <body className="min-h-dvh" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          <LanguageProvider>
            <div className="flex min-h-dvh flex-col">
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <SiteFooter />
            </div>
          </LanguageProvider>
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
