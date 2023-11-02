import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'deakon(デアコン)',
  description: '全国の婚活パーティーを探すなら【デアコン】。出会い結婚・結婚ナビ相談所は、気軽に参加できる本気の婚活パーティー・街コンです。\
  気軽に始めるオンライン婚活から各イベント婚活までさまざまなパーティーを主催しています。大阪・京都・神戸・奈良を中心に全国のパーティーがたくさん。\
  安心・安全の婚活パーティーは株式会社ラブチャレンジャーが運営しています。',
  keywords: ["婚活パーティー", "婚活", "お見合いパーティー", "出会い", "街コン", "結婚", "デアコン"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Header />
          <div className='mt-20'>
            {children}
          </div>
          <Footer />
      </body>
    </html>
  )
}
