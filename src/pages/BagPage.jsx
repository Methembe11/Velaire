import { Link } from 'react-router-dom'
import { getProduct } from '../data/products'
import { useStore } from '../store/useStore'
import Breadcrumbs from '../components/Breadcrumbs'

export default function BagPage() {
  const { bag, updateQty, removeFromBag, clearBag, subtotal } = useStore()

  const items = bag
    .map((i) => ({ ...i, product: getProduct(i.id) }))
    .filter((i) => i.product)

  const shipping = subtotal >= 500 || subtotal === 0 ? 0 : 25
  const total = subtotal + shipping

  return (
    <div className="simple-page">
      <div className="simple-page-header">
        <Breadcrumbs current="Shopping Bag" />
        <p className="hero-eyebrow">VELAIRE</p>
        <h1 className="category-hero-title">Shopping Bag</h1>
      </div>

      <div className="simple-page-body">
        {items.length === 0 ? (
          <div className="empty-state">
            <p>Your shopping bag is empty.</p>
            <Link to="/new-in" className="btn btn-dark">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="bag-layout">
            <div className="bag-items">
              {items.map(({ product, qty }) => (
                <div key={product.id} className="bag-item">
                  <Link to={`/product/${product.id}`} className="bag-item-media">
                    <img src={product.image} alt={product.name} />
                  </Link>
                  <div className="bag-item-info">
                    <Link to={`/product/${product.id}`} className="bag-item-name">
                      {product.name}
                    </Link>
                    <p className="bag-item-cat">{product.category}</p>
                    <p className="bag-item-price">{product.price}</p>
                    <div className="bag-item-actions">
                      <div className="qty-stepper">
                        <button
                          type="button"
                          onClick={() => updateQty(product.id, qty - 1)}
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span>{qty}</span>
                        <button
                          type="button"
                          onClick={() => updateQty(product.id, qty + 1)}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        className="bag-remove"
                        onClick={() => removeFromBag(product.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <aside className="bag-summary">
              <h3 className="bag-summary-title">Order Summary</h3>
              <div className="bag-total-row">
                <span>Subtotal</span>
                <span>€{subtotal.toLocaleString('en-GB')}</span>
              </div>
              <div className="bag-total-row">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Complimentary' : `€${shipping}`}</span>
              </div>
              <div className="bag-total-row bag-grand">
                <span>Total</span>
                <span>€{total.toLocaleString('en-GB')}</span>
              </div>
              <button type="button" className="btn btn-dark btn-block" onClick={clearBag}>
                Checkout — Not Yet Available
              </button>
              <p className="bag-note">Complimentary shipping on all orders over €500.</p>
              <Link to="/new-in" className="bag-continue">
                Continue Shopping
              </Link>
            </aside>
          </div>
        )}
      </div>
    </div>
  )
}
