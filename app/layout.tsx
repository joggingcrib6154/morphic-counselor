'use client'

import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/header'
import { QuestionSubmission } from '@/components/hide-header'
import { Sidebar } from '@/components/sidebar'
import { Toaster } from '@/components/ui/sonner'
import { AppStateProvider } from '@/lib/utils/app-state'
import { useState } from 'react'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isQuestionAsked, setIsQuestionAsked] = useState(false)

  const handleQuestionSubmit = () => {
    setIsQuestionAsked(true)
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('font-sans antialiased', fontSans.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AppStateProvider>
            <Header
              onReload={function (): void {
                throw new Error('Function not implemented.')
              }}
            />

            {!isQuestionAsked && (
              <header className="my-counselor-header">
                <h1>My EdCounselor</h1>
              </header>
            )}

            <main>
              <QuestionSubmission submitMessage={handleQuestionSubmit} />

              {children}
            </main>
            <Sidebar />
            <Toaster />
          </AppStateProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
