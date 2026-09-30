const {test} = require('@playwright/test');

test('Get Text', async ({page}) => {
    await page.goto(
        'https://the-internet.herokuapp.com/login'
    );

    const text = await page
    .locator('h2')
    .textContent();

    console.log(text);
})