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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {[...content.portfolio.projects, {
            title: "使用 AI 构建个人网站",
            titleEn: "Building Personal Website with AI",
            category: "AI 开发",
            categoryEn: "AI Development",
            description: "通过 AI 工具 0 编码情况下构建了我的个人网站",
            descriptionEn: "Built my personal website with zero coding using AI tools",
            image: "/images/project-4.png"
          }].map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg border border-border bg-card shadow-sm hover:shadow-md transition-shadow dark:border-gray-800 dark:hover:border-gray-700">
              <div className="relative">
                <AspectRatio ratio={16/9}>
                  <Image
                    src={project.image}
                    alt={language === 'en' ? project.titleEn : project.title}
                    fill
                    className="object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {language === 'en' ? project.titleEn : project.title}
                </h3>
                <p className="text-sm text-primary mb-2">
                  {language === 'en' ? project.categoryEn : project.category}
                </p>
                <p className="text-sm text-muted-foreground">
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
