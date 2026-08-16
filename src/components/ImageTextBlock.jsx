import { Link } from 'react-router-dom'

export default function ImageTextBlock({
  src,
  eyebrow,
  title,
  text,
  cta,
  ctaTo,
  reverse = false,
}) {
  return (
    <section className={`image-text-block ${reverse ? 'reverse' : ''}`}>
      <div className="itb-media" data-reveal>
        <img src={src} alt={title} loading="lazy" decoding="async" />
      </div>
      <div className="itb-content" data-reveal style={{ transitionDelay: '120ms' }}>
        {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
        <h2 className="itb-title">{title}</h2>
        {text && <p className="itb-text">{text}</p>}
        {cta && (
          <Link to={ctaTo} className="btn btn-dark">
            {cta}
          </Link>
        )}
      </div>
    </section>
  )
}
