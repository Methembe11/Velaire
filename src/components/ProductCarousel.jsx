import { useRef } from 'react'
import ProductCard from './ProductCard'
import { getProduct } from '../data/products'
import SectionHeader from './SectionHeader'

export default function ProductCarousel({ eyebrow, title, productIds, link, linkLabel }) {
  const trackRef = useRef(null)

  const scrollBy = (dir) => {
    trackRef.current?.scrollBy({ left: dir * trackRef.current.clientWidth * 0.8, behavior: 'smooth' })
  }

  const products = productIds.map(getProduct).filter(Boolean)

  return (
    <section className="product-carousel">
      <SectionHeader eyebrow={eyebrow} title={title} link={link} linkLabel={linkLabel} />
      <div className="carousel-scroller" ref={trackRef}>
        {products.map((p) => (
          <div key={p.id} className="carousel-item">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
      <div className="carousel-nav">
        <button type="button" className="carousel-arrow" onClick={() => scrollBy(-1)} aria-label="Scroll left">
          ‹
        </button>
        <button type="button" className="carousel-arrow" onClick={() => scrollBy(1)} aria-label="Scroll right">
          ›
        </button>
      </div>
    </section>
  )
}
