import { BeforeAll, AfterAll } from '@cucumber/cucumber';
import { Browser, Page } from '@playwright/test';
import { BrowserUtils } from '../../utils/BrowserUtils';
import { XiaomiPage } from '../../pages/XiaomiPage';

let browser: Browser;
let page: Page;
let xiaomiPage: XiaomiPage;

BeforeAll(async () => {
  browser = await BrowserUtils.launchBrowser();
  page = await BrowserUtils.createPage(browser);
  xiaomiPage = new XiaomiPage(page);
  (global as any).browser = browser;
  (global as any).page = page;
  (global as any).xiaomiPage = xiaomiPage;
});

AfterAll(async () => {
  await BrowserUtils.closeBrowser(browser);
  
  // Generate HTML report automatically
  const { exec } = require('child_process');
  exec('node utils/HtmlReportGenerator.js', (error: any) => {
    if (!error) {
      console.log('\n📊 Test execution completed!');
      console.log('📁 HTML Report: results/cucumber-report/index.html');
      console.log('📁 JSON Report: results/cucumber-report/cucumber-report.json');
    }
  });
});