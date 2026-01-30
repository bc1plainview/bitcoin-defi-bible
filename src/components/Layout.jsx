import { Outlet, Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Sidebar from './Sidebar'

// External link icon
const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

// Hamburger menu icon
const MenuIcon = ({ isOpen }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="menu-icon">
    {isOpen ? (
      <>
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </>
    ) : (
      <>
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </>
    )}
  </svg>
)

export default function Layout() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [scrollProgress, setScrollProgress] = useState(0)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Close sidebar on route change
  useEffect(() => {
    setSidebarOpen(false)
  }, [location])

  // Reading progress tracker
  useEffect(() => {
    if (isHome) return

    const handleScroll = () => {
      const winHeight = window.innerHeight
      const docHeight = document.documentElement.scrollHeight - winHeight
      const scrolled = window.scrollY
      const progress = (scrolled / docHeight) * 100
      setScrollProgress(Math.min(100, Math.max(0, progress)))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHome, location])

  return (
    <div className="app">
      <header className="header">
        {!isHome && (
          <button
            className="mobile-menu-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle menu"
          >
            <MenuIcon isOpen={sidebarOpen} />
          </button>
        )}

        <Link to="/" className="header-logo">
          <img src="/bitcoin-logo.svg" alt="Bitcoin" />
          <div className="logo-text">
            <span className="logo-main">THE BITCOIN DEFI BIBLE</span>
            <span className="logo-sub">SLOWFI ON OP_NET</span>
          </div>
        </Link>

        <div className="header-center">
          <div className="header-badge">
            <img src="/opnet-logo.svg" alt="OP_NET" style={{ height: '16px' }} />
            <span>POWERED BY</span>
          </div>
        </div>

        <nav className="header-nav">
          <Link
            to="/docs/introduction"
            className={location.pathname.startsWith('/docs') ? 'active' : ''}
          >
            Documentation
          </Link>
          <span className="nav-divider" />
          <a
            href="https://motoswap.org"
            target="_blank"
            rel="noopener noreferrer"
            className="external-link"
          >
            Motoswap <ExternalIcon />
          </a>
          <a
            href="https://docs.opnet.org"
            target="_blank"
            rel="noopener noreferrer"
            className="external-link"
          >
            OP_NET Docs <ExternalIcon />
          </a>
          <a
            href="https://github.com/btc-vision"
            target="_blank"
            rel="noopener noreferrer"
            className="external-link"
          >
            GitHub <ExternalIcon />
          </a>
        </nav>
      </header>

      {/* Mobile sidebar overlay */}
      {!isHome && sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {!isHome && <Sidebar isOpen={sidebarOpen} />}

      {!isHome && (
        <div className="reading-progress">
          <div
            className="reading-progress-fill"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      )}

      <main
        className={`main-content ${isHome ? 'home-content' : ''}`}
        style={isHome ? { marginLeft: 0, maxWidth: '100%', padding: 0 } : {}}
      >
        <Outlet />
      </main>
    </div>
  )
}
