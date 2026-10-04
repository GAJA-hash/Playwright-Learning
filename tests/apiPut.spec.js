const { test, expect } =
require('@playwright/test');

test(
    'Update User',
    async ({ request }) => {

        const response =
            await request.put(
                'https://reqres.in/api/users/2',
                {
                    data: {

                        name: 'Updated User',

                        job: 'Senior SDET'

                    }
                }
            );

        expect(
            response.status()
        ).toBe(200);

    }
);