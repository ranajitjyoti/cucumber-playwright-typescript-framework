import { Given } from '@cucumber/cucumber';
import { BrowserUtils } from './BrowserUtils';

Given('I navigate to Xiaomi', { timeout: 30000 }, async () => {
  await (global as any).xiaomiPage.navigate();
});

Given('I wait for {int} seconds', { timeout: 15000 }, async (seconds: number) => {
  await BrowserUtils.waitForSeconds((global as any).page, seconds);
});