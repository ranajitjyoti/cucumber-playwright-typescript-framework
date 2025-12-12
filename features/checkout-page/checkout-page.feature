Feature: Checkout Page
  
  @smoke @checkout
  Scenario: Complete checkout process
    Given I navigate to Xiaomi
    When I reach checkout page
    And I enter shipping address "123 Test Street, Mumbai"
    And I select payment method
    And I wait for 5 seconds