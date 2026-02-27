const { test, expect } = require('@playwright/test');

// TEST 1: Open Google and check the title
test('Google title should contain Google', async ({ page }) => {
  
  // Step 1: Go to google.com
  await page.goto('https://www.google.com');

  // Step 2: Check that the title contains the word 'Google'
  await expect(page).toHaveTitle(/Google/);

});