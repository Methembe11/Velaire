import { useState } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'

const denominations = ['€50', '€100', '€250', '€500', '€1,000']
const designs = [
  { id: 'classic', name: 'Classic Black', src: '/assets/img/bags_ess_re_woman_re/galleria.jpg' },
  { id: 'checkerboard', name: 'Checkerboard', src: '/assets/img/snodo/Checkerboard.jpg' },
  { id: 'vienna-red', name: 'Vienna Red', src: '/assets/img/snodo/Vienna_red.jpg' },
]

export default function GiftCardPage() {
  const [amount, setAmount] = useState('€250')
  const [design, setDesign] = useState('classic')
  const [to, setTo] = useState('')
  const [from, setFrom] = useState('')
  const [message, setMessage] = useState('')
  const [ordered, setOrdered] = useState(false)

  const activeDesign = designs.find((d) => d.id === design)

  return (
    <div className="gift-card-page">
      <section className="category-hero">
        <img src="/assets/img/gifts/her.jpg" alt="Gift Card" />
        <div className="category-hero-content">
          <p className="hero-eyebrow">VELAIRE</p>
          <h1 className="category-hero-title">Gift Card</h1>
        </div>
      </section>

      <div className="category-body">
        <Breadcrumbs current="Gift Card" />
        <p className="gift-intro">
          The perfect present for every occasion. Redeemable online and in all VELAIRE boutiques.
        </p>

        <div className="gift-layout">
          <div className="gift-form">
            <div className="gift-step">
              <h3>1 · Choose an amount</h3>
              <div className="gift-amounts">
                {denominations.map((d) => (
                  <button
                    key={d}
                    type="button"
                    className={`gift-amount ${amount === d ? 'active' : ''}`}
                    onClick={() => setAmount(d)}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            <div className="gift-step">
              <h3>2 · Choose a design</h3>
              <div className="gift-designs">
                {designs.map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    className={`gift-design ${design === d.id ? 'active' : ''}`}
                    onClick={() => setDesign(d.id)}
                  >
                    <img src={d.src} alt={d.name} />
                    <span>{d.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="gift-step">
              <h3>3 · Personalise</h3>
              <form
                className="account-form"
                onSubmit={(e) => {
                  e.preventDefault()
                  setOrdered(true)
                }}
              >
                <input
                  type="text"
                  placeholder="Recipient's name"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Your name"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                />
                <textarea
                  placeholder="Your message"
                  rows="3"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                {ordered ? (
                  <p className="newsletter-success">
                    Gift card ordered and sent to {to || 'recipient'}.
                  </p>
                ) : (
                  <button type="submit" className="btn btn-dark btn-block">
                    Order Gift Card
                  </button>
                )}
              </form>
            </div>
          </div>

          <aside className="gift-preview">
            <div className="gift-card-visual">
              <img src={activeDesign.src} alt={activeDesign.name} />
              <span className="gift-card-amount">{amount}</span>
            </div>
            <p className="gift-card-detail">
              {to ? `To: ${to}` : 'To: ______'} {from ? `· From: ${from}` : '· From: ______'}
            </p>
            {message && <p className="gift-card-message">“{message}”</p>}
            <ul className="gift-terms">
              <li>Valid for 24 months from the date of issue</li>
              <li>Redeemable online and in boutiques</li>
              <li>Non-refundable, non-transferable</li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  )
}
