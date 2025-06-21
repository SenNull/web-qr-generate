# 在线二维码生成器

这是一个简单的在线二维码生成器，使用 React 和 TypeScript 构建。用户可以输入文本，实时生成对应的二维码。

## 功能特点

- 实时二维码生成
- 响应式设计
- 简洁美观的界面

## 本地开发

1. 克隆项目
```bash
git clone [your-repository-url]
cd web-qr-generate
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npm start
```

4. 打开浏览器访问 http://localhost:3000

## 部署到 Cloudflare Pages

1. 将代码推送到 GitHub 仓库

2. 在 Cloudflare Pages 中：
   - 连接你的 GitHub 账户
   - 选择此仓库
   - 设置构建命令为：`npm run build`
   - 设置构建输出目录为：`build`
   - 点击部署

## 技术栈

- React
- TypeScript
- Chakra UI
- qrcode.react

## 依赖说明

### 核心依赖
- **React** (^18.2.0) - 用户界面库
- **TypeScript** (^4.9.5) - 类型安全的JavaScript
- **@chakra-ui/react** (^2.8.2) - 现代化的React组件库
- **qrcode.react** (^3.1.0) - React二维码生成组件

### UI相关依赖
- **@emotion/react** (^11.11.3) - Chakra UI的CSS-in-JS依赖
- **@emotion/styled** (^11.11.0) - Chakra UI的样式组件依赖
- **framer-motion** (^10.18.0) - Chakra UI的动画库依赖

### 国际化依赖
- **i18next** (^25.2.1) - 国际化框架
- **react-i18next** (^15.5.3) - React国际化绑定
- **i18next-browser-languagedetector** (^8.2.0) - 浏览器语言检测

### 开发工具依赖
- **react-scripts** (5.0.1) - Create React App构建工具
- **vconsole** (^3.15.1) - 移动端调试工具
- **dsbridge** (^3.1.4) - JavaScript桥接工具

### 测试依赖
- **@testing-library/react** (^16.3.0) - React测试工具
- **@testing-library/jest-dom** (^6.6.3) - Jest DOM测试扩展
- **@testing-library/user-event** (^13.5.0) - 用户事件测试工具

### 类型定义
- **@types/react** (^18.2.55) - React类型定义
- **@types/react-dom** (^18.2.19) - React DOM类型定义
- **@types/node** (^16.18.126) - Node.js类型定义
- **@types/jest** (^27.5.2) - Jest类型定义
