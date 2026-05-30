import { useMemo } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Internship from './components/Internship'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import GitHubStats from './components/GitHubStats'
import Research from './components/Research'
import Blog from './components/Blog'
import ResumeSection from './components/ResumeSection'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import { useTheme } from './hooks/useTheme'
import { useScrollSpy } from './hooks/useScrollSpy'
import './index.css'

const SECTION_IDS = [
  'home',
  'about',
  'education',
  'skills',
  'projects',
  'internship',
  'certifications',
  'achievements',
  'github-stats',
  'research',
  'blog',
  'resume',
  'contact',
]

export default function App() {
  const { isDark, toggleTheme } = useTheme()
  const sections = useMemo(() => SECTION_IDS, [])
  const activeSection = useScrollSpy(sections)

  return (
    <>
      <a href="#home" className="skip-link">
        Skip to content
      </a>
      <Navbar activeSection={activeSection} isDark={isDark} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Internship />
        <Certifications />
        <Achievements />
        <GitHubStats />
        <Research />
        <Blog />
        <ResumeSection />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </>
  )
}
