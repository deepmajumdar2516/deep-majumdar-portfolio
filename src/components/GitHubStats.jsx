import SectionHeading from './SectionHeading'
import { personal } from '../data/personal'
import Reveal from './Reveal'

export default function GitHubStats() {
  const user = personal.githubUsername
  const statsUrl = `https://github-readme-stats.vercel.app/api?username=${user}&show_icons=true&hide_border=true&bg_color=00000000&title_color=F59E0B&icon_color=F59E0B&text_color=FFFFFF&ring_color=F59E0B`
  const streakUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${user}&hide_border=true&background=00000000&ring=F59E0B&fire=F59E0B&currStreakNum=F59E0B&sideNums=FFFFFF&currStreakLabel=FFB347&sideLabels=B3B3B3&dates=B3B3B3`
  const langsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${user}&layout=compact&hide_border=true&bg_color=00000000&title_color=F59E0B&text_color=FFFFFF`

  return (
    <section id="github-stats" className="section section--alt">
      <div className="container">
        <Reveal as="div" effect="fade-in">
          <SectionHeading
            label=""
            title="GitHub Stats"
            subtitle={`Live stats via github-readme-stats (@${user})`}
          />
        </Reveal>
        <div className="github-stats-grid">
          <Reveal as="a" href={personal.contact.github} target="_blank" rel="noreferrer" className="github-stat-card card" effect="fade-up">
            <img src={statsUrl} alt="GitHub profile statistics" loading="lazy" />
          </Reveal>
          <Reveal as="a" href={personal.contact.github} target="_blank" rel="noreferrer" className="github-stat-card card" effect="fade-up" delay={90}>
            <img src={streakUrl} alt="GitHub contribution streak" loading="lazy" />
          </Reveal>
          <Reveal as="a" href={personal.contact.github} target="_blank" rel="noreferrer" className="github-stat-card card github-stat-card--wide" effect="fade-up" delay={180}>
            <img src={langsUrl} alt="Top programming languages on GitHub" loading="lazy" />
          </Reveal>
        </div>
        <p className="github-note">
          Update <code>githubUsername</code> in <code>src/data/personal.js</code> if your handle differs.
        </p>
      </div>
    </section>
  )
}
