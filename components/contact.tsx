"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FormEvent } from "react"

import { useLanguage } from "./language-provider"

export default function Contact() {
  const { t } = useLanguage()
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      company: formData.get('company'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message')
    }

    const mailtoLink = `mailto:huangxinhe1992@163.com?subject=联系咨询&body=姓名：${data.name}%0A公司：${data.company}%0A邮箱：${data.email}%0A电话：${data.phone}%0A描述：${data.message}`
    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4">{t("contact.title")}</p>
          <h2 className="text-3xl font-bold mb-4">{t("contact.subtitle")}</h2>
          <p className="text-muted-foreground">
            {t("contact.description")}
          </p>
        </div>

        <form className="max-w-2xl mx-auto space-y-6" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Input type="text" name="name" placeholder={t("contact.form.name")} required />
              <span className="text-sm text-red-500 ml-1">*</span>
            </div>
            <div>
              <Input type="text" name="company" placeholder={t("contact.form.company")} required />
              <span className="text-sm text-red-500 ml-1">*</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Input type="email" name="email" placeholder={t("contact.form.email")} required />
              <span className="text-sm text-red-500 ml-1">*</span>
            </div>
            <Input type="tel" name="phone" placeholder={t("contact.form.phone")} />
          </div>
          <div>
            <Textarea name="message" placeholder={t("contact.form.message")} className="min-h-[150px]" required />
            <span className="text-sm text-red-500 ml-1">*</span>
          </div>
          <Button type="submit" size="lg" className="w-full md:w-auto">
            {t("contact.form.submit")}
          </Button>
        </form>
      </div>
    </section>
  )
}

