import { useState } from 'react'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import { articles, categories } from '../data/journal'

export default function JournalPage() {
  const [cat, setCat] = useState('All')
  const shown = cat === 'All' ? articles : articles.filter((a) => a.category === cat)
  const [lead, ...rest] = shown

  return (
    <div className="journal-page">
      <section className="category-hero">
        <img src="/assets/img/Travel/travel.jpg" alt="The Journal" />
        <div className="category-hero-content">
          <p className="hero-eyebrow">The House of VELAIRE</p>
          <h1 className="category-hero-title">The Journal</h1>
        </div>
      </section>

      <div className="category-body">
        <Breadcrumbs current="The Journal" />
        <p className="category-editorial">
          Architecture, travel, design and the quieter arts of the house.
        </p>

        <div className="journal-cats">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              className={`journal-cat ${cat === c ? 'active' : ''}`}
              onClick={() => setCat(c)}
            >
              {c}
            </button>
          ))}
        </div>

        {lead && (
          <article className="journal-lead" data-reveal>
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
          </article>
        )}

        {rest.length > 0 && (
          <div className="journal-grid">
            {rest.map((a) => (
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
        )}
      </div>
    </div>
  )
}
