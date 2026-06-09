// import SectionHeading from './SectionHeading'
// import blogPosts from '../data/blog.json'

// export default function Blog() {
//   return (
//     <section id="blog" className="section section--alt">
//       <div className="container">
//         <SectionHeading label="10" title="Blog" subtitle="Sample articles — replace with your Medium or blog links" />
//         <div className="blog-grid">
//           {blogPosts.map((post) => (
//             <article key={post.id} className="blog-card card">
//               <time dateTime={post.date}>{post.date}</time>
//               <h3>{post.title}</h3>
//               <p>{post.excerpt}</p>
//               <div className="blog-meta">
//                 <span>{post.readTime}</span>
//                 {post.tags.map((t) => (
//                   <span key={t} className="tag">
//                     {t}
//                   </span>
//                 ))}
//               </div>
//               <button type="button" className="btn btn--ghost btn--sm">
//                 Read article (placeholder)
//               </button>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
