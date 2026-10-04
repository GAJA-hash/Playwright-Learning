const {test} = require('@playwright/test');

//Mouse hover
test('Mouse hover', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
    await page.dragAndDrop(
    '#column-a',
    '#column-b'
);
    await expect(
    page.locator(
    '#column-a header'))
    .toContainText('B');
});