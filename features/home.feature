Feature: angularjs home page
  As a user I'd like to visit angularjs home page
  with examples or abgularjs usage

  Background:
    Given I am on the angularjs home page

  Scenario: angularjs page title
    Then I should see "HTML enhanced for web apps!" title

  Scenario: hello angularjs app: user greeting displaying
    When I enter name "Jackson" to the first example
    Then I should see "Hello Jackson!" greeting

  Scenario: angularjs todo list: todo addition
    When I enter todo "make coffee" to the second example
    And  press add button of the second example
    Then I should see "make coffee" in the list of todos

  Scenario: angularjs todo list: unmarking done todo
    And I see crossed first todo
    When I unmark first done todo
    Then First todo should not be crossed
    And Remaining todos title should be "2 of 2 remaining"