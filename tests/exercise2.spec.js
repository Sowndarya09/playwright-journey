const { test, expect } = require('@playwright/test');
const { link } = require('node:fs');
const { title } = require('node:process');

// TEST 1: Check the Books website loads correctly
test('Books site should have correct title', async ({ page }) => {

    // Step 1: Go to the site
    await page.goto('http://books.toscrape.com');

    // Step 2: Check the title
    await expect(page).toHaveTitle(/book/i);

});


// TEST 2: Click on a book and check the detail page loads
test('Should click a book and open detail page', async ({ page }) => {

    // Step 1: Go to the site
    await page.goto('http://books.toscrape.com');

    // Step 2: Find the first book title and click it
    //await page.locator('article h3 a').first().click();
    await page.getByRole('link', {name: /light in the attic/i}).click();

    //Get title and print it in logs
    const title = await page.title();
    console.log('Page title is:', title);

    // Step 3: Check the URL changed - we're on a detail page, using partial url match with hyphens - url doesn't have spaces
    await expect(page).toHaveURL(/light-in-the-attic/i);

});