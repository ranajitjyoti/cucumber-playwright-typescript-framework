const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'results/cucumber-report/cucumber-report.json',
  output: 'results/cucumber-report/index.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: false,
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "Local",
    "Browser": "Chromium",
    "Platform": "Windows",
    "Framework": "Cucumber Playwright TypeScript",
    "Executed": "Local"
  }
};

reporter.generate(options);
console.log('✅ HTML Report generated at: results/cucumber-report/index.html');