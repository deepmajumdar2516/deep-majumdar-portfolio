import SectionHeading from './SectionHeading'
import { personal } from '../data/personal'

export default function Contact() {
  const { contact } = personal

  return (
    <section id="contact" className="section section--alt">
      <div className="container">
        <SectionHeading label="12" title="Contact" subtitle="Let's connect" />
        <div className="contact-grid">
          <a href={`mailto:${contact.email}`} className="contact-card card">
            <span className="contact-icon">✉</span>
            <strong>Email</strong>
            <p>{contact.email}</p>
          </a>
          <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="contact-card card">
            <span className="contact-icon">📞</span>
            <strong>Phone</strong>
            <p>{contact.phone}</p>
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" className="contact-card card">
            <span className="contact-icon">in</span>
            <strong>LinkedIn</strong>
            <p>Profile</p>
          </a>
          <a href={contact.github} target="_blank" rel="noreferrer" className="contact-card card">
            <span className="contact-icon">⌘</span>
            <strong>GitHub</strong>
            <p>@{personal.githubUsername}</p>
          </a>
          <div className="contact-card card contact-card--location">
            <span className="contact-icon">📍</span>
            <strong>Location</strong>
            <p>{contact.location}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
