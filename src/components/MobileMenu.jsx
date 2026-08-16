import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { navLinks } from '../data/nav'
import { SearchIcon, UserIcon, HeartIcon, BagIcon, CloseIcon, ChevronIcon, LocatorIcon } from './Icons'

export default function MobileMenu({ open, onClose }) {
  const [expanded, setExpanded] = useState(null)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (open) setExpanded(null)
  }, [open])

  const toggle = (label) => {
    setExpanded((e) => (e === label ? null : label))
  }

  const go = (to) => {
    onClose()
    navigate(to)
  }

  const submitSearch = (e) => {
    e.preventDefault()
    if (query.trim()) go(`/search?q=${encodeURIComponent(query.trim())}`)
  }

  return (
    <div className={`mobile-menu ${open ? 'open' : ''}`} aria-hidden={!open}>
      <div className="mobile-menu-header">
        <Link to="/" className="mobile-menu-logo" onClick={onClose}>
          VELAIRE
        </Link>
        <button type="button" className="icon-btn" onClick={onClose} aria-label="Close menu">
          <CloseIcon />
        </button>
      </div>

      <form className="mobile-search" onSubmit={submitSearch}>
        <SearchIcon size={16} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
        />
      </form>

      <div className="mobile-accordion">
        {navLinks.map((item) => {
          const isOpen = expanded === item.label
          return (
            <div key={item.label} className="mobile-acc-item">
              <button type="button" className="mobile-acc-head" onClick={() => toggle(item.label)}>
                <span>{item.label}</span>
                <ChevronIcon />
              </button>
              {isOpen && (
                <div className="mobile-acc-body">
                  {item.columns.map((col) => (
                    <div key={col.title} className="mobile-acc-col">
                      <Link
                        to={item.to}
                        className="mobile-acc-title"
                        onClick={() => go(item.to)}
                      >
                        {col.title}
                      </Link>
                      {col.items.map((sub) => {
                        const page = typeof sub === 'object'
                        const href = page ? sub.to : `${item.to}?cat=${encodeURIComponent(sub)}`
                        return (
                          <Link
                            key={page ? sub.label : sub}
                            to={href}
                            className="mobile-acc-link"
                            onClick={() => go(href)}
                          >
                            {page ? sub.label : sub}
                          </Link>
                        )
                      })}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="mobile-menu-utility">
        <Link to="/boutiques" onClick={onClose}>
          <LocatorIcon size={16} /> Boutiques
        </Link>
        <Link to="/craftsmanship" onClick={onClose}>
          Craftsmanship
        </Link>
        <Link to="/circle" onClick={onClose}>
          The VELAIRE Circle
        </Link>
        <Link to="/sustainability" onClick={onClose}>
          Sustainability
        </Link>
        <Link to="/contact" onClick={onClose}>
          Customer Care
        </Link>
      </div>

      <div className="mobile-menu-account">
        <Link to="/account" onClick={onClose} className="mobile-account-item">
          <UserIcon size={18} /> Account
        </Link>
        <Link to="/wishlist" onClick={onClose} className="mobile-account-item">
          <HeartIcon size={18} /> Wishlist
        </Link>
        <Link to="/bag" onClick={onClose} className="mobile-account-item">
          <BagIcon size={18} /> Shopping Bag
        </Link>
      </div>

      <p className="mobile-menu-country">WW · EN</p>
    </div>
  )
}
