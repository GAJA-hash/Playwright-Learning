const {test} = require('@playwright/test');

test('Take Screenshot', async({page}) =>{
    await page.goto('https://playwright.dev');
    await page.screenshot({
        path: 'screenshots/homepage.png'

    });
//full page screenshot
    await page.screenshot({
        path: 'screenshots/fullpage.png',
        fullPage: true
    });

});