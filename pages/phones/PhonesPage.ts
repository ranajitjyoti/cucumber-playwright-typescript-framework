import { Page } from '@playwright/test';

export class PhonesPage {
  constructor(private page: Page) {}

  async navigateToPhones() {
    await this.page.waitForSelector("//a[@class='main-menu-item-link']/span[contains(text(), 'Phones')]", { timeout: 10000 });
    await this.page.click("//a[@class='main-menu-item-link']/span[contains(text(), 'Phones')]");
  }
}