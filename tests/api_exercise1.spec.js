const {test, expect} = require('@playwright/test')

//TEST 1: Get user and verify response
test('Get user and verify response', async({request}) => {

    //Get the response for the url
    const response = await request.get('https://jsonplaceholder.typicode.com/users/1');

//Validate the respponse is ok
await expect(response).toBeOK();

const body = await response.json();

expect(body.id).toBe(1);
expect(body.username).toBeTruthy();
expect(body.email).toContain('@');


});