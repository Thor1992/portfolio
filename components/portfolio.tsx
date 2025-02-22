"use client"

import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { useContent } from "@/hooks/use-content"
import { useLanguage } from "./language-provider"
import ReactMarkdown from "react-markdown"

export default function Portfolio() {
  const { t, language } = useLanguage()
  const { content } = useContent()

  if (!content) {
    return (
      <section className="py-20" id="portfolio">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <div className="h-4 w-32 bg-primary/20 rounded mx-auto mb-4" />
            <div className="h-8 w-64 bg-gray-200 dark:bg-gray-800 rounded mx-auto mb-4" />
            <div className="h-4 w-96 bg-gray-100 dark:bg-gray-900 rounded mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="rounded-lg border border-border bg-card shadow-sm">
                <div className="relative">
                  <AspectRatio ratio={16/9}>
                    <div className="w-full h-full bg-gray-200 dark:bg-gray-800 rounded-t-lg" />
                  </AspectRatio>
                </div>
                <div className="p-6">
                  <div className="h-6 w-48 bg-gray-200 dark:bg-gray-800 rounded mb-2" />
                  <div className="h-4 w-24 bg-primary/20 rounded mb-2" />
                  <div className="h-20 w-full bg-gray-100 dark:bg-gray-900 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
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
            description: "通过 AI 编程工具 Trae 0 编码情况下构建了我的个人网站，并将代码托管至 [Github](https://github.com/Thor1992/portfolio)，使用 Vercel 生成前端可视化页面。",
            descriptionEn: "Built my personal website with zero coding using Trae AI, hosted on [Github](https://github.com/Thor1992/portfolio) and deployed with Vercel for frontend visualization.",
            image: "/images/project-4.jpg"
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
                <div className="text-sm text-muted-foreground whitespace-pre-wrap prose prose-sm dark:prose-invert max-w-none">
                  <ReactMarkdown
                    components={{
                      a: ({ node, ...props }) => (
                        <a
                          {...props}
                          className="inline-flex items-center gap-1 text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="opacity-80"
                          >
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                          </svg>
                          {props.children}
                        </a>
                      ),
                    }}
                  >
                    {language === 'en' ? project.descriptionEn : project.description}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
