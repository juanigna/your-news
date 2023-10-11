import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Provider from './Providers/Provider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className="bg-gray-100 dark:bg-zinc-900 transition-all duration-700 ">
        <Provider>
          <Header />
          <div className='max-w-6xl mx-auto'>
            {children}
          </div>
        </Provider>
      </body>
    </html>
  )
}
