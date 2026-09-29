//GJ: I think it pauses the execution at each step

const {test} = require('@playwright/test')

test('Debug Demo', async({page}) => {
    await page.goto("https://playwright.dev");
    await page.pause();
});