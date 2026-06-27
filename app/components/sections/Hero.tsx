'use client'

import Image from "next/image"
import AnimatedText from "../common/AnimatedText"
// import FloatingElements from "../common/FloatingElements"
import { FiInstagram } from "react-icons/fi"

export default function Hero() {
  return (
    <section id="home" className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-body)]">
      {/* <FloatingElements /> */}
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <AnimatedText className="flex flex-col items-center gap-4">
          <Image
            className="rounded-full"
            src="/20250323.JPG" // Replace with your avatar image path in public folder
            alt="Profile Picture"
            width={500}
            height={500}
            priority
          />
          <h1 className="inline-block text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 dark:from-purple-400 dark:via-pink-400 dark:to-purple-400">Hiroto Yoshida</h1>
          <p className="text-lg text-foreground/80 font-[family-name:var(--font-body)]">

          </p>
        </AnimatedText>

        <AnimatedText
          className="max-w-2xl text-center"
        >
          <p className="text-foreground/80 leading-relaxed">
            I'm a Master's student at <a href="https://hapislab.org/" target="_blank" className="underline decoration-dotted underline-offset-4 duration-300 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-600 hover:to-purple-600 dark:hover:from-purple-400 dark:hover:via-pink-400 dark:hover:to-purple-400">Shinoda / Makino Laboratory</a>
            , <a href="https://www.k.u-tokyo.ac.jp/" target="_blank" className="underline decoration-dotted underline-offset-4 duration-300 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-600 hover:to-purple-600 dark:hover:from-purple-400 dark:hover:via-pink-400 dark:hover:to-purple-400">GSFS</a>, UTokyo.<br />
            My research interests include Acoustic Levitation, Human-Computer Interaction, and User Interfaces.<br />
          </p>
        </AnimatedText>

        <AnimatedText
          className="flex gap-4 items-center flex-row"
        >
          <a
            className="
              relative
              group
              z-20
              rounded-full border border-solid border-black/[.08] dark:border-white/[.145] 
              transition-colors flex items-center justify-center 
              hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] 
              h-12                                    // Fixed height
              px-5                                   // Fixed padding
              text-base                              // Fixed font size
            "
            href="https://github.com/hiro-sd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="invert dark:invert-0 mr-2"
              src="/github.svg"
              alt="GitHub"
              width={20}
              height={20}
              sizes="20px"
            />
            <span className="relative z-20 transition-all duration-300 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:via-pink-600 group-hover:to-purple-600 dark:group-hover:from-purple-400 dark:group-hover:via-pink-400 dark:group-hover:to-purple-400">GitHub</span>
          </a>
          <a
            className="
              relative
              group
              z-20
              rounded-full border border-solid border-black/[.08] dark:border-white/[.145] 
              transition-colors flex items-center justify-center 
              hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] 
              h-10 sm:h-12
              px-3 sm:px-5
              text-sm sm:text-base
              mb-1
            "
            href="https://www.linkedin.com/in/hiroto-yoshida/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert mr-1 sm:mr-2"
              src="/linkedin.svg"
              alt="LinkedIn"
              width={20}
              height={20}
              sizes="20px"
            />
            <span className="relative z-20 transition-all duration-300 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:via-pink-600 group-hover:to-purple-600 dark:group-hover:from-purple-400 dark:group-hover:via-pink-400 dark:group-hover:to-purple-400">LinkedIn</span>
          </a>
          <a
            className="
              relative
              group
              z-20
              rounded-full border border-solid border-black/[.08] dark:border-white/[.145] 
              transition-colors flex items-center justify-center 
              hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] 
              h-10 sm:h-12
              px-3 sm:px-5
              text-sm sm:text-base
              mb-1
            "
            href="mailto:hirotoyoshida@g.ecc.u-tokyo.ac.jp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert mr-1 sm:mr-2"
              src="/mail.svg"
              alt="Mail"
              width={20}
              height={20}
              sizes="20px"
            />
            <span className="relative z-20 transition-all duration-300 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:via-pink-600 group-hover:to-purple-600 dark:group-hover:from-purple-400 dark:group-hover:via-pink-400 dark:group-hover:to-purple-400">Email</span>
          </a>
          <a
            className="
              relative
              group
              z-20
              rounded-full border border-solid border-black/[.08] dark:border-white/[.145] 
              transition-colors flex items-center justify-center 
              hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] 
              h-10 sm:h-12
              px-3 sm:px-5
              text-sm sm:text-base
              mb-1
            "
            href="https://www.instagram.com/yoshipiro_boc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiInstagram className="mr-1 sm:mr-2" size={20} aria-hidden="true" />
            <span className="relative z-20 transition-all duration-300 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:via-pink-600 group-hover:to-purple-600 dark:group-hover:from-purple-400 dark:group-hover:via-pink-400 dark:group-hover:to-purple-400">Instagram</span>
          </a>
        </AnimatedText>
      </main>
    </section>
  )
} 