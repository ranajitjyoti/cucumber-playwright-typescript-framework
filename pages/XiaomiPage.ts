import { Page } from '@playwright/test';

export class XiaomiPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://www.mi.com/in', { waitUntil: 'networkidle' });
  }

  async getTitle() {
    return await this.page.title();
  }

  async searchFor(searchTerm: string) {
    await this.page.fill('input[placeholder*="search"]', searchTerm);
    await this.page.press('input[placeholder*="search"]', 'Enter');
  }
}