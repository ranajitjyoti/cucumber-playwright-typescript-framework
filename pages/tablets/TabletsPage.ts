import { Page } from '@playwright/test';

export class TabletsPage {
  constructor(private page: Page) {}

  async navigateToTablets() {
    await this.page.click("//a[@class='main-menu-item-link']/span[contains(text(), 'Tablets')]");
  }
}