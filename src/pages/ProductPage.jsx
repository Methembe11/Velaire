import { useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { getProduct, products } from '../data/products'
import Breadcrumbs from '../components/Breadcrumbs'
import ProductCarousel from '../components/ProductCarousel'
import { HeartIcon, ChevronIcon } from '../components/Icons'
import { useStore } from '../store/useStore'

export default function ProductPage() {
  const { id } = useParams()
  const product = getProduct(id)
  const { addToBag, isWished, toggleWishlist } = useStore()
  const [size, setSize] = useState('')
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)
  const [activeImg, setActiveImg] = useState(0)

  if (!product) return <Navigate to="/404" replace />

  const wished = isWished(product.id)

  const relatedIds = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 6)
    .map((p) => p.id)

  const images = [product.image, ...products.filter((p) => p.id !== product.id && p.name.includes(product.name.split(' ').slice(-1)[0])).map((p) => p.image)].slice(0, 3)

  const addToBagClick = () => {
    addToBag(product.id, qty)
    setAdded(true)
    setTimeout(() => setAdded(false), 2500)
  }

  return (
    <div className="product-page">
      <div className="product-page-inner">
        <div className="product-gallery">
          <div className="gallery-main">
            <img src={images[activeImg] || product.image} alt={product.name} />
          </div>
          {images.length > 1 && (
            <div className="gallery-thumbs">
              {images.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  className={`thumb ${i === activeImg ? 'active' : ''}`}
                  onClick={() => setActiveImg(i)}
                  aria-label={`View image ${i + 1}`}
                >
                  <img src={img} alt="" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="product-details">
          <Breadcrumbs current={product.name} />
          <h1 className="product-title">{product.name}</h1>
          <p className="product-price-lg">{product.price}</p>

          <div className="product-colours">
            <span className="detail-label">Colour</span>
            <div className="swatches">
              {product.colors.map((c) => (
                <button key={c} type="button" className="swatch active" title={c}>
                  {c[0]}
                </button>
              ))}
            </div>
          </div>

          <div className="product-sizes">
            <span className="detail-label">Size</span>
            <div className="size-list">
              {['One Size', 'S', 'M', 'L'].map((s) => (
                <button
                  key={s}
                  type="button"
                  className={`size-option ${size === s ? 'active' : ''}`}
                  onClick={() => setSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="qty-row">
            <span className="detail-label">Quantity</span>
            <div className="qty-select">
              <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity">
                −
              </button>
              <span>{qty}</span>
              <button type="button" onClick={() => setQty((q) => q + 1)} aria-label="Increase quantity">
                +
              </button>
            </div>
          </div>

          <button type="button" className="btn btn-dark btn-block" onClick={addToBagClick}>
            {added ? 'Added to Bag ✓' : 'Add to Bag'}
          </button>
          <button
            type="button"
            className={`btn btn-outline btn-block wishlist-cta ${wished ? 'active' : ''}`}
            onClick={() => toggleWishlist(product.id)}
          >
            <HeartIcon size={16} /> {wished ? 'Saved to Wishlist' : 'Add to Wishlist'}
          </button>

          <p className="product-note">
            Complimentary shipping and returns on all orders.
          </p>

          <div className="accordion">
            <details>
              <summary>
                Product Details <ChevronIcon />
              </summary>
              <p>
                Crafted in the VELAIRE ateliers. Part of the {product.category} collection.
              </p>
            </details>
            <details>
              <summary>
                Care &amp; Composition <ChevronIcon />
              </summary>
              <p>Wipe clean with a soft dry cloth. Store in the dust bag provided.</p>
            </details>
            <details>
              <summary>
                Delivery &amp; Returns <ChevronIcon />
              </summary>
              <p>Complimentary express delivery. Free returns within 30 days.</p>
            </details>
          </div>

          <div className="product-services">
            <Link to="/contact">Contact us about this product</Link>
            <Link to="/sustainability">Sustainability</Link>
          </div>
        </div>
      </div>

      {relatedIds.length > 0 && (
        <ProductCarousel
          eyebrow="You May Also Like"
          title="Complete the Look"
          productIds={relatedIds}
        />
      )}
    </div>
  )
}
