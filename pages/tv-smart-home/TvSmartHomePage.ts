import { Page } from '@playwright/test';

export class TvSmartHomePage {
  constructor(private page: Page) {}

  async navigateToTvSmartHome() {
    await this.page.click("//a[@class='main-menu-item-link']/span[contains(text(), 'TV & Smart Home')]");
  }
}