import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HeartIcon } from './Icons'
import { swatchColor } from '../data/products'
import { useStore } from '../store/useStore'

export default function ProductCard({ product }) {
  const { addToBag, isWished, toggleWishlist } = useStore()
  const [added, setAdded] = useState(false)
  const wished = isWished(product.id)

  const quickAdd = () => {
    addToBag(product.id)
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  return (
    <div className="product-card">
      <div className="product-media">
        <Link to={`/product/${product.id}`} className="product-media-link" aria-label={product.name}>
          <img src={product.image} alt={product.name} loading="lazy" decoding="async" />
        </Link>
        {(product.badge || product.isNew) && (
          <span className="product-badge">{product.badge || 'New'}</span>
        )}
        <button
          type="button"
          className={`wish-btn ${wished ? 'active' : ''}`}
          onClick={() => toggleWishlist(product.id)}
          aria-label={wished ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <HeartIcon />
        </button>
        <button type="button" className="quick-add" onClick={quickAdd}>
          {added ? 'Added to Bag' : 'Add to Bag'}
        </button>
      </div>
      <div className="product-info">
        <Link to={`/product/${product.id}`} className="product-name">
          {product.name}
        </Link>
        <div className="product-colors">
          {product.colors.slice(0, 4).map((c) => (
            <span
              key={c}
              className="product-color-dot"
              style={{ backgroundColor: swatchColor(c) }}
              title={c}
              aria-hidden="true"
            />
          ))}
        </div>
        <p className="product-price">{product.price}</p>
      </div>
    </div>
  )
}
