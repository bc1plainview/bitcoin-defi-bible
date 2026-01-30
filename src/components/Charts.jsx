// ═══════════════════════════════════════════════════════════════════════════
// BITCOIN DEFI BIBLE - DATA VISUALIZATIONS
// Charts and diagrams with accurate DeFi data
// ═══════════════════════════════════════════════════════════════════════════

// DeFi Summer 2020 TVL Growth Chart
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
  const chartHeight = 180

  return (
    <div style={{
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border-color)',
      borderRadius: '16px',
      padding: '1.5rem',
      margin: '1.5rem 0'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1.25rem'
      }}>
        <h4 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1rem', fontWeight: 600 }}>
          DeFi Summer 2020: TVL Explosion
        </h4>
        <a
          href="https://defillama.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}
        >
          Source: DeFiLlama
        </a>
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        height: chartHeight + 50,
        paddingTop: '20px'
      }}>
        {data.map((d) => {
          const height = (d.tvl / maxTVL) * chartHeight
          return (
            <div key={d.month} style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '0.7rem',
                color: 'var(--btc-orange)',
                marginBottom: '6px',
                fontWeight: 600
              }}>
                {d.label}
              </div>
              <div style={{
                width: 36,
                height: height,
                background: 'linear-gradient(180deg, var(--btc-orange) 0%, #e8850f 100%)',
                borderRadius: '6px 6px 0 0',
                transition: 'height 0.3s ease'
              }} />
              <div style={{
                fontSize: '0.75rem',
                color: 'var(--text-tertiary)',
                marginTop: '8px'
              }}>
                {d.month}
              </div>
            </div>
          )
        })}
      </div>

      <div style={{
        marginTop: '1.25rem',
        padding: '0.875rem 1rem',
        background: 'var(--bg-tertiary)',
        borderRadius: '8px',
        fontSize: '0.85rem',
        color: 'var(--text-secondary)'
      }}>
        <strong style={{ color: 'var(--btc-orange)' }}>+1,400% growth</strong> in 6 months.
        MasterChef forks drove the majority of this TVL explosion.
      </div>
    </div>
  )
}

