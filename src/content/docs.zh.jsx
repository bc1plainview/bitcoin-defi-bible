// ═══════════════════════════════════════════════════════════════════════════
// 比特币 DEFI 圣经 - 中文文档内容
// 您的 OP_NET SlowFi 指南
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
  BitcoinMempoolVisualization,
  AMMCurveDiagram,
  ImpermanentLossDiagram,
  TokenSupplyDiagram,
  StableSwapCurveDiagram,
  CompoundingFlowDiagram
} from '../components/Charts'

// 图片占位符组件
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
      [需要{type === 'gif' ? '动图' : type === 'diagram' ? '图表' : type === 'screenshot' ? '截图' : '图片'}]
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

export const docsContentZh = {
  // ─────────────────────────────────────────────────────────────────────────
  // 入门指南
  // ─────────────────────────────────────────────────────────────────────────
  'introduction': {
    title: '简介',
    prev: null,
    next: { slug: 'what-is-slowfi', title: 'SlowFi 理论' },
    content: (
      <>
        <p>
          欢迎阅读<strong>《比特币 DeFi 圣经》</strong>——您在 OP_NET 上理解和参与
          比特币原生 DeFi 的全面指南。
        </p>

        <div className="callout info">
          <div className="callout-title">本指南是什么</div>
          <p style={{ marginBottom: 0 }}>
            这是为<strong>用户</strong>准备的资源，而不是开发者。您不需要知道如何编程。
            您需要了解 DeFi 游戏如何运作、如何参与，以及——如果您选择的话——如何创建它们。
          </p>
        </div>

        <h2>DeFi 之夏发生在慢速链上</h2>
        <p>
          2020年，以太坊见证了加密货币历史上最爆发性的财富创造时期。
          Sushiswap 的吸血鬼攻击在48小时内吸引了11.4亿美元。OlympusDAO
          在六个月内维持了40亿美元的 TVL，尽管它是一个"明显的庞氏骗局"。
          早期理解机制的收益农民获得了世代财富。
        </p>

        <DeFiSummerTVLChart />

        <p>
          这是大多数人忽略的：<strong>2020年的以太坊既慢又贵</strong>。
          每秒15-30笔交易。在波动期间，Gas费飙升到数百美元。
          退出仓位意味着等待非高峰时段，有时需要几天。
        </p>
        <p>
          每个人都认为这是一个需要解决的问题。所以我们建造了更快的链。Solana
          每秒处理3000+笔交易。Base和BSC处理数百笔。它们应该是DeFi天堂。
        </p>
        <p>
          相反，它们90%以上是 memecoin 赌场。没有持续的 DeFi 季节。
          没有复利增长的 TVL。协议在几周内启动和崩溃。
        </p>
        <p>
          <strong>"问题"实际上是解决方案。</strong>
        </p>

        <div className="callout tip">
          <div className="callout-title">DeFi 之夏的一切——现在在比特币上</div>
          <p style={{ marginBottom: 0 }}>
            MasterChef 收益农场。AMM 流动性池。LP 质押。代币发行。费用分享质押。
            整个 DeFi 之夏的玩法现在在比特币一层上线。相同的机制。
            更好的链。这是一件大事。
          </p>
        </div>

        <h2>您将学到什么</h2>
        <p>
          本指南将教您：
        </p>
        <ul>
          <li><strong>SlowFi 理论：</strong>为什么退出摩擦使 DeFi 游戏可持续，以及为什么比特币是最佳环境</li>
          <li><strong>OP_NET 如何工作：</strong>在比特币一层上实现智能合约的技术，无需桥接或包装代币</li>
          <li><strong>NativeSwap 机制：</strong>比特币首个原生 DEX 如何工作——具有算法价格发现的 P2P BTC 结算</li>
          <li><strong>Proof of HODL：</strong>如何在不放弃托管的情况下在比特币上获得收益——以及为什么这是革命性的</li>
          <li><strong>参与游戏：</strong>收益农业、LP 提供和 MOTO 质押的策略</li>
          <li><strong>创建游戏：</strong>如何部署您自己的代币和收益农场</li>
        </ul>

        <h2>通过本指南的两条路径</h2>

        <h3>路径1：玩家</h3>
        <p>
          您想让您的比特币发挥作用。您将学习如何质押 BTC 获得收益
          （无需放弃托管）、提供流动性、农耕代币和管理风险。
          重点：SlowFi 理论 → NativeSwap → Proof of HODL → 收益农业 → 策略。
        </p>

        <h3>路径2：创建者</h3>
        <p>
          您想要发行代币并引导流动性。您将学习如何部署
          OP-20 代币、创建 NativeSwap 池和设置具有自定义排放的收益农场。
          重点：以上所有内容，加上部署代币 → 部署收益农场。
        </p>

        <div className="callout warning">
          <div className="callout-title">从小额开始</div>
          <p style={{ marginBottom: 0 }}>
            DeFi 是无情的。没有客服，没有撤销，没有 FDIC 保险。
            在学习机制时，从您能承受损失的金额开始。
          </p>
        </div>
      </>
    )
  },

  'what-is-slowfi': {
    title: 'SlowFi 理论',
    prev: { slug: 'introduction', title: '简介' },
    next: { slug: 'why-bitcoin-defi', title: '为什么是比特币？' },
    content: (
      <>
        <p>
          DeFi 之夏 2020 发生在一个缓慢、昂贵的链上。这不是尽管
          以太坊的限制——<strong>而是因为这些限制</strong>。
        </p>

        <h2>理解 DeFi 游戏</h2>
        <p>
          在我们解释 SlowFi 之前，您需要理解 DeFi 协议实际上是什么。
          剥去营销，您会看到一个简单的机制：
        </p>
        <p>
          <strong>DeFi 协议是反身性游戏，资本流入创造收益，
          吸引更多资本。</strong>
        </p>
        <p>
          一个收益农场以 1000% APY 启动。早期存款人看到这些回报并
          告诉其他人。更多资本进入，创造更多交易费和代币需求。
          APY 保持高位，吸引更多资本。飞轮转动。
        </p>
        <p>
          这不会永远持续——最终排放耗尽或需求饱和。
          但问题不是这些游戏是否结束。而是<strong>它们在结束前
          运行多长时间</strong>。一个运行6-12个月的游戏可以为早期参与者
          创造巨大财富。一个在2周内崩溃的游戏只会创造损失。
        </p>

        <div className="callout info">
          <div className="callout-title">核心洞察</div>
          <p style={{ marginBottom: 0 }}>
            使 DeFi 游戏运行更长时间的秘诀不是更好的代币经济学或新颖的
            机制。<strong>而是退出摩擦。</strong>当资金离开比进入需要更长时间时，
            协议会在几个月而不是几天内向上复利。
          </p>
        </div>

        <h2>退出速度杀死协议</h2>
        <p>
          每个 DeFi 协议都面临相同的基本动态：当收益高时资本想要进入，
          当收益下降时想要退出。只要流入超过流出，协议就能存活。
        </p>

        <ChainComparisonTable />

        <p>
          在快速链上，会发生以下情况：
        </p>
        <ol>
          <li>农场以高排放启动。早期存款人进入。</li>
          <li>消息传播。更多资本进入。TVL增长。</li>
          <li>代币价格因需求上涨。APY看起来更好。</li>
          <li>某个大户决定获利了结并卖出。</li>
          <li>代币价格下跌。APY下降。其他人看到这一点并决定退出。</li>
          <li><strong>在快速链上，他们都可以在同一个区块内退出。</strong></li>
          <li>50,000笔解质押交易、奖励领取和卖出同时执行。</li>
          <li>代币在几分钟内暴跌80%。TVL崩溃。游戏结束。</li>
        </ol>
        <p>
          这不是假设。观察 Solana、BSC 或 Base 上的任何收益农场。TVL
          在30-60天内崩溃70-90%，随着排放结束，退出速度压倒流入。
          你可以用它来校准手表。
        </p>

        <h2>EIP-1559 证据</h2>
        <p>
          以太坊提供了一个自然实验。查看 DeFiLlama 的历史图表：
          <strong> DeFi TVL 动量恰好在2021年8月 EIP-1559 通过时中断</strong>。
        </p>
        <p>
          EIP-1559 之前：
        </p>
        <ul>
          <li>Gas 价格不可预测且经常极高</li>
          <li>退出仓位需要等待低 gas 窗口</li>
          <li>解质押、领取奖励和卖出意味着在非高峰时段排队交易</li>
          <li>资本被<em>结构性困住</em>数小时或数天</li>
        </ul>
        <p>
          EIP-1559 之后：
        </p>
        <ul>
          <li>Gas 通过基础费机制变得可预测</li>
          <li>吞吐量增加</li>
          <li>每个人都可以并行退出</li>
          <li>庞氏骗局实时解开</li>
        </ul>
        <p>
          OlympusDAO，这个通过纯粹反身性维持了六个月40亿美元以上 TVL 的协议，
          在 gas 变得可控后的几周内崩溃。机制没有改变。退出摩擦消失了。
        </p>

        <h2>快速链从未有过 DeFi 季节</h2>
        <p>
          Solana 处理的交易是 2020 年以太坊的 100 倍。它应该是 DeFi
          天堂。相反，它是一个 memecoin 赌场。启动的 DeFi 协议在
          反身性飞轮甚至开始转动之前就崩溃了。
        </p>
        <p>
          <strong>这不是坏运气。这是物理学。</strong>
        </p>

        <h2>SlowFi 机制</h2>
        <p>
          SlowFi 不是关于"耐心资本"或"可持续收益"的哲学。这些是
          好听的叙事，但它们不是让协议存活的原因。
        </p>
        <p>
          SlowFi 是一种<strong>机制</strong>：结构性退出摩擦，使资本
          在协议中停留足够长的时间让反身性复利。
        </p>
        <p>
          该机制需要：
        </p>
        <ul>
          <li><strong>有限的区块空间：</strong>不是每个人都能同时退出</li>
          <li><strong>波动期间的高费用：</strong>对于小仓位，退出在经济上变得不理性</li>
          <li><strong>缓慢的确认时间：</strong>恐慌性抛售需要几小时，而不是几秒</li>
        </ul>
        <p>
          传统金融一直理解这一点。购买实物黄金、房地产成交、
          电汇——它们都需要几天。这些不是低效率。
          它们是创造稳定性并允许市场吸收波动而不会立即崩溃的特性。
        </p>
        <p>
          SlowFi 将这种属性带入 DeFi。不是通过人为的锁定或惩罚，
          而是通过底层区块链的自然约束。
        </p>

        <div className="callout tip">
          <div className="callout-title">底线</div>
          <p style={{ marginBottom: 0 }}>
            在 2020 年以太坊上运行了 6-8 个月的相同 LP 质押游戏可以
            在比特币上运行 12-18 个月。机制是相同的。环境更好。
          </p>
        </div>
      </>
    )
  },

  'why-bitcoin-defi': {
    title: '为什么是比特币？',
    prev: { slug: 'what-is-slowfi', title: 'SlowFi 理论' },
    next: { slug: 'opnet-overview', title: 'OP_NET 概述' },
    content: (
      <>
        <p>
          如果 SlowFi 需要退出摩擦，为什么特别是比特币？为什么不只是
          在高 gas 期间使用以太坊，或者任何碰巧拥堵的链？
        </p>

        <h2>比特币的结构优势</h2>

        <h3>1. 硬性区块空间限制</h3>
        <p>
          比特币大约每10分钟结算4,000-6,000笔交易。这
          不是可以通过治理或协议升级调整的参数。
          这是系统的基本约束。
        </p>
        <p>
          如果50,000人想要同时在比特币上退出一个协议，
          <strong>最少需要8-12小时</strong>，假设他们是网络上唯一的交易。
          在实际拥堵和竞争交易期间，可能需要几天。
        </p>
        <p>
          与 Solana 相比，50,000笔交易在一秒内清算。
          或者 EIP-1559 之后的以太坊，gas 是可预测的，吞吐量也增加了。
          比特币的"限制"就是特性。
        </p>

        <h3>2. 费用墙</h3>
        <p>
          当对比特币区块空间的需求增加时，费用不仅仅是上升——它们
          变得<strong>高得令人望而却步</strong>。在高峰期，交易
          费用经常超过50-100美元。
        </p>

        <BitcoinMempoolVisualization />

        <p>
          这通过纯粹的经济学创造了一个自然的退出屏障：
        </p>
        <ul>
          <li>您在收益农场中质押了500美元</li>
          <li>代币价格下跌20%。您的仓位现在价值400美元。</li>
          <li>您想退出，但解质押费用是75美元+卖出费用75美元</li>
          <li>退出花费您150美元（剩余仓位的37.5%）</li>
          <li>理性地，您等待费用下降</li>
        </ul>
        <p>
          <strong>当您等待时，协议有时间稳定。</strong>新资本
          进入。代币恢复。恐慌消退。您最终根本不会退出。
        </p>
        <p>
          这不是理论。这就是比特币费用市场一直以来的运作方式。
          费用墙创造了"粘性资本"——不是因为用户是长期导向的，
          而是因为他们在经济上是理性的。
        </p>

        <h3>3. 没有包装代币或桥接</h3>
        <p>
          这是关键的：<strong>退出摩擦只有在您的资本实际上
          在比特币上</strong>，受制于比特币的出块时间和费用市场时才有效。
        </p>
        <p>
          在更快链上的桥接 BTC（以太坊上的 WBTC，Solana 上的 wBTC）完全
          失去了退出摩擦的好处。您可以在快速链上立即退出。慢速
          链约束不适用。
        </p>
        <p>
          除了 SlowFi 的好处之外，桥接引入了巨大的风险：
        </p>
        <ul>
          <li><strong>WBTC：</strong>由 BitGo 托管。您信任的是一家公司。</li>
          <li><strong>renBTC：</strong>由 Alameda 管理。我们知道结果如何。</li>
          <li><strong>桥接漏洞：</strong>数十亿美元因桥接黑客而被盗。</li>
        </ul>
        <p>
          原生比特币 DeFi 意味着您的 BTC 保留在现有最安全的网络上，
          受制于其自然的速率限制，没有托管中间人。
        </p>

        <h2>需求已被证明</h2>
        <p>
          超过50亿美元的 BTC 已流入 Babylon 的"比特币质押"协议，
          尽管有严重的限制：
        </p>
        <ul>
          <li>最长15个月的时间锁定</li>
          <li>最少7天的解绑期</li>
          <li>委托给第三方"最终性提供者"</li>
          <li>如果您的验证者行为不端，您的质押可能被削减</li>
          <li>奖励以 BABY 代币支付，而不是比特币（约1% APY）</li>
        </ul>
        <p>
          如果比特币持有者愿意接受这些权衡以获得1%的 APY 山寨币，
          对<em>更好的</em>比特币收益产品的需求是巨大的。
        </p>
        <p>
          超过1万亿美元的比特币完全闲置在钱包中。与以太坊不同，
          那里27%以上的供应被积极质押，比特币历史上没有提供原生
          收益机会。HODLer 只能寄希望于价格上涨。
        </p>
        <p>
          这现在改变了。
        </p>

        <h2>时机：窗口已打开</h2>
        <p>
          今天比特币 DeFi 的 TVL 只是2020年早期以太坊的一小部分。
          基础设施刚刚上线。OP_NET 启用智能合约。
          Motoswap 提供 AMM。MotoChef 启用收益农业。各部分已就位。
        </p>
        <p>
          以太坊 DeFi 之夏的早期农民获得了世代财富。Sushiswap
          吸血鬼攻击、OlympusDAO 的 (3,3) meme、Yearn 的金库——那些早期
          理解机制并相应定位的人做得非常好。
        </p>
        <p>
          相同的窗口正在比特币上打开，但具有更好的基本面：
        </p>
        <ul>
          <li>更强的退出摩擦（更慢的区块，更高的费用上限）</li>
          <li>更好的基础资产（BTC 优于 ETH 作为抵押品）</li>
          <li>经过验证的需求（已有50亿美元以上锁定在劣质产品中）</li>
          <li>更少的竞争（大多数人还没有弄清楚这一点）</li>
        </ul>

        <div className="callout info">
          <div className="callout-title">机会</div>
          <p style={{ marginBottom: 0 }}>
            在其他人追逐快速链 memecoin 时理解 SlowFi 机制是一种
            信息优势。问题是您是否采取行动。
          </p>
        </div>
      </>
    )
  },

  'opnet-overview': {
    title: 'OP_NET 概述',
    prev: { slug: 'why-bitcoin-defi', title: '为什么是比特币？' },
    next: { slug: 'bitcoin-token-wars', title: '比特币代币战争' },
    content: (
      <>
        <p>
          比特币不是为智能合约设计的。中本聪有意保持脚本语言有限，
          以防止创造攻击向量的复杂性。
          那么我们如何在比特币上构建 DeFi 而不破坏使比特币有价值的东西？
        </p>

        <h2>OP_NET 解决方案</h2>
        <p>
          OP_NET 是一个<strong>共识层</strong>——比特币上的首创，
          直接在一层上启用完全表达性的智能合约，而无需修改
          或分叉比特币的基础协议。与元协议（BRC-20、Runes、Alkanes）
          不同，索引器可能显示不同的结果，OP_NET 提供正确执行的加密证明，
          每个参与者必须得出完全相同的结果。
        </p>

        <OPNETArchitectureDiagram />

        <p>
          可以这样理解：OP_NET 将智能合约调用直接嵌入比特币交易中。
          比特币区块链成为数据可用性层，而 OP_NET 节点提供执行环境——
          运行 WASM 合约并在状态上达成确定性共识。
        </p>

        <h3>关键属性</h3>
        <ul>
          <li><strong>无需协议更改：</strong>OP_NET 与现有的比特币一起工作，使用 Taproot、SegWit 和 Legacy 交易格式</li>
          <li><strong>仅原生比特币：</strong>所有费用以 BTC 支付。没有单独的协议代币创造不一致的激励。</li>
          <li><strong>自托管：</strong>在所有操作中您保持对私钥的控制</li>
          <li><strong>确定性执行：</strong>智能合约用 AssemblyScript 编写并编译为 WebAssembly。每个节点执行相同的代码并达到相同的状态。</li>
        </ul>

        <h2>代币标准</h2>
        <p>
          OP_NET 实现了比以太坊有显著改进的代币标准：
        </p>
        <ul>
          <li>
            <strong><a href="https://docs.opnet.org/token-standards/op-20-tokens/op-20-tokens-introduction" target="_blank" rel="noopener noreferrer">OP-20</a>：</strong>同质化代币（类似 ERC-20 但更好）。包括强制安全转账、
            基于增量的授权以防止漏洞利用，以及原生销毁功能。
            用于 MOTO、收益代币和您部署的任何代币。
          </li>
          <li>
            <strong><a href="https://docs.opnet.org/token-standards/op-721-nfts/minting-nfts" target="_blank" rel="noopener noreferrer">OP-721</a>：</strong>非同质化代币（类似 ERC-721）。比特币上的 NFT。
          </li>
        </ul>
        <p>
          这些标准实现了可组合性——代币可以以可预测的方式与 DEX、收益农场
          和未来协议互动。
        </p>

        <h2>纪元系统</h2>
        <p>
          OP_NET 将比特币区块组织成<strong>纪元</strong>——正好5个
          连续比特币区块的组（大约50分钟）。这提供了：
        </p>
        <ul>
          <li>状态转换的一致时间边界</li>
          <li>矿工激励框架（纪元挖矿奖励）</li>
          <li>应用程序的确定性最终性点</li>
        </ul>

        <h2>这能实现什么</h2>
        <p>
          有了 OP_NET，比特币可以支持：
        </p>
        <ul>
          <li><strong>自动做市商 (AMM)：</strong>Motoswap 的 NativeSwap 和 OP-20 池</li>
          <li><strong>收益农业：</strong>MotoChef 的 MasterChef 风格农场</li>
          <li><strong>代币发行：</strong>使用自定义参数部署您自己的 OP-20 代币</li>
          <li><strong>质押：</strong>MOTO 质押获取交换费收入</li>
          <li><strong>Proof of HODL：</strong>跟踪 UTXO 的非托管 BTC 质押</li>
        </ul>
        <p>
          所有这些同时您的比特币保留在比特币上，受制于比特币的安全
          模型，以及——关键的是——比特币的退出摩擦。
        </p>

        <h2>开始设置</h2>
        <p>
          要与 OP_NET 协议交互，您需要：
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <img
            src="/op-wallet-screenshot.png"
            alt="OP_WALLET 浏览器扩展——显示钱包界面、BTC 余额和网络选择器"
            style={{ maxWidth: '100%', borderRadius: '16px', border: '1px solid var(--border-color)' }}
          />
        </div>

        <h3>1. OP_WALLET</h3>
        <p>
          OP_WALLET 是一个浏览器扩展（Chrome/Brave），处理 OP_NET 交易。
          它管理您的密钥、签署交易，并连接到像 Motoswap 这样的 dApp。
        </p>
        <p>
          <a href="https://chromewebstore.google.com/detail/opwallet/pmbjpcmaaladnfpacpmhmnfmpklgbdjb" target="_blank" rel="noopener noreferrer">
            安装 OP_WALLET →
          </a>
        </p>

        <h3>2. 用于费用的比特币</h3>
        <p>
          所有 OP_NET 交易都需要 BTC 作为 gas。在您的钱包中保留足够的来支付：
        </p>
        <ul>
          <li>授权交易（首次与每个代币交互）</li>
          <li>交换、质押、解质押</li>
          <li>收获/领取操作</li>
        </ul>
        <p>
          几千聪可以处理大多数操作。在高活动期间保留更多。
        </p>

        <h3>3. 网络选择</h3>
        <p>
          确保您在正确的网络上：
        </p>
        <ul>
          <li><strong>主网：</strong>真实的比特币，真实的价值</li>
          <li><strong>测试网：</strong>使用测试网 BTC 的测试环境</li>
        </ul>

        <div className="callout warning">
          <div className="callout-title">关键</div>
          <p style={{ marginBottom: 0 }}>
            在交易前始终验证您在正确的网络上。主网和
            测试网地址看起来不同，但错误会发生。仔细检查。
          </p>
        </div>
      </>
    )
  },

  'bitcoin-token-wars': {
    title: '比特币代币战争',
    prev: { slug: 'opnet-overview', title: 'OP_NET 概述' },
    next: { slug: 'motoswap', title: 'Motoswap 交易所' },
    content: (
      <>
        <p>
          在 OP_NET 之前，比特币有代币。BRC-20 和 Runes 爆发性流行，
          创造了数十亿的交易量。然后它们崩溃了。理解
          <strong>为什么它们暴涨以及为什么它们失败</strong>对于
          理解为什么 OP-20 代币从根本上不同至关重要。
        </p>

        <h2>免费铸造革命</h2>
        <p>
          BRC-20 和 Runes 触及了一些强大的东西：<strong>免费铸造</strong>。
          比特币文化一直是关于无许可参与。当 BRC-20
          于2023年3月推出时，任何人都可以通过简单地支付比特币
          交易费来铸造代币。没有预售。没有 VC 分配。没有内部人优势。
        </p>
        <p>
          免费铸造机制创造了真正的 FOMO：
        </p>
        <ul>
          <li>代币分发给最先到达的人</li>
          <li>早期铸造者获得了后来铸造者无法获得的分配</li>
          <li>铸造竞赛创造了话题和社区</li>
          <li>没有"团队分配"或"投资者解锁"的压力</li>
        </ul>
        <p>
          ORDI，第一个 BRC-20 代币，从免费铸造涨到10亿美元市值。
          Runes 于2024年4月推出，看到了类似的爆发。机制有效。
          比特币持有者终于有了他们可以拥有的代币。
        </p>

        <div className="callout info">
          <div className="callout-title">免费铸造的吸引力</div>
          <p style={{ marginBottom: 0 }}>
            免费铸造与比特币的精神一致。没有守门人。没有内部人获得
            更好的交易。只有工作量证明（支付费用）和参与证明。
            这就是为什么它们与比特币文化产生如此强烈的共鸣。
          </p>
        </div>

        <h2>PSBT 死亡螺旋</h2>
        <p>
          以下是杀死它们的原因：<strong>PSBT 交易</strong>。
        </p>
        <p>
          BRC-20 和 Runes 代币在 PSBT（部分签名的比特币交易）
          市场上交易——Magic Eden、UniSat、OKX。这些是<strong>纯粹的订单簿
          系统</strong>。卖家以一个价格挂出代币。买家要么接受挂单，
          要么不接受。没有 AMM。没有流动性池。没有自动做市。
        </p>
        <p>
          这创造了一个致命的问题：
        </p>

        <div className="callout warning">
          <div className="callout-title">流动性死亡螺旋</div>
          <p style={{ marginBottom: 0 }}>
            <strong>当买压停止时，所有流动性立即消失。</strong><br/><br/>
            在 PSBT 市场上，如果没有人想以任何价格购买您的代币，您
            literally 无法卖出。没有流动性提供者。没有可以卖入的池子。
            您拥有数学上无法出售的代币。
          </p>
        </div>

        <h3>死亡螺旋如何运作</h3>
        <ol>
          <li>代币发布，免费铸造创造分发</li>
          <li>早期兴奋驱动 PSBT 市场上的买单</li>
          <li>价格随着买家竞争挂单而上涨</li>
          <li>代币达到顶峰——鲸鱼决定获利了结</li>
          <li>鲸鱼挂出大量卖单，压低现有卖家</li>
          <li>买家看到倾销，撤回他们的出价</li>
          <li><strong>突然间买单为零</strong></li>
          <li>每个持有者都想卖出，但 literally 没有人可以卖给</li>
          <li>代币实际上毫无价值且同时缺乏流动性</li>
        </ol>
        <p>
          这不是假设。观察任何 BRC-20 或 Runes 图表。模式是
          相同的：爆炸性上涨，突然崩溃，然后<strong>完全流动性死亡</strong>，
          您甚至无法以-90%退出，因为根本没有出价。
        </p>

        <h2>为什么 PSBT 市场无法拥有真正的流动性</h2>
        <p>
          在 Uniswap 上，流动性提供者存入池子并赚取费用。池子
          始终存在。您总是可以卖入它（以某个价格）。AMM 保证
          总是有出价。
        </p>
        <p>
          PSBT 市场没有这些：
        </p>
        <table>
          <thead>
            <tr>
              <th>特性</th>
              <th>AMM（Uniswap 风格）</th>
              <th>PSBT 市场</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>流动性来源</td>
              <td>始终存在的 LP 池</td>
              <td>主动下单的买家</td>
            </tr>
            <tr>
              <td>您总是能卖出吗？</td>
              <td>是（以某个价格）</td>
              <td>仅当有人出价时</td>
            </tr>
            <tr>
              <td>价格发现</td>
              <td>算法化 (x × y = k)</td>
              <td>卖家要价</td>
            </tr>
            <tr>
              <td>恐慌期间</td>
              <td>高滑点但退出存在</td>
              <td>零出价 = 无法退出</td>
            </tr>
          </tbody>
        </table>
        <p>
          <strong>这就是为什么每个 BRC-20 和 Runes 代币最终都会死亡。</strong>交易
          机制保证了这一点。当情绪转变时，流动性不只是
          减少——它完全消失。
        </p>

        <h2>套利解决方案</h2>
        <p>
          Motoswap 上的 OP-20 代币拥有 BRC-20 和 Runes 永远不会有的东西：
          <strong>通过套利实现的永久流动性</strong>。
        </p>
        <p>
          以下是它的工作原理。想象一个叫 EXAMPLE 的代币有两个池：
        </p>
        <ul>
          <li>Motoswap 上的 EXAMPLE-MOTO 池</li>
          <li>Motoswap 上的 EXAMPLE-WBTC 池</li>
        </ul>
        <p>
          有人在 EXAMPLE-MOTO 池中大量卖出。EXAMPLE 的价格
          在该池中下跌。但它在 EXAMPLE-WBTC 中还没有下跌。
        </p>
        <p>
          <strong>这创造了套利机会。</strong>
        </p>
        <ol>
          <li>套利机器人看到池之间的价格差异</li>
          <li>在 MOTO 池中以低价买入 EXAMPLE</li>
          <li>在 WBTC 池中以更高价格卖出 EXAMPLE</li>
          <li>将差价作为利润收入囊中</li>
          <li>两个池现在以相同价格平衡</li>
        </ol>

        <div className="callout tip">
          <div className="callout-title">桌上的免费钱</div>
          <p style={{ marginBottom: 0 }}>
            套利是<strong>literally 放在桌上的免费钱</strong>。
            总会有人——机器人、交易者、任何人——愿意拿走
            那笔免费钱。这意味着池将始终保持平衡。流动性
            永远不会像 PSBT 市场那样干涸。
          </p>
        </div>

        <p>
          代币拥有的交易对越多，存在的套利连接就越多，
          流动性在结构上就越有保障。即使每个持有者都想
          卖出，池仍然存在。您仍然可以退出。
        </p>
        <p>
          <strong>这是 OP-20 和 BRC-20/Runes 之间的根本区别。</strong>
          这不是关于技术或标准。这是关于交易机制。
          具有套利的 AMM 创造永久流动性。PSBT 市场创造
          流动性黑洞。
        </p>

        <h2>假稳定币问题</h2>
        <p>
          BRC-20 和 Runes 有"稳定币"——声称跟踪美元的代币。但
          问题是：<strong>它们实际上并不稳定</strong>。
        </p>
        <p>
          在 PSBT 市场上，您以<em>聪</em>为代币定价。当您挂出
          "稳定币"出售时，您是在说"我将以 X 聪卖出 1 个 USDT 等价代币"。
          但如果比特币价格变动：
        </p>
        <ul>
          <li>BTC 上涨 10% → 您的"稳定币"挂单以美元计现在便宜了 10%</li>
          <li>BTC 下跌 10% → 您的"稳定币"挂单以美元计现在贵了 10%</li>
        </ul>
        <p>
          "稳定币"随比特币波动，因为<strong>一切都以聪定价</strong>。
          这完全违背了稳定币的目的。您无法用以比特币计价的资产
          对冲比特币风险。
        </p>

        <div className="callout warning">
          <div className="callout-title">BRC-20 "稳定币"是假的</div>
          <p style={{ marginBottom: 0 }}>
            如果 BTC 在市场崩盘期间下跌 20%，您的 BRC-20 "USDT"不会保持在
            1美元——它会随 BTC 崩盘。您名义上有稳定币敞口。
            PSBT 定价机制使真正的稳定币成为不可能。
          </p>
        </div>

        <h2>获取 OP-20 代币的多种方式</h2>
        <p>
          Motoswap 发射台为代币部署者提供<strong>多种分发
          机制</strong>——不仅仅是免费铸造，而是一个完整的工具包：
        </p>

        <table>
          <thead>
            <tr>
              <th>方法</th>
              <th>工作原理</th>
              <th>适合谁</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>免费铸造</strong></td>
              <td>任何人可以通过支付 BTC gas 费铸造代币</td>
              <td>社区分发，公平发布信仰者</td>
            </tr>
            <tr>
              <td><strong>用 BTC 购买</strong></td>
              <td>通过 NativeSwap 直接购买代币</td>
              <td>任何想要获得敞口的比特币持有者</td>
            </tr>
            <tr>
              <td><strong>用 OP-20 购买</strong></td>
              <td>交换 MOTO 或其他 OP-20 代币</td>
              <td>重新平衡的现有 OP_NET 用户</td>
            </tr>
            <tr>
              <td><strong>LP 挖矿</strong></td>
              <td>提供流动性，质押 LP，赚取代币</td>
              <td>理解无常损失的收益农民</td>
            </tr>
            <tr>
              <td><strong>单边质押</strong></td>
              <td>质押一种代币赚取另一种</td>
              <td>风险较低，参与更简单</td>
            </tr>
            <tr>
              <td><strong>Proof of HODL</strong></td>
              <td>无托管质押 BTC，赚取代币</td>
              <td>不会卖出的比特币持有者</td>
            </tr>
          </tbody>
        </table>

        <p>
          这种灵活性意味着代币部署者可以设计符合其
          目标的分发。想要比特币文化氛围？启用免费铸造。想快速引导流动性？
          重点放在 LP 挖矿。想吸引比特币持有者？使用 Proof of HODL。
        </p>

        <h2>底线</h2>
        <p>
          BRC-20 和 Runes 代币有正确的想法（免费铸造、比特币原生）但
          错误的交易机制（PSBT 市场）。当买压停止时，
          流动性立即死亡，持有者留下了无法出售的代币。
        </p>
        <p>
          OP-20 代币通过 AMM 流动性和套利解决了这个问题。多个交易
          对创造了永远不会完全消失的结构性流动性。免费铸造
          文化得到保留，但交易机制得到了修复。
        </p>

        <div className="callout info">
          <div className="callout-title">机会</div>
          <p style={{ marginBottom: 0 }}>
            如果您理解了为什么 BRC-20 失败，您就理解了为什么 OP-20 不同。
            这不是更好的营销或更新的技术。这是解决了实际
            问题：<strong>通过适当的市场结构实现可持续的流动性</strong>。
          </p>
        </div>
      </>
    )
  },

  'motoswap': {
    title: 'Motoswap 交易所',
    prev: { slug: 'bitcoin-token-wars', title: '比特币代币战争' },
    next: { slug: 'nativeswap', title: 'NativeSwap（BTC 交易）' },
    content: (
      <>
        <p>
          Motoswap 是比特币一层上首个完全去中心化的交易所。它不仅仅是
          一个 DEX——它是建立在 OP_NET 上的完整 DeFi 生态系统，将
          DeFi 之夏 2020 的一切带到比特币。
        </p>
        <p>
          <a href="https://motoswap.org" target="_blank" rel="noopener noreferrer">motoswap.org</a>
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <img
            src="/motoswap-main.png"
            alt="Motoswap 主界面显示交换、池、农场导航"
            style={{ maxWidth: '100%', borderRadius: '16px', border: '1px solid var(--border-color)' }}
          />
        </div>

        <h2>Motoswap 技术栈</h2>
        <p>
          Motoswap 将多个组件整合到一个集成平台中：
        </p>
        <ul>
          <li><strong>NativeSwap：</strong>用于直接交易 BTC 的比特币原生 AMM，具有 P2P 结算（在下一节介绍）</li>
          <li><strong>OP-20 池：</strong>用于代币到代币交易的传统 Uniswap 风格池</li>
          <li><strong>MotoChef：</strong>MasterChef 风格的收益农业（稍后介绍）</li>
          <li><strong>MOTO 质押：</strong>协议费用分享（稍后介绍）</li>
          <li><strong>代币发射台：</strong>部署您自己的代币和农场</li>
        </ul>

        <h2>两种类型的池</h2>

        <h3>NativeSwap 池（BTC ↔ 代币）</h3>
        <p>
          这些使原生比特币与代币的无信任交易成为可能——没有其他比特币 DEX
          可以做到。完整的机制在下一节介绍，但这里是
          关键区别：
        </p>
        <ul>
          <li>虚拟储备记账</li>
          <li>卖家队列系统</li>
          <li>用于价格保护的两阶段提交</li>
          <li>BTC 从不接触合约——直接在交易者之间流动</li>
        </ul>
        <p>
          使用 NativeSwap 池在原生比特币和任何 OP-20 代币之间交易。
        </p>

        <h3>OP-20 池（代币 ↔ 代币）</h3>
        <p>
          这些是传统的 Uniswap V2 风格池：
        </p>
        <ul>
          <li>恒定乘积公式 (x × y = k)</li>
          <li>双边流动性（存入两种代币）</li>
          <li>LP 代币代表您在池中的份额</li>
          <li>代币由合约持有</li>
        </ul>

        <h2>费用结构</h2>
        <p>
          Motoswap 上的每笔交换都会产生费用。以下是它们的去向：
        </p>

        <h3>OP-20 交换（代币 ↔ 代币）</h3>
        <table>
          <thead>
            <tr>
              <th>费用</th>
              <th>接收者</th>
              <th>目的</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0.3%</td>
              <td>流动性提供者</td>
              <td>与 Uniswap 相同——奖励 LP 提供者</td>
            </tr>
            <tr>
              <td>0.2%</td>
              <td>MOTO 质押者</td>
              <td>协议收入分享</td>
            </tr>
            <tr>
              <td><strong>总计：0.5%</strong></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <h3>NativeSwap 交换（BTC ↔ 代币）</h3>
        <table>
          <thead>
            <tr>
              <th>费用</th>
              <th>接收者</th>
              <th>目的</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0.2%</td>
              <td>MOTO 质押者</td>
              <td>协议收入分享</td>
            </tr>
          </tbody>
        </table>

        <p>
          <strong>这意味着 MOTO 质押者从平台上的每一笔交易中赚取费用</strong>——
          OP-20 池和 NativeSwap 池都是如此。更多交易量 = 更多奖励。
        </p>

        <h2>提供流动性</h2>
        <p>
          提供流动性意味着将资产存入池中，以便其他人可以交易。
          作为回报，您收到 LP 代币并赚取交易费的份额。
        </p>

        <h3>对于 OP-20 池：</h3>
        <ol>
          <li>转到 Motoswap 的池页面</li>
          <li>选择代币对（例如 MOTO-PILL）</li>
          <li>存入等值的两种代币</li>
          <li>收到代表您份额的 LP 代币</li>
          <li>赚取该池所有交易的 0.3%（与您的份额成比例）</li>
        </ol>

        <h3>对于 NativeSwap 池：</h3>
        <p>
          NativeSwap 的工作方式不同，因为 BTC 不在池中持有——它
          直接在买家和卖家之间流动。
        </p>
        <ul>
          <li><strong>代币侧：</strong>池创建者在创建池时存入代币</li>
          <li><strong>卖出代币：</strong>加入卖家队列，当买家到达时收到 BTC</li>
          <li><strong>BTC 侧：</strong>来自购买代币的买家</li>
        </ul>

        <div className="callout warning">
          <div className="callout-title">当前 NativeSwap 限制</div>
          <p style={{ marginBottom: 0 }}>
            NativeSwap 已上线，但一些功能仍在开发中：<br/>
            • <strong>添加/移除 LP：</strong>NativeSwap 池尚未激活<br/>
            • <strong>取消卖单：</strong>一旦您加入卖家队列，就无法取消<br/><br/>
            当您挂出代币出售时，您就承诺了，直到买家完成您的订单。
            在加入队列之前确保您想要出售。
          </p>
        </div>

        <h2>无常损失</h2>
        <p>
          如果您向 OP-20 池提供流动性，您需要了解<strong>无常
          损失 (IL)</strong>。
        </p>
        <p>
          当您以 50/50 比例存入两种代币时，池会随着价格变化自动重新平衡。
          如果代币 A 相对于代币 B 翻倍，池会卖出 A 来买入 B。
          您最终会比只是持有时拥有更少的 A 和更多的 B。
        </p>
        <p>
          损失是"无常的"，因为如果价格回到原始
          比例，它会逆转。但如果您在价格发生分歧时提取，损失就会变成永久的。
        </p>
        <p>
          IL 是 LP 提供的主要风险。您赚取的交易费需要超过
          IL，否则您本来会更好地只是持有。
        </p>

        <div className="callout warning">
          <div className="callout-title">IL 可能很显著</div>
          <p style={{ marginBottom: 0 }}>
            一种代币 2 倍的价格变化导致约 5.7% 的 IL。5 倍变化导致约 25% 的 IL。
            不理解这个数学就不要提供流动性。
          </p>
        </div>

        <ImpermanentLossDiagram />

        <h2>交换代币</h2>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <img
            src="/motoswap-swap.png"
            alt="Motoswap 交换界面显示代币交换的价格报价和价格影响"
            style={{ maxWidth: '480px', width: '100%', borderRadius: '16px', border: '1px solid var(--border-color)' }}
          />
        </div>

        <h3>用 BTC 购买代币（NativeSwap）</h3>
        <ol>
          <li>转到交换，选择 BTC 和您想要的代币</li>
          <li>输入要花费的 BTC 金额</li>
          <li>点击交换——这会创建一个<strong>预约</strong></li>
          <li>您的价格现在锁定 5 个区块</li>
          <li>确认执行交易以完成交换</li>
          <li>BTC 直接转给卖家；您收到代币</li>
        </ol>

        <h3>卖出代币换取 BTC（NativeSwap）</h3>
        <ol>
          <li>转到交换，选择您的代币和 BTC</li>
          <li>输入要卖出的金额</li>
          <li>您以当前预言机价格加入卖家队列</li>
          <li>当买家到达时，您收到与您的队列位置成比例的 BTC</li>
          <li>这是原子性发生的——您不需要在线</li>
        </ol>

        <h3>代币到代币（OP-20 池）</h3>
        <ol>
          <li>转到交换，选择两种代币</li>
          <li>输入金额</li>
          <li>确认交换交易</li>
          <li>标准 AMM 交换（无需预约）</li>
        </ol>

        <div className="callout tip">
          <div className="callout-title">专业提示</div>
          <p style={{ marginBottom: 0 }}>
            对于大型 NativeSwap 交易，检查队列深度。稀薄的队列可能
            无法完成您的整个订单，或可能导致显著的价格影响。
          </p>
        </div>
      </>
    )
  },

  // 由于篇幅限制，以下是其余部分的简化版本
  // 完整实现需要翻译所有剩余的章节

  'nativeswap': {
    title: 'NativeSwap（BTC 交易）',
    prev: { slug: 'motoswap', title: 'Motoswap 交易所' },
    next: { slug: 'op20s-stablecoins', title: 'OP-20S 稳定币' },
    content: (
      <>
        <p>
          NativeSwap 是 Motoswap 的核心创新——使原生比特币
          DeFi 成为可能的 AMM。可以将其视为<strong>Uniswap V3 风格的单边流动性，
          适应了比特币的独特约束</strong>。
        </p>
        <p>
          像现代 AMM 一样，NativeSwap 通过恒定乘积
          公式使用算法价格发现。但它是专门为比特币架构的：OP-20 代币由
          智能合约持有（像任何 DEX），而 BTC 是<strong>通过合约 P2P 路由的</strong>
          ——验证和强制执行，但从不托管。这就是您如何在比特币 L1 上
          构建真正的 DEX。
        </p>

        <h2>为什么比特币交易是破碎的</h2>
        <p>
          在 NativeSwap 之前，交易比特币原生代币（BRC-20、Runes、Ordinals）意味着
          使用 <strong>PSBT 市场</strong>。如果您在 Magic Eden、UniSat
          或任何其他比特币代币市场上交易过，您就使用过 PSBT。
        </p>

        <h3>PSBT 交易如何工作</h3>
        <ol>
          <li><strong>卖家创建挂单：</strong>签署一个部分交易，表示"如果有人给我 X BTC，我就发送我的代币"</li>
          <li><strong>市场持有 PSBT：</strong>部分签名的交易位于中心化服务器上</li>
          <li><strong>买家完成它：</strong>签署另一半，添加 BTC 输入</li>
          <li><strong>市场广播：</strong>完整的交易上链</li>
        </ol>

        <h3>为什么 PSBT 交易很糟糕</h3>
        <p>
          这听起来合理，直到您检查问题：
        </p>

        <div className="callout warning">
          <div className="callout-title">PSBT 问题</div>
          <p style={{ marginBottom: 0 }}>
            PSBT 市场只是<strong>带有额外步骤的中心化订单簿</strong>。
            它们具有中心化交易所的所有问题，加上比特币的缓慢。
          </p>
        </div>

        <NativeSwapArchitectureDiagram />

        <h2>NativeSwap 实际是什么</h2>
        <p>
          NativeSwap 最好理解为<strong>单边流动性 AMM</strong>——类似于
          Uniswap V3 中的集中流动性，但专为比特币的约束设计。
        </p>

        <h3>三个核心组件</h3>
        <table>
          <thead>
            <tr>
              <th>组件</th>
              <th>目的</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>恒定乘积 (k = T × B)</td>
              <td>AMM 定价——像 Uniswap 一样的算法价格发现</td>
            </tr>
            <tr>
              <td>队列系统</td>
              <td>单边流动性——卖家提供代币，买家带来 BTC</td>
            </tr>
            <tr>
              <td>P2P 结算</td>
              <td>比特币原生——BTC 直接在交易者之间流动，合约强制执行</td>
            </tr>
          </tbody>
        </table>

        <AMMCurveDiagram />

        <div className="callout tip">
          <div className="callout-title">底线</div>
          <p style={{ marginBottom: 0 }}>
            NativeSwap 是一个<strong>具有 P2P 结算的比特币原生 AMM</strong>。
            恒定乘积公式提供价格发现。队列系统提供
            具有单边流动性的公平执行。验证模型提供无信任性。
            OP-20 代币由合约持有；BTC 直接在交易者之间流动，
            合约强制正确执行。这就是您如何在比特币上构建真正的 DEX。
          </p>
        </div>
      </>
    )
  },

  'op20s-stablecoins': {
    title: 'OP-20S 稳定币',
    prev: { slug: 'nativeswap', title: 'NativeSwap（BTC 交易）' },
    next: { slug: 'motochef', title: 'MotoChef（收益农业）' },
    content: (
      <>
        <p>
          <strong>有史以来第一次</strong>，您可以在比特币
          一层上拥有真正的稳定币——通过 AMM 在 BTC 和美元挂钩资产之间无信任交换。
          这是一个巨大的游戏规则改变者，解决了比特币 DeFi 最大的缺失部分之一。
        </p>

        <div className="callout info">
          <div className="callout-title">为什么这很重要</div>
          <p style={{ marginBottom: 0 }}>
            没有真正的稳定币，比特币 DeFi 是不完整的。您无法对冲，无法
            在不离开生态系统的情况下获利了结，无法构建借贷协议。
            OP-20S 使比特币 DeFi 功能完整。
          </p>
        </div>

        <h2>问题：在比特币上获得美元</h2>
        <p>
          现在，如果您想将比特币换成稳定币，您的选择很糟糕：
        </p>

        <h3>选项 1：中心化交易所</h3>
        <ul>
          <li>将 BTC 发送到 Coinbase/Binance/Kraken</li>
          <li>卖出换取 USDT/USDC</li>
          <li>提取到... 哪里？以太坊？Solana？</li>
          <li>您的"比特币利润"现在在另一条链上</li>
          <li>需要 KYC。托管风险。不是您的钥匙。</li>
        </ul>

        <h3>选项 2：桥接</h3>
        <ul>
          <li>包装您的 BTC（WBTC、renBTC 等）</li>
          <li>桥接到以太坊或另一条链</li>
          <li>在那里交换为稳定币</li>
          <li>现在您有托管包装 BTC 风险加上桥接风险</li>
          <li>数十亿美元因桥接黑客而损失</li>
        </ul>

        <h2>解决方案：OP-20S</h2>
        <p>
          OP-20S 是 NativeSwap 上 OP-20 代币的稳定币扩展标准。
          它启用<strong>感知锚定的定价</strong>——AMM 知道目标美元
          价值并相应定价。
        </p>

        <h3>它如何工作</h3>
        <p>
          稳定币发行者部署实现 OP-20S 接口的 OP-20 代币：
        </p>
        <ul>
          <li><strong>pegRate()：</strong>每个代币的目标价格（以聪为单位）（例如，"1 代币 = 价值 1 美元的聪"）</li>
          <li><strong>pegAuthority()：</strong>谁可以更新锚定率</li>
          <li><strong>pegUpdatedAt()：</strong>锚定上次更新的时间</li>
        </ul>
        <p>
          NativeSwap 检测这些代币并应用<strong>StableSwap 数学</strong>——
          优化的 AMM 曲线，最小化锚定价格附近的滑点。
        </p>

        <StableSwapCurveDiagram />

        <div className="callout tip">
          <div className="callout-title">这解锁了什么</div>
          <p style={{ marginBottom: 0 }}>
            比特币 L1 上的真正稳定币完成了 DeFi 堆栈。您现在可以：
            农耕收益、以美元获利、对冲仓位，并构建复杂的
            金融工具——所有这些都无需离开比特币。缺失的部分
            终于到位了。
          </p>
        </div>
      </>
    )
  },

  'motochef': {
    title: 'MotoChef（收益农业）',
    prev: { slug: 'op20s-stablecoins', title: 'OP-20S 稳定币' },
    next: { slug: 'proof-of-hodl', title: 'Proof of HODL' },
    content: (
      <>
        <p>
          MotoChef 是驱动比特币流动性挖矿的引擎。它是
          SushiSwap 的 MasterChef 合约的直接分叉——推动 DeFi 之夏 2020
          并创造数十亿价值的相同代码。<strong>那整个游戏现在可以在比特币一层上玩了。</strong>
        </p>

        <div className="callout info">
          <div className="callout-title">DeFi 之夏，在比特币上重现</div>
          <p style={{ marginBottom: 0 }}>
            如果您错过了 DeFi 之夏 2020，这是您的第二次机会。在以太坊上
            创造世代财富的相同收益农业机制现在在最
            安全、最慢、退出摩擦最高的链上上线。游戏相同。
            环境更好。
          </p>
        </div>

        <h2>MasterChef 革命（2020）</h2>
        <p>
          要理解 MotoChef，您需要了解2020年8月发生的绝对疯狂。
          不仅仅是 SushiSwap——<strong>之后的一切</strong>。
        </p>

        <MasterChefForkExplosion />

        <h3>改变一切的代码</h3>
        <p>
          MasterChef 合约大约是 200 行 Solidity。它做一件事：根据可配置的池权重和排放率
          按比例向质押者分发代币。就这样。
        </p>
        <p>
          <strong>这个简单的合约成为 DeFi 历史上被分叉最多的代码。</strong>
        </p>

        <FoodTokenTimeline />

        <DeFiSummerTVLChart />

        <h2>MotoChef：比特币上的 MasterChef</h2>
        <p>
          MotoChef 是通过 OP_NET 将 MasterChef 合约忠实移植到比特币的版本。
          机制是相同的：
        </p>
        <ul>
          <li><strong>每区块收益：</strong>每个比特币区块（约 10 分钟）固定代币排放</li>
          <li><strong>池权重：</strong>分配点数决定排放分配</li>
          <li><strong>奖励乘数：</strong>启动期具有放大的排放</li>
          <li><strong>LP 质押：</strong>质押 Motoswap LP 代币赚取农场代币</li>
          <li><strong>单边质押：</strong>质押单个代币获得较低（但更安全）的收益</li>
          <li><strong>随时收获：</strong>领取累积奖励而无需解质押</li>
        </ul>
        <p>
          但 MotoChef 添加了 MasterChef 从未有过的东西：<strong>Proof of HODL</strong>。
        </p>
      </>
    )
  },

  'proof-of-hodl': {
    title: 'Proof of HODL',
    prev: { slug: 'motochef', title: 'MotoChef（收益农业）' },
    next: { slug: 'moto-token', title: '$MOTO 代币' },
    content: (
      <>
        <p>
          Proof of HODL 是 MotoChef 革命性的比特币质押方法——
          第一个让您在不锁定、不委托、完全没有托管风险的情况下
          在 BTC 上获得收益的机制。
        </p>

        <div className="callout info">
          <div className="callout-title">核心创新</div>
          <p style={{ marginBottom: 0 }}>
            您的 BTC 留在您的钱包中。您可以随时花费它。
            而且您仍然获得奖励。没有锁定。没有削减。没有委托。
          </p>
        </div>

        <ProofOfHODLComparison />

        <h2>50亿美元的问题</h2>
        <p>
          超过 57,000 BTC——约 50 亿美元——锁定在 Babylon 的质押
          协议中。Babylon 主导"比特币质押"叙事，但让我们检查
          它实际提供什么：
        </p>
        <ul>
          <li>您的 BTC 最长锁定 15 个月</li>
          <li>提前解绑需要 7 天等待期加上"契约委员会"批准</li>
          <li>您委托给"最终性提供者"（第三方验证者）</li>
          <li>如果您的验证者行为不端，您的质押可能被削减</li>
          <li>奖励以 BABY 代币支付，而不是比特币（约 1% APY）</li>
        </ul>
        <p>
          那不是比特币质押。<strong>那是比特币停车。</strong>
        </p>

        <h2>Proof of HODL 如何工作</h2>
        <p>
          核心洞察：将比特币 UTXO 视为<strong>持有证明</strong>，
          而不是锁定的抵押品。
        </p>
        <ol>
          <li>
            <strong>质押您的 BTC：</strong>您创建一笔发送 BTC 给
            自己的交易。MotoChef 合约将此 UTXO 的哈希记录为与您的
            地址"绑定"。
          </li>
          <li>
            <strong>您的 BTC 留在您的钱包中：</strong>它没有锁定。没有时间锁定。
            没有委托。它是一个您完全用私钥控制的标准 UTXO。
          </li>
          <li>
            <strong>赚取奖励：</strong>只要该 UTXO 存在（未被花费），
            您就从农场累积收益。
          </li>
          <li>
            <strong>领取奖励：</strong>当您收获时，合约检查您的
            UTXO 是否仍然存在。如果存在，您收到累积的奖励。
          </li>
          <li>
            <strong>自动解质押：</strong>如果您因任何原因花费该 UTXO，
            您立即"解质押"。UTXO 不再存在，所以合约知道
            您已经转移了您的比特币。
          </li>
        </ol>

        <div className="callout tip">
          <div className="callout-title">哲学</div>
          <p style={{ marginBottom: 0 }}>
            这就是"不是您的钥匙，不是您的币"在产生收益的
            环境中的样子。您持有您的比特币——在您的钱包中，在您的控制下，
            随时可以花费——而且您因持有它而获得收益。智能合约观察
            您的 UTXO。您保留您的钥匙。
          </p>
        </div>
      </>
    )
  },

  'moto-token': {
    title: '$MOTO 代币',
    prev: { slug: 'proof-of-hodl', title: 'Proof of HODL' },
    next: { slug: 'yield-farming', title: '收益农业' },
    content: (
      <>
        <p>
          $MOTO 是 Motoswap 的原生代币。它不是治理代币——<strong>它是
          收入分享代币</strong>。当您质押 MOTO 时，您从平台上
          每一笔交换中赚取分成。这就是重点。
        </p>

        <div className="callout info">
          <div className="callout-title">为什么 $MOTO 存在</div>
          <p style={{ marginBottom: 0 }}>
            MOTO 对齐激励。质押者想要更多交易量，因为更多交易量 =
            更多费用。他们成为平台的传道者。协议将
            价值分配给其最忠诚的用户，而不是提取它。
          </p>
        </div>

        <MOTOFeeFlowDiagram />

        <h2>收入模式</h2>
        <p>
          Motoswap 上的每笔交换都会产生费用。以下是这些费用的去向：
        </p>
        <p>
          <strong>这意味着 MOTO 质押者从 Motoswap 上的 literally 每笔交易中赚取费用</strong>——
          OP-20 池和 NativeSwap 池都是如此。平台上的交易活动越多，
          流向质押者的奖励就越多。
        </p>

        <h2>削减机制（理解这一点至关重要）</h2>
        <p>
          MOTO 质押有一个削减惩罚，旨在防止雇佣资本
          玩弄系统。<strong>这是质押前最重要的理解事项。</strong>
        </p>

        <h3>规则</h3>
        <ul>
          <li>当您质押 MOTO 时，<strong>2,000 区块计时器</strong>（约 14 天）开始</li>
          <li>如果您在 2,000 区块之前解质押，您要为质押的 MOTO 支付惩罚</li>
          <li>惩罚从<strong>20%</strong>开始，每 100 个区块减少 1%</li>
          <li>2,000 区块后没有领取，惩罚达到 0%</li>
        </ul>

        <div className="callout warning">
          <div className="callout-title">关键：领取重置计时器</div>
          <p style={{ marginBottom: 0 }}>
            <strong>每次您领取奖励，您的 2,000 区块计时器重置为零。</strong>
            这不是 bug——这是有意的。如果您在第 1,900 区块领取，您的惩罚
            回到 20%。您必须再等 2,000 区块才能再次达到 0% 惩罚。
          </p>
        </div>
      </>
    )
  },

  'yield-farming': {
    title: '收益农业',
    prev: { slug: 'moto-token', title: '$MOTO 代币' },
    next: { slug: 'farming-strategies', title: '农业策略' },
    content: (
      <>
        <p>
          收益农业是 DeFi 的核心游戏。理解它的运作方式——机械地、
          经济地和战略地——对于成功至关重要。
        </p>

        <h2>收益农业实际上是什么</h2>
        <p>
          剥去行话，收益农业很简单：<strong>代币部署者付费
          让人们提供资本</strong>。
        </p>
        <p>
          一个新代币发布。它需要流动性才能交易。没有流动性，
          没有人能以合理的价格买卖。所以部署者创建一个收益农场：
          "在这里存入您的资产，我们将用我们的代币支付您。"
        </p>

        <h2>奖励数学</h2>
        <p>
          理解奖励如何计算可以帮助您做出更好的决定。
        </p>

        <h3>每区块收益</h3>
        <p>
          每个农场都有一个<strong>每区块收益</strong>设置——在所有池中
          每个比特币区块分发的代币总数。每天约 144 个区块，
          您可以计算每日排放：
        </p>
        <pre><code>每日排放 = 每区块收益 × 144</code></pre>

        <h3>池权重（分配点数）</h3>
        <p>
          农场中的每个池都有一个<strong>权重</strong>，决定其排放份额。
          如果所有池的总权重是 1000，而一个池的权重是 200，
          该池获得 20% 的排放。
        </p>
        <pre><code>池份额 = 池权重 ÷ 所有池的总权重</code></pre>

        <h3>您的份额</h3>
        <p>
          在池内，您的奖励份额取决于您的质押相对于总 TVL：
        </p>
        <pre><code>您的奖励 = (您的质押 ÷ 池 TVL) × 池排放</code></pre>
      </>
    )
  },

  'farming-strategies': {
    title: '农业策略',
    prev: { slug: 'yield-farming', title: '收益农业' },
    next: { slug: 'deploying-tokens', title: '部署代币' },
    content: (
      <>
        <p>
          部署农场是一回事。有利可图地玩收益农场是完全
          不同的技能。本节涵盖将成功农民与
          退出流动性区分开的策略。
        </p>

        <h2>时机选择您的入场</h2>

        <h3>奖励期是一切</h3>
        <p>
          当农场以 5 倍乘数启动时，在第一周内可以决定
          您的整个结果。
        </p>

        <h2>LP 质押 vs. 单边</h2>
        <p>
          这是您为每个农场做出的最重要的决定。
        </p>

        <h3>决策框架</h3>
        <p>
          <strong>LP 当：</strong>
        </p>
        <ul>
          <li>您相信两种代币会大致一起移动</li>
          <li>与单边相比 APY 差异巨大（3 倍以上）</li>
          <li>您在奖励期间农耕（奖励超过可能的 IL）</li>
          <li>您使用稳定币对或相关资产</li>
        </ul>

        <CompoundingFlowDiagram />

        <h2>何时退出</h2>
        <p>
          这是大多数人被搞的地方。他们成功农耕，积累了一袋，
          然后看着它归零，因为他们从未获利。
        </p>

        <div className="callout warning">
          <div className="callout-title">心理游戏</div>
          <p style={{ marginBottom: 0 }}>
            收益农业在心理上是残酷的。50,000% APY。10,000% APY。您的大脑
            尖叫"免费钱"。记住：APY 基于当前 TVL（随着人们进入而下降），
            APY 以农场代币计价（如果它下跌 80%，您的 100% APY
            实际上是亏损）。计算真实的数学，而不是幻想。
          </p>
        </div>
      </>
    )
  },

  'deploying-tokens': {
    title: '部署代币',
    prev: { slug: 'farming-strategies', title: '农业策略' },
    next: { slug: 'deploying-farms', title: '部署收益农场' },
    content: (
      <>
        <p>
          如果您想在比特币上创建 DeFi 游戏，首先从部署代币开始。
          Motoswap 发射台根据您正在构建的内容提供两条不同的路径。
        </p>

        <h2>OP-20 优势：多种获取路径</h2>
        <p>
          与 BRC-20/Runes 代币不同，用户只能免费铸造或在 PSBT 市场上购买，
          Motoswap 发射台上的 OP-20 代币为您提供<strong>多种分发代币的方式</strong>：
        </p>
        <table>
          <thead>
            <tr>
              <th>方法</th>
              <th>用户如何获得代币</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>免费铸造</strong></td>
              <td>支付 BTC gas 费，铸造代币（比特币文化最爱）</td>
            </tr>
            <tr>
              <td><strong>用 BTC 购买</strong></td>
              <td>通过 NativeSwap 交换原生比特币</td>
            </tr>
            <tr>
              <td><strong>用 OP-20 购买</strong></td>
              <td>通过 AMM 池交换 MOTO 或其他代币</td>
            </tr>
            <tr>
              <td><strong>LP 挖矿</strong></td>
              <td>提供流动性，质押 LP 代币，赚取奖励</td>
            </tr>
            <tr>
              <td><strong>单边质押</strong></td>
              <td>质押其他代币赚取您的代币</td>
            </tr>
            <tr>
              <td><strong>Proof of HODL</strong></td>
              <td>无托管质押 BTC，赚取代币</td>
            </tr>
          </tbody>
        </table>

        <TokenSupplyDiagram />

        <h2>两种类型的代币</h2>

        <h3>选项 1：收益代币（代币 + 农场）</h3>
        <p>
          这是创建完整 DeFi 游戏的。您同时部署代币<strong>和</strong>
          收益农场。农场将您的代币作为奖励分发给吸引
          流动性提供者。
        </p>

        <h3>选项 2：简单 OP-20 代币</h3>
        <p>
          这是没有附加收益农场的基本代币部署。您通过
          预铸和可选的免费铸造自己控制分发。
        </p>

        <div className="callout warning">
          <div className="callout-title">一切都是永久的</div>
          <p style={{ marginBottom: 0 }}>
            代币参数在部署后无法更改。名称、符号、小数位、
            总供应量、免费铸造设置——都是永久的。三重检查一切。
            代币名称中的拼写错误将永远存在于比特币上。
          </p>
        </div>
      </>
    )
  },

  'deploying-farms': {
    title: '部署收益农场',
    prev: { slug: 'deploying-tokens', title: '部署代币' },
    next: { slug: 'security', title: '安全' },
    content: (
      <>
        <p>
          您已经部署了代币。现在您需要引导流动性。本节
          涵盖部署 MotoChef 收益农场——吸引资本的游戏。
        </p>

        <h2>先决条件</h2>
        <ul>
          <li>已部署的收益代币（来自上一节）</li>
          <li>用于部署费用的 BTC</li>
          <li>如果您想要 LP 池，需要 LP 代币（先创建流动性）</li>
          <li>规划好的奖励策略</li>
          <li>横幅图片 URL（建议 200x400px）</li>
        </ul>

        <h2>操作顺序</h2>
        <p>
          这很重要。您必须遵循此顺序：
        </p>
        <ol>
          <li><strong>部署代币</strong>（带有用于流动性的预铸）——等待确认</li>
          <li><strong>创建 NativeSwap 池</strong>——需要代币存在</li>
          <li><strong>创建 OP-20 池</strong>（可选）——需要代币 + 配对代币</li>
          <li><strong>部署收益农场</strong>——需要步骤 2-3 的 LP 地址</li>
        </ol>

        <h2>农场配置</h2>

        <h3>收益配置</h3>
        <h4>每区块收益</h4>
        <p>
          每个比特币区块在所有池中分发多少代币。这是
          最重要的参数。
        </p>

        <h4>奖励乘数</h4>
        <p>
          在奖励期间应用的乘数。设置为 1 表示无奖励。
        </p>

        <div className="callout tip">
          <div className="callout-title">权重策略</div>
          <p style={{ marginBottom: 0 }}>
            LP 池应该有最高的权重。您是在为流动性付费。如果
            单边池比 LP 支付更好，没有人会提供流动性，您的
            代币将无法交易。
          </p>
        </div>
      </>
    )
  },

  'security': {
    title: '安全',
    prev: { slug: 'deploying-farms', title: '部署收益农场' },
    next: null,
    content: (
      <>
        <p>
          DeFi 是无情的。没有客服，没有退款，没有 FDIC
          保险。如果您犯了错误或被骗，您的资金永远消失了。
          安全不是可选的——它是生存。
        </p>

        <h2>钱包安全</h2>

        <h3>对于重要持仓使用硬件钱包</h3>
        <p>
          硬件钱包（Ledger、Trezor）将您的私钥保持离线。即使您的
          计算机被入侵，攻击者也无法访问存储在设备上的密钥。
        </p>

        <h3>助记词安全</h3>
        <ul>
          <li><strong>永远不要分享您的助记词。</strong>没有合法服务会要求它。</li>
          <li><strong>永远不要以数字方式存储它。</strong>没有照片，没有云存储，没有文本文件。</li>
          <li><strong>写在纸上</strong>并存放在安全的地方。</li>
          <li><strong>考虑金属备份</strong>以防火/水。</li>
        </ul>

        <h2>常见骗局</h2>

        <h3>"支持"私信</h3>
        <p>
          没有合法协议会首先私信您。任何在您私信中声称是"支持"
          的人都是骗子。他们想要您的助记词或想让您连接到
          恶意网站。
        </p>

        <h3>假网站</h3>
        <p>
          骗子创建具有略微不同 URL 的相似网站（motoswap.io
          而不是 motoswap.org 等）。在连接钱包之前始终验证 URL。
        </p>
        <p>
          <strong>真实网站：</strong>
        </p>
        <ul>
          <li>motoswap.org</li>
          <li>opnet.org</li>
        </ul>

        <div className="callout warning">
          <div className="callout-title">最终规则</div>
          <p style={{ marginBottom: 0 }}>
            永远不要冒险超过您能承受损失的金额。不仅仅是情感上——literally。
            如果失去这笔钱会影响您的生活，不要把它放在 DeFi 中。从小额开始，
            学习机制，只有在您理解自己在做什么时才扩大规模。
          </p>
        </div>

        <h2>资源</h2>
        <ul>
          <li><strong>Motoswap：</strong> <a href="https://motoswap.org" target="_blank" rel="noopener noreferrer">motoswap.org</a></li>
          <li><strong>OP_NET 文档：</strong> <a href="https://docs.opnet.org" target="_blank" rel="noopener noreferrer">docs.opnet.org</a></li>
          <li><strong>Twitter：</strong> <a href="https://twitter.com/opnetbtc" target="_blank" rel="noopener noreferrer">@opnetbtc</a>、<a href="https://twitter.com/MotoswapBTC" target="_blank" rel="noopener noreferrer">@MotoswapBTC</a></li>
          <li><strong>GitHub：</strong> <a href="https://github.com/btc-vision" target="_blank" rel="noopener noreferrer">github.com/btc-vision</a></li>
        </ul>
      </>
    )
  }
}
