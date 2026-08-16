import { useEffect, useState } from 'react'
import { getProduct } from '../data/products'
import { StoreContext } from './context'

function read(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || null
  } catch {
    return null
  }
}

function priceOf(p) {
  const m = (p?.price || '').replace(/[€,\s]/g, '').match(/(\d+)/)
  return m ? Number(m[1]) : 0
}

export function StoreProvider({ children }) {  const [bag, setBag] = useState(() => read('velaire-bag') || [])
  const [wishlist, setWishlist] = useState(() => read('velaire-wishlist') || [])

  useEffect(() => {
    try {
      localStorage.setItem('velaire-bag', JSON.stringify(bag))
    } catch {
      /* storage unavailable */
    }
  }, [bag])

  useEffect(() => {
    try {
      localStorage.setItem('velaire-wishlist', JSON.stringify(wishlist))
    } catch {
      /* storage unavailable */
    }
  }, [wishlist])

  const addToBag = (id, qty = 1) => {
    setBag((prev) => {
      const existing = prev.find((i) => i.id === id)
      if (existing) {
        return prev.map((i) => (i.id === id ? { ...i, qty: Math.min(99, i.qty + qty) } : i))
      }
      return [...prev, { id, qty }]
    })
  }

  const removeFromBag = (id) => setBag((prev) => prev.filter((i) => i.id !== id))

  const updateQty = (id, qty) => {
    if (qty <= 0) {
      removeFromBag(id)
      return
    }
    setBag((prev) => prev.map((i) => (i.id === id ? { ...i, qty: Math.min(99, qty) } : i)))
  }

  const clearBag = () => setBag([])

  const toggleWishlist = (id) =>
    setWishlist((prev) => (prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id]))

  const isWished = (id) => wishlist.includes(id)

  const bagCount = bag.reduce((n, i) => n + i.qty, 0)
  const subtotal = bag.reduce((sum, i) => sum + priceOf(getProduct(i.id)) * i.qty, 0)

  return (
    <StoreContext.Provider
      value={{
        bag,
        addToBag,
        removeFromBag,
        updateQty,
        clearBag,
        bagCount,
        subtotal,
        wishlist,
        toggleWishlist,
        isWished,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}
