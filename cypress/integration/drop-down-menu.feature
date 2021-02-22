Feature: The SeleniumEasy

  @scenario
  Scenario: Opening first drop-down menu
    Given I open Home page
    And I click on "Input Forms" menu
    And I verify each submenu title
    Then I verify each submenu url


  @scenario1
  Scenario: Opening second drop-down menu
    Given I open Home page
    And I click on "Date pickers" menu
    And I verify each submenu title
    Then I verify each submenu url


  @scenario2
  Scenario: Opening third drop-down menu
    Given I open Home page
    And I click on "Table" menu
    And I verify each submenu title
    Then I verify each submenu url

