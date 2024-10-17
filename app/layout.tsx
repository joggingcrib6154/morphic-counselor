"use client"; // Add this at the very top of the file

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
import { metadata } from './metadata' 

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isQuestionAsked, setIsQuestionAsked] = useState(false);

  const handleQuestionSubmit = () => {
    setIsQuestionAsked(true); // Hide the header after a question is asked
  };

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
            <Header />
            {}
            {!isQuestionAsked && (
              <header className="my-counselor-header">
                <h1>My Counselor</h1>
              </header>
            )}
            <main>
              {}
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
