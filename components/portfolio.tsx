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
          {content.portfolio.projects.map((project, index) => (
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
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
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
