import { When } from '@cucumber/cucumber';
import { CheckoutPage } from '../../../pages/checkout-page/CheckoutPage';

let checkoutPage: CheckoutPage;

When('I reach checkout page', async () => {
  checkoutPage = new CheckoutPage((global as any).page);
});

When('I enter shipping address {string}', async (address: string) => {
  await checkoutPage.enterShippingAddress(address);
});

When('I select payment method', async () => {
  await checkoutPage.selectPaymentMethod();
});