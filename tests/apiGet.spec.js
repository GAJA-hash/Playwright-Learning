const { test, expect } = require('@playwright/test');

test('Get User', async ({ request }) => {                         //for UI test we use ({ page }), but for API tests we use ({ request })
    const response = await request.get('https://reqres.in/api/users/2');

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    console.log(responseBody);
    //Validating response fields
    expect(responseBody.data.first_name)
        .toBe('Janet');

    //Validate Multiple Fields
    expect(
        responseBody.data.id
    ).toBe(2);

    expect(
        responseBody.data.email
    ).toContain('@');
});


