class BookPage{

    constructor(page){
        this.page = page;
    }

    //Goto the page url
     async goto(){
        await this.page.goto('http://books.toscrape.com');
    }

    //Click the book title variable passed
    async clickBook(bookTitle){
        await this.page.getByTitle(bookTitle).click();
    }

    //Get price and convert to float
    async getPrice(){
    const price = await this.page.locator('.col-sm-6.product_main p').first().textContent();
    return parseFloat(price.replace(/[^0-9.]/g, ''));
    }
}

module.exports = {BookPage};