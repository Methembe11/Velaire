import { Link } from 'react-router-dom'
import { getProduct } from '../data/products'
import { useStore } from '../store/useStore'
import ProductCard from '../components/ProductCard'
import Breadcrumbs from '../components/Breadcrumbs'

export default function WishlistPage() {
  const { wishlist } = useStore()
  const items = wishlist.map(getProduct).filter(Boolean)

  return (
    <div className="simple-page">
      <div className="simple-page-header">
        <Breadcrumbs current="Wishlist" />
        <p className="hero-eyebrow">VELAIRE</p>
        <h1 className="category-hero-title">Wishlist</h1>
      </div>

      <div className="simple-page-body">
        {items.length === 0 ? (
          <div className="empty-state">
            <p>Your wishlist is empty.</p>
            <Link to="/new-in" className="btn btn-dark">
              Discover the Collections
            </Link>
          </div>
        ) : (
          <div className="product-grid">
            {items.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
