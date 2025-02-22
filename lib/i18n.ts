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
      welcome: "👋 嘿，欢迎来到我的网站",
      name: "黄新贺",
      title: "面向用户端产品专家",
      description: "10年互联网行业经验，擅长用户增长、B/C端产品优化及商业化设计。具备框架性思维与创新能力，在低成本撬动规模增长、用户提频、营销场景构建等领域有显著成果。",
      location: "📍 杭州",
      phone: "📞 183-6886-8864",
      email: "✉️ huangxinhe1992@163.com",
      contactMe: "联系我"
    },
    portfolio: {
      title: "项目经历",
      subtitle: "核心项目",
      description: "以下是我在不同公司主导的核心项目，涵盖产品优化、用户增长和商业化设计等多个领域。",
      filters: {
        all: "全部",
        productOptimization: "产品优化",
        userGrowth: "用户增长",
        commercialization: "商业化设计"
      },
      projects: [
        {
          title: "构建阿里国际站省钱场景",
          titleEn: "Building Money-saving Scenarios for Alibaba International",
          category: "产品优化",
          categoryEn: "Product Optimization",
          image: "/images/project-1.jpg",
          description: `背景：
国际站作为平台型电商，缺乏定价权（商品/物流），"省钱"场景难以定义，用户心智建立困难。

方法：
我带领小组充分分析调研用户成交特征，确立全平台认可的低价商品标准；利用AI同款比价技术筛选低价商品，推出"同款低价"功能，强化场景心智；联合商家、行业团队，深度挖掘开发低价商品，提升买家匹配度。

成果：
Top Deals场景渗透率提升285%，场景交易买家数增长161%，场景供给增长7倍。`,
          descriptionEn: `Background:
As a platform-based e-commerce website, the international site lacks pricing control (products/logistics), making it challenging to define "money-saving" scenarios and establish user mindset.

Approach:
Led the team to analyze user transaction characteristics, established platform-wide low-price product standards; utilized AI price comparison technology to select low-price products, launched "Same Item, Lower Price" feature to strengthen scenario awareness; collaborated with merchants and industry teams to develop low-price products, improving buyer matching.

Results:
Top Deals scenario penetration increased by 285%, transaction buyers grew by 161%, and supply increased 7-fold.`
        },
        {
          title: "美团会员增长与提频优化",
          titleEn: "Meituan Membership Growth and Frequency Optimization",
          category: "用户增长",
          categoryEn: "User Growth",
          image: "/images/project-2.jpg",
          description: "• 背景：美团会员（千万DAU级）需要提升规模与活跃度。\n\n• 方法：通过会员权益优化与任务体系设计提升用户活跃度。\n\n• 成果：月会员渗透率提升2pp，会员月下单频次提升0.23次，增量ROI达13.6（试用版）与57（福利金），任务提频贡献0.1-0.15单/用户/月。"
        }
      ]
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
      title: "教育与经历",
      subtitle: "我的简历",
      description: "这里记录了我的职业发展历程，展示了我在不同公司和岗位上的成长与成就。",
      experience: {
        alibaba: {
          title: "产品专家",
          company: "阿里巴巴",
          period: "2021.8 - 至今",
          description: "1. 背景：作为平台型电商网站，国际站缺乏定价权（商品/物流），难以定义\"省钱\"场景，建立用户心智。\n\n2. 方法：带领团队深入分析用户成交特征，确立平台通用低价商品标准；利用AI同款比价技术筛选低价商品，推出\"同款低价\"功能强化场景心智；联合商家及行业团队深度挖掘开发低价商品，提升买家匹配度。\n\n3. 成果：Top Deals场景渗透率提升285%，场景交易买家数增长161%，场景供给增长7倍。"
        },
        meituan: {
          title: "高级产品经理",
          company: "美团（用户增长中心-会员）",
          period: "2019.12 - 2021.8",
          description: "1. 背景：美团会员（千万DAU级）需要提升规模与活跃度。\n\n2. 方法：通过会员权益优化与任务体系设计提升用户活跃度。\n\n3. 成果：月会员渗透率提升2pp，会员月下单频次提升0.23次，增量ROI达13.6（试用版）与57（福利金），任务提频贡献0.1-0.15单/用户/月。"
        },
        jd: {
          title: "产品经理",
          company: "京东（商家营销产品部）",
          period: "2018.3 - 2019.12",
          description: "1. 背景：店铺内转化率有提升空间。\n\n2. 方法：构建营销场景与用户匹配效率工具。\n\n3. 成果：店铺转化率提升3pp至20.89%，双十二峰值转化率达53.5%，店铺搜索热词UV价值提升38.89%，上新海报转化率9%。"
        },
        minion: {
          title: "产品经理",
          company: "小黄人科技",
          period: "2015.11 - 2018.3",
          description: "1. 背景：微信排版编辑器产品需要商业化突破。\n\n2. 方法：独立负责产品规划与商业化方案设计。\n\n3. 成果：用户量从3.8W增长至60W，付费率从1%提升至10%，企业定制服务首月接单32单（客单价4000~10000），服务奔驰、三星等客户。"
        },
        education: {
          title: "本科学历",
          school: "哈尔滨理工大学",
          major: "机械电子工程",
          period: "2011 - 2015"
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
      welcome: "👋 Hey, Welcome to My Website",
      name: "Xinhe Huang",
      title: "User-Oriented Product Expert",
      description: "10 years of experience in the internet industry, specializing in user growth, B/C-end product optimization, and commercial design. Equipped with systematic thinking and innovation capabilities, achieving significant results in low-cost scale growth, user engagement, and marketing scenario construction.",
      location: "📍 Hangzhou",
      phone: "📞 183-6886-8864",
      email: "✉️ huangxinhe1992@163.com",
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
      projects: [
        {
          title: "Building Money-saving Scenarios for Alibaba International",
          titleEn: "Building Money-saving Scenarios for Alibaba International",
          category: "Product Optimization",
          categoryEn: "Product Optimization",
          image: "/images/project-1.jpg",
          description: `Background:
As a platform-based e-commerce website, the international site lacks pricing control (products/logistics), making it challenging to define "money-saving" scenarios and establish user mindset.

Approach:
Led the team to analyze user transaction characteristics, established platform-wide low-price product standards; utilized AI price comparison technology to select low-price products, launched "Same Item, Lower Price" feature to strengthen scenario awareness; collaborated with merchants and industry teams to develop low-price products, improving buyer matching.

Results:
Top Deals scenario penetration increased by 285%, transaction buyers grew by 161%, and supply increased 7-fold.`,
          descriptionEn: `Background:
As a platform-based e-commerce website, the international site lacks pricing control (products/logistics), making it challenging to define "money-saving" scenarios and establish user mindset.

Approach:
Led the team to analyze user transaction characteristics, established platform-wide low-price product standards; utilized AI price comparison technology to select low-price products, launched "Same Item, Lower Price" feature to strengthen scenario awareness; collaborated with merchants and industry teams to develop low-price products, improving buyer matching.

Results:
Top Deals scenario penetration increased by 285%, transaction buyers grew by 161%, and supply increased 7-fold.`
        },
        {
          title: "Meituan Membership Growth and Frequency Optimization",
          titleEn: "Meituan Membership Growth and Frequency Optimization",
          category: "User Growth",
          categoryEn: "User Growth",
          image: "/images/project-2.jpg",
          description: "• Background: Meituan membership (10M+ DAU) needed scale and engagement improvement.\n\n• Approach: Enhanced member benefits and designed task systems to improve user engagement.\n\n• Results: Monthly membership penetration increased by 2pp, member monthly order frequency increased by 0.23, incremental ROI reached 13.6 (trial version) and 57 (benefit points), task engagement contributed 0.1-0.15 orders/user/month."
        }
      ]
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
          title: "Product Expert",
          company: "Alibaba",
          period: "2021.8 - Present",
          description: "1. Background: As a platform-based e-commerce website, the international site lacks pricing control (products/logistics), making it challenging to define \"money-saving\" scenarios and establish user mindset.\n\n2. Approach: Led the team to analyze user transaction characteristics, established platform-wide low-price product standards; utilized AI price comparison technology to select low-price products, launched \"Same Item, Lower Price\" feature to strengthen scenario awareness; collaborated with merchants and industry teams to develop low-price products, improving buyer matching.\n\n3. Results: Top Deals scenario penetration increased by 285%, transaction buyers grew by 161%, and supply increased 7-fold."
        },
        meituan: {
          title: "Senior Product Manager",
          company: "Meituan (User Growth Center - Membership)",
          period: "2019.12 - 2021.8",
          description: "1. Background: Meituan membership (10M+ DAU) needed scale and engagement improvement.\n\n2. Approach: Enhanced member benefits and designed task systems to improve user engagement.\n\n3. Results: Monthly membership penetration increased by 2pp, member monthly order frequency increased by 0.23, incremental ROI reached 13.6 (trial version) and 57 (benefit points), task engagement contributed 0.1-0.15 orders/user/month."
        },
        jd: {
          title: "Product Manager",
          company: "JD.com (Merchant Marketing Product Department)",
          period: "2018.3 - 2019.12",
          description: "1. Background: Store conversion rate had room for improvement.\n\n2. Approach: Built marketing scenarios and user matching efficiency tools.\n\n3. Results: Store conversion rate increased by 3pp to 20.89%, Double 12 peak conversion rate reached 53.5%; store search hot word UV value increased by 38.89%, new product poster conversion rate 9%."
        },
        minion: {
          title: "Product Manager",
          company: "Minion Technology",
          period: "2015.11 - 2018.3",
          description: "1. Background: WeChat layout editor product needed commercialization breakthrough.\n\n2. Approach: Independently led product planning and commercialization strategy.\n\n3. Results: User base grew from 38K to 600K, paid rate increased from 1% to 10%; enterprise customization service received 32 orders in the first month (unit price 4000-10000), serving clients like Mercedes-Benz and Samsung."
        },
        education: {
          title: "Bachelor's Degree",
          school: "Harbin University of Science and Technology",
          major: "Mechanical and Electronic Engineering",
          period: "2011 - 2015"
        }
      }
    },
    footer: {
      copyright: "© 2024 Personal Portfolio All Rights Reserved"
    }
  }
}