'use client'

import { Box } from '@mui/material'
import About from './sections/About'
import CourseTimeline from './education/CourseTimeline'
import DataBackground from './common/DataBackground'
import Gallery from './sections/Gallery'
import Hero from './sections/Hero'
import Navbar from './common/Navbar'
import Projects from './sections/Projects'
import { LanguageProvider, useLanguage } from '../i18n/LanguageContext'
import type { Locale } from '../i18n/content'

function PortfolioContent() {
  const { locale, text } = useLanguage()
  const headingClass = locale === 'ja' ? 'font-display-space' : 'font-display-outline'

  return (
    <>
      <div className="fixed inset-0 -z-10 bg-radial-gradient from-transparent to-black">
        <DataBackground />
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />

        <section id="backgrounds" className="relative">
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 4 }}>
            <h1 className={`${headingClass} inline-block text-3xl sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 dark:from-purple-400 dark:via-pink-400 dark:to-purple-400 mb-12`}>
              {text.sections.background}
            </h1>
            <CourseTimeline />
          </Box>
        </section>

        <Gallery />
      </main>
    </>
  )
}

export default function PortfolioPage({ locale }: { locale: Locale }) {
  return (
    <LanguageProvider locale={locale}>
      <PortfolioContent />
    </LanguageProvider>
  )
}

