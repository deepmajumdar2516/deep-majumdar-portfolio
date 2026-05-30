import SectionHeading from './SectionHeading'
import { personal } from '../data/personal'
import ExperienceTimeline from './ExperienceTimeline'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading label="01" title="About Me" subtitle="Background, goals, and focus areas" />
        <div className="about-grid">
          <div className="about-text card">
            <p>{personal.intro}</p>
            <h3>Career objective</h3>
            <p>{personal.careerObjective}</p>
            <h3>Areas of interest</h3>
            <ul className="interest-list">
              {personal.interests.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <ExperienceTimeline />
        </div>
      </div>
    </section>
  )
}
