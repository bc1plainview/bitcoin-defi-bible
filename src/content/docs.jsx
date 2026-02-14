// ═══════════════════════════════════════════════════════════════════════════
// THE BITCOIN DEFI BIBLE - DOCUMENTATION CONTENT
// Your cypherpunk guide to SlowFi on OP_NET
// ═══════════════════════════════════════════════════════════════════════════

import {
  DeFiSummerTVLChart,
  FoodTokenTimeline,
  ChainComparisonTable,
  NativeSwapArchitectureDiagram,
  MasterChefForkExplosion,
  ProofOfHODLComparison,
  MOTOFeeFlowDiagram,
  OPNETArchitectureDiagram,
  FiftyFiftyMechanism,
  TwoPhaseCommitDiagram,
  YieldFarmingCycleDiagram,
  RewardFlowDiagram,
  EntryTimingDiagram,
  LPvsSingleSidedDiagram,
  TokenDeploymentDecisionDiagram,
  PSBTTradingFlowDiagram,
  BitcoinMempoolVisualization,
  AMMCurveDiagram,
  ImpermanentLossDiagram,
  TokenSupplyDiagram,
  StableSwapCurveDiagram,
  CompoundingFlowDiagram
} from '../components/Charts'

// Placeholder component for images/GIFs that need to be added
const ImagePlaceholder = ({ description, type = 'image', aspectRatio = '16/9' }) => (
  <div className="image-placeholder" style={{
    background: 'linear-gradient(135deg, var(--bg-code) 0%, var(--bg-secondary) 100%)',
    border: '2px dashed var(--btc-orange)',
    borderRadius: '8px',
    padding: '2rem',
    margin: '1.5rem 0',
    textAlign: 'center',
    aspectRatio: aspectRatio,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '200px'
  }}>
    <div style={{
      fontSize: '2rem',
      marginBottom: '0.5rem',
      opacity: 0.7
    }}>
      {type === 'gif' ? '🎬' : type === 'diagram' ? '📊' : type === 'screenshot' ? '📸' : '🖼️'}
    </div>
    <div style={{
      color: 'var(--btc-orange)',
      fontFamily: 'var(--font-mono)',
      fontSize: '0.75rem',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      marginBottom: '0.5rem'
    }}>
      [{type.toUpperCase()} NEEDED]
    </div>
    <div style={{
      color: 'var(--text-secondary)',
      fontSize: '0.9rem',
      maxWidth: '400px'
    }}>
      {description}
    </div>
  </div>
)

// ASCII Diagram component for text-based diagrams
const ASCIIDiagram = ({ title, children }) => (
  <div style={{
    background: 'var(--bg-code)',
    border: '1px solid var(--border-color)',
    borderRadius: '8px',
    padding: '1.5rem',
    margin: '1.5rem 0',
    overflow: 'auto'
  }}>
    {title && (
      <div style={{
        color: 'var(--btc-orange)',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.75rem',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        marginBottom: '1rem',
        textAlign: 'center'
      }}>
        {title}
      </div>
    )}
    <pre style={{
      fontFamily: 'var(--font-mono)',
      fontSize: '0.8rem',
      lineHeight: '1.4',
      color: 'var(--text-secondary)',
      margin: 0,
      whiteSpace: 'pre',
      textAlign: 'center'
    }}>
      {children}
    </pre>
  </div>
)

