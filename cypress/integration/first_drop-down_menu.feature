Feature: The SeleniumEasy

  @scenario
  Scenario: Opening Simple Form Demo page
    Given I open "Simple Form Demo" page
    And I enter message "The best"
    When I click on "Show message" button
    Then Assert that I should see entered message contain "The best"
    And I enter a value for each field "48" and "75"
    When I click on "Get Total" button
    Then Assert that should be visible total result contain "123"
    And I enter a value for each field "h" and "i"
    When I click on "Get Total" button
    Then Assert that should be visible total result contain "NaN"

  @scenario1
  Scenario: Opening Checkbox Demo page
    Given I open "Checkbox Demo" page
    When I check on the checkbox
    Then Assert that success message is visible
    And I click on the "Check All" checkbox
    And I click on the "Uncheck All" checkbox
    And I click on "Option1", "Option3", "Option4"
    And I click on the "Uncheck All" checkbox

  @scenario2
  Scenario: Opening Radio Buttons Demo page
    Given I open "Radio Buttons Demo" page
    When I check on the "Female" checkbox
    Then Assert that "Female" checkbox is checked
    And I click on the "Get Checked value" button
    Then Assert that "Radio button 'Female' is checked" message is visible
    And I check on the "Male" and "5 - 15" checkboxes
    Then Assert that "5 - 15" is checked
    And I click on "Get values" button
    Then Assert that "Sex : Male Age group: 5 - 15" message is visible

  @scenario3
  Scenario: Opening Select Dropdown List page
    Given I open "Select Dropdown List" page
    And I select "Tuesday" value
    Then Assert that "Day selected :- Tuesday" message is visible
    When I select "Friday" value
    Then Assert that "Day selected :- Friday" message is visible
    And I select "New York" value
    When I click on "Print First" button
    Then Assert that "First selected option is : New York" message is visible
    And I click on "Print All" button
    Then Assert that "Options selected are : New York" message is visible
    And I select "California" value
    And I click on "Print All" button
    Then Assert that "Options selected are : California" message is visible
    And I click on "Print All" button
    Then Assert that "Options selected are : California" message is visible
    And I reload page and I click on "Print All" button
    Then Assert that "First selected option is : undefined" message is visible
    And I click on "Print All" button
    Then Assert that "Options selected are :" message is visible

  @scenario4
  Scenario: Opening Input Form Submit page
    Given I open "Input Form Submit" page
    And I fill all required fields
    And I click on "Sent" button
    When I fill all fields except first name
    Then Assert "Please supply your first name" message should be visible

  @scenario5
  Scenario: Opening Ajax Form Submit page
    Given I open "Ajax Form Submit" page
    And I type name in field
    And I type comment in field
    When I click on "Sumbit" button
    Then Assert success message should be visible

  @scenario6
  Scenario: Opening JQuery Select dropdown page
    Given I open "JQuery Select dropdown" page
    And I type letter "J" in search box
    Then Assert that "Japan" option is visible
    And I type "Ma" in search box and click on "Maryland"
    Then Assert that "Maryland" option is visible
    And I type letter "A" in search box and click on "Arizona"
    Then Assert that "Arizona" option is visible
    And I type "p" in search box and click on "Puerto Rico"
    Then Assert that "Puerto Rico" option is visible
    Then Assert that "Guam" option should be disabled
    And I select "Java" from related options
    And I select "Ruby" from related options
    And I remove selected "Maryland" and "Arizona"
