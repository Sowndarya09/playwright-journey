require('dotenv').config();
const { Given, When, Then, After } = require('@cucumber/cucumber');
const { chromium, expect } = require('@playwright/test');

Given('the books website is launched', async function() {
    this.browser = await chromium.launch();
    this.page = await this.browser.newPage();
    await this.page.goto(process.env.BASE_URL);
});


When('the user clicks on the book {string}', async function(bookTitle) {
    await this.page.getByTitle(bookTitle).click();
});


Then('the book detail page should open {string}', async function(bookTitle) {
    const urlPart = bookTitle.toLowerCase().replace(/ /g, '-');
    await expect(this.page).toHaveURL(new RegExp(urlPart, 'i'));
});

Then('the price should be less than {int}', async function(validateprice) {
    const priceText = await this.page.locator('.col-sm-6.product_main p').first().textContent();
    const priceNumber = parseFloat(priceText.replace(/[^0-9.]/g,''));
    expect(priceNumber).toBeLessThan(validateprice);
});

After(async function() {
    await this.browser.close();
});