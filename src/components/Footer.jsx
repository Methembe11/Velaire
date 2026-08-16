import { Link } from 'react-router-dom'
import { footerLinks, paymentMethods } from '../data/nav'
import { SocialIcon, LocatorIcon } from './Icons'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) setSubscribed(true)
  }

  return (
    <footer className="site-footer">
      <div className="footer-newsletter">
        <div className="footer-newsletter-inner">
          <h3 className="footer-newsletter-title">Join the VELAIRE Circle</h3>
          <p className="footer-newsletter-text">
            Early access to new collections, private invitations and limited editions.
          </p>
          {subscribed ? (
            <p className="newsletter-success">Thank you for subscribing.</p>
          ) : (
            <form className="newsletter-form" onSubmit={onSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
              />
              <button type="submit">Sign Up</button>
            </form>
          )}
          <p className="footer-newsletter-note">By subscribing you agree to the VELAIRE Privacy Policy.</p>
        </div>
      </div>

      <div className="footer-columns">
        {Object.entries(footerLinks)
          .filter(([title]) => title !== 'Social')
          .map(([title, links]) => (
            <div key={title} className="footer-column">
              <h4>{title}</h4>
              <ul>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        <div className="footer-column footer-store">
          <h4>Store Locator</h4>
          <ul>
            <li>
              <Link to="/boutiques">
                <LocatorIcon /> Find a Boutique
              </Link>
            </li>
          </ul>
          <h4>Social</h4>
          <div className="footer-social">
            {footerLinks.Social.map((s) => (
              <Link key={s.label} to={s.to} aria-label={s.label} className="social-link">
                <SocialIcon name={s.label.toLowerCase()} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-payments">
          {paymentMethods.map((m) => (
            <span key={m} className="payment-method">
              {m}
            </span>
          ))}
        </div>
        <div className="footer-bottom-row">
          <span className="footer-copyright">© VELAIRE S.p.A.</span>
          <div className="footer-legal">
            <Link to="/contact">Privacy Policy</Link>
            <Link to="/contact">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
