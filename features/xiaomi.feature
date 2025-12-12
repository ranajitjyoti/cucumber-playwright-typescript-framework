Feature: Xiaomi Page
  
  @smoke @xiaomi
  Scenario: Open Xiaomi page and search
    Given I navigate to Xiaomi
    And I wait for 10 seconds
    Then I should see Xiaomi page title
