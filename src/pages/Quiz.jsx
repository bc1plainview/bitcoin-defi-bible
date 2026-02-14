import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const quizQuestions = [
  // SlowFi Thesis
  {
    category: 'SlowFi Thesis',
    question: 'Why did DeFi Summer 2020 succeed on Ethereum despite slow block times and high fees?',
    options: [
      'Because Ethereum had the most developers',
      'Because exit friction kept capital locked longer, allowing protocols to grow',
      'Because gas fees were actually very low in 2020',
      'Because Vitalik personally endorsed every project'
    ],
    correct: 1,
    explanation: 'Exit friction from slow blocks and high fees prevented rapid capital flight, giving protocols time to build sustainable TVL and allowing the reflexivity flywheel to spin longer.'
  },
  {
    category: 'SlowFi Thesis',
    question: 'What typically happens to DeFi protocols on fast chains like Solana or Base?',
    options: [
      'They sustain longer DeFi seasons due to better UX',
      'They collapse quickly because low exit friction enables rapid capital flight',
      'They become more decentralized over time',
      'They have higher TVL than Ethereum'
    ],
    correct: 1,
    explanation: 'Fast chains have low exit friction. When sentiment turns, everyone can exit simultaneously, causing rapid protocol collapse. This is why fast chains become memecoin casinos instead of sustaining DeFi seasons.'
  },
  {
    category: 'SlowFi Thesis',
    question: 'Bitcoin has ~10 minute block times. According to SlowFi theory, this is:',
    options: [
      'A critical flaw that makes DeFi impossible',
      'Irrelevant to DeFi mechanics',
      'Optimal exit friction for sustained DeFi games',
      'Too slow for any practical use'
    ],
    correct: 2,
    explanation: 'Bitcoin\'s 10-minute blocks create the ultimate exit friction. This makes it potentially the best chain for sustained DeFi seasons, even better than Ethereum in 2020.'
  },

  // OP_NET
  {
    category: 'OP_NET',
    question: 'How does OP_NET enable smart contracts on Bitcoin?',
    options: [
      'By using a sidechain with its own token',
      'As a consensus protocol: contract calls embedded in transactions, WASM execution with deterministic state',
      'By wrapping BTC and bridging to Ethereum',
      'By modifying Bitcoin\'s consensus rules'
    ],
    correct: 1,
    explanation: 'OP_NET is a consensus protocol for Bitcoin L1. Contract calls are embedded in Bitcoin transactions, executed via WASM runtime with deterministic state. No bridges, no wrapped tokens, no consensus changes. Pure L1.'
  },
  {
    category: 'OP_NET',
    question: 'What is the OP-20 token standard?',
    options: [
      'A wrapped Bitcoin token on Ethereum',
      'Bitcoin\'s native token standard (like ERC-20 on Ethereum)',
      'A stablecoin protocol',
      'A type of NFT'
    ],
    correct: 1,
    explanation: 'OP-20 is the fungible token standard on Bitcoin L1, equivalent to ERC-20 on Ethereum. It enables tokens with full smart contract functionality, powered by OP_NET.'
  },

  // Bitcoin Token Wars
  {
    category: 'Bitcoin Token Wars',
    question: 'Why do BRC-20 and Runes tokens suffer from "liquidity death spirals"?',
    options: [
      'Because Bitcoin blocks are too slow',
      'Because PSBT trading has no AMM. When buy pressure stops, there\'s no bid',
      'Because they use too much block space',
      'Because miners don\'t support them'
    ],
    correct: 1,
    explanation: 'PSBT marketplaces are order books, not AMMs. When buy pressure stops, sellers have no one to sell to. The price gaps down, triggering more selling, creating a death spiral with no liquidity floor.'
  },
  {
    category: 'Bitcoin Token Wars',
    question: 'What fundamental advantage does an AMM provide over PSBT order book trading?',
    options: [
      'Faster transactions',
      'Lower fees',
      'Continuous liquidity at every price point via algorithmic pricing',
      'Better marketing'
    ],
    correct: 2,
    explanation: 'AMMs provide liquidity at every price point through algorithmic pricing (x*y=k). There\'s always a bid, always an ask. This prevents the liquidity gaps that destroy PSBT-traded tokens.'
  },

  // NativeSwap
  {
    category: 'NativeSwap',
    question: 'How does NativeSwap handle actual BTC in swaps?',
    options: [
      'BTC is wrapped into an OP-20 token first',
      'BTC is held in a multisig wallet',
      'BTC is P2P routed through the contract, verified but never custodied',
      'BTC is bridged to a sidechain'
    ],
    correct: 2,
    explanation: 'NativeSwap routes BTC peer-to-peer through the contract. The contract verifies and enforces the trade but never takes custody of the BTC. This is trustless Bitcoin DeFi.'
  },
  {
    category: 'NativeSwap',
    question: 'What is the "50/50 mechanism" in NativeSwap?',
    options: [
      'A 50% trading fee',
      'When selling, 50% impacts price immediately and 50% when tokens start selling',
      'You can only sell 50% of your tokens at a time',
      'Liquidity is split 50/50 between two pools'
    ],
    correct: 1,
    explanation: 'The 50/50 mechanism prevents flash crashes. When you join the sell queue, 50% of your order impacts the price immediately, and 50% impacts when your tokens actually start selling. This creates gradual price discovery.'
  },
  {
    category: 'NativeSwap',
    question: 'What problem does NativeSwap\'s two-phase commit solve?',
    options: [
      'High gas fees',
      'Slow block times',
      'Price changes between transaction submission and confirmation',
      'Token approval requirements'
    ],
    correct: 2,
    explanation: 'Bitcoin transactions are irreversible. Two-phase commit lets you lock in a price (Phase 1: Reserve), then execute at that price later (Phase 2: Execute), even if the market moved. No slippage, no front-running.'
  },

  // OP-20S Stablecoins
  {
    category: 'OP-20S Stablecoins',
    question: 'What makes OP-20S different from regular OP-20 tokens?',
    options: [
      'They\'re backed by USD in a bank',
      'They have peg-aware pricing and use StableSwap mathematics',
      'They can only be traded on centralized exchanges',
      'They require KYC to hold'
    ],
    correct: 1,
    explanation: 'OP-20S is an extension standard for stablecoins. It includes peg-aware pricing (the contract knows the target peg) and uses StableSwap curves for minimal slippage near the peg.'
  },
  {
    category: 'OP-20S Stablecoins',
    question: 'Why are stablecoins on NativeSwap denominated in BTC, not USD?',
    options: [
      'Because Bitcoin doesn\'t know what USD is worth',
      'To avoid regulatory issues',
      'Because it\'s faster',
      'Because USD stablecoins don\'t exist'
    ],
    correct: 0,
    explanation: 'Bitcoin has no oracle. It doesn\'t know external prices. A "1 USD" stablecoin on NativeSwap is actually priced in satoshis. If BTC moves 10%, your "stablecoin" listing moves 10% in USD terms.'
  },

  // Motoswap
  {
    category: 'Motoswap',
    question: 'What is Motoswap?',
    options: [
      'A centralized exchange for Bitcoin',
      'The first native DEX on Bitcoin L1, powered by OP_NET',
      'A Bitcoin mining pool',
      'A Layer 2 scaling solution'
    ],
    correct: 1,
    explanation: 'Motoswap is the first native decentralized exchange on Bitcoin L1, powered by OP_NET. It combines AMM liquidity pools, NativeSwap for BTC trading, and MotoChef for yield farming.'
  },
  {
    category: 'Motoswap',
    question: 'What are the two ways to provide liquidity on Motoswap?',
    options: [
      'Lending and borrowing',
      'LP tokens (two-sided) and NativeSwap (single-sided BTC)',
      'Staking and farming',
      'Market making and arbitrage'
    ],
    correct: 1,
    explanation: 'Motoswap offers traditional LP provision (deposit two tokens) for OP-20/OP-20 pairs, and NativeSwap single-sided liquidity for BTC trading pairs.'
  },

  // MotoChef & Yield Farming
  {
    category: 'Yield Farming',
    question: 'MotoChef is based on what famous DeFi primitive?',
    options: [
      'Uniswap V3 concentrated liquidity',
      'Compound lending pools',
      'SushiSwap\'s MasterChef yield farming contracts',
      'Curve\'s StableSwap'
    ],
    correct: 2,
    explanation: 'MotoChef is a fork of SushiSwap\'s MasterChef, the ~200 lines of Solidity that powered DeFi Summer 2020. Same proven mechanics, now on Bitcoin L1.'
  },
  {
    category: 'Yield Farming',
    question: 'How are yield farming rewards distributed?',
    options: [
      'Equally to all participants',
      'Based on token holdings in your wallet',
      'Proportionally based on your share of staked TVL',
      'First come, first served'
    ],
    correct: 2,
    explanation: 'Rewards are distributed proportionally. If you have 10% of the staked LP tokens in a pool, you earn 10% of that pool\'s emissions. Your share = Your Stake ÷ Total Pool TVL.'
  },
  {
    category: 'Yield Farming',
    question: 'When is the optimal time to enter a yield farm?',
    options: [
      'As late as possible to avoid risk',
      'During the bonus period, when rewards are high and contracts are established',
      'Only after the farm ends',
      'It doesn\'t matter when you enter'
    ],
    correct: 1,
    explanation: 'The bonus period offers the best risk/reward. Launch is high risk (unproven contracts), late entry means diminishing returns. Bonus period has elevated rewards with proven code.'
  },

  // Proof of HODL
  {
    category: 'Proof of HODL',
    question: 'What makes Proof of HODL unique compared to other Bitcoin staking protocols?',
    options: [
      'It offers the highest APY',
      'Your BTC stays in your wallet and remains fully spendable at all times',
      'It requires locking BTC for at least 1 year',
      'It uses a centralized custodian'
    ],
    correct: 1,
    explanation: 'Proof of HODL is non-custodial staking. Your BTC never leaves your wallet, there\'s no lock period, and you can spend it anytime. You\'re proving you hold BTC, not transferring it.'
  },
  {
    category: 'Proof of HODL',
    question: 'What happens if you spend your staked UTXO while in a Proof of HODL farm?',
    options: [
      'Nothing, rewards continue accumulating',
      'You\'re automatically unstaked and forfeit pending rewards',
      'You receive a bonus for spending',
      'The transaction is blocked'
    ],
    correct: 1,
    explanation: 'Spending your staked UTXO is equivalent to unstaking. You\'re automatically removed from the farm and forfeit pending rewards. Use a dedicated wallet for Proof of HODL staking.'
  },
  {
    category: 'Proof of HODL',
    question: 'How does Proof of HODL compare to Babylon staking?',
    options: [
      'Babylon has no lock period while Proof of HODL requires 15 months',
      'Proof of HODL has no lock period while Babylon locks BTC up to 15 months',
      'They\'re identical in mechanics',
      'Babylon is on Bitcoin L1 while Proof of HODL is on Ethereum'
    ],
    correct: 1,
    explanation: 'Babylon locks your BTC for up to 15 months with a 7-day minimum unbonding. Proof of HODL has zero lock period. Your BTC is spendable at any time while still earning yield.'
  },

  // $MOTO Token
  {
    category: '$MOTO Token',
    question: 'What is the primary utility of the $MOTO token?',
    options: [
      'Governance voting only',
      'Staking for a share of all protocol swap fees',
      'Paying for gas on Bitcoin L1',
      'NFT purchases'
    ],
    correct: 1,
    explanation: '$MOTO is a fee-sharing token. Stake MOTO to earn a proportional share of swap fees from all Motoswap trading: OP-20 swaps (0.2%) and NativeSwap trades (0.2%).'
  },
  {
    category: '$MOTO Token',
    question: 'What happens if you unstake MOTO before 2,000 blocks (~2 weeks)?',
    options: [
      'Nothing, you receive full amount',
      'You pay up to 20% slashing penalty',
      'Your MOTO is burned',
      'You receive bonus rewards'
    ],
    correct: 1,
    explanation: 'MOTO staking has an early exit penalty. Unstaking before 2,000 blocks incurs a slashing penalty up to 20%. This discourages short-term speculation and rewards long-term stakers.'
  },

  // Farming Strategies
  {
    category: 'Strategies',
    question: 'What is "impermanent loss" in LP staking?',
    options: [
      'Losing your private keys',
      'Loss from price divergence between paired assets vs. holding them separately',
      'Permanent loss of funds due to hacking',
      'Loss from high gas fees'
    ],
    correct: 1,
    explanation: 'Impermanent loss occurs when the prices of your LP pair diverge. You end up with more of the depreciating asset and less of the appreciating one compared to just holding both.'
  },
  {
    category: 'Strategies',
    question: 'When should you choose single-sided (Proof of HODL) over LP staking?',
    options: [
      'When you want maximum APY regardless of risk',
      'When you want to maintain 100% BTC exposure with no IL risk',
      'When you\'re bullish on both assets in a pair',
      'When gas fees are too high'
    ],
    correct: 1,
    explanation: 'Single-sided staking (Proof of HODL) is ideal when you want BTC exposure without impermanent loss risk. You keep 100% BTC, it remains spendable, but typically earn lower APY than LP staking.'
  },
  {
    category: 'Strategies',
    question: 'What\'s the key principle for timing your exit from a yield farm?',
    options: [
      'Hold until APY reaches zero',
      'Exit immediately at the first sign of price decline',
      'Exit when risk/reward no longer favors staying, before emissions end or TVL dilutes returns',
      'Never exit, just keep compounding forever'
    ],
    correct: 2,
    explanation: 'The goal is to exit while still profitable. Watch for: emissions declining, TVL increasing (diluting your share), token price dropping, or approaching the end of bonus periods.'
  },

  // Deploying Tokens & Farms
  {
    category: 'Creating',
    question: 'What\'s the main reason to deploy a yield farm alongside your token?',
    options: [
      'To avoid paying taxes',
      'To bootstrap liquidity by incentivizing early LP providers',
      'Because it\'s required by OP_NET',
      'To increase the token supply'
    ],
    correct: 1,
    explanation: 'Yield farms bootstrap liquidity. By offering token rewards to LPs, you incentivize people to provide liquidity for your token, creating trading depth and enabling price discovery.'
  },
  {
    category: 'Creating',
    question: 'What is "pre-mint" in token deployment?',
    options: [
      'Mining tokens before the blockchain launches',
      'Tokens allocated to the deployer before public distribution',
      'A type of NFT',
      'Testing tokens on testnet'
    ],
    correct: 1,
    explanation: 'Pre-mint is the amount of tokens allocated to the deployer at launch. This is used for team allocation, initial liquidity, marketing, etc. Transparent pre-mint disclosures build trust.'
  },

]

