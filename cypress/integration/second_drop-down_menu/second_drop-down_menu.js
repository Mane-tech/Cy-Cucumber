import {Given, And, Then, When} from "cypress-cucumber-preprocessor/steps";

const url = 'https://www.seleniumeasy.com/test/'
Given(/^I open "Bootstrap Date Picker" page$/, function (arg) {
    cy.visit('bootstrap-date-picker-demo.html');
});

And(/^I select date "25"$/, function (arg) {
    cy.get('[placeholder="dd/mm/yyyy"]').click();
    cy.get('.day').contains('25').click();
});

And(/^I select Start date "14"$/, function (arg) {
    cy.get('[placeholder="Start date"]').click();
    cy.get('.day').contains('14').click();
});

And(/^I select End date "25"$/, function (arg) {
    cy.get('[placeholder="End date"]').click();
    cy.get('.day').contains('25').click();
});

Given(/^I open "JQuery Date Picker" page$/, function (arg) {
    cy.visit('jquery-date-picker-demo.html');
});

And(/^I select date "11"$/, function (arg) {
    cy.get('#from').click();
    cy.get('.ui-state-default').contains('11').click();
});

When(/^I select End date "19"$/, function (arg) {
    cy.get('#to').click();
    cy.get('.ui-state-default').contains('19').click();
});

Then(/^Assert that date "19" should be visible$/, function (arg) {
    cy.get('#to').click();
    cy.contains('19').should('be.visible');
});