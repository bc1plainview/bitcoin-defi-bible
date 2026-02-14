// ═══════════════════════════════════════════════════════════════════════════
// BITCOIN DEFI BIBLE - DATA VISUALIZATIONS
// Charts and diagrams with accurate DeFi data
// Premium visual design with SVG icons, glow effects, and animations
// ═══════════════════════════════════════════════════════════════════════════

// ─── Shared Utilities ─────────────────────────────────────────────────────

// Inject CSS keyframes once
let stylesInjected = false
function injectStyles() {
  if (stylesInjected || typeof document === 'undefined') return
  stylesInjected = true
  const style = document.createElement('style')
  style.textContent = `
    @keyframes dbib-glow-pulse {
      0%, 100% { opacity: 0.5; }
      50% { opacity: 1; }
    }
    @keyframes dbib-bar-grow {
      from { transform: scaleY(0); }
      to { transform: scaleY(1); }
    }
    @keyframes dbib-fade-up {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes dbib-dot-ring {
      0% { transform: scale(1); opacity: 0.6; }
      100% { transform: scale(2.5); opacity: 0; }
    }
    .dbib-card { transition: transform 0.2s ease, box-shadow 0.2s ease; }
    .dbib-card:hover { transform: translateY(-2px); }
  `
  document.head.appendChild(style)
}

// SVG Icon component - crisp vector icons replacing emojis
const Icon = ({ name, size = 28, color = 'currentColor' }) => {
  const icons = {
    lock: <><rect x="5" y="11" width="14" height="11" rx="2" fill="none" stroke={color} strokeWidth="2"/><path d="M8 11V7a4 4 0 118 0v4" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"/></>,
    check: <><circle cx="12" cy="12" r="10" fill="none" stroke={color} strokeWidth="2"/><path d="M8 12l3 3 5-6" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></>,
    clock: <><circle cx="12" cy="12" r="10" fill="none" stroke={color} strokeWidth="2"/><path d="M12 6v6l4 2" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></>,
    pen: <><path d="M17 3a2.83 2.83 0 114 4L7.5 20.5 2 22l1.5-5.5z" fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round"/></>,
    building: <><path d="M3 21h18M5 21V7l8-4v18M13 21V3l6 3v15" fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round"/><line x1="9" y1="10" x2="9" y2="10.01" stroke={color} strokeWidth="2.5" strokeLinecap="round"/><line x1="9" y1="14" x2="9" y2="14.01" stroke={color} strokeWidth="2.5" strokeLinecap="round"/><line x1="16" y1="10" x2="16" y2="10.01" stroke={color} strokeWidth="2.5" strokeLinecap="round"/><line x1="16" y1="14" x2="16" y2="14.01" stroke={color} strokeWidth="2.5" strokeLinecap="round"/></>,
    signal: <><path d="M5 12.55a11 11 0 0114.08 0M8.53 16.11a6 6 0 016.95 0" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="20" r="1.5" fill={color}/></>,
    inbox: <><path d="M12 3v12M8 11l4 4 4-4" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M20 16v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"/></>,
    coins: <><circle cx="9" cy="10" r="7" fill="none" stroke={color} strokeWidth="2"/><path d="M15.93 6.07A7 7 0 0122 13a7 7 0 01-7 7" fill="none" stroke={color} strokeWidth="2"/><path d="M9 7v6M7 10h4" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"/></>,
    refresh: <><path d="M21 2v6h-6" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 12a9 9 0 0115.36-6.36L21 8" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"/><path d="M3 22v-6h6" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 12a9 9 0 01-15.36 6.36L3 16" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"/></>,
    upload: <><path d="M12 19V5M5 12l7-7 7 7" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></>,
    seedling: <><path d="M12 22V12" stroke={color} strokeWidth="2" strokeLinecap="round"/><path d="M7 8c0-3 2-5 5-6 0 3-1 5-5 6z" fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round"/><path d="M17 8c0-3-2-5-5-6 0 3 1 5 5 6z" fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round"/></>,
    gift: <><rect x="3" y="8" width="18" height="4" rx="1" fill="none" stroke={color} strokeWidth="2"/><rect x="5" y="12" width="14" height="8" rx="1" fill="none" stroke={color} strokeWidth="2"/><line x1="12" y1="8" x2="12" y2="20" stroke={color} strokeWidth="2"/><path d="M12 8a4 4 0 00-4-4c-1.5 0-2 1.5 0 3s4 1 4 1zM12 8a4 4 0 014-4c1.5 0 2 1.5 0 3s-4 1-4 1z" fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round"/></>,
    zap: <><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round"/></>,
    hourglass: <><path d="M5 4h14M5 20h14" stroke={color} strokeWidth="2" strokeLinecap="round"/><path d="M7 4v3a5 5 0 005 5 5 5 0 005-5V4M7 20v-3a5 5 0 015-5 5 5 0 015 5v3" fill="none" stroke={color} strokeWidth="2"/></>,
    shield: <><path d="M12 2l8 4v5c0 5.25-3.5 10-8 11.25C7.5 21 4 16.25 4 11V6z" fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round"/></>,
    target: <><circle cx="12" cy="12" r="10" fill="none" stroke={color} strokeWidth="2"/><circle cx="12" cy="12" r="6" fill="none" stroke={color} strokeWidth="2"/><circle cx="12" cy="12" r="2" fill={color}/></>,
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ display: 'block', flexShrink: 0 }}>
      {icons[name]}
    </svg>
  )
}

// SVG Arrow connector
const FlowArrow = ({ direction = 'down', color = 'var(--text-muted)', size = 22, glow = false }) => {
  const glowFilter = glow ? { filter: `drop-shadow(0 0 4px ${color})` } : {}
  if (direction === 'down') return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '0.125rem 0', ...glowFilter }}>
      <svg width={size * 0.6} height={size} viewBox="0 0 14 24" fill="none">
        <path d="M7 2v17M2 15l5 5.5L12 15" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  )
  if (direction === 'right') return (
    <div style={{ display: 'flex', alignItems: 'center', ...glowFilter }}>
      <svg width={size} height={size * 0.6} viewBox="0 0 24 14" fill="none">
        <path d="M2 7h17M15 2l5.5 5L15 12" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  )
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '0.125rem 0', ...glowFilter }}>
      <svg width={size * 0.6} height={size} viewBox="0 0 14 24" fill="none">
        <path d="M7 2v20M2 6l5-4 5 4M2 18l5 4 5-4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  )
}

// Shared card wrapper
const ChartCard = ({ children, glow, style = {} }) => {
  injectStyles()
  return (
    <div style={{
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border-color)',
      borderRadius: '16px',
      padding: '1.5rem',
      margin: '1.5rem 0',
      boxShadow: glow || '0 4px 20px rgba(0,0,0,0.2)',
      ...style
    }}>
      {children}
    </div>
  )
}

const ChartTitle = ({ children, sub }) => (
  <div style={{ marginBottom: sub ? '0.25rem' : '1.25rem', textAlign: 'center' }}>
    <h4 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.05rem', fontWeight: 700, letterSpacing: '-0.01em' }}>
      {children}
    </h4>
    {sub && <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.35rem', marginBottom: '1.25rem' }}>{sub}</div>}
  </div>
)

// Step badge (numbered circle with glow)
const StepBadge = ({ num, color, icon }) => (
  <div style={{
    width: 52, height: 52,
    borderRadius: '50%',
    background: `linear-gradient(135deg, ${color}22 0%, ${color}11 100%)`,
    border: `2px solid ${color}`,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    boxShadow: `0 0 16px ${color}33`,
    margin: '0 auto 0.5rem'
  }}>
    {icon ? <Icon name={icon} size={24} color={color} /> :
      <span style={{ fontWeight: 800, color, fontSize: '1.1rem', fontFamily: 'var(--font-mono)' }}>{num}</span>}
  </div>
)

// ─── DeFi Summer 2020 TVL Growth Chart ────────────────────────────────────

export function DeFiSummerTVLChart() {
  const data = [
    { month: 'Jun', tvl: 1.0, label: '$1B' },
    { month: 'Jul', tvl: 2.5, label: '$2.5B' },
    { month: 'Aug', tvl: 6.5, label: '$6.5B' },
    { month: 'Sep', tvl: 9.5, label: '$9.5B' },
    { month: 'Oct', tvl: 11, label: '$11B' },
    { month: 'Nov', tvl: 13, label: '$13B' },
    { month: 'Dec', tvl: 15, label: '$15B' },
  ]

  const maxTVL = 15
  const chartHeight = 200

  return (
    <ChartCard glow="0 0 40px rgba(247, 147, 26, 0.08), 0 4px 20px rgba(0,0,0,0.3)">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h4 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.05rem', fontWeight: 700 }}>
          DeFi Summer 2020: TVL Explosion
        </h4>
        <a href="https://defillama.com/" target="_blank" rel="noopener noreferrer"
          style={{ fontSize: '0.65rem', color: 'var(--text-muted)', opacity: 0.7, textDecoration: 'none' }}>
          Source: DeFiLlama
        </a>
      </div>

      <div style={{
        display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around',
        height: chartHeight + 40, paddingTop: '10px',
        borderBottom: '1px solid var(--border-color)',
        paddingBottom: '0.5rem'
      }}>
        {data.map((d, i) => {
          const height = (d.tvl / maxTVL) * chartHeight
          const intensity = d.tvl / maxTVL
          return (
            <div key={d.month} style={{ textAlign: 'center', flex: 1 }}>
              <div style={{
                fontSize: '0.7rem', color: 'var(--btc-orange)', marginBottom: '8px',
                fontWeight: 700, fontFamily: 'var(--font-mono)', opacity: 0.6 + intensity * 0.4
              }}>
                {d.label}
              </div>
              <div style={{
                width: 40, height, margin: '0 auto',
                background: `linear-gradient(180deg, #f7931a 0%, #e8850f 60%, #c6700a 100%)`,
                borderRadius: '8px 8px 2px 2px',
                boxShadow: `0 0 ${8 + intensity * 16}px rgba(247, 147, 26, ${0.15 + intensity * 0.25})`,
                transformOrigin: 'bottom',
                animation: `dbib-bar-grow 0.6s ease-out ${i * 0.08}s both`
              }} />
            </div>
          )
        })}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '0.5rem' }}>
        {data.map((d) => (
          <div key={d.month + 'l'} style={{ flex: 1, textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-tertiary)', fontWeight: 500 }}>
            {d.month}
          </div>
        ))}
      </div>

      <div style={{
        marginTop: '1.25rem', padding: '0.875rem 1rem',
        background: 'linear-gradient(135deg, rgba(247, 147, 26, 0.08) 0%, var(--bg-tertiary) 100%)',
        borderRadius: '10px', border: '1px solid rgba(247, 147, 26, 0.15)',
        fontSize: '0.85rem', color: 'var(--text-secondary)'
      }}>
        <strong style={{ color: 'var(--btc-orange)' }}>+1,400% growth</strong> in 6 months.
        MasterChef forks drove the majority of this TVL explosion.
      </div>
    </ChartCard>
  )
}

