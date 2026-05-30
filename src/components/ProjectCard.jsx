export default function ProjectCard({ project, onOpen }) {
  return (
    <article className={`project-card ${project.featured ? 'project-card--featured' : ''}`}>
      <div className="project-card-top">
        <span className="project-year">{project.year}</span>
        {project.featured && <span className="project-badge">Featured</span>}
      </div>
      <h3>{project.name}</h3>
      <p className="project-desc">{project.description}</p>
      <div className="project-tags">
        {project.category.map((c) => (
          <span key={c} className="tag">
            {c}
          </span>
        ))}
      </div>
      <div className="project-tech">
        {project.technologies.slice(0, 4).map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
      <button type="button" className="btn btn--ghost btn--sm" onClick={() => onOpen(project)}>
        View details →
      </button>
    </article>
  )
}
