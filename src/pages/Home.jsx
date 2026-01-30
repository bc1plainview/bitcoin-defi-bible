import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-badge">
          <span className="pulse" />
          <span>Bitcoin DeFi is Live</span>
        </div>

        <h1 className="hero-title">THE BITCOIN DEFI BIBLE</h1>
        <p className="hero-subtitle">SlowFi Season Has Arrived</p>
        <p className="hero-tagline">
          Your guide to <code>OP_NET</code>, <code>Motoswap</code>, and native Bitcoin yield.
          DeFi Summer 2020 mechanics — now on Bitcoin L1.
        </p>

        <div className="hero-cta">
          <Link to="/docs/introduction" className="btn btn-primary">
            Start Reading
          </Link>
          <Link to="/docs/proof-of-hodl" className="btn btn-secondary">
            Proof of HODL
          </Link>
        </div>
      </section>

      <section className="features-section">
        <h2 style={{ textAlign: 'center', borderBottom: 'none', marginBottom: '2rem' }}>
          The DeFi Summer Playbook — Now on Bitcoin
        </h2>
        <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 2.5rem', color: 'var(--text-secondary)' }}>
          DeFi Summer happened on slow, expensive Ethereum. Fast chains failed to sustain DeFi seasons.
          Bitcoin's 10-minute blocks create the exit friction where protocols actually have time to grow.
        </p>

        <div className="card-grid">
          <div className="feature-card">
            <h3>Native Bitcoin</h3>
            <p>
              True DeFi on Bitcoin L1. No wrapped tokens. No bridges. Just pure, sovereign Bitcoin yield.
            </p>
          </div>

          <div className="feature-card">
            <h3>Proof of HODL</h3>
            <p>
              Earn yield on your BTC without locking it. Your Bitcoin stays in your wallet, spendable at any time.
            </p>
          </div>

          <div className="feature-card">
            <h3>NativeSwap</h3>
            <p>
              The first trustless Bitcoin trading system. Swap BTC for tokens with price protection.
            </p>
          </div>

          <div className="feature-card">
            <h3>MasterChef on Bitcoin</h3>
            <p>
              SushiSwap's MasterChef contracts — the engine of DeFi Summer 2020 — now on Bitcoin L1.
            </p>
          </div>
        </div>
      </section>

      <section style={{
        background: 'var(--bg-secondary)',
        padding: '3rem 2rem',
        borderTop: '1px solid var(--border-color)',
        borderBottom: '1px solid var(--border-color)'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', borderBottom: 'none', marginBottom: '2rem' }}>
            What You'll Learn
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem' }}>Core Concepts</h3>
              <ul style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)' }}>
                <li>Why slow chains beat fast chains for DeFi</li>
                <li>Exit friction and the reflexivity flywheel</li>
                <li>Proof of HODL: non-custodial BTC staking</li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem' }}>Strategies</h3>
              <ul style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)' }}>
                <li>Timing your yield farm entry</li>
                <li>LP vs single-sided staking</li>
                <li>When to exit and take profits</li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem' }}>Practical Guides</h3>
              <ul style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)' }}>
                <li>Setting up OP_WALLET</li>
                <li>Deploying your own tokens</li>
                <li>Creating yield farms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '3rem 2rem',
        textAlign: 'center'
      }}>
        <blockquote style={{
          fontSize: '1.1rem',
          color: 'var(--text-secondary)',
          borderLeft: '4px solid var(--btc-orange)',
          paddingLeft: '1.5rem',
          margin: '0 auto 2rem',
          textAlign: 'left',
          fontStyle: 'italic',
          maxWidth: '600px'
        }}>
          "DeFi Summer 2020 proved that reflexive games work on slow, expensive chains.
          Every fast chain since has failed to sustain a DeFi season. Bitcoin takes this to the extreme."
        </blockquote>
        <p style={{ color: 'var(--text-tertiary)', maxWidth: '550px', margin: '0 auto' }}>
          Bitcoin DeFi isn't DeFi on Bitcoin — it's <strong style={{ color: 'var(--btc-orange)' }}>Bitcoin's DeFi</strong>.
          Built different. Built to last.
        </p>
      </section>

      <section style={{
        padding: '3rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '500px',
          margin: '0 auto',
          padding: '2rem',
          background: 'var(--bg-secondary)',
          borderRadius: '16px',
          border: '1px solid var(--border-color)'
        }}>
          <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
            Ready to start?
          </p>
          <p style={{ color: 'var(--btc-orange)', marginBottom: '1.5rem', fontSize: '1.1rem', fontWeight: 600 }}>
            The infrastructure is live. The games are starting.
          </p>
          <Link to="/docs/introduction" className="btn btn-primary">
            Read the Guide
          </Link>
        </div>
      </section>

      <footer style={{
        padding: '2rem',
        textAlign: 'center',
        borderTop: '1px solid var(--border-color)',
        color: 'var(--text-muted)',
        fontSize: '0.85rem'
      }}>
        <p style={{ marginBottom: '0.5rem' }}>
          The Bitcoin DeFi Bible — Your guide to SlowFi on OP_NET
        </p>
        <p style={{ marginBottom: 0 }}>
          <a href="https://motoswap.org" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-tertiary)' }}>Motoswap</a>
          {' · '}
          <a href="https://opnet.org" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-tertiary)' }}>OP_NET</a>
          {' · '}
          <a href="https://docs.opnet.org" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-tertiary)' }}>Docs</a>
          {' · '}
          <a href="https://twitter.com/opnetbtc" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-tertiary)' }}>Twitter</a>
        </p>
      </footer>
    </div>
  )
}
