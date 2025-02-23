"use client"

import { useLanguage } from "@/components/language-provider"
import Image from "next/image"

export default function Resume() {
  const { t } = useLanguage()

  return (
    <section id="resume" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4">{t("resume.title")}</p>
          <h2 className="text-3xl font-bold mb-4 dark:text-white">{t("resume.subtitle")}</h2>
          <p className="text-muted-foreground">{t("resume.description")}</p>
        </div>

        <div className="max-w-2xl mx-auto space-y-8">
          <div className="relative pl-8 border-l border-primary">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-0" />
            <h3 className="text-xl font-bold mb-2 dark:text-white">{t("resume.experience.alibaba.title")}</h3>
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
<<<<<<< HEAD
              <Image src="/images/logos/alibaba.png" width={24} height={24} alt="Alibaba Logo" className="rounded-full bg-white p-1" />
=======
              <Image src="/images/logos/alibaba.png" width={24} height={24} alt="Alibaba Logo" className="rounded-full bg-white" />
>>>>>>> master
              <p>{t("resume.experience.alibaba.company")}</p>
            </div>
            <span className="inline-block px-3 py-1 rounded-full text-sm bg-primary text-white">{t("resume.experience.alibaba.period")}</span>
            <p className="mt-4 text-muted-foreground">
              {t("resume.experience.alibaba.description")}
            </p>
          </div>

          <div className="relative pl-8 border-l border-primary">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-0" />
            <h3 className="text-xl font-bold mb-2 dark:text-white">{t("resume.experience.meituan.title")}</h3>
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
<<<<<<< HEAD
              <Image src="/images/logos/meituan.png" width={24} height={24} alt="Meituan Logo" className="rounded-full bg-white p-1" />
=======
              <Image src="/images/logos/meituan.png" width={24} height={24} alt="Meituan Logo" className="rounded-full bg-white" />
>>>>>>> master
              <p>{t("resume.experience.meituan.company")}</p>
            </div>
            <span className="inline-block px-3 py-1 rounded-full text-sm bg-primary text-white">{t("resume.experience.meituan.period")}</span>
            <p className="mt-4 text-muted-foreground">
              {t("resume.experience.meituan.description")}
            </p>
          </div>

          <div className="relative pl-8 border-l border-primary">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-0" />
            <h3 className="text-xl font-bold mb-2 dark:text-white">{t("resume.experience.jd.title")}</h3>
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
<<<<<<< HEAD
              <Image src="/images/logos/jd.png" width={24} height={24} alt="JD Logo" className="rounded-full bg-white p-1" />
=======
              <Image src="/images/logos/jd.png" width={24} height={24} alt="JD Logo" className="rounded-full bg-white" />
>>>>>>> master
              <p>{t("resume.experience.jd.company")}</p>
            </div>
            <span className="inline-block px-3 py-1 rounded-full text-sm bg-primary text-white">{t("resume.experience.jd.period")}</span>
            <p className="mt-4 text-muted-foreground">
              {t("resume.experience.jd.description")}
            </p>
          </div>

          <div className="relative pl-8 border-l border-primary">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-0" />
            <h3 className="text-xl font-bold mb-2 dark:text-white">{t("resume.experience.minion.title")}</h3>
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
<<<<<<< HEAD
              <Image src="/images/logos/minion.jpeg" width={24} height={24} alt="Minion Logo" className="rounded-full bg-white p-1" />
=======
              <Image src="/images/logos/minion.jpeg" width={24} height={24} alt="Minion Logo" className="rounded-full bg-white" />
>>>>>>> master
              <p>{t("resume.experience.minion.company")}</p>
            </div>
            <span className="inline-block px-3 py-1 rounded-full text-sm bg-primary text-white">{t("resume.experience.minion.period")}</span>
            <p className="mt-4 text-muted-foreground">
              {t("resume.experience.minion.description")}
            </p>
          </div>

          <div className="relative pl-8 border-l border-primary">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-0" />
            <h3 className="text-xl font-bold mb-2 dark:text-white">{t("resume.experience.education.title")}</h3>
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
<<<<<<< HEAD
              <Image src="/images/logos/hrbu.png" width={24} height={24} alt="HRBU Logo" className="rounded-full bg-white p-1" />
=======
              <Image src="/images/logos/hrbu.png" width={24} height={24} alt="HRBU Logo" className="rounded-full bg-white" />
>>>>>>> master
              <p>{t("resume.experience.education.school")} · {t("resume.experience.education.major")}</p>
            </div>
            <span className="inline-block px-3 py-1 rounded-full text-sm bg-primary text-white">{t("resume.experience.education.period")}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

