import SectionHeading from './SectionHeading'
import internship from '../data/internship.json'
import Reveal from './Reveal'

export default function Internship() {
  return (
    <section id="internship" className="section">
      <div className="container">
        <Reveal as="div" effect="fade-in">
          <SectionHeading label="" title="Internship" subtitle="Industry experience" />
        </Reveal>
        <Reveal as="div" className="internship-card card" effect="slide-up">
          <div className="internship-header">
            <div>
              <h3>{internship.company}</h3>
              <p className="internship-role">{internship.role}</p>
              <p className="internship-meta">
                {internship.project} · {internship.duration} · {internship.location}
              </p>
            </div>
            <a href={internship.certificate} download className="btn btn--primary">
              Download certificate
            </a>
          </div>
          <h4>Responsibilities</h4>
          <ul>
            {internship.responsibilities.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
          <h4>Technologies</h4>
          <div className="project-tech">
            {internship.technologies.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
