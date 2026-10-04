const {test} = require('@playwright/test');

//Mouse hover
test('Mouse hover', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/hovers');
    await page.locator('.figure')
    .first()
    .hover();
    await expect(page.locator('h5:text("name: user1")'))
    .toBeVisible();
});

//Mouse Right click
test('Mouse Right click', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/context_menu');
    await page.click('#hot-spot',
    {
        button: 'right'
    }
);
    page.on('dialog',
    dialog => dialog.accept());
});


 //Mouse Right click
test('Double click', async ({ page }) => {
    await page.goto('https://demoqa.com/buttons');
    await page.getByText(
    'Double Click Me'
    ).dblclick();    

    await expect(
    page.locator('#doubleClickMessage'))
    .toContainText(
    'You have done a double click'
);
});