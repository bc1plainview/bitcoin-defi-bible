import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { docsContent } from '../content/docs'
import { docsContentZh } from '../content/docs.zh'
import { useLanguage, LANGUAGES } from '../context/LanguageContext'

export default function DocsPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { language, t } = useLanguage()
  const content = language === LANGUAGES.ZH ? docsContentZh : docsContent
  const doc = content[slug]

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
        <h1>{t('Page Not Found', '页面未找到')}</h1>
        <p>{t("The documentation page you're looking for doesn't exist yet.", '您要查找的文档页面尚不存在。')}</p>
        <Link to="/docs/introduction" className="btn btn-primary" style={{ marginTop: '1rem' }}>
          {t('Go to Introduction', '前往简介')}
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
            <div className="docs-nav-label">{t('← Previous', '← 上一篇')}</div>
            <div className="docs-nav-title">{doc.prev.title}</div>
          </Link>
        ) : (
          <div />
        )}
        {doc.next && (
          <Link to={`/docs/${doc.next.slug}`} className="docs-nav-link next">
            <div className="docs-nav-label">{t('Next →', '下一篇 →')}</div>
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
        {t(' to navigate', ' 导航')}
      </div>
    </article>
  )
}
