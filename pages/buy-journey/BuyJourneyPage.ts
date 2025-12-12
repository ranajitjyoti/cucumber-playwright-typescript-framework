import { Page } from '@playwright/test';

export class BuyJourneyPage {
  constructor(private page: Page) {}

  async selectProduct() {
    await this.page.click('.product-item >> first');
  }

  async addToCart() {
    await this.page.click('text=Add to Cart');
  }

  async proceedToBuy() {
    await this.page.click('text=Buy Now');
  }
}