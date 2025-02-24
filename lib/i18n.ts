import content from '../data/content.json';

export const translations = {
  zh: {
    nav: {
      past: "我的过往",
      home: "主页",
      portfolio: "项目",
      resume: "经历",
      contact: "联系我",
      downloadResume: "下载简历",
      toggleTheme: "切换主题",
      toggleLanguage: "切换语言"
    },
    hero: {
      welcome: content.hero.welcome,
      name: content.hero.name,
      title: content.hero.title,
      description: content.hero.description,
      location: content.hero.location,
      phone: content.hero.phone,
      email: content.hero.email,
      contactMe: "联系我"
    },
    portfolio: {
      title: content.portfolio.title,
      subtitle: content.portfolio.subtitle,
      description: content.portfolio.description,
      filters: {
        all: "全部",
        productOptimization: "产品优化",
        userGrowth: "用户增长",
        commercialization: "商业化设计"
      },
      projects: content.portfolio.projects
    },
    contact: {
      title: "联系我",
      subtitle: "我们一起合作？",
      description: "如果您对我的经历感兴趣，或者有任何合作意向，欢迎随时与我联系。",
      form: {
        name: "您的姓名",
        company: "公司名称",
        email: "电子邮箱",
        phone: "联系电话（选填）",
        message: "请简单描述您的项目需求",
        submit: "联系我"
      }
    },
    resume: {
      title: content.resume.title,
      subtitle: content.resume.subtitle,
      description: content.resume.description,
      experience: {
        alibaba: {
          title: content.resume.experiences[0].positionEn,
          company: content.resume.experiences[0].companyEn,
          period: content.resume.experiences[0].periodEn,
          description: content.resume.experiences[0].descriptionEn
        },
        meituan: {
          title: content.resume.experiences[1].position,
          company: content.resume.experiences[1].company,
          period: content.resume.experiences[1].period,
          description: content.resume.experiences[1].description
        },
        jd: {
          title: content.resume.experiences[2].position,
          company: content.resume.experiences[2].company,
          period: content.resume.experiences[2].period,
          description: content.resume.experiences[2].description
        },
        minion: {
          title: content.resume.experiences[3].position,
          company: content.resume.experiences[3].company,
          period: content.resume.experiences[3].period,
          description: content.resume.experiences[3].description
        },
        education: {
          title: content.resume.education.titleEn || content.resume.education.title,
          school: content.resume.education.schoolEn || content.resume.education.school,
          major: content.resume.education.majorEn || content.resume.education.major,
          period: content.resume.education.periodEn || content.resume.education.period
        }
      }
    },
    footer: {
      copyright: "© 2024 个人经历简介 版权所有"
    }
  },
  en: {
    nav: {
      past: "My Past",
      home: "Home",
      portfolio: "Portfolio",
      resume: "Resume",
      contact: "Contact",
      downloadResume: "Download Resume",
      toggleTheme: "Toggle Theme",
      toggleLanguage: "Toggle Language"
    },
    hero: {
      welcome: content.hero.welcomeEn,
      name: content.hero.name,
      title: content.hero.titleEn,
      description: content.hero.descriptionEn,
      location: content.hero.location,
      phone: content.hero.phone,
      email: content.hero.email,
      contactMe: "Contact Me"
    },
    portfolio: {
      title: "Core Projects",
      subtitle: "Recent Works",
      description: "Below are the core projects I've led at different companies, covering product optimization, user growth, and commercial design.",
      filters: {
        all: "All",
        productOptimization: "Product Optimization",
        userGrowth: "User Growth",
        commercialization: "Commercial Design"
      },
      projects: content.portfolio.projects
    },
    contact: {
      title: "Contact",
      subtitle: "Let's Work Together?",
      description: "If you're interested in my experience or have any collaboration opportunities, feel free to contact me.",
      form: {
        name: "Your Name",
        company: "Company Name",
        email: "Email Address",
        phone: "Phone Number (Optional)",
        message: "Please briefly describe your project requirements",
        submit: "Contact Me"
      }
    },
    resume: {
      title: "Education & Experience",
      subtitle: "My Resume",
      description: "Here's a record of my professional journey, showcasing my growth and achievements across different companies and positions.",
      experience: {
        alibaba: {
          title: content.resume.experiences[0].positionEn,
          company: content.resume.experiences[0].companyEn,
          period: content.resume.experiences[0].periodEn,
          description: content.resume.experiences[0].descriptionEn
        },
        meituan: {
          title: content.resume.experiences[1].positionEn,
          company: content.resume.experiences[1].companyEn,
          period: content.resume.experiences[1].periodEn,
          description: content.resume.experiences[1].descriptionEn
        },
        jd: {
          title: content.resume.experiences[2].positionEn,
          company: content.resume.experiences[2].companyEn,
          period: content.resume.experiences[2].periodEn,
          description: content.resume.experiences[2].descriptionEn
        },
        minion: {
          title: content.resume.experiences[3].positionEn,
          company: content.resume.experiences[3].companyEn,
          period: content.resume.experiences[3].periodEn,
          description: content.resume.experiences[3].descriptionEn
        },
        education: {
          title: content.resume.education.titleEn || content.resume.education.title,
          school: content.resume.education.schoolEn || content.resume.education.school,
          major: content.resume.education.majorEn || content.resume.education.major,
          period: content.resume.education.periodEn || content.resume.education.period
        }
      }
    },
    footer: {
      copyright: "© 2024 Personal Portfolio All Rights Reserved"
    }
  }
}