'use client'

import Image from "next/image"
import AnimatedText from "../common/AnimatedText"
import { useLanguage } from "../../i18n/LanguageContext"

export default function About() { // TODO: Edit this section.
  const { locale, text } = useLanguage()
  const headingClass = locale === 'ja' ? 'font-display-space' : 'font-display-outline'
  const aboutPhotos = [
    {
      src: "/20230727.JPG",
      alt: "A candid moment during travel",
      className: "sm:col-span-2 sm:row-span-2"
    },
    {
      src: "/20250320.JPG",
      alt: "Portrait shot",
      className: "sm:col-span-1 sm:row-span-1"
    },
    {
      src: "/20250930.JPG",
      alt: "Outdoor scene",
      className: "sm:col-span-1 sm:row-span-1"
    }
  ]

  return (
    <section id="about" className="min-h-screen w-full flex items-center justify-center px-6 py-16 sm:px-10">
      <div className="w-full max-w-6xl space-y-12">
        <AnimatedText>
          <div className="space-y-4 text-center">
            <h1 className={`${headingClass} inline-block text-3xl sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 dark:from-purple-400 dark:via-pink-400 dark:to-purple-400 mb-8`}>
              {text.about.heading}
            </h1>
            <p className="mx-auto max-w-3xl text-foreground/70 leading-relaxed">
              {text.about.paragraphs.map((paragraph, index) => (
                <span key={paragraph}>
                  {paragraph}
                  {index < text.about.paragraphs.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>
        </AnimatedText>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-12">
          <div className="space-y-8 lg:col-span-3">
            <AnimatedText>
              <div className="space-y-4">
                <h2 className="font-display-space flex items-center gap-3 text-xl font-semibold sm:text-2xl">
                  <span className="h-7 w-[4px] rounded-full bg-gradient-to-b from-purple-600 via-pink-600 to-purple-600 dark:from-purple-400 dark:via-pink-400 dark:to-purple-400" aria-hidden="true" />
                  {text.about.personalHeading}
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  {text.about.personalText}
                </p>
              </div>
            </AnimatedText>

            <AnimatedText>
              <div className="space-y-4">
                <h2 className="font-display-space flex items-center gap-3 text-xl font-semibold sm:text-2xl">
                  <span className="h-7 w-[4px] rounded-full bg-gradient-to-b from-purple-600 via-pink-600 to-purple-600 dark:from-purple-400 dark:via-pink-400 dark:to-purple-400" aria-hidden="true" />
                  {text.about.researchHeading}
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  {text.about.researchText}
                </p>
              </div>
            </AnimatedText>
          </div>

          <AnimatedText className="lg:col-span-2">
            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {aboutPhotos.map((photo) => (
                  <div
                    key={photo.src}
                    className={`group relative overflow-hidden rounded-2xl border border-black/10 bg-black/[0.04] shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/15 dark:bg-white/[0.05] ${photo.className}`}
                  >
                    <div className="relative h-48 sm:h-56">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 40vw, 28vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedText>
        </div>
      </div>
    </section>
  )
}
