import type { Metadata } from 'next'
import Header from './components/header'
import Hamburger from './components/hamburger'
import { EB_Garamond, Playfair_Display_SC, Cormorant_Garamond, Playfair_Display } from 'next/font/google'
import './globals.css'

const eb_garamond = EB_Garamond( {
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-ebgaramond',
  display: 'swap'
})

const playfairDisplaySC = Playfair_Display_SC({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-playfair-sc',
  display: 'swap'
})

const playfairDisplay = Playfair_Display({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap'
})

const cormorant = Cormorant_Garamond({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Agora | Georgia Tech’s Christian Thought Journal',
  description: 'Agora seeks to glorify God as an ecumenical forum and journal of Christian thought. By creating and curating pieces that reflect the vibrant beauty of God’s nature, we offer a collective Christian perspective to the campus dialogue.',
  icons: {
    icon: [
      {
        url: '/logo-black.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logo-white.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${eb_garamond.variable} ${playfairDisplaySC.variable} ${playfairDisplay.variable} ${cormorant.variable}`}>
      <body>
        <Hamburger />
        <Header />
        {children}
      </body>
    </html>
  )
}
