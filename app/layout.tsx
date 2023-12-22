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
    <html lang="en" className='h-screen w-screen dark'>
      <body className={`bg-fixed bg-gradient-to-r from-green-800 to-blue-400 dark:from-dark-500 dark:to-dark-300 dark:text-white ${inter.className}`}>
        {children}
      </body>
    </html>
  )
}
