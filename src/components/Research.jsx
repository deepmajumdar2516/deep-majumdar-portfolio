// import SectionHeading from './SectionHeading'
// import research from '../data/research.json'

// export default function Research() {
//   return (
//     <section id="research" className="section">
//       <div className="container">
//         <SectionHeading label="09" title="Research & Publications" subtitle="Placeholder structure for upcoming papers" />
//         <div className="research-list">
//           {research.map((paper) => (
//             <article key={paper.title} className="research-card card">
//               <div className="research-meta">
//                 <span className={`status status--${paper.status.toLowerCase()}`}>{paper.status}</span>
//                 <span>{paper.venue}</span>
//               </div>
//               <h3>{paper.title}</h3>
//               <p className="research-authors">{paper.authors}</p>
//               <p>{paper.abstract}</p>
//               {paper.link ? (
//                 <a href={paper.link} target="_blank" rel="noreferrer">
//                   Read paper →
//                 </a>
//               ) : (
//                 <span className="muted">Link coming soon</span>
//               )}
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
