const {test, expect} = require('@playwright/test');

test ('Enter username', async ({page}) => {
    await page.goto(
'https://the-internet.herokuapp.com/login'
    );
    await page.locator('#username').fill('tomsmith');
    //await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');      //GJ: another method using GetByRole

    await page.locator('#password').fill('SuperSecretPassword!');

    await page.click('button[type="submit"]');

    // await page.locator('button[type = "submit"]').click();            //GJ: another method using locator and click methods

    await expect(page).toHaveURL(/secure/);

    await expect(
        page.locator('#flash'))
    .toContainText('You logged into');

});

