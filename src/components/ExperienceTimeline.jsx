import { useState } from 'react'
import experience from '../data/experience.json'
import ExperienceModal from './ExperienceModal'
import Reveal from './Reveal'

export default function ExperienceTimeline() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="timeline card">
      <h3>Experience timeline</h3>
      <ul className="timeline-list">
        {experience.map((item, index) => (
          <li key={item.year + item.title} className="timeline-item">
            <Reveal as="div" className="timeline-item-inner" effect="slide-up" delay={index * 110}>
              <button type="button" className="timeline-dot" aria-label={`${item.year}: ${item.title}`} onClick={() => setSelected(item)} />
              <div className="timeline-body">
                <span className="timeline-year">{item.year}</span>
                <strong>{item.title}</strong>
                <em>{item.subtitle}</em>
                <p>{item.description}</p>
                <button type="button" className="btn btn--ghost btn--sm" onClick={() => setSelected(item)}>
                  View details →
                </button>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
      <ExperienceModal item={selected} onClose={() => setSelected(null)} />
    </div>
  )
}
