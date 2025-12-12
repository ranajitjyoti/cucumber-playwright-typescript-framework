const fs = require('fs');

function viewResults() {
  try {
    const report = JSON.parse(fs.readFileSync('results/cucumber-report/cucumber-report.json', 'utf8'));
    
    console.log('\n🎯 TEST EXECUTION SUMMARY');
    console.log('========================');
    
    let totalScenarios = 0;
    let passedScenarios = 0;
    let failedScenarios = 0;
    
    report.forEach(feature => {
      console.log(`\n📁 Feature: ${feature.name}`);
      
      feature.elements.forEach(scenario => {
        totalScenarios++;
        const failed = scenario.steps.some(step => step.result.status === 'failed');
        
        if (failed) {
          failedScenarios++;
          console.log(`  ❌ ${scenario.name} - FAILED`);
          
          scenario.steps.forEach(step => {
            if (step.result.status === 'failed') {
              console.log(`     💥 Step: ${step.name}`);
              console.log(`     🔍 Error: ${step.result.error_message.split('\n')[0]}`);
            }
          });
        } else {
          passedScenarios++;
          console.log(`  ✅ ${scenario.name} - PASSED`);
        }
      });
    });
    
    console.log('\n📊 OVERALL RESULTS');
    console.log('==================');
    console.log(`Total Scenarios: ${totalScenarios}`);
    console.log(`Passed: ${passedScenarios}`);
    console.log(`Failed: ${failedScenarios}`);
    console.log(`Success Rate: ${Math.round((passedScenarios/totalScenarios)*100)}%`);
    
  } catch (error) {
    console.log('❌ Could not read report file:', error.message);
  }
}

viewResults();