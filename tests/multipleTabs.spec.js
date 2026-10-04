const { test } = require('@playwright/test')

test('Multiple Tabs',
async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/windows');

    const [newPage] = await Promise.all([

        page.waitForEvent('popup'),

        page.click('text=Click Here')
    ]);

    console.log(
        await newPage.title()
    );

});