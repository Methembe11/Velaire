import SimplePage from './SimplePage'
import { useState } from 'react'

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  return (
    <SimplePage title="Customer Care">
      <div className="contact-grid">
        <div className="contact-col">
          <h3>Contact Us</h3>
          <p className="muted-text">
            Our Customer Care team is available Monday to Friday, 9:00 – 18:00 CET.
          </p>
          <ul className="contact-list">
            <li>Phone: +39 02 5502 5555</li>
            <li>Email: client.service.eu@velaire.com</li>
            <li>WhatsApp: +39 02 5502 5555</li>
          </ul>
        </div>
        <div className="contact-col">
          <h3>Send a Message</h3>
          {sent ? (
            <p className="newsletter-success">Thank you. We will reply within 48 hours.</p>
          ) : (
            <form
              className="account-form"
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
            >
              <input type="text" placeholder="First name" required />
              <input type="text" placeholder="Last name" required />
              <input type="email" placeholder="Email address" required />
              <textarea placeholder="Your message" rows="4" required />
              <button type="submit" className="btn btn-dark btn-block">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </SimplePage>
  )
}