// Shuffle array helper
function shuffleArray(array) {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export default function Quiz() {
  const { t } = useLanguage()
  const [gameState, setGameState] = useState('intro') // intro, playing, results
  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState([])

  const startQuiz = () => {
    const shuffled = shuffleArray(quizQuestions).slice(0, 20) // 20 random questions
    setQuestions(shuffled)
    setCurrentIndex(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setScore(0)
    setAnswers([])
    setGameState('playing')
  }

  const handleAnswer = (index) => {
    if (showExplanation) return
    setSelectedAnswer(index)
    setShowExplanation(true)

    const isCorrect = index === questions[currentIndex].correct
    if (isCorrect) {
      setScore(s => s + 1)
    }
    setAnswers(a => [...a, { questionIndex: currentIndex, selected: index, correct: questions[currentIndex].correct, isCorrect }])
  }

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(i => i + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      setGameState('results')
    }
  }

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100
    if (percentage === 100) return { title: 'Perfect Score!', subtitle: 'You\'re a Bitcoin DeFi master.', color: 'var(--btc-orange)' }
    if (percentage >= 80) return { title: 'Excellent!', subtitle: 'You really understand SlowFi mechanics.', color: 'var(--success)' }
    if (percentage >= 60) return { title: 'Good Job!', subtitle: 'Solid understanding, but review the docs for gaps.', color: 'var(--defi-purple)' }
    if (percentage >= 40) return { title: 'Keep Learning', subtitle: 'Read through the documentation again.', color: 'var(--warning)' }
    return { title: 'Study Time', subtitle: 'Start from the introduction and work through each section.', color: 'var(--danger)' }
  }

  const getCategoryStats = () => {
    const stats = {}
    answers.forEach((a, i) => {
      const cat = questions[i].category
      if (!stats[cat]) stats[cat] = { correct: 0, total: 0 }
      stats[cat].total++
      if (a.isCorrect) stats[cat].correct++
    })
    return stats
  }

  if (gameState === 'intro') {
    return (
      <div className="quiz-container">
        <div className="quiz-intro">
          <div className="quiz-icon">📝</div>
          <h1>{t('Bitcoin DeFi Knowledge Quiz', '比特币 DeFi 知识测验')}</h1>
          <p className="quiz-description">
            {t(
              'Test your understanding of SlowFi, OP_NET, NativeSwap, Proof of HODL, yield farming strategies, and token deployment.',
              '测试您对 SlowFi、OP_NET、NativeSwap、持有证明、流动性挖矿策略和安全最佳实践的理解。'
            )}
          </p>

          <div className="quiz-info">
            <div className="quiz-info-item">
              <span className="quiz-info-number">20</span>
              <span className="quiz-info-label">{t('Questions', '题目')}</span>
            </div>
            <div className="quiz-info-item">
              <span className="quiz-info-number">10</span>
              <span className="quiz-info-label">{t('Categories', '类别')}</span>
            </div>
            <div className="quiz-info-item">
              <span className="quiz-info-number">~10</span>
              <span className="quiz-info-label">{t('Minutes', '分钟')}</span>
            </div>
          </div>

          <div className="quiz-categories">
            <h3>{t('Topics Covered', '涵盖主题')}</h3>
            <div className="category-tags">
              {['SlowFi Thesis', 'OP_NET', 'Bitcoin Token Wars', 'NativeSwap', 'OP-20S Stablecoins', 'Motoswap', 'Yield Farming', 'Proof of HODL', '$MOTO Token', 'Strategies', 'Creating'].map(cat => (
                <span key={cat} className="category-tag">{cat}</span>
              ))}
            </div>
          </div>

          <button className="quiz-start-btn" onClick={startQuiz}>
            {t('Start Quiz', '开始测验')}
          </button>

          <Link to="/docs/introduction" className="quiz-back-link">
            {t('← Back to Documentation', '← 返回文档')}
          </Link>
        </div>
      </div>
    )
  }

  if (gameState === 'results') {
    const scoreMsg = getScoreMessage()
    const categoryStats = getCategoryStats()

    return (
      <div className="quiz-container">
        <div className="quiz-results">
          <div className="results-score" style={{ borderColor: scoreMsg.color }}>
            <div className="score-number" style={{ color: scoreMsg.color }}>{score}/{questions.length}</div>
            <div className="score-percentage">{Math.round((score / questions.length) * 100)}%</div>
          </div>

          <h1 style={{ color: scoreMsg.color }}>{scoreMsg.title}</h1>
          <p className="results-subtitle">{scoreMsg.subtitle}</p>

          <div className="results-breakdown">
            <h3>{t('Performance by Category', '按类别表现')}</h3>
            <div className="category-results">
              {Object.entries(categoryStats).map(([cat, stats]) => (
                <div key={cat} className="category-result">
                  <span className="category-name">{cat}</span>
                  <div className="category-bar">
                    <div
                      className="category-fill"
                      style={{
                        width: `${(stats.correct / stats.total) * 100}%`,
                        background: stats.correct === stats.total ? 'var(--success)' :
                                   stats.correct === 0 ? 'var(--danger)' : 'var(--btc-orange)'
                      }}
                    />
                  </div>
                  <span className="category-score">{stats.correct}/{stats.total}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="results-actions">
            <button className="quiz-start-btn" onClick={startQuiz}>
              {t('Try Again', '再试一次')}
            </button>
            <Link to="/docs/introduction" className="quiz-review-btn">
              {t('Review Documentation', '复习文档')}
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // Playing state
  const question = questions[currentIndex]
  const progress = ((currentIndex + 1) / questions.length) * 100

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <div className="quiz-progress">
          <div className="quiz-progress-bar">
            <div className="quiz-progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <div className="quiz-progress-text">
            {currentIndex + 1} / {questions.length}
          </div>
        </div>
        <div className="quiz-score-display">
          {t('Score', '得分')}: {score}
        </div>
      </div>

      <div className="quiz-question-card">
        <div className="question-category">{question.category}</div>
        <h2 className="question-text">{question.question}</h2>

        <div className="question-options">
          {question.options.map((option, index) => {
            let optionClass = 'question-option'
            if (showExplanation) {
              if (index === question.correct) {
                optionClass += ' correct'
              } else if (index === selectedAnswer && index !== question.correct) {
                optionClass += ' incorrect'
              }
            } else if (selectedAnswer === index) {
              optionClass += ' selected'
            }

            return (
              <button
                key={index}
                className={optionClass}
                onClick={() => handleAnswer(index)}
                disabled={showExplanation}
              >
                <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                <span className="option-text">{option}</span>
                {showExplanation && index === question.correct && (
                  <span className="option-check">✓</span>
                )}
                {showExplanation && index === selectedAnswer && index !== question.correct && (
                  <span className="option-x">✗</span>
                )}
              </button>
            )
          })}
        </div>

        {showExplanation && (
          <div className={`question-explanation ${selectedAnswer === question.correct ? 'correct' : 'incorrect'}`}>
            <div className="explanation-header">
              {selectedAnswer === question.correct ? (
                <span className="explanation-result correct">✓ {t('Correct!', '正确！')}</span>
              ) : (
                <span className="explanation-result incorrect">✗ {t('Incorrect', '错误')}</span>
              )}
            </div>
            <p>{question.explanation}</p>
          </div>
        )}

        {showExplanation && (
          <button className="quiz-next-btn" onClick={nextQuestion}>
            {currentIndex < questions.length - 1
              ? t('Next Question →', '下一题 →')
              : t('See Results →', '查看结果 →')}
          </button>
        )}
      </div>
    </div>
  )
}
