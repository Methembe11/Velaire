import { useState } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'

const benefits = [
  {
    title: 'Early collection access',
    text: 'See and reserve pieces before anyone else. First, always.',
  },
  {
    title: 'Private events',
    text: 'Invitations to exhibitions, ateliers and quiet launches.',
  },
  {
    title: 'Editorial releases',
    text: 'The Journal, and everything we publish, in your hands first.',
  },
  {
    title: 'Limited editions',
    text: 'Pieces made only for the Circle, never sold again.',
  },
]

export default function CirclePage() {
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)

  return (
    <div className="circle-page">
      <section className="category-hero">
        <img src="/assets/img/her/soft_bags.jpg" alt="The VELAIRE Circle" />
        <div className="category-hero-content">
          <p className="hero-eyebrow">Membership</p>
          <h1 className="category-hero-title">The VELAIRE Circle</h1>
        </div>
      </section>

      <div className="category-body">
        <Breadcrumbs current="The VELAIRE Circle" />
        <p className="category-editorial">
          A private circle for those who follow the house. Invitation first, always.
        </p>

        <div className="circle-benefits">
          {benefits.map((b, i) => (
            <div key={b.title} className="circle-benefit" data-reveal>
              <span className="circle-index">0{i + 1}</span>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </div>
          ))}
        </div>

        <section className="circle-join" data-reveal>
          {joined ? (
            <p className="circle-success">Welcome to the Circle.</p>
          ) : (
            <>
              <p className="section-eyebrow">The VELAIRE Circle</p>
              <h2 className="house-title">Request an invitation</h2>
              <form
                className="newsletter-form circle-form"
                onSubmit={(e) => {
                  e.preventDefault()
                  if (email.trim()) setJoined(true)
                }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                />
                <button type="submit">Request</button>
              </form>
            </>
          )}
        </section>
      </div>
    </div>
  )
}
