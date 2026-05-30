import SectionHeading from './SectionHeading'
import { personal } from '../data/personal'

export default function ResumeSection() {
  return (
    <section id="resume" className="section">
      <div className="container">
        <SectionHeading label="11" title="Resume" subtitle="View online or download PDF" />
        <div className="resume-panel card">
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
        </div>
      </div>
    </section>
  )
}
