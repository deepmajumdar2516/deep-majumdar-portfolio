export default function SectionHeading({ id, label, title, subtitle }) {
  return (
    <header className="section-heading" id={id}>
      <span className="section-label">{label}</span>
      <h2>{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </header>
  )
}
