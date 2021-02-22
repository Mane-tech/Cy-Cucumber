import {Given, And, Then, When} from "cypress-cucumber-preprocessor/steps";

const url = 'https://www.seleniumeasy.com/test/'
Given(/^I open "Table Pagination" page$/, function (arg) {
    cy.visit('table-pagination-demo.html');
});

And(/^I click on next and previous buttons$/, function (arg) {
    cy.get('.next_link').click();
    cy.get('.prev_link').click();
});

Then(/^Assert that page has max 5 records$/, function (arg) {
    cy.get('[style="display: table-row;"]').its('length').should('eq', 5);
});

And(/^I click on next button$/, function (arg) {
    cy.get('.next_link').click();
});

Then(/^Assert that page has max 5 records$/, function (arg) {
    cy.get('[style="display: table-row;"]').its('length').should('eq', 5);
});

And(/^I click on next button$/, function (arg) {
    cy.get('.next_link').click();
});

Then(/^Assert that page has max 3 records$/, function (arg) {
    cy.get('[style="display: table-row;"]').its('length').should('eq', 3);
});

Given(/^I open "Table Data Search" page$/, function (arg) {
    cy.visit('table-search-filter-demo.html');
});

And(/^I type "Emily John" and filter by name$/, function (arg) {
    cy.get('#task-table-filter').type('Emily John');
});

And(/^I type "seo tags" and filter by task$/, function (arg) {
    cy.get('#task-table-filter').clear().type('seo tags');
});

And(/^I count items that have "se"$/, function (arg) {
    cy.get('.panel.panel-primary').first()
        .contains('se')
        .then(se => {
            const seCount = Cypress.$(se).length;
            expect(se).to.have.length(seCount);
        });
});

And(/^I type "in progress" and filter by status$/, function (arg) {
    cy.get('#task-table-filter').clear().type('in progress');
});

And(/^I count items that have "in progress"$/, function (arg) {
    cy.get('[style="display: table-row;"]').its('length').should('eq', 3);
});

When(/^I type "in progress a" and filter$/, function (arg) {
    cy.get('#task-table-filter').clear().type('in progress a');
});

Then(/^Assert that "No results found" message should be visible$/, function (arg) {
    cy.contains('No results found').should('be.visible');
});

And(/^I click on "Filter" button$/, function (arg) {
    cy.get('[class*="btn btn-default"]').click();
});

And(/^I type "3" to filter by number$/, function (arg) {
    cy.get('[placeholder="#"]').type('3');
    cy.get('.table').last().should('contain', '3');
});

And(/^I type "ma" to filter by username$/, function (arg) {
    cy.get('[placeholder="Username"]').type('ma');
});

And(/^I count items that have "ma"$/, function (arg) {
    cy.get('.table [style="display: table-row;"]').last().its('length').should('eq', 1);
});

And(/^I type "b" to filter by first name$/, function (arg) {
    cy.get('[placeholder="First Name"]').type('b');
});

And(/^I count items that have "b"$/, function (arg) {
    cy.get('.table [style="display: table-row;"]').its('length').should('eq', 2);
});

And(/^I type "k" to filter by last name$/, function (arg) {
    cy.get('[placeholder="Last Name"]').type('k');
});

And(/^I count items that have "k"$/, function (arg) {
    cy.get('.table [style="display: table-row;"]').its('length').should('eq', 2);
});

When(/^I type "k" to filter by last name$/, function (arg) {
    cy.get('[placeholder="Last Name"]').type('k');
});

Then(/^Assert that "No results found" message should be visible$/, function (arg) {
    cy.contains('No results found');
});

Given(/^I open "Table Filter" page$/, function (arg) {
    cy.visit('table-records-filter-demo.html');
});

And(/^I click on star button$/, function (arg) {
    cy.get('[data-status="pagado"] .star').first().click();
});

And(/^I click on first checkbox$/, function (arg) {
    cy.get('.ckbox #checkbox1').click({force: true});
});

And(/^I click on "Green" button to filter by Green$/, function (arg) {
    cy.get('.btn-group').contains('Green').click();
});

And(/^I click on "Orange" button to filter by Orange$/, function (arg) {
    cy.get('.btn.btn-warning.btn-filter').contains('Orange').click();
});

And(/^I click on two checkboxes$/, function (arg) {
    cy.get('.ckbox #checkbox3').click({force: true});
    cy.get('.ckbox #checkbox5').click({force: true});
});

And(/^I click on "star" button$/, function (arg) {
    cy.get('[data-status="pendiente"] .star').last().click();
});

And(/^I click on "Red" button to filter by Red$/, function (arg) {
    cy.get('.btn-group').contains('Red').click();
});

And(/^I click on Star button$/, function (arg) {
    cy.get('[data-status="cancelado"] .star').first().click();
});

And(/^I click on checkbox$/, function (arg) {
    cy.get('.ckbox #checkbox2').click({force: true});
});

When(/^I click on "All" button$/, function (arg) {
    cy.get('.btn-group').contains('All').click();
});

Then(/^I count all filter records$/, function (arg) {
    cy.get('.table-container tr').should(($tr) => {
        expect($tr).to.have.length(5)
    });
});

And(/^I count star-checked items$/, function (arg) {
    cy.get('.table-container tr').should(($tr) => {
        expect($tr).to.have.length(5)
    });
});