// ─── Food Token Season Timeline ───────────────────────────────────────────

export function FoodTokenTimeline() {
  const events = [
    { date: 'Aug 11', token: 'YAM', event: 'Launches, hits $600M TVL in 24h', color: '#ef4444' },
    { date: 'Aug 28', token: 'SUSHI', event: 'SushiSwap launches MasterChef', color: '#f7931a' },
    { date: 'Sep 4', token: 'SUSHI', event: '$1B+ migrates from Uniswap', color: '#f7931a' },
    { date: 'Sep 5', token: 'KIMCHI', event: 'Claims $500M TVL in hours', color: '#f97316' },
    { date: 'Sep 10', token: 'PICKLE', event: 'Pickle Finance launches', color: '#22c55e' },
    { date: 'Sep 17', token: 'UNI', event: 'Uniswap airdrops UNI — $1,200 free per user', color: '#ec4899' },
    { date: 'Oct+', token: 'MANY', event: 'HOTDOG, PIZZA, BURGER, TACO... daily launches', color: '#78716c' },
  ]

  return (
    <ChartCard>
      <h4 style={{ margin: '0 0 1.5rem 0', color: 'var(--text-primary)', fontSize: '1.05rem', fontWeight: 700 }}>
        Food Token Season Timeline (Aug-Oct 2020)
      </h4>

      <div style={{ position: 'relative', paddingLeft: '60px' }}>
        {/* Timeline line with gradient */}
        <div style={{
          position: 'absolute', left: '53px', top: '4px', bottom: '4px', width: '2px',
          background: 'linear-gradient(180deg, #ef4444 0%, #f7931a 30%, #22c55e 60%, #78716c 100%)',
          borderRadius: '1px', opacity: 0.4
        }} />

        {events.map((e, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'flex-start', marginBottom: '1rem',
            position: 'relative', animation: `dbib-fade-up 0.4s ease ${i * 0.06}s both`
          }}>
            <div style={{
              position: 'absolute', left: '-60px', width: '44px',
              fontSize: '0.65rem', color: 'var(--text-muted)', textAlign: 'right',
              paddingTop: '5px', fontFamily: 'var(--font-mono)'
            }}>
              {e.date}
            </div>
            {/* Dot with glow ring */}
            <div style={{ position: 'absolute', left: '-10px', top: '4px', zIndex: 1 }}>
              <div style={{
                width: 12, height: 12, borderRadius: '50%', background: e.color,
                boxShadow: `0 0 8px ${e.color}66`,
                border: '2px solid var(--bg-secondary)'
              }} />
            </div>
            <div style={{
              marginLeft: '12px', flex: 1, padding: '0.5rem 0.75rem',
              background: 'var(--bg-tertiary)', borderRadius: '8px',
              borderLeft: `3px solid ${e.color}`,
              transition: 'background 0.2s'
            }}>
              <span style={{ fontWeight: 700, color: e.color, fontSize: '0.85rem' }}>
                ${e.token}
              </span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginLeft: '8px' }}>
                — {e.event}
              </span>
            </div>
          </div>
        ))}
      </div>
    </ChartCard>
  )
}

// ─── Chain Comparison Table ───────────────────────────────────────────────

