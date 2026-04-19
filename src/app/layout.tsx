import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Lealya — Personal Shopper Inmobiliario Madrid',
    template: '%s | Lealya',
  },
  description: 'Laura Castellano, personal shopper inmobiliario en Madrid. Acompañamiento integral para comprar, vender e invertir en vivienda con calma y criterio técnico.',
  keywords: ['personal shopper inmobiliario', 'madrid', 'comprar piso madrid', 'asesor inmobiliario', 'lealya'],
  authors: [{ name: 'Laura Castellano', url: 'https://lealya.es' }],
  creator: 'Lealya',
  metadataBase: new URL('https://lealya.es'),
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://lealya.es',
    siteName: 'Lealya',
    title: 'Lealya — Personal Shopper Inmobiliario Madrid',
    description: 'Acompañamiento integral para comprar, vender e invertir en vivienda en Madrid.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
