"use client"

import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { useContent } from "@/hooks/use-content"
import { useLanguage } from "./language-provider"

export default function Portfolio() {
  const { t, language } = useLanguage()
  const { content } = useContent()

  if (!content) {
    return <div>Loading...</div>
  }

  return (
    <section className="py-20" id="portfolio">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4">{t("portfolio.title")}</p>
          <h2 className="text-3xl font-bold mb-4">{t("portfolio.subtitle")}</h2>
          <p className="text-muted-foreground">
            {t("portfolio.description")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.portfolio.projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl">
              <AspectRatio ratio={4/3}>
                <Image
                  src={project.image}
                  alt={language === 'en' ? project.titleEn : project.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </AspectRatio>
              <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-end text-white transition-opacity opacity-0 group-hover:opacity-100">
                <h3 className="text-xl font-bold mb-2">
                  {language === 'en' ? project.titleEn : project.title}
                </h3>
                <p className="text-sm text-white/80 mb-2">
                  {language === 'en' ? project.categoryEn : project.category}
                </p>
                <p className="text-sm">
                  {language === 'en' ? project.descriptionEn : project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
