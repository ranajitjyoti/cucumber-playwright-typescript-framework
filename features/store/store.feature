Feature: Store Page
  
  @smoke @store
  Scenario: Navigate to Store section
    Given I navigate to Xiaomi
    When I click on Store
    And I wait for 5 seconds