# Playwright MCP 使用指南

## 什么是 Playwright MCP？

Playwright MCP (Model Context Protocol) 是一个允许 Claude AI 通过 Playwright 进行浏览器自动化操作的工具。它可以让 AI 直接控制浏览器，执行各种测试和自动化任务。

## 项目支持状态

✅ **本项目已完全支持 Playwright MCP**

- 已安装 `@playwright/test`
- 已配置多浏览器支持（Chrome、Firefox、Safari）
- 已设置移动端测试配置
- 已创建示例测试用例
- 已配置自动启动开发服务器

## 如何使用 MCP

### 1. 启动应用
确保应用正在运行：
```bash
npm start
```

### 2. MCP 可执行的操作

通过 Playwright MCP，AI 可以：

**基础操作**：
- 导航到不同页面
- 点击按钮和链接
- 填写表单
- 截图和录制视频

**测试操作**：
- 运行自动化测试
- 验证页面元素
- 检查页面性能
- 测试响应式设计

**调试操作**：
- 检查页面元素
- 监控网络请求
- 分析控制台日志
- 生成测试报告

### 3. 针对二维码生成器的 MCP 应用场景

**功能测试**：
```typescript
// MCP 可以执行类似这样的操作
await page.goto('http://localhost:3000');
await page.fill('input[placeholder*="请输入要生成二维码的文本"]', 'Test QR Code');
await expect(page.locator('svg')).toBeVisible();
```

**UI 测试**：
- 验证 Ant Design 组件正确渲染
- 测试响应式布局
- 检查颜色和样式
- 验证多语言切换

**性能测试**：
- 测试二维码生成速度
- 监控页面加载时间
- 检查内存使用情况

**回归测试**：
- 自动化回归测试套件
- 跨浏览器兼容性测试
- 移动端适配测试

### 4. 可用的测试命令

```bash
# 运行基础 E2E 测试
npm run test:e2e

# 使用 UI 模式（推荐用于 MCP）
npm run test:e2e:ui

# 有头模式运行（可观察浏览器操作）
npm run test:e2e:headed
```

### 5. MCP 配置文件

项目中的关键配置文件：

- `playwright.config.ts` - 主配置文件
- `tests/qr-generator.spec.ts` - 示例测试用例
- `package.json` - 包含测试脚本

### 6. 支持的浏览器和设备

**桌面浏览器**：
- Chromium (Chrome/Edge)
- Firefox
- WebKit (Safari)

**移动设备**：
- Mobile Chrome (Pixel 5)
- Mobile Safari (iPhone 12)

### 7. 高级 MCP 功能

**视觉测试**：
- 屏幕截图对比
- UI 回归检测
- 跨浏览器视觉差异

**API 测试**：
- 网络请求拦截
- API 响应验证
- 性能监控

**自动化报告**：
- HTML 测试报告
- 失败截图
- 执行轨迹记录

## 最佳实践

1. **使用页面对象模式**：将页面操作封装为可重用的类
2. **并行测试**：利用 Playwright 的并行执行能力
3. **等待策略**：使用适当的等待条件避免不稳定的测试
4. **截图和视频**：在失败时自动记录问题现场

## 故障排除

如果 MCP 连接有问题：

1. 确保应用正在 `http://localhost:3000` 运行
2. 检查防火墙设置
3. 验证 Playwright 浏览器已正确安装：
   ```bash
   npx playwright install
   ```

## 示例：通过 MCP 测试二维码功能

MCP 可以执行如下测试流程：

1. 打开应用首页
2. 输入文本 "Hello Playwright MCP"
3. 验证二维码 SVG 元素出现
4. 截取页面截图
5. 测试不同浏览器的兼容性
6. 生成测试报告

这些操作都可以通过 Playwright MCP 自动完成，无需人工干预。 