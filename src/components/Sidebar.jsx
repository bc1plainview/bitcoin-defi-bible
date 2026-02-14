import { NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useLanguage, LANGUAGES } from '../context/LanguageContext'

// Icons as simple components
const icons = {
  tldr: 'TL',
  intro: '01',
  slowfi: '02',
  bitcoin: '03',
  opnet: '04',
  tokenwars: '05',
  motoswap: '06',
  nativeswap: '07',
  stablecoins: '08',
  motochef: '09',
  hodl: '10',
  moto: '11',
  farming: '12',
  strategy: '13',
  deploy: '14',
  farms: '15',
}

const navigationEn = [
  {
    title: 'Getting Started',
    id: 'getting-started',
    links: [
      { name: 'TLDR', slug: 'tldr', icon: icons.tldr },
      { name: 'Introduction', slug: 'introduction', icon: icons.intro },
      { name: 'The SlowFi Thesis', slug: 'what-is-slowfi', icon: icons.slowfi },
      { name: 'Why Bitcoin?', slug: 'why-bitcoin-defi', icon: icons.bitcoin },
      { name: 'OP_NET Overview', slug: 'opnet-overview', icon: icons.opnet },
      { name: 'Bitcoin Token Wars', slug: 'bitcoin-token-wars', icon: icons.tokenwars },
    ]
  },
  {
    title: 'Core Mechanics',
    id: 'core-mechanics',
    links: [
      { name: 'Motoswap Exchange', slug: 'motoswap', icon: icons.motoswap },
      { name: 'NativeSwap (BTC Trading)', slug: 'nativeswap', icon: icons.nativeswap },
      { name: 'OP-20S Stablecoins', slug: 'op20s-stablecoins', icon: icons.stablecoins },
      { name: 'MotoChef (Yield Farming)', slug: 'motochef', icon: icons.motochef },
      { name: 'Proof of HODL', slug: 'proof-of-hodl', icon: icons.hodl },
      { name: '$MOTO Token', slug: 'moto-token', icon: icons.moto },
    ]
  },
  {
    title: 'Playing the Games',
    id: 'playing-games',
    links: [
      { name: 'Yield Farming', slug: 'yield-farming', icon: icons.farming },
      { name: 'Farming Strategies', slug: 'farming-strategies', icon: icons.strategy },
    ]
  },
  {
    title: 'Creating the Games',
    id: 'creating-games',
    links: [
      { name: 'Deploying Tokens', slug: 'deploying-tokens', icon: icons.deploy },
      { name: 'Deploying Yield Farms', slug: 'deploying-farms', icon: icons.farms },
    ]
  },
]

const navigationZh = [
  {
    title: '入门指南',
    id: 'getting-started',
    links: [
      { name: '摘要', slug: 'tldr', icon: icons.tldr },
      { name: '简介', slug: 'introduction', icon: icons.intro },
      { name: 'SlowFi 理论', slug: 'what-is-slowfi', icon: icons.slowfi },
      { name: '为什么选择比特币？', slug: 'why-bitcoin-defi', icon: icons.bitcoin },
      { name: 'OP_NET 概述', slug: 'opnet-overview', icon: icons.opnet },
      { name: '比特币代币战争', slug: 'bitcoin-token-wars', icon: icons.tokenwars },
    ]
  },
  {
    title: '核心机制',
    id: 'core-mechanics',
    links: [
      { name: 'Motoswap 交易所', slug: 'motoswap', icon: icons.motoswap },
      { name: 'NativeSwap (BTC交易)', slug: 'nativeswap', icon: icons.nativeswap },
      { name: 'OP-20S 稳定币', slug: 'op20s-stablecoins', icon: icons.stablecoins },
      { name: 'MotoChef (流动性挖矿)', slug: 'motochef', icon: icons.motochef },
      { name: '持有证明', slug: 'proof-of-hodl', icon: icons.hodl },
      { name: '$MOTO 代币', slug: 'moto-token', icon: icons.moto },
    ]
  },
  {
    title: '参与游戏',
    id: 'playing-games',
    links: [
      { name: '流动性挖矿', slug: 'yield-farming', icon: icons.farming },
      { name: '挖矿策略', slug: 'farming-strategies', icon: icons.strategy },
    ]
  },
  {
    title: '创建游戏',
    id: 'creating-games',
    links: [
      { name: '部署代币', slug: 'deploying-tokens', icon: icons.deploy },
      { name: '部署收益农场', slug: 'deploying-farms', icon: icons.farms },
    ]
  },
]

// Count total pages
const totalPages = navigationEn.reduce((acc, section) => acc + section.links.length, 0)

export default function Sidebar({ isOpen }) {
  const location = useLocation()
  const [currentPageIndex, setCurrentPageIndex] = useState(0)
  const { language, t } = useLanguage()
  const navigation = language === LANGUAGES.ZH ? navigationZh : navigationEn

  // Calculate current page index for progress
  useEffect(() => {
    let index = 0
    for (const section of navigation) {
      for (const link of section.links) {
        if (location.pathname === `/docs/${link.slug}`) {
          setCurrentPageIndex(index + 1)
          return
        }
        index++
      }
    }
  }, [location, navigation])

  const progressPercent = (currentPageIndex / totalPages) * 100

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      {navigation.map((section) => (
        <div key={section.id} className="sidebar-section">
          <div className="sidebar-section-title">{section.title}</div>
          <ul className="sidebar-nav">
            {section.links.map((link) => (
              <li key={link.slug}>
                <NavLink
                  to={`/docs/${link.slug}`}
                  className={({ isActive }) => isActive ? 'active' : ''}
                >
                  <span className="nav-icon">{link.icon}</span>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="sidebar-progress">
        <div className="sidebar-progress-label">
          {t('Progress', '进度')}: {currentPageIndex} / {totalPages}
        </div>
        <div className="sidebar-progress-bar">
          <div
            className="sidebar-progress-fill"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </aside>
  )
}
