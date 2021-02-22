Feature: The SeleniumEasy

  @scenario
  Scenario: Opening Bootstrap Date Picker page
    Given I open "Bootstrap Date Picker" page
    And I select date "25"
    And I select Start date "14"
    And I select End date "25"

  @scenario1
  Scenario: Opening JQuery Date Picker page
    Given I open "JQuery Date Picker" page
    And I select date "11"
    When I select End date "19"
    Then Assert that date "19" should be visible

