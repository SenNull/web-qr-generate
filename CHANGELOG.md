# 更新日志

## [2.0.0] - 2024-06-23

### 重大变更 💥
- **UI库迁移**：从 Chakra UI 完全迁移到 Ant Design 5.x
- **依赖更新**：移除了所有 Chakra UI 相关依赖（@chakra-ui/react, @emotion/react, @emotion/styled, framer-motion）
- **样式重构**：使用 Ant Design 的设计语言重新实现所有UI组件

### 新增功能 ✨
- 集成 Ant Design 5.12.8 企业级UI组件库
- 支持 Ant Design 的主题定制能力
- 更好的TypeScript类型支持
- 企业级设计规范和用户体验

### 改进 🚀
- **更好的可访问性**：Ant Design 提供更完善的无障碍功能
- **更稳定的组件**：企业级组件库保证更高的稳定性
- **更丰富的组件**：可以使用更多开箱即用的高质量组件
- **国际化支持**：更好的多语言支持方案

### 兼容性调整 🔧
- 调整了国际化相关依赖版本以确保兼容性：
  - i18next: ^25.2.1 → ^23.15.1
  - react-i18next: ^15.5.3 → ^13.5.0
  - i18next-browser-languagedetector: ^8.2.0 → ^7.2.1

### 迁移指南 📖
如果你是从旧版本升级：
1. 备份你的代码
2. 清理旧的依赖：`rm -rf node_modules package-lock.json`
3. 安装新依赖：`npm install --legacy-peer-deps`
4. 如果有自定义样式，可能需要调整以适配 Ant Design

---

## [1.0.0] - 2024-06-22

### 初始版本
- 基于 React + TypeScript + Chakra UI 的二维码生成器
- 支持实时二维码生成
- 多语言支持
- 响应式设计 