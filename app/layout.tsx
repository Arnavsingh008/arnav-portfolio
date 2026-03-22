import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains'
})

export const metadata: Metadata = {
  title: 'Arnav Singh | Full Stack MERN Developer',
  description: 'Portfolio of Arnav Singh - Full Stack MERN Developer specializing in building modern web applications with React, Node.js, MongoDB, and more.',
  keywords: ['Arnav Singh', 'Full Stack Developer', 'MERN Developer', 'React', 'Node.js', 'MongoDB', 'Web Developer', 'Portfolio'],
  authors: [{ name: 'Arnav Singh' }],
  creator: 'Arnav Singh',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Arnav Singh | Full Stack MERN Developer',
    description: 'Portfolio of Arnav Singh - Full Stack MERN Developer specializing in building modern web applications.',
    siteName: 'Arnav Singh Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arnav Singh | Full Stack MERN Developer',
    description: 'Portfolio of Arnav Singh - Full Stack MERN Developer specializing in building modern web applications.',
  },
}

export const viewport: Viewport = {
  themeColor: '#0d1117',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