export function ChainComparisonTable() {
  const rows = [
    { chain: 'Ethereum (2020-21)', block: '~13s', tvl: '$110B+', tvlLink: 'https://defillama.com/chain/Ethereum', season: 'Yes (12+ months)', seasonColor: 'var(--success)', highlight: false },
    { chain: 'Solana', block: '~0.4s', tvl: '$10B (Nov 2021)', tvlLink: 'https://defillama.com/chain/Solana', season: 'No — crashed 97%', seasonColor: 'var(--danger)', highlight: false },
    { chain: 'BSC', block: '~3s', tvl: '$22B (May 2021)', tvlLink: 'https://defillama.com/chain/BSC', season: 'Brief — collapsed in 60 days', seasonColor: 'var(--danger)', highlight: false },
    { chain: 'Base', block: '~2s', tvl: '~$3B', tvlLink: 'https://defillama.com/chain/Base', season: 'No — 90%+ memecoin', seasonColor: 'var(--danger)', highlight: false },
    { chain: 'Bitcoin (OP_NET)', block: '~10 min', tvl: 'Early stage', tvlLink: null, season: 'TBD — optimal exit friction', seasonColor: 'var(--btc-orange)', highlight: true },
  ]

  const thStyle = { textAlign: 'center', padding: '0.75rem 0.5rem', color: 'var(--text-tertiary)', fontWeight: 600, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }

  return (
    <ChartCard style={{ overflowX: 'auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
        <h4 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.05rem', fontWeight: 700 }}>
          Fast Chains vs Slow Chains
        </h4>
        <a href="https://defillama.com/chains" target="_blank" rel="noopener noreferrer"
          style={{ fontSize: '0.65rem', color: 'var(--text-muted)', opacity: 0.7, textDecoration: 'none' }}>
          Source: DeFiLlama
        </a>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem', margin: 0 }}>
        <thead>
          <tr style={{ borderBottom: '2px solid var(--border-color)' }}>
            <th style={{ ...thStyle, textAlign: 'left' }}>Chain</th>
            <th style={thStyle}>Block Time</th>
            <th style={thStyle}>Peak DeFi TVL</th>
            <th style={thStyle}>Sustained Season?</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r.chain} style={{
              borderBottom: i < rows.length - 1 ? '1px solid var(--border-subtle)' : 'none',
              background: r.highlight ? 'rgba(247, 147, 26, 0.04)' : 'transparent'
            }}>
              <td style={{
                padding: '0.875rem 0.5rem', fontWeight: r.highlight ? 700 : 400,
                color: r.highlight ? 'var(--btc-orange)' : 'var(--text-secondary)'
              }}>
                {r.chain}
              </td>
              <td style={{
                textAlign: 'center', padding: '0.875rem 0.5rem',
                color: r.highlight ? 'var(--btc-orange)' : 'var(--text-secondary)',
                fontWeight: r.highlight ? 700 : 400, fontFamily: 'var(--font-mono)', fontSize: '0.8rem'
              }}>
                {r.block}
              </td>
              <td style={{ textAlign: 'center', padding: '0.875rem 0.5rem' }}>
                {r.tvlLink ? (
                  <a href={r.tvlLink} target="_blank" rel="noopener noreferrer"
                    style={{ color: r.highlight ? 'var(--btc-orange)' : 'var(--text-secondary)', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
                    {r.tvl}
                  </a>
                ) : (
                  <span style={{ color: 'var(--text-muted)', fontStyle: 'italic', fontSize: '0.8rem' }}>{r.tvl}</span>
                )}
              </td>
              <td style={{
                textAlign: 'center', padding: '0.875rem 0.5rem',
                color: r.seasonColor, fontWeight: r.highlight ? 600 : 400, fontSize: '0.8rem'
              }}>
                {r.season}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{
        marginTop: '1.25rem', padding: '0.875rem 1rem',
        background: 'linear-gradient(135deg, rgba(247, 147, 26, 0.08) 0%, var(--bg-tertiary) 100%)',
        borderRadius: '10px', border: '1px solid rgba(247, 147, 26, 0.15)',
        fontSize: '0.8rem', color: 'var(--text-secondary)'
      }}>
        <strong style={{ color: 'var(--btc-orange)' }}>Pattern:</strong> Faster chains have higher exit velocity.
        When sentiment turns, everyone exits simultaneously. Bitcoin's 10-minute blocks create natural exit friction.
      </div>
    </ChartCard>
  )
}

// ─── NativeSwap vs PSBT Architecture ──────────────────────────────────────

export function NativeSwapArchitectureDiagram() {
  const boxStyle = (color) => ({
    background: 'var(--bg-tertiary)',
    border: `1px solid ${color}55`,
    borderRadius: '10px',
    padding: '0.625rem 1rem',
    fontSize: '0.8rem',
    color: 'var(--text-primary)',
    textAlign: 'center',
    width: '100%', maxWidth: '180px',
    boxShadow: `0 0 10px ${color}11`
  })

  return (
    <ChartCard>
      <ChartTitle>PSBT Marketplaces vs NativeSwap</ChartTitle>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        {/* PSBT Side */}
        <div style={{
          background: 'rgba(239, 68, 68, 0.04)',
          border: '1px solid rgba(239, 68, 68, 0.2)',
          borderRadius: '14px', padding: '1.25rem'
        }}>
          <div style={{
            textAlign: 'center', color: 'var(--danger)', fontWeight: 700,
            marginBottom: '1.25rem', fontSize: '0.8rem', letterSpacing: '0.08em'
          }}>
            PSBT MARKETPLACES
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.125rem' }}>
            <div style={boxStyle('var(--danger)')}>Seller signs partial tx</div>
            <FlowArrow color="var(--danger)" size={18} />
            <div style={{ ...boxStyle('var(--danger)'), borderStyle: 'dashed' }}>Centralized Server</div>
            <FlowArrow color="var(--danger)" size={18} />
            <div style={boxStyle('var(--danger)')}>Buyer completes tx</div>
            <FlowArrow color="var(--danger)" size={18} />
            <div style={boxStyle('var(--danger)')}>Server broadcasts</div>
          </div>
          <div style={{
            marginTop: '1rem', fontSize: '0.75rem', color: 'var(--danger)',
            textAlign: 'center', fontWeight: 600, opacity: 0.8
          }}>
            Trust required at every step
          </div>
        </div>

        {/* NativeSwap Side */}
        <div style={{
          background: 'rgba(247, 147, 26, 0.04)',
          border: '1px solid rgba(247, 147, 26, 0.2)',
          borderRadius: '14px', padding: '1.25rem',
          boxShadow: '0 0 24px rgba(247, 147, 26, 0.06)'
        }}>
          <div style={{
            textAlign: 'center', color: 'var(--btc-orange)', fontWeight: 700,
            marginBottom: '1.25rem', fontSize: '0.8rem', letterSpacing: '0.08em'
          }}>
            NATIVESWAP
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.125rem' }}>
            <div style={boxStyle('var(--btc-orange)')}>Price Oracle (k=T×B)</div>
            <FlowArrow color="var(--btc-orange)" size={18} glow />
            <div style={boxStyle('var(--btc-orange)')}>Seller Queue (FIFO)</div>
            <FlowArrow color="var(--btc-orange)" size={18} glow />
            <div style={boxStyle('var(--btc-orange)')}>Buyer Reservation</div>
            <FlowArrow color="var(--btc-orange)" size={18} glow />
            <div style={boxStyle('var(--btc-orange)')}>P2P Settlement</div>
          </div>
          <div style={{
            marginTop: '1rem', fontSize: '0.75rem', color: 'var(--btc-orange)',
            textAlign: 'center', fontWeight: 600
          }}>
            Contract verifies, never custodies
          </div>
        </div>
      </div>
    </ChartCard>
  )
}

// ─── MasterChef Fork Explosion ────────────────────────────────────────────

export function MasterChefForkExplosion() {
  const forks = [
    { name: 'SushiSwap', tvl: '$5B+', year: '2020', status: 'active' },
    { name: 'PancakeSwap', tvl: '$3B+', year: '2020', status: 'active' },
    { name: 'TraderJoe', tvl: '$500M+', year: '2021', status: 'active' },
    { name: 'SpookySwap', tvl: '$300M+', year: '2021', status: 'active' },
    { name: 'Curve (Gauges)', tvl: '$2B+', year: '2020', status: 'active' },
    { name: 'YAM', tvl: '$600M peak', year: '2020', status: 'dead' },
    { name: 'PICKLE', tvl: '$100M+', year: '2020', status: 'reduced' },
    { name: 'KIMCHI', tvl: '$500M claimed', year: '2020', status: 'dead' },
  ]

  const statusColors = { active: 'var(--success)', dead: 'var(--danger)', reduced: 'var(--text-muted)' }

  return (
    <ChartCard>
      <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--text-primary)', fontSize: '1.05rem', fontWeight: 700 }}>
        The MasterChef Fork Explosion
      </h4>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: '0 0 1.25rem 0' }}>
        ~200 lines of Solidity became the most forked code in DeFi history
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(165px, 1fr))', gap: '0.75rem' }}>
        {forks.map((f, i) => (
          <div key={i} className="dbib-card" style={{
            background: 'var(--bg-tertiary)',
            border: `1px solid ${statusColors[f.status]}${f.status === 'active' ? '55' : '33'}`,
            borderRadius: '10px', padding: '0.875rem',
            opacity: f.status === 'dead' ? 0.55 : 1,
            boxShadow: f.status === 'active' ? `0 0 12px ${statusColors[f.status]}11` : 'none',
            animation: `dbib-fade-up 0.3s ease ${i * 0.05}s both`
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{
                width: 8, height: 8, borderRadius: '50%',
                background: statusColors[f.status],
                boxShadow: f.status === 'active' ? `0 0 6px ${statusColors[f.status]}` : 'none',
                flexShrink: 0
              }} />
              <div style={{
                fontWeight: 700,
                color: f.status === 'active' ? 'var(--text-primary)' : 'var(--text-secondary)',
                fontSize: '0.85rem'
              }}>
                {f.name}
              </div>
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.35rem', paddingLeft: '1rem' }}>
              {f.tvl} · {f.year}
            </div>
          </div>
        ))}
        <div style={{
          background: 'var(--bg-tertiary)', border: '1px dashed var(--border-color)',
          borderRadius: '10px', padding: '0.875rem',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontStyle: 'italic' }}>
            + hundreds more...
          </span>
        </div>
      </div>

      <div style={{ marginTop: '1rem', display: 'flex', gap: '1.5rem', fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
        <span><span style={{ color: 'var(--success)' }}>●</span> Active</span>
        <span><span style={{ color: 'var(--danger)' }}>●</span> Dead</span>
        <span><span style={{ color: 'var(--text-muted)' }}>●</span> Reduced</span>
      </div>
    </ChartCard>
  )
}

// ─── Proof of HODL vs Babylon ─────────────────────────────────────────────

export function ProofOfHODLComparison() {
  const ListItem = ({ good, children }) => (
    <li style={{
      padding: '0.5rem 0', borderBottom: '1px solid var(--border-subtle)',
      color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem',
      fontSize: '0.85rem'
    }}>
      <div style={{
        width: 18, height: 18, borderRadius: '50%', flexShrink: 0,
        background: good ? 'rgba(34, 197, 94, 0.15)' : 'rgba(239, 68, 68, 0.15)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '0.7rem', color: good ? 'var(--success)' : 'var(--danger)', fontWeight: 800
      }}>
        {good ? '✓' : '✗'}
      </div>
      {children}
    </li>
  )

  return (
    <ChartCard>
      <ChartTitle>Proof of HODL vs Babylon</ChartTitle>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <div style={{
          background: 'rgba(239, 68, 68, 0.03)', border: '1px solid rgba(239, 68, 68, 0.2)',
          borderRadius: '14px', padding: '1.25rem'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <Icon name="lock" size={28} color="var(--danger)" />
            <div style={{ color: 'var(--danger)', fontWeight: 700, fontSize: '0.85rem', marginTop: '0.5rem', letterSpacing: '0.05em' }}>
              BABYLON ($5B+ Locked)
            </div>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['Time-locked up to 15 months', '7-day minimum unbonding', 'Delegation to validators', 'Slashing risk', '~1% APY in BABY tokens'].map((item, i) => (
              <ListItem key={i} good={false}>{item}</ListItem>
            ))}
          </ul>
        </div>

        <div style={{
          background: 'rgba(247, 147, 26, 0.03)', border: '1px solid rgba(247, 147, 26, 0.2)',
          borderRadius: '14px', padding: '1.25rem',
          boxShadow: '0 0 24px rgba(247, 147, 26, 0.06)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <Icon name="shield" size={28} color="var(--btc-orange)" />
            <div style={{ color: 'var(--btc-orange)', fontWeight: 700, fontSize: '0.85rem', marginTop: '0.5rem', letterSpacing: '0.05em' }}>
              PROOF OF HODL
            </div>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['Fully spendable at any time', 'No lock period whatsoever', 'No delegation required', 'No slashing risk', 'Variable APY in farm tokens'].map((item, i) => (
              <ListItem key={i} good={true}>{item}</ListItem>
            ))}
          </ul>
        </div>
      </div>

      <div style={{
        marginTop: '1.25rem', textAlign: 'center', fontSize: '0.85rem',
        color: 'var(--text-tertiary)', fontStyle: 'italic'
      }}>
        Your keys. Your coins. Your choice when to move them.
      </div>
    </ChartCard>
  )
}

// ─── MOTO Fee Flow Diagram ────────────────────────────────────────────────

export function MOTOFeeFlowDiagram() {
  const FeeSource = ({ title, lines }) => (
    <div style={{
      background: 'var(--bg-tertiary)', border: '1px solid rgba(247, 147, 26, 0.2)',
      borderRadius: '12px', padding: '1rem 1.25rem', textAlign: 'center',
      minWidth: '160px', flex: '1 1 160px'
    }}>
      <div style={{ fontWeight: 700, color: 'var(--btc-orange)', fontSize: '0.9rem' }}>{title}</div>
      {lines.map((l, i) => (
        <div key={i} style={{ fontSize: '0.75rem', color: l.color || 'var(--text-muted)', marginTop: '0.35rem' }}>
          {l.text}
        </div>
      ))}
    </div>
  )

  return (
    <ChartCard glow="0 0 30px rgba(247, 147, 26, 0.06), 0 4px 20px rgba(0,0,0,0.3)">
      <ChartTitle>How MOTO Stakers Earn From Every Trade</ChartTitle>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <FeeSource title="OP-20 Swaps" lines={[
            { text: '0.3% to LPs', color: 'var(--text-muted)' },
            { text: '0.2% to MOTO stakers', color: 'var(--success)' }
          ]} />
          <FeeSource title="NativeSwap" lines={[
            { text: '0.2% to MOTO stakers', color: 'var(--success)' }
          ]} />
        </div>

        <FlowArrow color="var(--btc-orange)" size={24} glow />

        <div style={{
          background: 'linear-gradient(135deg, rgba(247, 147, 26, 0.12) 0%, rgba(247, 147, 26, 0.05) 100%)',
          border: '2px solid var(--btc-orange)', borderRadius: '14px',
          padding: '1rem 2.5rem', textAlign: 'center',
          boxShadow: '0 0 24px rgba(247, 147, 26, 0.12)'
        }}>
          <div style={{ fontWeight: 700, color: 'var(--btc-orange)', fontSize: '1.05rem' }}>MOTO Staking Pool</div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
            Distributed proportionally to stakers
          </div>
        </div>

        <FlowArrow color="var(--success)" size={24} glow />

        <div style={{
          background: 'rgba(34, 197, 94, 0.08)', border: '1px solid rgba(34, 197, 94, 0.3)',
          borderRadius: '10px', padding: '0.75rem 1.5rem', textAlign: 'center'
        }}>
          <div style={{ color: 'var(--success)', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
            Your Share = Your Staked MOTO ÷ Total Staked MOTO
          </div>
        </div>
      </div>
    </ChartCard>
  )
}

// ─── OP_NET Architecture Diagram ──────────────────────────────────────────

export function OPNETArchitectureDiagram() {
  const Layer = ({ color, bg, icon, title, sub, detail, glow: glowAmt }) => (
    <div style={{
      background: bg, border: `2px solid ${color}`,
      borderRadius: '14px', padding: '1rem 1.5rem',
      textAlign: 'center', width: '100%', maxWidth: '340px',
      boxShadow: `0 0 ${glowAmt || 16}px ${color}22`
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
        <Icon name={icon} size={22} color={color} />
        <span style={{ fontWeight: 700, color, fontSize: '0.95rem' }}>{title}</span>
      </div>
      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.35rem' }}>{sub}</div>
      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>{detail}</div>
    </div>
  )

  return (
    <ChartCard glow="0 0 30px rgba(247, 147, 26, 0.06), 0 4px 20px rgba(0,0,0,0.3)">
      <ChartTitle>OP_NET Architecture</ChartTitle>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
        <Layer color="var(--btc-orange)" bg="rgba(247, 147, 26, 0.06)"
          icon="shield" title="Bitcoin L1" sub="Data Availability Layer"
          detail="Contract calls embedded in transactions" glow={24} />
        <FlowArrow direction="both" color="var(--btc-orange)" size={20} />
        <Layer color="var(--defi-purple)" bg="rgba(139, 92, 246, 0.06)"
          icon="zap" title="OP_NET Nodes" sub="Execution Layer"
          detail="WASM smart contract runtime" />
        <FlowArrow direction="both" color="var(--defi-purple)" size={20} />
        <Layer color="var(--success)" bg="rgba(34, 197, 94, 0.06)"
          icon="check" title="State Consensus" sub="Deterministic State Root"
          detail="Anyone can verify by replaying Bitcoin blocks" />
      </div>

      <div style={{
        marginTop: '1.25rem', padding: '0.875rem 1rem',
        background: 'linear-gradient(135deg, rgba(247, 147, 26, 0.08) 0%, var(--bg-tertiary) 100%)',
        borderRadius: '10px', border: '1px solid rgba(247, 147, 26, 0.15)',
        fontSize: '0.8rem', color: 'var(--text-secondary)', textAlign: 'center'
      }}>
        <strong style={{ color: 'var(--btc-orange)' }}>Key insight:</strong> Bitcoin provides the data, OP_NET provides the compute.
        No bridges. No wrapped tokens. Pure L1.
      </div>
    </ChartCard>
  )
}

// ─── 50/50 Queue Mechanism ────────────────────────────────────────────────

export function FiftyFiftyMechanism() {
  return (
    <ChartCard>
      <ChartTitle>The 50/50 Queue Mechanism</ChartTitle>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
        {[
          { num: 1, icon: 'inbox', color: 'var(--btc-orange)', title: 'Step 1', desc: 'Seller joins queue with tokens', bg: 'rgba(247, 147, 26, 0.06)' },
          { num: 2, icon: 'zap', color: 'var(--defi-purple)', title: 'Step 2', desc: '50% impacts price immediately', bg: 'rgba(139, 92, 246, 0.06)' },
          { num: 3, icon: 'hourglass', color: 'var(--success)', title: 'Step 3', desc: '50% impacts when tokens start selling', bg: 'rgba(34, 197, 94, 0.06)' },
        ].map((s) => (
          <div key={s.num} style={{
            background: s.bg, border: `1px solid ${s.color}33`,
            borderRadius: '12px', padding: '1.25rem', textAlign: 'center'
          }}>
            <StepBadge icon={s.icon} color={s.color} />
            <div style={{ fontWeight: 700, color: s.color, fontSize: '0.85rem' }}>{s.title}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>{s.desc}</div>
          </div>
        ))}
      </div>

      <div style={{
        background: 'var(--bg-tertiary)', borderRadius: '12px', padding: '1rem',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap'
      }}>
        {[
          { val: '50%', label: 'Instant Impact', color: 'var(--btc-orange)' },
          { val: '+', label: '', color: 'var(--text-muted)' },
          { val: '50%', label: 'Delayed Impact', color: 'var(--defi-purple)' },
          { val: '=', label: '', color: 'var(--text-muted)' },
          { val: '100%', label: 'Gradual Price Discovery', color: 'var(--success)' },
        ].map((item, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: item.label ? '1.6rem' : '1.4rem', fontWeight: 700, color: item.color,
              fontFamily: item.label ? 'var(--font-mono)' : 'inherit',
              textShadow: item.label ? `0 0 16px ${item.color}44` : 'none'
            }}>
              {item.val}
            </div>
            {item.label && <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>{item.label}</div>}
          </div>
        ))}
      </div>

      <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-tertiary)', textAlign: 'center' }}>
        This prevents flash crashes from large sell orders hitting the market all at once.
      </div>
    </ChartCard>
  )
}

// ─── Two-Phase Commit Diagram ─────────────────────────────────────────────

export function TwoPhaseCommitDiagram() {
  return (
    <ChartCard>
      <ChartTitle>Two-Phase Commit: Price Protection</ChartTitle>

      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{
          flex: '1 1 200px', background: 'rgba(247, 147, 26, 0.06)',
          border: '2px solid var(--btc-orange)', borderRadius: '14px',
          padding: '1.5rem', textAlign: 'center',
          boxShadow: '0 0 20px rgba(247, 147, 26, 0.08)'
        }}>
          <StepBadge icon="lock" color="var(--btc-orange)" />
          <div style={{ fontWeight: 700, color: 'var(--btc-orange)', fontSize: '1rem', marginBottom: '0.5rem' }}>Phase 1: Reserve</div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Lock in your price quote</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Pay small reservation fee</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem', padding: '0 0.25rem' }}>
          <FlowArrow direction="right" color="var(--text-muted)" size={20} />
          <div style={{
            width: 52, height: 52, borderRadius: '50%', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)'
          }}>
            <Icon name="clock" size={24} color="var(--text-muted)" />
          </div>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Wait</div>
          <FlowArrow direction="right" color="var(--text-muted)" size={20} />
        </div>

        <div style={{
          flex: '1 1 200px', background: 'rgba(34, 197, 94, 0.06)',
          border: '2px solid var(--success)', borderRadius: '14px',
          padding: '1.5rem', textAlign: 'center',
          boxShadow: '0 0 20px rgba(34, 197, 94, 0.08)'
        }}>
          <StepBadge icon="check" color="var(--success)" />
          <div style={{ fontWeight: 700, color: 'var(--success)', fontSize: '1rem', marginBottom: '0.5rem' }}>Phase 2: Execute</div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Complete at locked price</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Even if market moved</div>
        </div>
      </div>

      <div style={{
        background: 'rgba(34, 197, 94, 0.06)', border: '1px solid rgba(34, 197, 94, 0.25)',
        borderRadius: '10px', padding: '0.75rem 1rem', fontSize: '0.85rem',
        color: 'var(--success)', textAlign: 'center'
      }}>
        <strong>Result:</strong> No slippage, no front-running, guaranteed execution price
      </div>
    </ChartCard>
  )
}

// ─── Yield Farming Cycle Diagram ──────────────────────────────────────────

export function YieldFarmingCycleDiagram() {
  const steps = [
    { icon: 'inbox', label: 'STAKE', color: 'var(--btc-orange)', desc: 'Deposit LP tokens or BTC' },
    { icon: 'coins', label: 'EARN', color: 'var(--success)', desc: 'Accumulate rewards per block' },
    { icon: 'refresh', label: 'COMPOUND', color: 'var(--defi-purple)', desc: 'Reinvest for exponential growth' },
    { icon: 'upload', label: 'EXIT', color: 'var(--defi-pink)', desc: 'Withdraw before emissions end' },
  ]

  return (
    <ChartCard>
      <ChartTitle>The Yield Farming Cycle</ChartTitle>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
        {steps.map((step, i, arr) => (
          <div key={step.label} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{
              background: `linear-gradient(135deg, ${step.color}15 0%, ${step.color}08 100%)`,
              border: `2px solid ${step.color}44`,
              borderRadius: '50%', width: 84, height: 84,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              boxShadow: `0 0 16px ${step.color}22`,
              transition: 'box-shadow 0.2s, transform 0.2s'
            }}>
              <Icon name={step.icon} size={24} color={step.color} />
              <div style={{ fontSize: '0.6rem', color: step.color, fontWeight: 700, marginTop: '0.2rem', letterSpacing: '0.05em' }}>
                {step.label}
              </div>
            </div>
            {i < arr.length - 1 && <FlowArrow direction="right" color={step.color} size={18} />}
          </div>
        ))}
      </div>

      <div style={{ marginTop: '1.25rem', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
        {steps.map((step) => (
          <div key={step.label + 'd'} style={{ textAlign: 'center', fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
            {step.desc}
          </div>
        ))}
      </div>
    </ChartCard>
  )
}

// ─── Reward Flow Diagram ──────────────────────────────────────────────────

export function RewardFlowDiagram() {
  return (
    <ChartCard>
      <ChartTitle>How Rewards Flow to You</ChartTitle>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(247, 147, 26, 0.12) 0%, rgba(247, 147, 26, 0.05) 100%)',
          border: '2px solid var(--btc-orange)', borderRadius: '14px',
          padding: '1rem 2rem', textAlign: 'center', width: '100%', maxWidth: '300px',
          boxShadow: '0 0 20px rgba(247, 147, 26, 0.1)'
        }}>
          <div style={{ fontWeight: 700, color: 'var(--btc-orange)', fontSize: '1.1rem' }}>Total Emissions</div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>X tokens per block</div>
        </div>

        <FlowArrow color="var(--btc-orange)" size={22} glow />

        <div style={{ display: 'flex', gap: '0.75rem', width: '100%', justifyContent: 'center', flexWrap: 'wrap' }}>
          {[{ name: 'Pool A', weight: 40 }, { name: 'Pool B', weight: 35 }, { name: 'Pool C', weight: 25 }].map((pool) => (
            <div key={pool.name} style={{
              background: 'var(--bg-tertiary)', border: '1px solid rgba(139, 92, 246, 0.3)',
              borderRadius: '10px', padding: '0.75rem 1.25rem', textAlign: 'center',
              minWidth: '95px', boxShadow: '0 0 10px rgba(139, 92, 246, 0.08)'
            }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--defi-purple)', fontWeight: 600 }}>{pool.name}</div>
              <div style={{ fontSize: '1rem', color: 'var(--text-primary)', fontWeight: 700, fontFamily: 'var(--font-mono)', marginTop: '0.15rem' }}>{pool.weight}%</div>
              <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>weight</div>
            </div>
          ))}
        </div>

        <FlowArrow color="var(--defi-purple)" size={22} glow />

        <div style={{
          background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)',
          borderRadius: '12px', padding: '1rem', textAlign: 'center',
          width: '100%', maxWidth: '360px'
        }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Split by your share of pool TVL</div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.35rem', fontFamily: 'var(--font-mono)' }}>
            Your Stake ÷ Total Pool TVL = Your %
          </div>
        </div>

        <FlowArrow color="var(--success)" size={22} glow />

        <div style={{
          background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.12) 0%, rgba(34, 197, 94, 0.05) 100%)',
          border: '2px solid var(--success)', borderRadius: '14px',
          padding: '1rem 2rem', textAlign: 'center',
          boxShadow: '0 0 20px rgba(34, 197, 94, 0.1)'
        }}>
          <div style={{ fontWeight: 700, color: 'var(--success)', fontSize: '1.05rem' }}>Your Rewards</div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Claimable per block</div>
        </div>
      </div>
    </ChartCard>
  )
}

