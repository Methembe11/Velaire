import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { navLinks } from '../data/nav'
import {
  SearchIcon,
  UserIcon,
  HeartIcon,
  BagIcon,
  MenuIcon,
  CloseIcon,
  ArrowRightIcon,
} from './Icons'
import { products } from '../data/products'
import MobileMenu from './MobileMenu'
import { useStore } from '../store/useStore'

export default function Header() {
  const { bagCount } = useStore()
  const [activeMenu, setActiveMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const menuRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const onClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setActiveMenu(null)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  useEffect(() => {
    document.body.style.overflow = activeMenu || mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [activeMenu, mobileOpen])

  const onSearchSubmit = (e) => {
    e.preventDefault()
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`)
      setSearchOpen(false)
      setQuery('')
    }
  }

  const results = query.trim() ? getSearchResults(query.trim()) : []

  return (
    <header className="site-header">
      <div className="header-top">
        <div className="header-top-left">
          <button
            type="button"
            className="icon-btn menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
          <Link to="/" className="utility-link hide-mobile">
            WW · EN
          </Link>
        </div>
        <div className="header-top-center">
          <Link to="/" className="logo" aria-label="VELAIRE home">
            <span className="wordmark">VELAIRE</span>
          </Link>
        </div>
        <div className="header-top-right">
          <button type="button" className="icon-btn" onClick={() => setSearchOpen(true)} aria-label="Search">
            <SearchIcon />
          </button>
          <Link to="/account" className="icon-btn" aria-label="Account">
            <UserIcon />
          </Link>
          <Link to="/wishlist" className="icon-btn" aria-label="Wishlist">
            <HeartIcon />
          </Link>
          <Link to="/bag" className="icon-btn" aria-label="Shopping bag">
            <BagIcon />
            {bagCount > 0 && <span className="bag-count">{bagCount}</span>}
          </Link>
        </div>
      </div>

      <nav className="main-nav" ref={menuRef}>
        {navLinks.map((item) => (
          <div key={item.label} className="nav-item" onMouseEnter={() => setActiveMenu(item.label)}>
            <NavLink to={item.to} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              {item.label}
            </NavLink>
            {activeMenu === item.label && (
              <div className="mega-menu">
                <div className="mega-columns">
                  {item.columns.map((col) => (
                    <div key={col.title} className="mega-column">
                      <Link to={item.to} className="mega-column-title">
                        {col.title}
                      </Link>
                      {col.items.map((sub) => {
                        const page = typeof sub === 'object'
                        const href = page ? sub.to : `${item.to}?cat=${encodeURIComponent(sub)}`
                        return (
                          <Link key={page ? sub.label : sub} to={href} className="mega-link">
                            {page ? sub.label : sub}
                          </Link>
                        )
                      })}
                    </div>
                  ))}
                </div>
                <div className="mega-images">
                  {item.images.map((img) => (
                    <Link key={img.label} to={item.to} className="mega-image">
                      <img src={img.src} alt={img.label} loading="lazy" />
                      <span>{img.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </nav>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />

      <div className={`search-overlay ${searchOpen ? 'open' : ''}`}>
        <div className="search-panel">
          <div className="search-head">
            <span className="search-label">SEARCH</span>
            <button type="button" className="icon-btn" onClick={() => setSearchOpen(false)} aria-label="Close search">
              <CloseIcon />
            </button>
          </div>
          <form className="search-form" onSubmit={onSearchSubmit}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              autoFocus
            />
            <button type="submit" className="icon-btn" aria-label="Submit search">
              <ArrowRightIcon />
            </button>
          </form>
          {query.trim() && (
            <div className="search-results">
              {results.length > 0 ? (
                <>
                  <p className="search-hint">
                    {results.length} result{results.length > 1 ? 's' : ''}
                  </p>
                  {results.map((p) => (
                    <Link
                      key={p.id}
                      to={`/product/${p.id}`}
                      className="search-result"
                      onClick={() => setSearchOpen(false)}
                    >
                      <img src={p.image} alt={p.name} />
                      <div>
                        <strong>{p.name}</strong>
                        <span>{p.category}</span>
                      </div>
                      <span className="search-price">{p.price}</span>
                    </Link>
                  ))}
                </>
              ) : (
                <p className="search-hint">No results for “{query}”</p>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

function getSearchResults(q) {
  const terms = q.toLowerCase().split(' ').filter(Boolean)
  return products
    .filter((p) => {
      const hay = `${p.name} ${p.category} ${p.colors.join(' ')}`.toLowerCase()
      return terms.every((t) => hay.includes(t))
    })
    .slice(0, 8)
}
