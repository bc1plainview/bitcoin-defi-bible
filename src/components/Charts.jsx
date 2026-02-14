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

// OP_NET Architecture Diagram
export function OPNETArchitectureDiagram() {
  const layerStyle = (color, bg) => ({
    background: bg,
    border: `2px solid ${color}`,
    borderRadius: '12px',
    padding: '1rem 1.5rem',
    textAlign: 'center',
    minWidth: '200px'
  })

  return (
    <div style={{
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border-color)',
      borderRadius: '16px',
      padding: '1.5rem',
      margin: '1.5rem 0'
    }}>
      <h4 style={{ margin: '0 0 1.5rem 0', color: 'var(--text-primary)', textAlign: 'center', fontSize: '1rem', fontWeight: 600 }}>
        OP_NET Architecture
      </h4>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
        <div style={layerStyle('var(--btc-orange)', 'rgba(247, 147, 26, 0.1)')}>
          <div style={{ fontWeight: 700, color: 'var(--btc-orange)', fontSize: '0.9rem' }}>Bitcoin L1</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>Data Availability Layer</div>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>Contract calls embedded in transactions</div>
        </div>

        <div style={{ color: 'var(--btc-orange)', fontSize: '1.25rem' }}>↕</div>

        <div style={layerStyle('var(--defi-purple)', 'rgba(139, 92, 246, 0.1)')}>
          <div style={{ fontWeight: 700, color: 'var(--defi-purple)', fontSize: '0.9rem' }}>OP_NET Nodes</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>Execution Layer</div>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>WASM smart contract runtime</div>
        </div>

        <div style={{ color: 'var(--defi-purple)', fontSize: '1.25rem' }}>↕</div>

        <div style={layerStyle('var(--success)', 'rgba(34, 197, 94, 0.1)')}>
          <div style={{ fontWeight: 700, color: 'var(--success)', fontSize: '0.9rem' }}>State Consensus</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>Deterministic State Root</div>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>Anyone can verify by replaying Bitcoin blocks</div>
        </div>
      </div>

      <div style={{
        marginTop: '1.25rem',
        padding: '0.75rem 1rem',
        background: 'var(--bg-tertiary)',
        borderRadius: '8px',
        fontSize: '0.8rem',
        color: 'var(--text-secondary)',
        textAlign: 'center'
      }}>
        <strong style={{ color: 'var(--btc-orange)' }}>Key insight:</strong> Bitcoin provides the data, OP_NET provides the compute.
        No bridges. No wrapped tokens. Pure L1.
      </div>
    </div>
  )
}

