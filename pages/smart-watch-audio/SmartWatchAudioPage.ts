import { Page } from '@playwright/test';

export class SmartWatchAudioPage {
  constructor(private page: Page) {}

  async navigateToSmartWatchAudio() {
    await this.page.click("//a[@class='main-menu-item-link']/span[contains(text(), 'Smart Watch & Audio')]");
  }
}