"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useContent } from "@/hooks/use-content"
import { useLanguage } from "./language-provider"

export default function Hero() {
  const { t } = useLanguage()
  const { content } = useContent()

  if (!content) {
    return <div>Loading...</div>
  }

  return (
    <section className="pt-20 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 py-16 px-4">
          <div className="flex-1 max-w-xl">
            <p className="text-primary font-medium mb-4">{content.hero.welcome}</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{content.hero.name}</h1>
            <p className="text-2xl text-primary font-medium mb-4">{content.hero.title}</p>
            <p className="text-muted-foreground mb-8 max-w-lg">
              {content.hero.description}
            </p>
            <div className="space-y-2">
              <p className="text-muted-foreground">📍 {content.hero.location}</p>
              <p className="text-muted-foreground">📞 {content.contact.phone}</p>
              <p className="text-muted-foreground">✉️ {content.contact.email}</p>
            </div>
            <Button size="lg" className="mt-4" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>{t("hero.contactMe")}</Button>
          </div>
          <div className="flex-1 relative flex justify-center">
            <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-primary/20 blur-3xl" />
            <Image
              src="/images/avatar.jpg"
              alt="Profile"
              width={500}
              height={500}
              className="relative z-10 rounded-3xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}