import { useSearchParams } from 'react-router-dom'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import Breadcrumbs from '../components/Breadcrumbs'

export default function SearchResults() {
  const [params] = useSearchParams()
  const q = params.get('q') || ''
  const terms = q.toLowerCase().split(' ').filter(Boolean)

  const results = q
    ? products.filter((p) => {
        const hay = `${p.name} ${p.category} ${p.colors.join(' ')}`.toLowerCase()
        return terms.every((t) => hay.includes(t))
      })
    : []

  return (
    <div className="search-results-page">
      <div className="search-results-header">
        <Breadcrumbs current="Search" />
        <h1 className="category-hero-title">Search</h1>
        <p className="search-summary">
          {q ? `${results.length} result${results.length === 1 ? '' : 's'} for "${q}"` : 'Enter a search term to get started.'}
        </p>
      </div>
      <div className="product-grid">
        {results.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}
