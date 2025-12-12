Feature: Phones Page
  
  @smoke @phones
  Scenario: Navigate to Phones section
    Given I navigate to Xiaomi
    When I click on Phones
    And I wait for 5 seconds