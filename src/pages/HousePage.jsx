import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import ImageTextBlock from '../components/ImageTextBlock'

const values = [
  {
    title: 'Craftsmanship over mass production',
    text: 'Hands, materials and process come before output and speed. Every object is considered, every detail earned.',
    src: '/assets/img/bags_ess_re_woman_re/galleria.jpg',
  },
  {
    title: 'Timeless over trendy',
    text: 'Pieces designed to outlive seasons, not to chase them. The collection is small on purpose.',
    src: '/assets/img/home_decor/Home_decor.jpg',
  },
  {
    title: 'Quiet confidence over loud branding',
    text: 'Understated by design. No logos shouting from the fabric — only the quiet certainty of how things are made.',
    src: '/assets/img/snodo/Vienna_red.jpg',
  },
]

const phases = [
  ['Fashion', 'The first collection'],
  ['Leather Goods', 'The icons'],
  ['Fragrance', 'The first scents'],
  ['The House', 'A decade of quiet growth'],
]

const vision = [
  { title: 'VELAIRE Maison', text: 'The home, considered.' },
  { title: 'VELAIRE Travel', text: 'The journey, refined.' },
  { title: 'VELAIRE Editions', text: 'Rare collaborations.' },
  { title: 'VELAIRE Journal', text: 'An ongoing conversation.' },
]

export default function HousePage() {
  return (
    <div className="house-page">
      <section className="category-hero">
        <img src="/assets/img/home_decor/Home_decor.jpg" alt="The House" />
        <div className="category-hero-content">
          <p className="hero-eyebrow">VELAIRE</p>
          <h1 className="category-hero-title">The House</h1>
        </div>
      </section>

      <div className="category-body">
        <Breadcrumbs current="The House" />

        <section className="house-section" data-reveal>
          <p className="section-eyebrow">Heritage</p>
          <h2 className="house-title">Where the house began</h2>
          <p className="prose intro-block">
            VELAIRE began with a single idea — make fewer things, deliberately, so that each one can be
            exceptional. From a small atelier it has grown quietly: leather goods, fragrance, fashion.
            Built not on seasons, but on standards.
          </p>
          <div className="facts-row">
            {phases.map(([num, label]) => (
              <div key={label} className="fact">
                <span className="fact-num">{num}</span>
                <span className="fact-label">{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="house-section" data-reveal>
          <p className="section-eyebrow">Philosophy</p>
          <h2 className="house-title">What we stand for</h2>
          <div className="values-grid">
            {values.map((v) => (
              <div key={v.title} className="value-card">
                <img src={v.src} alt={v.title} loading="lazy" />
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </section>

        <ImageTextBlock
          src="/assets/img/eternal_gold_2/Snake.jpg"
          eyebrow="Craftsmanship"
          title="How things are made"
          text="Cut by hand, stitched slowly, finished once. The ateliers are where the house earns its name."
          cta="Explore Craftsmanship"
          ctaTo="/craftsmanship"
        />

        <section className="house-section" data-reveal>
          <p className="section-eyebrow">The Future</p>
          <h2 className="house-title">Where the house is going</h2>
          <div className="vision-grid">
            {vision.map((v) => (
              <div key={v.title} className="vision-card">
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="about-links">
          <Link to="/world-of-velaire" className="btn btn-dark">
            The VELAIREsphere
          </Link>
          <Link to="/boutiques" className="btn btn-outline">
            Find a Boutique
          </Link>
        </div>
      </div>
    </div>
  )
}