// ─── Entry Timing Diagram ─────────────────────────────────────────────────

export function EntryTimingDiagram() {
  const phases = [
    { name: 'Launch', color: '#f7931a', height: 90, label: 'FOMO Entry', desc: 'High risk, high reward' },
    { name: 'Bonus', color: '#22c55e', height: 100, label: 'OPTIMAL', desc: 'Best risk/reward', optimal: true },
    { name: 'Normal', color: '#8b5cf6', height: 60, label: 'OK Entry', desc: 'Diminishing returns' },
    { name: 'Late', color: '#ef4444', height: 25, label: 'POOR', desc: 'Scraps left' },
  ]

  return (
    <ChartCard>
      <ChartTitle>Entry Timing: When to Farm</ChartTitle>

      <div style={{
        display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around',
        height: '170px', borderBottom: '2px solid var(--border-color)',
        marginBottom: '1rem', paddingBottom: '0.5rem', position: 'relative'
      }}>
        {phases.map((p, i) => (
          <div key={p.name} style={{ textAlign: 'center', flex: 1, position: 'relative' }}>
            <div style={{
              fontSize: '0.65rem', color: p.color, fontWeight: 700,
              marginBottom: '6px', letterSpacing: '0.03em',
              textShadow: p.optimal ? `0 0 8px ${p.color}66` : 'none'
            }}>
              {p.label}
            </div>
            <div style={{
              height: p.height, width: '54px', margin: '0 auto',
              background: `linear-gradient(180deg, ${p.color} 0%, ${p.color}55 100%)`,
              borderRadius: '8px 8px 2px 2px',
              boxShadow: `0 0 ${p.optimal ? 20 : 8}px ${p.color}${p.optimal ? '44' : '22'}`,
              transformOrigin: 'bottom',
              animation: `dbib-bar-grow 0.5s ease-out ${i * 0.1}s both`
            }} />
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around', fontSize: '0.75rem' }}>
        {phases.map((p) => (
          <div key={p.name + 'l'} style={{ textAlign: 'center', flex: 1 }}>
            <div style={{ color: p.color, fontWeight: 600 }}>{p.name}</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.65rem' }}>{p.desc}</div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: '1.25rem', padding: '0.75rem 1rem',
        background: 'rgba(34, 197, 94, 0.06)', border: '1px solid rgba(34, 197, 94, 0.25)',
        borderRadius: '10px', fontSize: '0.8rem', color: 'var(--success)', textAlign: 'center'
      }}>
        <strong>Sweet spot:</strong> Enter during bonus period for maximum APY with established contracts
      </div>
    </ChartCard>
  )
}

// ─── LP vs Single-Sided Decision ──────────────────────────────────────────

export function LPvsSingleSidedDiagram() {
  const ProCon = ({ good, text }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
      <div style={{
        width: 16, height: 16, borderRadius: '50%', flexShrink: 0,
        background: good ? 'rgba(34, 197, 94, 0.15)' : 'rgba(239, 68, 68, 0.15)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '0.6rem', color: good ? 'var(--success)' : 'var(--danger)', fontWeight: 800
      }}>
        {good ? '✓' : '✗'}
      </div>
      <span style={{ color: good ? 'var(--success)' : 'var(--danger)' }}>{text}</span>
    </div>
  )

  return (
    <ChartCard>
      <ChartTitle>LP Staking vs Single-Sided: Decision Guide</ChartTitle>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
        <div style={{
          background: 'rgba(247, 147, 26, 0.03)', border: '1px solid rgba(247, 147, 26, 0.25)',
          borderRadius: '14px', padding: '1.25rem'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <Icon name="refresh" size={24} color="var(--btc-orange)" />
            <div style={{ color: 'var(--btc-orange)', fontWeight: 700, fontSize: '0.95rem', marginTop: '0.5rem' }}>LP STAKING</div>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <ProCon good text="Higher APY (2-3x typical)" />
            <ProCon good text="Earn trading fees + rewards" />
            <ProCon good={false} text="Impermanent loss risk" />
            <ProCon good={false} text="Requires 2 assets" />
          </div>
          <div style={{
            background: 'var(--bg-tertiary)', borderRadius: '8px', padding: '0.75rem',
            fontSize: '0.75rem', color: 'var(--text-secondary)', borderLeft: '3px solid var(--btc-orange)'
          }}>
            <strong>Best for:</strong> Bullish on both assets, want max yield
          </div>
        </div>

        <div style={{
          background: 'rgba(139, 92, 246, 0.03)', border: '1px solid rgba(139, 92, 246, 0.25)',
          borderRadius: '14px', padding: '1.25rem',
          boxShadow: '0 0 20px rgba(139, 92, 246, 0.06)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <Icon name="shield" size={24} color="var(--defi-purple)" />
            <div style={{ color: 'var(--defi-purple)', fontWeight: 700, fontSize: '0.95rem', marginTop: '0.5rem' }}>SINGLE-SIDED (Proof of HODL)</div>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <ProCon good text="No impermanent loss" />
            <ProCon good text="Keep 100% BTC exposure" />
            <ProCon good text="Fully spendable anytime" />
            <ProCon good={false} text="Lower APY (typically)" />
          </div>
          <div style={{
            background: 'var(--bg-tertiary)', borderRadius: '8px', padding: '0.75rem',
            fontSize: '0.75rem', color: 'var(--text-secondary)', borderLeft: '3px solid var(--defi-purple)'
          }}>
            <strong>Best for:</strong> BTC maxis, risk-averse, passive income
          </div>
        </div>
      </div>
    </ChartCard>
  )
}

// ─── Token Deployment Decision Diagram ────────────────────────────────────

export function TokenDeploymentDecisionDiagram() {
  return (
    <ChartCard>
      <ChartTitle>Token Deployment: Which Path?</ChartTitle>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(247, 147, 26, 0.1) 0%, var(--bg-tertiary) 100%)',
          border: '2px solid var(--btc-orange)', borderRadius: '14px',
          padding: '1rem 2rem', textAlign: 'center',
          boxShadow: '0 0 20px rgba(247, 147, 26, 0.1)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <Icon name="target" size={20} color="var(--btc-orange)" />
            <span style={{ fontWeight: 700, color: 'var(--btc-orange)', fontSize: '0.95rem' }}>What's your goal?</span>
          </div>
        </div>

        {/* Branch lines */}
        <svg width="200" height="30" viewBox="0 0 200 30" fill="none" style={{ display: 'block' }}>
          <path d="M100 0 L50 28" stroke="var(--defi-purple)" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
          <path d="M100 0 L150 28" stroke="var(--success)" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
        </svg>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1.5rem', width: '100%' }}>
          <div style={{
            background: 'rgba(139, 92, 246, 0.05)', border: '1px solid rgba(139, 92, 246, 0.25)',
            borderRadius: '14px', padding: '1.25rem', textAlign: 'center'
          }}>
            <StepBadge icon="seedling" color="var(--defi-purple)" />
            <div style={{ fontWeight: 700, color: 'var(--defi-purple)', marginBottom: '0.5rem', fontSize: '0.95rem' }}>Bootstrap Liquidity</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>Token + Yield Farm</div>
            <ul style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'left', paddingLeft: '1rem', margin: 0 }}>
              <li>Incentivize early LPs</li>
              <li>Build TVL fast</li>
              <li>Create trading momentum</li>
            </ul>
          </div>

          <div style={{
            background: 'rgba(34, 197, 94, 0.05)', border: '1px solid rgba(34, 197, 94, 0.25)',
            borderRadius: '14px', padding: '1.25rem', textAlign: 'center'
          }}>
            <StepBadge icon="gift" color="var(--success)" />
            <div style={{ fontWeight: 700, color: 'var(--success)', marginBottom: '0.5rem', fontSize: '0.95rem' }}>Community Token</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>Simple distribution</div>
            <ul style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'left', paddingLeft: '1rem', margin: 0 }}>
              <li>Free mint / airdrop</li>
              <li>Utility / governance</li>
              <li>No farming needed</li>
            </ul>
          </div>
        </div>
      </div>
    </ChartCard>
  )
}

// ─── PSBT Trading Flow Diagram ────────────────────────────────────────────

export function PSBTTradingFlowDiagram() {
  const steps = [
    { icon: 'pen', color: 'var(--btc-orange)', title: '1. Seller Signs', desc: 'Partial transaction:\n"Send tokens if I get X BTC"' },
    { icon: 'building', color: 'var(--danger)', title: '2. Marketplace', desc: 'Centralized server\nholds the PSBT' },
    { icon: 'pen', color: 'var(--defi-purple)', title: '3. Buyer Signs', desc: 'Completes tx\nwith BTC inputs' },
    { icon: 'signal', color: 'var(--danger)', title: '4. Broadcast', desc: 'Marketplace\nsubmits to chain' },
  ]

  return (
    <ChartCard>
      <ChartTitle>How PSBT Trading Works</ChartTitle>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        {steps.map((s, i, arr) => (
          <div key={s.title} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <div style={{
              background: 'var(--bg-tertiary)', border: `2px solid ${s.color}`,
              borderRadius: '12px', padding: '1rem', textAlign: 'center',
              flex: '1 1 140px', minWidth: '140px',
              boxShadow: `0 0 10px ${s.color}15`
            }}>
              <StepBadge icon={s.icon} color={s.color} />
              <div style={{ fontWeight: 700, color: s.color, fontSize: '0.8rem' }}>{s.title}</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.35rem', whiteSpace: 'pre-line' }}>
                {s.desc}
              </div>
            </div>
            {i < arr.length - 1 && <FlowArrow direction="right" color="var(--text-muted)" size={16} />}
          </div>
        ))}
      </div>

      <div style={{
        background: 'rgba(239, 68, 68, 0.06)', border: '1px solid rgba(239, 68, 68, 0.25)',
        borderRadius: '10px', padding: '0.75rem 1rem', fontSize: '0.8rem',
        color: 'var(--danger)', textAlign: 'center'
      }}>
        <strong>Problem:</strong> Trust required at every step. Centralized server controls order matching, can front-run, censor, or go offline.
      </div>
    </ChartCard>
  )
}

// ─── Bitcoin Mempool Visualization ────────────────────────────────────────

export function BitcoinMempoolVisualization() {
  const feeBands = [
    { range: '200+', size: 1.2, color: '#ef4444' },
    { range: '100-200', size: 2.8, color: '#f97316' },
    { range: '50-100', size: 5.4, color: '#eab308' },
    { range: '20-50', size: 8.1, color: '#f7931a' },
    { range: '10-20', size: 12.6, color: '#a16207' },
    { range: '5-10', size: 18.3, color: '#78716c' },
    { range: '1-5', size: 24.0, color: '#57534e' },
  ]

  const maxSize = 24
  const blocks = [
    { label: 'Next Block', fee: '~180 sat/vB', fill: 0.97 },
    { label: '+1 Block', fee: '~95 sat/vB', fill: 0.92 },
    { label: '+2 Block', fee: '~52 sat/vB', fill: 0.85 },
  ]

  return (
    <ChartCard glow="0 0 30px rgba(239, 68, 68, 0.05), 0 4px 20px rgba(0,0,0,0.3)">
      <ChartTitle sub="Unconfirmed transactions competing for limited block space">
        Bitcoin Mempool During High-Fee Periods
      </ChartTitle>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.25rem' }}>
        <div>
          <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.75rem', textAlign: 'center' }}>
            Mempool Depth by Fee Rate
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
            {feeBands.map((band, i) => {
              const width = (band.size / maxSize) * 100
              return (
                <div key={band.range} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{
                    width: '52px', fontSize: '0.65rem', color: 'var(--text-muted)',
                    textAlign: 'right', fontFamily: 'var(--font-mono)', flexShrink: 0
                  }}>
                    {band.range}
                  </div>
                  <div style={{ flex: 1, position: 'relative', height: '22px' }}>
                    <div style={{
                      position: 'absolute', left: 0, top: 0, height: '100%',
                      width: `${width}%`,
                      background: `linear-gradient(90deg, ${band.color} 0%, ${band.color}77 100%)`,
                      borderRadius: '0 6px 6px 0',
                      boxShadow: `0 0 8px ${band.color}33`,
                      display: 'flex', alignItems: 'center', paddingLeft: '6px',
                      animation: `dbib-bar-grow 0.4s ease-out ${i * 0.05}s both`,
                      transformOrigin: 'left'
                    }}>
                      <span style={{
                        fontSize: '0.6rem', color: '#fff', fontWeight: 600,
                        whiteSpace: 'nowrap', textShadow: '0 1px 3px rgba(0,0,0,0.6)'
                      }}>
                        {band.size} MB
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px', fontSize: '0.6rem', color: 'var(--text-muted)' }}>
            <span>sat/vB</span>
            <span>Transaction Volume</span>
          </div>
        </div>

        <div>
          <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.75rem', textAlign: 'center' }}>
            Block Queue
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {blocks.map((block, i) => (
              <div key={block.label} style={{
                background: 'var(--bg-tertiary)',
                border: `1px solid ${i === 0 ? 'var(--btc-orange)' : 'var(--border-color)'}`,
                borderRadius: '10px', padding: '0.625rem 0.75rem',
                position: 'relative', overflow: 'hidden',
                boxShadow: i === 0 ? '0 0 12px rgba(247, 147, 26, 0.1)' : 'none'
              }}>
                <div style={{
                  position: 'absolute', left: 0, top: 0, height: '100%',
                  width: `${block.fill * 100}%`,
                  background: i === 0 ? 'rgba(247, 147, 26, 0.06)' : 'rgba(120, 113, 108, 0.04)',
                  borderRight: `2px solid ${i === 0 ? 'rgba(247, 147, 26, 0.25)' : 'rgba(120, 113, 108, 0.12)'}`
                }} />
                <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 600, color: i === 0 ? 'var(--btc-orange)' : 'var(--text-secondary)' }}>
                      {block.label}
                    </div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                      Min fee: {block.fee}
                    </div>
                  </div>
                  <div style={{
                    fontSize: '0.75rem', fontFamily: 'var(--font-mono)',
                    color: i === 0 ? 'var(--btc-orange)' : 'var(--text-tertiary)', fontWeight: 600
                  }}>
                    {Math.round(block.fill * 100)}%
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '0.75rem',
            background: 'rgba(239, 68, 68, 0.06)', border: '1px solid rgba(239, 68, 68, 0.2)',
            borderRadius: '10px', padding: '0.625rem 0.75rem', textAlign: 'center'
          }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--danger)', fontFamily: 'var(--font-mono)' }}>
              72.4 MB unconfirmed
            </div>
            <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '2px' }}>
              ~72 blocks to clear at current rate
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '1.25rem' }}>
        {[
          { amount: '$82', label: 'Avg fee (fast)', color: '#ef4444' },
          { amount: '$34', label: 'Avg fee (standard)', color: '#f7931a' },
          { amount: '$9', label: 'Avg fee (economy)', color: '#78716c' },
        ].map((fee) => (
          <div key={fee.label} style={{
            background: `${fee.color}0A`, border: `1px solid ${fee.color}33`,
            borderRadius: '10px', padding: '0.75rem', textAlign: 'center'
          }}>
            <div style={{
              fontSize: '1.35rem', fontWeight: 700, color: fee.color,
              fontFamily: 'var(--font-mono)', textShadow: `0 0 12px ${fee.color}33`
            }}>
              {fee.amount}
            </div>
            <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>{fee.label}</div>
          </div>
        ))}
      </div>

      <div style={{
        padding: '0.875rem 1rem',
        background: 'linear-gradient(135deg, rgba(247, 147, 26, 0.08) 0%, var(--bg-tertiary) 100%)',
        borderRadius: '10px', border: '1px solid rgba(247, 147, 26, 0.15)',
        fontSize: '0.8rem', color: 'var(--text-secondary)', textAlign: 'center'
      }}>
        <strong style={{ color: 'var(--btc-orange)' }}>This is the fee wall.</strong> When 72 MB of transactions compete for 4 MB/hr of block space,
        fees spike and exiting DeFi positions becomes economically irrational.
      </div>
    </ChartCard>
  )
}

// ─── AMM Constant Product Curve (x*y=k) ──────────────────────────────────

export function AMMCurveDiagram() {
  // Generate points on the curve x*y=k where k=10000
  const k = 10000
  const points = []
  for (let x = 20; x <= 200; x += 2) {
    const y = k / x
    points.push({ x, y })
  }
  // SVG viewport
  const svgW = 300, svgH = 200
  const padL = 40, padB = 30, padT = 10, padR = 10
  const chartW = svgW - padL - padR
  const chartH = svgH - padT - padB
  const xMin = 20, xMax = 200, yMin = k / xMax, yMax = k / xMin

  const toSvgX = (x) => padL + ((x - xMin) / (xMax - xMin)) * chartW
  const toSvgY = (y) => padT + (1 - (y - yMin) / (yMax - yMin)) * chartH

  const pathD = points.map((p, i) =>
    `${i === 0 ? 'M' : 'L'}${toSvgX(p.x).toFixed(1)},${toSvgY(p.y).toFixed(1)}`
  ).join(' ')

  // Trade point: selling tokens moves along curve
  const tradeX1 = 80, tradeY1 = k / tradeX1
  const tradeX2 = 120, tradeY2 = k / tradeX2

  return (
    <ChartCard glow="0 0 30px rgba(139, 92, 246, 0.06), 0 4px 20px rgba(0,0,0,0.3)">
      <ChartTitle sub="The mathematical invariant behind every AMM trade">
        Constant Product Formula: x × y = k
      </ChartTitle>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
        <svg width={svgW} height={svgH} viewBox={`0 0 ${svgW} ${svgH}`} style={{ overflow: 'visible' }}>
          {/* Axes */}
          <line x1={padL} y1={padT} x2={padL} y2={svgH - padB} stroke="var(--border-color)" strokeWidth="1.5"/>
          <line x1={padL} y1={svgH - padB} x2={svgW - padR} y2={svgH - padB} stroke="var(--border-color)" strokeWidth="1.5"/>

          {/* Axis labels */}
          <text x={svgW / 2} y={svgH - 4} textAnchor="middle" fill="var(--text-muted)" fontSize="10" fontFamily="var(--font-mono)">Token Reserve (T)</text>
          <text x={12} y={svgH / 2 - 10} textAnchor="middle" fill="var(--text-muted)" fontSize="10" fontFamily="var(--font-mono)" transform={`rotate(-90, 12, ${svgH / 2 - 10})`}>BTC Reserve (B)</text>

          {/* Area under curve */}
          <path d={`${pathD} L${toSvgX(xMax).toFixed(1)},${(svgH - padB).toFixed(1)} L${toSvgX(xMin).toFixed(1)},${(svgH - padB).toFixed(1)} Z`}
            fill="url(#curveGrad)" opacity="0.3"/>

          {/* Curve */}
          <defs>
            <linearGradient id="curveGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0"/>
            </linearGradient>
          </defs>
          <path d={pathD} fill="none" stroke="#8b5cf6" strokeWidth="2.5" strokeLinecap="round"
            style={{ filter: 'drop-shadow(0 0 4px rgba(139, 92, 246, 0.4))' }}/>

          {/* Trade visualization */}
          <circle cx={toSvgX(tradeX1)} cy={toSvgY(tradeY1)} r="5" fill="#f7931a"
            style={{ filter: 'drop-shadow(0 0 4px rgba(247, 147, 26, 0.6))' }}/>
          <circle cx={toSvgX(tradeX2)} cy={toSvgY(tradeY2)} r="5" fill="#22c55e"
            style={{ filter: 'drop-shadow(0 0 4px rgba(34, 197, 94, 0.6))' }}/>

          {/* Arrow between trade points */}
          <path d={`M${toSvgX(tradeX1) + 6},${toSvgY(tradeY1) + 2} Q${(toSvgX(tradeX1) + toSvgX(tradeX2)) / 2},${toSvgY(tradeY1) + 25} ${toSvgX(tradeX2) - 4},${toSvgY(tradeY2) + 2}`}
            fill="none" stroke="var(--text-muted)" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#arrowhead)"/>
          <defs>
            <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="var(--text-muted)"/>
            </marker>
          </defs>

          {/* Labels */}
          <text x={toSvgX(tradeX1) - 4} y={toSvgY(tradeY1) - 10} textAnchor="middle" fill="#f7931a" fontSize="9" fontWeight="700">Before</text>
          <text x={toSvgX(tradeX2) + 4} y={toSvgY(tradeY2) - 10} textAnchor="middle" fill="#22c55e" fontSize="9" fontWeight="700">After</text>

          {/* k label */}
          <text x={toSvgX(160)} y={toSvgY(k / 160) - 12} textAnchor="middle" fill="#8b5cf6" fontSize="11" fontWeight="700" fontFamily="var(--font-mono)">k = T × B</text>
        </svg>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '1rem' }}>
        {[
          { label: 'Buy tokens', desc: 'Move left on curve → price goes up', color: 'var(--btc-orange)' },
          { label: 'Sell tokens', desc: 'Move right on curve → price goes down', color: 'var(--success)' },
          { label: 'k stays constant', desc: 'Product of reserves never changes', color: 'var(--defi-purple)' },
        ].map((item) => (
          <div key={item.label} style={{
            background: 'var(--bg-tertiary)', borderRadius: '10px', padding: '0.75rem',
            borderLeft: `3px solid ${item.color}`, textAlign: 'left'
          }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 600, color: item.color }}>{item.label}</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>{item.desc}</div>
          </div>
        ))}
      </div>

      <div style={{
        padding: '0.875rem 1rem',
        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, var(--bg-tertiary) 100%)',
        borderRadius: '10px', border: '1px solid rgba(139, 92, 246, 0.15)',
        fontSize: '0.8rem', color: 'var(--text-secondary)', textAlign: 'center'
      }}>
        <strong style={{ color: 'var(--defi-purple)' }}>Key insight:</strong> Larger pools have flatter curves near the center,
        meaning less slippage per trade. Liquidity depth = price stability.
      </div>
    </ChartCard>
  )
}

