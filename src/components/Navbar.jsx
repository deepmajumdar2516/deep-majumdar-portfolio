import { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import VisitorCounter from './VisitorCounter'

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'internship', label: 'Internship' },
  { id: 'certifications', label: 'Certs' },
  { id: 'achievements', label: 'Awards' },
  { id: 'github-stats', label: 'GitHub' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ activeSection, isDark, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-inner container">
        <button type="button" className="navbar-brand" onClick={() => scrollTo('home')}>
          <span className="brand-mark">DM</span>
          <span className="brand-text">Deep Majumdar</span>
        </button>

        <button
          type="button"
          className="navbar-toggle"
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`navbar-links ${menuOpen ? 'is-open' : ''}`}>
          {NAV_ITEMS.map(({ id, label }) => (
            <li key={id}>
              <button
                type="button"
                className={activeSection === id ? 'active' : ''}
                onClick={() => scrollTo(id)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <VisitorCounter />
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
        </div>
      </div>
    </nav>
  )
}
