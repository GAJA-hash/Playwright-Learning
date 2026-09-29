const {test} = require ('@playwright/test');

test('Get current URL', async({page}) => {
    await page.goto('https://playwright.dev');

    console.log(await page.url());

});