Feature: Xiaomi Signin Page
  
  @smoke @xiaomi-signin
  Scenario: Navigate to Xiaomi signin page
    Given I navigate to Xiaomi
    When I click on Sign in
    And I wait for 5 seconds