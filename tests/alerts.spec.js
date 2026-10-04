const { test } = require("@playwright/test");
test('Simple Alert', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    });
    await page.click('text = Click for JS Alert');

});
test('Dismiss Alert', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.dismiss();
    });
    await page.click('text = Click for JS Confirm');

});
test('Prompt Alert', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept('Playwright');
    });
    await page.click('text = Click for JS Prompt');

});


