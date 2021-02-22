  Feature: The SeleniumEasy

    @scenario
    Scenario: Opening Table Pagination page
      Given I open "Table Pagination" page
      And I click on next and previous buttons
      Then Assert that page has max 5 records
      And I click on next button
      Then Assert that page has max 5 records
      And I click on next button
      Then Assert that page has max 3 records

    @scenario1
    Scenario: Opening Table Data Search page
      Given I open "Table Data Search" page
      And I type "Emily John" and filter by name
      And I type "seo tags" and filter by task
      And I count items that have "se"
      And I type "in progress" and filter by status
      And I count items that have "in progress"
      When I type "in progress a" and filter
      Then Assert that "No results found" message should be visible
      And I click on "Filter" button
      And I type "3" to filter by number
      And I type "ma" to filter by username
      And I count items that have "ma"
      And I type "b" to filter by first name
      And I count items that have "b"
      And I type "k" to filter by last name
      And I count items that have "k"
      When I type "k" to filter by last name
      Then Assert that "No results found" message should be visible

    @scenario2
    Scenario: Opening Table Filter page
      Given I open "Table Filter" page
      And I click on star button
      And I click on first checkbox
      And I click on "Green" button to filter by Green
      And I click on "Orange" button to filter by Orange
      And I click on two checkboxes
      And I click on "star" button
      And I click on "Red" button to filter by Red
      And I click on Star button
      And I click on checkbox
      When I click on "All" button
      Then I count all filter records
      And I count star-checked items

    @scenario3
    Scenario: Opening Table Sort & Search page
      Given I open "Table Sort & Search" page
      And I click on "Name" and sort by Name
      And I click on "Position" and sort by Position
      And I click on "Office" and sort by Office
      And I click on "Age" and sort by Age
      And I click on "Start date" and sort by Start date
      And I click on "Salary" and sort by Salary
      And I select example length 25 and repeat all again
      And I select example length 50 and repeat all again
      And I select example length 100 and repeat all again
      When I type "London" in search field
      Then I count "London" length
      And I type "Tokyo" in search field
      Then I count "Tokyo" length
      And I click on "Age" and sort by Age
      Then Assert that Age have attribute "activate to sort column descending"





