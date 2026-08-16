import Breadcrumbs from '../components/Breadcrumbs'

export default function SimplePage({ title, eyebrow = 'VELAIRE', children }) {
  return (
    <div className="simple-page">
      <div className="simple-page-header">
        <Breadcrumbs current={title} />
        <p className="hero-eyebrow">{eyebrow}</p>
        <h1 className="category-hero-title">{title}</h1>
      </div>
      <div className="simple-page-body">{children}</div>
    </div>
  )
}
