import { Link } from 'react-router-dom'
import { LocatorIcon } from './Icons'
import { useState } from 'react'

export default function StoreLocator() {
  const [query, setQuery] = useState('')

  return (
    <section className="store-locator">
      <div className="store-locator-inner">
        <h2 className="section-title">Find a Boutique</h2>
        <p className="store-locator-text">
          Discover VELAIRE boutiques around the world and plan your visit.
        </p>
        <form
          className="store-locator-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="City, country or postal code"
          />
          <button type="submit" className="btn btn-dark">
            Search
          </button>
        </form>
        <Link to="/contact" className="store-locator-link">
          <LocatorIcon /> View all boutiques
        </Link>
      </div>
    </section>
  )
}
