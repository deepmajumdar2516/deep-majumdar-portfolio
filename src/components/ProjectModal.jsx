import ImageCarousel from './ImageCarousel'

export default function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <div className="modal-overlay" role="presentation" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <h3 id="modal-title">{project.name}</h3>
        <ImageCarousel images={project.screenshots} altPrefix={project.name} />
        <p>{project.description}</p>
        <div className="modal-block">
          <h4>Problem solved</h4>
          <p>{project.problemSolved}</p>
        </div>
        <div className="modal-block">
          <h4>Technologies</h4>
          <div className="project-tech">
            {project.technologies.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
        <div className="modal-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="btn btn--primary">
              GitHub
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn--outline">
              Live demo
            </a>
          )}
          {project.report && (
            <a href={project.report} download className="btn btn--ghost">
              PDF report
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
