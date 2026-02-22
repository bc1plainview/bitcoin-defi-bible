import { Outlet, Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { useLanguage, LANGUAGES } from '../context/LanguageContext'

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
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { language, toggleLanguage, t } = useLanguage()

  useEffect(() => {
    setSidebarOpen(false)
  }, [location])

  return (
    <>
      <div className="ambient-mesh" />
      <div className="grid-bg" />

      <div className="app">
        <header className="header">
          <div className="header-accent" aria-hidden="true" />

          <div className="header-inner">
            {/* Left: hamburger + logo */}
            <div className="header-left">
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
                <img src="/bitcoin-logo.svg" alt="Bitcoin" className="header-logo-icon" />
                <div className="header-logo-text">
                  <span className="header-brand">The Bitcoin DeFi Bible</span>
                  <span className="header-sub">by OP_NET</span>
                </div>
              </Link>
            </div>

            {/* Center: ecosystem links */}
            <nav className="header-nav">
              <a href="https://motoswap.org" target="_blank" rel="noopener noreferrer" className="header-nav-link">Motoswap</a>
              <a href="https://opnet.org" target="_blank" rel="noopener noreferrer" className="header-nav-link">OP_NET</a>
              <Link to="/docs/introduction" className={`header-nav-link ${location.pathname.startsWith('/docs') ? 'active' : ''}`}>
                {t('Docs', '文档')}
              </Link>
              <a href="https://opscan.org" target="_blank" rel="noopener noreferrer" className="header-nav-link">OPScan</a>
              <a href="https://optools.org" target="_blank" rel="noopener noreferrer" className="header-nav-link">OPTools</a>
              <a href="https://chromewebstore.google.com/detail/opwallet/pmbjpcmaaladnfpacpmhmnfmpklgbdjb?hl=en" target="_blank" rel="noopener noreferrer" className="header-nav-link header-nav-wallet">OP_WALLET</a>
            </nav>

            {/* Right: lang */}
            <div className="header-right">
              <button
                className="lang-toggle"
                onClick={toggleLanguage}
                aria-label="Toggle language"
              >
                {language === LANGUAGES.EN ? '中文' : 'EN'}
              </button>
            </div>
          </div>

          {/* Mobile nav strip */}
          <nav className="header-mobile-nav">
            <a href="https://motoswap.org" target="_blank" rel="noopener noreferrer" className="header-mobile-link">Motoswap</a>
            <a href="https://opnet.org" target="_blank" rel="noopener noreferrer" className="header-mobile-link">OP_NET</a>
            <Link to="/docs/introduction" className={`header-mobile-link ${location.pathname.startsWith('/docs') ? 'active' : ''}`}>
              {t('Docs', '文档')}
            </Link>
            <a href="https://opscan.org" target="_blank" rel="noopener noreferrer" className="header-mobile-link">OPScan</a>
            <a href="https://optools.org" target="_blank" rel="noopener noreferrer" className="header-mobile-link">OPTools</a>
            <a href="https://chromewebstore.google.com/detail/opwallet/pmbjpcmaaladnfpacpmhmnfmpklgbdjb?hl=en" target="_blank" rel="noopener noreferrer" className="header-mobile-link cta">OP_WALLET</a>
          </nav>
        </header>

        {!isHome && sidebarOpen && (
          <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />
        )}

        {!isHome && <Sidebar isOpen={sidebarOpen} />}

        <main
          className={`main-content ${isHome ? 'home-content' : ''}`}
          style={isHome ? { marginLeft: 0, maxWidth: '100%', padding: 0 } : {}}
        >
          <Outlet />
        </main>
      </div>
    </>
  )
}
