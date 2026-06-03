import SectionHeading from './SectionHeading'
import skills from '../data/skills.json'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading label="" title="Skills" subtitle="Technical proficiency by category" />
        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.category} className="skill-group card">
              <h3>{group.category}</h3>
              <ul className="skill-bars">
                {group.items.map((skill) => (
                  <li key={skill.name}>
                    <div className="skill-label">
                      <span>{skill.name}</span>
                    </div>
                    <div className="skill-track">
                      <div
                        className="skill-fill"
                        style={{ width: `${skill.level}%` }}
                        role="progressbar"
                        aria-valuenow={skill.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${skill.name} proficiency`}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
