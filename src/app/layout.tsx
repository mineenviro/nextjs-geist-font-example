import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Osiris - Consultoría Ambiental en Panamá',
  description: 'Empresa ambiental especializada en Consultoría y Servicios Sociales y Ambientales, Gestión Ambiental y Gestión de Proyectos en Panamá.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
