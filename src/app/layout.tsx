import '@/styles/globals.css'

import { type Metadata } from 'next'
import { Geist } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'

export const metadata: Metadata = {
  title: 'ParlerPal',
  description: 'Your AI language tutor',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="h-full">
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              fontSize: '14px',
            },
          }}
        />
      </body>
    </html>
  )
}
