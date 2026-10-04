const { test, expect } = require('@playwright/test');

test(
    'Create User', async ({ request }) => {
        const response = await request.post(
                'https://reqres.in/api/users',
                {
                    data: {
                        name: 'Gajapathi',
                        job: 'SDET'
                    }
                }
            );

        expect(
            response.status()
        ).toBe(201);

        const body =
            await response.json();

        console.log(body);

    }
);

//Payload Best Practice - create ..payloads/createUser.json and do the following
const payload = require('../payloads/createUser.json');
test(
    'Create User1', async ({ request }) => {
await request.post(
    url,
    {
        data: payload
    });
          expect(
            response.status()
        ).toBe(201);

        const body =
            await response.json();

        console.log(body);
    });