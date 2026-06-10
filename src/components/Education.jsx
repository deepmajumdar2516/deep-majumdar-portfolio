import SectionHeading from './SectionHeading'
import education from '../data/education.json'
import Reveal from './Reveal'

export default function Education() {
  return (
    <section id="education" className="section section--alt">
      <div className="container">
        <Reveal as="div" effect="fade-in">
          <SectionHeading label="" title="Education" subtitle="Academic background" />
        </Reveal>
        <Reveal as="div" className="table-wrap card" effect="fade-up">
          <table className="edu-table">
            <thead>
              <tr>
                <th>Degree</th>
                <th>Institution</th>
                <th>Location</th>
                <th>Period</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {education.map((row) => (
                <tr key={row.degree}>
                  <td>
                    <strong>{row.degree}</strong>
                    <small>{row.highlights}</small>
                  </td>
                  <td>{row.institution}</td>
                  <td>{row.location}</td>
                  <td>{row.period}</td>
                  <td>{row.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  )
}
