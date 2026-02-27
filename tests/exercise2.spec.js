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


// TEST 3: Click on a book that costs under £20 and check price is visible on the detail page
test('Should click a book that costs under 20 and check price is visible on the detail page', async ({ page }) => {

    // Step 1: Go to the site
    await page.goto('http://books.toscrape.com');

    // Step 2: Find the book title that costs under 20 and click it
    await page.getByTitle('Set Me Free').click();

    //Get title and print it in logs
    const title = await page.title();
    console.log('Page title is:', title);

    // Step 3: Check the URL changed - we're on a detail page, using partial url match with hyphens - url doesn't have spaces
    await expect(page).toHaveURL(/set-me-free/i);

    //Step 4: Verify that the detail page has the price visible
    await expect(page.locator('.col-sm-6.product_main h1')).toBeVisible();

    //Step 5: Validate the price is under 20
    const price = await page.locator('.col-sm-6.product_main p').first().textContent();
    console.log('The Price is: ', price)
    const priceNumber = parseFloat(price.replace(/[^0-9.]/g,''));
    await expect(priceNumber).toBeLessThan(20);

});