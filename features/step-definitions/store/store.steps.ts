import { When } from '@cucumber/cucumber';
import { StorePage } from '../../../pages/store/StorePage';

let storePage: StorePage;

When('I click on Store', async () => {
  storePage = new StorePage((global as any).page);
  await storePage.navigateToStore();
});