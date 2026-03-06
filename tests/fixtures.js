
const {test: base} = require('@playwright/test');

//Extend base test with our custom fixtures
const test = base.extend({

    //Fixtures: provides a page already on the books website
    booksPage: async({page}, use) =>{
        // SETUP - runs before the test
        await page.goto('/');
        console.log('Fixture: navigated to books site');
        
        // Hand control to the test
        await use(page);
        
        // TEARDOWN - runs after the test
        console.log('Fixture: cleaning up');
        await page.close();

    } 



});

module.exports = { test };