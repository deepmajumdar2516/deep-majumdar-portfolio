import SectionHeading from './SectionHeading'
import achievements from '../data/achievements.json'
import Reveal from './Reveal'

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <Reveal as="div" effect="fade-in">
          <SectionHeading label="07" title="Achievements" subtitle="Competitions and leadership" />
        </Reveal>
        <div className="achievements-grid">
          {achievements.map((a, index) => (
            <Reveal key={a.title} as="article" className="achievement-card card" effect="slide-up" delay={index * 90}>
              <span className="achievement-year">{a.year}</span>
              <h3>{a.title}</h3>
              <p className="achievement-org">{a.organization}</p>
              <p>{a.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
