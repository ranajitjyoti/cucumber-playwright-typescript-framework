import { Browser, Page } from '@playwright/test';
import { XiaomiPage } from '../pages/XiaomiPage';

declare global {
  var browser: Browser;
  var page: Page;
  var xiaomiPage: XiaomiPage;
}

export {};