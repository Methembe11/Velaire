import Breadcrumbs from '../components/Breadcrumbs'
import SectionHeader from '../components/SectionHeader'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

const looks = [
  { src: '/assets/img/her/soft_bags.jpg', text: 'VELAIRE Soft Bags — SS26' },
  { src: '/assets/img/snodo/Checkerboard.jpg', text: 'Checkerboard Colour Story' },
  { src: '/assets/img/eternal_gold_2/Bow.jpg', text: 'Eternal Gold Fine Jewelry' },
  { src: '/assets/img/Speedrock/speedrock_2.jpg', text: 'Speedrock Sneakers' },
  { src: '/assets/img/bags_ess_re_woman_re/galleria.jpg', text: 'VELAIRE Galleria' },
  { src: '/assets/img/snodo/Vienna_green.jpg', text: 'Vienna Green Colour Story' },
  { src: '/assets/img/gifts/him.jpg', text: 'Menswear Edit' },
  { src: '/assets/img/menu/menu_DT.jpg', text: 'Linea Rossa Sunglasses' },
  { src: '/assets/img/bags/bonnie.jpg', text: 'VELAIRE Bonnie' },
  { src: '/assets/img/snodo/Vienna_red.jpg', text: 'Vienna Red Colour Story' },
  { src: '/assets/img/eternal_gold_2/Snake.jpg', text: 'Eternal Gold Bracelet' },
  { src: '/assets/img/Travel/travel.jpg', text: 'The Art of Travel' },
]

const featured = products.filter((p) => p.isNew).slice(0, 6)

export default function LookbookPage() {
  return (
    <div className="lookbook-page">
      <section className="category-hero">
        <img src="/assets/img/her/soft_bags.jpg" alt="Lookbook" />
        <div className="category-hero-content">
          <p className="hero-eyebrow">Spring Summer 2026</p>
          <h1 className="category-hero-title">The Lookbook</h1>
        </div>
      </section>

      <div className="category-body">
        <Breadcrumbs current="The Lookbook" />
        <p className="category-editorial">
          A study in softness and structure — twelve moments from the first collection.
        </p>
      </div>

      <div className="lookbook-story">
        {looks.map((look, i) => (
          <figure key={look.text} className="story-chapter" data-reveal>
            <img src={look.src} alt={look.text} loading="lazy" decoding="async" />
            <figcaption className="story-caption">
              <span className="story-index">0{i + 1}</span>
              <span className="story-text">{look.text}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <section className="lookbook-shop">
        <SectionHeader eyebrow="Shop" title="The Pieces" link="/new-in" linkLabel="Shop the Collection" />
        <div className="product-grid">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  )
}
