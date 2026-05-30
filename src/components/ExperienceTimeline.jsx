import experience from '../data/experience.json'

export default function ExperienceTimeline() {
  return (
    <div className="timeline card">
      <h3>Experience timeline</h3>
      <ul className="timeline-list">
        {experience.map((item) => (
          <li key={item.year + item.title} className="timeline-item">
            <button
              type="button"
              className="timeline-dot"
              aria-label={`${item.year}: ${item.title}`}
            />
            <div className="timeline-body">
              <span className="timeline-year">{item.year}</span>
              <strong>{item.title}</strong>
              <em>{item.subtitle}</em>
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
