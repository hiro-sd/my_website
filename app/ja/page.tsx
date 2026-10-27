import type { Metadata } from 'next'
import PortfolioPage from '../components/PortfolioPage'

export const metadata: Metadata = {
  title: '吉田寛人',
  description: '吉田寛人のポートフォリオサイトです。音響浮揚とその実世界への応用について研究しています。',
  alternates: {
    canonical: '/ja',
    languages: {
      'en-US': '/',
      'ja-JP': '/ja',
    },
  },
  openGraph: {
    title: '吉田寛人',
    description: '吉田寛人のポートフォリオサイトです。音響浮揚とその実世界への応用について研究しています。',
    url: '/ja',
    locale: 'ja_JP',
  },
}

export default function JapaneseHome() {
  return <PortfolioPage locale="ja" />
}

