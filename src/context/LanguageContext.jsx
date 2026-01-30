import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const LANGUAGES = {
  EN: 'en',
  ZH: 'zh'
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    // Check localStorage first, default to English
    const saved = localStorage.getItem('language')
    return saved || LANGUAGES.EN
  })

  useEffect(() => {
    localStorage.setItem('language', language)
    // Update html lang attribute
    document.documentElement.lang = language
  }, [language])

  const toggleLanguage = () => {
    setLanguage(prev => prev === LANGUAGES.EN ? LANGUAGES.ZH : LANGUAGES.EN)
  }

  const t = (en, zh) => language === LANGUAGES.ZH ? zh : en

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
