import SectionHeading from './SectionHeading'
import skills from '../data/skills.json'
import Reveal from './Reveal'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal as="div" effect="fade-in">
          <SectionHeading
            label=""
            title="Skills"
            subtitle="Technical proficiency by category"
          />
        </Reveal>

        <div className="skills-grid">
          {skills.map((group, groupIndex) => (
            <Reveal key={group.category} as="div" className="skill-group card" effect="slide-up" delay={groupIndex * 120}>
              <h3>{group.category}</h3>

              <ul className="skill-chips">
                {group.items.map((skill, itemIndex) => (
                  <li key={skill.name} style={{ '--reveal-delay': `${itemIndex * 70}ms` }}>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}