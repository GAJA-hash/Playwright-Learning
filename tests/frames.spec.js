const { test } = require("@playwright/test");
test('iFrame Demo', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/iframe');

    const frame =
        page.frameLocator('#mce_0_ifr');

    await frame
        .locator('#tinymce')
        .fill('Learning Playwright');

});