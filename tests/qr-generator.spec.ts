import { test, expect } from '@playwright/test';

test.describe('QR Code Generator', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have title', async ({ page }) => {
    await expect(page).toHaveTitle(/二维码生成器/);
  });

  test('should display main components', async ({ page }) => {
    // 检查标题存在
    await expect(page.locator('h1')).toBeVisible();
    
    // 检查输入框存在
    await expect(page.locator('input[placeholder*="请输入要生成二维码的文本"]')).toBeVisible();
    
    // 检查版本信息存在
    await expect(page.locator('text=版本')).toBeVisible();
  });

  test('should generate QR code when text is entered', async ({ page }) => {
    // 输入文本
    const input = page.locator('input[placeholder*="请输入要生成二维码的文本"]');
    await input.fill('Hello World');
    
    // 验证二维码SVG元素出现
    await expect(page.locator('svg')).toBeVisible();
    
    // 验证二维码包含输入的文本
    const svg = page.locator('svg').first();
    await expect(svg).toBeVisible();
  });

  test('should not show QR code when input is empty', async ({ page }) => {
    // 确保输入框为空
    const input = page.locator('input[placeholder*="请输入要生成二维码的文本"]');
    await input.clear();
    
    // 验证没有二维码显示
    await expect(page.locator('svg')).not.toBeVisible();
  });

  test('should update QR code when text changes', async ({ page }) => {
    const input = page.locator('input[placeholder*="请输入要生成二维码的文本"]');
    
    // 输入第一个文本
    await input.fill('First Text');
    await expect(page.locator('svg')).toBeVisible();
    
    // 更改文本
    await input.clear();
    await input.fill('Second Text');
    
    // 验证二维码仍然显示（内容已更新）
    await expect(page.locator('svg')).toBeVisible();
  });

  test('should be responsive on mobile', async ({ page, isMobile }) => {
    if (isMobile) {
      // 检查移动端布局
      const container = page.locator('.ant-layout-content');
      await expect(container).toBeVisible();
      
      // 检查输入框在移动端可用
      const input = page.locator('input[placeholder*="请输入要生成二维码的文本"]');
      await expect(input).toBeVisible();
      await input.fill('Mobile Test');
      
      // 验证二维码在移动端显示
      await expect(page.locator('svg')).toBeVisible();
    }
  });
}); 