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
    setIsQuestionAsked(true) // Set state to hide "My Counselor" header
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
            {/* Pass down the onReload prop if needed */}
            <Header
              onReload={function (): void {
                throw new Error('Function not implemented.')
              }}
            />

            {/* Conditionally render "My Counselor" header */}
            {!isQuestionAsked && (
              <header className="my-counselor-header">
                <h1>My Counselor</h1>
              </header>
            )}

            <main>
              {/* Render QuestionSubmission component */}
              <QuestionSubmission submitMessage={handleQuestionSubmit} />

              {/* Main page content */}
              {children}
            </main>

            {/* Sidebar and Toaster */}
            <Sidebar />
            <Toaster />
          </AppStateProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
