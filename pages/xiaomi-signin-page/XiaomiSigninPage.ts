import { Page } from '@playwright/test';

export class XiaomiSigninPage {
  constructor(private page: Page) {}

  async navigateToSignin() {
    await this.page.click('text=Sign in');
  }

  async enterEmail(email: string) {
    await this.page.fill('input[type="email"]', email);
  }

  async enterPassword(password: string) {
    await this.page.fill('input[type="password"]', password);
  }

  async clickSigninButton() {
    await this.page.click('button[type="submit"]');
  }
}