import { When } from '@cucumber/cucumber';
import { TabletsPage } from '../../../pages/tablets/TabletsPage';

let tabletsPage: TabletsPage;

When('I click on Tablets', async () => {
  tabletsPage = new TabletsPage((global as any).page);
  await tabletsPage.navigateToTablets();
});