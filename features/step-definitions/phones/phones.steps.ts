import { When } from '@cucumber/cucumber';
import { PhonesPage } from '../../../pages/phones/PhonesPage';

let phonesPage: PhonesPage;

When('I click on Phones', { timeout: 15000 }, async () => {
  phonesPage = new PhonesPage((global as any).page);
  await phonesPage.navigateToPhones();
});