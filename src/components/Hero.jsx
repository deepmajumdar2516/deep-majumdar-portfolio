import { personal } from '../data/personal'

export default function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="container hero-grid">
        <div className="hero-content animate-in">
          <p className="hero-greeting">Hello, I&apos;m</p>
          <h1>{personal.name}</h1>
          <p className="hero-title">{personal.tagline}</p>
          <p className="hero-intro">{personal.intro}</p>
          <div className="hero-actions">
            <a href={personal.resumePath} download className="btn btn--primary">
              Download Resume
            </a>
            <button
              type="button"
              className="btn btn--outline"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </button>
            <a href={personal.contact.github} target="_blank" rel="noreferrer" className="btn btn--ghost">
              GitHub
            </a>
          </div>
        </div>
        <div className="hero-visual animate-in delay-1">
          <div className="hero-photo-wrap">
            <img
              src={personal.photo}
              alt={`${personal.name} professional photo`}
              className="hero-photo"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextElementSibling?.classList.add('visible')
              }}
            />
            <div className="hero-photo-fallback" aria-hidden="true">
              <span>DM</span>
              <small>/deep-majumdar-portfolio/images/profile.jpg</small>
            </div>
            <div className="hero-ring" />
          </div>
        </div>
      </div>
    </section>
  )
}
