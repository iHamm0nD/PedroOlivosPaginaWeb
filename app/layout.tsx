import type { Metadata } from 'next'
import { Nunito, Quicksand } from 'next/font/google'
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

export const metadata: Metadata = {
  title: 'Pedro Olivos | Oficial Web Site',
  description: 'Aprende a tocar violin con Pedro Olivos',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${quicksand.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
