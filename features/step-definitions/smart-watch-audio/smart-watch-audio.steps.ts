import { When } from '@cucumber/cucumber';
import { SmartWatchAudioPage } from '../../../pages/smart-watch-audio/SmartWatchAudioPage';

let smartWatchAudioPage: SmartWatchAudioPage;

When('I click on Smart Watch Audio', async () => {
  smartWatchAudioPage = new SmartWatchAudioPage((global as any).page);
  await smartWatchAudioPage.navigateToSmartWatchAudio();
});