const {test, expect} = require('@playwright/test');
const {BookPage} = require('../pages/BookPage');

test('Should click a book and verify price is under 20', async ({page}) => {
const bookPage = new BookPage(page);
    
    await bookPage.goto();                    // goto
    await bookPage.clickBook('Set Me Free');       // clickBook
    const price = await bookPage.getPrice();      // getPrice
    
    await expect(price).toBeLessThan(20);
} );
