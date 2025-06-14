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
