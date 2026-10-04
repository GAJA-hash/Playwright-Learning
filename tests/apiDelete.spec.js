const { test, expect } =
    require('@playwright/test');

test(
    'Delete User',
    async ({ request }) => {

        const response =
            await request.delete(
                'https://reqres.in/api/users/2'
            );

        expect(
            response.status()
        ).toBe(204);

        expect(
            response.headers()['content-type']
        )
            .toContain(
                'application/json'
            );

    }
);
