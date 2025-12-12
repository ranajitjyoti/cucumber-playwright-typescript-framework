import { Then, Given } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Then('I should see Xiaomi page title', async () => {
  const title = await (global as any).xiaomiPage.getTitle();
  expect(title).toContain('Xiaomi');
});

Given('I search for {string}', async (searchTerm: string) => {
  await (global as any).xiaomiPage.searchFor(searchTerm);
});