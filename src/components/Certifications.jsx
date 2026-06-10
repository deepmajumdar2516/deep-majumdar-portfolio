import SectionHeading from './SectionHeading'
import certifications from '../data/certifications.json'
import Reveal from './Reveal'

export default function Certifications() {
  return (
    <section id="certifications" className="section section--alt">
      <div className="container">
        <Reveal as="div" effect="fade-in">
          <SectionHeading label="" title="Certifications" subtitle="Professional learning credentials" />
        </Reveal>
        <div className="certs-grid">
          {certifications.map((cert, index) => (
            <Reveal key={cert.id} as="article" className="cert-card card" effect="slide-up" delay={index * 90}>
              <span className="cert-provider">{cert.provider}</span>
              <h3>{cert.title}</h3>
              <p>
                {cert.year} · {cert.credential}
              </p>
              <a href={cert.pdf} download className="btn btn--outline btn--sm">
                Download PDF
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
