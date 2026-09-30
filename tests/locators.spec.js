const{test} = require('@playwright/test');

test('Locator Demo', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/login');

    await page.locator('#username').fill('test'); //Uses CSS selector and ID name

    // 8. getByRole  ── ARIA role "textbox" + accessible name from the <label>
test('Username - getByRole', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
});

    
//Playwright Preferred Locators 
// getByRole()
// getByLabel()
// getByPlaceholder()
// getByText()
//CSS
//XPath
await page.getByRole(
    'button',
    {
        name: 'Login'
    }
).click();

})