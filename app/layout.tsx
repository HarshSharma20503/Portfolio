import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Harsh\'s Portfolio',
  description: 'This is the portfolio of an aspiring SDE',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-screen w-screen'>
      <body className={`flex items-center justify-center h-full w-full bg-gradient-to-tr from-green-500 to-blue-500 ${inter.className}`}>
        {children}
      </body>
    </html>
  )
}
