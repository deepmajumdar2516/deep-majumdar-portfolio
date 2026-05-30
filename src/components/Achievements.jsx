import SectionHeading from './SectionHeading'
import achievements from '../data/achievements.json'

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <SectionHeading label="07" title="Achievements" subtitle="Competitions and leadership" />
        <div className="achievements-grid">
          {achievements.map((a) => (
            <article key={a.title} className="achievement-card card">
              <span className="achievement-year">{a.year}</span>
              <h3>{a.title}</h3>
              <p className="achievement-org">{a.organization}</p>
              <p>{a.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
