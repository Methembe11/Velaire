import { Link, useParams, Navigate } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import { getArticle, articles } from '../data/journal'

export default function JournalArticlePage() {
  const { id } = useParams()
  const article = getArticle(id)
  if (!article) return <Navigate to="/404" replace />

  const idx = articles.findIndex((a) => a.id === article.id)
  const next = articles[(idx + 1) % articles.length]

  return (
    <div className="article-page">
      <section className="category-hero">
        <img src={article.src} alt={article.title} />
        <div className="category-hero-content">
          <p className="hero-eyebrow">{article.category}</p>
          <h1 className="category-hero-title">{article.title}</h1>
        </div>
      </section>

      <div className="category-body">
        <Breadcrumbs current={article.title} />
        <p className="article-meta">
          {article.date} · The Journal of VELAIRE
        </p>
        <div className="article-body">
          {article.body.map((p, i) => (
            <p key={i} className="article-para">
              {p}
            </p>
          ))}
        </div>
        <div className="article-nav">
          <Link to="/journal" className="btn btn-outline">
            Back to the Journal
          </Link>
          <Link to={`/journal/${next.id}`} className="btn btn-dark">
            Next Story
          </Link>
        </div>
      </div>
    </div>
  )
}
