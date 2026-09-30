const {test, expect} = require('@playwright/test');

test.describe('Assignment', () => {
    
    // ✅ Runs once before all tests in the describe block
    test.beforeAll(async () => {
    console.log("Test initiated");
    });
    
    test.beforeEach(async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/login');
        console.log("Login page opened");
    });

    test('Successful Login', async ({page}) => {
        await page.locator('#username').fill('tomsmith');
        await page.locator('#password').fill('SuperSecretPassword!');
        await page.click('.radius');
        await expect(page).toHaveURL(/secure/);
        await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
        await page.screenshot({path: 'screenshots/assignment7-1.png'});
        console.log("Test 1: Successful login");
    });

    test('Header validation', async ({page}) => {
    await page.locator('#username').fill('tomsmith');
    await page.locator('#password').fill('SuperSecretPassword!');
    await page.click('.radius');     
    await expect(page.getByRole('heading', { name: 'Secure Area', exact: true })).toBeVisible();   // (or)
    // await expect(page.locator('h2')).toContainText('Secure Area');    //(or)
    // await expect(page.getByText('Secure Area')).toBeVisible();
    console.log("Test 2: Header validation");

    });

    test.afterEach(async ({page}) => {
    // ✅ Option 1 — by link text (getByRole recommended)
    await page.getByRole('link', { name: 'Logout' }).click();

    // ✅ Option 2 — by href attribute (CSS)
    // await page.locator('a[href="/logout"]').click();

    // ✅ Option 3 — by text
    // await page.getByText('Logout').click();       
    console.log('Test completed');
    });

} );