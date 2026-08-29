'use client'

import { useState } from 'react'
import AnimatedText from "../common/AnimatedText"
import { motion } from "framer-motion"

interface CourseItem {
  date: string
  title: string
  description: React.ReactNode
}

const gradientHoverLinkClass =
  'underline decoration-dotted underline-offset-4 duration-300 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-600 hover:to-purple-600 dark:hover:from-purple-400 dark:hover:via-pink-400 dark:hover:to-purple-400'

const courses: CourseItem[] = [
  {
    date: "Apr 2017 - Mar 2020",
    title: "Yachiyo Shoin High School",
    description: ""
  },
  {
    date: "Apr 2020 - Mar 2025",
    title: "Hokkaido University (B.S.)",
    description: (
      <>
        <a
          href="https://www2.fish.hokudai.ac.jp/"
          target="_blank"
          className={gradientHoverLinkClass}
        >
          Faculty of Fisheries Sciences
        </a>
        {' | '}
        <a
          href="https://www2.fish.hokudai.ac.jp/faculty-member/kishimura-hideki/"
          target="_blank"
          className={gradientHoverLinkClass}
        >
          Kishimura Laboratory
        </a>
      </>
    )
  },
  {
    date: "Aug 2023 - May 2024",
    title: "San Diego State University (Exchange)",
    description: "Took courses in Marine Biology, Biochemistry, and CS | GPA: 3.3 / 4.0"
  },
  {
    date: "Apr 2025 - Mar 2027 (expected)",
    title: "The University of Tokyo (M.S.)",
    description: (
      <>
        <a
          href="https://www.k.u-tokyo.ac.jp/"
          target="_blank"
          className={gradientHoverLinkClass}
        >
          GSFS
        </a>
        {' | '}
        <a
          href="https://hapislab.org/"
          target="_blank"
          className={gradientHoverLinkClass}
        >
          Shinoda / Makino Laboratory
        </a>
      </>
    )
  }
]

// Usage Instructions:
// 1. Add your course information in the courses array above
// 2. Each course item contains:
//    - date: Course time
//    - title: Course name
//    - description: Course description (keywords recommended)
// 3. Timeline will automatically display based on array length
// 4. "Show More" button appears when more than 5 courses

