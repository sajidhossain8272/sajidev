import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './design.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sajid Hossain — Software Developer, AI Builder & Product Engineer',
  description:
    'Sajid Hossain is a software developer and product builder focused on AI agents, automation, SaaS, modern web applications and practical digital products.',
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
