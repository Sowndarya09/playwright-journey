const {test, expect} = require('@playwright/test');
const {BookPage} = require('../pages/BookPage');
const testdata = require('./testdata.json');

test('Should click a book and verify price is under 20', async ({page}) => {
const bookPage = new BookPage(page);
    
    await bookPage.goto();                    // goto
    await bookPage.clickBook(testdata.books.searchBook);       // clickBook
    const price = await bookPage.getPrice();      // getPrice
    
    await expect(price).toBeLessThan(testdata.books.expectedPrice);
} );
