import type { Metadata } from 'next'
import { Nunito, Quicksand, Playfair_Display, Great_Vibes, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const nunito = Nunito({
  subsets: ["latin"],
  variable: '--font-nunito',
  weight: ['400', '600', '700', '800', '900']
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: '--font-quicksand',
  weight: ['400', '500', '600', '700']
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
  weight: ['400', '700', '800', '900'],
  style: ['normal', 'italic'],
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: '--font-great-vibes',
  weight: ['400'],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Pedro Olivos | Oficial Web Site',
  description: 'Aprende a tocar violin con Pedro Olivos',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
        <body className={`${nunito.variable} ${quicksand.variable} ${playfair.variable} ${greatVibes.variable} ${cormorant.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
