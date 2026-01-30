import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { docsContent } from '../content/docs'

export default function DocsPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const doc = docsContent[slug]

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Only if not typing in an input
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return

      if (e.key === 'ArrowLeft' && doc?.prev) {
        navigate(`/docs/${doc.prev.slug}`)
      } else if (e.key === 'ArrowRight' && doc?.next) {
        navigate(`/docs/${doc.next.slug}`)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [doc, navigate])

  if (!doc) {
    return (
      <div className="docs-content">
        <h1>Page Not Found</h1>
        <p>The documentation page you're looking for doesn't exist yet.</p>
        <Link to="/docs/introduction" className="btn btn-primary" style={{ marginTop: '1rem' }}>
          Go to Introduction
        </Link>
      </div>
    )
  }

  return (
    <article className="docs-content">
      <h1>{doc.title}</h1>
      {doc.content}

      {/* Navigation */}
      <nav className="docs-nav">
        {doc.prev ? (
          <Link to={`/docs/${doc.prev.slug}`} className="docs-nav-link prev">
            <div className="docs-nav-label">← Previous</div>
            <div className="docs-nav-title">{doc.prev.title}</div>
          </Link>
        ) : (
          <div />
        )}
        {doc.next && (
          <Link to={`/docs/${doc.next.slug}`} className="docs-nav-link next">
            <div className="docs-nav-label">Next →</div>
            <div className="docs-nav-title">{doc.next.title}</div>
          </Link>
        )}
      </nav>

      {/* Keyboard hint */}
      <div style={{
        textAlign: 'center',
        marginTop: '2rem',
        padding: '1rem',
        color: 'var(--text-muted)',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.75rem'
      }}>
        <kbd style={{
          padding: '0.25rem 0.5rem',
          background: 'var(--bg-tertiary)',
          borderRadius: '4px',
          border: '1px solid var(--border-color)'
        }}>←</kbd>
        {' / '}
        <kbd style={{
          padding: '0.25rem 0.5rem',
          background: 'var(--bg-tertiary)',
          borderRadius: '4px',
          border: '1px solid var(--border-color)'
        }}>→</kbd>
        {' to navigate'}
      </div>
    </article>
  )
}
