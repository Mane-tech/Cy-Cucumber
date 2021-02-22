import { Given, And, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'https://www.seleniumeasy.com/test/'
Given(/^I open Home page$/, function (arg) {
    cy.visit(url);
});

And(/^I click on "Input Forms" menu$/, function (arg) {
    cy.get('[title="Close"]').click();
    cy.contains('Input Forms').click();
});

And(/^I verify each submenu title$/, function (arg) {
    [
        {submenu: 'Simple Form Demo'},
        {submenu: 'Checkbox Demo'},
        {submenu: 'Radio Buttons Demo'},
        {submenu: 'Select Dropdown List'},
        {submenu: 'Input Form Submit'},
        {submenu: 'Ajax Form Submit'},
        {submenu: 'JQuery Select dropdown'}
    ].forEach(menu => {
        cy.get('.dropdown-menu').should('contain', menu.submenu);;
    });
});

Then(/^I verify each submenu url$/, function (arg) {
    [
        {submenu: 'Simple Form Demo',
            url: 'basic-first-form-demo.html'},
        {submenu: 'Checkbox Demo',
            url: 'basic-checkbox-demo.html'},
        {submenu: 'Radio Buttons Demo',
            url: 'basic-radiobutton-demo.html'},
        {submenu: 'Select Dropdown List',
            url: 'basic-select-dropdown-demo.html'},
        {submenu: 'Input Form Submit',
            url: 'input-form-demo.html'},
        {submenu: 'Ajax Form Submit',
            url: 'ajax-form-submit-demo.html'},
        {submenu: 'JQuery Select dropdown',
            url: 'jquery-dropdown-search-demo.html'}
    ].forEach(menu => {
    cy.get('.dropdown-menu').contains(menu.submenu).click({force: true});
    cy.url().should('contain', menu.url);
    });
});

Given(/^I open Home page$/, function (arg) {
    cy.visit(url);
});

And(/^I click on "Date pickers" menu$/, function (arg) {
    cy.get('[title="Close"]').click();
    cy.contains('Date pickers').click();
});

And(/^I verify each submenu title$/, function (arg) {
    [
        {submenu: 'Bootstrap Date Picker'},
        {submenu: 'JQuery Date Picker'}
    ].forEach(menu => {
        cy.get('.dropdown-menu').should('contain', menu.submenu);;
    });
});

Then(/^I verify each submenu url$/, function (arg) {
    [
        {submenu: 'Bootstrap Date Picker', url: 'bootstrap-date-picker-demo.html'},
        {submenu: 'JQuery Date Picker', url: 'jquery-date-picker-demo.html'},
    ].forEach(menu => {
        cy.get('.dropdown-menu').should('contain', menu.submenu);
        cy.get('.dropdown-menu').contains(menu.submenu).click({force: true});
        cy.url().should('contain', menu.url);
    });
});

Given(/^I open Home page$/, function (arg) {
    cy.visit(url);
});

And(/^I click on "Table" menu$/, function (arg) {
    cy.get('[title="Close"]').click();
    cy.contains('Table').click();
});

And(/^I verify each submenu title$/, function (arg) {
    [
        {submenu: 'Table Pagination'},
        {submenu: 'Table Data Search'},
        {submenu: 'Table Filter'},
        {submenu: 'Table Sort & Search'},
        {submenu: 'Table Data Download'}
    ].forEach(menu => {
        cy.get('.dropdown-menu').should('contain', menu.submenu);;
    });
});

Then(/^I verify each submenu url$/, function (arg) {
    [
        {submenu: 'Table Pagination', url: 'table-pagination-demo.html'},
        {submenu: 'Table Data Search', url:'table-search-filter-demo.html'},
        {submenu: 'Table Filter', url: 'table-records-filter-demo.html'},
        {submenu: 'Table Sort & Search', url: 'table-sort-search-demo.html'},
        {submenu: 'Table Data Download', url: 'table-data-download-demo.html'}
    ].forEach(menu => {
        cy.get('.dropdown-menu').should('contain', menu.submenu);
        cy.get('.dropdown-menu').contains(menu.submenu).click({force: true});
        cy.url().should('contain', menu.url);
    });
});