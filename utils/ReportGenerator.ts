import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export class ReportGenerator {
  static async generateAllureReport(): Promise<void> {
    try {
      console.log('Generating Allure report...');
      await execAsync('npx allure generate results/allure-results --clean -o results/allure-report');
      console.log('✓ Allure report generated at: results/allure-report/index.html');
    } catch (error) {
      console.log('⚠ Allure report generation failed:', error);
    }
  }

  static async openAllureReport(): Promise<void> {
    try {
      await execAsync('npx allure open results/allure-report');
    } catch (error) {
      console.log('⚠ Could not open Allure report:', error);
    }
  }

  static logCucumberReport(): void {
    console.log('✓ Cucumber JSON report generated at: results/cucumber-report/cucumber-report.json');
  }
}