import SectionHeading from './SectionHeading'
import { personal } from '../data/personal'
import ExperienceTimeline from './ExperienceTimeline'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal as="div" effect="fade-in">
          <SectionHeading label="" title="About Me" subtitle="Background, goals, and focus areas" />
        </Reveal>
        <div className="about-grid">
          <Reveal as="div" className="about-text card" effect="fade-up">
            <p>{personal.intro}</p>
            <h3>Career objective</h3>
            <p>{personal.careerObjective}</p>
            <h3>Areas of interest</h3>
            <ul className="interest-list">
              {personal.interests.map((item, index) => (
                <li key={item} style={{ '--reveal-delay': `${index * 80}ms` }}>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <ExperienceTimeline />
        </div>
      </div>
    </section>
  )
}
