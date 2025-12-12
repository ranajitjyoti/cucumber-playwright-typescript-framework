# Cucumber Playwright TypeScript Framework

[![CI/CD Pipeline](https://github.com/ranajitjyoti/cucumber-playwright-typescript-framework/actions/workflows/test.yml/badge.svg)](https://github.com/ranajitjyoti/cucumber-playwright-typescript-framework/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)
[![Playwright](https://img.shields.io/badge/playwright-%5E1.40.0-blue)](https://playwright.dev/)

A comprehensive test automation framework built with Playwright, Cucumber BDD, and TypeScript for web application testing.

## 🚀 Features

- **Page Object Model (POM)** - Maintainable and scalable test structure
- **Cucumber BDD** - Behavior-driven development with Gherkin syntax
- **TypeScript** - Type-safe test automation
- **Cross-browser Testing** - Chromium, Firefox, Safari support
- **CI/CD Ready** - GitHub Actions integration
- **HTML Reports** - Beautiful test execution reports
- **Tag-based Execution** - Run specific test suites
- **Headless/Headed Mode** - Flexible execution options

## 📋 Prerequisites

- Node.js >= 18.0.0
- npm >= 8.0.0
- Git

## 🛠️ Installation

1. **Clone the repository**
```bash
git clone https://github.com/ranajitjyoti/cucumber-playwright-typescript-framework.git
cd cucumber-playwright-typescript-framework
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup Playwright browsers**
```bash
npm run setup
```

## 🎯 Quick Start

### Run All Tests
```bash
npm test
```

### Run Specific Test Suites
```bash
npx cucumber-js --tags "@phones"          # Phone section tests
npx cucumber-js --tags "@store"           # Store section tests
npx cucumber-js --tags "@xiaomi-signin"   # Sign-in tests
npx cucumber-js --tags "@smoke"           # Smoke tests
```

### Generate Reports
```bash
npm run html-report     # Generate HTML report
npm run results         # View formatted console results
```

## 📁 Project Structure

```
cucumber-playwright-typescript-framework/
├── .github/workflows/          # GitHub Actions CI/CD
├── features/                   # Feature files and step definitions
│   ├── *.feature              # Gherkin feature files
│   └── step-definitions/       # Step definition files
├── pages/                      # Page Object Model classes
│   ├── store/
│   ├── phones/
│   ├── tablets/
│   └── ...
├── utils/                      # Utility functions and helpers
├── results/                    # Test execution reports
├── types/                      # TypeScript type definitions
└── README.md
```

## 🏷️ Available Tags

- `@smoke` - Critical functionality tests
- `@phones` - Phone section tests
- `@store` - Store section tests
- `@tablets` - Tablet section tests
- `@tv-smart-home` - TV & Smart Home tests
- `@smart-watch-audio` - Smart Watch & Audio tests
- `@xiaomi-signin` - Authentication tests
- `@buy-journey` - Purchase flow tests
- `@checkout` - Checkout process tests

## 📊 Reports

After test execution, reports are generated in the `results/` folder:

- **HTML Report**: `results/cucumber-report/index.html`
- **JSON Report**: `results/cucumber-report/cucumber-report.json`

## 🔄 CI/CD Pipeline

### GitHub Actions Workflows

1. **Continuous Integration** (`test.yml`)
   - Triggers on push/PR to main/master
   - Runs all tests
   - Generates reports
   - Uploads artifacts

2. **Scheduled Tests** (`scheduled-tests.yml`)
   - Runs daily at 9 AM UTC
   - Manual trigger available
   - Comprehensive test execution

### Viewing CI/CD Results

1. Navigate to the **Actions** tab in GitHub
2. Select the desired workflow run
3. Download artifacts:
   - `test-results` - Complete test results
   - `html-report` - HTML report file

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Writing Tests

### Creating a New Feature

1. **Add Feature File**
```gherkin
# features/new-section/new-section.feature
Feature: New Section
  
  @smoke @new-section
  Scenario: Navigate to new section
    Given I navigate to Xiaomi
    When I click on New Section
    Then I should see new section page
```

2. **Create Page Object**
```typescript
// pages/new-section/NewSectionPage.ts
import { Page } from '@playwright/test';

export class NewSectionPage {
  constructor(private page: Page) {}

  async navigateToNewSection() {
    await this.page.click("//a[@class='main-menu-item-link']/span[contains(text(), 'New Section')]");
  }
}
```

3. **Add Step Definitions**
```typescript
// features/step-definitions/new-section/new-section.steps.ts
import { When } from '@cucumber/cucumber';
import { NewSectionPage } from '../../../pages/new-section/NewSectionPage';

let newSectionPage: NewSectionPage;

When('I click on New Section', async () => {
  newSectionPage = new NewSectionPage((global as any).page);
  await newSectionPage.navigateToNewSection();
});
```

## 🐛 Troubleshooting

### Common Issues

1. **Browser Installation Issues**
```bash
npx playwright install --force
```

2. **TypeScript Compilation Errors**
```bash
npx tsc --noEmit
```

3. **Test Timeout Issues**
   - Increase timeout in step definitions
   - Check network connectivity
   - Verify element selectors

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/ranajitjyoti/cucumber-playwright-typescript-framework/issues)
- **Discussions**: [GitHub Discussions](https://github.com/ranajitjyoti/cucumber-playwright-typescript-framework/discussions)
- **Email**: ranajitjyoti@example.com

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ranajit Jyoti**
- GitHub: [@ranajitjyoti](https://github.com/ranajitjyoti)
- LinkedIn: [Ranajit Jyoti](https://linkedin.com/in/ranajitjyoti)

## 🙏 Acknowledgments

- [Playwright](https://playwright.dev/) - Web testing framework
- [Cucumber.js](https://cucumber.io/) - BDD testing framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript

---

⭐ **Star this repository if it helped you!**