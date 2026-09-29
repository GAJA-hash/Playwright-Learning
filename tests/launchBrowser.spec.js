const {test }= require('@playwright/test');

test('Launch Browser', async ({ page }) => {

    await page.goto('https://playwright.dev');

})