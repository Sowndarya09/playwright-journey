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

//Test 2: POST - create a new User
test('Create a new user', async({request}) =>{

const response = await request.post('https://jsonplaceholder.typicode.com/users', {
    data:{
        name: 'Sownd',
        email: 'sownd@gmail.com',
        username: 'sragu'

    }
});

//Validation
expect(response.status()).toBe(201);

const body = await response.json();
expect(body.name).toBe('Sownd')
expect(body.email).toContain('@');
expect(body.username).toBe('sragu');

});

// TEST 3: PUT - Update a user
test('Should update a user', async ({ request }) => {

    const response = await request.put('https://jsonplaceholder.typicode.com/users/1', {
        data: {
            name: 'sownd',
            email: 'sownd@gmail.com',
        }
    });

    expect(response.status()).toBe(200);
    
    const body = await response.json();
    expect(body.name).toBe('sownd');

});

// TEST 4: DELETE - Delete a user
test('Should delete a user', async ({ request }) => {

    const response = await request.delete('https://jsonplaceholder.typicode.com/users/1');

    // Note: jsonplaceholder returns 200 for DELETE
// In production APIs this should be 204 No Content
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy(); // confirms successful response

});