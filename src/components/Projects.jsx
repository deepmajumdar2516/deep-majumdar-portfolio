import { useMemo, useState } from 'react'
import SectionHeading from './SectionHeading'
import projectsData from '../data/projects.json'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

const FILTERS = ['All', 'AI', 'ML', 'Data Science', 'Web Development']

export default function Projects() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState(null)

  const sorted = useMemo(
    () => [...projectsData].sort((a, b) => b.year - a.year),
    []
  )

  const filtered = useMemo(() => {
    return sorted.filter((p) => {
      const matchFilter =
        filter === 'All' ||
        p.category.some((c) => {
          if (filter === 'ML' && (c === 'ML' || c === 'Computer Vision')) return true
          if (filter === 'AI' && c === 'AI') return true
          return c === filter
        })
      const q = search.toLowerCase()
      const matchSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.technologies.some((t) => t.toLowerCase().includes(q))
      return matchFilter && matchSearch
    })
  }, [sorted, search, filter])

  return (
    <section id="projects" className="section section--alt">
      <div className="container">
        <SectionHeading
          label=""
          title="Projects"
          subtitle="Search, filter, and explore — click a card for screenshots and links"
        />

        <div className="projects-toolbar">
          <input
            type="search"
            className="search-input"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search projects"
          />
          <div className="filter-pills" role="group" aria-label="Filter projects">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                className={filter === f ? 'active' : ''}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="project-timeline-bar">
          {sorted.map((p) => (
            <button
              key={p.id}
              type="button"
              className={filtered.some((x) => x.id === p.id) ? '' : 'muted'}
              onClick={() => document.getElementById(`project-${p.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })}
              title={`${p.name} (${p.year})`}
            >
              <span className="tl-year">{p.year}</span>
              <span className="tl-dot" />
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((project) => (
            <div key={project.id} id={`project-${project.id}`}>
              <ProjectCard project={project} onOpen={setSelected} />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="empty-state">No projects match your search. Try another keyword or filter.</p>
        )}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
