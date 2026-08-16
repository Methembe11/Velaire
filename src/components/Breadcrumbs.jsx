import { Link } from 'react-router-dom'

export default function Breadcrumbs({ items = [], current }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <Link to="/">Home</Link>
      {items.map((item) => (
        <span key={item.label}>
          <span className="crumb-sep">/</span>
          {item.to ? <Link to={item.to}>{item.label}</Link> : <span>{item.label}</span>}
        </span>
      ))}
      {current && (
        <span>
          <span className="crumb-sep">/</span>
          <span className="crumb-current">{current}</span>
        </span>
      )}
    </nav>
  )
}
