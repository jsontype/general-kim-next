import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from './components/molecules/Navbar'
import { JotaiProvider } from './_providers/JotaiProvider'
import { I18nProvider } from './_providers/I18nProvider'
import { ApolloClientProvider } from './_providers/ApolloProvider'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'general-kim-next',
  description: 'study nextjs',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <I18nProvider>
          <JotaiProvider>
            <ApolloClientProvider>
              <div className="p-8">
                <Navbar />
                {children}
              </div>
            </ApolloClientProvider>
          </JotaiProvider>
        </I18nProvider>
      </body>
    </html>
  )
}
