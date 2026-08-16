import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import Manifesto from '../components/Manifesto'
import ImageTextBlock from '../components/ImageTextBlock'
import { craftsmanship } from '../data/craftsmanship'

export default function CraftsmanshipPage() {
  return (
    <div className="craftsmanship-page">
      <section className="category-hero">
        <img src={craftsmanship.sections[0].src} alt="Craftsmanship" />
        <div className="category-hero-content">
          <p className="hero-eyebrow">{craftsmanship.eyebrow}</p>
          <h1 className="category-hero-title">{craftsmanship.title}</h1>
        </div>
      </section>

      <div className="category-body">
        <Breadcrumbs current="Craftsmanship" />
      </div>

      <Manifesto eyebrow="The Belief" title={craftsmanship.intro} />

      <div className="craft-sections">
        {craftsmanship.sections.map((s, i) => (
          <ImageTextBlock
            key={s.title}
            src={s.src}
            eyebrow={s.eyebrow}
            title={s.title}
            text={s.text}
            reverse={i % 2 === 1}
          />
        ))}
      </div>

      <figure className="campaign-block craft-closer" data-reveal>
        <img src={craftsmanship.closer.src} alt={craftsmanship.closer.caption} loading="lazy" />
        <figcaption className="campaign-caption">{craftsmanship.closer.caption}</figcaption>
      </figure>

      <section className="craft-cta" data-reveal>
        <p className="section-eyebrow">Continue the House</p>
        <div className="craft-cta-links">
          <Link to="/handbags" className="btn btn-dark">
            Explore Leather Goods
          </Link>
          <Link to="/men" className="btn btn-outline">
            Explore Menswear
          </Link>
        </div>
      </section>
    </div>
  )
}
