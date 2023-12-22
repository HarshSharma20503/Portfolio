import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Harsh\'s Portfolio',
  description: 'Explore my portfolio project—a concise compilation offering a comprehensive overview of my diverse skill set and experiences. Through an intuitive interface, it seamlessly presents a spectrum of projects, emphasizing simplicity, functionality, and practicality, providing a nuanced reflection of my professional journey',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-screen w-screen dark'>
      <head>
        <link rel="icon" href="/Initials.png" sizes="any" />
      </head>
      <body className={`bg-fixed bg-gradient-to-r from-green-800 to-blue-400 dark:from-dark-500 dark:to-dark-300 dark:text-white ${inter.className}`}>
        {children}
      </body>
    </html>
  )
}