Given(/^I open "Table Sort & Search" page$/, function (arg) {
    cy.visit('table-sort-search-demo.html');
});

And(/^I click on "Name" and sort by Name$/, function (arg) {
    cy.contains('Name').dblclick();
    cy.contains('Name').should('have.attr', 'aria-label', 'Name: activate to sort column descending');
});

And(/^I click on "Position" and sort by Position$/, function (arg) {
    cy.contains('Position').click();
    cy.contains('Position').should('have.attr', 'aria-label', 'Position: activate to sort column descending');
});

And(/^I click on "Office" and sort by Office$/, function (arg) {
    cy.contains('Office').click();
    cy.contains('Office').should('have.attr', 'aria-label', 'Office: activate to sort column descending');
});

And(/^I click on "Age" and sort by Age$/, function (arg) {
    cy.contains('Age').click();
    cy.contains('Age').should('have.attr', 'aria-label', 'Age: activate to sort column descending');
});

And(/^I click on "Start date" and sort by Start date$/, function (arg) {
    cy.contains('Start date').click();
    cy.contains('Start date').should('have.attr', 'aria-label', 'Start date: activate to sort column descending');
});

And(/^I click on "Salary" and sort by Salary$/, function (arg) {
    cy.contains('Salary').click();
    cy.contains('Salary').should('have.attr', 'aria-label', 'Salary: activate to sort column descending');
});

And(/^I select example length 25 and repeat all again$/, function (arg) {
    cy.get('[name="example_length"]').select('25');
    cy.contains('Name').click();
    cy.contains('Name').should('have.attr', 'aria-label', 'Name: activate to sort column descending');
    //Sorting by Position
    cy.contains('Position').click();
    cy.contains('Position').should('have.attr', 'aria-label', 'Position: activate to sort column descending');
    //Sorting by Office
    cy.contains('Office').click();
    cy.contains('Office').should('have.attr', 'aria-label', 'Office: activate to sort column descending');
    //Sorting by Age
    cy.contains('Age').click();
    cy.contains('Age').should('have.attr', 'aria-label', 'Age: activate to sort column descending');
    //Sorting by Start date
    cy.contains('Start date').click();
    cy.contains('Start date').should('have.attr', 'aria-label', 'Start date: activate to sort column descending');
    //Sorting by Salary
    cy.contains('Salary').click();
    cy.contains('Salary').should('have.attr', 'aria-label', 'Salary: activate to sort column descending');
});

And(/^I select example length 50 and repeat all again$/, function (arg) {
    cy.get('[name="example_length"]').select('50');
    cy.contains('Name').click();
    cy.contains('Name').should('have.attr', 'aria-label', 'Name: activate to sort column descending');
    //Sorting by Position
    cy.contains('Position').click();
    cy.contains('Position').should('have.attr', 'aria-label', 'Position: activate to sort column descending');
    //Sorting by Office
    cy.contains('Office').click();
    cy.contains('Office').should('have.attr', 'aria-label', 'Office: activate to sort column descending');
    //Sorting by Age
    cy.contains('Age').click();
    cy.contains('Age').should('have.attr', 'aria-label', 'Age: activate to sort column descending');
    //Sorting by Start date
    cy.contains('Start date').click();
    cy.contains('Start date').should('have.attr', 'aria-label', 'Start date: activate to sort column descending');
    //Sorting by Salary
    cy.contains('Salary').click();
    cy.contains('Salary').should('have.attr', 'aria-label', 'Salary: activate to sort column descending');
});

And(/^I select example length 100 and repeat all again$/, function (arg) {
    cy.get('[name="example_length"]').select('100');
    cy.contains('Name').click();
    cy.contains('Name').should('have.attr', 'aria-label', 'Name: activate to sort column descending');
    //Sorting by Position
    cy.contains('Position').click();
    cy.contains('Position').should('have.attr', 'aria-label', 'Position: activate to sort column descending');
    //Sorting by Office
    cy.contains('Office').click();
    cy.contains('Office').should('have.attr', 'aria-label', 'Office: activate to sort column descending');
    //Sorting by Age
    cy.contains('Age').click();
    cy.contains('Age').should('have.attr', 'aria-label', 'Age: activate to sort column descending');
    //Sorting by Start date
    cy.contains('Start date').click();
    cy.contains('Start date').should('have.attr', 'aria-label', 'Start date: activate to sort column descending');
    //Sorting by Salary
    cy.contains('Salary').click();
    cy.contains('Salary').should('have.attr', 'aria-label', 'Salary: activate to sort column descending');
});

When(/^I type "London" in search field$/, function (arg) {
    cy.get('[type="search"]').type('London');
});

Then(/^I count "London" length$/, function (arg) {
    cy.get('tbody [role="row"]').its('length').should('eq', 7);
});

And(/^I type "Tokyo" in search field$/, function (arg) {
    cy.get('[type="search"]').clear().type('Tokyo');
});

Then(/^I count "Tokyo" length$/, function (arg) {
    cy.get('tbody [role="row"]').its('length').should('eq', 4);
});

And(/^I click on "Age" and sort by Salary$/, function (arg) {
    cy.contains('Age').click();
});

Then(/^Assert that Age have attribute "activate to sort column descending"$/, function (arg) {
    cy.contains('Age').should('have.attr', 'aria-label', 'Age: activate to sort column descending');
});

