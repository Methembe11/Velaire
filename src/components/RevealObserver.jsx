import { useEffect } from 'react'

export default function RevealObserver() {
  useEffect(() => {
    const doc = document.documentElement
    if (typeof IntersectionObserver === 'undefined' || !doc) return undefined

    const els = new Set()
    let io = null

    const inView = (el) => {
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight || doc.clientHeight
      return r.top < vh && r.bottom > 0
    }

    const reveal = (el) => {
      el.classList.add('revealed')
      io.unobserve(el)
      els.delete(el)
    }

    const observe = () => {
      document.querySelectorAll('[data-reveal]').forEach((el) => {
        if (els.has(el)) return
        els.add(el)
        io.observe(el)
        if (inView(el)) reveal(el)
      })
    }

    const mo = new MutationObserver(() => observe())
    mo.observe(document.body, { childList: true, subtree: true })

    io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && reveal(e.target)),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    doc.classList.add('reveal-ready')
    observe()

    return () => {
      doc.classList.remove('reveal-ready')
      mo.disconnect()
      if (io) io.disconnect()
    }
  }, [])

  return null
}
