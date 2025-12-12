module.exports = {
  default: {
    require: ['utils/CommonSteps.ts', 'features/step-definitions/**/*.ts'],
    requireModule: ['ts-node/register'],
    format: ['progress', 'json:results/cucumber-report/cucumber-report.json'],
    paths: ['features/**/*.feature']
  }
};