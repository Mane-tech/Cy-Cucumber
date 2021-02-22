Feature: The SeleniumEasy

  @scenario3
  Scenario: Opening Table Data Download page
    Given I open "Table Data Download" page
    When I click on Copy button
    Then Assert that "Copy to clipboard" should be visible
    And I click on CSV button and download the file
    And I click on Excel button and download the file
    And I click on PDF button and download the file
    And I click on Print button and download the file
    And I type "london" in search field
    And I count "london" length
    And I click on Print button and download the file
    When I click on "Copy" button
    Then Assert that "Copy to clipboard" should be visible
    And I navigate to second page
    When I click on "Copy" button
    Then Assert that "Copy to clipboard" should be visible
    And I type "22" in search field
    And I count items length
    And I click on CSV button and download the file
    And I click on Excel button and download the file
    And I click on "Office" and sort by Office
    And I click on Excel button and download the file
    And I click on "Salary" and sort by Salary
    And I click on CSV button and download the file
    And I click on Excel button and download the file
    And I click on PDF button and download the file
    And I click on Print button and download the file