export const docsContent = {
  // ─────────────────────────────────────────────────────────────────────────
  // GETTING STARTED
  // ─────────────────────────────────────────────────────────────────────────
  'introduction': {
    title: 'Introduction',
    prev: null,
    next: { slug: 'what-is-slowfi', title: 'The SlowFi Thesis' },
    content: (
      <>
        <p>
          Welcome to <strong>The Bitcoin DeFi Bible</strong>, your guide to native Bitcoin DeFi on OP_NET.
        </p>

        <div className="callout info">
          <div className="callout-title">What This Guide Is</div>
          <p style={{ marginBottom: 0 }}>
            This is for <strong>users</strong>, not developers. You don't need to know how to code.
            You need to understand how DeFi games work, how to play them, and how to create them.
          </p>
        </div>

        <h2>DeFi Summer Happened on a Slow Chain</h2>
        <p>
          In 2020, Ethereum hosted the most explosive period of wealth creation in crypto
          history. Sushiswap's vampire attack pulled $1.14 billion in 48 hours. OlympusDAO
          sustained $4 billion TVL for six months despite being an "obvious ponzi." Yield
          farmers who understood the mechanics early captured generational wealth.
        </p>

        <DeFiSummerTVLChart />

        <p>
          Here's what most people missed: <strong>Ethereum in 2020 was slow and expensive</strong>.
          15-30 transactions per second. Gas fees that spiked to hundreds of dollars during
          volatility. Exiting a position meant waiting for off-peak hours, sometimes for days.
        </p>
        <p>
          Everyone assumed this was a problem to solve. So we built faster chains. Solana
          processes 3,000+ TPS. Base and BSC handle hundreds. They should be DeFi paradise.
        </p>
        <p>
          Instead, they're 90%+ memecoin casinos. No sustained DeFi seasons. No compounding
          TVL. Protocols launch and collapse within weeks.
        </p>
        <p>
          <strong>The "problem" was actually the solution.</strong>
        </p>

        <div className="callout tip">
          <div className="callout-title">DeFi Summer is Now on Bitcoin</div>
          <p style={{ marginBottom: 0 }}>
            MasterChef yield farms. AMM liquidity pools. LP staking. Token launches. Fee-sharing staking.
            The entire DeFi Summer playbook is now live on Bitcoin Layer 1. Same mechanics. Better chain.
          </p>
        </div>

        <h2>What You'll Learn</h2>
        <p>
          This guide will teach you:
        </p>
        <ul>
          <li><strong>The SlowFi Thesis:</strong> Why exit friction makes DeFi games sustainable, and why Bitcoin is the optimal environment</li>
          <li><strong>How OP_NET Works:</strong> Smart contracts on Bitcoin L1 without bridges or wrapped tokens</li>
          <li><strong>NativeSwap Mechanics:</strong> How Bitcoin's first native DEX works with P2P BTC settlement</li>
          <li><strong>Proof of HODL:</strong> Earning yield on Bitcoin without giving up custody</li>
          <li><strong>Playing the Games:</strong> Strategies for yield farming, LP provision, and MOTO staking</li>
          <li><strong>Creating the Games:</strong> How to deploy your own tokens and yield farms</li>
        </ul>

        <h2>Two Paths Through This Guide</h2>

        <h3>Path 1: Player</h3>
        <p>
          You want to put your Bitcoin to work. You'll learn how to stake BTC for yield
          (without giving up custody), provide liquidity, farm tokens, and manage risk.
          Focus on: SlowFi Thesis → NativeSwap → Proof of HODL → Yield Farming → Strategies.
        </p>

        <h3>Path 2: Creator</h3>
        <p>
          You want to launch a token and bootstrap liquidity. You'll learn how to deploy
          OP-20 tokens, create NativeSwap pools, and set up yield farms with custom emissions.
          Focus on: Everything above, plus Deploying Tokens → Deploying Yield Farms.
        </p>

        <div className="callout warning">
          <div className="callout-title">Start Small</div>
          <p style={{ marginBottom: 0 }}>
            DeFi is unforgiving. There's no customer support, no reversals, no FDIC insurance.
            Start with amounts you can afford to lose while you learn the mechanics.
          </p>
        </div>
      </>
    )
  },

  'what-is-slowfi': {
    title: 'The SlowFi Thesis',
    prev: { slug: 'introduction', title: 'Introduction' },
    next: { slug: 'why-bitcoin-defi', title: 'Why Bitcoin?' },
    content: (
      <>
        <p>
          DeFi Summer 2020 happened on a slow, expensive chain. That wasn't despite
          Ethereum's limitations. <strong>It was because of them.</strong>
        </p>

        <h2>Understanding the DeFi Game</h2>
        <p>
          DeFi protocols are simple once you see through the marketing:
        </p>
        <p>
          <strong>DeFi protocols are reflexive games where capital inflows create yields
          that attract more capital.</strong>
        </p>
        <p>
          A yield farm launches offering 1000% APY. Early depositors see those returns and
          tell others. More capital enters, creating more trading fees and token demand.
          The APY stays high, attracting more capital. The flywheel spins.
        </p>
        <p>
          This isn't sustainable forever. Eventually emissions run out or demand saturates.
          But the question isn't whether these games end. It's <strong>how long they run
          before they end</strong>. A game that runs 6-12 months can create massive wealth
          for early participants. A game that collapses in 2 weeks creates nothing but losses.
        </p>

        <div className="callout info">
          <div className="callout-title">Exit Friction</div>
          <p style={{ marginBottom: 0 }}>
            The secret to DeFi games lasting longer isn't better tokenomics.
            <strong> It's exit friction.</strong> When money takes longer to leave than to enter,
            protocols compound upward for months instead of days.
          </p>
        </div>

        <h2>Exit Velocity Kills Protocols</h2>
        <p>
          Every DeFi protocol faces the same fundamental dynamic: capital wants to enter
          when yields are high and exit when they drop. The protocol survives as long as
          inflows exceed outflows.
        </p>

        <ChainComparisonTable />

        <p>
          On a fast chain, here's what happens:
        </p>
        <ol>
          <li>Farm launches with high emissions. Early depositors enter.</li>
          <li>Word spreads. More capital enters. TVL grows.</li>
          <li>Token price rises from demand. APY looks even better.</li>
          <li>Someone large decides to take profit and sells.</li>
          <li>Token price dips. APY drops. Others see this and decide to exit.</li>
          <li><strong>On a fast chain, they can all exit in the same block.</strong></li>
          <li>50,000 unstake transactions, reward claims, and sells execute simultaneously.</li>
          <li>Token crashes 80% in minutes. TVL collapses. Game over.</li>
        </ol>
        <p>
          This isn't a hypothetical. Watch any yield farm on Solana, BSC, or Base. TVL
          collapses 70-90% within 30-60 days as emissions end and exit velocity overwhelms
          inflows. You can set your watch to it.
        </p>

        <h2>The EIP-1559 Evidence</h2>
        <p>
          Ethereum provides a natural experiment. Check DeFiLlama's historical charts:
          <strong> DeFi TVL momentum breaks exactly when EIP-1559 passes in August 2021</strong>.
        </p>
        <p>
          Before EIP-1559:
        </p>
        <ul>
          <li>Gas prices were unpredictable and often extremely high</li>
          <li>Exiting positions required waiting for low-gas windows</li>
          <li>Unstaking, claiming rewards, and selling meant queueing transactions during off-peak hours</li>
          <li>Capital was <em>structurally trapped</em> for hours or days</li>
        </ul>
        <p>
          After EIP-1559:
        </p>
        <ul>
          <li>Gas became predictable through the base fee mechanism</li>
          <li>Throughput increased</li>
          <li>Everyone could exit in parallel</li>
          <li>The ponzis unwound in real-time</li>
        </ul>
        <p>
          OlympusDAO, the protocol that sustained $4+ billion TVL for six months through
          pure reflexivity, collapsed within weeks of gas becoming manageable. The
          mechanics hadn't changed. The exit friction disappeared.
        </p>

        <h2>Fast Chains Have Never Had a DeFi Season</h2>
        <p>
          Solana processes 100x more transactions than 2020 Ethereum. It should be DeFi
          paradise. Instead, it's a memecoin casino. The DeFi protocols that launch collapse
          before the reflexive flywheel can even start spinning.
        </p>
        <p>
          <strong>This isn't bad luck. It's physics.</strong>
        </p>

        <h2>The SlowFi Mechanism</h2>
        <p>
          SlowFi isn't a philosophy about "patient capital" or "sustainable yields." Those
          are nice narratives, but they're not what makes protocols survive.
        </p>
        <p>
          SlowFi is a <strong>mechanism</strong>: structural exit friction that keeps capital
          in protocols long enough for reflexivity to compound.
        </p>
        <p>
          The mechanism requires:
        </p>
        <ul>
          <li><strong>Limited block space:</strong> Not everyone can exit at once</li>
          <li><strong>High fees during volatility:</strong> Exiting becomes economically irrational for small positions</li>
          <li><strong>Slow confirmation times:</strong> Panic selling takes hours, not seconds</li>
        </ul>
        <p>
          Traditional finance has always understood this. Buying physical gold, closing on
          real estate, wire transfers. They all take days. These aren't inefficiencies.
          They're features that create stability and allow markets to absorb volatility
          without instant collapse.
        </p>
        <p>
          SlowFi brings this property to DeFi. Not through artificial lock-ups or penalties,
          but through the natural constraints of the underlying blockchain.
        </p>

        <div className="callout tip">
          <div className="callout-title">Bitcoin = Longer Games</div>
          <p style={{ marginBottom: 0 }}>
            The same LP staking games that ran for 6-8 months on 2020 Ethereum could run
            for 12-18 months on Bitcoin. Same mechanics. Better environment.
          </p>
        </div>
      </>
    )
  },

  'why-bitcoin-defi': {
    title: 'Why Bitcoin?',
    prev: { slug: 'what-is-slowfi', title: 'The SlowFi Thesis' },
    next: { slug: 'opnet-overview', title: 'OP_NET Overview' },
    content: (
      <>
        <p>
          If SlowFi requires exit friction, why Bitcoin specifically? Why not just use
          Ethereum during high-gas periods, or any chain that happens to be congested?
        </p>

        <h2>Bitcoin's Structural Advantages</h2>

        <h3>1. Hard Block Space Limit</h3>
        <p>
          Bitcoin settles approximately 4,000-6,000 transactions every 10 minutes. This
          isn't a parameter that can be adjusted through governance or protocol upgrades.
          It's a fundamental constraint of the system.
        </p>
        <p>
          If 50,000 people want to exit a protocol simultaneously on Bitcoin, it would
          take <strong>8-12 hours minimum</strong>, assuming they're the only transactions
          on the network. During actual congestion with competing transactions, it could
          take days.
        </p>
        <p>
          Compare this to Solana, where 50,000 transactions clear in under a second.
          Or Ethereum post-EIP-1559, where gas is predictable and throughput has increased.
          Bitcoin's "limitation" is the feature.
        </p>

        <h3>2. The Fee Wall</h3>
        <p>
          When demand for Bitcoin block space increases, fees don't just rise. They
          become <strong>prohibitively expensive</strong>. During peak periods, transaction
          fees regularly exceed $50-100.
        </p>

        <BitcoinMempoolVisualization />

        <p>
          This creates a natural exit barrier through pure economics:
        </p>
        <ul>
          <li>You have $500 staked in a yield farm</li>
          <li>Token price drops 20%. Your position is now worth $400.</li>
          <li>You want to exit, but fees are $75 to unstake + $75 to sell</li>
          <li>Exiting costs you $150 (37.5% of your remaining position)</li>
          <li>Rationally, you wait for fees to drop</li>
        </ul>
        <p>
          <strong>While you wait, the protocol has time to stabilize.</strong> New capital
          enters. The token recovers. The panic subsides. You end up not exiting at all.
        </p>
        <p>
          This isn't theoretical. It's how Bitcoin's fee market has always worked.
          The fee wall creates "sticky capital", not because users are long-term oriented,
          but because they're economically rational.
        </p>

        <h3>3. No Wrapped Tokens or Bridges</h3>
        <p>
          This is critical: <strong>exit friction only works if your capital is actually
          on Bitcoin</strong>, subject to Bitcoin's block times and fee market.
        </p>
        <p>
          Bridged BTC on faster chains (WBTC on Ethereum, wBTC on Solana) loses the exit
          friction benefit entirely. You can exit instantly on the fast chain. The slow
          chain constraint doesn't apply.
        </p>
        <p>
          Beyond the SlowFi benefits, bridges introduce massive risks:
        </p>
        <ul>
          <li><strong>WBTC:</strong> Custodied by BitGo. You're trusting a company.</li>
          <li><strong>renBTC:</strong> Was managed by Alameda. We know how that ended.</li>
          <li><strong>Bridge exploits:</strong> Billions have been stolen from bridge hacks.</li>
        </ul>
        <p>
          Native Bitcoin DeFi means your BTC stays on the most secure network in existence,
          subject to its natural rate-limiting, with no custodial middlemen.
        </p>

        <h2>The Demand is Proven</h2>
        <p>
          Over $5 billion in BTC has flowed into Babylon's "Bitcoin staking" protocol
          despite severe limitations:
        </p>
        <ul>
          <li>Time-locks up to 15 months</li>
          <li>7-day minimum unbonding period</li>
          <li>Delegation to third-party "Finality Providers"</li>
          <li>Slashing risk if your validator misbehaves</li>
          <li>Rewards paid in BABY tokens, not Bitcoin (~1% APY)</li>
        </ul>
        <p>
          If Bitcoin holders are willing to accept those tradeoffs for 1% APY in altcoins,
          the demand for <em>better</em> Bitcoin yield products is enormous.
        </p>
        <p>
          More than $1 trillion in Bitcoin sits completely idle in wallets. Unlike Ethereum,
          where 27%+ of supply is actively staked, Bitcoin has historically offered no native
          yield opportunities. HODLers have been limited to hoping number goes up.
        </p>
        <p>
          That changes now.
        </p>

        <h2>Timing: The Window is Open</h2>
        <p>
          Bitcoin DeFi TVL today is a tiny fraction of what Ethereum had in early 2020.
          The infrastructure is just coming online. OP_NET enables smart contracts.
          Motoswap provides the AMM. MotoChef enables yield farming. The pieces are in place.
        </p>
        <p>
          Early farmers in Ethereum's DeFi Summer captured generational wealth. The Sushiswap
          vampire attack, OlympusDAO's (3,3) meme, Yearn's vaults. Those who understood the
          mechanics early and positioned accordingly did extremely well.
        </p>
        <p>
          The same window is opening on Bitcoin, but with better fundamentals:
        </p>
        <ul>
          <li>Stronger exit friction (slower blocks, higher fee ceiling)</li>
          <li>Better base asset (BTC &gt; ETH as collateral)</li>
          <li>Proven demand ($5B+ already locked in inferior products)</li>
          <li>Less competition (most haven't figured this out yet)</li>
        </ul>

        <div className="callout info">
          <div className="callout-title">The Opportunity</div>
          <p style={{ marginBottom: 0 }}>
            Understanding SlowFi mechanics while others chase fast-chain memecoins is an
            informational edge. The question is whether you act on it.
          </p>
        </div>
      </>
    )
  },

  'opnet-overview': {
    title: 'OP_NET Overview',
    prev: { slug: 'why-bitcoin-defi', title: 'Why Bitcoin?' },
    next: { slug: 'bitcoin-token-wars', title: 'Bitcoin Token Wars' },
    content: (
      <>
        <p>
          Bitcoin wasn't designed for smart contracts. Satoshi intentionally kept the
          scripting language limited to prevent the complexity that creates attack vectors.
          So how do we build DeFi on Bitcoin without breaking what makes Bitcoin valuable?
        </p>

        <h2>The OP_NET Solution</h2>
        <p>
          OP_NET is a <strong>consensus layer</strong>, the first of its kind on Bitcoin.
          It enables fully expressive smart contracts directly on Layer 1 without modifying
          or forking Bitcoin's base protocol. Unlike metaprotocols (BRC-20, Runes, Alkanes)
          where indexers can show divergent results, OP_NET provides cryptographic proof of
          correct execution where every participant must arrive at exactly the same result.
        </p>

        <OPNETArchitectureDiagram />

        <p>
          OP_NET embeds smart contract calls directly in Bitcoin transactions. The Bitcoin
          blockchain becomes the data availability layer, while OP_NET nodes provide the
          execution environment, running WASM contracts and reaching deterministic consensus on state.
        </p>

        <h3>Key Properties</h3>
        <ul>
          <li><strong>No Protocol Changes Required:</strong> OP_NET works with Bitcoin as it exists today, using Taproot, SegWit, and Legacy transaction formats</li>
          <li><strong>Native Bitcoin Only:</strong> All fees are paid in BTC. There's no separate protocol token creating misaligned incentives.</li>
          <li><strong>Self-Custodial:</strong> You maintain control of your private keys throughout all operations</li>
          <li><strong>Deterministic Execution:</strong> Smart contracts are written in AssemblyScript and compiled to WebAssembly. Every node executes the same code and reaches the same state.</li>
        </ul>

        <h2>Token Standards</h2>
        <p>
          OP_NET implements token standards with significant improvements over Ethereum's:
        </p>
        <ul>
          <li>
            <strong><a href="https://docs.opnet.org/token-standards/op-20-tokens/op-20-tokens-introduction" target="_blank" rel="noopener noreferrer">OP-20</a>:</strong> Fungible tokens (like ERC-20 but better). Includes mandatory safe transfers,
            delta-based allowances to prevent exploits, and native burn capabilities.
            Used for MOTO, yield tokens, and any token you deploy.
          </li>
          <li>
            <strong><a href="https://docs.opnet.org/token-standards/op-721-nfts/minting-nfts" target="_blank" rel="noopener noreferrer">OP-721</a>:</strong> Non-fungible tokens (like ERC-721). NFTs on Bitcoin.
          </li>
        </ul>
        <p>
          These standards enable composability: tokens can interact with DEXs, yield farms,
          and future protocols in predictable ways.
        </p>

        <h2>The Epoch System</h2>
        <p>
          OP_NET organizes Bitcoin blocks into <strong>epochs</strong>: groups of exactly
          5 consecutive Bitcoin blocks (approximately 50 minutes). This provides:
        </p>
        <ul>
          <li>Consistent time boundaries for state transitions</li>
          <li>A framework for miner incentives (epoch mining rewards)</li>
          <li>Deterministic finality points for applications</li>
        </ul>

        <h2>What This Enables</h2>
        <p>
          With OP_NET, Bitcoin can support:
        </p>
        <ul>
          <li><strong>Automated Market Makers (AMMs):</strong> Motoswap's NativeSwap and OP-20 pools</li>
          <li><strong>Yield Farming:</strong> MotoChef's MasterChef-style farms</li>
          <li><strong>Token Launches:</strong> Deploy your own OP-20 tokens with custom parameters</li>
          <li><strong>Staking:</strong> MOTO staking for swap fee revenue</li>
          <li><strong>Proof of HODL:</strong> Non-custodial BTC staking that tracks UTXOs</li>
        </ul>
        <p>
          All of this while your Bitcoin stays on Bitcoin, subject to Bitcoin's security
          model and Bitcoin's exit friction.
        </p>

        <h2>Getting Set Up</h2>
        <p>
          To interact with OP_NET protocols, you need:
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <img
            src="/op-wallet-screenshot.png"
            alt="OP_WALLET browser extension showing wallet interface with BTC balance and network selector"
            style={{ maxWidth: '100%', borderRadius: '16px', border: '1px solid var(--border-color)' }}
          />
        </div>

        <h3>1. OP_WALLET</h3>
        <p>
          OP_WALLET is a browser extension (Chrome/Brave) that handles OP_NET transactions.
          It manages your keys, signs transactions, and connects to dApps like Motoswap.
        </p>
        <p>
          <a href="https://chromewebstore.google.com/detail/opwallet/pmbjpcmaaladnfpacpmhmnfmpklgbdjb" target="_blank" rel="noopener noreferrer">
            Install OP_WALLET →
          </a>
        </p>

        <h3>2. Bitcoin for Fees</h3>
        <p>
          All OP_NET transactions require BTC for gas. Keep enough in your wallet to cover:
        </p>
        <ul>
          <li>Approval transactions (first time interacting with each token)</li>
          <li>Swaps, stakes, unstakes</li>
          <li>Harvest/claim operations</li>
        </ul>
        <p>
          A few thousand satoshis handles most operations. Keep more during high-activity periods.
        </p>

        <h3>3. Network Selection</h3>
        <p>
          Make sure you're on the correct network:
        </p>
        <ul>
          <li><strong>Mainnet:</strong> Real Bitcoin, real value</li>
          <li><strong>Testnet:</strong> Test environment with testnet BTC</li>
        </ul>

        <div className="callout warning">
          <div className="callout-title">Critical</div>
          <p style={{ marginBottom: 0 }}>
            Always verify you're on the correct network before transacting. Mainnet and
            testnet addresses look different, but mistakes happen. Double-check.
          </p>
        </div>
      </>
    )
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CORE MECHANICS
  // ─────────────────────────────────────────────────────────────────────────
  'nativeswap': {
    title: 'NativeSwap (BTC Trading)',
    prev: { slug: 'motoswap', title: 'Motoswap Exchange' },
    next: { slug: 'op20s-stablecoins', title: 'OP-20S Stablecoins' },
    content: (
      <>
        <p>
          NativeSwap is the AMM that makes native Bitcoin DeFi possible. It's <strong>Uniswap V3-style
          single-sided liquidity, adapted for Bitcoin's constraints</strong>.
        </p>
        <p>
          Like modern AMMs, NativeSwap uses algorithmic price discovery via the constant
          product formula. But it's built for Bitcoin: OP-20 tokens are held by the smart
          contract (like any DEX), while BTC is <strong>P2P routed through the contract</strong>,
          verified and enforced but never custodied.
        </p>

        <h2>Why Bitcoin Trading Is Broken</h2>
        <p>
          Before NativeSwap, trading Bitcoin-native tokens (BRC-20, Runes, Ordinals) meant
          using <strong>PSBT marketplaces</strong>. If you've traded on Magic Eden, UniSat,
          or any other Bitcoin token marketplace, you've used PSBTs.
        </p>
        <p>
          <strong>PSBTs (Partially Signed Bitcoin Transactions)</strong> are Bitcoin's
          native method for multi-party transactions:
        </p>

        <PSBTTradingFlowDiagram />

        <h3>How PSBT Trading Works</h3>
        <ol>
          <li><strong>Seller creates a listing:</strong> Signs a partial transaction that says "I'll send my tokens if someone sends me X BTC"</li>
          <li><strong>Marketplace holds the PSBT:</strong> The partially-signed transaction sits on a centralized server</li>
          <li><strong>Buyer completes it:</strong> Signs the other half, adding the BTC inputs</li>
          <li><strong>Marketplace broadcasts:</strong> The complete transaction goes on-chain</li>
        </ol>

        <h3>Why PSBT Trading Sucks</h3>
        <p>
          Sounds reasonable until you look at the problems:
        </p>

        <div className="callout warning">
          <div className="callout-title">The PSBT Problem</div>
          <p style={{ marginBottom: 0 }}>
            PSBT marketplaces are just <strong>centralized order books with extra steps</strong>.
            They have all the problems of centralized exchanges, plus the slowness of Bitcoin.
          </p>
        </div>

        <h4>1. Centralized Order Matching</h4>
        <p>
          The marketplace controls which PSBTs are shown, in what order, and to whom.
          They can front-run, censor, or manipulate. You're trusting a company, not a protocol.
        </p>

        <h4>2. No Price Discovery</h4>
        <p>
          PSBT marketplaces are pure limit orders. Sellers pick arbitrary prices. There's no
          mechanism that translates supply and demand into a market price. This leads to:
        </p>
        <ul>
          <li>Wide bid-ask spreads (often 20-50%+)</li>
          <li>Stale listings at ridiculous prices</li>
          <li>No way to know the "real" price</li>
          <li>Inefficient markets that advantage insiders</li>
        </ul>

        <h4>3. Liquidity Fragmentation</h4>
        <p>
          Every marketplace has its own order book. Liquidity is scattered across Magic Eden,
          UniSat, OKX, and dozens of others. You have to check multiple platforms to find the
          best price. There's no shared liquidity layer.
        </p>

        <h4>4. MEV and Manipulation</h4>
        <p>
          Marketplace operators can see pending transactions and front-run them. They can
          snipe underpriced listings. They can manipulate which orders get matched. Users
          have no protection.
        </p>

        <h4>5. No Composability</h4>
        <p>
          PSBT marketplaces can't be integrated into DeFi. You can't build yield farms,
          lending protocols, or automated strategies on top of them. They're dead ends.
        </p>

        <table>
          <thead>
            <tr>
              <th>Problem</th>
              <th>PSBT Marketplaces</th>
              <th>NativeSwap</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Price Discovery</td>
              <td>None, arbitrary seller prices</td>
              <td>Algorithmic via constant product formula</td>
            </tr>
            <tr>
              <td>Custody</td>
              <td>Centralized marketplace</td>
              <td>Never, BTC flows directly P2P</td>
            </tr>
            <tr>
              <td>Liquidity</td>
              <td>Fragmented across platforms</td>
              <td>Unified in protocol</td>
            </tr>
            <tr>
              <td>Manipulation</td>
              <td>Operators can front-run</td>
              <td>Cryptographic price guarantees</td>
            </tr>
            <tr>
              <td>Composability</td>
              <td>None</td>
              <td>Full DeFi integration</td>
            </tr>
          </tbody>
        </table>

        <h2>What NativeSwap Is</h2>
        <p>
          NativeSwap is a <strong>single-sided liquidity AMM</strong>, similar to concentrated
          liquidity in Uniswap V3, but designed for Bitcoin's constraints.
        </p>

        <NativeSwapArchitectureDiagram />

        <h3>Three Core Components</h3>
        <table>
          <thead>
            <tr>
              <th>Component</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Constant Product (k = T × B)</td>
              <td>AMM pricing, algorithmic price discovery like Uniswap</td>
            </tr>
            <tr>
              <td>Queue System</td>
              <td>Single-sided liquidity, sellers provide tokens, buyers bring BTC</td>
            </tr>
            <tr>
              <td>P2P Settlement</td>
              <td>Bitcoin-native, BTC flows directly between traders with contract enforcement</td>
            </tr>
          </tbody>
        </table>

        <h2>AMM Price Discovery</h2>

        <AMMCurveDiagram />

        <p>
          NativeSwap uses the constant product formula for <strong>algorithmic price discovery</strong>:
        </p>
        <pre><code>k = T × B</code></pre>
        <p>
          Where T is the token reserve, B is the BTC reserve, and k is a constant.
        </p>
        <p>
          This formula translates market pressure into price:
        </p>
        <ul>
          <li><strong>Sell pressure</strong> (more tokens listed) → price goes down</li>
          <li><strong>Buy pressure</strong> (BTC coming in) → price goes up</li>
        </ul>
        <p>
          The math is borrowed from Uniswap V2, but applied to a different architecture.
          In Uniswap, k increases over time because fees accrue to liquidity providers.
          <strong>In NativeSwap, k remains constant</strong> because there are no liquidity
          providers, no shared pool, no fee accrual.
        </p>

        <div className="callout info">
          <div className="callout-title">Why k Stays Constant</div>
          <p style={{ marginBottom: 0 }}>
            NativeSwap has no liquidity providers. Pools are created once by token deployers
            with initial virtual reserves. From that point, only buy and sell operations exist.
            There's nowhere for fees to accrue. The virtual pool is a <strong>pricing reference,
            not a vault</strong>.
          </p>
        </div>

        <h2>Verification, Not Custody</h2>
        <p>
          <strong>The contract verifies but never custodies.</strong>
        </p>
        <p>
          The contract confirms that Bitcoin outputs in swap transactions match reservation
          requirements: correct amounts, correct addresses. It never controls or holds Bitcoin.
          BTC flows directly from buyers to sellers.
        </p>
        <p>
          This is different from Ethereum DeFi where contracts custody both assets. NativeSwap
          is a calculator and referee, not a vault.
        </p>

        <h2>The Seller Queue</h2>
        <p>
          Sellers don't deposit into a shared pool. They join a queue at the current market price.
        </p>
        <p>
          When a buyer wants to purchase tokens:
        </p>
        <ol>
          <li>The contract calculates the price using the constant product formula</li>
          <li>It iterates through the seller queue, taking tokens from each seller in order</li>
          <li>The buyer's BTC is split proportionally among sellers who fill the order</li>
          <li>Everything happens atomically: all sellers get paid or nothing happens</li>
        </ol>
        <p>
          NativeSwap can coordinate <strong>up to 200 different sellers</strong> in a single
          atomic transaction. No other Bitcoin protocol can do this without centralized coordination.
        </p>

        <h3>The 50/50 Queue Protection</h3>
        <p>
          When a seller lists tokens:
        </p>
        <ul>
          <li><strong>50%</strong> of their listing immediately affects virtual reserves (and price)</li>
          <li><strong>50%</strong> applies only when that seller's tokens actually begin selling</li>
        </ul>
        <p>
          <strong>Why this matters:</strong> It protects sellers at the front of the queue.
          If a massive sell order appears behind you, you don't immediately suffer the full
          price impact. By the time the queue reaches that large listing, earlier sellers
          have already exited at better prices.
        </p>

        <FiftyFiftyMechanism />

        <h2>The Two-Phase Commit Protocol</h2>
        <p>
          Bitcoin transactions are irreversible. If you send BTC to buy tokens but the price
          changes before your transaction confirms, you can't get that BTC back. On Ethereum,
          the transaction would fail and return your ETH. On Bitcoin, you've lost your money.
        </p>

        <TwoPhaseCommitDiagram />

        <p>
          NativeSwap solves this with a <strong>two-phase commit protocol</strong>:
        </p>

        <h3>Phase 1: Reservation</h3>
        <ul>
          <li>You create a reservation transaction proving you control the required BTC</li>
          <li>You include the BTC as inputs but send it back to yourself as outputs</li>
          <li>You pay only a small reservation fee</li>
          <li>The smart contract locks in your exact price quote for 5 blocks (~50 minutes)</li>
          <li>Your BTC stays in your wallet during this phase</li>
        </ul>

        <h3>Phase 2: Execution</h3>
        <ul>
          <li>You send the quoted BTC amount to complete the swap</li>
          <li>The system generates transactions paying each seller their portion</li>
          <li>Your price is guaranteed because it was locked in Phase 1</li>
          <li>Market movements during the wait don't affect you</li>
        </ul>

        <p>
          Reservations expire after 5 blocks if unused. This system:
        </p>
        <ul>
          <li><strong>Eliminates front-running:</strong> Your price is locked before you send BTC</li>
          <li><strong>Prevents slippage:</strong> You get exactly the price you reserved</li>
          <li><strong>Protects from manipulation:</strong> Price changes after reservation don't affect you</li>
        </ul>

        <h2>Queue Priority and Slashing</h2>
        <p>
          NativeSwap maintains two queues for sellers:
        </p>
        <ul>
          <li><strong>Normal Queue:</strong> Standard listing, no fee, processed in order</li>
          <li><strong>Priority Queue:</strong> Pay 3% token tax to be processed before normal queue</li>
        </ul>

        <div className="callout warning">
          <div className="callout-title">Important: No Cancellation Currently</div>
          <p style={{ marginBottom: 0 }}>
            <strong>Cancelling sell orders is not currently available.</strong> Once you join
            the seller queue, you're committed until a buyer fills your order. Make sure you
            want to sell before listing. Future updates may enable cancellation with the
            slashing penalties described below.
          </p>
        </div>

        <h3>Future: Cancellation Slashing (Not Yet Active)</h3>
        <p>
          When cancellation is enabled, there will be <strong>slashing penalties</strong>
          to prevent manipulation:
        </p>
        <table>
          <thead>
            <tr>
              <th>Cancellation</th>
              <th>Penalty</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>First cancellation</td>
              <td>50% of tokens</td>
            </tr>
            <tr>
              <td>Second (within 100 blocks)</td>
              <td>70% of tokens</td>
            </tr>
            <tr>
              <td>Subsequent</td>
              <td>90% of tokens</td>
            </tr>
          </tbody>
        </table>
        <p>
          These penalties exist to prevent manipulation. Without them, an attacker could:
        </p>
        <ol>
          <li>Flood the queue with fake sell orders to crash the price</li>
          <li>Buy tokens cheap from legitimate sellers</li>
          <li>Cancel all their fake orders</li>
          <li>Sell at the recovered price</li>
        </ol>
        <p>
          The slashing math makes this attack economically irrational. Even in the best
          case, attackers lose more to slashing than they gain from manipulation.
        </p>
        <p>
          Slashed tokens return to the virtual reserve, actually improving liquidity
          for everyone else.
        </p>

        <h2>Queue Impact Pricing</h2>
        <p>
          NativeSwap doesn't just use static virtual reserves. It factors in the <strong>depth
          of the seller queue</strong> using a logarithmic formula.
        </p>
        <p>
          A deeper seller queue signals real selling pressure, and the price adjusts downward
          to reflect this. This creates more accurate price discovery that captures both
          historical trades (virtual reserves) and current market sentiment (queue depth).
        </p>

        <h2>Transaction Pinning Protection</h2>
        <p>
          Bitcoin's UTXO model has a subtle vulnerability for DEX operations. When you
          receive BTC to an address, you can immediately create chains of unconfirmed
          transactions spending it. An attacker could:
        </p>
        <ol>
          <li>Join the seller queue</li>
          <li>Wait to receive BTC from a buyer</li>
          <li>Immediately create 25 unconfirmed transactions spending that BTC</li>
          <li>These "pin" the transaction, making it expensive to replace</li>
          <li>Meanwhile, the buyer's reservation expires</li>
        </ol>
        <p>
          NativeSwap eliminates this through mandatory <strong>CSV (CheckSequenceVerify)
          timelocks</strong>. All sellers must use addresses with at least a one-block
          timelock, preventing them from creating chains of unconfirmed transactions.
        </p>
        <p>
          This is enforced at the protocol level. Sellers cannot join the queue without
          proving their address includes the required timelock.
        </p>

        <h2>Minimum Requirements</h2>
        <table>
          <thead>
            <tr>
              <th>Operation</th>
              <th>Minimum</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Provider reservation (strict)</td>
              <td>600 sats</td>
              <td>Dust limit protection</td>
            </tr>
            <tr>
              <td>Provider reservation (standard)</td>
              <td>1,000 sats</td>
              <td>Economic minimum for sellers</td>
            </tr>
            <tr>
              <td>Trade size</td>
              <td>10,000 sats</td>
              <td>Fee economics</td>
            </tr>
            <tr>
              <td>Adding liquidity</td>
              <td>10,000 sats</td>
              <td>Meaningful position size</td>
            </tr>
          </tbody>
        </table>

        <div className="callout tip">
          <div className="callout-title">Summary</div>
          <p style={{ marginBottom: 0 }}>
            NativeSwap is a <strong>Bitcoin-native AMM with P2P settlement</strong>.
            Constant product formula for price discovery. Queue system for fair execution.
            Verification model for trustlessness. OP-20 tokens held by contract, BTC flows
            directly between traders.
          </p>
        </div>

        <h2>NativeSwap vs. Everything Else</h2>
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>PSBT Marketplaces</th>
              <th>Wrapped BTC DEXs</th>
              <th>NativeSwap</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Asset</td>
              <td>Native BTC</td>
              <td>Wrapped (WBTC, etc.)</td>
              <td>Native BTC</td>
            </tr>
            <tr>
              <td>Custody</td>
              <td>Centralized marketplace</td>
              <td>Bridge custodian</td>
              <td>None, P2P</td>
            </tr>
            <tr>
              <td>Price Discovery</td>
              <td>None</td>
              <td>Yes (other chain)</td>
              <td>Yes (constant product)</td>
            </tr>
            <tr>
              <td>Bitcoin Security</td>
              <td>Partial</td>
              <td>No (other chain)</td>
              <td>Full</td>
            </tr>
            <tr>
              <td>Exit Friction</td>
              <td>Yes</td>
              <td>No</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>DeFi Composability</td>
              <td>No</td>
              <td>Yes (other chain)</td>
              <td>Yes (Bitcoin)</td>
            </tr>
          </tbody>
        </table>
        <p>
          NativeSwap is the only solution that gives you algorithmic price discovery,
          trustless execution, native Bitcoin, AND Bitcoin's exit friction. Everything
          else requires compromising on at least one of these.
        </p>
      </>
    )
  },

  'bitcoin-token-wars': {
    title: 'Bitcoin Token Wars',
    prev: { slug: 'opnet-overview', title: 'OP_NET Overview' },
    next: { slug: 'motoswap', title: 'Motoswap Exchange' },
    content: (
      <>
        <p>
          Before OP_NET, Bitcoin had tokens. BRC-20 and Runes exploded in popularity,
          creating billions in trading volume. Then they collapsed. Understanding
          <strong> why they pumped and why they failed</strong> is essential for
          understanding why OP-20 tokens are fundamentally different.
        </p>

        <h2>The Free Mint Revolution</h2>
        <p>
          BRC-20 and Runes tapped into something powerful: <strong>the free mint</strong>.
          Bitcoin culture has always been about permissionless participation. When BRC-20
          launched in March 2023, anyone could mint tokens by simply paying a Bitcoin
          transaction fee. No presale. No VC allocation. No insider advantage.
        </p>
        <p>
          The free mint mechanic created genuine FOMO:
        </p>
        <ul>
          <li>Tokens were distributed to whoever showed up first</li>
          <li>Early minters got allocation that later minters couldn't access</li>
          <li>The race to mint created buzz and community</li>
          <li>No "team allocation" or "investor unlock" overhang</li>
        </ul>
        <p>
          ORDI, the first BRC-20 token, went from a free mint to a $1 billion market cap.
          Runes launched in April 2024 and saw similar explosions. The mechanism worked.
          Bitcoin holders finally had tokens they could own.
        </p>

        <div className="callout info">
          <div className="callout-title">The Free Mint Appeal</div>
          <p style={{ marginBottom: 0 }}>
            Free mints align with Bitcoin's ethos. No gatekeepers. No insiders getting
            better deals. Just proof of work (paying fees) and proof of participation.
            This is why they resonated so strongly with Bitcoin culture.
          </p>
        </div>

        <h2>The PSBT Death Spiral</h2>
        <p>
          What killed them: <strong>PSBT trading</strong>.
        </p>
        <p>
          BRC-20 and Runes tokens trade on PSBT marketplaces like Magic Eden, UniSat, OKX.
          These are <strong>pure order book systems</strong>. A seller lists tokens at a price.
          A buyer either takes it or doesn't. No AMM. No liquidity pool. No automated market making.
        </p>
        <p>
          This creates a fatal problem:
        </p>

        <div className="callout warning">
          <div className="callout-title">The Liquidity Death Spiral</div>
          <p style={{ marginBottom: 0 }}>
            <strong>When buy pressure stops, ALL liquidity instantly disappears.</strong><br/><br/>
            On a PSBT marketplace, if nobody wants to buy your token at any price, you
            literally cannot sell it. There are no liquidity providers. There is no pool
            to sell into. You own tokens that are mathematically unsellable.
          </p>
        </div>

        <h3>How the Death Spiral Works</h3>
        <ol>
          <li>Token launches, free mint creates distribution</li>
          <li>Early excitement drives buy orders on PSBT marketplaces</li>
          <li>Price rises as buyers compete for listings</li>
          <li>Token hits peak, whale decides to take profit</li>
          <li>Whale lists large sell order, undercutting existing sellers</li>
          <li>Buyers see the dump, pull their bids</li>
          <li><strong>Suddenly there are ZERO buy orders</strong></li>
          <li>Every holder wants to sell, but there's literally nobody to sell to</li>
          <li>Token is effectively worthless and illiquid simultaneously</li>
        </ol>
        <p>
          This isn't hypothetical. Watch any BRC-20 or Runes chart. The pattern is
          identical: explosive pump, sudden collapse, then <strong>total liquidity death</strong>
          where you can't even exit at -90% because there are no bids at all.
        </p>

        <h2>Why PSBT Marketplaces Can't Have Real Liquidity</h2>
        <p>
          On Uniswap, liquidity providers deposit into pools and earn fees. The pool
          always exists. You can always sell into it (at some price). The AMM guarantees
          there's always a bid.
        </p>
        <p>
          PSBT marketplaces have none of this:
        </p>
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>AMM (Uniswap-style)</th>
              <th>PSBT Marketplace</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Liquidity source</td>
              <td>LP pools that always exist</td>
              <td>Active buyers placing orders</td>
            </tr>
            <tr>
              <td>Can you always sell?</td>
              <td>Yes (at some price)</td>
              <td>Only if someone is bidding</td>
            </tr>
            <tr>
              <td>Price discovery</td>
              <td>Algorithmic (x × y = k)</td>
              <td>Whatever sellers ask</td>
            </tr>
            <tr>
              <td>During panic</td>
              <td>High slippage but exit exists</td>
              <td>Zero bids = no exit</td>
            </tr>
          </tbody>
        </table>
        <p>
          <strong>This is why every BRC-20 and Runes token eventually dies.</strong> The
          trading mechanism guarantees it. When sentiment turns, liquidity doesn't decrease.
          It vanishes entirely.
        </p>

        <h2>The Arbitrage Solution</h2>
        <p>
          OP-20 tokens on Motoswap have something BRC-20 and Runes never will:
          <strong> permanent liquidity through arbitrage</strong>.
        </p>
        <p>
          Imagine a token called EXAMPLE with two pools:
        </p>
        <ul>
          <li>EXAMPLE-MOTO pool on Motoswap</li>
          <li>EXAMPLE-WBTC pool on Motoswap</li>
        </ul>
        <p>
          Someone makes a large sell in the EXAMPLE-MOTO pool. The price of EXAMPLE
          drops in that pool. But it hasn't dropped yet in EXAMPLE-WBTC.
        </p>
        <p>
          <strong>This creates an arbitrage opportunity.</strong>
        </p>
        <ol>
          <li>Arb bot sees price discrepancy between pools</li>
          <li>Buys EXAMPLE cheap in the MOTO pool</li>
          <li>Sells EXAMPLE at higher price in the WBTC pool</li>
          <li>Pockets the difference as profit</li>
          <li>Both pools are now balanced at the same price</li>
        </ol>

        <div className="callout tip">
          <div className="callout-title">Free Money on the Table</div>
          <p style={{ marginBottom: 0 }}>
            Arbitrage is <strong>literally free money</strong> sitting on the table.
            There will always be someone (a bot, a trader) willing to grab it. The pools
            will always be balanced. Liquidity can never dry up like on PSBT marketplaces.
          </p>
        </div>

        <p>
          The more trading pairs a token has, the more arbitrage connections exist,
          the more liquidity is structurally guaranteed. Even if every holder wants to
          sell, the pools still exist. You can still exit.
        </p>
        <p>
          <strong>This is the fundamental difference between OP-20 and BRC-20/Runes.</strong>
          It's not about technology or standards. It's about the trading mechanism.
          AMMs with arbitrage create permanent liquidity. PSBT marketplaces create
          liquidity black holes.
        </p>

        <h2>The Fake Stablecoin Problem</h2>
        <p>
          BRC-20 and Runes have "stablecoins" that claim to track USD.
          <strong> They're not actually stable.</strong>
        </p>
        <p>
          On a PSBT marketplace, you price tokens <em>in satoshis</em>. When you list
          a "stablecoin" for sale, you're saying "I'll sell 1 USDT-equivalent token
          for X sats." But if Bitcoin's price moves:
        </p>
        <ul>
          <li>BTC goes up 10% → your "stablecoin" listing is now 10% cheaper in USD</li>
          <li>BTC goes down 10% → your "stablecoin" listing is now 10% more expensive in USD</li>
        </ul>
        <p>
          The "stablecoin" moves with Bitcoin because <strong>everything is priced in sats</strong>.
          This completely defeats the purpose of a stablecoin. You can't hedge Bitcoin
          exposure with an asset that's denominated in Bitcoin.
        </p>

        <div className="callout warning">
          <div className="callout-title">BRC-20 "Stablecoins" Are Broken</div>
          <p style={{ marginBottom: 0 }}>
            If BTC drops 20% during a market crash, your BRC-20 "USDT" doesn't stay at
            $1. It crashes with BTC. You had stablecoin exposure in name only. The
            PSBT pricing mechanism makes real stablecoins impossible.
          </p>
        </div>

        <h2>Multiple Ways to Get OP-20 Tokens</h2>
        <p>
          The Motoswap Launchpad gives token deployers <strong>multiple distribution
          mechanisms</strong>, not just free mint:
        </p>

        <table>
          <thead>
            <tr>
              <th>Method</th>
              <th>How It Works</th>
              <th>Who It's For</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Free Mint</strong></td>
              <td>Anyone can mint tokens by paying BTC gas fees</td>
              <td>Community distribution, fair launch believers</td>
            </tr>
            <tr>
              <td><strong>Buy with BTC</strong></td>
              <td>Purchase tokens directly via NativeSwap</td>
              <td>Anyone with Bitcoin who wants exposure</td>
            </tr>
            <tr>
              <td><strong>Buy with OP-20</strong></td>
              <td>Swap MOTO or other OP-20 tokens</td>
              <td>Existing OP_NET users rebalancing</td>
            </tr>
            <tr>
              <td><strong>LP Mining</strong></td>
              <td>Provide liquidity, stake LP, earn tokens</td>
              <td>Yield farmers who understand IL</td>
            </tr>
            <tr>
              <td><strong>Single-Sided Staking</strong></td>
              <td>Stake one token to earn another</td>
              <td>Lower risk, simpler participation</td>
            </tr>
            <tr>
              <td><strong>Proof of HODL</strong></td>
              <td>Stake BTC without custody, earn tokens</td>
              <td>Bitcoin holders who won't sell</td>
            </tr>
          </tbody>
        </table>

        <p>
          This flexibility means token deployers can design distribution that fits their
          goals. Want Bitcoin culture vibes? Enable free mint. Want to bootstrap liquidity
          fast? Weight LP mining heavily. Want to attract Bitcoin holders? Use Proof of HODL.
        </p>

        <h2>Summary</h2>
        <p>
          BRC-20 and Runes had the right idea (free mints, Bitcoin-native) but the wrong
          trading mechanism (PSBT marketplaces). When buy pressure stopped, liquidity
          instantly died, and holders were left with unsellable bags.
        </p>
        <p>
          OP-20 tokens solve this with AMM liquidity and arbitrage. Multiple trading
          pairs create structural liquidity that can never completely disappear. The
          free mint culture is preserved, but the trading mechanics are fixed.
        </p>

        <div className="callout info">
          <div className="callout-title">The Opportunity</div>
          <p style={{ marginBottom: 0 }}>
            If you understood why BRC-20 failed, you understand why OP-20 is different.
            It's not better marketing or newer technology. It's solving the actual
            problem: <strong>sustainable liquidity through proper market structure</strong>.
          </p>
        </div>
      </>
    )
  },

  'motoswap': {
    title: 'Motoswap Exchange',
    prev: { slug: 'bitcoin-token-wars', title: 'Bitcoin Token Wars' },
    next: { slug: 'nativeswap', title: 'NativeSwap (BTC Trading)' },
    content: (
      <>
        <p>
          Motoswap is the first fully decentralized exchange on Bitcoin Layer 1. It's a
          complete DeFi ecosystem built on OP_NET, bringing everything from DeFi Summer
          2020 to Bitcoin.
        </p>
        <p>
          <a href="https://motoswap.org" target="_blank" rel="noopener noreferrer">motoswap.org</a>
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <img
            src="/motoswap-main.png"
            alt="Motoswap main interface showing swap, pools, farms navigation"
            style={{ maxWidth: '100%', borderRadius: '16px', border: '1px solid var(--border-color)' }}
          />
        </div>

        <h2>The Motoswap Stack</h2>
        <p>
          Motoswap combines multiple components into one integrated platform:
        </p>
        <ul>
          <li><strong>NativeSwap:</strong> Bitcoin-native AMM for trading BTC directly with P2P settlement (covered in next section)</li>
          <li><strong>OP-20 Pools:</strong> Traditional Uniswap-style pools for token-to-token trading</li>
          <li><strong>MotoChef:</strong> MasterChef-style yield farming (covered later)</li>
          <li><strong>MOTO Staking:</strong> Protocol fee sharing (covered later)</li>
          <li><strong>Token Launchpad:</strong> Deploy your own tokens and farms</li>
        </ul>

        <h2>Two Types of Pools</h2>

        <h3>NativeSwap Pools (BTC ↔ Token)</h3>
        <p>
          These enable trading native Bitcoin for tokens. No other Bitcoin DEX can do this
          trustlessly. Key differences:
        </p>
        <ul>
          <li>Virtual reserve accounting</li>
          <li>Seller queue system</li>
          <li>Two-phase commit for price protection</li>
          <li>BTC never touches a contract, flows directly between traders</li>
        </ul>
        <p>
          Use NativeSwap pools to trade between native Bitcoin and any OP-20 token.
        </p>

        <h3>OP-20 Pools (Token ↔ Token)</h3>
        <p>
          These are traditional Uniswap V2-style pools:
        </p>
        <ul>
          <li>Constant product formula (x × y = k)</li>
          <li>Two-sided liquidity (deposit both tokens)</li>
          <li>LP tokens represent your share of the pool</li>
          <li>Tokens are held by the contract</li>
        </ul>

        <h2>Fee Structure</h2>
        <p>
          Every swap on Motoswap generates fees:
        </p>

        <h3>OP-20 Swaps (Token ↔ Token)</h3>
        <table>
          <thead>
            <tr>
              <th>Fee</th>
              <th>Recipient</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0.3%</td>
              <td>Liquidity Providers</td>
              <td>Rewards LP providers</td>
            </tr>
            <tr>
              <td>0.2%</td>
              <td>MOTO Stakers</td>
              <td>Protocol revenue sharing</td>
            </tr>
            <tr>
              <td><strong>Total: 0.5%</strong></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <h3>NativeSwap Swaps (BTC ↔ Token)</h3>
        <table>
          <thead>
            <tr>
              <th>Fee</th>
              <th>Recipient</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0.2%</td>
              <td>MOTO Stakers</td>
              <td>Protocol revenue sharing</td>
            </tr>
          </tbody>
        </table>

        <p>
          <strong>MOTO stakers earn from every single trade on the platform</strong>, both
          OP-20 pools and NativeSwap pools. More trading volume = more rewards.
        </p>

        <h2>Providing Liquidity</h2>
        <p>
          Providing liquidity means depositing assets into a pool so others can trade.
          In return, you receive LP tokens and earn a share of trading fees.
        </p>

        <h3>For OP-20 Pools:</h3>
        <ol>
          <li>Go to the Pool page on Motoswap</li>
          <li>Select the token pair (e.g., MOTO-PILL)</li>
          <li>Deposit equal value of both tokens</li>
          <li>Receive LP tokens representing your share</li>
          <li>Earn 0.3% of all trades in that pool (proportional to your share)</li>
        </ol>

        <h3>For NativeSwap Pools:</h3>
        <p>
          NativeSwap works differently because BTC isn't held in a pool. It flows
          directly between buyers and sellers.
        </p>
        <ul>
          <li><strong>Token side:</strong> Pool creators deposit tokens when creating the pool</li>
          <li><strong>Selling tokens:</strong> Join the seller queue to receive BTC when a buyer arrives</li>
          <li><strong>BTC side:</strong> Comes from buyers as they purchase tokens</li>
        </ul>

        <div className="callout warning">
          <div className="callout-title">Current NativeSwap Limitations</div>
          <p style={{ marginBottom: 0 }}>
            NativeSwap is live but some features are still being developed:<br/>
            • <strong>Add/Remove LP:</strong> Not yet active for NativeSwap pools<br/>
            • <strong>Cancel Sell Orders:</strong> Once you join the seller queue, you cannot cancel<br/><br/>
            When you list tokens for sale, you're committed until a buyer fills your order.
            Make sure you want to sell before joining the queue.
          </p>
        </div>

        <h2>Impermanent Loss</h2>
        <p>
          If you provide liquidity to OP-20 pools, you need to understand <strong>impermanent
          loss (IL)</strong>.
        </p>
        <p>
          When you deposit two tokens in a 50/50 ratio, the pool automatically rebalances
          as prices change. If Token A doubles against Token B, the pool sells A to buy B.
          You end up with less A and more B than if you'd just held.
        </p>
        <p>
          The loss is "impermanent" because it reverses if prices return to the original
          ratio. But if you withdraw while prices have diverged, the loss becomes permanent.
        </p>
        <p>
          IL is the main risk of LP provision. The trading fees you earn need to outweigh
          the IL, or you would have been better off just holding.
        </p>

        <div className="callout warning">
          <div className="callout-title">IL Can Be Significant</div>
          <p style={{ marginBottom: 0 }}>
            A 2x price change in one token causes ~5.7% IL. A 5x change causes ~25% IL.
            Don't provide liquidity without understanding this math.
          </p>
        </div>

        <ImpermanentLossDiagram />

        <h2>Swapping Tokens</h2>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <img
            src="/motoswap-swap.png"
            alt="Motoswap swap interface showing token swap with price quote and price impact"
            style={{ maxWidth: '480px', width: '100%', borderRadius: '16px', border: '1px solid var(--border-color)' }}
          />
        </div>

        <h3>Buying Tokens with BTC (NativeSwap)</h3>
        <ol>
          <li>Go to Swap, select BTC and the token you want</li>
          <li>Enter the amount of BTC to spend</li>
          <li>Click Swap to create a <strong>reservation</strong></li>
          <li>Your price is now locked for 5 blocks</li>
          <li>Confirm the execution transaction to complete the swap</li>
          <li>BTC goes directly to sellers; you receive tokens</li>
        </ol>

        <h3>Selling Tokens for BTC (NativeSwap)</h3>
        <ol>
          <li>Go to Swap, select your token and BTC</li>
          <li>Enter the amount to sell</li>
          <li>You join the seller queue at the current oracle price</li>
          <li>When a buyer arrives, you receive BTC proportional to your queue position</li>
          <li>This happens atomically, you don't need to be online</li>
        </ol>

        <h3>Token-to-Token (OP-20 Pools)</h3>
        <ol>
          <li>Go to Swap, select both tokens</li>
          <li>Enter amount</li>
          <li>Confirm the swap transaction</li>
          <li>Standard AMM swap (no reservation needed)</li>
        </ol>

        <div className="callout tip">
          <div className="callout-title">Pro Tip</div>
          <p style={{ marginBottom: 0 }}>
            For large NativeSwap trades, check the queue depth. A thin queue might not
            fill your entire order, or might cause significant price impact.
          </p>
        </div>
      </>
    )
  },

  'op20s-stablecoins': {
    title: 'OP-20S Stablecoins',
    prev: { slug: 'nativeswap', title: 'NativeSwap (BTC Trading)' },
    next: { slug: 'motochef', title: 'MotoChef (Yield Farming)' },
    content: (
      <>
        <p>
          For the <strong>first time ever</strong>, you can have real stablecoins on Bitcoin
          Layer 1 with an AMM to trustlessly swap between BTC and USD-pegged assets.
        </p>

        <div className="callout info">
          <div className="callout-title">Why This Matters</div>
          <p style={{ marginBottom: 0 }}>
            Without real stablecoins, Bitcoin DeFi is incomplete. You can't hedge, you can't
            take profits without leaving the ecosystem, you can't build lending protocols.
            OP-20S makes Bitcoin DeFi fully functional.
          </p>
        </div>

        <h2>The Problem: Getting USD on Bitcoin</h2>
        <p>
          Right now, if you want to swap Bitcoin for stablecoins, your options are terrible:
        </p>

        <h3>Option 1: Centralized Exchanges</h3>
        <ul>
          <li>Send BTC to Coinbase/Binance/Kraken</li>
          <li>Sell for USDT/USDC</li>
          <li>Withdraw to... where? Ethereum? Solana?</li>
          <li>Your "Bitcoin profits" are now on a different chain</li>
          <li>KYC required. Custodial risk. Not your keys.</li>
        </ul>

        <h3>Option 2: Bridges</h3>
        <ul>
          <li>Wrap your BTC (WBTC, renBTC, etc.)</li>
          <li>Bridge to Ethereum or another chain</li>
          <li>Swap for stablecoins there</li>
          <li>Now you have custodial wrapped BTC risk PLUS bridge risk</li>
          <li>Billions have been lost to bridge hacks</li>
        </ul>

        <h3>Option 3: BRC-20/Runes "Stablecoins"</h3>
        <p>
          Some Bitcoin tokens claim to be stablecoins. <strong>They're not.</strong>
        </p>
        <p>
          On PSBT marketplaces, everything is priced in satoshis. When you list a
          "stablecoin" for sale, you set a price in sats. But if Bitcoin moves:
        </p>
        <ul>
          <li><strong>BTC +10%:</strong> Your stablecoin listing is now 10% cheaper in USD</li>
          <li><strong>BTC -10%:</strong> Your stablecoin listing is now 10% more expensive in USD</li>
        </ul>
        <p>
          The "stablecoin" moves with Bitcoin because <strong>the marketplace prices
          everything in BTC</strong>. This completely defeats the purpose. If BTC crashes
          20%, your "USDT" crashes with it.
        </p>

        <div className="callout warning">
          <div className="callout-title">BRC-20 "Stablecoins" Are Fake</div>
          <p style={{ marginBottom: 0 }}>
            A stablecoin that moves with Bitcoin isn't a stablecoin. It's just BTC with
            extra steps. You can't hedge BTC exposure with an asset denominated in BTC.
          </p>
        </div>

        <h2>The Solution: OP-20S</h2>
        <p>
          OP-20S is a stablecoin extension standard for OP-20 tokens on NativeSwap.
          It enables <strong>peg-aware pricing</strong>: the AMM knows the target USD
          value and prices accordingly.
        </p>

        <h3>How It Works</h3>
        <p>
          Stablecoin issuers deploy OP-20 tokens that implement the OP-20S interface:
        </p>
        <ul>
          <li><strong>pegRate():</strong> Target price in satoshis per token (e.g., "1 token = $1 worth of sats")</li>
          <li><strong>pegAuthority():</strong> Who can update the peg rate</li>
          <li><strong>pegUpdatedAt():</strong> When the peg was last updated</li>
        </ul>
        <p>
          NativeSwap detects these tokens and applies <strong>StableSwap mathematics</strong>,
          optimized AMM curves that minimize slippage around the peg price.
        </p>

        <h3>StableSwap Pricing</h3>
        <p>
          Regular AMMs use the constant product formula (x × y = k). This works for
          volatile pairs, but it's inefficient for stablecoins. You get unnecessary
          slippage when trading assets that should be worth the same thing.
        </p>
        <p>
          StableSwap uses an <strong>amplified invariant</strong> that keeps prices much
          closer to the peg. The amplification coefficient controls how tightly prices
          track the target:
        </p>
        <ul>
          <li><strong>High amplification:</strong> Very tight peg, minimal slippage for stablecoin trades</li>
          <li><strong>Low amplification:</strong> More like a regular AMM, allows larger price swings</li>
        </ul>
        <p>
          Same math that powers Curve Finance. Now it's available on Bitcoin L1.
        </p>

        <StableSwapCurveDiagram />

        <h2>What OP-20S Enables</h2>
        <p>
          With OP-20S:
        </p>

        <table>
          <thead>
            <tr>
              <th>Action</th>
              <th>Before OP-20S</th>
              <th>With OP-20S</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Take profits in USD</td>
              <td>Leave Bitcoin ecosystem</td>
              <td>Swap to stablecoin on NativeSwap</td>
            </tr>
            <tr>
              <td>Hedge BTC exposure</td>
              <td>Impossible natively</td>
              <td>Hold OP-20S stablecoins</td>
            </tr>
            <tr>
              <td>Stable LP pairs</td>
              <td>Not available</td>
              <td>TOKEN-USDT pools with minimal IL</td>
            </tr>
            <tr>
              <td>Build lending</td>
              <td>No stable collateral</td>
              <td>Stablecoin collateral enabled</td>
            </tr>
          </tbody>
        </table>

        <h3>Real USD Stability</h3>
        <p>
          Because the AMM understands the peg rate, it prices trades in <strong>real
          USD terms</strong>, not just satoshis. When BTC moves:
        </p>
        <ul>
          <li>The peg rate updates (via oracle or authority)</li>
          <li>NativeSwap adjusts the sat-denominated price accordingly</li>
          <li>1 stablecoin token still trades for ~$1 worth of BTC</li>
        </ul>
        <p>
          <strong>This is actual USD stability on Bitcoin L1.</strong> Not fake
          sat-denominated "stability." Real dollar hedging.
        </p>

        <h2>How Stablecoins Get Issued</h2>
        <p>
          OP-20S is a <em>standard</em>, not a specific stablecoin. Different issuers
          can deploy stablecoins with different backing mechanisms:
        </p>

        <h3>Possible Backing Models</h3>
        <ul>
          <li><strong>Fiat-backed:</strong> Issuer holds USD reserves, mints/burns to maintain peg (like USDC/USDT)</li>
          <li><strong>Crypto-collateralized:</strong> Over-collateralized with BTC or other assets (like DAI)</li>
          <li><strong>Algorithmic:</strong> Supply adjustments based on demand (risky but possible)</li>
        </ul>
        <p>
          The OP-20S standard doesn't dictate the backing. It provides the <em>interface</em>
          that lets NativeSwap apply proper stablecoin pricing regardless of how the
          issuer maintains the peg.
        </p>

        <h2>Integration with NativeSwap</h2>
        <p>
          When you create a pool with an OP-20S token:
        </p>
        <ol>
          <li>NativeSwap detects the token implements the stablecoin interface</li>
          <li>Pool is marked as a "stable" pool type</li>
          <li>StableSwap pricing math is applied automatically</li>
          <li>Peg rate is fetched during each quote operation</li>
          <li>Trades execute at peg-aware prices with minimal slippage</li>
        </ol>
        <p>
          No special configuration needed. If the token follows the standard, NativeSwap
          handles the rest.
        </p>

        <div className="callout tip">
          <div className="callout-title">What This Unlocks</div>
          <p style={{ marginBottom: 0 }}>
            Real stablecoins on Bitcoin L1 complete the DeFi stack. Farm yields, take
            profits in USD, hedge positions, build lending protocols. All without leaving Bitcoin.
          </p>
        </div>

        <h2>Current Status</h2>
        <p>
          OP-20S is a new extension being integrated into NativeSwap. As stablecoin
          issuers deploy compliant tokens, they'll automatically benefit from
          peg-aware pricing. Watch for announcements about the first OP-20S
          stablecoins launching on Motoswap.
        </p>
      </>
    )
  },

  'motochef': {
    title: 'MotoChef (Yield Farming)',
    prev: { slug: 'op20s-stablecoins', title: 'OP-20S Stablecoins' },
    next: { slug: 'proof-of-hodl', title: 'Proof of HODL' },
    content: (
      <>
        <p>
          MotoChef is a direct fork of SushiSwap's MasterChef contracts. The same code that
          fueled DeFi Summer 2020. <strong>That entire game is now playable on Bitcoin Layer 1.</strong>
        </p>

        <div className="callout info">
          <div className="callout-title">DeFi Summer, Replayed on Bitcoin</div>
          <p style={{ marginBottom: 0 }}>
            If you missed DeFi Summer 2020, this is your second chance. The same yield farming
            mechanics that created generational wealth on Ethereum are now live on the most
            secure, slowest, highest-exit-friction chain in existence. The game is the same.
            The environment is better.
          </p>
        </div>

        <h2>The MasterChef Revolution (2020)</h2>
        <p>
          To understand MotoChef, you need to understand what happened in August 2020.
          Not just SushiSwap, <strong>everything that came after</strong>.
        </p>

        <h3>The Code That Changed Everything</h3>
        <p>
          The MasterChef contract is roughly 200 lines of Solidity. It does one thing: distribute
          tokens to stakers proportionally, based on configurable pool weights and emission rates.
          That's it.
        </p>
        <p>
          <strong>This simple contract became the most forked code in DeFi history.</strong>
        </p>
        <p>
          SushiSwap wrote it. Then the world copy-pasted it. Within weeks, there were dozens
          of forks. Within months, hundreds. Every single one attracted capital.
        </p>

        <MasterChefForkExplosion />

        <h3>Food Token Season</h3>
        <p>
          It started with SUSHI. Then came the deluge:
        </p>
        <ul>
          <li><strong>YAM</strong>: Launched August 11, 2020. $600M TVL in 24 hours.</li>
          <li><strong>PICKLE</strong>: MasterChef fork focused on stablecoin yields.</li>
          <li><strong>KIMCHI</strong>: Korean-themed fork. $500M TVL at peak.</li>
          <li><strong>SPAGHETTI</strong>: Yes, really. It had TVL too.</li>
          <li><strong>HOTDOG</strong>: Went from $4,000 to $0.004 in one day. People still farmed it.</li>
          <li><strong>PIZZA</strong>, <strong>BURGER</strong>, <strong>TACO</strong>...</li>
        </ul>
        <p>
          The memes wrote themselves. Crypto Twitter was posting yield farming screenshots
          like they were sports scores. "Just farmed 50,000 PICKLE." "My SUSHI is up 10x."
          "APY on YAM is 40,000%."
        </p>
        <p>
          <strong>This wasn't rational. It didn't need to be.</strong> The game theory worked
          regardless of whether the tokens had "real value." Early farmers made money. Late
          farmers became exit liquidity. The mechanics were pure.
        </p>

        <FoodTokenTimeline />

        <h3>The Numbers Were Insane</h3>
        <p>
          At the peak of Food Token Season:
        </p>
        <ul>
          <li><strong>$15+ billion</strong> in total DeFi TVL (up from $1B in June)</li>
          <li><strong>Hundreds</strong> of MasterChef forks deployed</li>
          <li><strong>Uniswap + SushiSwap</strong> alone held $5B+ combined TVL</li>
          <li><strong>Gas fees</strong> hit $100+ per transaction during peak farming</li>
          <li><strong>Every fork</strong>, even the obvious scams, attracted millions</li>
        </ul>
        <p>
          The SushiSwap vampire attack ($1.14B in 48 hours) was just the opening act. What
          followed was a months-long gold rush where anyone who could copy-paste a MasterChef
          contract could bootstrap millions in liquidity overnight.
        </p>

        <div className="callout info">
          <div className="callout-title">Why Did It Work?</div>
          <p style={{ marginBottom: 0 }}>
            MasterChef created a <strong>coordination mechanism</strong>. Farmers knew other
            farmers would come. TVL begets TVL. High APY attracts capital, which creates liquidity,
            which enables trading, which creates fees, which justifies the APY. Self-fulfilling
            reflexivity until it wasn't.
          </p>
        </div>

        <h3>The Legacy: A Template for DeFi</h3>
        <p>
          Food Token Season ended. Most farm tokens went to zero. But the MasterChef contract
          survived and became the standard template for liquidity incentives.
        </p>
        <p>
          Today, every major DeFi protocol uses MasterChef mechanics:
        </p>
        <ul>
          <li><strong>Curve</strong>: Gauge system is MasterChef with extra steps</li>
          <li><strong>PancakeSwap</strong>: Direct MasterChef fork on BSC</li>
          <li><strong>TraderJoe</strong>: MasterChef on Avalanche</li>
          <li><strong>Every L2</strong>: Running MasterChef forks for liquidity mining</li>
        </ul>
        <p>
          The contract that SushiSwap wrote became <strong>infrastructure</strong>. It's the
          standard way to bootstrap liquidity on any EVM chain. Billions of dollars have flowed
          through MasterChef forks.
        </p>

        <DeFiSummerTVLChart />

        <h2>Why MasterChef Changed Everything</h2>
        <p>
          Before MasterChef, bootstrapping liquidity was nearly impossible for new projects.
          You needed VCs, market makers, exchange listings. The barrier to entry was massive.
        </p>
        <p>
          MasterChef democratized liquidity:
        </p>
        <ol>
          <li><strong>Create a token</strong> with a fixed emission schedule</li>
          <li><strong>Deploy MasterChef</strong> pointing emissions at LP tokens</li>
          <li><strong>Announce the farm</strong> with a bonus period</li>
          <li><strong>Watch capital arrive</strong> as farmers chase APY</li>
        </ol>
        <p>
          Any anonymous developer could deploy a farm and have $10M TVL by morning. The cost?
          Token emissions. The benefit? Instant liquidity and market presence.
        </p>
        <p>
          This is why the <strong>copy-paste explosion happened</strong>. The code was simple.
          The mechanism was proven. And every fork attracted capital because farmers knew
          the game: get in early, farm hard, exit before the music stops.
        </p>

        <h2>The DeFi Summer Playbook</h2>
        <p>
          What successful DeFi Summer farmers understood:
        </p>

        <h3>1. Early Entry is Everything</h3>
        <p>
          MasterChef distributes tokens at a fixed rate per block. If you're 1 of 10 stakers,
          you get 10% of emissions. If you're 1 of 10,000, you get 0.01%. The first farmers in
          a pool capture disproportionate rewards before the crowd arrives.
        </p>

        <h3>2. Bonus Periods Create Urgency</h3>
        <p>
          Smart deployers launch with 5x or 10x emission multipliers for the first week.
          If you're not in during the bonus period, you're already
          behind. FOMO is a feature, not a bug.
        </p>

        <h3>3. LP Staking Compounds</h3>
        <p>
          You stake LP tokens, earn farm tokens, swap half for the paired token, add liquidity,
          stake the new LP, earn more tokens... The compounding creates exponential returns for
          active farmers during high-emission periods.
        </p>

        <h3>4. Exit Before the Crowd</h3>
        <p>
          Farm tokens have two purposes: governance (sometimes) and selling (always). When
          emissions end or sentiment shifts, everyone heads for the exit. The farmers who sold
          during the bonus period captured value. The farmers who "held for the long term"
          usually held bags to zero.
        </p>

        <YieldFarmingCycleDiagram />

        <h2>MotoChef: MasterChef on Bitcoin</h2>
        <p>
          MotoChef is a faithful port of the MasterChef contracts to Bitcoin via OP_NET. The
          mechanics are identical:
        </p>
        <ul>
          <li><strong>Yield per block:</strong> Fixed token emissions every Bitcoin block (~10 min)</li>
          <li><strong>Pool weights:</strong> Allocation points determine emission distribution</li>
          <li><strong>Bonus multipliers:</strong> Launch periods with amplified emissions</li>
          <li><strong>LP staking:</strong> Stake Motoswap LP tokens to earn farm tokens</li>
          <li><strong>Single-sided staking:</strong> Stake individual tokens for lower (but safer) yields</li>
          <li><strong>Harvest anytime:</strong> Claim accumulated rewards without unstaking</li>
        </ul>
        <p>
          But MotoChef adds something MasterChef never had: <strong>Proof of HODL</strong>.
        </p>
        <p>
          On Ethereum, you couldn't earn yield on ETH itself without wrapping or staking it
          somewhere custodial. MotoChef lets you stake native BTC while keeping it fully
          spendable in your wallet. The smart contract tracks your UTXO. As long as it
          exists, you earn rewards. This is genuinely novel.
        </p>

        <h2>What This Means for Bitcoin DeFi</h2>
        <p>
          The significance cannot be overstated:
        </p>

        <div className="callout tip">
          <div className="callout-title">The Full DeFi Summer Stack on Bitcoin L1</div>
          <p>
            Every game that created wealth in 2020 is now playable on Bitcoin:
          </p>
          <ul style={{ marginBottom: 0 }}>
            <li><strong>Token launches:</strong> Deploy OP-20 tokens with custom tokenomics</li>
            <li><strong>AMM liquidity:</strong> NativeSwap for BTC pairs, OP-20 pools for token pairs</li>
            <li><strong>Yield farming:</strong> MotoChef MasterChef-style farms with bonus periods</li>
            <li><strong>LP staking:</strong> Earn emissions on your liquidity positions</li>
            <li><strong>Fee sharing:</strong> MOTO staking for protocol revenue</li>
            <li><strong>BTC yield:</strong> Proof of HODL for non-custodial Bitcoin staking</li>
          </ul>
        </div>

        <p>
          The infrastructure for a Bitcoin DeFi Summer exists. The mechanics are proven.
          They worked in 2020. The environment is better. Bitcoin's 10-minute blocks create
          natural exit friction that sustains reflexive games longer.
        </p>

        <h2>The Opportunity Window</h2>
        <p>
          In August 2020, most people dismissed SushiSwap as a "scam fork" or "ponzi." They
          were technically correct, and completely wrong about the opportunity. The farmers
          who understood the game mechanics captured enormous value regardless of whether
          SushiSwap was "legitimate."
        </p>
        <p>
          We're at the same inflection point with Bitcoin DeFi. The infrastructure is live.
          The games are starting. Most people are skeptical or uninformed.
        </p>
        <p>
          History doesn't repeat, but it rhymes. The mechanics haven't changed. Only the chain.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', margin: '2rem 0' }}>
          <div style={{ textAlign: 'center' }}>
            <img
              src="/farm-overview-1.png"
              alt="MotoChef farm list showing active farms with TVL, rewards per block, and pool counts"
              style={{ maxWidth: '100%', borderRadius: '16px', border: '1px solid var(--border-color)' }}
            />
          </div>
          <div style={{ textAlign: 'center' }}>
            <img
              src="/farm-overview-2.png"
              alt="MotoChef individual farm showing staking pools, APYs, and TVL for each pool"
              style={{ maxWidth: '100%', borderRadius: '16px', border: '1px solid var(--border-color)' }}
            />
          </div>
        </div>

        <h2>How to Participate</h2>
        <p>
          MotoChef farms are accessible at <a href="https://motoswap.org/explore/farms" target="_blank" rel="noopener noreferrer">motoswap.org/explore/farms</a>.
        </p>
        <p>
          The following sections cover the specific mechanics in detail:
        </p>
        <ul>
          <li><strong>Proof of HODL:</strong> How to stake BTC without custody</li>
          <li><strong>MOTO Staking:</strong> How to earn swap fees</li>
          <li><strong>Yield Farming:</strong> How rewards are calculated</li>
          <li><strong>Farming Strategies:</strong> When to enter, when to exit, how to win</li>
        </ul>
      </>
    )
  },

  'proof-of-hodl': {
    title: 'Proof of HODL',
    prev: { slug: 'motochef', title: 'MotoChef (Yield Farming)' },
    next: { slug: 'moto-token', title: 'The $MOTO Token' },
    content: (
      <>
        <p>
          Proof of HODL is the
          first mechanism that lets you earn yield on your BTC without locking it, without
          delegating it, and without any custodial risk whatsoever.
        </p>

        <div className="callout info">
          <div className="callout-title">The Core Innovation</div>
          <p style={{ marginBottom: 0 }}>
            Your BTC stays in your wallet. You can spend it whenever you want.
            And you still earn rewards. No lock-ups. No slashing. No delegation.
          </p>
        </div>

        <h2>The $5 Billion Problem</h2>
        <p>
          Over 57,000 BTC (approximately $5 billion) sits locked in Babylon's staking
          protocol. Babylon dominates the "Bitcoin staking" narrative, but let's examine
          what it actually offers:
        </p>
        <ul>
          <li>Your BTC is time-locked for up to 15 months</li>
          <li>Early unbonding requires a 7-day waiting period plus approval from a "Covenant Committee"</li>
          <li>You delegate to a "Finality Provider" (third-party validator)</li>
          <li>If your validator misbehaves, your stake can be slashed</li>
          <li>Rewards are paid in BABY tokens (~1% APY), not Bitcoin</li>
        </ul>
        <p>
          Babylon calls this "self-custodial" because your BTC stays on the Bitcoin blockchain.
          Technically true. But practically? You've surrendered control. You can't spend
          your Bitcoin. You can't use it as collateral. You're trusting third parties.
        </p>
        <p>
          And your Bitcoin isn't actually <em>doing</em> anything. It's not providing
          liquidity, enabling trades, or collateralizing loans. It's sitting in time-locked
          UTXOs, generating "economic security" for PoS chains you've never used.
        </p>
        <p>
          That's not Bitcoin staking. <strong>That's Bitcoin parking.</strong>
        </p>

        <h2>How Proof of HODL Works</h2>
        <p>
          The core insight: treat Bitcoin UTXOs as <strong>proof of holdings</strong>,
          not locked collateral.
        </p>

        <ProofOfHODLComparison />

        <p>
          Here's the mechanism:
        </p>
        <ol>
          <li>
            <strong>Stake your BTC:</strong> You create a transaction that sends BTC to
            yourself. The MotoChef contract logs the hash of this UTXO as "tied" to your
            address.
          </li>
          <li>
            <strong>Your BTC stays in your wallet:</strong> It's not locked. Not time-locked.
            Not delegated. It's a standard UTXO that you control completely with your
            private keys.
          </li>
          <li>
            <strong>Earn rewards:</strong> As long as that UTXO exists (hasn't been spent),
            you accumulate yield from the farm.
          </li>
          <li>
            <strong>Claim rewards:</strong> When you harvest, the contract checks that your
            UTXO still exists. If it does, you receive your accumulated rewards.
          </li>
          <li>
            <strong>Automatic unstaking:</strong> If you spend that UTXO for any reason,
            you are instantly "unstaked." The UTXO no longer exists, so the contract knows
            you've moved your Bitcoin.
          </li>
        </ol>
        <p>
          That's it. No locking. No delegation. No Covenant Committee. No Finality Providers.
          No slashing risk. No unbonding periods.
        </p>
        <p>
          You simply prove you're holding Bitcoin, and you earn yield for as long as you
          continue holding it.
        </p>

        <h2>UTXOs as Unique Identifiers</h2>
        <p>
          The key conceptual insight is treating Bitcoin UTXOs like unique identifiers.
        </p>
        <p>
          Every Bitcoin transaction creates UTXOs (Unspent Transaction Outputs). Each UTXO
          has a unique identifier: a hash of the transaction that created it plus its
          position in that transaction's outputs. This hash is deterministic and publicly
          verifiable on the Bitcoin blockchain.
        </p>
        <p>
          When you "stake" via Proof of HODL, you're essentially minting a specific UTXO
          and registering its hash with the smart contract. The contract doesn't hold your
          Bitcoin. It just knows which UTXO to watch.
        </p>
        <p>
          As long as that UTXO exists (hasn't been spent), you're staked. The moment it's
          spent, you're unstaked. It's that simple.
        </p>

        <h2>The Optional Fee</h2>
        <p>
          Yield farms can charge a fee on Bitcoin staking. Here's how it works:
        </p>
        <p>
          When you stake 1 BTC with a 1% fee:
        </p>
        <ul>
          <li>The transaction creates a <strong>0.99 BTC UTXO</strong> that goes to you (your "staked" position)</li>
          <li>A <strong>0.01 BTC UTXO</strong> goes to the protocol treasury</li>
        </ul>
        <p>
          This is the only moment where any Bitcoin leaves your control. The 0.99 BTC
          stake remains fully in your custody. You can spend it whenever you want (which
          would unstake you). The 0.01 BTC fee is a one-time payment for access to the
          yield farm.
        </p>
        <p>
          This creates sustainable protocol revenue without introducing custodial risk
          for the principal stake.
        </p>

        <h2>Proof of HODL vs. Babylon</h2>

{/* Comparison already shown above */}

        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Babylon</th>
              <th>Proof of HODL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Custody</td>
              <td>Time-locked on Bitcoin; cannot spend until unbonding</td>
              <td>Fully spendable at any time</td>
            </tr>
            <tr>
              <td>Lock Period</td>
              <td>Up to 15 months; 7-day unbonding minimum</td>
              <td>None</td>
            </tr>
            <tr>
              <td>Slashing Risk</td>
              <td>Yes, if Finality Provider misbehaves</td>
              <td>None</td>
            </tr>
            <tr>
              <td>Delegation</td>
              <td>Required; must choose Finality Provider</td>
              <td>Not required</td>
            </tr>
            <tr>
              <td>Unstaking</td>
              <td>7-day unbonding + Covenant Committee approval</td>
              <td>Instant (just spend your UTXO)</td>
            </tr>
            <tr>
              <td>Rewards</td>
              <td>BABY tokens (~1% APY)</td>
              <td>Farm tokens (variable APY)</td>
            </tr>
            <tr>
              <td>What BTC Does</td>
              <td>Provides "economic security" to PoS chains</td>
              <td>Proves holdings for yield eligibility</td>
            </tr>
            <tr>
              <td>Third Parties</td>
              <td>Covenant Committee, Finality Providers</td>
              <td>None</td>
            </tr>
          </tbody>
        </table>

        <h2>Best Practices</h2>

        <h3>Use a Dedicated Wallet</h3>
        <p>
          Since spending your staked UTXO automatically unstakes you, use a wallet you
          won't accidentally transact from. Create a separate address specifically for
          Proof of HODL staking and fund it only with the amount you intend to stake.
        </p>

        <h3>Understand the UTXO Model</h3>
        <p>
          Your stake is tied to a <em>specific UTXO</em>, not to your address in general.
          If you receive additional Bitcoin to the same address after staking, those funds
          are not part of your stake. To stake more, you'd create an additional staking
          transaction.
        </p>

        <h3>Calculate the Fee Tradeoff</h3>
        <p>
          If a farm charges a 1% fee on BTC staking, you're paying that fee upfront in
          exchange for yield over time. Calculate whether the expected yield justifies
          the entry cost based on your planned staking duration.
        </p>

        <h2>When Proof of HODL Makes Sense</h2>
        <ul>
          <li>Long-term holders who want passive yield on Bitcoin they weren't planning to sell anyway</li>
          <li>Institutions with custody constraints that prevent participation in delegation-based staking</li>
          <li>Anyone who wants yield without giving up immediate liquidity access</li>
          <li>Users who want to participate in Bitcoin DeFi without trusting third-party validators or committees</li>
        </ul>

        <div className="callout tip">
          <div className="callout-title">The Philosophy</div>
          <p style={{ marginBottom: 0 }}>
            This is what "not your keys, not your coins" looks like in a yield-generating
            You hold your Bitcoin in your wallet, under your control, spendable
            at any moment, and you earn yield for holding it. The smart contract watches
            your UTXO. You keep your keys.
          </p>
        </div>
      </>
    )
  },

  'moto-token': {
    title: 'The $MOTO Token',
    prev: { slug: 'proof-of-hodl', title: 'Proof of HODL' },
    next: { slug: 'yield-farming', title: 'Yield Farming' },
    content: (
      <>
        <p>
          $MOTO is Motoswap's native token. It's not a governance token. <strong>It's a
          revenue-sharing token</strong>. When you stake MOTO, you earn a cut of every
          single swap that happens on the platform. That's the point.
        </p>

        <div className="callout info">
          <div className="callout-title">Why $MOTO Exists</div>
          <p style={{ marginBottom: 0 }}>
            MOTO aligns incentives. Stakers want more trading volume because more volume =
            more fees. They become evangelists for the platform. The protocol distributes
            value to its most committed users instead of extracting it.
          </p>
        </div>

        <h2>The Revenue Model</h2>
        <p>
          Every swap on Motoswap generates fees. Here's exactly where those fees go:
        </p>

        <h3>OP-20 Swaps (Token ↔ Token)</h3>
        <table>
          <thead>
            <tr>
              <th>Fee</th>
              <th>Recipient</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0.3%</td>
              <td>Liquidity Providers</td>
              <td>Incentivize LP provision (same as Uniswap)</td>
            </tr>
            <tr>
              <td>0.2%</td>
              <td>MOTO Staking Pool</td>
              <td>Distributed to MOTO stakers</td>
            </tr>
          </tbody>
        </table>

        <h3>NativeSwap Swaps (BTC ↔ Token)</h3>
        <table>
          <thead>
            <tr>
              <th>Fee</th>
              <th>Recipient</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0.2%</td>
              <td>MOTO Staking Pool</td>
              <td>Distributed to MOTO stakers</td>
            </tr>
          </tbody>
        </table>

        <p>
          <strong>This means MOTO stakers earn fees from literally every trade on Motoswap:</strong>
          both OP-20 pools and NativeSwap pools. The more trading activity on the platform,
          the more rewards flow to stakers.
        </p>

        <MOTOFeeFlowDiagram />

        <h2>How MOTO Staking Works</h2>
        <p>
          When you stake MOTO, you receive a proportional share of all accumulated fees:
        </p>
        <pre><code>Your share = Your staked MOTO ÷ Total staked MOTO</code></pre>
        <p>
          Rewards can include <strong>any token traded on the platform</strong>. If someone
          swaps PILL for WBTC, the 0.2% fee is taken from the swap. Over time, stakers
          accumulate a diversified basket of whatever tokens are actively trading.
        </p>

        <h2>The Slashing Mechanism (Critical to Understand)</h2>
        <p>
          MOTO staking has a slashing penalty designed to prevent mercenary capital from
          gaming the system. <strong>This is the most important thing to understand before
          staking.</strong>
        </p>

{/* Slashing mechanism explained in text and tables below */}

        <h3>The Rules</h3>
        <ul>
          <li>When you stake MOTO, a <strong>2,000 block timer</strong> (~14 days) starts</li>
          <li>If you unstake before 2,000 blocks, you pay a penalty on your staked MOTO</li>
          <li>Penalty starts at <strong>20%</strong> and decreases by 1% every 100 blocks</li>
          <li>After 2,000 blocks with no claims, the penalty reaches 0%</li>
        </ul>

        <div className="callout warning">
          <div className="callout-title">Critical: Claiming Resets the Timer</div>
          <p style={{ marginBottom: 0 }}>
            <strong>Every time you claim rewards, your 2,000 block timer resets to zero.</strong>
            This is intentional. If you claim at block 1,900, your penalty
            goes back to 20%. You must wait another 2,000 blocks to reach 0% penalty again.
          </p>
        </div>

        <h3>Why the Timer Resets on Claims</h3>
        <p>
          This mechanism prevents a simple exploit:
        </p>
        <ol>
          <li>Stake MOTO</li>
          <li>Wait 2,000 blocks to reach 0% penalty</li>
          <li>Claim rewards daily forever with no penalty risk</li>
          <li>Unstake the moment something looks bad</li>
        </ol>
        <p>
          Without the reset, stakers could farm rewards indefinitely while maintaining
          an instant exit option. The timer reset ensures that <strong>every claim is
          a commitment to stay for another ~2 weeks</strong>. This aligns staker incentives
          with protocol health.
        </p>

        <h3>Penalty Schedule</h3>
        <table>
          <thead>
            <tr>
              <th>Blocks Since Last Stake/Claim</th>
              <th>Approximate Time</th>
              <th>Unstaking Penalty</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0</td>
              <td>Just staked/claimed</td>
              <td>20%</td>
            </tr>
            <tr>
              <td>500</td>
              <td>~3.5 days</td>
              <td>15%</td>
            </tr>
            <tr>
              <td>1,000</td>
              <td>~7 days</td>
              <td>10%</td>
            </tr>
            <tr>
              <td>1,500</td>
              <td>~10.5 days</td>
              <td>5%</td>
            </tr>
            <tr>
              <td>2,000+</td>
              <td>~14+ days</td>
              <td>0%</td>
            </tr>
          </tbody>
        </table>

        <h3>Where Slashed Tokens Go</h3>
        <p>
          Slashed tokens are <strong>redistributed to the reward pool</strong>. Early
          unstakers subsidize patient stakers. This creates a positive feedback loop
          for long-term commitment.
        </p>

        <h2>Staking Strategies</h2>

        <h3>The "Set and Forget" Approach</h3>
        <p>
          Stake MOTO and don't claim for extended periods. Let rewards accumulate.
          Only claim when you actually need the tokens. This minimizes timer resets
          and maximizes your flexibility to exit at 0% penalty.
        </p>
        <p>
          <strong>Best for:</strong> Long-term believers who don't need regular income
        </p>

        <h3>The "Regular Income" Approach</h3>
        <p>
          Claim rewards on a regular schedule (weekly, monthly). Accept that each claim
          resets your timer. Plan to never unstake. Treat MOTO staking as a permanent
          position.
        </p>
        <p>
          <strong>Best for:</strong> Users who want passive income and have no intention of unstaking
        </p>

        <h3>The "Batch Claim" Approach</h3>
        <p>
          Wait until rewards are substantial, then claim and immediately restake or sell.
          Time your claims to maximize value per timer reset.
        </p>
        <p>
          <strong>Best for:</strong> Active managers who want to optimize
        </p>

        <h2>Step-by-Step: Staking MOTO</h2>
        <ol>
          <li>Go to <a href="https://motoswap.org/stake" target="_blank" rel="noopener noreferrer">motoswap.org/stake</a></li>
          <li>Connect your OP_WALLET</li>
          <li>Enter the amount of MOTO to stake</li>
          <li><strong>First time only:</strong> Approve MOTO spending (separate transaction)</li>
          <li>Confirm the stake transaction</li>
          <li>Wait for confirmation (~10 min)</li>
          <li>Your 2,000 block timer begins</li>
        </ol>

        <h2>Step-by-Step: Claiming Rewards</h2>
        <ol>
          <li>Navigate to the Stake page</li>
          <li>View your pending rewards (may include multiple tokens)</li>
          <li><strong>Remember: claiming resets your penalty timer to 20%</strong></li>
          <li>Click "Claim Rewards"</li>
          <li>Confirm the transaction</li>
          <li>Rewards are sent to your wallet</li>
        </ol>

        <h2>Step-by-Step: Unstaking</h2>
        <ol>
          <li>Navigate to the Stake page</li>
          <li>Switch to the "Unstake" tab</li>
          <li><strong>Check the displayed penalty percentage</strong></li>
          <li>Decide if the penalty is acceptable</li>
          <li>Click "Unstake MOTO"</li>
          <li>Review the warning and penalty amount</li>
          <li>Confirm the transaction</li>
          <li>MOTO (minus penalty) returns to your wallet</li>
        </ol>

        <div className="callout tip">
          <div className="callout-title">The Bottom Line</div>
          <p style={{ marginBottom: 0 }}>
            MOTO staking is designed for committed holders, not traders. The slashing
            mechanism with timer resets ensures that stakers are genuinely aligned with
            protocol success. If you're planning to stake, think in terms of months or
            years, not days or weeks.
          </p>
        </div>

        <h2>When to Stake MOTO</h2>
        <ul>
          <li>You believe Motoswap trading volume will grow</li>
          <li>You want exposure to every token traded on the platform</li>
          <li>You can commit capital for extended periods</li>
          <li>You understand and accept the slashing/timer mechanics</li>
        </ul>

        <h3>When Not to Stake</h3>
        <ul>
          <li>You might need the MOTO for trading in the next 2 weeks</li>
          <li>You're uncertain about MOTO's direction and want flexibility</li>
          <li>The swap volume on Motoswap is very low (fewer fees to earn)</li>
        </ul>
      </>
    )
  },

  // ─────────────────────────────────────────────────────────────────────────
  // PLAYING THE GAMES
  // ─────────────────────────────────────────────────────────────────────────
  'yield-farming': {
    title: 'Yield Farming',
    prev: { slug: 'moto-token', title: 'The $MOTO Token' },
    next: { slug: 'farming-strategies', title: 'Farming Strategies' },
    content: (
      <>
        <p>
          Yield farming is the core game of DeFi. Understanding how it works mechanically,
          economically, and strategically is essential for success.
        </p>

        <h2>What Yield Farming Actually Is</h2>
        <p>
          Strip away the jargon and yield farming is simple: <strong>token deployers pay
          people to provide capital</strong>.
        </p>
        <p>
          A new token launches. It needs liquidity to be tradeable. Without liquidity,
          nobody can buy or sell at reasonable prices. So the deployer creates a yield farm:
          "Deposit your assets here, and we'll pay you in our token."
        </p>
        <p>
          The payment comes from <strong>token emissions</strong>: new tokens minted and
          distributed to farmers according to rules set by the deployer. This is the same
          model that powered Sushiswap, Yearn, and essentially every DeFi protocol from
          2020-2021.
        </p>
        <p>
          MotoChef is a direct fork of Sushiswap's MasterChef contracts, adapted for Bitcoin.
          The mechanics are identical to what worked in DeFi Summer.
        </p>

        <h2>The Reward Math</h2>
        <p>
          Understanding how rewards are calculated helps you make better decisions.
        </p>

        <RewardFlowDiagram />

        <h3>Yield Per Block</h3>
        <p>
          Every farm has a <strong>yield per block</strong> setting: the total number of
          tokens distributed each Bitcoin block across all pools. With ~144 blocks per day,
          you can calculate daily emissions:
        </p>
        <pre><code>Daily emissions = Yield per block × 144</code></pre>

        <h3>Pool Weights (Allocation Points)</h3>
        <p>
          Each pool in a farm has a <strong>weight</strong> that determines its share of
          emissions. If the total weight across all pools is 1000, and a pool has weight 200,
          that pool receives 20% of emissions.
        </p>
        <pre><code>Pool share = Pool weight ÷ Total weight of all pools</code></pre>

        <h3>Your Share</h3>
        <p>
          Within a pool, your share of rewards depends on your stake relative to total TVL:
        </p>
        <pre><code>Your rewards = (Your stake ÷ Pool TVL) × Pool emissions</code></pre>

        <h3>Putting It Together</h3>
        <p>
          Example farm:
        </p>
        <ul>
          <li>Yield per block: 100,000 tokens</li>
          <li>BTC Pool weight: 100 (out of total 500)</li>
          <li>Pool TVL: 10 BTC</li>
          <li>Your stake: 0.5 BTC</li>
        </ul>
        <p>
          Your daily rewards:
        </p>
        <pre><code>
Pool daily emissions = 100,000 × 144 × (100/500) = 2,880,000 tokens
Your share = 0.5 / 10 = 5%
Your daily rewards = 2,880,000 × 5% = 144,000 tokens
        </code></pre>
        <p>
          <strong>Important:</strong> As more people stake, TVL increases, and your share
          decreases. The APY you see when a pool is empty is not the APY you'll get once
          it fills up.
        </p>

        <h2>Pool Types in MotoChef</h2>

        <h3>Bitcoin Pool (Proof of HODL)</h3>
        <p>
          Stake BTC without giving up custody. Your Bitcoin stays in your wallet as a
          tracked UTXO. No lock-up, no slashing risk.
        </p>
        <p>
          May include a fee (typically 1%) charged when you stake, going to the farm deployer.
        </p>

        <h3>Yield Token Pool</h3>
        <p>
          Stake the farm's yield token to earn more of the same token. This allows compounding
          (you stake your rewards to earn more rewards).
        </p>

        <h3>Single-Sided Token Pools</h3>
        <p>
          Stake a single token (MOTO, PILL, etc.) to earn yield. No impermanent loss since
          you're only exposed to one asset.
        </p>

        <h3>LP Token Pools</h3>
        <p>
          Stake liquidity provider tokens from Motoswap pools. These typically have the
          <strong> highest weights</strong> because the whole point is to bootstrap liquidity.
        </p>
        <p>
          LP pools expose you to impermanent loss on the underlying position, but often
          offer 2-3x the rewards of single-sided pools to compensate.
        </p>

        <h2>The Bonus Period</h2>
        <p>
          Most farms launch with a <strong>bonus multiplier</strong>: a period where
          emissions are 2x, 5x, or even higher than normal.
        </p>
        <p>
          The bonus period solves the chicken-and-egg problem: nobody wants to be the first
          depositor in an empty farm. The bonus makes early entry disproportionately rewarding,
          creating genuine urgency.
        </p>
        <p>
          Example:
        </p>
        <ul>
          <li>Normal: 100,000 tokens/block</li>
          <li>5x bonus: 500,000 tokens/block</li>
          <li>During bonus, you earn 5x normal rewards</li>
          <li>But emissions are also consumed 5x faster</li>
        </ul>
        <p>
          The bonus period is <strong>the most important time to be in a farm</strong>.
          Missing it can mean the difference between 10x returns and breakeven.
        </p>

        <h2>Staking, Harvesting, and Unstaking</h2>

        <h3>Staking</h3>
        <ol>
          <li>Go to <a href="https://motoswap.org/explore/farms" target="_blank" rel="noopener noreferrer">motoswap.org/explore/farms</a></li>
          <li>Select a farm</li>
          <li>Choose a pool (dish) within the farm</li>
          <li>Enter the amount to stake</li>
          <li>Confirm the transaction</li>
          <li>Start earning rewards immediately</li>
        </ol>

        <h3>Harvesting</h3>
        <p>
          Harvesting claims your accumulated rewards without withdrawing your stake.
          Your tokens stay in the pool earning more.
        </p>
        <ol>
          <li>Navigate to your staking position</li>
          <li>View pending rewards</li>
          <li>Click Harvest</li>
          <li>Confirm the transaction</li>
          <li>Rewards go to your wallet; stake remains</li>
        </ol>

        <h3>Unstaking</h3>
        <p>
          Unstaking withdraws your tokens from the pool. This also claims any pending
          rewards in the same transaction.
        </p>
        <ol>
          <li>Navigate to your staking position</li>
          <li>Click Unstake</li>
          <li>Enter amount (or use Max)</li>
          <li>Confirm the transaction</li>
          <li>Tokens + pending rewards return to your wallet</li>
        </ol>

        <div className="callout info">
          <div className="callout-title">No Lock-Up (Usually)</div>
          <p style={{ marginBottom: 0 }}>
            Unlike MOTO staking, yield farm positions typically have no unstaking penalty.
            You can exit anytime. Exception: BTC pools where rewards are forfeited if you
            spend your staked UTXO.
          </p>
        </div>
      </>
    )
  },

  'farming-strategies': {
    title: 'Farming Strategies',
    prev: { slug: 'yield-farming', title: 'Yield Farming' },
    next: { slug: 'deploying-tokens', title: 'Deploying Tokens' },
    content: (
      <>
        <p>
          Deploying a farm is one thing. Playing yield farms profitably is a different
          skill entirely. This section covers the strategies that separate successful
          farmers from exit liquidity.
        </p>

        <h2>Timing Your Entry</h2>

        <EntryTimingDiagram />

        <h3>The Bonus Period is Everything</h3>
        <p>
          When a farm launches with a 5x multiplier, being in that first week can determine
          your entire outcome.
        </p>
        <p>
          Here's the math: If a farm emits 100,000 tokens per block normally, it emits
          500,000 during a 5x bonus. If you're one of the early depositors with 10% of
          the pool, you're earning 50,000 tokens per block instead of 10,000.
        </p>
        <p>
          But it's even better than that. Early in the bonus period, TVL is low. You might
          have 30-40% of the pool instead of 10%. The combination of high emissions + high
          pool share creates exponential returns.
        </p>

        <h3>The Ideal Entry</h3>
        <ul>
          <li>Block 1 of a bonus period</li>
          <li>Low TVL (you're early)</li>
          <li>High emissions (bonus multiplier active)</li>
        </ul>
        <p>
          This is the sweet spot. You capture the fattest part of the emission curve.
        </p>

        <h3>The Trap</h3>
        <ul>
          <li>Entering after bonus period ends</li>
          <li>High TVL (many farmers already in)</li>
          <li>Normal emissions (no multiplier)</li>
        </ul>
        <p>
          By this point, early farmers have already captured most of the value. You're
          competing for scraps.
        </p>

        <div className="callout tip">
          <div className="callout-title">Watch for Launches</div>
          <p style={{ marginBottom: 0 }}>
            Follow farm announcements. Know when launches are happening. Have your capital
            ready. The difference between entering at block 1 vs block 1,000 can be 10x+
            in total returns.
          </p>
        </div>

        <h2>LP Staking vs. Single-Sided</h2>
        <p>
          This is the most important decision you'll make for each farm.
        </p>

        <LPvsSingleSidedDiagram />

        <h3>LP Staking</h3>
        <p>
          <strong>Pros:</strong>
        </p>
        <ul>
          <li>Higher reward weights (often 2-3x single-sided)</li>
          <li>Earn swap fees on top of farming rewards</li>
          <li>Most aligned with what deployers want (liquidity)</li>
        </ul>
        <p>
          <strong>Cons:</strong>
        </p>
        <ul>
          <li>Impermanent loss if token prices diverge</li>
          <li>More complex (need to provide both tokens)</li>
          <li>Two transactions to enter (add liquidity, then stake LP)</li>
        </ul>

        <h3>Single-Sided Staking</h3>
        <p>
          <strong>Pros:</strong>
        </p>
        <ul>
          <li>No impermanent loss</li>
          <li>Simple (just stake one token)</li>
          <li>Better if you're ultra-bullish on one asset</li>
        </ul>
        <p>
          <strong>Cons:</strong>
        </p>
        <ul>
          <li>Lower reward weights</li>
          <li>No additional swap fees</li>
        </ul>

        <h3>Decision Framework</h3>
        <p>
          <strong>LP when:</strong>
        </p>
        <ul>
          <li>You believe both tokens will move roughly together</li>
          <li>The APY differential vs single-sided is massive (3x+)</li>
          <li>You're farming during bonus period (rewards outpace likely IL)</li>
          <li>You're using stablecoin pairs or correlated assets</li>
        </ul>
        <p>
          <strong>Single-sided when:</strong>
        </p>
        <ul>
          <li>You're ultra-bullish on one token</li>
          <li>You expect extreme price divergence</li>
          <li>The APY difference isn't worth the IL risk</li>
          <li>You want simplicity</li>
        </ul>

        <h3>The Advanced Move</h3>
        <p>
          LP during bonus periods when APY is insane, then migrate to single-sided after
          the bonus ends if you're bullish on the farm token. Capture the high-emission
          period with maximum rewards, then reduce IL exposure once the math changes.
        </p>

        <h2>Compounding</h2>
        <p>
          Compounding means harvesting your rewards and re-staking them to earn more.
          In theory, more frequent compounding = higher effective APY.
        </p>
        <p>
          In practice, on Bitcoin, you need to factor in transaction fees.
        </p>

        <h3>Guidelines</h3>
        <ul>
          <li><strong>Big positions:</strong> Compound more frequently. The fee is a smaller % of your rewards.</li>
          <li><strong>Small positions:</strong> Compound less frequently. Let rewards accumulate before paying the fee.</li>
          <li><strong>High APY periods:</strong> Compound more. Opportunity cost of unstaked rewards is higher.</li>
          <li><strong>Low APY periods:</strong> Compound less. Fees eat into marginal gains.</li>
        </ul>

        <h3>LP Compounding</h3>
        <p>
          Compounding LP is more complex:
        </p>
        <ol>
          <li>Harvest rewards (1 tx)</li>
          <li>Swap half for the paired token (1 tx)</li>
          <li>Add liquidity (1 tx)</li>
          <li>Stake new LP tokens (1 tx)</li>
        </ol>
        <p>
          That's 4 transactions. Only worth it for large positions during high-yield periods.
        </p>

        <h3>Single-Sided Compounding</h3>
        <p>
          Much simpler:
        </p>
        <ol>
          <li>Harvest rewards (1 tx)</li>
          <li>Stake rewards (1 tx)</li>
        </ol>
        <p>
          This is why single-sided is often better for smaller farmers. The compounding
          friction is lower.
        </p>

        <CompoundingFlowDiagram />

        <h2>When to Exit</h2>
        <p>
          This is where most people get rekt. They farm successfully, accumulate a bag,
          and then watch it go to zero because they never took profit.
        </p>

        <h3>The Hard Truth</h3>
        <p>
          Most farm tokens trend toward zero over time. The emissions that made you money
          are the same emissions that dilute the supply. Unless the protocol generates real
          revenue or utility, it's musical chairs.
        </p>

        <h3>Exit Signals</h3>
        <ul>
          <li><strong>Bonus period ending:</strong> Many farmers exit when the bonus drops. This creates sell pressure. Consider exiting before they do.</li>
          <li><strong>TVL dropping:</strong> If TVL is declining while emissions continue, remaining farmers get bigger shares, but it signals fading confidence.</li>
          <li><strong>Token price declining faster than you're earning:</strong> Run the real math. If APY is 100% but token is down 60% this week, you're losing money.</li>
          <li><strong>Emissions nearing end:</strong> When the farm's token allocation is almost depleted, there's often a rush for exits.</li>
        </ul>

        <h3>Taking Profits</h3>
        <p>
          The farmers who consistently make money treat it like a business:
        </p>
        <ul>
          <li>Harvest and sell a portion of rewards regularly</li>
          <li>Don't wait to "see how high it goes"</li>
          <li>Convert some to BTC or stables</li>
          <li>Lock in gains, don't let them evaporate</li>
        </ul>

        <div className="callout warning">
          <div className="callout-title">The Mental Game</div>
          <p style={{ marginBottom: 0 }}>
            Yield farming is psychologically brutal. 50,000% APY. 10,000% APY. Your brain
            screams "free money." Remember: APY is based on current TVL (it drops as people
            enter), and APY is denominated in the farm token (if it drops 80%, your 100% APY
            is actually a loss). Run the real math, not the fantasy.
          </p>
        </div>

        <h2>Evaluating Farms Before Entry</h2>
        <p>
          Before aping into any farm, ask:
        </p>
        <ul>
          <li><strong>What are the pool weights?</strong> LP should be highest. If single-sided = LP weight, deployer doesn't understand incentives.</li>
          <li><strong>How long is emission period?</strong> 30 days of intense emissions vs 365 days of slow drip = very different games.</li>
          <li><strong>Is there a bonus period?</strong> How long and how much?</li>
          <li><strong>What % of supply goes to farming?</strong> If team pre-minted 50% and only 10% goes to farms, you're competing for scraps while they dump.</li>
          <li><strong>What's the token's utility?</strong> Pure farm tokens with no utility = pure ponzi. Eventually emissions end.</li>
          <li><strong>What's the initial market cap?</strong> Lower = more room to grow but more volatile.</li>
        </ul>
      </>
    )
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CREATING THE GAMES
  // ─────────────────────────────────────────────────────────────────────────
  'deploying-tokens': {
    title: 'Deploying Tokens',
    prev: { slug: 'farming-strategies', title: 'Farming Strategies' },
    next: { slug: 'deploying-farms', title: 'Deploying Yield Farms' },
    content: (
      <>
        <p>
          If you want to create a DeFi game on Bitcoin, it starts with deploying a token.
          The Motoswap Launchpad offers two different paths depending on what you're building.
        </p>

        <h2>Two Types of Tokens</h2>
        <p>
          Before you touch any deployment interface, you need to understand the fundamental
          choice: <strong>what kind of game are you creating?</strong>
        </p>

        <TokenDeploymentDecisionDiagram />

        <div className="callout info">
          <div className="callout-title">The Core Question</div>
          <p style={{ marginBottom: 0 }}>
            Are you trying to bootstrap liquidity and create a DeFi game? Or are you creating
            a token for a different purpose (community, utility, meme)? The answer determines
            which deployment path you take.
          </p>
        </div>

        <h2>The OP-20 Advantage: Multiple Acquisition Paths</h2>
        <p>
          Unlike BRC-20/Runes tokens where users can only free mint or buy on PSBT marketplaces,
          OP-20 tokens on the Motoswap Launchpad give you <strong>multiple ways to distribute
          tokens</strong>:
        </p>
        <table>
          <thead>
            <tr>
              <th>Method</th>
              <th>How Users Get Tokens</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Free Mint</strong></td>
              <td>Pay BTC gas fee, mint tokens (Bitcoin culture favorite)</td>
            </tr>
            <tr>
              <td><strong>Buy with BTC</strong></td>
              <td>Swap native Bitcoin via NativeSwap</td>
            </tr>
            <tr>
              <td><strong>Buy with OP-20</strong></td>
              <td>Swap MOTO or other tokens via AMM pools</td>
            </tr>
            <tr>
              <td><strong>LP Mining</strong></td>
              <td>Provide liquidity, stake LP tokens, earn rewards</td>
            </tr>
            <tr>
              <td><strong>Single-Sided Staking</strong></td>
              <td>Stake other tokens to earn your token</td>
            </tr>
            <tr>
              <td><strong>Proof of HODL</strong></td>
              <td>Stake BTC without custody, earn tokens</td>
            </tr>
          </tbody>
        </table>
        <p>
          This flexibility lets you design distribution that fits your goals and creates
          multiple entry points for different types of users.
        </p>

        <h3>Option 1: Yield-Bearing Token (Token + Farm)</h3>
        <p>
          This is for creating the full DeFi game. You deploy a token <strong>and</strong>
          a yield farm together. The farm distributes your token as rewards to attract
          liquidity providers.
        </p>
        <p>
          <strong>Why this exists:</strong> New tokens have a chicken-and-egg problem. Nobody
          will provide liquidity for a token nobody owns. Nobody will buy a token with no
          liquidity. Yield farming solves this: you pay people (in tokens) to provide
          the liquidity that makes your token tradeable.
        </p>
        <p>
          <strong>Use when:</strong>
        </p>
        <ul>
          <li>You want to bootstrap liquidity for trading</li>
          <li>You're creating a DeFi game with emissions and farming</li>
          <li>You want to attract TVL to your protocol</li>
          <li>You're running a full MasterChef-style yield farm</li>
        </ul>

        <h3>Option 2: Simple OP-20 Token</h3>
        <p>
          This is a basic token deployment without a yield farm attached. You control the
          distribution yourself through pre-mint and optional free mint.
        </p>
        <p>
          <strong>Why this exists:</strong> Not every token needs yield farming. Sometimes
          you just need a token for a specific purpose: a community token, a utility token,
          a meme, or a token where you'll handle distribution differently.
        </p>
        <p>
          <strong>Use when:</strong>
        </p>
        <ul>
          <li>You're creating a utility token for an existing project</li>
          <li>You want community distribution via free mint (Bitcoin culture loves free mints)</li>
          <li>You have your own distribution mechanism planned</li>
          <li>You're creating a meme token and want organic price discovery</li>
        </ul>

        <h2>Supply Planning: The WHY Behind the Numbers</h2>

        <TokenSupplyDiagram />

        <p>
          Token parameters are <strong>permanent</strong>. You cannot change them after
          deployment. Understanding why each parameter exists helps you make better decisions.
        </p>

        <h3>Total Supply</h3>
        <p>
          The maximum number of tokens that can ever exist. This number is psychological
          as much as technical. It affects how people perceive your token.
        </p>
        <p>
          <strong>Why it matters:</strong>
        </p>
        <ul>
          <li><strong>For yield-bearing tokens:</strong> Total supply = farm emissions + pre-mint + free mint. The majority (80-95%) typically goes to farming.</li>
          <li><strong>For simple tokens:</strong> Total supply = pre-mint + free mint. You control everything.</li>
        </ul>
        <p>
          <strong>Psychology:</strong> A token with 1 billion supply trading at $0.0001 feels
          different than 1 million supply trading at $0.10, even if the market cap is identical.
          Consider your target audience.
        </p>

        <h3>Pre-Mint</h3>
        <p>
          Tokens minted immediately at deployment, sent to your wallet.
        </p>
        <p>
          <strong>Why it matters:</strong>
        </p>
        <ul>
          <li><strong>For yield-bearing tokens:</strong> You need pre-mint to seed the initial liquidity pool. Without liquidity, nobody can trade. Typical: 2-10% of supply.</li>
          <li><strong>For simple tokens:</strong> This is your main distribution method if you're not using free mint. Could be 100% of supply if you want full control.</li>
        </ul>

        <div className="callout warning">
          <div className="callout-title">The Pre-Mint Trust Problem</div>
          <p style={{ marginBottom: 0 }}>
            High pre-mint screams "rug pull" to experienced farmers. If you pre-mint 50%,
            people assume you're planning to dump on them. Keep it low (2-10%) for yield
            farms. For simple tokens where you're the known distribution mechanism, higher
            pre-mint is acceptable if your plan is transparent.
          </p>
        </div>

        <h3>Free Mint</h3>
        <p>
          Allow users to mint tokens permissionlessly, up to a cap.
        </p>
        <p>
          <strong>Why it matters:</strong> Free mints are deeply embedded in Bitcoin culture
          (BRC-20, Ordinals, Runes). They create:
        </p>
        <ul>
          <li><strong>Community engagement:</strong> People who mint feel ownership</li>
          <li><strong>Distribution:</strong> Tokens spread to many wallets organically</li>
          <li><strong>Buzz:</strong> "Free mint" attracts attention</li>
        </ul>
        <p>
          <strong>Free Mint Parameters:</strong>
        </p>
        <ul>
          <li><strong>Free Mint Supply:</strong> Total cap across all minters. Once depleted, no more free mints.</li>
          <li><strong>Free Mint Per Transaction:</strong> Maximum per mint action. Lower = more minters, wider distribution. Higher = faster depletion, fewer holders.</li>
        </ul>

        <h3>Farm Allocation (Yield-Bearing Tokens Only)</h3>
        <p>
          The remaining supply after pre-mint and free mint goes to yield farm emissions.
          This is typically the vast majority (80-95% of total supply).
        </p>
        <p>
          <strong>Why it matters:</strong> This is what you're paying people to provide
          liquidity. More allocation = longer farm duration or higher APY. Less allocation
          = shorter farm or lower APY.
        </p>

        <h2>Example Distributions</h2>

        <h3>Yield-Bearing Token (DeFi Game)</h3>
        <table>
          <thead>
            <tr>
              <th>Allocation</th>
              <th>Amount</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Total Supply</td>
              <td>1,000,000,000</td>
              <td>Max tokens ever</td>
            </tr>
            <tr>
              <td>Pre-mint</td>
              <td>50,000,000 (5%)</td>
              <td>Seed NativeSwap + OP-20 pools</td>
            </tr>
            <tr>
              <td>Free mint</td>
              <td>10,000,000 (1%)</td>
              <td>Community buzz, wide distribution</td>
            </tr>
            <tr>
              <td>Farm emissions</td>
              <td>940,000,000 (94%)</td>
              <td>Yield farming rewards</td>
            </tr>
          </tbody>
        </table>
        <p>
          <strong>Logic:</strong> Minimal pre-mint builds trust. Small free mint creates
          community without diluting farm rewards. Massive farm allocation means long
          emission duration or high APY to attract liquidity.
        </p>

        <h3>Simple Token (Community/Meme)</h3>
        <table>
          <thead>
            <tr>
              <th>Allocation</th>
              <th>Amount</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Total Supply</td>
              <td>21,000,000</td>
              <td>Bitcoin vibes</td>
            </tr>
            <tr>
              <td>Pre-mint</td>
              <td>2,100,000 (10%)</td>
              <td>Team allocation, liquidity seeding</td>
            </tr>
            <tr>
              <td>Free mint</td>
              <td>18,900,000 (90%)</td>
              <td>Community distribution</td>
            </tr>
          </tbody>
        </table>
        <p>
          <strong>Logic:</strong> Small pre-mint for team/liquidity. Majority goes to free
          mint for maximum distribution. No farm because distribution IS the game. People
          race to mint, creating organic demand.
        </p>

        <h3>Utility Token (Specific Project)</h3>
        <table>
          <thead>
            <tr>
              <th>Allocation</th>
              <th>Amount</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Total Supply</td>
              <td>100,000,000</td>
              <td>Fixed supply</td>
            </tr>
            <tr>
              <td>Pre-mint</td>
              <td>100,000,000 (100%)</td>
              <td>All tokens to deployer</td>
            </tr>
            <tr>
              <td>Free mint</td>
              <td>0</td>
              <td>Disabled</td>
            </tr>
          </tbody>
        </table>
        <p>
          <strong>Logic:</strong> Full control. You distribute through your own mechanisms
          (airdrops, rewards in your app, sales, etc). No randomness from free mint.
        </p>

        <h2>Token Parameters</h2>

        <h3>Token Name</h3>
        <p>
          The full display name (e.g., "Orange Pill"). Users see this in interfaces.
        </p>

        <h3>Token Symbol</h3>
        <p>
          The ticker (e.g., "PILL"). Keep it 3-5 characters. Check that it doesn't
          conflict with existing tokens on OP_NET.
        </p>

        <h3>Decimals</h3>
        <p>
          How divisible the token is. <strong>18 decimals is standard</strong> (same as ETH).
          This determines the smallest tradeable unit.
        </p>
        <p>
          <strong>Never change this unless you have a specific reason.</strong> Non-standard
          decimals can cause integration issues.
        </p>

        <h2>Deploying a Simple OP-20 Token</h2>

        <ImagePlaceholder
          type="screenshot"
          description="Simple token deployment interface: name, symbol, supply, pre-mint, free mint options"
          aspectRatio="16/9"
        />

        <ol>
          <li>Go to <a href="https://motoswap.org/deploy/token" target="_blank" rel="noopener noreferrer">motoswap.org/deploy/token</a></li>
          <li>Connect your OP_WALLET</li>
          <li>Enter Token Name and Symbol</li>
          <li>Set Total Supply (this is permanent)</li>
          <li>Set Decimals (use 18 unless you have a reason not to)</li>
          <li>Configure Pre-mint:
            <ul>
              <li>Pre-mint Address (defaults to your wallet)</li>
              <li>Pre-mint Amount</li>
            </ul>
          </li>
          <li>Configure Free Mint (if desired):
            <ul>
              <li>Toggle "Free Mint Enabled"</li>
              <li>Set Free Mint Supply cap</li>
              <li>Set Free Mint Per Transaction limit</li>
            </ul>
          </li>
          <li>Review everything. <strong>Parameters are permanent.</strong></li>
          <li>Click Deploy and confirm in your wallet</li>
          <li>Wait for Bitcoin confirmation (~10 min)</li>
          <li><strong>Save your token contract address</strong></li>
        </ol>

        <h2>Deploying a Yield-Bearing Token</h2>
        <p>
          For tokens with yield farms, you deploy through the full launchpad flow which
          creates both the token AND the farm. See the next section for the complete
          yield farm deployment guide.
        </p>

        <div className="callout warning">
          <div className="callout-title">Everything is Permanent</div>
          <p style={{ marginBottom: 0 }}>
            Token parameters cannot be changed after deployment. Name, symbol, decimals,
            total supply, free mint settings. All permanent. Triple-check everything.
            A typo in your token name lives forever on Bitcoin.
          </p>
        </div>

        <h2>After Deployment (Simple Token)</h2>
        <p>
          Once your simple token is deployed:
        </p>
        <ol>
          <li><strong>Create a NativeSwap pool</strong> so users can trade BTC for your token</li>
          <li><strong>Seed liquidity</strong> by depositing your pre-minted tokens to make trading possible</li>
          <li><strong>Announce</strong> to let people know about the free mint (if enabled)</li>
        </ol>
        <p>
          For yield-bearing tokens, see the next section for the complete deployment flow.
        </p>
      </>
    )
  },

  'deploying-farms': {
    title: 'Deploying Yield Farms',
    prev: { slug: 'deploying-tokens', title: 'Deploying Tokens' },
    next: { slug: 'security', title: 'Security' },
    content: (
      <>
        <p>
          You've deployed a token. Now you need to bootstrap liquidity. This section
          covers deploying a MotoChef yield farm, the game that attracts capital.
        </p>

        <h2>Prerequisites</h2>
        <ul>
          <li>A deployed yield token (from previous section)</li>
          <li>BTC for deployment fees</li>
          <li>LP tokens if you want LP pools (create liquidity first)</li>
          <li>A reward strategy planned out</li>
          <li>Banner image URL (200x400px recommended)</li>
        </ul>

        <h2>The Order of Operations</h2>
        <p>
          This matters. You must follow this sequence:
        </p>
        <ol>
          <li><strong>Deploy token</strong> (with pre-mint for liquidity), wait for confirmation</li>
          <li><strong>Create NativeSwap pool</strong> (requires token to exist)</li>
          <li><strong>Create OP-20 pools</strong> (optional, requires token + paired token)</li>
          <li><strong>Deploy yield farm</strong> (requires LP addresses from step 2-3)</li>
        </ol>
        <p>
          Bitcoin blocks are ~10 minutes. Each on-chain action requires confirmation.
          Budget 30-40 minutes for the full process.
        </p>

        <h2>Farm Configuration</h2>

        <h3>Farm Information</h3>
        <ul>
          <li><strong>Farm Name:</strong> Display name users will see</li>
          <li><strong>Farm Description:</strong> What users can earn</li>
          <li><strong>Farm Banner Image:</strong> URL to your branding (200x400px)</li>
        </ul>

        <h3>Yield Configuration</h3>

        <h4>Yield Token</h4>
        <p>
          Select your deployed token. This is what gets distributed as rewards.
        </p>

        <h4>Yield Per Block</h4>
        <p>
          How many tokens are distributed per Bitcoin block across all pools. This is the
          most important parameter.
        </p>
        <p>
          Example calculation:
        </p>
        <ul>
          <li>Farm allocation: 940,000,000 tokens</li>
          <li>Yield per block: 100,000 tokens</li>
          <li>Duration: 940,000,000 ÷ 100,000 = 9,400 blocks</li>
          <li>At 144 blocks/day: 9,400 ÷ 144 ≈ 65 days of emissions</li>
        </ul>
        <p>
          Higher yield per block = higher APY but shorter duration. Balance this based on
          your goals.
        </p>

        <h4>Bonus Multiplier</h4>
        <p>
          Multiplier applied during the bonus period. Set to 1 for no bonus.
        </p>
        <p>
          A 5x multiplier means emissions are 5x normal during the bonus period. This
          solves the cold-start problem. Nobody wants to be first in an empty farm.
        </p>

        <h4>Bonus Period End Block</h4>
        <p>
          The Bitcoin block number when bonus ends. After this, emissions return to 1x.
        </p>
        <p>
          Example: Current block is 800,000. You want a 7-day bonus period.
        </p>
        <pre><code>Bonus end block = 800,000 + (7 × 144) = 801,008</code></pre>

        <h2>Pool Configuration</h2>
        <p>
          Your farm starts with default pools. You can add, remove, and configure weights.
        </p>

        <h3>Required Pools</h3>
        <ul>
          <li><strong>Bitcoin Pool:</strong> BTC staking via Proof of HODL. You set the fee %.</li>
          <li><strong>Yield Token Pool:</strong> Stake your token to compound. Auto-added.</li>
        </ul>

        <h3>Optional Default Pools</h3>
        <ul>
          <li><strong>MOTO Pool:</strong> Stake MOTO to earn your token</li>
          <li><strong>PILL Pool:</strong> Stake PILL to earn your token</li>
          <li><strong>MOTO-PILL LP Pool:</strong> Stake existing LP tokens</li>
        </ul>
        <p>
          You can remove any optional pool if you don't want it.
        </p>

        <h3>Custom Pools</h3>
        <p>
          Add pools for any OP-20 token or LP token. Paste the token/LP address and set
          the weight.
        </p>

        <h3>Pool Weights</h3>
        <p>
          Weights determine emission distribution. They're relative, not absolute.
        </p>
        <p>
          Example:
        </p>
        <table>
          <thead>
            <tr>
              <th>Pool</th>
              <th>Weight</th>
              <th>Share of Emissions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>PILL-MOTO LP</td>
              <td>200</td>
              <td>200/335 = 60%</td>
            </tr>
            <tr>
              <td>Bitcoin</td>
              <td>100</td>
              <td>100/335 = 30%</td>
            </tr>
            <tr>
              <td>Single-sided PILL</td>
              <td>25</td>
              <td>25/335 = 7%</td>
            </tr>
            <tr>
              <td>Single-sided MOTO</td>
              <td>10</td>
              <td>10/335 = 3%</td>
            </tr>
            <tr>
              <td><strong>Total</strong></td>
              <td><strong>335</strong></td>
              <td><strong>100%</strong></td>
            </tr>
          </tbody>
        </table>

        <div className="callout tip">
          <div className="callout-title">Weight Strategy</div>
          <p style={{ marginBottom: 0 }}>
            LP pools should have the highest weights. You're paying for liquidity. If
            single-sided pools pay better than LP, nobody will provide liquidity and your
            token won't be tradeable.
          </p>
        </div>

        <h2>Bitcoin Pool Fee</h2>
        <p>
          The Bitcoin Pool is special. It's the only pool where you (the deployer) earn fees.
        </p>
        <p>
          When users stake BTC with a 1% fee:
        </p>
        <ul>
          <li>0.99 BTC becomes their staked position (Proof of HODL)</li>
          <li>0.01 BTC goes to your BTC Fee Recipient address</li>
        </ul>
        <p>
          This is your protocol revenue. Set it reasonably; too high discourages stakers.
        </p>

        <h2>Admin Configuration</h2>

        <h3>Admin Address</h3>
        <p>
          The address that can modify pool weights after deployment. Auto-populated with
          your wallet's public key. You can change it if needed.
        </p>
        <p>
          <strong>Keep this key secure.</strong> Anyone with the admin key can change
          reward distribution.
        </p>

        <h3>BTC Fee Recipient</h3>
        <p>
          The Bitcoin address that receives BTC staking fees. Auto-populated with your
          wallet's Bitcoin address.
        </p>

        <h2>Step-by-Step Deployment</h2>

        <ImagePlaceholder
          type="screenshot"
          description="MotoChef farm deployment interface showing yield config, bonus settings, pool weights, and admin options"
          aspectRatio="16/9"
        />

        <ol>
          <li>Go to <a href="https://motoswap.org/deploy" target="_blank" rel="noopener noreferrer">motoswap.org/deploy</a></li>
          <li>Connect your OP_WALLET</li>
          <li>Enter farm information (name, description, banner URL)</li>
          <li>Select your yield token</li>
          <li>Set yield per block</li>
          <li>Configure bonus multiplier and end block</li>
          <li>Configure pools:
            <ul>
              <li>Set BTC fee percentage</li>
              <li>Remove unwanted default pools</li>
              <li>Add custom pools if needed</li>
              <li>Set weights for all pools</li>
            </ul>
          </li>
          <li>Verify admin and fee recipient addresses</li>
          <li>Review the summary carefully</li>
          <li>Click Deploy and confirm in your wallet</li>
          <li>Wait for confirmation</li>
        </ol>

        <h2>After Deployment</h2>
        <p>
          Your farm is live. Users can start staking immediately. You can:
        </p>
        <ul>
          <li><strong>Add new pools:</strong> Go to your farm page, click "Add a new dish"</li>
          <li><strong>Adjust weights:</strong> Admin can change pool weights (but not add/remove pools after initial deployment)</li>
          <li><strong>Monitor TVL:</strong> Track how much capital is entering</li>
        </ul>

        <div className="callout warning">
          <div className="callout-title">Launch Checklist</div>
          <p style={{ marginBottom: 0 }}>
            Before announcing: Verify all pools are configured correctly. Verify weights
            make sense (LP highest). Verify bonus period end block is correct. Verify
            your fee recipient address works. Test with a small stake first.
          </p>
        </div>
      </>
    )
  },

  'security': {
    title: 'Security',
    prev: { slug: 'deploying-farms', title: 'Deploying Yield Farms' },
    next: null,
    content: (
      <>
        <p>
          DeFi is unforgiving. There's no customer support, no chargebacks, no FDIC
          insurance. If you make a mistake or get scammed, your funds are gone forever.
          Security isn't optional. It's survival.
        </p>

        <h2>Wallet Security</h2>

        <h3>Use Hardware Wallets for Significant Holdings</h3>
        <p>
          A hardware wallet (Ledger, Trezor) keeps your private keys offline. Even if your
          computer is compromised, attackers can't access keys stored on the device.
        </p>
        <p>
          Use a hardware wallet for your main Bitcoin stack. Use a hot wallet (OP_WALLET)
          only for active DeFi with limited funds.
        </p>

        <h3>Seed Phrase Security</h3>
        <ul>
          <li><strong>Never share your seed phrase.</strong> No legitimate service will ever ask for it.</li>
          <li><strong>Never store it digitally.</strong> No photos, no cloud storage, no text files.</li>
          <li><strong>Write it down on paper</strong> and store in a secure location.</li>
          <li><strong>Consider metal backup</strong> for fire/water resistance.</li>
        </ul>

        <h3>Separate Wallets for Separate Purposes</h3>
        <ul>
          <li><strong>Cold storage:</strong> Long-term BTC holdings, hardware wallet</li>
          <li><strong>DeFi wallet:</strong> Active farming, limited funds you can afford to lose</li>
          <li><strong>BTC staking wallet:</strong> Dedicated address for Proof of HODL (don't use for anything else)</li>
        </ul>

        <h2>Transaction Security</h2>

        <h3>Verify Before Signing</h3>
        <p>
          Always review transaction details before signing:
        </p>
        <ul>
          <li>Contract address: is it the real protocol?</li>
          <li>Amount: is it what you intended?</li>
          <li>Function being called: does it match your action?</li>
          <li>Fees: are they reasonable?</li>
        </ul>

        <h3>Approval Hygiene</h3>
        <p>
          Token approvals grant contracts permission to move your tokens. Be careful with:
        </p>
        <ul>
          <li><strong>Unlimited approvals:</strong> Some dApps request infinite spending permission. This is risky. A compromised contract can drain everything.</li>
          <li><strong>Revoke unused approvals:</strong> If you're done with a protocol, revoke its approvals.</li>
        </ul>

        <h2>Protocol Safety</h2>

        <h3>Start Small</h3>
        <p>
          Test every new protocol with a small amount first. Verify the full flow
          (stake, harvest, unstake) works before committing significant capital.
        </p>

        <h3>Understand What You're Using</h3>
        <p>
          Don't ape into protocols you don't understand. If you can't explain how a
          yield is generated, you're probably the yield being generated.
        </p>

        <h3>Check Audit Status</h3>
        <p>
          Audited protocols aren't perfectly safe, but unaudited protocols are strictly riskier.
          OP_NET contracts have been audited by Verichains.
        </p>

        <h2>Proof of HODL Specific Risks</h2>

        <h3>UTXO Spending = Automatic Unstake</h3>
        <p>
          If you spend your staked UTXO for any reason, you're automatically unstaked and
          forfeit pending rewards. This can happen accidentally if you:
        </p>
        <ul>
          <li>Use the same wallet for daily transactions</li>
          <li>Consolidate UTXOs</li>
          <li>Send from the staking address</li>
        </ul>
        <p>
          <strong>Mitigation:</strong> Use a dedicated wallet for Proof of HODL staking.
          Don't use that address for anything else.
        </p>

        <h2>MOTO Staking Specific Risks</h2>

        <h3>Slashing Penalty</h3>
        <p>
          Unstaking MOTO before 2,000 blocks (~2 weeks) incurs a penalty up to 20%.
          Always check your current penalty before unstaking.
        </p>

        <h2>Common Scams</h2>

        <h3>"Support" DMs</h3>
        <p>
          No legitimate protocol will ever DM you first. Anyone claiming to be "support"
          in your DMs is a scammer. They want your seed phrase or want you to connect to
          a malicious site.
        </p>

        <h3>Fake Websites</h3>
        <p>
          Scammers create lookalike websites with slightly different URLs (motoswap.io
          instead of motoswap.org, etc.). Always verify the URL before connecting your wallet.
        </p>
        <p>
          <strong>Real sites:</strong>
        </p>
        <ul>
          <li>motoswap.org</li>
          <li>opnet.org</li>
        </ul>

        <h3>Too-Good-To-Be-True APYs</h3>
        <p>
          1,000,000% APY is not sustainable. It means either the token will crash, or
          you're being scammed. Evaluate farms based on reasonable assumptions, not
          fantasy numbers.
        </p>

        <h3>Rug Pulls</h3>
        <p>
          Deployers can create farms, attract TVL, and then dump their pre-minted tokens.
          Red flags:
        </p>
        <ul>
          <li>Anonymous team with no track record</li>
          <li>Large pre-mint allocation</li>
          <li>No liquidity locks</li>
          <li>Aggressive marketing with unrealistic promises</li>
        </ul>

        <h2>OPSEC Best Practices</h2>
        <ul>
          <li><strong>Don't share wallet addresses publicly.</strong> Blockchain is transparent, and anyone can see your positions.</li>
          <li><strong>Use a VPN</strong> when interacting with DeFi if privacy is important.</li>
          <li><strong>Be careful what you share on social media.</strong> Broadcasting your DeFi wins makes you a target.</li>
          <li><strong>Never click links in DMs or emails.</strong> Always navigate directly to sites.</li>
        </ul>

        <div className="callout warning">
          <div className="callout-title">The Final Rule</div>
          <p style={{ marginBottom: 0 }}>
            Never risk more than you can afford to lose. Not just emotionally, literally.
            If losing this money would affect your life, don't put it in DeFi. Start small,
            learn the mechanics, and scale up only when you understand what you're doing.
          </p>
        </div>

        <h2>Resources</h2>
        <ul>
          <li><strong>Motoswap:</strong> <a href="https://motoswap.org" target="_blank" rel="noopener noreferrer">motoswap.org</a></li>
          <li><strong>OP_NET Docs:</strong> <a href="https://docs.opnet.org" target="_blank" rel="noopener noreferrer">docs.opnet.org</a></li>
          <li><strong>Twitter:</strong> <a href="https://twitter.com/opnetbtc" target="_blank" rel="noopener noreferrer">@opnetbtc</a>, <a href="https://twitter.com/MotoswapBTC" target="_blank" rel="noopener noreferrer">@MotoswapBTC</a></li>
          <li><strong>GitHub:</strong> <a href="https://github.com/btc-vision" target="_blank" rel="noopener noreferrer">github.com/btc-vision</a></li>
        </ul>
      </>
    )
  }
}
