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
      welcome: "👋 嘿，欢迎来到我的网站",
      name: content.hero.name,
      title: content.hero.title,
      description: content.hero.description,
      location: content.hero.location,
      phone: content.hero.phone,
      email: content.hero.email,
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
          description: "背景：国际站作为平台型电商，缺乏定价权（商品/物流），\"省钱\"场景难以定义，用户心智建立困难。\n\n方法：我带领小组充分分析调研用户成交特征，确立全平台认可的低价商品标准；利用AI同款比价技术筛选低价商品，推出\"同款低价\"功能，强化场景心智；联合商家、行业团队，深度挖掘开发低价商品，提升买家匹配度。\n\n成果：Top Deals场景渗透率提升285%，场景交易买家数增长161%，场景供给增长7倍。",
          descriptionEn: "Background: As a platform-based e-commerce website, the international site lacks pricing control (products/logistics), making it challenging to define \"money-saving\" scenarios and establish user mindset.\n\nApproach: Led the team to analyze user transaction characteristics, established platform-wide low-price product standards; utilized AI price comparison technology to select low-price products, launched \"Same Item, Lower Price\" feature to strengthen scenario awareness; collaborated with merchants and industry teams to develop low-price products, improving buyer matching.\n\nResults: Top Deals scenario penetration increased by 285%, transaction buyers grew by 161%, and supply increased 7-fold."
        },
        {
          title: "低成本提升下单频次",
          titleEn: "Low-Cost Order Frequency Enhancement",
          category: "用户频次增长",
          categoryEn: "User Frequency Growth",
          image: "/images/project-2.jpg",
          description: "背景：会员下单频次与红包数量强绑定、平台缺乏可持续增长下单频次的抓手。方法：创新融合消费游戏化运营思维：设计「福利金虚拟货币体系」，通过用户下单自动发放，叠加任务激励等手段推动下单频次增长，同步推动平台与商家成本共担模型落地。成果：月频次提升0.23单，其中任务体系贡献 0.1-0.15单（对比首页排序策略年均仅提升0.5单），在低新增预算前提下突破增长瓶颈。",
          descriptionEn: "Background: Member order frequency was strongly tied to coupon quantity, and the platform lacked sustainable tools for order frequency growth. Method: Innovatively integrated gamification concepts: designed a 'welfare points virtual currency system', automatically distributed through user orders, combined with task incentives to drive order frequency growth, while implementing a cost-sharing model between platform and merchants. Results: Monthly frequency increased by 0.23 orders, with task system contributing 0.1-0.15 orders (compared to homepage sorting strategy's annual increase of only 0.5 orders), breaking through growth bottlenecks under low budget constraints."
        },
        {
          title: "构建一站式私域营销体系",
          titleEn: "Building One-stop Private Domain Marketing System",
          category: "用户转化提升",
          categoryEn: "Conversion Rate Optimization",
          image: "/images/project-3.jpg",
          description: "背景：京东自营生态强势导致店铺认知薄弱、营销碎片化，进店流量缺乏有效的转化手段。方法：基于用户「省钱心智」整合店铺分散的促销资源，设计强感知店铺活动氛围，规模化提升店铺转化能力。成果：实现店铺活动转化率从7%提升至22%，双十二峰值转化率高达53.5%；同时帮助店铺转化率提升接近3pt。",
          descriptionEn: "Background: JD's strong self-operated ecosystem led to weak store recognition and fragmented marketing, lacking effective conversion tools for store traffic. Method: Integrated scattered promotional resources based on users' 'money-saving mindset', designed highly perceptible store activity atmosphere to scale up store conversion capability. Results: Increased store activity conversion rate from 7% to 22%, with Double 12 peak conversion rate reaching 53.5%; helped improve store conversion rate by nearly 3 percentage points."
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
          company: "阿里巴巴-国际站",
          period: "2021.8 - 至今",
          description: "负责阿里国际站首页及导购频道设计，实现核心数据增长与用户体验升级。帮助国际站首页CTR+17.51%，交易买家数+31.35%；帮助 Top Deals 场景渗透率提升285%，场景交易买家数激增161%，场景供给增长7倍。"
        },
        meituan: {
          title: "高级产品经理",
          company: "美团（用户增长中心-会员）",
          period: "2019.12 - 2021.8",
          description: "负责探索外卖会员规模增长及下单频次提升。帮助外卖会员渗透提升2pt（20年会员整个部门增长6pt）；月频次提升0.23单。"
        },
        jd: {
          title: "产品经理",
          company: "京东（商家营销产品部）",
          period: "2018.3 - 2019.12",
          description: "负责京东店铺营销产品线，提升商家营销转化率，增强商家自营销能力。帮助店铺活动转化率从7%提升至22%，双十二峰值转化率高达53.5%；同时帮助店铺转化率提升接近3pt。"
        },
        minion: {
          title: "产品经理",
          company: "小黄人科技",
          period: "2015.11 - 2018.3",
          description: "独立负责i排版微信编辑器产品规划与商业化方案设计。帮助产品用户量从3.8W增长至60W，付费率从1%提升至10%，服务奔驰、三星等客户。"
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
          company: "Alibaba International",
          period: "2021.8 - Present",
          description: "Responsible for the design of Alibaba International homepage and shopping guide channels, achieving core data growth and user experience upgrades. Helped increase homepage CTR by 17.51%, transaction buyers by 31.35%; improved Top Deals scenario penetration rate by 285%, scenario transaction buyers surged by 161%, and scenario supply grew 7-fold."
        },
        meituan: {
          title: "Senior Product Manager",
          company: "Meituan (User Growth Center - Membership)",
          period: "2019.12 - 2021.8",
          description: "Responsible for exploring takeaway membership scale growth and order frequency improvement. Helped increase takeaway membership penetration by 2pt (department-wide growth of 6pt in 2020); monthly frequency increased by 0.23 orders."
        },
        jd: {
          title: "Product Manager",
          company: "JD.com (Merchant Marketing Product Department)",
          period: "2018.3 - 2019.12",
          description: "Responsible for JD's store marketing product line, improving merchant marketing conversion rates and enhancing merchants' self-marketing capabilities. Helped increase store promotion conversion rate from 7% to 22%, with Double 12 peak conversion rate reaching 53.5%; simultaneously helped improve store conversion rate by nearly 3pt."
        },
        minion: {
          title: "Product Manager",
          company: "Minion Technology",
          period: "2015.11 - 2018.3",
          description: "Independently responsible for iTypesetting WeChat editor product planning and commercialization solution design. Helped grow product user base from 38K to 600K, increased paid rate from 1% to 10%, serving clients like Mercedes-Benz and Samsung."
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