// 50/50 Queue Mechanism Diagram
export function FiftyFiftyMechanism() {
  return (
    <div style={{
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border-color)',
      borderRadius: '16px',
      padding: '1.5rem',
      margin: '1.5rem 0'
    }}>
      <h4 style={{ margin: '0 0 1.5rem 0', color: 'var(--text-primary)', textAlign: 'center', fontSize: '1rem', fontWeight: 600 }}>
        The 50/50 Queue Mechanism
      </h4>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1rem',
        marginBottom: '1.5rem'
      }}>
        <div style={{
          background: 'rgba(247, 147, 26, 0.1)',
          border: '1px solid var(--btc-orange)',
          borderRadius: '10px',
          padding: '1rem',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📥</div>
          <div style={{ fontWeight: 700, color: 'var(--btc-orange)', fontSize: '0.85rem' }}>Step 1</div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
            Seller joins queue with tokens
          </div>
        </div>

        <div style={{
          background: 'rgba(139, 92, 246, 0.1)',
          border: '1px solid var(--defi-purple)',
          borderRadius: '10px',
          padding: '1rem',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚡</div>
          <div style={{ fontWeight: 700, color: 'var(--defi-purple)', fontSize: '0.85rem' }}>Step 2</div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
            50% impacts price immediately
          </div>
        </div>

        <div style={{
          background: 'rgba(34, 197, 94, 0.1)',
          border: '1px solid var(--success)',
          borderRadius: '10px',
          padding: '1rem',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⏳</div>
          <div style={{ fontWeight: 700, color: 'var(--success)', fontSize: '0.85rem' }}>Step 3</div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
            50% impacts when tokens start selling
          </div>
        </div>
      </div>

      <div style={{
        background: 'var(--bg-tertiary)',
        borderRadius: '10px',
        padding: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
        flexWrap: 'wrap'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--btc-orange)' }}>50%</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Instant Impact</div>
        </div>
        <div style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>+</div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--defi-purple)' }}>50%</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Delayed Impact</div>
        </div>
        <div style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>=</div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--success)' }}>100%</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Gradual Price Discovery</div>
        </div>
      </div>

      <div style={{
        marginTop: '1rem',
        fontSize: '0.8rem',
        color: 'var(--text-tertiary)',
        textAlign: 'center'
      }}>
        This prevents flash crashes from large sell orders hitting the market all at once.
      </div>
    </div>
  )
}

// Two-Phase Commit Diagram
export function TwoPhaseCommitDiagram() {
  return (
    <div style={{
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border-color)',
      borderRadius: '16px',
      padding: '1.5rem',
      margin: '1.5rem 0'
    }}>
      <h4 style={{ margin: '0 0 1.5rem 0', color: 'var(--text-primary)', textAlign: 'center', fontSize: '1rem', fontWeight: 600 }}>
        Two-Phase Commit: Price Protection
      </h4>

      <div style={{
        display: 'flex',
        gap: '1rem',
        marginBottom: '1rem',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <div style={{
          flex: '1 1 180px',
          background: 'rgba(247, 147, 26, 0.1)',
          border: '2px solid var(--btc-orange)',
          borderRadius: '12px',
          padding: '1.25rem',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔒</div>
          <div style={{ fontWeight: 700, color: 'var(--btc-orange)', fontSize: '1rem', marginBottom: '0.5rem' }}>
            Phase 1: Reserve
          </div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            Lock in your price quote
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
            Pay small reservation fee
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', color: 'var(--text-muted)', fontSize: '1.5rem' }}>
          →
        </div>

        <div style={{
          flex: '0 0 80px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--text-muted)'
        }}>
          <div style={{ fontSize: '2rem' }}>⏱️</div>
          <div style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>Wait</div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', color: 'var(--text-muted)', fontSize: '1.5rem' }}>
          →
        </div>

        <div style={{
          flex: '1 1 180px',
          background: 'rgba(34, 197, 94, 0.1)',
          border: '2px solid var(--success)',
          borderRadius: '12px',
          padding: '1.25rem',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✅</div>
          <div style={{ fontWeight: 700, color: 'var(--success)', fontSize: '1rem', marginBottom: '0.5rem' }}>
            Phase 2: Execute
          </div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            Complete at locked price
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
            Even if market moved
          </div>
        </div>
      </div>

      <div style={{
        background: 'rgba(34, 197, 94, 0.1)',
        border: '1px solid var(--success)',
        borderRadius: '8px',
        padding: '0.75rem 1rem',
        fontSize: '0.85rem',
        color: 'var(--success)',
        textAlign: 'center'
      }}>
        <strong>Result:</strong> No slippage, no front-running, guaranteed execution price
      </div>
    </div>
  )
}

// Yield Farming Cycle Diagram
export function YieldFarmingCycleDiagram() {
  return (
    <div style={{
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border-color)',
      borderRadius: '16px',
      padding: '1.5rem',
      margin: '1.5rem 0'
    }}>
      <h4 style={{ margin: '0 0 1.5rem 0', color: 'var(--text-primary)', textAlign: 'center', fontSize: '1rem', fontWeight: 600 }}>
        The Yield Farming Cycle
      </h4>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        flexWrap: 'wrap'
      }}>
        {[
          { icon: '📥', label: 'STAKE', color: 'var(--btc-orange)' },
          { icon: '💰', label: 'EARN', color: 'var(--success)' },
          { icon: '🔄', label: 'COMPOUND', color: 'var(--defi-purple)' },
          { icon: '📤', label: 'EXIT', color: 'var(--defi-pink)' }
        ].map((step, i, arr) => (
          <div key={step.label} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-color)',
              borderRadius: '50%',
              width: '80px',
              height: '80px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '1.5rem' }}>{step.icon}</div>
              <div style={{ fontSize: '0.65rem', color: step.color, fontWeight: 600, marginTop: '0.25rem' }}>{step.label}</div>
            </div>
            {i < arr.length - 1 && <div style={{ color: step.color, fontSize: '1.25rem' }}>→</div>}
          </div>
        ))}
      </div>

      <div style={{
        marginTop: '1.5rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '0.75rem',
        fontSize: '0.7rem',
        color: 'var(--text-secondary)'
      }}>
        <div style={{ textAlign: 'center' }}>Deposit LP tokens or BTC</div>
        <div style={{ textAlign: 'center' }}>Accumulate rewards per block</div>
        <div style={{ textAlign: 'center' }}>Reinvest for exponential growth</div>
        <div style={{ textAlign: 'center' }}>Withdraw before emissions end</div>
      </div>
    </div>
  )
}

// Reward Flow Diagram
export function RewardFlowDiagram() {
  return (
    <div style={{
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border-color)',
      borderRadius: '16px',
      padding: '1.5rem',
      margin: '1.5rem 0'
    }}>
      <h4 style={{ margin: '0 0 1.5rem 0', color: 'var(--text-primary)', textAlign: 'center', fontSize: '1rem', fontWeight: 600 }}>
        How Rewards Flow to You
      </h4>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.75rem'
      }}>
        <div style={{
          background: 'rgba(247, 147, 26, 0.15)',
          border: '2px solid var(--btc-orange)',
          borderRadius: '12px',
          padding: '1rem 2rem',
          textAlign: 'center',
          width: '100%',
          maxWidth: '300px'
        }}>
          <div style={{ fontWeight: 700, color: 'var(--btc-orange)', fontSize: '1.1rem' }}>Total Emissions</div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>X tokens per block</div>
        </div>

        <div style={{ color: 'var(--btc-orange)', fontSize: '1.25rem' }}>↓</div>

        <div style={{
          display: 'flex',
          gap: '1rem',
          width: '100%',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          {[{ name: 'Pool A', weight: 40 }, { name: 'Pool B', weight: 35 }, { name: 'Pool C', weight: 25 }].map((pool) => (
            <div key={pool.name} style={{
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--defi-purple)',
              borderRadius: '8px',
              padding: '0.75rem 1rem',
              textAlign: 'center',
              minWidth: '90px'
            }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--defi-purple)', fontWeight: 600 }}>{pool.name}</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{pool.weight}% weight</div>
            </div>
          ))}
        </div>

        <div style={{ color: 'var(--defi-purple)', fontSize: '1.25rem' }}>↓</div>

        <div style={{
          background: 'var(--bg-tertiary)',
          border: '1px solid var(--border-color)',
          borderRadius: '10px',
          padding: '1rem',
          textAlign: 'center',
          width: '100%',
          maxWidth: '350px'
        }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            Split by your share of pool TVL
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
            Your Stake ÷ Total Pool TVL = Your %
          </div>
        </div>

        <div style={{ color: 'var(--success)', fontSize: '1.25rem' }}>↓</div>

        <div style={{
          background: 'rgba(34, 197, 94, 0.15)',
          border: '2px solid var(--success)',
          borderRadius: '12px',
          padding: '1rem 2rem',
          textAlign: 'center'
        }}>
          <div style={{ fontWeight: 700, color: 'var(--success)', fontSize: '1rem' }}>Your Rewards</div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Claimable per block</div>
        </div>
      </div>
    </div>
  )
}

// Entry Timing Diagram
export function EntryTimingDiagram() {
  const phases = [
    { name: 'Launch', color: 'var(--btc-orange)', height: 90, label: 'FOMO Entry', desc: 'High risk, high reward' },
    { name: 'Bonus', color: 'var(--success)', height: 100, label: 'OPTIMAL', desc: 'Best risk/reward' },
    { name: 'Normal', color: 'var(--defi-purple)', height: 60, label: 'OK Entry', desc: 'Diminishing returns' },
    { name: 'Late', color: 'var(--danger)', height: 25, label: 'POOR', desc: 'Scraps left' },
  ]

  return (
    <div style={{
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border-color)',
      borderRadius: '16px',
      padding: '1.5rem',
      margin: '1.5rem 0'
    }}>
      <h4 style={{ margin: '0 0 1.5rem 0', color: 'var(--text-primary)', textAlign: 'center', fontSize: '1rem', fontWeight: 600 }}>
        Entry Timing: When to Farm
      </h4>

      <div style={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        height: '150px',
        borderBottom: '2px solid var(--border-color)',
        marginBottom: '1rem',
        paddingBottom: '0.5rem'
      }}>
        {phases.map((p) => (
          <div key={p.name} style={{ textAlign: 'center', flex: 1 }}>
            <div style={{
              fontSize: '0.65rem',
              color: p.color,
              fontWeight: 700,
              marginBottom: '0.25rem'
            }}>
              {p.label}
            </div>
            <div style={{
              height: p.height,
              width: '50px',
              background: `linear-gradient(180deg, ${p.color} 0%, ${p.color}66 100%)`,
              borderRadius: '6px 6px 0 0',
              margin: '0 auto'
            }} />
          </div>
        ))}
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        fontSize: '0.75rem'
      }}>
        {phases.map((p) => (
          <div key={p.name} style={{ textAlign: 'center', flex: 1 }}>
            <div style={{ color: p.color, fontWeight: 600 }}>{p.name}</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.65rem' }}>{p.desc}</div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: '1rem',
        padding: '0.75rem 1rem',
        background: 'rgba(34, 197, 94, 0.1)',
        border: '1px solid var(--success)',
        borderRadius: '8px',
        fontSize: '0.8rem',
        color: 'var(--success)',
        textAlign: 'center'
      }}>
        <strong>Sweet spot:</strong> Enter during bonus period for maximum APY with established contracts
      </div>
    </div>
  )
}

