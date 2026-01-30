import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-badge">
          <span className="pulse" />
          <span>{t('Bitcoin DeFi is Live', '比特币 DeFi 已上线')}</span>
        </div>

        <h1 className="hero-title">{t('THE BITCOIN DEFI BIBLE', '比特币 DEFI 圣经')}</h1>
        <p className="hero-subtitle">{t('SlowFi Season Has Arrived', 'SlowFi 时代已经到来')}</p>
        <p className="hero-tagline">
          {t(
            <>Your guide to <code>OP_NET</code>, <code>Motoswap</code>, and native Bitcoin yield. DeFi Summer 2020 mechanics — now on Bitcoin L1.</>,
            <>您的 <code>OP_NET</code>、<code>Motoswap</code> 和原生比特币收益指南。2020 DeFi Summer 的机制——现在在比特币 L1 上。</>
          )}
        </p>

        <div className="hero-cta">
          <Link to="/docs/introduction" className="btn btn-primary">
            {t('Start Reading', '开始阅读')}
          </Link>
          <Link to="/docs/proof-of-hodl" className="btn btn-secondary">
            {t('Proof of HODL', '持有证明')}
          </Link>
        </div>
      </section>

      <section className="features-section">
        <h2 style={{ textAlign: 'center', borderBottom: 'none', marginBottom: '2rem' }}>
          {t('The DeFi Summer Playbook — Now on Bitcoin', 'DeFi Summer 攻略——现在在比特币上')}
        </h2>
        <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 2.5rem', color: 'var(--text-secondary)' }}>
          {t(
            'DeFi Summer happened on slow, expensive Ethereum. Fast chains failed to sustain DeFi seasons. Bitcoin\'s 10-minute blocks create the exit friction where protocols actually have time to grow.',
            'DeFi Summer 发生在缓慢、昂贵的以太坊上。快速链未能维持 DeFi 季节。比特币的 10 分钟区块创造了退出摩擦，让协议有时间成长。'
          )}
        </p>

        <div className="card-grid">
          <div className="feature-card">
            <h3>{t('Native Bitcoin', '原生比特币')}</h3>
            <p>
              {t(
                'True DeFi on Bitcoin L1. No wrapped tokens. No bridges. Just pure, sovereign Bitcoin yield.',
                '真正的比特币 L1 DeFi。没有包装代币。没有跨链桥。只有纯粹、主权的比特币收益。'
              )}
            </p>
          </div>

          <div className="feature-card">
            <h3>{t('Proof of HODL', '持有证明')}</h3>
            <p>
              {t(
                'Earn yield on your BTC without locking it. Your Bitcoin stays in your wallet, spendable at any time.',
                '无需锁定即可获得 BTC 收益。您的比特币保留在您的钱包中，随时可用。'
              )}
            </p>
          </div>

          <div className="feature-card">
            <h3>NativeSwap</h3>
            <p>
              {t(
                'The first trustless Bitcoin trading system. Swap BTC for tokens with price protection.',
                '第一个无信任比特币交易系统。以价格保护将 BTC 换成代币。'
              )}
            </p>
          </div>

          <div className="feature-card">
            <h3>{t('MasterChef on Bitcoin', '比特币上的 MasterChef')}</h3>
            <p>
              {t(
                "SushiSwap's MasterChef contracts — the engine of DeFi Summer 2020 — now on Bitcoin L1.",
                'SushiSwap 的 MasterChef 合约——2020 DeFi Summer 的引擎——现在在比特币 L1 上。'
              )}
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
            {t("What You'll Learn", '您将学到什么')}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem' }}>{t('Core Concepts', '核心概念')}</h3>
              <ul style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)' }}>
                <li>{t('Why slow chains beat fast chains for DeFi', '为什么慢链在 DeFi 上胜过快链')}</li>
                <li>{t('Exit friction and the reflexivity flywheel', '退出摩擦和反身性飞轮')}</li>
                <li>{t('Proof of HODL: non-custodial BTC staking', '持有证明：非托管 BTC 质押')}</li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem' }}>{t('Strategies', '策略')}</h3>
              <ul style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)' }}>
                <li>{t('Timing your yield farm entry', '把握收益农场入场时机')}</li>
                <li>{t('LP vs single-sided staking', 'LP 与单边质押')}</li>
                <li>{t('When to exit and take profits', '何时退出并获利')}</li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem' }}>{t('Practical Guides', '实用指南')}</h3>
              <ul style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)' }}>
                <li>{t('Setting up OP_WALLET', '设置 OP_WALLET')}</li>
                <li>{t('Deploying your own tokens', '部署您自己的代币')}</li>
                <li>{t('Creating yield farms', '创建收益农场')}</li>
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
          {t(
            '"DeFi Summer 2020 proved that reflexive games work on slow, expensive chains. Every fast chain since has failed to sustain a DeFi season. Bitcoin takes this to the extreme."',
            '"2020 年的 DeFi Summer 证明了反身性游戏在缓慢、昂贵的链上有效。此后每条快速链都未能维持 DeFi 季节。比特币将这一点发挥到了极致。"'
          )}
        </blockquote>
        <p style={{ color: 'var(--text-tertiary)', maxWidth: '550px', margin: '0 auto' }}>
          {t(
            <>Bitcoin DeFi isn't DeFi on Bitcoin — it's <strong style={{ color: 'var(--btc-orange)' }}>Bitcoin's DeFi</strong>. Built different. Built to last.</>,
            <>比特币 DeFi 不是比特币上的 DeFi——它是<strong style={{ color: 'var(--btc-orange)' }}>比特币的 DeFi</strong>。与众不同。经久耐用。</>
          )}
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
            {t('Ready to start?', '准备好开始了吗？')}
          </p>
          <p style={{ color: 'var(--btc-orange)', marginBottom: '1.5rem', fontSize: '1.1rem', fontWeight: 600 }}>
            {t('The infrastructure is live. The games are starting.', '基础设施已上线。游戏正在开始。')}
          </p>
          <Link to="/docs/introduction" className="btn btn-primary">
            {t('Read the Guide', '阅读指南')}
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
          {t('The Bitcoin DeFi Bible — Your guide to SlowFi on OP_NET', '比特币 DeFi 圣经——您的 OP_NET SlowFi 指南')}
        </p>
        <p style={{ marginBottom: 0 }}>
          <a href="https://motoswap.org" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-tertiary)' }}>Motoswap</a>
          {' · '}
          <a href="https://opnet.org" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-tertiary)' }}>OP_NET</a>
          {' · '}
          <a href="https://docs.opnet.org" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-tertiary)' }}>{t('Docs', '文档')}</a>
          {' · '}
          <a href="https://twitter.com/opnetbtc" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-tertiary)' }}>Twitter</a>
        </p>
      </footer>
    </div>
  )
}
