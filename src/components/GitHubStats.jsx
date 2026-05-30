import SectionHeading from './SectionHeading'
import { personal } from '../data/personal'

export default function GitHubStats() {
  const user = personal.githubUsername
  const statsUrl = `https://github-readme-stats.vercel.app/api?username=${user}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000`
  const streakUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${user}&theme=tokyonight&hide_border=true&background=00000000`
  const langsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${user}&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000`

  return (
    <section id="github-stats" className="section section--alt">
      <div className="container">
        <SectionHeading
          label="08"
          title="GitHub Stats"
          subtitle={`Live stats via github-readme-stats (@${user})`}
        />
        <div className="github-stats-grid">
          <a href={personal.contact.github} target="_blank" rel="noreferrer" className="github-stat-card card">
            <img src={statsUrl} alt="GitHub profile statistics" loading="lazy" />
          </a>
          <a href={personal.contact.github} target="_blank" rel="noreferrer" className="github-stat-card card">
            <img src={streakUrl} alt="GitHub contribution streak" loading="lazy" />
          </a>
          <a href={personal.contact.github} target="_blank" rel="noreferrer" className="github-stat-card card github-stat-card--wide">
            <img src={langsUrl} alt="Top programming languages on GitHub" loading="lazy" />
          </a>
        </div>
        <p className="github-note">
          Update <code>githubUsername</code> in <code>src/data/personal.js</code> if your handle differs.
        </p>
      </div>
    </section>
  )
}
