import { test, expect } from '@playwright/test';
import { waitForAppToLoad, getInputElement, waitForQRCode, switchLanguage } from './helpers/app-helpers';

test.describe('QR Code Generator', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await waitForAppToLoad(page);
  });

  test('should have title', async ({ page }) => {
    await expect(page).toHaveTitle(/二维码生成器|QR Code Generator/);
  });

  test('should display main components', async ({ page }) => {
    // 检查标题存在
    await expect(page.locator('h1')).toBeVisible();
    
    // 检查输入框存在
    const input = await getInputElement(page);
    await expect(input).toBeVisible();
    
    // 检查版本信息存在（使用更通用的选择器）
    await expect(page.locator('text=/版本|Version/')).toBeVisible();
  });

  test('should generate QR code when text is entered', async ({ page }) => {
    // 输入文本
    const input = await getInputElement(page);
    await input.fill('Hello World');
    
    // 等待二维码生成
    await waitForQRCode(page);
    
    // 验证二维码SVG元素出现
    await expect(page.locator('svg')).toBeVisible();
  });

  test('should not show QR code when input is empty', async ({ page }) => {
    // 确保输入框为空
    const input = await getInputElement(page);
    await input.clear();
    
    // 验证没有二维码显示
    await expect(page.locator('svg')).not.toBeVisible();
  });

  test('should update QR code when text changes', async ({ page }) => {
    const input = await getInputElement(page);
    
    // 输入第一个文本
    await input.fill('First Text');
    await waitForQRCode(page);
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
      const input = await getInputElement(page);
      await expect(input).toBeVisible();
      await input.fill('Mobile Test');
      
      // 等待二维码生成
      await waitForQRCode(page);
      
      // 验证二维码在移动端显示
      await expect(page.locator('svg')).toBeVisible();
    }
  });

  test('should support internationalization', async ({ page }) => {
    // 先明确切换到中文
    await switchLanguage(page, 'zh');
    
    // 测试中文标题
    await expect(page.locator('h1')).toContainText('二维码生成器');
    
    // 切换到英文
    await switchLanguage(page, 'en');
    
    // 验证英文标题
    await expect(page.locator('h1')).toContainText('QR Code Generator');
    
    // 验证英文输入框提示
    const input = await getInputElement(page);
    await expect(input).toHaveAttribute('placeholder', /Enter text here/);
  });
}); 