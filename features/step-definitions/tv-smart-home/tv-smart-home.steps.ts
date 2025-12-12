import { When } from '@cucumber/cucumber';
import { TvSmartHomePage } from '../../../pages/tv-smart-home/TvSmartHomePage';

let tvSmartHomePage: TvSmartHomePage;

When('I click on TV Smart Home', async () => {
  tvSmartHomePage = new TvSmartHomePage((global as any).page);
  await tvSmartHomePage.navigateToTvSmartHome();
});