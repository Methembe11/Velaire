import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import { ChevronIcon } from '../components/Icons'
import Breadcrumbs from '../components/Breadcrumbs'

const DEFAULT_HERO = {
  '/new-in': { src: '/assets/img/shop/44.jpg', eyebrow: 'Fashion', title: 'New In' },
  '/women': { src: '/assets/img/shop/3.jpg', eyebrow: 'Womenswear', title: 'Womenswear' },
  '/men': { src: '/assets/img/shop/16.jpg', eyebrow: 'Menswear', title: 'Menswear' },
  '/shoes': { src: '/assets/img/shop/21.jpg', eyebrow: 'Shoes', title: 'Shoes & Sneakers' },
}

const CATEGORY_MATCH = {
  '/women': ['women'],
  '/men': ['men'],
  '/shoes': ['shoes', 'sneaker'],
}

const EDITORIAL = {
  '/new-in': 'Fresh from the runway to your doorstep.',
  '/women': 'Softness and structure, considered in equal measure.',
  '/men': 'Precision in silhouette. Nothing unnecessary.',
  '/shoes': 'Grounding, quietly engineered.',
}

export default function CategoryPage() {
  const { pathname, search } = useLocation()
  const navigate = useNavigate()
  const params = new URLSearchParams(search)
  const cat = params.get('cat') || ''
  const sort = params.get('sort') || 'featured'

  const hero = DEFAULT_HERO[pathname] || {
    src: '/assets/img/home_decor/Home_decor.jpg',
    eyebrow: 'VELAIRE',
    title: 'VELAIRE',
  }

  const basePath = pathname.replace('/index.html', '')

  const filtered = useMemo(() => {
    let list = products
    if (basePath === '/new-in') {
      list = cat ? products : products.filter((p) => p.isNew)
    } else {
      const keywords = CATEGORY_MATCH[basePath]
      if (keywords) {
        list = list.filter((p) =>
          keywords.some((k) => {
            const hay = `${p.category} ${p.subcategory} ${p.name}`.toLowerCase()
            if (k === 'women' || k === 'men') return p.category.toLowerCase() === k
            return hay.includes(k)
          })
        )
      }
    }
    if (cat) {
      const stripS = (s) => s.toLowerCase().replace(/s\b/g, '')
      const parts = cat.toLowerCase().split(' ')
      list = list.filter((p) => {
        const hay = `${p.name} ${p.category} ${p.subcategory} ${p.colors.join(' ')} ${p.badge}`.toLowerCase()
        return parts.every((t) => hay.includes(t) || stripS(hay).includes(stripS(t)))
      })
    }
    return list
  }, [basePath, cat])

  const sorted = useMemo(() => {
    const list = [...filtered]
    if (sort === 'price-asc') list.sort((a, b) => priceOf(a) - priceOf(b))
    if (sort === 'price-desc') list.sort((a, b) => priceOf(b) - priceOf(a))
    return list
  }, [filtered, sort])

  const [filters, setFilters] = useState({})
  useEffect(() => {
    setFilters({})
  }, [pathname])

  const applyFilters = () => {
    let list = filtered
    if (filters.colors?.length) {
      list = list.filter((p) => p.colors.some((c) => filters.colors.includes(c)))
    }
    return list
  }
  const shown = sort === 'featured' && Object.keys(filters).length ? applyFilters() : sorted

  return (
    <div className="category-page">
      <div className="category-hero">
        <img src={hero.src} alt={hero.title} />
        <div className="category-hero-content">
          <h1 className="category-hero-title">{hero.title}</h1>
        </div>
      </div>

      <div className="category-body">
        <Breadcrumbs current={hero.title} />
        <p className="category-editorial">{EDITORIAL[basePath] || EDITORIAL['/new-in']}</p>
        <div className="category-toolbar">
          <h2 className="category-edit-title">The Edit</h2>
          <div className="toolbar-right">
            <label className="sort-select">
              <ChevronIcon />
              <select
                value={sort}
                onChange={(e) => {
                  const url = new URLSearchParams(search)
                  url.set('sort', e.target.value)
                  navigate(`${pathname}?${url.toString()}`)
                }}
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </label>
          </div>
        </div>

        {shown.length === 0 ? (
          <p className="no-results">No items found.</p>
        ) : (
          <div className="product-grid">
            {shown.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function priceOf(p) {
  const m = (p.price || '').replace(/[€,\s]/g, '').match(/(\d+)/)
  return m ? Number(m[1]) : 0
}