// Food Token Season Timeline
export function FoodTokenTimeline() {
  const events = [
    { date: 'Aug 11', token: 'YAM', event: 'Launches, hits $600M TVL in 24h', color: '#ef4444' },
    { date: 'Aug 28', token: 'SUSHI', event: 'SushiSwap launches MasterChef', color: 'var(--btc-orange)' },
    { date: 'Sep 4', token: 'SUSHI', event: '$1B+ migrates from Uniswap', color: 'var(--btc-orange)' },
    { date: 'Sep 5', token: 'KIMCHI', event: 'Claims $500M TVL in hours', color: '#f97316' },
    { date: 'Sep 10', token: 'PICKLE', event: 'Pickle Finance launches', color: '#22c55e' },
    { date: 'Sep 17', token: 'UNI', event: 'Uniswap airdrops UNI — $1,200 free per user', color: '#ec4899' },
    { date: 'Oct+', token: 'MANY', event: 'HOTDOG, PIZZA, BURGER, TACO... daily launches', color: '#78716c' },
  ]

  return (
    <div style={{
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border-color)',
      borderRadius: '16px',
      padding: '1.5rem',
      margin: '1.5rem 0'
    }}>
      <h4 style={{ margin: '0 0 1.25rem 0', color: 'var(--text-primary)', fontSize: '1rem', fontWeight: 600 }}>
        Food Token Season Timeline (Aug-Oct 2020)
      </h4>

      <div style={{ position: 'relative' }}>
        <div style={{
          position: 'absolute',
          left: '52px',
          top: '0',
          bottom: '0',
          width: '2px',
          background: 'var(--border-color)'
        }} />

        {events.map((e, i) => (
          <div key={i} style={{
            display: 'flex',
            alignItems: 'flex-start',
            marginBottom: '0.875rem',
            position: 'relative'
          }}>
            <div style={{
              width: '44px',
              fontSize: '0.65rem',
              color: 'var(--text-muted)',
              textAlign: 'right',
              paddingRight: '8px',
              flexShrink: 0,
              paddingTop: '2px'
            }}>
              {e.date}
            </div>
            <div style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: e.color,
              flexShrink: 0,
              marginTop: '4px',
              zIndex: 1,
              border: '2px solid var(--bg-secondary)'
            }} />
            <div style={{ marginLeft: '12px', flex: 1 }}>
              <span style={{
                fontWeight: 700,
                color: e.color,
                fontSize: '0.85rem'
              }}>
                ${e.token}
              </span>
              <span style={{
                color: 'var(--text-secondary)',
                fontSize: '0.85rem',
                marginLeft: '8px'
              }}>
                — {e.event}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Chain Comparison Table
export function ChainComparisonTable() {
  return (
    <div style={{
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border-color)',
      borderRadius: '16px',
      padding: '1.5rem',
      margin: '1.5rem 0',
      overflowX: 'auto'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1rem'
      }}>
        <h4 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1rem', fontWeight: 600 }}>
          Fast Chains vs Slow Chains
        </h4>
        <a
          href="https://defillama.com/chains"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}
        >
          Source: DeFiLlama
        </a>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem', margin: 0 }}>
        <thead>
          <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
            <th style={{ textAlign: 'left', padding: '0.75rem', color: 'var(--text-tertiary)', fontWeight: 600, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Chain</th>
            <th style={{ textAlign: 'center', padding: '0.75rem', color: 'var(--text-tertiary)', fontWeight: 600, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Block Time</th>
            <th style={{ textAlign: 'center', padding: '0.75rem', color: 'var(--text-tertiary)', fontWeight: 600, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Peak DeFi TVL</th>
            <th style={{ textAlign: 'center', padding: '0.75rem', color: 'var(--text-tertiary)', fontWeight: 600, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Sustained Season?</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
            <td style={{ padding: '0.75rem', fontWeight: 600, color: 'var(--btc-orange)' }}>Ethereum (2020-21)</td>
            <td style={{ textAlign: 'center', padding: '0.75rem', color: 'var(--text-secondary)' }}>~13s</td>
            <td style={{ textAlign: 'center', padding: '0.75rem' }}>
              <a href="https://defillama.com/chain/Ethereum" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--success)' }}>$110B+</a>
            </td>
            <td style={{ textAlign: 'center', padding: '0.75rem', color: 'var(--success)' }}>Yes (12+ months)</td>
          </tr>
          <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
            <td style={{ padding: '0.75rem', color: 'var(--text-secondary)' }}>Solana</td>
            <td style={{ textAlign: 'center', padding: '0.75rem', color: 'var(--text-secondary)' }}>~0.4s</td>
            <td style={{ textAlign: 'center', padding: '0.75rem' }}>
              <a href="https://defillama.com/chain/Solana" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>$10B (Nov 2021)</a>
            </td>
            <td style={{ textAlign: 'center', padding: '0.75rem', color: 'var(--danger)' }}>No — crashed 97%</td>
          </tr>
          <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
            <td style={{ padding: '0.75rem', color: 'var(--text-secondary)' }}>BSC</td>
            <td style={{ textAlign: 'center', padding: '0.75rem', color: 'var(--text-secondary)' }}>~3s</td>
            <td style={{ textAlign: 'center', padding: '0.75rem' }}>
              <a href="https://defillama.com/chain/BSC" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>$22B (May 2021)</a>
            </td>
            <td style={{ textAlign: 'center', padding: '0.75rem', color: 'var(--danger)' }}>Brief — collapsed in 60 days</td>
          </tr>
          <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
            <td style={{ padding: '0.75rem', color: 'var(--text-secondary)' }}>Base</td>
            <td style={{ textAlign: 'center', padding: '0.75rem', color: 'var(--text-secondary)' }}>~2s</td>
            <td style={{ textAlign: 'center', padding: '0.75rem' }}>
              <a href="https://defillama.com/chain/Base" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>~$3B</a>
            </td>
            <td style={{ textAlign: 'center', padding: '0.75rem', color: 'var(--danger)' }}>No — 90%+ memecoin</td>
          </tr>
          <tr>
            <td style={{ padding: '0.75rem', fontWeight: 600, color: 'var(--btc-orange)' }}>Bitcoin (OP_NET)</td>
            <td style={{ textAlign: 'center', padding: '0.75rem', color: 'var(--btc-orange)', fontWeight: 600 }}>~10 min</td>
            <td style={{ textAlign: 'center', padding: '0.75rem', color: 'var(--text-muted)' }}>Early stage</td>
            <td style={{ textAlign: 'center', padding: '0.75rem', color: 'var(--btc-orange)' }}>TBD — optimal exit friction</td>
          </tr>
        </tbody>
      </table>

      <div style={{
        marginTop: '1rem',
        padding: '0.75rem 1rem',
        background: 'var(--bg-tertiary)',
        borderRadius: '8px',
        fontSize: '0.8rem',
        color: 'var(--text-secondary)'
      }}>
        <strong style={{ color: 'var(--btc-orange)' }}>Pattern:</strong> Faster chains have higher exit velocity.
        When sentiment turns, everyone exits simultaneously. Bitcoin's 10-minute blocks create natural exit friction.
      </div>
    </div>
  )
}

// NativeSwap vs PSBT Architecture Diagram
export function NativeSwapArchitectureDiagram() {
  const boxStyle = (color) => ({
    background: 'var(--bg-tertiary)',
    border: `1px solid ${color}`,
    borderRadius: '8px',
    padding: '0.625rem 1rem',
    fontSize: '0.8rem',
    color: 'var(--text-primary)',
    textAlign: 'center',
    width: '100%',
    maxWidth: '170px'
  })

  const Arrow = ({ color = 'var(--text-muted)' }) => (
    <div style={{ color, fontSize: '1.25rem', margin: '0.25rem 0' }}>↓</div>
  )

  return (
    <div style={{
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border-color)',
      borderRadius: '16px',
      padding: '1.5rem',
      margin: '1.5rem 0'
    }}>
      <h4 style={{ margin: '0 0 1.5rem 0', color: 'var(--text-primary)', textAlign: 'center', fontSize: '1rem', fontWeight: 600 }}>
        PSBT Marketplaces vs NativeSwap
      </h4>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1.5rem'
      }}>
        {/* PSBT Side */}
        <div style={{
          background: 'rgba(239, 68, 68, 0.05)',
          border: '1px solid rgba(239, 68, 68, 0.2)',
          borderRadius: '12px',
          padding: '1.25rem'
        }}>
          <div style={{
            textAlign: 'center',
            color: 'var(--danger)',
            fontWeight: 700,
            marginBottom: '1rem',
            fontSize: '0.85rem'
          }}>
            PSBT MARKETPLACES
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
            <div style={boxStyle('var(--danger)')}>Seller signs partial tx</div>
            <Arrow color="var(--danger)" />
            <div style={boxStyle('var(--danger)')}>Centralized Server</div>
            <Arrow color="var(--danger)" />
            <div style={boxStyle('var(--danger)')}>Buyer completes tx</div>
            <Arrow color="var(--danger)" />
            <div style={boxStyle('var(--danger)')}>Server broadcasts</div>
          </div>

          <div style={{
            marginTop: '1rem',
            fontSize: '0.75rem',
            color: 'var(--danger)',
            textAlign: 'center'
          }}>
            Trust required at every step
          </div>
        </div>

        {/* NativeSwap Side */}
        <div style={{
          background: 'rgba(247, 147, 26, 0.05)',
          border: '1px solid rgba(247, 147, 26, 0.2)',
          borderRadius: '12px',
          padding: '1.25rem'
        }}>
          <div style={{
            textAlign: 'center',
            color: 'var(--btc-orange)',
            fontWeight: 700,
            marginBottom: '1rem',
            fontSize: '0.85rem'
          }}>
            NATIVESWAP
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
            <div style={boxStyle('var(--btc-orange)')}>Price Oracle (k=T×B)</div>
            <Arrow color="var(--btc-orange)" />
            <div style={boxStyle('var(--btc-orange)')}>Seller Queue (FIFO)</div>
            <Arrow color="var(--btc-orange)" />
            <div style={boxStyle('var(--btc-orange)')}>Buyer Reservation</div>
            <Arrow color="var(--btc-orange)" />
            <div style={boxStyle('var(--btc-orange)')}>P2P Settlement</div>
          </div>

          <div style={{
            marginTop: '1rem',
            fontSize: '0.75rem',
            color: 'var(--btc-orange)',
            textAlign: 'center'
          }}>
            Contract verifies, never custodies
          </div>
        </div>
      </div>
    </div>
  )
}

// MasterChef Fork Explosion Visual
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

  return (
    <div style={{
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border-color)',
      borderRadius: '16px',
      padding: '1.5rem',
      margin: '1.5rem 0'
    }}>
      <h4 style={{ margin: '0 0 0.75rem 0', color: 'var(--text-primary)', fontSize: '1rem', fontWeight: 600 }}>
        The MasterChef Fork Explosion
      </h4>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: '0 0 1.25rem 0' }}>
        ~200 lines of Solidity became the most forked code in DeFi history
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
        gap: '0.75rem'
      }}>
        {forks.map((f, i) => (
          <div key={i} style={{
            background: 'var(--bg-tertiary)',
            border: `1px solid ${f.status === 'active' ? 'var(--success)' : f.status === 'dead' ? 'var(--danger)' : 'var(--border-color)'}`,
            borderRadius: '10px',
            padding: '0.875rem',
            opacity: f.status === 'dead' ? 0.6 : 1
          }}>
            <div style={{
              fontWeight: 700,
              color: f.status === 'active' ? 'var(--btc-orange)' : 'var(--text-secondary)',
              fontSize: '0.85rem'
            }}>
              {f.name}
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
              {f.tvl} · {f.year}
            </div>
          </div>
        ))}
        <div style={{
          background: 'var(--bg-tertiary)',
          border: '1px dashed var(--border-color)',
          borderRadius: '10px',
          padding: '0.875rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
            + hundreds more...
          </span>
        </div>
      </div>

      <div style={{
        marginTop: '1rem',
        display: 'flex',
        gap: '1.5rem',
        fontSize: '0.75rem',
        color: 'var(--text-tertiary)'
      }}>
        <span><span style={{ color: 'var(--success)' }}>●</span> Active</span>
        <span><span style={{ color: 'var(--danger)' }}>●</span> Dead</span>
        <span><span style={{ color: 'var(--text-muted)' }}>●</span> Reduced</span>
      </div>
    </div>
  )
}

