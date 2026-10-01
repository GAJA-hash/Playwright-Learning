const{test} = require('@playwright/test');
const users = require('../data/users.json');
const LoginPage = require('../pages/LoginPage');
users.forEach(user => {
    test(`Login Test ${user.userName}`, async({ page }) => {

        const loginPage = new LoginPage(page);
        await loginPage.navigateToLoginPage();
        await loginPage.login(user.userName, 'SuperSecretPassword!');
    });
});