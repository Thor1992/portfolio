"use client"

import { useLanguage } from "./language-provider"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-[#090E34] text-white py-16">
      <div className="container px-4 mx-auto">
        <div className="text-center text-gray-400">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  )
}

