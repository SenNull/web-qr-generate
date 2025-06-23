import { Page } from '@playwright/test';

/**
 * 等待React应用完全加载
 */
export async function waitForAppToLoad(page: Page) {
  // 等待网络空闲
  await page.waitForLoadState('networkidle');
  
  // 等待React应用根元素渲染
  await page.waitForSelector('#root > *', { timeout: 15000 });
  
  // 等待Ant Design样式加载完成
  await page.waitForFunction(() => {
    return document.querySelector('.ant-layout') !== null;
  }, { timeout: 15000 });
}

/**
 * 获取输入框元素
 */
export async function getInputElement(page: Page) {
  // 尝试多种选择器来找到Ant Design的Input组件
  const selectors = [
    'input.ant-input',
    '.ant-input',
    'input[type="text"]',
    'input'
  ];
  
  for (const selector of selectors) {
    try {
      const element = page.locator(selector).first();
      await element.waitFor({ timeout: 5000 });
      return element;
    } catch (e) {
      continue;
    }
  }
  
  // 如果所有选择器都失败，返回最通用的
  return page.locator('input').first();
}

/**
 * 等待二维码生成
 */
export async function waitForQRCode(page: Page) {
  await page.waitForSelector('svg', { timeout: 10000 });
}

/**
 * 切换语言
 */
export async function switchLanguage(page: Page, lang: 'en' | 'zh') {
  await page.goto(`/?lang=${lang}`);
  await waitForAppToLoad(page);
} 