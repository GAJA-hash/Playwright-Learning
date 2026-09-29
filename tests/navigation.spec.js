const {test} = require('@playwright/test');

test('Navigation', async({page}) => {
    await page.goto('https://playwright.dev');

    await page.goto('https://microsoft.com');

    await page.goBack();

    await page.goForward();
});