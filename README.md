# 在线二维码生成器

这是一个简单的在线二维码生成器，使用 React、TypeScript 和 Ant Design 构建。用户可以输入文本，实时生成对应的二维码。

## 功能特点

- 实时二维码生成
- 基于 Ant Design 的现代化UI界面
- 响应式设计，支持多设备
- 多语言支持（国际化）
- 企业级组件库保证的优秀用户体验

## 项目优化

### Git 忽略文件优化
项目已针对现代前端开发工作流优化了 `.gitignore` 文件：

- ✅ **全面的依赖忽略**：支持 npm、yarn、pnpm
- ✅ **Playwright 测试文件**：忽略测试报告和缓存
- ✅ **TypeScript 编译产物**：忽略 tsbuildinfo 等文件
- ✅ **代码质量工具缓存**：ESLint、Prettier、Stylelint 缓存
- ✅ **多IDE支持**：VS Code、IntelliJ IDEA、Vim 等
- ✅ **部署平台文件**：Vercel、Netlify、Cloudflare 等
- ✅ **环境变量保护**：所有 .env 文件变体

详细说明请查看：[GitIgnore 优化文档](docs/GITIGNORE_OPTIMIZATION.md)

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

## 测试

### 单元测试
```bash
npm test
```

### 端到端测试 (Playwright)
```bash
# 运行所有E2E测试
npm run test:e2e

# 使用UI模式运行测试
npm run test:e2e:ui

# 有头模式运行测试（可以看到浏览器）
npm run test:e2e:headed
```

### Playwright MCP支持
本项目已集成Playwright，**完全支持Playwright MCP**：

- ✅ **配置完整**：已有完整的Playwright配置文件
- ✅ **多浏览器支持**：支持Chrome、Firefox、Safari测试
- ✅ **移动端测试**：支持移动设备视口测试
- ✅ **MCP就绪**：可以通过MCP进行自动化测试操作

**MCP使用场景**：
- 自动化UI测试
- 性能测试和监控
- 回归测试自动化
- 跨浏览器兼容性测试
- 移动端响应式测试

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
- **@testing-library/react** (^16.3.0) - React单元测试工具
- **@testing-library/jest-dom** (^6.6.3) - Jest DOM测试扩展
- **@testing-library/user-event** (^13.5.0) - 用户事件测试工具
- **@playwright/test** - 端到端测试框架，支持多浏览器自动化测试

### 类型定义
- **@types/react** (^18.2.55) - React类型定义
- **@types/react-dom** (^18.2.19) - React DOM类型定义
- **@types/node** (^16.18.126) - Node.js类型定义
- **@types/jest** (^27.5.2) - Jest类型定义