// Proof of HODL vs Babylon Comparison
export function ProofOfHODLComparison() {
  return (
    <div style={{
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border-color)',
      borderRadius: '16px',
      padding: '1.5rem',
      margin: '1.5rem 0'
    }}>
      <h4 style={{ margin: '0 0 1.5rem 0', color: 'var(--text-primary)', textAlign: 'center', fontSize: '1rem', fontWeight: 600 }}>
        Proof of HODL vs Babylon
      </h4>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1.5rem'
      }}>
        {/* Babylon */}
        <div style={{
          background: 'rgba(239, 68, 68, 0.05)',
          border: '1px solid rgba(239, 68, 68, 0.2)',
          borderRadius: '12px',
          padding: '1.25rem'
        }}>
          <div style={{
            textAlign: 'center',
            color: 'var(--danger)',
            fontWeight: 700,
            marginBottom: '1rem',
            fontSize: '0.85rem'
          }}>
            BABYLON ($5B+ Locked)
          </div>

          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            fontSize: '0.85rem'
          }}>
            {[
              'Time-locked up to 15 months',
              '7-day minimum unbonding',
              'Delegation to validators',
              'Slashing risk',
              '~1% APY in BABY tokens'
            ].map((item, i) => (
              <li key={i} style={{ padding: '0.5rem 0', borderBottom: i < 4 ? '1px solid var(--border-subtle)' : 'none', color: 'var(--text-secondary)' }}>
                <span style={{ color: 'var(--danger)', marginRight: '0.5rem' }}>✗</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Proof of HODL */}
        <div style={{
          background: 'rgba(247, 147, 26, 0.05)',
          border: '1px solid rgba(247, 147, 26, 0.2)',
          borderRadius: '12px',
          padding: '1.25rem'
        }}>
          <div style={{
            textAlign: 'center',
            color: 'var(--btc-orange)',
            fontWeight: 700,
            marginBottom: '1rem',
            fontSize: '0.85rem'
          }}>
            PROOF OF HODL
          </div>

          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            fontSize: '0.85rem'
          }}>
            {[
              'Fully spendable at any time',
              'No lock period whatsoever',
              'No delegation required',
              'No slashing risk',
              'Variable APY in farm tokens'
            ].map((item, i) => (
              <li key={i} style={{ padding: '0.5rem 0', borderBottom: i < 4 ? '1px solid var(--border-subtle)' : 'none', color: 'var(--text-secondary)' }}>
                <span style={{ color: 'var(--success)', marginRight: '0.5rem' }}>✓</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{
        marginTop: '1rem',
        textAlign: 'center',
        fontSize: '0.85rem',
        color: 'var(--text-tertiary)'
      }}>
        Your keys. Your coins. Your choice when to move them.
      </div>
    </div>
  )
}

