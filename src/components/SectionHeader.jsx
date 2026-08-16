import { Link } from 'react-router-dom'
import { ArrowRightIcon } from './Icons'

export default function SectionHeader({ eyebrow, title, link, linkLabel = 'View All' }) {
  return (
    <div className="section-header" data-reveal>
      <div>
        {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
        <h2 className="section-title">{title}</h2>
      </div>
      {link && (
        <Link to={link} className="section-link" aria-label={linkLabel}>
          <ArrowRightIcon size={20} />
        </Link>
      )}
    </div>
  )
}