// ─── Impermanent Loss Visualization ───────────────────────────────────────

export function ImpermanentLossDiagram() {
  const priceChanges = [
    { change: '-75%', ilPct: '25.0', holdVal: '$62.50', lpVal: '$50.00' },
    { change: '-50%', ilPct: '5.7', holdVal: '$125.00', lpVal: '$117.16' },
    { change: '-25%', ilPct: '0.6', holdVal: '$187.50', lpVal: '$183.71' },
    { change: '0%', ilPct: '0.0', holdVal: '$250.00', lpVal: '$250.00' },
    { change: '+25%', ilPct: '0.2', holdVal: '$312.50', lpVal: '$309.02' },
    { change: '+50%', ilPct: '0.6', holdVal: '$375.00', lpVal: '$366.03' },
    { change: '+100%', ilPct: '2.0', holdVal: '$500.00', lpVal: '$482.84' },
    { change: '+200%', ilPct: '5.7', holdVal: '$750.00', lpVal: '$707.11' },
    { change: '+400%', ilPct: '13.4', holdVal: '$1,250.00', lpVal: '$1,118.03' },
  ]

  const maxIL = 25
  const barHeight = 100

  return (
    <ChartCard glow="0 0 30px rgba(239, 68, 68, 0.05), 0 4px 20px rgba(0,0,0,0.3)">
      <ChartTitle sub="How price divergence affects LP positions vs. simply holding">
        Impermanent Loss by Price Change
      </ChartTitle>

      {/* Bar chart */}
      <div style={{
        display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around',
        height: barHeight + 30, borderBottom: '1px solid var(--border-color)',
        paddingBottom: '0.5rem', marginBottom: '0.5rem'
      }}>
        {priceChanges.map((p, i) => {
          const h = (parseFloat(p.ilPct) / maxIL) * barHeight
          const intensity = parseFloat(p.ilPct) / maxIL
          const color = intensity > 0.3 ? '#ef4444' : intensity > 0.1 ? '#f97316' : intensity > 0 ? '#eab308' : 'var(--success)'
          return (
            <div key={p.change} style={{ textAlign: 'center', flex: 1 }}>
              <div style={{
                fontSize: '0.6rem', color, fontWeight: 700, marginBottom: '4px',
                fontFamily: 'var(--font-mono)', opacity: parseFloat(p.ilPct) === 0 ? 0.4 : 1
              }}>
                {p.ilPct}%
              </div>
              <div style={{
                height: Math.max(h, 2), width: '28px', margin: '0 auto',
                background: `linear-gradient(180deg, ${color} 0%, ${color}55 100%)`,
                borderRadius: '4px 4px 1px 1px',
                boxShadow: intensity > 0.1 ? `0 0 8px ${color}44` : 'none',
                transformOrigin: 'bottom',
                animation: `dbib-bar-grow 0.4s ease-out ${i * 0.05}s both`
              }} />
            </div>
          )
        })}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '1.25rem' }}>
        {priceChanges.map((p) => (
          <div key={p.change + 'l'} style={{
            flex: 1, textAlign: 'center', fontSize: '0.6rem',
            color: 'var(--text-muted)', fontFamily: 'var(--font-mono)'
          }}>
            {p.change}
          </div>
        ))}
      </div>

      {/* Key takeaways */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
        <div style={{
          background: 'rgba(234, 179, 8, 0.06)', border: '1px solid rgba(234, 179, 8, 0.2)',
          borderRadius: '10px', padding: '0.875rem', textAlign: 'center'
        }}>
          <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#eab308', fontFamily: 'var(--font-mono)' }}>5.7%</div>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>IL at 2x price change</div>
        </div>
        <div style={{
          background: 'rgba(239, 68, 68, 0.06)', border: '1px solid rgba(239, 68, 68, 0.2)',
          borderRadius: '10px', padding: '0.875rem', textAlign: 'center'
        }}>
          <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--danger)', fontFamily: 'var(--font-mono)' }}>25.0%</div>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>IL if token drops 75%</div>
        </div>
      </div>

      <div style={{
        padding: '0.875rem 1rem',
        background: 'linear-gradient(135deg, rgba(234, 179, 8, 0.08) 0%, var(--bg-tertiary) 100%)',
        borderRadius: '10px', border: '1px solid rgba(234, 179, 8, 0.15)',
        fontSize: '0.8rem', color: 'var(--text-secondary)', textAlign: 'center'
      }}>
        <strong style={{ color: '#eab308' }}>Remember:</strong> Trading fees earned can offset IL.
        If fees {'>'} IL, you still profit vs. holding. This is why high-volume pools matter.
      </div>
    </ChartCard>
  )
}

