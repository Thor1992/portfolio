"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { translations } from "@/lib/i18n"

type Language = "zh" | "en"
type TranslationsType = typeof translations

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("zh")
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
    } else {
      const userLanguage = navigator.language.toLowerCase()
      const detectedLanguage = userLanguage.startsWith('en') ? 'en' : 'zh'
      setLanguage(detectedLanguage)
    }
  }, [])

  useEffect(() => {
    if (isClient) {
      localStorage.setItem('language', language)
    }
  }, [language, isClient])

  const t = (path: string) => {
    const keys = path.split(".")
    let current: any = translations[language]
    
    for (const key of keys) {
      if (current[key] === undefined) {
        console.warn(`Translation not found for key: ${path}`)
        return path
      }
      current = current[key]
    }
    
    return current
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}