// LP vs Single-Sided Decision Diagram
export function LPvsSingleSidedDiagram() {
  return (
    <div style={{
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border-color)',
      borderRadius: '16px',
      padding: '1.5rem',
      margin: '1.5rem 0'
    }}>
      <h4 style={{ margin: '0 0 1.5rem 0', color: 'var(--text-primary)', textAlign: 'center', fontSize: '1rem', fontWeight: 600 }}>
        LP Staking vs Single-Sided: Decision Guide
      </h4>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1.5rem'
      }}>
        <div style={{
          background: 'rgba(247, 147, 26, 0.05)',
          border: '1px solid var(--btc-orange)',
          borderRadius: '12px',
          padding: '1.25rem'
        }}>
          <div style={{
            textAlign: 'center',
            color: 'var(--btc-orange)',
            fontWeight: 700,
            marginBottom: '1rem',
            fontSize: '0.95rem'
          }}>
            LP STAKING
          </div>

          <div style={{ fontSize: '0.85rem', marginBottom: '1rem' }}>
            <div style={{ color: 'var(--success)', marginBottom: '0.5rem' }}>✓ Higher APY (2-3x typical)</div>
            <div style={{ color: 'var(--success)', marginBottom: '0.5rem' }}>✓ Earn trading fees + rewards</div>
            <div style={{ color: 'var(--danger)', marginBottom: '0.5rem' }}>✗ Impermanent loss risk</div>
            <div style={{ color: 'var(--danger)' }}>✗ Requires 2 assets</div>
          </div>

          <div style={{
            background: 'var(--bg-tertiary)',
            borderRadius: '8px',
            padding: '0.75rem',
            fontSize: '0.75rem',
            color: 'var(--text-secondary)'
          }}>
            <strong>Best for:</strong> Bullish on both assets, want max yield
          </div>
        </div>

        <div style={{
          background: 'rgba(139, 92, 246, 0.05)',
          border: '1px solid var(--defi-purple)',
          borderRadius: '12px',
          padding: '1.25rem'
        }}>
          <div style={{
            textAlign: 'center',
            color: 'var(--defi-purple)',
            fontWeight: 700,
            marginBottom: '1rem',
            fontSize: '0.95rem'
          }}>
            SINGLE-SIDED (Proof of HODL)
          </div>

          <div style={{ fontSize: '0.85rem', marginBottom: '1rem' }}>
            <div style={{ color: 'var(--success)', marginBottom: '0.5rem' }}>✓ No impermanent loss</div>
            <div style={{ color: 'var(--success)', marginBottom: '0.5rem' }}>✓ Keep 100% BTC exposure</div>
            <div style={{ color: 'var(--success)', marginBottom: '0.5rem' }}>✓ Fully spendable anytime</div>
            <div style={{ color: 'var(--danger)' }}>✗ Lower APY (typically)</div>
          </div>

          <div style={{
            background: 'var(--bg-tertiary)',
            borderRadius: '8px',
            padding: '0.75rem',
            fontSize: '0.75rem',
            color: 'var(--text-secondary)'
          }}>
            <strong>Best for:</strong> BTC maxis, risk-averse, passive income
          </div>
        </div>
      </div>
    </div>
  )
}

