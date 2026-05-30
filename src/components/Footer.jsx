import { personal } from '../data/personal'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {year} {personal.name}. Built with React & Vite.
        </p>
        <div className="footer-links">
          <a href={personal.contact.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={personal.contact.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${personal.contact.email}`}>Email</a>
        </div>
      </div>
    </footer>
  )
}
