'use client'

import { useState, useEffect, useRef } from "react"
import React from 'react'
import { useLanguage } from '../../i18n/LanguageContext'

// Navigation bar configuration
// To modify navigation bar order and content:
// 1. Each item contains two properties:
//    - name: Display name
//    - href: Corresponding section id (must start with #)
// 2. To change order, simply adjust item positions in array
// 3. When adding new items ensure:
//    - href matches section id in page
//    - maintain consistent format
// 4. To remove items, delete directly from array
// Example: Moving Projects before Experience:
// { name: "Projects", href: "#projects"},
// { name: "Experience", href: "#experience"},
const navItems = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'projects', href: '#projects' },
  { key: 'background', href: '#backgrounds' },
  { key: 'gallery', href: '#gallery' },
]

export default function Navbar() {
  const { text, switchLocale } = useLanguage()
  const [activeSection, setActiveSection] = useState("home")
  const underlineRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLUListElement>(null)
  const NAVBAR_HEIGHT = 60

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + NAVBAR_HEIGHT + 100

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = section.clientHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const activeItem = navRef.current?.querySelector(`a[href="#${activeSection}"]`)
    if (activeItem && underlineRef.current && navRef.current) {
      const rect = activeItem.getBoundingClientRect()
      const navRect = navRef.current.getBoundingClientRect()

      underlineRef.current.style.left = `${rect.left - navRect.left}px`
      underlineRef.current.style.width = `${rect.width}px`
    }
  }, [activeSection])

  const scrollToSection = (href: string) => {
    const target = document.querySelector(href) as HTMLElement

    if (target) {
      const targetPosition = target.offsetTop - NAVBAR_HEIGHT - 12
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center gap-2 px-3 py-3.5 sm:gap-4 sm:px-4 sm:py-4">
        <ul ref={navRef} className="
          relative flex min-w-0 flex-1 justify-center
          gap-3 overflow-x-auto text-center sm:gap-8
        ">
          <div
            ref={underlineRef}
            className="absolute bottom-0 h-[2px] bg-neutral-950 dark:bg-neutral-50 transition-all duration-300 ease-out"
          />

          {navItems.map((item) => (
            <li key={item.key}>
              <a
                href={item.href}
                className={`
                  text-xs sm:text-sm /* 移动端字体大小xs(12px), sm(640px)以上为base(16px) */
                  font-medium whitespace-nowrap transition-opacity
                  bg-clip-text text-transparent
                  bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600
                  dark:from-purple-400 dark:via-pink-400 dark:to-purple-400
                  ${activeSection === item.href.slice(1)
                    ? "opacity-100"
                    : "opacity-60 hover:opacity-100"
                  }
                `}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
              >
                {text.nav[item.key as keyof typeof text.nav]}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={switchLocale}
          aria-label={text.language.switchLabel}
          title={text.language.switchLabel}
          className="shrink-0 px-1 py-1 text-xs font-semibold text-foreground/65 transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-500 sm:text-sm"
        >
          {text.language.buttonText}
        </button>
      </div>
    </nav>
  )
}
