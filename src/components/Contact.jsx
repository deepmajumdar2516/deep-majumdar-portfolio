import SectionHeading from './SectionHeading'
import { personal } from '../data/personal'
import Reveal from './Reveal'

export default function Contact() {
  const { contact } = personal

  return (
    <section id="contact" className="section section--alt">
      <div className="container">
        <Reveal as="div" effect="fade-in">
          <SectionHeading label="" title="Contact" subtitle="Let's connect" />
        </Reveal>
        <div className="contact-grid">
          <Reveal as="a" href={`mailto:${contact.email}`} className="contact-card card" effect="fade-up">
            <span className="contact-icon">✉</span>
            <strong>Email</strong>
            <p>{contact.email}</p>
          </Reveal>
          <Reveal as="a" href={`tel:${contact.phone.replace(/\s/g, '')}`} className="contact-card card" effect="fade-up" delay={80}>
            <span className="contact-icon">📞</span>
            <strong>Phone</strong>
            <p>{contact.phone}</p>
          </Reveal>
          <Reveal as="a" href={contact.linkedin} target="_blank" rel="noreferrer" className="contact-card card" effect="fade-up" delay={160}>
            <span className="contact-icon">in</span>
            <strong>LinkedIn</strong>
            <p>@{personal.linkedinUsername}</p>
          </Reveal>
          <Reveal as="a" href={contact.github} target="_blank" rel="noreferrer" className="contact-card card" effect="fade-up" delay={240}>
            <span className="contact-icon">⌘</span>
            <strong>GitHub</strong>
            <p>@{personal.githubUsername}</p>
          </Reveal>
          <Reveal as="div" className="contact-card card contact-card--location" effect="fade-up" delay={320}>
            <span className="contact-icon">📍</span>
            <strong>Location</strong>
            <p>{contact.location}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