// MOTO Fee Flow Diagram
export function MOTOFeeFlowDiagram() {
  const feeBoxStyle = {
    background: 'var(--bg-tertiary)',
    border: '1px solid var(--border-color)',
    borderRadius: '10px',
    padding: '1rem',
    textAlign: 'center',
    minWidth: '150px'
  }

  return (
    <div style={{
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border-color)',
      borderRadius: '16px',
      padding: '1.5rem',
      margin: '1.5rem 0'
    }}>
      <h4 style={{ margin: '0 0 1.5rem 0', color: 'var(--text-primary)', textAlign: 'center', fontSize: '1rem', fontWeight: 600 }}>
        How MOTO Stakers Earn From Every Trade
      </h4>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.75rem'
      }}>
        <div style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <div style={feeBoxStyle}>
            <div style={{ fontWeight: 700, color: 'var(--btc-orange)', fontSize: '0.9rem' }}>OP-20 Swaps</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>0.3% to LPs</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--success)' }}>0.2% to MOTO stakers</div>
          </div>

          <div style={feeBoxStyle}>
            <div style={{ fontWeight: 700, color: 'var(--btc-orange)', fontSize: '0.9rem' }}>NativeSwap</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--success)', marginTop: '0.25rem' }}>0.2% to MOTO stakers</div>
          </div>
        </div>

        <div style={{ color: 'var(--btc-orange)', fontSize: '1.5rem' }}>↓</div>

        <div style={{
          background: 'rgba(247, 147, 26, 0.1)',
          border: '2px solid var(--btc-orange)',
          borderRadius: '12px',
          padding: '1rem 2rem',
          textAlign: 'center'
        }}>
          <div style={{ fontWeight: 700, color: 'var(--btc-orange)', fontSize: '1rem' }}>
            MOTO Staking Pool
          </div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
            Distributed proportionally to stakers
          </div>
        </div>

        <div style={{ color: 'var(--btc-orange)', fontSize: '1.5rem' }}>↓</div>

        <div style={{
          background: 'var(--bg-tertiary)',
          border: '1px solid var(--success)',
          borderRadius: '10px',
          padding: '0.75rem 1.25rem',
          textAlign: 'center'
        }}>
          <div style={{ color: 'var(--success)', fontSize: '0.85rem' }}>
            Your Share = Your Staked MOTO ÷ Total Staked MOTO
          </div>
        </div>
      </div>
    </div>
  )
}
