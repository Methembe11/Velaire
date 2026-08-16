import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getProduct } from '../data/products'
import { featuredCollection } from '../data/homepage'

export default function FeaturedCollection() {
  const products = featuredCollection.productIds.map(getProduct).filter(Boolean)
  const [i, setI] = useState(0)

  useEffect(() => {
    if (products.length < 2) return undefined
    const t = setInterval(() => setI((x) => (x + 1) % products.length), 6000)
    return () => clearInterval(t)
  }, [products.length])

  const current = products[i]
  if (!current) return null

  return (
    <section className="featured-collection">
      <div className="featured-header" data-reveal>
        <div>
          <p className="section-eyebrow">{featuredCollection.eyebrow}</p>
          <h2 className="section-title">{featuredCollection.title}</h2>
        </div>
        <p className="featured-count">
          0{i + 1} / 0{products.length}
        </p>
      </div>

      <div className="featured-stage" data-reveal>
        <div className="featured-media">
          <img key={current.id} src={current.image} alt={current.name} />
        </div>
        <div className="featured-info">
          <p className="featured-cat">{current.category}</p>
          <h3 className="featured-name">{current.name}</h3>
          <p className="featured-price">{current.price}</p>
          <div className="featured-actions">
            <Link to={`/product/${current.id}`} className="btn btn-dark">
              Discover
            </Link>
            <Link to={featuredCollection.link} className="featured-link">
              View the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