// Token Deployment Decision Diagram
export function TokenDeploymentDecisionDiagram() {
  return (
    <div style={{
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border-color)',
      borderRadius: '16px',
      padding: '1.5rem',
      margin: '1.5rem 0'
    }}>
      <h4 style={{ margin: '0 0 1.5rem 0', color: 'var(--text-primary)', textAlign: 'center', fontSize: '1rem', fontWeight: 600 }}>
        Token Deployment: Which Path?
      </h4>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem'
      }}>
        <div style={{
          background: 'var(--bg-tertiary)',
          border: '2px solid var(--btc-orange)',
          borderRadius: '12px',
          padding: '1rem 2rem',
          textAlign: 'center'
        }}>
          <div style={{ fontWeight: 700, color: 'var(--btc-orange)' }}>What's your goal?</div>
        </div>

        <div style={{ display: 'flex', gap: '3rem' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '1.25rem' }}>↙</div>
          <div style={{ color: 'var(--text-muted)', fontSize: '1.25rem' }}>↘</div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          width: '100%'
        }}>
          <div style={{
            background: 'rgba(139, 92, 246, 0.1)',
            border: '1px solid var(--defi-purple)',
            borderRadius: '12px',
            padding: '1.25rem',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🌱</div>
            <div style={{ fontWeight: 700, color: 'var(--defi-purple)', marginBottom: '0.5rem' }}>
              Bootstrap Liquidity
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              Token + Yield Farm
            </div>
            <ul style={{
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              textAlign: 'left',
              paddingLeft: '1rem',
              margin: 0
            }}>
              <li>Incentivize early LPs</li>
              <li>Build TVL fast</li>
              <li>Create trading momentum</li>
            </ul>
          </div>

          <div style={{
            background: 'rgba(34, 197, 94, 0.1)',
            border: '1px solid var(--success)',
            borderRadius: '12px',
            padding: '1.25rem',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🎁</div>
            <div style={{ fontWeight: 700, color: 'var(--success)', marginBottom: '0.5rem' }}>
              Community Token
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              Simple distribution
            </div>
            <ul style={{
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              textAlign: 'left',
              paddingLeft: '1rem',
              margin: 0
            }}>
              <li>Free mint / airdrop</li>
              <li>Utility / governance</li>
              <li>No farming needed</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

// PSBT Trading Flow Diagram
export function PSBTTradingFlowDiagram() {
  const stepStyle = (color) => ({
    background: 'var(--bg-tertiary)',
    border: `2px solid ${color}`,
    borderRadius: '10px',
    padding: '1rem',
    textAlign: 'center',
    flex: '1 1 140px',
    minWidth: '140px'
  })

  return (
    <div style={{
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border-color)',
      borderRadius: '16px',
      padding: '1.5rem',
      margin: '1.5rem 0'
    }}>
      <h4 style={{ margin: '0 0 1.5rem 0', color: 'var(--text-primary)', textAlign: 'center', fontSize: '1rem', fontWeight: 600 }}>
        How PSBT Trading Works
      </h4>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        flexWrap: 'wrap',
        marginBottom: '1.5rem'
      }}>
        <div style={stepStyle('var(--btc-orange)')}>
          <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>✍️</div>
          <div style={{ fontWeight: 700, color: 'var(--btc-orange)', fontSize: '0.8rem' }}>1. Seller Signs</div>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
            Partial transaction:<br/>"Send tokens if I get X BTC"
          </div>
        </div>

        <div style={{ color: 'var(--text-muted)', fontSize: '1.25rem' }}>→</div>

        <div style={stepStyle('var(--danger)')}>
          <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🏢</div>
          <div style={{ fontWeight: 700, color: 'var(--danger)', fontSize: '0.8rem' }}>2. Marketplace</div>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
            Centralized server<br/>holds the PSBT
          </div>
        </div>

        <div style={{ color: 'var(--text-muted)', fontSize: '1.25rem' }}>→</div>

        <div style={stepStyle('var(--defi-purple)')}>
          <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>✍️</div>
          <div style={{ fontWeight: 700, color: 'var(--defi-purple)', fontSize: '0.8rem' }}>3. Buyer Signs</div>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
            Completes tx<br/>with BTC inputs
          </div>
        </div>

        <div style={{ color: 'var(--text-muted)', fontSize: '1.25rem' }}>→</div>

        <div style={stepStyle('var(--danger)')}>
          <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📡</div>
          <div style={{ fontWeight: 700, color: 'var(--danger)', fontSize: '0.8rem' }}>4. Broadcast</div>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
            Marketplace<br/>submits to chain
          </div>
        </div>
      </div>

      <div style={{
        background: 'rgba(239, 68, 68, 0.1)',
        border: '1px solid var(--danger)',
        borderRadius: '8px',
        padding: '0.75rem 1rem',
        fontSize: '0.8rem',
        color: 'var(--danger)',
        textAlign: 'center'
      }}>
        <strong>Problem:</strong> Trust required at every step. Centralized server controls order matching, can front-run, censor, or go offline.
      </div>
    </div>
  )
}

// Bitcoin Mempool Visualization - Fee Wall Concept
export function BitcoinMempoolVisualization() {
  // Simulated mempool fee bands (sat/vB ranges and their relative sizes in MB)
  const feeBands = [
    { range: '200+', sats: 200, size: 1.2, color: '#ef4444', label: 'Urgent' },
    { range: '100-200', sats: 150, size: 2.8, color: '#f97316', label: 'High' },
    { range: '50-100', sats: 75, size: 5.4, color: '#eab308', label: 'Medium' },
    { range: '20-50', sats: 35, size: 8.1, color: '#f7931a', label: 'Standard' },
    { range: '10-20', sats: 15, size: 12.6, color: '#a16207', label: 'Low' },
    { range: '5-10', sats: 7, size: 18.3, color: '#78716c', label: 'Economy' },
    { range: '1-5', sats: 3, size: 24.0, color: '#57534e', label: 'Stuck' },
  ]

  const maxSize = 24
  const chartWidth = 220

  // Simulated blocks being mined
  const blocks = [
    { label: 'Next Block', fee: '~180 sat/vB', fill: 0.97 },
    { label: '+1 Block', fee: '~95 sat/vB', fill: 0.92 },
    { label: '+2 Block', fee: '~52 sat/vB', fill: 0.85 },
  ]

  return (
    <div style={{
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border-color)',
      borderRadius: '16px',
      padding: '1.5rem',
      margin: '1.5rem 0'
    }}>
      <h4 style={{ margin: '0 0 0.25rem 0', color: 'var(--text-primary)', textAlign: 'center', fontSize: '1rem', fontWeight: 600 }}>
        Bitcoin Mempool During High-Fee Periods
      </h4>
      <div style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
        Unconfirmed transactions competing for limited block space
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1.5rem',
        marginBottom: '1.25rem'
      }}>
        {/* Left: Mempool depth visualization */}
        <div>
          <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.75rem', textAlign: 'center' }}>
            Mempool Depth by Fee Rate
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
            {feeBands.map((band) => {
              const width = (band.size / maxSize) * 100
              return (
                <div key={band.range} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{
                    width: '52px',
                    fontSize: '0.65rem',
                    color: 'var(--text-muted)',
                    textAlign: 'right',
                    fontFamily: 'var(--font-mono)',
                    flexShrink: 0
                  }}>
                    {band.range}
                  </div>
                  <div style={{ flex: 1, position: 'relative', height: '22px' }}>
                    <div style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      width: `${width}%`,
                      height: '100%',
                      background: `linear-gradient(90deg, ${band.color} 0%, ${band.color}88 100%)`,
                      borderRadius: '0 4px 4px 0',
                      transition: 'width 0.5s ease',
                      display: 'flex',
                      alignItems: 'center',
                      paddingLeft: '6px'
                    }}>
                      <span style={{
                        fontSize: '0.6rem',
                        color: '#fff',
                        fontWeight: 600,
                        whiteSpace: 'nowrap',
                        textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                      }}>
                        {band.size} MB
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '6px',
            fontSize: '0.6rem',
            color: 'var(--text-muted)'
          }}>
            <span>sat/vB</span>
            <span>Transaction Volume →</span>
          </div>
        </div>

        {/* Right: Block queue + fee stats */}
        <div>
          <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.75rem', textAlign: 'center' }}>
            Block Queue
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {blocks.map((block, i) => (
              <div key={block.label} style={{
                background: 'var(--bg-tertiary)',
                border: `1px solid ${i === 0 ? 'var(--btc-orange)' : 'var(--border-color)'}`,
                borderRadius: '8px',
                padding: '0.625rem 0.75rem',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Fill bar background */}
                <div style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: `${block.fill * 100}%`,
                  height: '100%',
                  background: i === 0
                    ? 'rgba(247, 147, 26, 0.08)'
                    : 'rgba(120, 113, 108, 0.06)',
                  borderRight: `2px solid ${i === 0 ? 'rgba(247, 147, 26, 0.3)' : 'rgba(120, 113, 108, 0.15)'}`
                }} />
                <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: i === 0 ? 'var(--btc-orange)' : 'var(--text-secondary)'
                    }}>
                      {block.label}
                    </div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                      Min fee: {block.fee}
                    </div>
                  </div>
                  <div style={{
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    color: i === 0 ? 'var(--btc-orange)' : 'var(--text-tertiary)',
                    fontWeight: 600
                  }}>
                    {Math.round(block.fill * 100)}% full
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Congestion indicator */}
          <div style={{
            marginTop: '0.75rem',
            background: 'rgba(239, 68, 68, 0.08)',
            border: '1px solid rgba(239, 68, 68, 0.25)',
            borderRadius: '8px',
            padding: '0.625rem 0.75rem',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--danger)' }}>
              72.4 MB unconfirmed
            </div>
            <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '2px' }}>
              ~72 blocks to clear at current rate
            </div>
          </div>
        </div>
      </div>

      {/* Fee impact callout */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '0.75rem',
        marginBottom: '1.25rem'
      }}>
        <div style={{
          background: 'rgba(239, 68, 68, 0.08)',
          border: '1px solid rgba(239, 68, 68, 0.2)',
          borderRadius: '8px',
          padding: '0.75rem',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--danger)', fontFamily: 'var(--font-mono)' }}>$82</div>
          <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>Avg fee (fast)</div>
        </div>
        <div style={{
          background: 'rgba(247, 147, 26, 0.08)',
          border: '1px solid rgba(247, 147, 26, 0.2)',
          borderRadius: '8px',
          padding: '0.75rem',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--btc-orange)', fontFamily: 'var(--font-mono)' }}>$34</div>
          <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>Avg fee (standard)</div>
        </div>
        <div style={{
          background: 'rgba(120, 113, 108, 0.08)',
          border: '1px solid rgba(120, 113, 108, 0.2)',
          borderRadius: '8px',
          padding: '0.75rem',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>$9</div>
          <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>Avg fee (economy)</div>
        </div>
      </div>

      <div style={{
        padding: '0.875rem 1rem',
        background: 'var(--bg-tertiary)',
        borderRadius: '8px',
        fontSize: '0.8rem',
        color: 'var(--text-secondary)',
        textAlign: 'center'
      }}>
        <strong style={{ color: 'var(--btc-orange)' }}>This is the fee wall.</strong> When 72 MB of transactions compete for 4 MB/hr of block space,
        fees spike and exiting DeFi positions becomes economically irrational.
      </div>
    </div>
  )
}
