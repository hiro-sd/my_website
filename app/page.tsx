'use client'

// Step 1: Import necessary components
// You can find all component files in the /components directory
import Hero from "./components/sections/Hero"
import About from "./components/sections/About"
import CourseTimeline from "./components/education/CourseTimeline"
import Navbar from "./components/common/Navbar"
import MySkills from './components/sections/MySkills'
import Experience from './components/sections/Experience'
import { Box } from '@mui/material'
import Projects from './components/sections/Projects'
import Gallery from './components/sections/Gallery'
import DataBackground from "./components/common/DataBackground"

// Step 2: Choose your template version
// For Researcher Template: uncomment these imports
// import Research from './components/sections/Research'
// import Teaching from './components/sections/TeachingExperience'

// Step 3: Configure your website sections
// You can add/remove/reorder sections by modifying the components below
// Make sure section IDs match with navigation items in /components/common/Navbar.tsx
export default function Home() {
  return (
    <>
      <div className="fixed inset-0 -z-10 bg-radial-gradient from-transparent to-black">
        <DataBackground />
      </div>

      {/* Navigation bar - Edit items in /components/common/Navbar.tsx */}
      <Navbar />
      <main>
        {/* Hero section - Edit content in /components/sections/Hero */}
        <Hero />

        {/* About section - Edit your intro in /components/sections/About */}
        <About />

        {/* Skills section - Add your skills in /components/sections/MySkills */}
        {/* <MySkills /> */}

        {/* Projects section - Showcase your projects in /components/sections/Projects */}
        <Projects />

        {/* Education section - Edit timeline in /components/education/CourseTimeline */}
        <section id="backgrounds" className="relative">
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 4,
          }}>
            <h1 className="inline-block text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 dark:from-purple-400 dark:via-pink-400 dark:to-purple-400 mb-12">Background</h1>
            <CourseTimeline />
          </Box>
        </section>

        {/* Experience section - Add your work history in /components/sections/Experience */}
        {/* <Experience /> */}

        {/* Gallery section - Add your photos in /components/sections/Gallery */}
        <Gallery />
      </main>
    </>
  )
}
