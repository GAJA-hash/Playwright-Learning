const {test} = require('@playwright/test');

//Mouse hover
test('Keybaord actions', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/key_presses');
    await page.keyboard.press(
    'Enter'
);
    await page.keyboard.type(
    'Playwright'
);
await page.keyboard.press(
    'Control+A'
);
});