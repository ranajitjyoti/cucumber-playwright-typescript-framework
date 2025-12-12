import { When } from '@cucumber/cucumber';
import { BuyJourneyPage } from '../../../pages/buy-journey/BuyJourneyPage';

let buyJourneyPage: BuyJourneyPage;

When('I select a product', async () => {
  buyJourneyPage = new BuyJourneyPage((global as any).page);
  await buyJourneyPage.selectProduct();
});

When('I add product to cart', async () => {
  await buyJourneyPage.addToCart();
});

When('I proceed to buy', async () => {
  await buyJourneyPage.proceedToBuy();
});