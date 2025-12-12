import { Browser, Page, chromium } from '@playwright/test';

export class BrowserUtils {
  static async launchBrowser(): Promise<Browser> {
    return await chromium.launch({ headless: false });
  }

  static async createPage(browser: Browser): Promise<Page> {
    return await browser.newPage();
  }

  static async closeBrowser(browser: Browser): Promise<void> {
    await browser.close();
  }

  static async waitForSeconds(page: Page, seconds: number): Promise<void> {
    await page.waitForTimeout(seconds * 1000);
  }
}