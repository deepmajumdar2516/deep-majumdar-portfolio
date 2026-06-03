import SectionHeading from './SectionHeading'
import skills from '../data/skills.json'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading
          label=""
          title="Skills"
          subtitle="Technical proficiency by category"
        />

        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.category} className="skill-group card">
              <h3>{group.category}</h3>

              <ul
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '10px',
                  padding: 0,
                  margin: 0,
                  listStyle: 'none',
                }}
              >
                {group.items.map((skill) => (
                  <li
                    key={skill.name}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '999px',
                      backgroundColor: '#1e293b',
                      color: '#38bdf8',
                      border: '1px solid #38bdf8',
                      fontWeight: '500',
                    }}
                  >
                    {skill.name}
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