import {Given, And, Then, When} from "cypress-cucumber-preprocessor/steps";

const url = 'https://www.seleniumeasy.com/test/'
Given(/^I open "Simple Form Demo" page$/, function (arg) {
    cy.visit('basic-first-form-demo.html');
    cy.get('[title="Close"]').click();
});

And(/^I enter message "The best"$/, function (arg) {
    cy.get('[placeholder="Please enter your Message"]').type('The best');
});

When(/^I click on "Show message" button$/, function (arg) {
    cy.get('#get-input [type="button"]').click();
});

Then(/^Assert that I should see entered message contain "The best"$/, function (arg) {
    cy.get('#display').should('contain', 'The best');
});

And(/^I enter a value for each field "48" and "75"$/, function (arg) {
    cy.get('#sum1').type('48');
    cy.get('#sum2').type('75');
});

When(/^I click on "Get Total" button$/, function (arg) {
    cy.get('#gettotal [type="button"]').click();
});

Then(/^Assert that should be visible total result contain "123"$/, function (arg) {
    cy.get('#displayvalue').should('contain', '123');
});

And(/^I enter a value for each field "h" and "i"$/, function (arg) {
    cy.get('#sum1').clear().type('h');
    cy.get('#sum2').clear().type('i');
});

When(/^I click on "Get Total" button$/, function (arg) {
    cy.get('#gettotal [type="button"]').click();
});

Then(/^Assert that should be visible total result contain "NaN"$/, function (arg) {
    cy.get('#displayvalue').should('contain', 'NaN');
});

Given(/^I open "Checkbox Demo" page$/, function (arg) {
    cy.visit('basic-checkbox-demo.html');
});

When(/^I check on the checkbox$/, function (arg) {
    cy.get('#isAgeSelected').check();
});

Then(/^Assert that success message is visible$/, function (arg) {
    cy.get('#txtAge').should('contain', 'Success - Check box is checked');
});

And(/^I click on the "Check All" checkbox$/, function (arg) {
    cy.get('[value="Check All"]').click();
});

And(/^I click on the "Uncheck All" checkbox$/, function (arg) {
    cy.get('[value="Uncheck All"]').click();
});

And(/^I click on "Option1", "Option3", "Option4"$/, function (arg) {
    cy.contains( 'Option 1').click();
    cy.contains('Option 3').click();
    cy.contains('Option 4').click();
});

And(/^I click on the "Uncheck All" checkbox$/, function (arg) {
    cy.get('[value="Uncheck All"]').click();
});

Given(/^I open "Radio Buttons Demo" page$/, function (arg) {
    cy.visit('basic-radiobutton-demo.html');
});

When(/^I check on the "Female" checkbox$/, function (arg) {
    cy.get('[value="Female"]').check();
});

Then(/^Assert that "Female" checkbox is checked$/, function (arg) {
    cy.get('[value="Female"]').should('be.checked');
});

And(/^I click on the "Get Checked value" button$/, function (arg) {
    cy.get('#buttoncheck').click();
});

Then(/^Assert that "Radio button 'Female' is checked" message is visible$/, function (arg) {
    cy.contains("Radio button 'Female' is checked").should('be.visible');
});

And(/^I check on the "Male" and "5 - 15" checkboxes$/, function (arg) {
    cy.get('[value="Male"]').check();
    cy.get('[value="5 - 15"]').check();
});

Then(/^Assert that "5 - 15" is checked$/, function (arg) {
    cy.get('[value="5 - 15"]').should('be.checked');
});

And(/^I click on "Get values" button$/, function (arg) {
    cy.contains('Get values').click();
});

Then(/^Assert that "Sex : Male Age group: 5 - 15" message is visible$/, function (arg) {
    cy.contains('Sex : Male Age group: 5 - 15').should('be.visible');
});

Given(/^I open "Select Dropdown List" page$/, function (arg) {
    cy.visit('basic-select-dropdown-demo.html');
});

And(/^I select "Tuesday" value$/, function (arg) {
    cy.get('#select-demo').select('Tuesday');
});

Then(/^Assert that "Day selected :- Tuesday" message is visible$/, function (arg) {
    cy.contains('Day selected :- Tuesday').should('be.visible');
});

When(/^I select "Friday" value$/, function (arg) {
    cy.get('#select-demo').select('Friday');
});

Then(/^Assert that "Day selected :- Friday" message is visible$/, function (arg) {
    cy.contains('Day selected :- Friday').should('be.visible');
});

And(/^I select "New York" value$/, function (arg) {
    cy.get('#multi-select').select('New York');
});

When(/^I click on "Print First" button$/, function (arg) {
    cy.get('[value="Print First"]').click();
});

Then(/^Assert that "First selected option is : New York" message is visible$/, function (arg) {
    cy.contains('First selected option is : New York').should('be.visible');
});

And(/^I click on "Print All" button$/, function (arg) {
    cy.get('[value="Print All"]').click();
});

Then(/^Assert that "Options selected are : New York" message is visible$/, function (arg) {
    cy.contains('Options selected are : New York').should('be.visible');
});

And(/^I select "California" value$/, function (arg) {
    cy.get('#multi-select').select('California');
});

When(/^I click on "Print First" button$/, function (arg) {
    cy.get('[value="Print First"]').click();
});

Then(/^Assert that "First selected option is : California" message is visible$/, function (arg) {
    cy.contains('First selected option is : California').should('be.visible');
});

And(/^I click on "Print All" button$/, function (arg) {
    cy.get('[value="Print All"]').click();
});

Then(/^Assert that "Options selected are : California" message is visible$/, function (arg) {
    cy.contains('Options selected are : California').should('be.visible');
});

