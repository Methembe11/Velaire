import { Link } from 'react-router-dom'
import SectionHeader from './SectionHeader'

export default function ColorStories({ items }) {
  return (
    <section className="color-stories">
      <SectionHeader eyebrow="Colour Stories" title="A New Palette" link="/handbags" />
      <div className="color-grid">
        {items.map((item) => (
          <Link key={item.label} to="/handbags" className="color-item">
            <img src={item.src} alt={item.label} loading="lazy" decoding="async" />
            <span className="color-label">{item.label}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
