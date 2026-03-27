'use client'

import Image from "next/image"
import AnimatedText from "../common/AnimatedText"
import FloatingElements from "../common/FloatingElements"
import { FiInstagram } from "react-icons/fi"

export default function Hero() {
  return (
    <section id="home" className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <FloatingElements />
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
          <h1 className="text-4xl font-bold">Hiroto Yoshida</h1>
          <p className="text-lg text-foreground/80 font-[family-name:var(--font-geist-mono)]">
            2002 / 01 / 14 - Born in Chiba, Japan
          </p>
        </AnimatedText>

        <AnimatedText
          className="max-w-2xl text-center"
        >
          <p className="text-foreground/80 leading-relaxed">
            Konnichiwa🖐️ I am a Master's student at <a href="https://hapislab.org/" target="_blank" className="underline decoration-dotted underline-offset-4 hover:text-[#d253b5] duration-300">Shinoda / Makino Laboratory</a>
            , <a href="https://www.k.u-tokyo.ac.jp/" target="_blank" className="underline decoration-dotted underline-offset-4 hover:text-[#d253b5] duration-300">GSFS</a>, UTokyo.<br />
            My research interests include Acourstic Levitation, Human Computer Interaction, and 3D User Interface.<br />
          </p>
        </AnimatedText>

        <AnimatedText
          className="flex gap-4 items-center flex-row"
        >
          <a
            className="
              relative
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
            <span className="relative z-20">GitHub</span>
          </a>
          <a
            className="
              relative
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
            <span className="relative z-20">LinkedIn</span>
          </a>
          <a
            className="
              relative
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
            <span className="relative z-20">Email</span>
          </a>
          <a
            className="
              relative
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
            <span className="relative z-20">Instagram</span>
          </a>
        </AnimatedText>
      </main>
    </section>
  )
} 