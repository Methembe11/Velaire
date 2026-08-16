import SimplePage from './SimplePage'
import { Link } from 'react-router-dom'

export default function AccountPage() {
  return (
    <SimplePage title="My Account">
      <div className="account-grid">
        <div className="account-card">
          <h3>Login</h3>
          <form
            className="account-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input type="email" placeholder="Email address" required />
            <input type="password" placeholder="Password" required />
            <button type="submit" className="btn btn-dark btn-block">
              Sign In
            </button>
          </form>
          <Link to="/account" className="text-link">
            Forgot your password?
          </Link>
        </div>
        <div className="account-card">
          <h3>Create an Account</h3>
          <p className="muted-text">
            Register for a personal VELAIRE experience, faster checkout and exclusive services.
          </p>
          <Link to="/account" className="btn btn-outline btn-block">
            Register
          </Link>
        </div>
      </div>
    </SimplePage>
  )
}
