import { Page } from '@playwright/test';

export class StorePage {
  constructor(private page: Page) {}

  async navigateToStore() {
    await this.page.click("//a[@class='main-menu-item-link']/span[contains(text(), 'Store')]");
  }
}