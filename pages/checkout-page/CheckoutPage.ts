import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async enterShippingAddress(address: string) {
    await this.page.fill('input[name="address"]', address);
  }

  async selectPaymentMethod() {
    await this.page.click('input[value="credit-card"]');
  }

  async placeOrder() {
    await this.page.click('button:has-text("Place Order")');
  }
}