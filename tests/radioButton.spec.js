const{test, expect} = require('@playwright/test');

test('Check Radiobutton', async({page}) => {
    await page.goto('https://demoqa.com/radio-button');

    await page.click('label[for="yesRadio"]');

    await expect(page.locator('.text-success')).toHaveText('Yes');


})