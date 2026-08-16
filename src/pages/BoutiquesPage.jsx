import { useState } from 'react'
import { boutiques, countries } from '../data/boutiques'
import Breadcrumbs from '../components/Breadcrumbs'
import { LocatorIcon, StarIcon } from '../components/Icons'

export default function BoutiquesPage() {
  const [query, setQuery] = useState('')
  const [country, setCountry] = useState('')

  const filtered = boutiques.filter((b) => {
    const matchesCountry = !country || b.country === country
    const q = query.toLowerCase()
    const matchesQuery =
      !q ||
      `${b.name} ${b.city} ${b.country} ${b.address}`.toLowerCase().includes(q)
    return matchesCountry && matchesQuery
  })

  return (
    <div className="boutiques-page">
      <section className="category-hero">
        <img src="/assets/img/home_decor/Home_decor.jpg" alt="Boutiques" />
        <div className="category-hero-content">
          <p className="hero-eyebrow">VELAIRE</p>
          <h1 className="category-hero-title">Boutiques</h1>
        </div>
      </section>

      <div className="category-body">
        <Breadcrumbs current="Boutiques" />
        <p className="store-locator-text">
          Discover VELAIRE boutiques around the world. {boutiques.length} locations available.
        </p>

        <div className="boutique-filters">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search city or boutique"
          />
          <select value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value="">All Countries</option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {filtered.length === 0 ? (
          <p className="no-results">No boutiques match your search.</p>
        ) : (
          <div className="boutique-grid">
            {filtered.map((b) => (
              <article key={b.id} className="boutique-card">
                <div className="boutique-card-head">
                  <h3>{b.name}</h3>
                  <span className="boutique-city">
                    {b.city} · {b.country}
                  </span>
                </div>
                <p className="boutique-address">
                  <LocatorIcon size={14} /> {b.address}
                </p>
                <p className="boutique-phone">{b.phone}</p>
                <p className="boutique-hours">{b.hours}</p>
                {b.services.length > 0 && (
                  <div className="boutique-services">
                    {b.services.map((s) => (
                      <span key={s} className="service-tag">
                        <StarIcon size={10} /> {s}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
