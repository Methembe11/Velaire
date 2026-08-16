import { Link } from 'react-router-dom'
import { ArrowRightIcon } from './Icons'

export default function CampaignTiles({ tiles, eyebrow, title, link, linkLabel }) {
  return (
    <section className="campaign-section" data-reveal>
      <div className="section-header">
        <div>
          {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
          {title && <h2 className="section-title">{title}</h2>}
        </div>
        {link && (
          <Link to={link} className="section-link" aria-label={linkLabel}>
            <ArrowRightIcon size={20} />
          </Link>
        )}
      </div>
      <div className="campaign-tiles">
        {tiles.map((tile, i) => (
          <Link key={`${tile.title}-${i}`} to={tile.to} className={`campaign-tile ${tile.size || ''}`}>
            <img src={tile.src} alt={tile.title} loading="lazy" decoding="async" />
            <div className="campaign-overlay">
              <span className="campaign-title">{tile.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
