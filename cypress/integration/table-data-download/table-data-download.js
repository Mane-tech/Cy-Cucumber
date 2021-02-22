import {Given, And, Then, When} from "cypress-cucumber-preprocessor/steps";

const url = 'https://www.seleniumeasy.com/test/'

Given(/^I open "Table Data Download" page$/, function (arg) {
    cy.visit('table-data-download-demo.html');
});

When(/^I click on Copy button$/, function (arg) {
    cy.get('[class*="dt-button buttons-copy"]').click();
});

Then(/^Assert that "Copy to clipboard" should be visible$/, function (arg) {
    cy.get('.dt-button-info').should('contain', 'Copy to clipboard');
    cy.get('.dt-button-info').should('contain', 'To cancel, click this message or press escape.');
    cy.get('.dt-button-info').click();
});

And(/^I click on CSV button and download the file$/, function (arg) {
    cy.get('[class*="dt-button buttons-csv"]').click();
    cy.downloadFile('https://www.seleniumeasy.com/test/table-data-download-demo.html#',
                    'mydownloads','CSVfile.csv', 'MyCustomAgentName');
});

And(/^I click on Excel button and download the file$/, function (arg) {
    cy.get('[class*="dt-button buttons-excel"]').click();
    cy.downloadFile('https://www.seleniumeasy.com/test/table-data-download-demo.html#',
                    'mydownloads','Excelfile.xlsx', 'MyCustomAgentName');
});

And(/^I click on PDF button and download the file$/, function (arg) {
    cy.get('[class*="dt-button buttons-pdf"]').click();
    cy.downloadFile('https://www.seleniumeasy.com/test/table-data-download-demo.html#',
                    'mydownloads','PDFfile.pdf', 'MyCustomAgentName');
});

And(/^I click on Print button and download the file$/, function (arg) {
    cy.get('[class*="dt-button buttons-print"]').click();
    cy.downloadFile('https://www.seleniumeasy.com/test/table-data-download-demo.html#',
                    'mydownloads','PrintFile');
});

And(/^I type "london" in search field$/, function (arg) {
    cy.get('[type="search"]').type('london');
});

And(/^I count "london" length$/, function (arg) {
    cy.get('tbody [role="row"]').its('length').should('eq', 6);
});

And(/^I click on Print button and download the file$/, function (arg) {
    cy.get('[class*="dt-button buttons-print"]').click();
    cy.downloadFile('https://www.seleniumeasy.com/test/table-data-download-demo.html#',
                    'mydownloads','PrintSortingFile0');
});

When(/^I click on "Copy" button$/, function (arg) {
    cy.get('[class*="dt-button buttons-copy"]').click();
});

Then(/^Assert that "Copy to clipboard" should be visible$/, function (arg) {
    cy.get('.dt-button-info').should('contain', 'Copy to clipboard');
    cy.get('.dt-button-info').should('contain', 'To cancel, click this message or press escape.');
    cy.get('.dt-button-info').click();
});

And(/^I navigate to second page$/, function (arg) {
    cy.get('[type="search"]').clear();
    cy.get('.paginate_button').contains('2').click();
});

When(/^I click on "Copy" button$/, function (arg) {
    cy.get('[class*="dt-button buttons-copy"]').click();
});

Then(/^Assert that "Copy to clipboard" should be visible$/, function (arg) {
    cy.get('.dt-button-info').should('contain', 'Copy to clipboard');
    cy.get('.dt-button-info').should('contain', 'To cancel, click this message or press escape.');
    cy.get('.dt-button-info').click();
});

And(/^I type "22" in search field$/, function (arg) {
    cy.get('[type="search"]').type('22');
});

And(/^I count items length$/, function (arg) {
    cy.get('tbody [role="row"]').its('length').should('eq', 3);
});

And(/^I click on CSV button and download the file$/, function (arg) {
    cy.get('[class*="dt-button buttons-csv"]').click();
    cy.downloadFile('https://www.seleniumeasy.com/test/table-data-download-demo.html#',
                    'mydownloads','CSVfile0.csv', 'MyCustomAgentName');
});

And(/^I click on Excel button and download the file$/, function (arg) {
    cy.get('[class*="dt-button buttons-excel"]').click();
    cy.downloadFile('https://www.seleniumeasy.com/test/table-data-download-demo.html#',
                    'mydownloads','Excelfile0.xlsx', 'MyCustomAgentName');
});

And(/^I click on "Office" and sort by Office$/, function (arg) {
    cy.contains('Office').click();
});

And(/^I click on Excel button and download the file$/, function (arg) {
    cy.get('[class*="dt-button buttons-excel"]').click();
    cy.downloadFile('https://www.seleniumeasy.com/test/table-data-download-demo.html#',
                    'mydownloads','Excelfile1.xlsx', 'MyCustomAgentName');
});

And(/^I click on "Salary" and sort by Salary$/, function (arg) {
    cy.get('[type="search"]').clear();
    cy.contains('Salary').click();
});

And(/^I click on CSV button and download the file$/, function (arg) {
    cy.get('[class*="dt-button buttons-csv"]').click();
    cy.downloadFile('https://www.seleniumeasy.com/test/table-data-download-demo.html#',
                    'mydownloads','CSVfile1.csv', 'MyCustomAgentName');
});

And(/^I click on Excel button and download the file$/, function (arg) {
    cy.get('[class*="dt-button buttons-excel"]').click();
    cy.downloadFile('https://www.seleniumeasy.com/test/table-data-download-demo.html#',
                    'mydownloads','Excelfile2.xlsx', 'MyCustomAgentName');
});

And(/^I click on PDF button and download the file$/, function (arg) {
    cy.get('[class*="dt-button buttons-pdf"]').click();
    cy.downloadFile('https://www.seleniumeasy.com/test/table-data-download-demo.html#',
                    'mydownloads','PDFfile0.pdf', 'MyCustomAgentName');
});

And(/^I click on Print button and download the file$/, function (arg) {
    cy.get('[class*="dt-button buttons-print"]').click();
    cy.downloadFile('https://www.seleniumeasy.com/test/table-data-download-demo.html#',
                    'mydownloads','PrintFile2');
});