import { useState, useEffect } from 'react'
import { heroSlides } from '../data/homepage'

export default function HeroCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), 7000)
    return () => clearInterval(t)
  }, [])

  const enter = () => {
    document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero-cinema">
      <div className="hero-cinema-slides">
        {heroSlides.map((s, i) => (
          <div key={s.id} className={`hero-cinema-slide ${i === index ? 'active' : ''}`}>
            {s.type === 'video' ? (
              <video
                src={s.src}
                poster={s.poster}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden={i !== index}
              />
            ) : (
              <img src={s.src} alt="" aria-hidden={i !== index} />
            )}
          </div>
        ))}
      </div>

      <div className="hero-cinema-scrim" />

      <div className="hero-cinema-content">
        <p className="hero-cinema-eyebrow">The House of VELAIRE</p>
        <h1 className="hero-cinema-title">VELAIRE</h1>
        <p className="hero-cinema-tagline">A House of Modern Luxury</p>
        <button type="button" className="hero-cinema-enter" onClick={enter}>
          Enter
        </button>
      </div>
    </section>
  )
}
