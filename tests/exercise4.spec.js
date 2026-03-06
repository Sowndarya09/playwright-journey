const {test} = require('./fixtures')
const {expect} = require('@playwright/test')

test ('Should load books site using fixture', async({booksPage}) => {


  await expect(booksPage).toHaveTitle(/book/i);

});


