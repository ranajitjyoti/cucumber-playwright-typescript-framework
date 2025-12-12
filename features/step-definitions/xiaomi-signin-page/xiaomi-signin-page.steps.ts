import { Given } from '@cucumber/cucumber';
import { XiaomiSigninPage } from '../../../pages/xiaomi-signin-page/XiaomiSigninPage';

let xiaomiSigninPage: XiaomiSigninPage;

Given('I click on Sign in', async function() {
  xiaomiSigninPage = new XiaomiSigninPage(this.page);
  await xiaomiSigninPage.navigateToSignin();
});