And(/^I reload page and I click on "Print All" button$/, function (arg) {
    cy.reload();
    cy.get('[value="Print First"]').click();
});

Then(/^Assert that "First selected option is : undefined" message is visible$/, function (arg) {
    cy.contains('First selected option is : undefined').should('be.visible');
});

And(/^I click on "Print All" button$/, function (arg) {
    cy.get('[value="Print All"]').click();
});

Then(/^Assert that "Options selected are :" message is visible$/, function (arg) {
    cy.contains('Options selected are :').should('be.visible');
});

Given(/^I open "Input Form Submit" page$/, function (arg) {
    cy.visit('input-form-demo.html');
});

And(/^I fill all required fields$/, function (arg) {
    cy.get('[name="first_name"]').type('John');
    cy.get('[name="last_name"]').type('Smith');
    cy.get('[name="email"]').type('testtest@gmail.com');
    cy.get('[name="phone"]').type('9998887777');
    cy.get('[name="address"]').type('4185  Harron Drive');
    cy.get('[name="city"]').type('Baltimore');
    cy.get('[name="state"]').select('Maryland');
    cy.get('[name="zip"]').type('21202');
    cy.get('[name="website"]').type('https://www.seleniumeasy.com/test');
    cy.get('[value="no"]').check();
    cy.get('[name="comment"]').type('Project Description, Project Description, Project Description');
    //Run uncaught exception
    cy.on('uncaught:exception', (err, runnable) => {
        expect(err.message)
        done()
    });
    return false});

And(/^I click on "Sent" button$/, function (arg) {
    cy.get('.btn.btn-default').click();
});

When(/^I fill all fields except first name$/, function (arg) {
    cy.reload();
    cy.get('.col-md-4 [type="submit"]').click();
    cy.get('[name="last_name"]').type('Smith');
    cy.get('[name="email"]').type('testtest@gmail.com');
    cy.get('[name="phone"]').type('9998887777');
    cy.get('[name="address"]').type('4185  Harron Drive');
    cy.get('[name="city"]').type('Baltimore');
    cy.get('[name="state"]').select('Maryland');
    cy.get('[name="zip"]').type('21202');
    cy.get('[name="website"]').type('https://www.seleniumeasy.com/test');
    cy.get('[value="no"]').check();
    cy.get('[name="comment"]').type('Project Description, Project Description, Project Description');
    //Run uncaught exception
    cy.on('uncaught:exception', (err, runnable) => {
        expect(err.message)
        done()
    });
    return false
});

Then(/^Assert "Please supply your first name" message should be visible$/, function (arg) {
    cy.contains('Please supply your first name').should('be.visible');
});

Given(/^I open "Ajax Form Submit" page$/, function (arg) {
    cy.visit('ajax-form-submit-demo.html');
});

And(/^I type name in field$/, function (arg) {
    cy.get('[name="title"]').type('John Smith');
});

And(/^I type comment in field$/, function (arg) {
    cy.get('#description').type('Ajax Form Submit with Loading icon');
});

When(/^I click on "Sumbit" button$/, function (arg) {
    cy.get('[name="btn-submit"]').click();
});

Then(/^Assert success message should be visible$/, function (arg) {
    cy.contains('Form submited Successfully!').should('be.visible');
});

Given(/^I open "JQuery Select dropdown" page$/, function (arg) {
    cy.visit('jquery-dropdown-search-demo.html');
});

And(/^I type letter "J" in search box$/, function (arg) {
    cy.get('.select2-selection__arrow').first().click();
    cy.get('.select2-search.select2-search--dropdown').type('J');
    cy.get('[role="treeitem"]').click();
});

Then(/^Assert that "Japan" option is visible$/, function (arg) {
    cy.get('[title="Japan"]').should('contain', 'Japan');
});

And(/^I type "Ma" in search box and click on "Maryland"$/, function (arg) {
    cy.get('.select2-search__field').click().type('Ma');
    cy.get('[role="tree"]').contains('Maryland').click();
});

Then(/^Assert that "Maryland" option is visible$/, function (arg) {
    cy.get('.select2-selection__choice').should('be.visible');
});

And(/^I type letter "A" in search box and click on "Arizona"$/, function (arg) {
    cy.get('.select2-search__field').click().type('A');
    cy.get('[role="tree"]').contains('Arizona').click();
});

Then(/^Assert that "Arizona" option is visible$/, function (arg) {
    cy.get('.select2-selection__choice').should('be.visible');
});

And(/^I type "p" in search box and click on "Puerto Rico"$/, function (arg) {
    cy.get('[title="American Samoa"]').click();
    cy.get('[role="textbox"]').last().type('p');
    cy.get('.select2-results__options').contains('Puerto Rico').click();
});

Then(/^Assert that "Puerto Rico" option is visible$/, function (arg) {
    cy.get('[title="Puerto Rico"]').should('be.visible');
    cy.get('[title="Puerto Rico"]').click();
});

Then(/^Assert that "Guam" option should be disabled$/, function (arg) {
    cy.contains('Guam').should('be.disabled');
});

And(/^I select "Java" from related options$/, function (arg) {
    cy.get('[name="files"]').select('Java').should('have.value', 'jquery');
});

And(/^I select "Ruby" from related options$/, function (arg) {
    cy.get('[name="files"]').select('Ruby').should('have.value', 'jqueryui');
});

And(/^I remove selected "Maryland" and "Arizona"$/, function (arg) {
    cy.get('.select2-selection__choice__remove').first().click();
    cy.get('.select2-selection__choice__remove').last().click();
});