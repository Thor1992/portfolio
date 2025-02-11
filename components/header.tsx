"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { Moon, Sun, Languages } from "lucide-react"
import { useLanguage } from "./language-provider"

export default function Header() {
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b">
      <div className="container px-4 mx-auto">
        <div className="relative flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary"
            >
              <rect width="24" height="24" rx="4" fill="currentColor" />
              <path d="M17 9L11 15L7 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-xl font-semibold">{t("nav.past")}</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("top")}
              className="text-base font-medium hover:text-primary"
            >
              {t("nav.home")}
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-base font-medium hover:text-primary"
            >
              {t("nav.portfolio")}
            </button>
            <button
              onClick={() => scrollToSection("resume")}
              className="text-base font-medium hover:text-primary"
            >
              {t("nav.resume")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-base font-medium hover:text-primary"
            >
              {t("nav.contact")}
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hidden md:flex"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">{t("nav.toggleTheme")}</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setLanguage(language === "zh" ? "en" : "zh")}
              className="hidden md:flex"
            >
              <Languages className="h-5 w-5" />
              <span className="sr-only">{t("nav.toggleLanguage")}</span>
            </Button>
            <Button variant="default" className="hidden md:flex w-[140px] justify-center" onClick={() => window.open("/resume.pdf", "_blank")}>
              {t("nav.downloadResume")}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