export default function CourseTimeline() {
  const [showAll, setShowAll] = useState(false)
  const displayedCourses = showAll ? courses : courses.slice(0, 5)

  const handleCollapse = () => {
    setShowAll(false)
    const educationSection = document.getElementById('education')
    if (educationSection) {
      const yOffset = -60;
      const y = educationSection.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <div className="w-full">
      {/* Timeline container */}
      <div className="relative">
        {/* Timeline background line */}
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-neutral-200 dark:bg-neutral-800 z-0" />

        {/* Timeline items */}
        {displayedCourses.map((course, index) => (
          <AnimatedText key={index}>
            <div className={`
              flex items-center gap-4 sm:gap-6 md:gap-8 mb-12 
              ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}
              relative z-10
            `}>
              <div className="flex-1 text-center">
                <h3 className="
                  text-base                              /* Mobile: 16px */
                  sm:text-lg md:text-xl                 /* sm: 18px, md: 20px */
                  font-bold 
                  mb-2
                ">
                  {course.title}
                </h3>
                <p className="
                  text-xs                               /* Mobile: 12px */
                  sm:text-sm md:text-base              /* sm: 14px, md: 16px */
                  text-foreground/60 
                  mb-1
                ">
                  {course.date}
                </p>
                <p className="
                  text-xs                               /* Mobile: 12px */
                  sm:text-sm md:text-base              /* sm: 14px, md: 16px */
                  text-foreground/80
                ">
                  {course.description}
                </p>
              </div>

              <div className="relative z-20">
                <motion.div
                  className="w-3 h-3 sm:w-4 sm:h-4 bg-black dark:bg-white rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: index * 0.2
                  }}
                />
              </div>

              <div className="flex-1" />
            </div>
          </AnimatedText>
        ))}
      </div>

      {/* Buttons outside timeline container */}
      {!showAll && courses.length > 5 && (
        <AnimatedText>
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="
                text-lg
                text-neutral-600 dark:text-neutral-400
                p-4
                transition-transform duration-300
                hover:scale-110
                z-0
                flex items-center gap-2
              "
            >
              Show More
              <svg
                className="w-5 h-5 stroke-black dark:stroke-white"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </AnimatedText>
      )}

      {showAll && (
        <AnimatedText>
          <div className="flex justify-center mt-8">
            <button
              onClick={handleCollapse}
              className="
                text-lg
                text-neutral-600 dark:text-neutral-400
                p-4
                transition-transform duration-300
                hover:scale-110
                z-0
                flex items-center gap-2
              "
            >
              Show Less
              <svg
                className="w-5 h-5 stroke-black dark:stroke-white"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
              >
                <path d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>
        </AnimatedText>
      )}

      {/* Publications Section */}
      <AnimatedText>
        <div className="mt-8 space-y-2 mx-auto max-w-6xl">
          <h2 className="flex items-center gap-3 text-xl font-bold">
            <span className="h-6 w-[4px] rounded-full bg-gradient-to-b from-purple-600 via-pink-600 to-purple-600 dark:from-purple-400 dark:via-pink-400 dark:to-purple-400" aria-hidden="true" />
            Publications
          </h2>

          <div className="space-y-3">
            <div>
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2 underline decoration-1 underline-offset-4 decoration-[var(--foreground)]/30">Conference Paper</h3>
              <p className="text-base text-foreground/80 leading-normal text-[var(--foreground)]/80">
                ・Hiroto Yoshida, Gakuto Arakawa, Shun Suzuki, Yasutoshi Makino, Hiroyuki Shinoda. &quot;Stabilization of Sphere Levitation Using Feedback Control with an Ultrasonic Phased Array&quot; SICE FES 2026 WITH ANNUAL CONFERENCE, 2026, pp. WeAT1-01.9, Sep.14-17, Yokohama.
              </p>

              <p className="text-base text-foreground/80 leading-normal text-[var(--foreground)]/80">
                ・Hiroto Yoshida, Gakuto Arakawa, Shun Suzuki, Yasutoshi Makino, Hiroyuki Shinoda. &quot;
                <a
                  href="https://conference.vrsj.org/ac2025/program/doc/3C1-11.pdf"
                  target="_blank"
                  className={gradientHoverLinkClass}
                >
                  Rotation Axis Control in Sphere Levitation Using Ultrasonic Phased Array
                </a>
                &quot; The 30th Annual Conference of the Virtual Reality Society of Japan, 2025, pp. 3C1-11, Sep.17-19, Osaka.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2 underline decoration-1 underline-offset-4 decoration-[var(--foreground)]/30">Thesis</h3>
              <p className="text-base text-foreground/80 leading-normal text-[var(--foreground)]/80">
                ・Hiroto Yoshida, Yuya Kumagai, Hideki Kishimura. &quot;A Study on the Extraction and Purification of Fucoidan Derived from Saccharina japonica and Its Structure and Antioxidant Activity Under Different Conditions&quot; Bachelor&apos;s Thesis, Hokkaido University. February 2025.
              </p>
            </div>
          </div>
        </div>
      </AnimatedText>

      {/* Internship Section */}
      <AnimatedText>
        <div className="mt-8 space-y-2 mx-auto max-w-6xl">
          <h2 className="flex items-center gap-3 text-xl font-bold">
            <span className="h-6 w-[4px] rounded-full bg-gradient-to-b from-purple-600 via-pink-600 to-purple-600 dark:from-purple-400 dark:via-pink-400 dark:to-purple-400" aria-hidden="true" />
            Internships
          </h2>
          <p className="text-base text-foreground/80 leading-normal text-[var(--foreground)]/80">
            ・Oct 2025 - Feb 2026: SAP Japan (Support Engineer, Internship) <br />
            ・Aug 2025 - Sep 2025: Microsoft Japan (Technical Support Engineer, Internship)<br />
            ・Apr 2025 - July 2025: & AI (Flutter Engineer, Internship)<br />
            ・Mar 2021 - Mar 2022: Starbucks Coffee Japan (Barista, Part time job)
          </p>
        </div>
      </AnimatedText>

      {/* Certification Section */}
      <AnimatedText>
        <div className="mt-8 space-y-2 mx-auto max-w-6xl">
          <h2 className="flex items-center gap-3 text-xl font-bold">
            <span className="h-6 w-[4px] rounded-full bg-gradient-to-b from-purple-600 via-pink-600 to-purple-600 dark:from-purple-400 dark:via-pink-400 dark:to-purple-400" aria-hidden="true" />
            Certifications
          </h2>
          <p className="text-base text-foreground/80 leading-normal text-[var(--foreground)]/80">
            ・Sep 2025: Microsoft Certified: Security, Compliance, and Identity Fundamentals (SC-900) <br />
            ・Jul 2025: Fundamental Information Technology Engineer Examination (基本情報技術者試験) <br />
            ・Jun 2024: TOEIC Listening & Reading - 945 <br />
            ・Nov 2022: TOEFL iBT - 84
          </p>
        </div>
      </AnimatedText>

      {/* Bottom spacing for next section */}
      <div className="pb-16 md:pb-24"></div>
    </div>
  )
}