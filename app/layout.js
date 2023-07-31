import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/component/header/header'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Findani',
  description: 'Anime searching website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <header><Header/></header>
        {children}
      </body>
    </html>
  )
}
