'use client'

import { ThemeProvider } from 'next-themes'

export default function Providers({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system" // Use system preference
      enableSystem={true} // Enable system theme detection
      disableTransitionOnChange={false}
      storageKey="portfolio-theme" // Add storage key
    >
      {children}
    </ThemeProvider>
  )
}