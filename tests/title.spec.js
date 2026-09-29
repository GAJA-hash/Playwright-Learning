const {test, expect} =require('@playwright/test');

test('verify Playwright Title', async({page}) => {
    await page.goto('https://playwright.dev');

    await expect(page).toHaveTitle(/Playwright/);



});
