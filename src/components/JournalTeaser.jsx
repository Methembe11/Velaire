import { Link } from 'react-router-dom'
import SectionHeader from './SectionHeader'
import { articles } from '../data/journal'

export default function JournalTeaser() {
  const [lead, ...rest] = articles
  const picks = rest.slice(0, 2)

  return (
    <section className="journal-teaser">
      <SectionHeader eyebrow="The Journal" title="Notes from the House" link="/journal" linkLabel="View the Journal" />
      <div className="journal-lead" data-reveal>
        <Link to={`/journal/${lead.id}`} className="journal-lead-media">
          <img src={lead.src} alt={lead.title} loading="lazy" />
        </Link>
        <div className="journal-lead-body">
          <p className="journal-meta">
            {lead.date} · {lead.category}
          </p>
          <h2>
            <Link to={`/journal/${lead.id}`}>{lead.title}</Link>
          </h2>
          <p className="journal-excerpt">{lead.text}</p>
          <Link to={`/journal/${lead.id}`} className="section-link">
            Read the Story
          </Link>
        </div>
      </div>
      <div className="journal-grid">
        {picks.map((a) => (
          <article key={a.id} className="journal-card" data-reveal>
            <Link to={`/journal/${a.id}`}>
              <img src={a.src} alt={a.title} loading="lazy" />
            </Link>
            <div className="journal-card-body">
              <p className="journal-meta">
                {a.date} · {a.category}
              </p>
              <h3>
                <Link to={`/journal/${a.id}`}>{a.title}</Link>
              </h3>
              <p className="journal-excerpt">{a.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
