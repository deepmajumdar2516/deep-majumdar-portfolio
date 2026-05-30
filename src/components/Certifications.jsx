import SectionHeading from './SectionHeading'
import certifications from '../data/certifications.json'

export default function Certifications() {
  return (
    <section id="certifications" className="section section--alt">
      <div className="container">
        <SectionHeading label="06" title="Certifications" subtitle="Professional learning credentials" />
        <div className="certs-grid">
          {certifications.map((cert) => (
            <article key={cert.id} className="cert-card card">
              <span className="cert-provider">{cert.provider}</span>
              <h3>{cert.title}</h3>
              <p>
                {cert.year} · {cert.credential}
              </p>
              <a href={cert.pdf} download className="btn btn--outline btn--sm">
                Download PDF
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
