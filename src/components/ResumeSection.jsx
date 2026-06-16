import SectionHeading from './SectionHeading'
import { personal } from '../data/personal'
import Reveal from './Reveal'

export default function ResumeSection() {
  return (
    <section id="resume" className="section">
      <div className="container">
        <Reveal as="div" effect="fade-in">
          <SectionHeading label="" title="Resume" subtitle="View online or download PDF" />
        </Reveal>
        <Reveal as="div" className="resume-panel card" effect="slide-up">
          <div className="resume-actions">
            <a href={personal.resumePath} target="_blank" rel="noreferrer" className="btn btn--outline">
              View PDF
            </a>
            <a href={personal.resumePath} download className="btn btn--primary">
              Download PDF
            </a>
          </div>
          <iframe
            title="Resume preview"
            src={personal.resumePath}
            className="resume-frame"
          />
          <p className="resume-hint">
            Place your resume at <code>public/resume.pdf</code>. The preview appears when the file exists.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
