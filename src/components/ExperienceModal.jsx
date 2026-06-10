export default function ExperienceModal({ item, onClose }) {
  if (!item) return null

  return (
    <div className="modal-overlay" role="presentation" onClick={onClose}>
      <div className="modal" role="dialog" aria-labelledby="experience-modal-title" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <p className="timeline-year">{item.year}</p>
        <h3 id="experience-modal-title">{item.title}</h3>
        <p className="muted">{item.subtitle}</p>
        <div className="modal-block">
          <h4>Details</h4>
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  )
}