'use client'

import { createContext, useContext, useEffect, type ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { content, type Locale } from './content'

type LanguageContextValue = {
  locale: Locale
  text: (typeof content)[Locale]
  switchLocale: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  const router = useRouter()

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const switchLocale = () => {
    const nextPath = locale === 'en' ? '/ja' : '/'
    const hash = window.location.hash
    router.push(`${nextPath}${hash}`, { scroll: false })
  }

  return (
    <LanguageContext.Provider value={{ locale, text: content[locale], switchLocale }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider')
  }

  return context
}

