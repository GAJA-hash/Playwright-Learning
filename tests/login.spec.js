const {test, expect} = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const SecureAreaPage = require('../pages/SecureAreaPage');

test('Successful Login', async({page}) => {
    const loginPage = new LoginPage(page);
    const secureAreaPage = new SecureAreaPage(page);
    // await loginPage.navigateto.LoginPage();
    await loginPage.navigateToLoginPage();
    await loginPage.login('tomsmith', 'SuperSecretPassword!');

    await expect(page).toHaveURL(/secure/);
    await expect(page.locator('h2')).toContainText("Secure Area"); //GJ: Or if you want to use Page class object, use below
    // await expect(await secureAreaPage.getPageHeading()).toContain("Secure Area");  //GJ: Or use Assertions in Page class itself
    //await secure AreaPage.verifyPageLoaded();

});