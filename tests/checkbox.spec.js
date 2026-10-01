const {test, expect} = require('@playwright/test')

test('Check checkbox', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');

    await page.locator('input[type="checkbox"]').first().check();

    //await expect(page.locator('input[type="checkbox"]').first()).toBeChecked();                
    const checkbox = page.locator('input[type="checkbox"]').first();
    await expect(checkbox).toBeChecked();  

});