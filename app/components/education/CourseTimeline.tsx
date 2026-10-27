'use client'

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Chip,
  Typography,
} from '@mui/material'
import { motion } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import AnimatedText from '../common/AnimatedText'
import { useLanguage } from '../../i18n/LanguageContext'

const gradientHoverLinkClass =
  'underline decoration-dotted underline-offset-4 duration-300 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-600 hover:to-purple-600 dark:hover:from-purple-400 dark:hover:via-pink-400 dark:hover:to-purple-400'

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display-space flex items-center gap-3 text-xl font-bold">
      <span className="h-6 w-[4px] rounded-full bg-gradient-to-b from-purple-600 via-pink-600 to-purple-600 dark:from-purple-400 dark:via-pink-400 dark:to-purple-400" aria-hidden="true" />
      {children}
    </h2>
  )
}

export default function CourseTimeline() {
  const { text } = useLanguage()

  const educationDescription = (course: (typeof text.education.items)[number]) => {
    if (course.id === 'hokkaido') {
      return (
        <>
          <a href="https://www2.fish.hokudai.ac.jp/" target="_blank" rel="noopener noreferrer" className={gradientHoverLinkClass}>
            {text.education.faculty}
          </a>
          {' | '}
          <a href="https://repun-app.fish.hokudai.ac.jp/course/view.php?id=2098" target="_blank" rel="noopener noreferrer" className={gradientHoverLinkClass}>
            {text.education.kishimuraLab}
          </a>
        </>
      )
    }

    if (course.id === 'utokyo') {
      return (
        <>
          <a href="https://www.k.u-tokyo.ac.jp/" target="_blank" rel="noopener noreferrer" className={gradientHoverLinkClass}>
            {text.education.gsfs}
          </a>
          {' | '}
          <a href="https://hapislab.org/" target="_blank" rel="noopener noreferrer" className={gradientHoverLinkClass}>
            {text.education.shinodaLab}
          </a>
        </>
      )
    }

    return course.description
  }

  return (
    <div className="w-full">
      <div className="relative">
        <div className="absolute left-1/2 top-0 z-0 h-full w-[2px] bg-neutral-200 dark:bg-neutral-800" />

        {text.education.items.map((course, index) => (
          <AnimatedText key={course.id}>
            <div className={`relative z-10 mb-12 flex items-center gap-4 sm:gap-6 md:gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className="flex-1 text-center">
                <h3 className="mb-2 text-base font-bold sm:text-lg md:text-xl">{course.title}</h3>
                <p className="mb-1 text-xs text-foreground/60 sm:text-sm md:text-base">{course.date}</p>
                <p className="text-xs text-foreground/80 sm:text-sm md:text-base">{educationDescription(course)}</p>
              </div>

              <div className="relative z-20">
                <motion.div
                  className="h-3 w-3 rounded-full bg-black dark:bg-white sm:h-4 sm:w-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20, delay: index * 0.2 }}
                />
              </div>

              <div className="flex-1" />
            </div>
          </AnimatedText>
        ))}
      </div>

      <AnimatedText>
        <div className="mx-auto mt-8 max-w-6xl space-y-3">
          <SectionHeading>{text.background.publications}</SectionHeading>

          <div className="space-y-4">
            <div>
              <h3 className="mb-2 text-lg font-semibold text-[var(--foreground)] underline decoration-1 underline-offset-4 decoration-[var(--foreground)]/30">{text.background.conferencePaper}</h3>
              <p className="text-base leading-normal text-[var(--foreground)]/80">
                ・Hiroto Yoshida, Gakuto Arakawa, Shun Suzuki, Yasutoshi Makino, Hiroyuki Shinoda. &quot;<strong className="font-semibold">Feedback Control for Capturing a Sphere in Free Fall Using an Ultrasonic Phased Array</strong>&quot; SICE SI 2026, 2026, Dec.8-10, Osaka, Japan.
              </p>
              <p className="text-base leading-normal text-[var(--foreground)]/80">
                ・Hiroto Yoshida, Gakuto Arakawa, Shun Suzuki, Yasutoshi Makino, Hiroyuki Shinoda. &quot;<strong className="font-semibold">Stabilization of Sphere Levitation Using Feedback Control with an Ultrasonic Phased Array</strong>&quot; SICE Festival 2026 with Annual Conference, 2026, pp. 714-719, Sep.14-17, Yokohama, Japan.
              </p>
              <p className="text-base leading-normal text-[var(--foreground)]/80">
                ・Hiroto Yoshida, Gakuto Arakawa, Shun Suzuki, Yasutoshi Makino, Hiroyuki Shinoda. &quot;
                <a href="https://conference.vrsj.org/ac2025/program/doc/3C1-11.pdf" target="_blank" rel="noopener noreferrer" className={gradientHoverLinkClass}>
                  <strong className="font-semibold">Rotation Axis Control in Sphere Levitation Using Ultrasonic Phased Array</strong>
                </a>
                &quot; The 30th Annual Conference of the Virtual Reality Society of Japan, 2025, pp. 3C1-11, Sep.17-19, Osaka, Japan.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-[var(--foreground)] underline decoration-1 underline-offset-4 decoration-[var(--foreground)]/30">{text.background.thesis}</h3>
              <p className="text-base leading-normal text-[var(--foreground)]/80">
                ・Hiroto Yoshida, Yuya Kumagai, Hideki Kishimura. &quot;<strong className="font-semibold">A Study on the Extraction and Purification of Fucoidan Derived from Saccharina japonica and Its Structure and Antioxidant Activity Under Different Conditions</strong>&quot; Bachelor&apos;s Thesis, Hokkaido University. February 2025.
              </p>
            </div>
          </div>
        </div>
      </AnimatedText>

      <AnimatedText>
        <div className="mx-auto mt-10 max-w-6xl space-y-3">
          <SectionHeading>{text.background.experience}</SectionHeading>

          <div>
            {text.experiences.map((experience, index) => (
              <Accordion
                key={experience.company}
                disableGutters
                elevation={0}
                sx={{
                  color: 'var(--foreground)',
                  backgroundColor: 'transparent',
                  '&::before': { display: 'none' },
                  '&.Mui-expanded': { margin: 0 },
                }}
              >
                <AccordionSummary
                  expandIcon={<FiChevronDown aria-hidden="true" />}
                  aria-controls={`experience-${index}-content`}
                  id={`experience-${index}-header`}
                  sx={{
                    px: 0,
                    py: 0,
                    minHeight: 30,
                    '&.Mui-expanded': { minHeight: 30 },
                    '& .MuiAccordionSummary-content': { my: 0.25 },
                    '& .MuiAccordionSummary-content.Mui-expanded': { my: 0.25 },
                    '& .MuiAccordionSummary-expandIconWrapper': { color: 'inherit' },
                  }}
                >
                  <Typography
                    component="span"
                    sx={{
                      pr: 2,
                      fontFamily: 'var(--font-body), sans-serif',
                      fontSize: '1rem',
                      lineHeight: 1.5,
                      color: 'var(--foreground)',
                    }}
                  >
                    <Box component="span">・{experience.period}: </Box>
                    <Box component="span" sx={{ fontWeight: 600 }}>{experience.company}</Box>
                    <Box component="span"> ({experience.role})</Box>
                  </Typography>
                </AccordionSummary>

                <AccordionDetails id={`experience-${index}-content`} sx={{ pl: { xs: 2.5, sm: 3 }, pr: 0, pt: 0.75, pb: 2 }}>
                  <Typography variant="body2" sx={{ maxWidth: '900px', lineHeight: 1.8, opacity: 0.82 }}>{experience.description}</Typography>
                  {experience.skills.length > 0 && (
                    <Box sx={{ mt: 1.5, display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                      {experience.skills.map(skill => (
                        <Chip
                          key={skill}
                          label={skill}
                          size="small"
                          variant="outlined"
                          sx={{ color: 'var(--foreground)', borderColor: 'rgba(128, 128, 128, 0.45)', backgroundColor: 'rgba(128, 128, 128, 0.08)', '& .MuiChip-label': { color: 'inherit' } }}
                        />
                      ))}
                    </Box>
                  )}
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
      </AnimatedText>

      <AnimatedText>
        <div className="mx-auto mt-10 max-w-6xl space-y-3">
          <SectionHeading>{text.background.certifications}</SectionHeading>
          <ul className="space-y-1 text-base leading-normal text-[var(--foreground)]/80">
            {text.certifications.map(certification => <li key={certification}>・{certification}</li>)}
          </ul>
        </div>
      </AnimatedText>

      <div className="pb-16 md:pb-24" />
    </div>
  )
}
