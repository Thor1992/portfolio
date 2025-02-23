# 个人简历网站

一个现代化的个人简历网站，支持中英文切换、暗黑模式，并提供响应式设计。

## 技术栈

- **框架**: Next.js 14
- **样式**: Tailwind CSS
- **UI组件**: Radix UI + shadcn/ui
- **状态管理**: React Context
- **国际化**: 自定义i18n实现
- **主题**: next-themes

## 主要功能

- 🌍 中英文语言切换
- 🌓 明暗主题切换
- 📱 响应式设计，支持移动端和桌面端
- 🎨 现代化UI设计
- 📄 个人简历展示
- 💼 项目作品集展示
- 📬 联系方式展示

## 项目结构

```
/app          - Next.js应用页面
/components   - React组件
/hooks        - 自定义Hooks
/lib          - 工具函数和配置
/public       - 静态资源
/styles       - 全局样式
/data         - 内容数据
```

## 核心组件

- `LanguageProvider`: 提供多语言支持
- `ThemeProvider`: 提供主题切换功能
- `Hero`: 首页主要展示区域
- `Portfolio`: 作品集展示区域
- `Resume`: 简历展示区域
- `Contact`: 联系方式展示

## 开始使用

1. 克隆项目
```bash
git clone [repository-url]
```

2. 安装依赖
```bash
npm install
```

3. 运行开发服务器
```bash
npm run dev
```

4. 构建生产版本
```bash
npm run build
```

## 自定义内容

### 1. 配置个人内容

1. 在 `/data` 目录下，将 `content.example.json` 复制并重命名为 `content.json`
2. 编辑 `content.json` 文件，更新以下内容：
   - `hero`: 首页个人介绍部分
     - `welcome`: 欢迎语
     - `name`: 你的名字
     - `title`: 你的职位头衔
     - `description`: 个人简介
     - `location`: 所在地
   - `portfolio`: 作品集展示
     - `projects`: 项目列表，每个项目包含：
       - `title`: 项目标题（中文）
       - `titleEn`: 项目标题（英文）
       - `category`: 项目类别（中文）
       - `categoryEn`: 项目类别（英文）
       - `image`: 项目图片路径
       - `description`: 项目描述（中文）
       - `descriptionEn`: 项目描述（英文）
   - `resume`: 简历信息
     - `experiences`: 工作经历列表
     - `education`: 教育背景
   - `contact`: 联系方式

### 2. 更新图片资源

1. 在 `/public/images` 目录下替换以下图片：
   - `avatar.jpg`: 个人头像
   - `project-1.jpg`, `project-2.jpg` 等: 项目展示图片
2. 确保图片分辨率适中，建议使用 JPEG 或 WebP 格式

### 3. 修改翻译文本

1. 在 `/lib/i18n.ts` 文件中更新翻译内容
2. 确保中英文翻译键值对完整

### 4. 个人信息安全

为了保护个人信息安全，建议：

1. 将 `content.json` 添加到 `.gitignore` 文件中，避免个人信息被提交到代码仓库
2. 在本地开发环境中维护个人的 `content.json` 文件
3. 在生产环境部署时，单独配置个人内容

## 部署

项目可以部署到任何支持Next.js的平台，如Vercel、Netlify等。

```bash
# 使用Vercel部署
vercel
```

## 许可

MIT License