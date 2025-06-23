# 在线二维码生成器

这是一个简单的在线二维码生成器，使用 React、TypeScript 和 Ant Design 构建。用户可以输入文本，实时生成对应的二维码。

## 功能特点

- 实时二维码生成
- 基于 Ant Design 的现代化UI界面
- 响应式设计，支持多设备
- 多语言支持（国际化）
- 企业级组件库保证的优秀用户体验

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

注意：如果从旧版本升级，建议先清理node_modules：
```bash
rm -rf node_modules package-lock.json
npm install
```

3. 启动开发服务器
```bash
npm start
```

4. 打开浏览器访问 http://localhost:3000

## UI组件库特性

本项目使用 Ant Design 5.x 版本，享受以下特性：

- **企业级设计语言**：遵循蚂蚁金服的设计规范
- **高质量组件**：开箱即用的高质量 React 组件
- **全面的设计工具**：丰富的设计资源和工具
- **国际化支持**：内置国际化方案
- **主题定制**：支持灵活的样式定制
- **TypeScript 支持**：使用 TypeScript 开发，提供完整的类型定义文件

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
- Ant Design
- qrcode.react

## 依赖说明

### 核心依赖
- **React** (^18.2.0) - 用户界面库
- **TypeScript** (^4.9.5) - 类型安全的JavaScript
- **antd** (^5.12.8) - 企业级UI设计语言和React组件库
- **qrcode.react** (^3.1.0) - React二维码生成组件

### 国际化依赖
- **i18next** (^23.15.1) - 国际化框架
- **react-i18next** (^13.5.0) - React国际化绑定
- **i18next-browser-languagedetector** (^7.2.1) - 浏览器语言检测

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