// ─── Token Supply Distribution ────────────────────────────────────────────

export function TokenSupplyDiagram() {
  const segments = [
    { label: 'Farm Emissions', pct: 70, color: '#f7931a', desc: 'Distributed to LPs over time' },
    { label: 'Pre-Mint (Team)', pct: 15, color: '#8b5cf6', desc: 'Initial allocation for development' },
    { label: 'Free Mint', pct: 10, color: '#22c55e', desc: 'Community-claimable tokens' },
    { label: 'Reserve', pct: 5, color: '#3b82f6', desc: 'Protocol treasury' },
  ]

  // Build donut chart with SVG
  const size = 180, cx = size / 2, cy = size / 2, r = 70, strokeW = 28
  let cumPct = 0

  return (
    <ChartCard>
      <ChartTitle sub="How a well-designed OP-20 token supply is allocated">
        Token Supply Distribution (Example)
      </ChartTitle>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
        {/* Donut chart */}
        <div style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
          <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
            {segments.map((seg) => {
              const dashArray = 2 * Math.PI * r
              const dashOffset = dashArray * (1 - seg.pct / 100)
              const rotation = cumPct * 3.6 - 90
              cumPct += seg.pct
              return (
                <circle key={seg.label} cx={cx} cy={cy} r={r} fill="none"
                  stroke={seg.color} strokeWidth={strokeW}
                  strokeDasharray={`${dashArray}`} strokeDashoffset={dashOffset}
                  transform={`rotate(${rotation} ${cx} ${cy})`}
                  style={{ filter: `drop-shadow(0 0 4px ${seg.color}44)` }}
                />
              )
            })}
          </svg>
          {/* Center label */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>100%</div>
            <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>Total Supply</div>
          </div>
        </div>

        {/* Legend */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
          {segments.map((seg) => (
            <div key={seg.label} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                width: 32, height: 32, borderRadius: '8px',
                background: `${seg.color}22`, border: `2px solid ${seg.color}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 800, color: seg.color, fontSize: '0.7rem',
                fontFamily: 'var(--font-mono)', flexShrink: 0
              }}>
                {seg.pct}%
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>{seg.label}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{seg.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        marginTop: '1.25rem', padding: '0.875rem 1rem',
        background: 'linear-gradient(135deg, rgba(247, 147, 26, 0.08) 0%, var(--bg-tertiary) 100%)',
        borderRadius: '10px', border: '1px solid rgba(247, 147, 26, 0.15)',
        fontSize: '0.8rem', color: 'var(--text-secondary)', textAlign: 'center'
      }}>
        <strong style={{ color: 'var(--btc-orange)' }}>Design principle:</strong> The majority of supply should flow to
        active participants (LPs, stakers), not insiders. Farm emissions = earned tokens.
      </div>
    </ChartCard>
  )
}

// ─── StableSwap vs Constant Product Curve Comparison ──────────────────────

export function StableSwapCurveDiagram() {
  const svgW = 300, svgH = 180
  const padL = 35, padB = 25, padT = 10, padR = 10
  const chartW = svgW - padL - padR
  const chartH = svgH - padT - padB

  // Constant product curve (standard AMM)
  const cpPoints = []
  for (let x = 15; x <= 185; x += 2) {
    const y = 2500 / x
    cpPoints.push({ x, y })
  }

  // StableSwap curve (flatter near center, steeper at extremes)
  const ssPoints = []
  for (let x = 15; x <= 185; x += 2) {
    // Amplified invariant approximation
    const mid = 100
    const dist = Math.abs(x - mid) / 100
    const y = mid - (x - mid) * 0.15 + (dist > 0.5 ? Math.pow(dist - 0.5, 2) * 300 * Math.sign(mid - x) : 0)
    ssPoints.push({ x, y: Math.max(y, 10) })
  }

  const xMin = 15, xMax = 185, yMin = 10, yMax = 170
  const toSvgX = (x) => padL + ((x - xMin) / (xMax - xMin)) * chartW
  const toSvgY = (y) => padT + (1 - (y - yMin) / (yMax - yMin)) * chartH

  const cpPath = cpPoints.map((p, i) => `${i === 0 ? 'M' : 'L'}${toSvgX(p.x).toFixed(1)},${toSvgY(p.y).toFixed(1)}`).join(' ')
  const ssPath = ssPoints.map((p, i) => `${i === 0 ? 'M' : 'L'}${toSvgX(p.x).toFixed(1)},${toSvgY(p.y).toFixed(1)}`).join(' ')

  return (
    <ChartCard>
      <ChartTitle sub="How amplification reduces slippage near the peg">
        StableSwap vs Constant Product Curves
      </ChartTitle>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
        <svg width={svgW} height={svgH} viewBox={`0 0 ${svgW} ${svgH}`} style={{ overflow: 'visible' }}>
          {/* Axes */}
          <line x1={padL} y1={padT} x2={padL} y2={svgH - padB} stroke="var(--border-color)" strokeWidth="1.5"/>
          <line x1={padL} y1={svgH - padB} x2={svgW - padR} y2={svgH - padB} stroke="var(--border-color)" strokeWidth="1.5"/>

          {/* Peg zone highlight */}
          <rect x={toSvgX(70)} y={padT} width={toSvgX(130) - toSvgX(70)} height={chartH}
            fill="rgba(34, 197, 94, 0.05)" rx="4"/>
          <text x={(toSvgX(70) + toSvgX(130)) / 2} y={padT + 12} textAnchor="middle"
            fill="var(--success)" fontSize="8" fontWeight="600" opacity="0.6">Near Peg</text>

          {/* Constant product curve */}
          <path d={cpPath} fill="none" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="6 4" opacity="0.7"/>

          {/* StableSwap curve */}
          <path d={ssPath} fill="none" stroke="var(--btc-orange)" strokeWidth="2.5"
            style={{ filter: 'drop-shadow(0 0 4px rgba(247, 147, 26, 0.4))' }}/>

          {/* Legend */}
          <line x1={svgW - 130} y1={15} x2={svgW - 108} y2={15} stroke="#8b5cf6" strokeWidth="2" strokeDasharray="6 4" opacity="0.7"/>
          <text x={svgW - 104} y={18} fill="var(--text-muted)" fontSize="9">Constant Product</text>

          <line x1={svgW - 130} y1={30} x2={svgW - 108} y2={30} stroke="var(--btc-orange)" strokeWidth="2.5"/>
          <text x={svgW - 104} y={33} fill="var(--text-muted)" fontSize="9">StableSwap</text>

          {/* Axis labels */}
          <text x={svgW / 2} y={svgH - 4} textAnchor="middle" fill="var(--text-muted)" fontSize="9" fontFamily="var(--font-mono)">Token A Reserve</text>
          <text x={12} y={svgH / 2 - 10} textAnchor="middle" fill="var(--text-muted)" fontSize="9" fontFamily="var(--font-mono)"
            transform={`rotate(-90, 12, ${svgH / 2 - 10})`}>Token B Reserve</text>
        </svg>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
        <div style={{
          background: 'rgba(139, 92, 246, 0.06)', border: '1px solid rgba(139, 92, 246, 0.2)',
          borderRadius: '10px', padding: '0.875rem'
        }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--defi-purple)' }}>Constant Product (x×y=k)</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
            Equal slippage at every price point. Good for volatile pairs.
          </div>
        </div>
        <div style={{
          background: 'rgba(247, 147, 26, 0.06)', border: '1px solid rgba(247, 147, 26, 0.2)',
          borderRadius: '10px', padding: '0.875rem',
          boxShadow: '0 0 12px rgba(247, 147, 26, 0.06)'
        }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--btc-orange)' }}>StableSwap (Amplified)</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
            Near-zero slippage at peg. Ideal for stablecoin ↔ stablecoin swaps.
          </div>
        </div>
      </div>
    </ChartCard>
  )
}

// ─── Compounding Strategy Comparison ──────────────────────────────────────

export function CompoundingFlowDiagram() {
  return (
    <ChartCard>
      <ChartTitle sub="Transaction costs and complexity per compounding cycle">
        LP Compounding vs Single-Sided Compounding
      </ChartTitle>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        {/* LP Compounding */}
        <div style={{
          background: 'rgba(247, 147, 26, 0.03)', border: '1px solid rgba(247, 147, 26, 0.2)',
          borderRadius: '14px', padding: '1.25rem'
        }}>
          <div style={{ textAlign: 'center', color: 'var(--btc-orange)', fontWeight: 700, fontSize: '0.85rem', marginBottom: '1rem', letterSpacing: '0.05em' }}>
            LP COMPOUNDING
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.125rem' }}>
            {[
              { step: '1', label: 'Harvest rewards', icon: 'coins' },
              { step: '2', label: 'Swap 50% to paired token', icon: 'refresh' },
              { step: '3', label: 'Add liquidity (LP)', icon: 'inbox' },
              { step: '4', label: 'Stake new LP tokens', icon: 'lock' },
            ].map((s, i, arr) => (
              <div key={s.step}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  background: 'var(--bg-tertiary)', borderRadius: '8px',
                  padding: '0.5rem 0.75rem', width: '100%'
                }}>
                  <div style={{
                    width: 24, height: 24, borderRadius: '50%', flexShrink: 0,
                    background: 'rgba(247, 147, 26, 0.15)', border: '1px solid var(--btc-orange)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.65rem', fontWeight: 800, color: 'var(--btc-orange)',
                    fontFamily: 'var(--font-mono)'
                  }}>
                    {s.step}
                  </div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{s.label}</span>
                </div>
                {i < arr.length - 1 && <FlowArrow color="var(--btc-orange)" size={14} />}
              </div>
            ))}
          </div>
          <div style={{
            marginTop: '0.75rem', padding: '0.5rem', borderRadius: '8px',
            background: 'rgba(239, 68, 68, 0.06)', border: '1px solid rgba(239, 68, 68, 0.15)',
            textAlign: 'center', fontSize: '0.75rem', color: 'var(--danger)'
          }}>
            4 transactions per cycle
          </div>
        </div>

        {/* Single-Sided Compounding */}
        <div style={{
          background: 'rgba(139, 92, 246, 0.03)', border: '1px solid rgba(139, 92, 246, 0.2)',
          borderRadius: '14px', padding: '1.25rem',
          boxShadow: '0 0 20px rgba(139, 92, 246, 0.06)'
        }}>
          <div style={{ textAlign: 'center', color: 'var(--defi-purple)', fontWeight: 700, fontSize: '0.85rem', marginBottom: '1rem', letterSpacing: '0.05em' }}>
            SINGLE-SIDED (PROOF OF HODL)
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.125rem' }}>
            {[
              { step: '1', label: 'Harvest rewards', icon: 'coins' },
              { step: '2', label: 'Sell or hold rewards', icon: 'upload' },
            ].map((s, i, arr) => (
              <div key={s.step}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  background: 'var(--bg-tertiary)', borderRadius: '8px',
                  padding: '0.5rem 0.75rem', width: '100%'
                }}>
                  <div style={{
                    width: 24, height: 24, borderRadius: '50%', flexShrink: 0,
                    background: 'rgba(139, 92, 246, 0.15)', border: '1px solid var(--defi-purple)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.65rem', fontWeight: 800, color: 'var(--defi-purple)',
                    fontFamily: 'var(--font-mono)'
                  }}>
                    {s.step}
                  </div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{s.label}</span>
                </div>
                {i < arr.length - 1 && <FlowArrow color="var(--defi-purple)" size={14} />}
              </div>
            ))}
          </div>
          {/* Spacer to match heights */}
          <div style={{ height: '80px' }} />
          <div style={{
            marginTop: '0.75rem', padding: '0.5rem', borderRadius: '8px',
            background: 'rgba(34, 197, 94, 0.06)', border: '1px solid rgba(34, 197, 94, 0.15)',
            textAlign: 'center', fontSize: '0.75rem', color: 'var(--success)'
          }}>
            2 transactions per cycle
          </div>
        </div>
      </div>

      <div style={{
        marginTop: '1.25rem', padding: '0.875rem 1rem',
        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, var(--bg-tertiary) 100%)',
        borderRadius: '10px', border: '1px solid rgba(139, 92, 246, 0.15)',
        fontSize: '0.8rem', color: 'var(--text-secondary)', textAlign: 'center'
      }}>
        <strong style={{ color: 'var(--defi-purple)' }}>Fewer transactions = lower fees.</strong> On Bitcoin L1,
        each transaction costs a mining fee. Single-sided compounding cuts costs by 50%.
      </div>
    </ChartCard>
  )
}
