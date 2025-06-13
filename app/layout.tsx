import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'bento-grid',
  description: 'Create a grid layout with ease using bento-grid',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
