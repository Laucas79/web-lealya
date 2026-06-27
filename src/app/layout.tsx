import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Lealya — Tu Asesora Inmobiliaria de Confianza en el Norte de Madrid',
    template: '%s | Lealya',
  },
  description: 'Laura Castellano, asesora inmobiliaria independiente especializada en La Moraleja, Ciudalcampo y el corredor norte de Madrid. Compra, venta e inversión con criterio técnico y sin conflictos de interés.',
  keywords: ['asesora inmobiliaria norte madrid', 'personal shopper inmobiliario La Moraleja', 'comprar chalet Ciudalcampo', 'asesoría inmobiliaria corredor burgos', 'asesora inmobiliaria confianza madrid'],
  authors: [{ name: 'Laura Castellano', url: 'https://lealya.es' }],
  creator: 'Lealya',
  metadataBase: new URL('https://lealya.es'),
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://lealya.es',
    siteName: 'Lealya',
    title: 'Lealya — Tu Asesora Inmobiliaria de Confianza en el Norte de Madrid',
    description: 'Asesora inmobiliaria independiente especializada en La Moraleja, Ciudalcampo y el corredor norte de Madrid. Compra, venta e inversión con criterio técnico.',
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
