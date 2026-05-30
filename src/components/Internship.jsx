import SectionHeading from './SectionHeading'
import internship from '../data/internship.json'

export default function Internship() {
  return (
    <section id="internship" className="section">
      <div className="container">
        <SectionHeading label="05" title="Internship" subtitle="Industry experience" />
        <div className="internship-card card">
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
        </div>
      </div>
    </section>
  )
}
