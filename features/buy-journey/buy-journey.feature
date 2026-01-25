Feature: Buy Journey
  
  @smoke @buy-journey
  Scenario: Complete buy journey
    Given I navigate to Xiaomi
    When I select a product
    And I add product to cart
    And I proceed to buy
   #And I wait for 5 seconds
